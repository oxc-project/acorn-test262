__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 99
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 104,
                "end": 110
              },
              "start": 102,
              "end": 110
            },
            "start": 100,
            "end": 110
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 113,
            "end": 114
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 100,
          "end": 114
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 116,
        "end": 119
      },
      "expression": false,
      "start": 87,
      "end": 119
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 125
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 140
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 145,
                      "end": 151
                    },
                    "start": 143,
                    "end": 151
                  },
                  "start": 141,
                  "end": 151
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 154,
                  "end": 155
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 155
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 157,
              "end": 160
            },
            "expression": false,
            "start": 128,
            "end": 160
          },
          "definite": false,
          "start": 124,
          "end": 160
        }
      ],
      "declare": false,
      "start": 120,
      "end": 160
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 167
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 174,
                    "end": 180
                  },
                  "start": 172,
                  "end": 180
                },
                "start": 171,
                "end": 180
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 184
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 187,
                  "end": 188
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 188
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 193,
              "end": 196
            },
            "id": null,
            "generator": false,
            "start": 170,
            "end": 196
          },
          "definite": false,
          "start": 165,
          "end": 196
        }
      ],
      "declare": false,
      "start": 161,
      "end": 196
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 198,
          "end": 201
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 202,
            "end": 203
          }
        ],
        "optional": false,
        "start": 198,
        "end": 204
      },
      "directive": null,
      "start": 198,
      "end": 205
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 206,
          "end": 209
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 206,
        "end": 211
      },
      "directive": null,
      "start": 206,
      "end": 212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 213,
          "end": 214
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 215,
            "end": 216
          }
        ],
        "optional": false,
        "start": 213,
        "end": 217
      },
      "directive": null,
      "start": 213,
      "end": 218
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 220
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 219,
        "end": 222
      },
      "directive": null,
      "start": 219,
      "end": 223
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 226
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 227,
            "end": 228
          }
        ],
        "optional": false,
        "start": 224,
        "end": 229
      },
      "directive": null,
      "start": 224,
      "end": 230
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 231,
          "end": 233
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 234,
            "end": 235
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 237,
            "end": 238
          }
        ],
        "optional": false,
        "start": 231,
        "end": 239
      },
      "directive": null,
      "start": 231,
      "end": 240
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 249
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 259
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 264,
                        "end": 270
                      },
                      "start": 262,
                      "end": 270
                    },
                    "start": 260,
                    "end": 270
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 273,
                    "end": 274
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 274
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 276,
                "end": 279
              },
              "expression": false,
              "start": 259,
              "end": 279
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 256,
            "end": 279
          }
        ],
        "start": 250,
        "end": 281
      },
      "abstract": false,
      "declare": false,
      "start": 242,
      "end": 281
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 290,
                  "end": 291
                },
                "typeArguments": null,
                "start": 290,
                "end": 291
              },
              "start": 288,
              "end": 291
            },
            "start": 287,
            "end": 291
          },
          "init": null,
          "definite": false,
          "start": 287,
          "end": 291
        }
      ],
      "declare": false,
      "start": 283,
      "end": 292
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 294
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 298
          },
          "optional": false,
          "computed": false,
          "start": 293,
          "end": 298
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 293,
        "end": 300
      },
      "directive": null,
      "start": 293,
      "end": 301
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 303
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 307
          },
          "optional": false,
          "computed": false,
          "start": 302,
          "end": 307
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 308,
            "end": 309
          }
        ],
        "optional": false,
        "start": 302,
        "end": 310
      },
      "directive": null,
      "start": 302,
      "end": 311
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 324
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 334
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 337,
                  "end": 338
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 338
              }
            ],
            "returnType": null,
            "start": 331,
            "end": 340
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 345,
              "end": 348
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 352,
                    "end": 358
                  },
                  "start": 350,
                  "end": 358
                },
                "start": 349,
                "end": 358
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 364,
                      "end": 370
                    },
                    "start": 362,
                    "end": 370
                  },
                  "start": 360,
                  "end": 370
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 373,
                  "end": 374
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 360,
                "end": 374
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 345,
            "end": 376
          }
        ],
        "start": 325,
        "end": 378
      },
      "declare": false,
      "start": 313,
      "end": 378
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 388
                },
                "typeArguments": null,
                "start": 387,
                "end": 388
              },
              "start": 385,
              "end": 388
            },
            "start": 384,
            "end": 388
          },
          "init": null,
          "definite": false,
          "start": 384,
          "end": 388
        }
      ],
      "declare": false,
      "start": 380,
      "end": 389
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 390,
          "end": 391
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 390,
        "end": 393
      },
      "directive": null,
      "start": 390,
      "end": 394
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 395,
          "end": 396
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 397,
            "end": 398
          }
        ],
        "optional": false,
        "start": 395,
        "end": 399
      },
      "directive": null,
      "start": 395,
      "end": 400
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 402
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 406
          },
          "optional": false,
          "computed": false,
          "start": 401,
          "end": 406
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 407,
            "end": 408
          }
        ],
        "optional": false,
        "start": 401,
        "end": 409
      },
      "directive": null,
      "start": 401,
      "end": 410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 412
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 416
          },
          "optional": false,
          "computed": false,
          "start": 411,
          "end": 416
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 417,
            "end": 418
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 420,
            "end": 421
          }
        ],
        "optional": false,
        "start": 411,
        "end": 422
      },
      "directive": null,
      "start": 411,
      "end": 423
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 443,
                              "end": 449
                            },
                            "start": 441,
                            "end": 449
                          },
                          "start": 439,
                          "end": 449
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 452,
                          "end": 453
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 439,
                        "end": 453
                      }
                    ],
                    "returnType": null,
                    "start": 438,
                    "end": 455
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 460,
                      "end": 463
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
                          "typeAnnotation": null,
                          "start": 464,
                          "end": 466
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 469,
                          "end": 470
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 464,
                        "end": 470
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 460,
                    "end": 472
                  }
                ],
                "start": 432,
                "end": 474
              },
              "start": 430,
              "end": 474
            },
            "start": 429,
            "end": 474
          },
          "init": null,
          "definite": false,
          "start": 429,
          "end": 474
        }
      ],
      "declare": false,
      "start": 425,
      "end": 474
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 476,
          "end": 477
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 476,
        "end": 479
      },
      "directive": null,
      "start": 476,
      "end": 480
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 481,
          "end": 482
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 483,
            "end": 484
          }
        ],
        "optional": false,
        "start": 481,
        "end": 485
      },
      "directive": null,
      "start": 481,
      "end": 486
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 488
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 489,
            "end": 492
          },
          "optional": false,
          "computed": false,
          "start": 487,
          "end": 492
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 487,
        "end": 494
      },
      "directive": null,
      "start": 487,
      "end": 495
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 497
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 498,
            "end": 501
          },
          "optional": false,
          "computed": false,
          "start": 496,
          "end": 501
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 502,
            "end": 503
          }
        ],
        "optional": false,
        "start": 496,
        "end": 504
      },
      "directive": null,
      "start": 496,
      "end": 505
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 511,
            "end": 512
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 521,
                  "end": 524
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 529,
                            "end": 535
                          },
                          "start": 527,
                          "end": 535
                        },
                        "start": 525,
                        "end": 535
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 538,
                        "end": 539
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 539
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 541,
                    "end": 544
                  },
                  "expression": false,
                  "start": 524,
                  "end": 544
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 521,
                "end": 544
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 550,
                  "end": 551
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 562,
                    "end": 565
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 569,
                          "end": 575
                        },
                        "start": 567,
                        "end": 575
                      },
                      "start": 566,
                      "end": 575
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 581,
                            "end": 587
                          },
                          "start": 579,
                          "end": 587
                        },
                        "start": 577,
                        "end": 587
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 590,
                        "end": 592
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 577,
                      "end": 592
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 594,
                    "end": 597
                  },
                  "expression": false,
                  "start": 553,
                  "end": 597
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 550,
                "end": 597
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
                  "start": 603,
                  "end": 604
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 611,
                            "end": 614
                          },
                          "start": 609,
                          "end": 614
                        },
                        "start": 607,
                        "end": 614
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 617,
                        "end": 619
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 607,
                      "end": 619
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 624,
                    "end": 627
                  },
                  "id": null,
                  "generator": false,
                  "start": 606,
                  "end": 627
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 603,
                "end": 627
              }
            ],
            "start": 515,
            "end": 629
          },
          "definite": false,
          "start": 511,
          "end": 629
        }
      ],
      "declare": false,
      "start": 507,
      "end": 629
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 631,
            "end": 632
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 633,
            "end": 636
          },
          "optional": false,
          "computed": false,
          "start": 631,
          "end": 636
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 631,
        "end": 638
      },
      "directive": null,
      "start": 631,
      "end": 639
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 640,
            "end": 641
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 642,
            "end": 645
          },
          "optional": false,
          "computed": false,
          "start": 640,
          "end": 645
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 646,
            "end": 647
          }
        ],
        "optional": false,
        "start": 640,
        "end": 648
      },
      "directive": null,
      "start": 640,
      "end": 649
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 650,
            "end": 651
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 652,
            "end": 653
          },
          "optional": false,
          "computed": false,
          "start": 650,
          "end": 653
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 654,
            "end": 655
          }
        ],
        "optional": false,
        "start": 650,
        "end": 656
      },
      "directive": null,
      "start": 650,
      "end": 657
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 658,
            "end": 659
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 660,
            "end": 661
          },
          "optional": false,
          "computed": false,
          "start": 658,
          "end": 661
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 662,
            "end": 663
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 665,
            "end": 666
          }
        ],
        "optional": false,
        "start": 658,
        "end": 667
      },
      "directive": null,
      "start": 658,
      "end": 668
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 670
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 671,
            "end": 672
          },
          "optional": false,
          "computed": false,
          "start": 669,
          "end": 672
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 669,
        "end": 674
      },
      "directive": null,
      "start": 669,
      "end": 675
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 676,
            "end": 677
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 678,
            "end": 679
          },
          "optional": false,
          "computed": false,
          "start": 676,
          "end": 679
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 680,
            "end": 681
          }
        ],
        "optional": false,
        "start": 676,
        "end": 682
      },
      "directive": null,
      "start": 676,
      "end": 683
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 87,
  "end": 683
}
```
