"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENDPOINT_CONFIG = exports.endpoints = exports.BASE_URL = void 0;
exports.BASE_URL = "http://134.122.27.174/api/v1";
var endpoints;
(function (endpoints) {
    endpoints["health"] = "health";
    endpoints["login"] = "login";
    endpoints["register"] = "register";
    //posts
    endpoints["getPosts"] = "getPosts";
    endpoints["getPost"] = "getPost";
    endpoints["createPost"] = "createPost";
    endpoints["deletePost"] = "deletePost";
    endpoints["updatePost"] = "updatePost";
    //comments
    endpoints["createComment"] = "createComment";
    endpoints["postCommentList"] = "postCommentList";
    endpoints["updateComment"] = "updateComment";
    endpoints["deleteComment"] = "deleteComment";
    //likes
    endpoints["addLike"] = "addLike";
    endpoints["deleteLike"] = "deleteLike";
})(endpoints || (exports.endpoints = endpoints = {}));
exports.ENDPOINT_CONFIG = {
    [endpoints.health]: {
        url: `${exports.BASE_URL}/healthz`,
        method: "GET",
        auth: false,
    },
    [endpoints.login]: {
        url: `${exports.BASE_URL}/users/login`,
        method: "POST",
        auth: false,
    },
    [endpoints.register]: {
        url: `${exports.BASE_URL}/users/register`,
        method: "POST",
        auth: false,
    },
    [endpoints.getPosts]: {
        url: `${exports.BASE_URL}/posts`,
        method: "GET",
        auth: false,
    },
    [endpoints.getPost]: {
        url: `${exports.BASE_URL}/posts/:postId`,
        method: "GET",
        auth: false,
    },
    [endpoints.createPost]: {
        url: `${exports.BASE_URL}/posts`,
        method: "POST",
        auth: true,
    },
    [endpoints.updatePost]: {
        url: `${exports.BASE_URL}/posts/:postId`,
        method: "PATCH",
        auth: true,
    },
    [endpoints.deletePost]: {
        url: `${exports.BASE_URL}/posts/:postId`,
        method: "DELETE",
        auth: true,
    },
    [endpoints.postCommentList]: {
        url: `${exports.BASE_URL}/comments/:postId`,
        method: "GET",
        auth: true,
    },
    [endpoints.createComment]: {
        url: `${exports.BASE_URL}/comments`,
        method: "POST",
        auth: true,
    },
    [endpoints.updateComment]: {
        url: `${exports.BASE_URL}/comments/:commentId`,
        method: "PATCH",
        auth: true,
    },
    [endpoints.deleteComment]: {
        url: `${exports.BASE_URL}/comments/:commentId`,
        method: "DELETE",
        auth: true,
    },
    [endpoints.addLike]: {
        url: `${exports.BASE_URL}/:postId`,
        method: "POST",
        auth: true,
    },
    [endpoints.deleteLike]: {
        url: `${exports.BASE_URL}/:postId`,
        method: "DELETE",
        auth: true,
    },
};
