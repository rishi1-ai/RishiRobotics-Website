# Django Backend Integration Guide

This guide explains how to integrate the Rishi Robotics frontend with a Django REST API backend.

## Architecture Overview

```
┌─────────────────┐         ┌─────────────────┐         ┌──────────────┐
│   Next.js       │   HTTP  │   Django REST   │   ORM   │  PostgreSQL  │
│   Frontend      │ ◄─────► │   Framework     │ ◄─────► │   Database   │
└─────────────────┘         └─────────────────┘         └──────────────┘
```

## Django Backend Setup

### 1. Install Required Packages

```bash
pip install django djangorestframework django-cors-headers psycopg2-binary
```

### 2. Django Settings Configuration

```python
# settings.py

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'courses',  # Your app
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# CORS Configuration
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://your-production-domain.com",
]

# REST Framework Configuration
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20,
}

# Database Configuration (use existing Supabase or new PostgreSQL)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_db_name',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'your_db_host',
        'PORT': '5432',
    }
}
```

### 3. Django Models

```python
# courses/models.py

from django.db import models
import uuid

class Course(models.Model):
    DIFFICULTY_CHOICES = [
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    icon = models.CharField(max_length=50, default='BookOpen')
    difficulty_level = models.CharField(max_length=20, choices=DIFFICULTY_CHOICES, default='beginner')
    order_index = models.IntegerField()
    color = models.CharField(max_length=7, default='#64748b')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order_index']

    def __str__(self):
        return self.title


class Lesson(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='lessons')
    title = models.CharField(max_length=200)
    slug = models.SlugField()
    content = models.TextField()
    order_index = models.IntegerField()
    duration_minutes = models.IntegerField(default=15)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order_index']
        unique_together = ['course', 'slug']

    def __str__(self):
        return f"{self.course.title} - {self.title}"


class CodeExample(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='code_examples')
    title = models.CharField(max_length=200)
    code = models.TextField()
    language = models.CharField(max_length=50, default='python')
    output = models.TextField(null=True, blank=True)
    explanation = models.TextField(null=True, blank=True)
    order_index = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order_index']

    def __str__(self):
        return self.title


class Project(models.Model):
    DIFFICULTY_CHOICES = [
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='projects')
    title = models.CharField(max_length=200)
    description = models.TextField()
    difficulty = models.CharField(max_length=20, choices=DIFFICULTY_CHOICES, default='beginner')
    requirements = models.TextField(null=True, blank=True)
    instructions = models.TextField()
    order_index = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order_index']

    def __str__(self):
        return self.title
```

### 4. Django Serializers

```python
# courses/serializers.py

from rest_framework import serializers
from .models import Course, Lesson, CodeExample, Project


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class CodeExampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeExample
        fields = '__all__'


class LessonSerializer(serializers.ModelSerializer):
    code_examples = CodeExampleSerializer(many=True, read_only=True)

    class Meta:
        model = Lesson
        fields = '__all__'


class LessonListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ['id', 'title', 'slug', 'order_index', 'duration_minutes']


class CourseDetailSerializer(serializers.ModelSerializer):
    lessons = LessonListSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
```

### 5. Django Views

```python
# courses/views.py

from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Course, Lesson, CodeExample, Project
from .serializers import (
    CourseSerializer, CourseDetailSerializer,
    LessonSerializer, LessonListSerializer,
    CodeExampleSerializer, ProjectSerializer
)


class CourseViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    lookup_field = 'slug'
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description']
    ordering_fields = ['order_index', 'created_at']

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return CourseDetailSerializer
        return CourseSerializer


class LessonViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['course']

    @action(detail=True, methods=['get'])
    def code_examples(self, request, pk=None):
        lesson = self.get_object()
        examples = lesson.code_examples.all()
        serializer = CodeExampleSerializer(examples, many=True)
        return Response(serializer.data)


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['course', 'difficulty']
    search_fields = ['title', 'description']
```

### 6. Django URLs

```python
# courses/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, LessonViewSet, ProjectViewSet

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'lessons', LessonViewSet)
router.register(r'projects', ProjectViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
```

```python
# main urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('courses.urls')),
    path('api-auth/', include('rest_framework.urls')),
]
```

## Frontend Integration

### 1. Create API Service Layer

```javascript
// lib/api.js

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function getCourses() {
  const response = await fetch(`${API_BASE_URL}/courses/`);
  if (!response.ok) throw new Error('Failed to fetch courses');
  return response.json();
}

export async function getCourse(slug) {
  const response = await fetch(`${API_BASE_URL}/courses/${slug}/`);
  if (!response.ok) throw new Error('Failed to fetch course');
  return response.json();
}

export async function getLessons(courseId) {
  const response = await fetch(`${API_BASE_URL}/lessons/?course=${courseId}`);
  if (!response.ok) throw new Error('Failed to fetch lessons');
  return response.json();
}

export async function getLesson(lessonId) {
  const response = await fetch(`${API_BASE_URL}/lessons/${lessonId}/`);
  if (!response.ok) throw new Error('Failed to fetch lesson');
  return response.json();
}

export async function getProjects(courseId = null) {
  const url = courseId
    ? `${API_BASE_URL}/projects/?course=${courseId}`
    : `${API_BASE_URL}/projects/`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch projects');
  return response.json();
}
```

### 2. Update Pages to Use Django API

```javascript
// app/page.js (Updated)

import { getCourses } from '@/lib/api';

async function fetchCourses() {
  return await getCourses();
}

export default async function Home() {
  const courses = await fetchCourses();
  // ... rest of the component
}
```

### 3. Environment Variables

```env
# .env.local

NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## Data Migration from Supabase to Django

### Option 1: Export/Import via JSON

```bash
# Export from Supabase (using psql)
pg_dump -h your-supabase-host -U postgres -d postgres -t courses -t lessons -t code_examples -t projects --data-only --column-inserts > data.sql

# Import to Django database
python manage.py loaddata data.sql
```

### Option 2: Django Management Command

```python
# courses/management/commands/import_supabase_data.py

from django.core.management.base import BaseCommand
from supabase import create_client
from courses.models import Course, Lesson, CodeExample, Project

class Command(BaseCommand):
    help = 'Import data from Supabase to Django'

    def handle(self, *args, **options):
        supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

        # Import courses
        courses_data = supabase.table('courses').select('*').execute()
        for course_data in courses_data.data:
            Course.objects.update_or_create(
                id=course_data['id'],
                defaults=course_data
            )

        self.stdout.write(self.style.SUCCESS('Successfully imported data'))
```

## API Endpoints Reference

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/courses/` | GET | List all courses |
| `/api/courses/{slug}/` | GET | Get course details with lessons |
| `/api/lessons/` | GET | List all lessons |
| `/api/lessons/{id}/` | GET | Get lesson details with code examples |
| `/api/projects/` | GET | List all projects |
| `/api/projects/{id}/` | GET | Get project details |

## Authentication (Optional)

### JWT Authentication

```bash
pip install djangorestframework-simplejwt
```

```python
# settings.py

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
}

from datetime import timedelta

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
}
```

## Testing the API

```bash
# Start Django server
python manage.py runserver

# Test endpoints
curl http://localhost:8000/api/courses/
curl http://localhost:8000/api/courses/python/
curl http://localhost:8000/api/lessons/
```

## Deployment Considerations

1. **Database**: Use managed PostgreSQL (AWS RDS, DigitalOcean, or continue with Supabase)
2. **Django Backend**: Deploy on Heroku, DigitalOcean, or AWS
3. **Frontend**: Deploy on Vercel or Netlify
4. **Static Files**: Use AWS S3 or similar for media files
5. **CORS**: Update CORS settings for production domains
6. **Environment Variables**: Set properly in production

## Next Steps

1. Set up Django project and create models
2. Run migrations: `python manage.py migrate`
3. Create admin user: `python manage.py createsuperuser`
4. Import data from Supabase or create new content
5. Update frontend to use Django API endpoints
6. Add user authentication and progress tracking
7. Implement quiz system
8. Add user profiles and certificates

## Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

---

For questions or issues with integration, refer to the official documentation or community forums.
