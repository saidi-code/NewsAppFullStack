"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERRORS = void 0;
var ERRORS;
(function (ERRORS) {
    ERRORS["TOKEN_EXPIRED"] = "Token expired";
    ERRORS["BAD_TOKEN"] = "Bad token";
    ERRORS["USER_NOT_FOUND"] = "User not found";
    ERRORS["USER_REQUIRED_FIELDS"] = "Email, username, and password are required";
    ERRORS["DUPLICATE_EMAIL"] = "An account with this email already exists";
    ERRORS["DUPLICATE_USERNAME"] = "An account with this username already exists";
    ERRORS["POST_ID_MISSING"] = "Post ID is missing";
    ERRORS["POST_NOT_FOUND"] = "Post not found";
    ERRORS["DUPLICATE_URL"] = "A post with this URL already exists";
    ERRORS["COMMENT_MISSING"] = "Comment is missing";
    ERRORS["COMMENT_ID_MISSING"] = "Comment ID is missing";
    ERRORS["DUPLICATE_LIKE"] = "Duplicate like";
})(ERRORS || (exports.ERRORS = ERRORS = {}));
