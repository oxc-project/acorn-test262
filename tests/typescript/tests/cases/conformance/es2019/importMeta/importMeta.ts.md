__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": true,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "response",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 146
                    },
                    "init": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fetch",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 160
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "URL",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 165,
                                  "end": 168
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "../hamsters.jpg",
                                    "raw": "\"../hamsters.jpg\"",
                                    "start": 169,
                                    "end": 186
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MetaProperty",
                                      "meta": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "import",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 188,
                                        "end": 194
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "meta",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 195,
                                        "end": 199
                                      },
                                      "start": 188,
                                      "end": 199
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "url",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 200,
                                      "end": 203
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 188,
                                    "end": 203
                                  }
                                ],
                                "start": 161,
                                "end": 204
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 205,
                                "end": 213
                              },
                              "optional": false,
                              "computed": false,
                              "start": 161,
                              "end": 213
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 161,
                            "end": 215
                          }
                        ],
                        "optional": false,
                        "start": 155,
                        "end": 216
                      },
                      "start": 149,
                      "end": 216
                    },
                    "definite": false,
                    "start": 138,
                    "end": 216
                  }
                ],
                "declare": false,
                "start": 132,
                "end": 217
              },
              {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "blob",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 230
                    },
                    "init": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "response",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 239,
                            "end": 247
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "blob",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 248,
                            "end": 252
                          },
                          "optional": false,
                          "computed": false,
                          "start": 239,
                          "end": 252
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 239,
                        "end": 254
                      },
                      "start": 233,
                      "end": 254
                    },
                    "definite": false,
                    "start": 226,
                    "end": 254
                  }
                ],
                "declare": false,
                "start": 220,
                "end": 255
              },
              {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "size",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 269
                    },
                    "init": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MetaProperty",
                              "meta": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "import",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 272,
                                "end": 278
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "meta",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 279,
                                "end": 283
                              },
                              "start": 272,
                              "end": 283
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "scriptElement",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 284,
                              "end": 297
                            },
                            "optional": false,
                            "computed": false,
                            "start": 272,
                            "end": 297
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dataset",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 298,
                            "end": 305
                          },
                          "optional": false,
                          "computed": false,
                          "start": 272,
                          "end": 305
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 306,
                          "end": 310
                        },
                        "optional": false,
                        "computed": false,
                        "start": 272,
                        "end": 310
                      },
                      "operator": "||",
                      "right": {
                        "type": "Literal",
                        "value": 300,
                        "raw": "300",
                        "start": 314,
                        "end": 317
                      },
                      "start": 272,
                      "end": 317
                    },
                    "definite": false,
                    "start": 265,
                    "end": 317
                  }
                ],
                "declare": false,
                "start": 259,
                "end": 318
              },
              {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "image",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 328,
                      "end": 333
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Image",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 340,
                        "end": 345
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 336,
                      "end": 347
                    },
                    "definite": false,
                    "start": 328,
                    "end": 347
                  }
                ],
                "declare": false,
                "start": 322,
                "end": 348
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "image",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 351,
                      "end": 356
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "src",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 360
                    },
                    "optional": false,
                    "computed": false,
                    "start": 351,
                    "end": 360
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "URL",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 363,
                        "end": 366
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "createObjectURL",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 367,
                        "end": 382
                      },
                      "optional": false,
                      "computed": false,
                      "start": 363,
                      "end": 382
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "blob",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 383,
                        "end": 387
                      }
                    ],
                    "optional": false,
                    "start": 363,
                    "end": 388
                  },
                  "start": 351,
                  "end": 388
                },
                "directive": null,
                "start": 351,
                "end": 389
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "image",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 392,
                      "end": 397
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "width",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 403
                    },
                    "optional": false,
                    "computed": false,
                    "start": 392,
                    "end": 403
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "image",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 406,
                        "end": 411
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "height",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 412,
                        "end": 418
                      },
                      "optional": false,
                      "computed": false,
                      "start": 406,
                      "end": 418
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "size",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 425
                    },
                    "start": 406,
                    "end": 425
                  },
                  "start": 392,
                  "end": 425
                },
                "directive": null,
                "start": 392,
                "end": 426
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "document",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 430,
                        "end": 438
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "body",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 439,
                        "end": 443
                      },
                      "optional": false,
                      "computed": false,
                      "start": 430,
                      "end": 443
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "appendChild",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 444,
                      "end": 455
                    },
                    "optional": false,
                    "computed": false,
                    "start": 430,
                    "end": 455
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "image",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 456,
                      "end": 461
                    }
                  ],
                  "optional": false,
                  "start": 430,
                  "end": 462
                },
                "directive": null,
                "start": 430,
                "end": 463
              }
            ],
            "start": 128,
            "end": 465
          },
          "id": null,
          "generator": false,
          "start": 116,
          "end": 465
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 115,
        "end": 468
      },
      "directive": null,
      "start": 115,
      "end": 469
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 115,
  "end": 470
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 132,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 138,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 149,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "fetch",
    "start": 155,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 161,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "URL",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "String",
    "value": "\"../hamsters.jpg\"",
    "start": 169,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 195,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 205,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 220,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "blob",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 233,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 239,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "blob",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 259,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 272,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "scriptElement",
    "start": 284,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "dataset",
    "start": 298,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 311,
    "end": 313
  },
  {
    "type": "Numeric",
    "value": "300",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 322,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "image",
    "start": 328,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 336,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "Image",
    "start": 340,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "image",
    "start": 351,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 357,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "URL",
    "start": 363,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "createObjectURL",
    "start": 367,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "blob",
    "start": 383,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "image",
    "start": 392,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 398,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "image",
    "start": 406,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 412,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "document",
    "start": 430,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 439,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "appendChild",
    "start": 444,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "image",
    "start": 456,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "MetaProperty",
              "meta": {
                "type": "Identifier",
                "decorators": [],
                "name": "import",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 21
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "meta",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 26
              },
              "start": 15,
              "end": 26
            },
            "definite": false,
            "start": 11,
            "end": 26
          }
        ],
        "declare": false,
        "start": 7,
        "end": 27
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 27
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "init": {
              "type": "MetaProperty",
              "meta": {
                "type": "Identifier",
                "decorators": [],
                "name": "import",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 49
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "metal",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 55
              },
              "start": 43,
              "end": 55
            },
            "definite": false,
            "start": 39,
            "end": 55
          }
        ],
        "declare": false,
        "start": 35,
        "end": 56
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 28,
      "end": 56
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "MetaProperty",
                  "meta": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "import",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 78
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "import",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 85
                  },
                  "start": 72,
                  "end": 85
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "import",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 92
                },
                "optional": false,
                "computed": false,
                "start": 72,
                "end": 92
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "malkovich",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 102
              },
              "optional": false,
              "computed": false,
              "start": 72,
              "end": 102
            },
            "definite": false,
            "start": 68,
            "end": 102
          }
        ],
        "declare": false,
        "start": 64,
        "end": 103
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 22,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 28,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "metal",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 64,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "import",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "import",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "malkovich",
    "start": 93,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalA",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 11
          },
          "init": {
            "type": "MetaProperty",
            "meta": {
              "type": "Identifier",
              "decorators": [],
              "name": "import",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 20
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "meta",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 25
            },
            "start": 14,
            "end": 25
          },
          "definite": false,
          "start": 4,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalB",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 38
          },
          "init": {
            "type": "MetaProperty",
            "meta": {
              "type": "Identifier",
              "decorators": [],
              "name": "import",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 47
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "metal",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 53
            },
            "start": 41,
            "end": 53
          },
          "definite": false,
          "start": 31,
          "end": 53
        }
      ],
      "declare": false,
      "start": 27,
      "end": 54
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalC",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 66
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MetaProperty",
                "meta": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "import",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 75
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "import",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 82
                },
                "start": 69,
                "end": 82
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "import",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 89
              },
              "optional": false,
              "computed": false,
              "start": 69,
              "end": 89
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "malkovich",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 99
            },
            "optional": false,
            "computed": false,
            "start": 69,
            "end": 99
          },
          "definite": false,
          "start": 59,
          "end": 99
        }
      ],
      "declare": false,
      "start": 55,
      "end": 100
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 101
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "globalA",
    "start": 4,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 21,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "globalB",
    "start": 31,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "metal",
    "start": 48,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 55,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "globalC",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "import",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "import",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "malkovich",
    "start": 90,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ImportMeta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 18,
                    "end": 28
                  },
                  "typeArguments": null,
                  "start": 18,
                  "end": 28
                },
                "start": 16,
                "end": 28
              },
              "start": 13,
              "end": 28
            },
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MetaProperty",
                  "meta": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "import",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 37
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 38,
                    "end": 42
                  },
                  "start": 31,
                  "end": 42
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "blah",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 47
                },
                "optional": false,
                "computed": false,
                "start": 31,
                "end": 47
              },
              "right": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MetaProperty",
                    "meta": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "import",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 50,
                      "end": 56
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "meta",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 61
                    },
                    "start": 50,
                    "end": 61
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "blue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 66
                  },
                  "optional": false,
                  "computed": false,
                  "start": 50,
                  "end": 66
                },
                "right": {
                  "type": "MetaProperty",
                  "meta": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "import",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 75
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 80
                  },
                  "start": 69,
                  "end": 80
                },
                "start": 50,
                "end": 80
              },
              "start": 31,
              "end": 80
            },
            "definite": false,
            "start": 13,
            "end": 80
          }
        ],
        "declare": false,
        "start": 7,
        "end": 81
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 81
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MetaProperty",
          "meta": {
            "type": "Identifier",
            "decorators": [],
            "name": "import",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 88
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "meta",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 93
          },
          "start": 82,
          "end": 93
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 96,
          "end": 99
        },
        "start": 82,
        "end": 99
      },
      "directive": null,
      "start": 82,
      "end": 100
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 146
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportMeta",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 171
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "wellKnownProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 195
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 199,
                            "end": 200
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 202,
                              "end": 208
                            },
                            "start": 200,
                            "end": 208
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 199,
                          "end": 209
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 210,
                            "end": 211
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 213,
                              "end": 219
                            },
                            "start": 211,
                            "end": 219
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 210,
                          "end": 220
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 221,
                            "end": 222
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 224,
                              "end": 231
                            },
                            "start": 222,
                            "end": 231
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 221,
                          "end": 231
                        }
                      ],
                      "start": 197,
                      "end": 233
                    },
                    "start": 195,
                    "end": 233
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 178,
                  "end": 234
                }
              ],
              "start": 172,
              "end": 238
            },
            "declare": false,
            "start": 151,
            "end": 238
          }
        ],
        "start": 147,
        "end": 240
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 132,
      "end": 240
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 251
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 251
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 250,
                "end": 251
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 254
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 254
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 253,
                "end": 254
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 257
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 257
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 256,
                "end": 257
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 259
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MetaProperty",
              "meta": {
                "type": "Identifier",
                "decorators": [],
                "name": "import",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 268
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "meta",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 273
              },
              "start": 262,
              "end": 273
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "wellKnownProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 291
            },
            "optional": false,
            "computed": false,
            "start": 262,
            "end": 291
          },
          "definite": false,
          "start": 248,
          "end": 291
        }
      ],
      "declare": false,
      "start": 242,
      "end": 292
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 292
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "ImportMeta",
    "start": 18,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "blah",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 57,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "blue",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 96,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 132,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 151,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "ImportMeta",
    "start": 161,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "wellKnownProperty",
    "start": 178,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 224,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 242,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "wellKnownProperty",
    "start": 274,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  }
]
```
