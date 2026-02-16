from rest_framework import serializers
from .models import Article, Category

# 1. New Mini Serializer for the Sidebar
class SidebarArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'slug']

# 2. Updated Category Serializer (Now includes articles!)
class CategorySerializer(serializers.ModelSerializer):
    # This fetches all articles connected to this category
    # Note: 'article_set' is the default name Django gives to the reverse relationship
    articles = SidebarArticleSerializer(many=True, read_only=True, source='article_set')

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'articles']

# 3. Existing Serializers (No changes needed below)
class ArticleListSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    class Meta:
        model = Article
        fields = ['id', 'title', 'slug', 'category', 'created_at', 'is_published']

class ArticleDetailSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    class Meta:
        model = Article
        fields = ['id', 'title', 'slug', 'category', 'content', 'created_at', 'updated_at']