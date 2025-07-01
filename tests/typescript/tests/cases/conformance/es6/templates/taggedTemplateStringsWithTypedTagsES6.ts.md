__ESTREE_TEST__:PASS:
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
                      "type": "TSNumberKeyword",
                      "start": 63,
                      "end": 69
                    },
                    "start": 63,
                    "end": 71
                  },
                  "start": 61,
                  "end": 71
                },
                "value": null,
                "start": 54,
                "end": 71
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
                  "start": 74,
                  "end": 75
                },
                "typeArguments": null,
                "start": 74,
                "end": 75
              },
              "start": 72,
              "end": 75
            },
            "start": 18,
            "end": 76
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
              "start": 81,
              "end": 82
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
                  "start": 84,
                  "end": 85
                },
                "typeArguments": null,
                "start": 84,
                "end": 85
              },
              "start": 82,
              "end": 85
            },
            "accessibility": null,
            "static": false,
            "start": 81,
            "end": 86
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
              "start": 91,
              "end": 92
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
                  "start": 94,
                  "end": 95
                },
                "typeArguments": null,
                "start": 94,
                "end": 95
              },
              "start": 92,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 91,
            "end": 96
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
              "start": 101,
              "end": 107
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
                  "start": 109,
                  "end": 110
                },
                "typeArguments": null,
                "start": 109,
                "end": 110
              },
              "start": 107,
              "end": 110
            },
            "accessibility": null,
            "static": false,
            "start": 101,
            "end": 111
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "thisIsNotATag",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 129
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
                    "start": 133,
                    "end": 139
                  },
                  "start": 131,
                  "end": 139
                },
                "start": 130,
                "end": 139
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 142,
                "end": 146
              },
              "start": 140,
              "end": 146
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 116,
            "end": 146
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
                    "start": 155,
                    "end": 161
                  },
                  "start": 153,
                  "end": 161
                },
                "start": 152,
                "end": 161
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
                  "start": 164,
                  "end": 165
                },
                "typeArguments": null,
                "start": 164,
                "end": 165
              },
              "start": 162,
              "end": 165
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 151,
            "end": 166
          }
        ],
        "start": 12,
        "end": 168
      },
      "declare": false,
      "start": 0,
      "end": 168
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
                  "start": 177,
                  "end": 178
                },
                "typeArguments": null,
                "start": 177,
                "end": 178
              },
              "start": 175,
              "end": 178
            },
            "start": 174,
            "end": 178
          },
          "init": null,
          "definite": false,
          "start": 174,
          "end": 178
        }
      ],
      "declare": false,
      "start": 170,
      "end": 179
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
          "start": 181,
          "end": 182
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
              "start": 183,
              "end": 188
            }
          ],
          "expressions": [],
          "start": 183,
          "end": 188
        },
        "start": 181,
        "end": 188
      },
      "directive": null,
      "start": 181,
      "end": 188
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
          "start": 190,
          "end": 191
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
              "start": 192,
              "end": 198
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 199,
              "end": 205
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 206,
              "end": 211
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 198,
              "end": 199
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 205,
              "end": 206
            }
          ],
          "start": 192,
          "end": 211
        },
        "start": 190,
        "end": 211
      },
      "directive": null,
      "start": 190,
      "end": 212
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
            "start": 214,
            "end": 215
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
                "start": 216,
                "end": 221
              }
            ],
            "expressions": [],
            "start": 216,
            "end": 221
          },
          "start": 214,
          "end": 221
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 228
        },
        "optional": false,
        "computed": false,
        "start": 214,
        "end": 228
      },
      "directive": null,
      "start": 214,
      "end": 228
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
            "start": 230,
            "end": 231
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
                "start": 232,
                "end": 238
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false,
                "start": 239,
                "end": 245
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true,
                "start": 246,
                "end": 251
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 238,
                "end": 239
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 245,
                "end": 246
              }
            ],
            "start": 232,
            "end": 251
          },
          "start": 230,
          "end": 251
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 258
        },
        "optional": false,
        "computed": false,
        "start": 230,
        "end": 258
      },
      "directive": null,
      "start": 230,
      "end": 259
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
            "start": 261,
            "end": 262
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
                "start": 263,
                "end": 268
              }
            ],
            "expressions": [],
            "start": 263,
            "end": 268
          },
          "start": 261,
          "end": 268
        },
        "property": {
          "type": "Literal",
          "value": "member",
          "raw": "\"member\"",
          "start": 269,
          "end": 277
        },
        "optional": false,
        "computed": true,
        "start": 261,
        "end": 278
      },
      "directive": null,
      "start": 261,
      "end": 279
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
            "start": 281,
            "end": 282
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
                "start": 283,
                "end": 289
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false,
                "start": 290,
                "end": 296
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true,
                "start": 297,
                "end": 302
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 289,
                "end": 290
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 296,
                "end": 297
              }
            ],
            "start": 283,
            "end": 302
          },
          "start": 281,
          "end": 302
        },
        "property": {
          "type": "Literal",
          "value": "member",
          "raw": "\"member\"",
          "start": 303,
          "end": 311
        },
        "optional": false,
        "computed": true,
        "start": 281,
        "end": 312
      },
      "directive": null,
      "start": 281,
      "end": 313
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
                "start": 315,
                "end": 316
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
                    "start": 317,
                    "end": 322
                  }
                ],
                "expressions": [],
                "start": 317,
                "end": 322
              },
              "start": 315,
              "end": 322
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 323,
              "end": 324
            },
            "optional": false,
            "computed": true,
            "start": 315,
            "end": 325
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "member",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 332
          },
          "optional": false,
          "computed": false,
          "start": 315,
          "end": 332
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
              "start": 333,
              "end": 339
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 340,
              "end": 346
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 347,
              "end": 352
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 339,
              "end": 340
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 346,
              "end": 347
            }
          ],
          "start": 333,
          "end": 352
        },
        "start": 315,
        "end": 352
      },
      "directive": null,
      "start": 315,
      "end": 353
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
                "start": 355,
                "end": 356
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
                    "start": 357,
                    "end": 363
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": false,
                    "start": 364,
                    "end": 370
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "ghi",
                      "cooked": "ghi"
                    },
                    "tail": true,
                    "start": 371,
                    "end": 376
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 363,
                    "end": 364
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 370,
                    "end": 371
                  }
                ],
                "start": 357,
                "end": 376
              },
              "start": 355,
              "end": 376
            },
            "property": {
              "type": "Literal",
              "value": "member",
              "raw": "\"member\"",
              "start": 377,
              "end": 385
            },
            "optional": false,
            "computed": true,
            "start": 355,
            "end": 386
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "member",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 393
          },
          "optional": false,
          "computed": false,
          "start": 355,
          "end": 393
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
              "start": 394,
              "end": 400
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 401,
              "end": 407
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 408,
              "end": 413
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 400,
              "end": 401
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 407,
              "end": 408
            }
          ],
          "start": 394,
          "end": 413
        },
        "start": 355,
        "end": 413
      },
      "directive": null,
      "start": 355,
      "end": 414
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
            "start": 416,
            "end": 417
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 431
          },
          "optional": false,
          "computed": false,
          "start": 416,
          "end": 431
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
                "start": 432,
                "end": 437
              }
            ],
            "expressions": [],
            "start": 432,
            "end": 437
          }
        ],
        "optional": false,
        "start": 416,
        "end": 438
      },
      "directive": null,
      "start": 416,
      "end": 439
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
            "start": 441,
            "end": 442
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 456
          },
          "optional": false,
          "computed": false,
          "start": 441,
          "end": 456
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
                "start": 457,
                "end": 463
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false,
                "start": 464,
                "end": 470
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true,
                "start": 471,
                "end": 476
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 463,
                "end": 464
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 470,
                "end": 471
              }
            ],
            "start": 457,
            "end": 476
          }
        ],
        "optional": false,
        "start": 441,
        "end": 477
      },
      "directive": null,
      "start": 441,
      "end": 478
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 478
}
```
