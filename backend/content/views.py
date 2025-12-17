from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Article, Category
from .serializers import ArticleListSerializer, ArticleDetailSerializer, CategorySerializer

@api_view(['GET'])
def get_articles(request):
    # Start with ALL published articles
    articles = Article.objects.filter(is_published=True).order_by('-created_at')

    # Check if the frontend sent a 'category' ID
    category_id = request.query_params.get('category')
    
    # If yes, filter the list
    if category_id:
        articles = articles.filter(category_id=category_id)

    serializer = ArticleListSerializer(articles, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_article_detail(request, slug):
    article = get_object_or_404(Article, slug=slug, is_published=True)
    serializer = ArticleDetailSerializer(article)
    return Response(serializer.data)

@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)