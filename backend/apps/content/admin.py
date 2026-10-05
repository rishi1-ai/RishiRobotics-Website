from django.contrib import admin
from django.db import models
from markdownx.widgets import AdminMarkdownxWidget # Import the widget
from .models import Category, Article
from .models import PracticeQuestion

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'is_published', 'updated_at')
    list_filter = ('is_published', 'category')
    search_fields = ('title', 'content')
    prepopulated_fields = {'slug': ('title',)}
    
    # This line tells Django: "Use the fancy editor for the 'content' field"
    formfield_overrides = {
        models.TextField: {'widget': AdminMarkdownxWidget},
    }

@admin.register(PracticeQuestion)
class PracticeQuestionAdmin(admin.ModelAdmin):
    list_display = ('id', 'category', 'question')
    list_display_links = ('id', 'question')