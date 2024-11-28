"use strict";
var _a;
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
exports.ENDPOINT_CONFIG = (_a = {},
    _a[endpoints.health] = {
        url: "".concat(exports.BASE_URL, "/healthz"),
        method: "GET",
        auth: false,
    },
    _a[endpoints.login] = {
        url: "".concat(exports.BASE_URL, "/users/login"),
        method: "POST",
        auth: false,
    },
    _a[endpoints.register] = {
        url: "".concat(exports.BASE_URL, "/users/register"),
        method: "POST",
        auth: false,
    },
    _a[endpoints.getPosts] = {
        url: "".concat(exports.BASE_URL, "/posts"),
        method: "GET",
        auth: false,
    },
    _a[endpoints.getPost] = {
        url: "".concat(exports.BASE_URL, "/posts/:postId"),
        method: "GET",
        auth: false,
    },
    _a[endpoints.createPost] = {
        url: "".concat(exports.BASE_URL, "/posts"),
        method: "POST",
        auth: true,
    },
    _a[endpoints.updatePost] = {
        url: "".concat(exports.BASE_URL, "/posts/:postId"),
        method: "PATCH",
        auth: true,
    },
    _a[endpoints.deletePost] = {
        url: "".concat(exports.BASE_URL, "/posts/:postId"),
        method: "DELETE",
        auth: true,
    },
    _a[endpoints.postCommentList] = {
        url: "".concat(exports.BASE_URL, "/comments/:postId"),
        method: "GET",
        auth: true,
    },
    _a[endpoints.createComment] = {
        url: "".concat(exports.BASE_URL, "/comments"),
        method: "POST",
        auth: true,
    },
    _a[endpoints.updateComment] = {
        url: "".concat(exports.BASE_URL, "/comments/:commentId"),
        method: "PATCH",
        auth: true,
    },
    _a[endpoints.deleteComment] = {
        url: "".concat(exports.BASE_URL, "/comments/:commentId"),
        method: "DELETE",
        auth: true,
    },
    _a[endpoints.addLike] = {
        url: "".concat(exports.BASE_URL, "/:postId"),
        method: "POST",
        auth: true,
    },
    _a[endpoints.deleteLike] = {
        url: "".concat(exports.BASE_URL, "/:postId"),
        method: "DELETE",
        auth: true,
    },
    _a);
