from django.urls import include, path
from rest_framework import routers

from .views import ItemViewSet
from .views import CategoryViewSet

router = routers.DefaultRouter()
router.register(r'items', ItemViewSet)
router.register(r'categories', CategoryViewSet)
urlpatterns = [

    path('api/', include(router.urls)),


]
