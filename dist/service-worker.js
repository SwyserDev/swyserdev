/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["css/bootstrap.css","3c1b3e10dcd77dc2e3832bb5ed3dad23"],["css/bootstrap.min.css","5911e6c67937033473fe0e5f5baf9265"],["css/custom.css","6f3783c33a91f8aba2c92f537e952745"],["css/freelancer.css","539f8c5a1c645441bd2724b2eab13af2"],["font-awesome/css/font-awesome.css","701a716398620a5f24f4b15bd312b934"],["font-awesome/css/font-awesome.min.css","feda974a77ea5783b8be673f142b7c88"],["font-awesome/fonts/fontawesome-webfont.eot","7149833697a959306ec3012a8588dcfa"],["font-awesome/fonts/fontawesome-webfont.svg","65bcbc899f379216109acd0b6c494618"],["font-awesome/fonts/fontawesome-webfont.ttf","c4668ed2440df82d3fd2f8be9d31d07d"],["font-awesome/fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["img/portfolio/agrisuite-1.png","3f104879709d1741e74601d5b014138c"],["img/portfolio/agrisuite-2.png","898405018f718555e1ec8a6d33a290f1"],["img/portfolio/agrisuite-3.png","e47b549adc87f38f4cc7e33dcbb0f86e"],["img/portfolio/agrisuite-4.png","4e1df6a130114edd4b12c33134f53cf5"],["img/portfolio/aise_esuite-1.png","65075ce149eb379b536571ebe5193508"],["img/portfolio/aise_esuite-2.png","ce519cb60fbce61cf958dcbbb3122dd9"],["img/portfolio/aise_esuite-3.png","968c2ad2d4c4b5960a7ec0c17373dcdc"],["img/portfolio/esuite1-1.png","53bd4d67040dbf36b11481e06a08313f"],["img/portfolio/esuite1-2.png","6dcaed819ea1073c5e6649582ee121d0"],["img/portfolio/esuite1-3.png","0ff16a6a6dc2c74a6299b0f7a537cdc6"],["img/portfolio/esuite2-1.png","075714b78cad347afa395b6a8b910169"],["img/portfolio/esuite2-2.png","5b770769947b39cbd088d9331b98491f"],["img/portfolio/esuite2-3.png","b88f9c63f5633f33f70267ce7c3356da"],["img/portfolio/firesale1-1.png","d40e4bcf3b354b3d30837f1af286d5c9"],["img/portfolio/game.png","ecddd2d9cf155c60354bc78ace746900"],["img/portfolio/github.jpg","02f111c5d409c024ba76af77f971b1a8"],["img/portfolio/m6-1.png","8fd65090f614eb9348039dcf5884a838"],["img/portfolio/m6-2.png","5e84b845f2521ce4b5e87f21e6427c64"],["img/portfolio/m6-3.png","5b50772bb97ba4f0848519ce983949bd"],["img/portfolio/m6-4.png","4a414074dbddcebd7d5b88d895073798"],["img/portfolio/m6-5.png","584a14674f3f894b4d92d128819c3793"],["img/portfolio/m6-6.png","6ff8e18b887f09f88baa64ad32797862"],["img/portfolio/m6-7.png","dada819bb45cc6723839d61949137d03"],["img/portfolio/mobileBottom.png","d67bb206bd7ddf4cb1a933c3345d5df7"],["img/portfolio/mobileLeft.png","06d13b9d736de124ac51cd61fb000c9c"],["img/portfolio/mobileRight.png","ff9a0fdbf63591d63b92f9ca6a18163a"],["img/portfolio/mobileTop.png","81e56429f83a44e8f5ab260e72ef3196"],["img/portfolio/portal-1.png","a726ee6f43e469c6a3fab116c66476ad"],["img/portfolio/portal-2.png","84f64f60848593ddf4b90f72001ad261"],["img/portfolio/portal-3.png","21cada2055d7819924dee2919943060a"],["img/portfolio/portal-4.png","417493fbdf74f6b09248938f2b3ab63f"],["img/portfolio/portal-5.png","cb5996bbb84672f81b12c1a8c4c89a2f"],["img/profile.png","6b6e77bde8269e031fe8f429da6cbf08"],["img/profilePic.png","b59fa133ec3013cb7af5d6f3e1769e5c"],["index.html","b79b27bd3b1454c18022c8d72fc0625a"],["js/bootstrap.js","66b9c71d2d6acd9eac02e2f2746e5ef7"],["js/bootstrap.min.js","905a7846cd1c7dcccf6da95133de4cff"],["js/cbpAnimatedHeader.js","052b1f15f4134f631a3cb6c60f927f0d"],["js/cbpAnimatedHeader.min.js","a2a35f1fd7ba88e6339bdfc6fde4cabb"],["js/classie.js","6c7014610636ede3486fd4f59ad8a258"],["js/contact_me.js","e11896dd19e41b04ba8fd67939d68d03"],["js/freelancer.js","5c975620faa57ced11f7ee494aa8c110"],["js/jqBootstrapValidation.js","3fd9f844461370b350431904eb0e92ee"],["js/jquery.js","d563745539f84c8772757555a8bfb662"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







