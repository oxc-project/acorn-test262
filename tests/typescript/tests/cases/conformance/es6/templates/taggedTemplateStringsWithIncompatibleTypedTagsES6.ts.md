__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                "type": "Identifier",
                "decorators": [],
                "name": "stringParts",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TemplateStringsArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 32,
                      "end": 52
                    },
                    "typeArguments": null,
                    "start": 32,
                    "end": 52
                  },
                  "start": 30,
                  "end": 52
                },
                "start": 19,
                "end": 52
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 61
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 63,
                      "end": 70
                    },
                    "start": 63,
                    "end": 72
                  },
                  "start": 61,
                  "end": 72
                },
                "value": null,
                "start": 54,
                "end": 72
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 76
                },
                "typeArguments": null,
                "start": 75,
                "end": 76
              },
              "start": 73,
              "end": 76
            },
            "start": 18,
            "end": 77
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 83
            },
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
                  "start": 85,
                  "end": 86
                },
                "typeArguments": null,
                "start": 85,
                "end": 86
              },
              "start": 83,
              "end": 86
            },
            "accessibility": null,
            "static": false,
            "start": 82,
            "end": 87
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
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
                  "start": 95,
                  "end": 96
                },
                "typeArguments": null,
                "start": 95,
                "end": 96
              },
              "start": 93,
              "end": 96
            },
            "accessibility": null,
            "static": false,
            "start": 92,
            "end": 97
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 108
            },
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
                  "start": 110,
                  "end": 111
                },
                "typeArguments": null,
                "start": 110,
                "end": 111
              },
              "start": 108,
              "end": 111
            },
            "accessibility": null,
            "static": false,
            "start": 102,
            "end": 112
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "thisIsNotATag",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 130
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
                    "type": "TSStringKeyword",
                    "start": 134,
                    "end": 140
                  },
                  "start": 132,
                  "end": 140
                },
                "start": 131,
                "end": 140
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 143,
                "end": 147
              },
              "start": 141,
              "end": 147
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 117,
            "end": 147
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 156,
                    "end": 162
                  },
                  "start": 154,
                  "end": 162
                },
                "start": 153,
                "end": 162
              }
            ],
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
                  "start": 165,
                  "end": 166
                },
                "typeArguments": null,
                "start": 165,
                "end": 166
              },
              "start": 163,
              "end": 166
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 152,
            "end": 167
          }
        ],
        "start": 12,
        "end": 169
      },
      "declare": false,
      "start": 0,
      "end": 169
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
                  "start": 178,
                  "end": 179
                },
                "typeArguments": null,
                "start": 178,
                "end": 179
              },
              "start": 176,
              "end": 179
            },
            "start": 175,
            "end": 179
          },
          "init": null,
          "definite": false,
          "start": 175,
          "end": 179
        }
      ],
      "declare": false,
      "start": 171,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 183
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": true,
              "start": 184,
              "end": 189
            }
          ],
          "expressions": [],
          "start": 184,
          "end": 189
        },
        "start": 182,
        "end": 189
      },
      "directive": null,
      "start": 182,
      "end": 189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 191,
          "end": 192
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false,
              "start": 193,
              "end": 199
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 200,
              "end": 206
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 207,
              "end": 212
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 199,
              "end": 200
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 206,
              "end": 207
            }
          ],
          "start": 193,
          "end": 212
        },
        "start": 191,
        "end": 212
      },
      "directive": null,
      "start": 191,
      "end": 213
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 216
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true,
                "start": 217,
                "end": 222
              }
            ],
            "expressions": [],
            "start": 217,
            "end": 222
          },
          "start": 215,
          "end": 222
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 229
        },
        "optional": false,
        "computed": false,
        "start": 215,
        "end": 229
      },
      "directive": null,
      "start": 215,
      "end": 229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 232
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false,
                "start": 233,
                "end": 239
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false,
                "start": 240,
                "end": 246
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true,
                "start": 247,
                "end": 252
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 239,
                "end": 240
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 246,
                "end": 247
              }
            ],
            "start": 233,
            "end": 252
          },
          "start": 231,
          "end": 252
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 259
        },
        "optional": false,
        "computed": false,
        "start": 231,
        "end": 259
      },
      "directive": null,
      "start": 231,
      "end": 260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 263
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true,
                "start": 264,
                "end": 269
              }
            ],
            "expressions": [],
            "start": 264,
            "end": 269
          },
          "start": 262,
          "end": 269
        },
        "property": {
          "type": "Literal",
          "value": "member",
          "raw": "\"member\"",
          "start": 270,
          "end": 278
        },
        "optional": false,
        "computed": true,
        "start": 262,
        "end": 279
      },
      "directive": null,
      "start": 262,
      "end": 280
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 283
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false,
                "start": 284,
                "end": 290
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false,
                "start": 291,
                "end": 297
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true,
                "start": 298,
                "end": 303
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 290,
                "end": 291
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 297,
                "end": 298
              }
            ],
            "start": 284,
            "end": 303
          },
          "start": 282,
          "end": 303
        },
        "property": {
          "type": "Literal",
          "value": "member",
          "raw": "\"member\"",
          "start": 304,
          "end": 312
        },
        "optional": false,
        "computed": true,
        "start": 282,
        "end": 313
      },
      "directive": null,
      "start": 282,
      "end": 314
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 317
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": true,
                    "start": 318,
                    "end": 323
                  }
                ],
                "expressions": [],
                "start": 318,
                "end": 323
              },
              "start": 316,
              "end": 323
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 324,
              "end": 325
            },
            "optional": false,
            "computed": true,
            "start": 316,
            "end": 326
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "member",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 333
          },
          "optional": false,
          "computed": false,
          "start": 316,
          "end": 333
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false,
              "start": 334,
              "end": 340
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 341,
              "end": 347
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 348,
              "end": 353
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 340,
              "end": 341
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 347,
              "end": 348
            }
          ],
          "start": 334,
          "end": 353
        },
        "start": 316,
        "end": 353
      },
      "directive": null,
      "start": 316,
      "end": 354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 357
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": false,
                    "start": 358,
                    "end": 364
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": false,
                    "start": 365,
                    "end": 371
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "ghi",
                      "cooked": "ghi"
                    },
                    "tail": true,
                    "start": 372,
                    "end": 377
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 364,
                    "end": 365
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 371,
                    "end": 372
                  }
                ],
                "start": 358,
                "end": 377
              },
              "start": 356,
              "end": 377
            },
            "property": {
              "type": "Literal",
              "value": "member",
              "raw": "\"member\"",
              "start": 378,
              "end": 386
            },
            "optional": false,
            "computed": true,
            "start": 356,
            "end": 387
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "member",
            "optional": false,
            "typeAnnotation": null,
            "start": 388,
            "end": 394
          },
          "optional": false,
          "computed": false,
          "start": 356,
          "end": 394
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false,
              "start": 395,
              "end": 401
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 402,
              "end": 408
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 409,
              "end": 414
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 401,
              "end": 402
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 408,
              "end": 409
            }
          ],
          "start": 395,
          "end": 414
        },
        "start": 356,
        "end": 414
      },
      "directive": null,
      "start": 356,
      "end": 415
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 417,
                "end": 418
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": false,
                    "start": 419,
                    "end": 425
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": false,
                    "start": 431,
                    "end": 437
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "ghi",
                      "cooked": "ghi"
                    },
                    "tail": true,
                    "start": 443,
                    "end": 448
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 426,
                    "end": 430
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 438,
                    "end": 442
                  }
                ],
                "start": 419,
                "end": 448
              },
              "start": 417,
              "end": 448
            },
            "property": {
              "type": "Literal",
              "value": "member",
              "raw": "\"member\"",
              "start": 449,
              "end": 457
            },
            "optional": false,
            "computed": true,
            "start": 417,
            "end": 458
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "member",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 465
          },
          "optional": false,
          "computed": false,
          "start": 417,
          "end": 465
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false,
              "start": 466,
              "end": 472
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 475,
              "end": 481
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 484,
              "end": 489
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 473,
              "end": 474
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 482,
              "end": 483
            }
          ],
          "start": 466,
          "end": 489
        },
        "start": 417,
        "end": 489
      },
      "directive": null,
      "start": 417,
      "end": 490
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 493
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 507
          },
          "optional": false,
          "computed": false,
          "start": 492,
          "end": 507
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true,
                "start": 508,
                "end": 513
              }
            ],
            "expressions": [],
            "start": 508,
            "end": 513
          }
        ],
        "optional": false,
        "start": 492,
        "end": 514
      },
      "directive": null,
      "start": 492,
      "end": 515
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 517,
            "end": 518
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false,
            "typeAnnotation": null,
            "start": 519,
            "end": 532
          },
          "optional": false,
          "computed": false,
          "start": 517,
          "end": 532
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false,
                "start": 533,
                "end": 539
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false,
                "start": 540,
                "end": 546
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true,
                "start": 547,
                "end": 552
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 539,
                "end": 540
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 546,
                "end": 547
              }
            ],
            "start": 533,
            "end": 552
          }
        ],
        "optional": false,
        "start": 517,
        "end": 553
      },
      "directive": null,
      "start": 517,
      "end": 554
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 554
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "stringParts",
    "start": 19,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "TemplateStringsArray",
    "start": 32,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 54,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 57,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 63,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "thisIsNotATag",
    "start": 117,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 171,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 182,
    "end": 183
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 184,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 191,
    "end": 192
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 193,
    "end": 199
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 199,
    "end": 200
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 200,
    "end": 206
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 206,
    "end": 207
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 207,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 215,
    "end": 216
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 217,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 223,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 231,
    "end": 232
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 233,
    "end": 239
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 239,
    "end": 240
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 240,
    "end": 246
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 246,
    "end": 247
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 247,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 253,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 262,
    "end": 263
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 264,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 269,
    "end": 270
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 270,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 282,
    "end": 283
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 284,
    "end": 290
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 290,
    "end": 291
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 291,
    "end": 297
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 297,
    "end": 298
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 298,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 303,
    "end": 304
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 304,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 316,
    "end": 317
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 318,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 323,
    "end": 324
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 327,
    "end": 333
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 334,
    "end": 340
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 340,
    "end": 341
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 341,
    "end": 347
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 347,
    "end": 348
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 348,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 356,
    "end": 357
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 358,
    "end": 364
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 364,
    "end": 365
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 365,
    "end": 371
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 371,
    "end": 372
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 372,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 377,
    "end": 378
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 378,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 388,
    "end": 394
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 395,
    "end": 401
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 401,
    "end": 402
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 402,
    "end": 408
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 408,
    "end": 409
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 409,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 417,
    "end": 418
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 419,
    "end": 425
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 426,
    "end": 430
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 431,
    "end": 437
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 438,
    "end": 442
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 443,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 448,
    "end": 449
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 449,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 459,
    "end": 465
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 466,
    "end": 472
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 473,
    "end": 474
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 475,
    "end": 481
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 482,
    "end": 483
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 484,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "thisIsNotATag",
    "start": 494,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 508,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "thisIsNotATag",
    "start": 519,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 533,
    "end": 539
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 539,
    "end": 540
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 540,
    "end": 546
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 546,
    "end": 547
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 547,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  }
]
```
