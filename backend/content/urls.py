from django.urls import path
from . import views

urlpatterns = [
    path('articles/', views.get_articles),               # List all articles
    path('articles/<slug:slug>/', views.get_article_detail), # Get one specific article
    path('categories/', views.get_categories),
]