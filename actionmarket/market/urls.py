from django.conf.urls import patterns, include, url

urlpatterns = patterns('actionmarket.market.views',
    url(r'^$', 'home', name='home'),
    url(r'^logout/$', 'logout', name='logout'),
)
