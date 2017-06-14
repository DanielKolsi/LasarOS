'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
  function ($scope, Global) {
    $scope.global = Global;
    $scope.sites = [{
      'name': 'makeapoint',
      'text': 'Makeapoint is a platform to craft and fine-tune ideas and messages providing a graphical experience which brough an offline methodlogy online',
      'author': 'Linnovate',
      'link': 'http://www.linnovate.net',
      'image': '/meanStarter/assets/img/makeapoint.png'
    }, {
      'name': 'Cactus Intranet',
      'text': 'Cactus Intranet is an enterprise social network with features like real-time newsfeed, notifications, groups, events, polls, referral system etc. The system has role based permission system, allowing different stakeholders access and controls relevant to them.',
      'author': 'QED42',
      'link': 'http://www.qed42.com',
      'image': '/meanStarter/assets/img/cactus.png'
    }];
    $scope.packages = {
      'gmap': {
        'name': 'gmap',
        'text': 'gmap lets you add geographical information to your applications objects',
        'author': 'Linnovate',
        'link': 'http://www.qed42.com',
        'image': '/meanStarter/assets/img/gmap.png'
      },
      'upload': {
        'name': 'Upload',
        'text': 'Upload lets you add upload functionality to MEAN stack',
        'author': 'Linnovate',
        'link': 'http://www.linnovate.net',
        'image': 'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
      },
      'socket': {
        'name': 'Socket',
        'text': 'Socket.io support',
        'author': 'Linnovate',
        'link': 'http://www.linnovate.net',
        'image': 'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
      }
    };

    $scope.docs = [{
      text: 'You, dear patient',
      link: 'meanStarter/views/users/register.html'
    }, {
      text: 'My own story',
      link: 'http://www.faceop.com'
    }, {
      text: 'Official information',
      link: 'http://www.faceop.com'
    }, {
      text: 'Medication',
      link: 'http://www.faceop.com'
    }, {
      text: 'this.huume = huume',
      link: 'http://www.faceop.com'
    }, {
      text: 'Risk factors',
      link: 'http://www.faceop.com'
    }];

    $scope.communities = [{
      link: 'n/a',
      text: 'Lasaros FB group',
      icon: 'facebook'
    }, {
      link: 'n/a',
      text: 'Issues, Support, Code discussions and PRs',
      icon: 'facebook'
    }, {
      link: 'n/a',
      text: 'Support and Technical discussions',
      icon: 'twitter'
    }, {
      link: 'n/a',
      text: 'Video support, shared coding and to meet the people behind mean.io',
      icon: 'hangout'
    }];

    $scope.$watch(function () {
      for (var i = 0; i < $scope.sites.length; i += 1) {
        if ($scope.sites[i].active) {
          return $scope.sites[i];
        }
      }
    }, function (currentSlide, previousSlide) {
      if (currentSlide !== previousSlide) {
        console.log('currentSlide:', currentSlide);
      }
    });
  }
]);
