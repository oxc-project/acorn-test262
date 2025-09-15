__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementAttributesProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 83
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 86,
                    "end": 91
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 93,
                      "end": 95
                    },
                    "start": 91,
                    "end": 95
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 86,
                  "end": 95
                }
              ],
              "start": 84,
              "end": 97
            },
            "declare": false,
            "start": 48,
            "end": 97
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 126
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
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 135
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 137,
                      "end": 140
                    },
                    "start": 135,
                    "end": 140
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 132,
                  "end": 141
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "h2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 146
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 148,
                      "end": 151
                    },
                    "start": 146,
                    "end": 151
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 144,
                  "end": 152
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "h1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 155,
                    "end": 157
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 159,
                      "end": 162
                    },
                    "start": 157,
                    "end": 162
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 155,
                  "end": 163
                }
              ],
              "start": 127,
              "end": 166
            },
            "declare": false,
            "start": 99,
            "end": 166
          }
        ],
        "start": 22,
        "end": 168
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 168
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 182
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 191
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 193,
                "end": 195
              },
              "start": 191,
              "end": 195
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 186,
            "end": 195
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 206
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 228,
                          "end": 231
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 227,
                        "end": 232
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "My Button",
                          "raw": "My Button",
                          "start": 232,
                          "end": 241
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 243,
                          "end": 246
                        },
                        "start": 241,
                        "end": 247
                      },
                      "start": 227,
                      "end": 247
                    },
                    "start": 219,
                    "end": 248
                  }
                ],
                "start": 209,
                "end": 254
              },
              "expression": false,
              "start": 206,
              "end": 254
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 200,
            "end": 254
          }
        ],
        "start": 183,
        "end": 256
      },
      "abstract": false,
      "declare": false,
      "start": 170,
      "end": 256
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
            "name": "k1",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 270
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 274,
                "end": 277
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 273,
              "end": 278
            },
            "children": [
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 278,
                "end": 279
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 280,
                    "end": 282
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 279,
                  "end": 283
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " Hello ",
                    "raw": " Hello ",
                    "start": 283,
                    "end": 290
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 292,
                    "end": 294
                  },
                  "start": 290,
                  "end": 295
                },
                "start": 279,
                "end": 295
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 295,
                "end": 296
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h1",
                    "start": 297,
                    "end": 299
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 296,
                  "end": 300
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " world ",
                    "raw": " world ",
                    "start": 300,
                    "end": 307
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h1",
                    "start": 309,
                    "end": 311
                  },
                  "start": 307,
                  "end": 312
                },
                "start": 296,
                "end": 312
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 314,
                "end": 317
              },
              "start": 312,
              "end": 318
            },
            "start": 273,
            "end": 318
          },
          "definite": false,
          "start": 268,
          "end": 318
        }
      ],
      "declare": false,
      "start": 264,
      "end": 319
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
            "name": "k2",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 326
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 330,
                "end": 333
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 329,
              "end": 334
            },
            "children": [
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 334,
                "end": 335
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 336,
                    "end": 338
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 335,
                  "end": 339
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " Hello ",
                    "raw": " Hello ",
                    "start": 339,
                    "end": 346
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 348,
                    "end": 350
                  },
                  "start": 346,
                  "end": 351
                },
                "start": 335,
                "end": 351
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 351,
                "end": 352
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "user",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 360,
                          "end": 363
                        },
                        "start": 358,
                        "end": 363
                      },
                      "start": 354,
                      "end": 363
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "h2",
                        "start": 369,
                        "end": 371
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 368,
                      "end": 372
                    },
                    "children": [
                      {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "user",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 373,
                            "end": 377
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 378,
                            "end": 382
                          },
                          "optional": false,
                          "computed": false,
                          "start": 373,
                          "end": 382
                        },
                        "start": 372,
                        "end": 383
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "h2",
                        "start": 385,
                        "end": 387
                      },
                      "start": 383,
                      "end": 388
                    },
                    "start": 368,
                    "end": 388
                  },
                  "id": null,
                  "generator": false,
                  "start": 353,
                  "end": 388
                },
                "start": 352,
                "end": 389
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 391,
                "end": 394
              },
              "start": 389,
              "end": 395
            },
            "start": 329,
            "end": 395
          },
          "definite": false,
          "start": 324,
          "end": 395
        }
      ],
      "declare": false,
      "start": 320,
      "end": 396
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
            "name": "k3",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 403
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 407,
                "end": 410
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 406,
              "end": 411
            },
            "children": [
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 411,
                "end": 412
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 413,
                  "end": 414
                },
                "start": 412,
                "end": 415
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 415,
                "end": 416
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "That is a number",
                  "raw": "\"That is a number\"",
                  "start": 417,
                  "end": 435
                },
                "start": 416,
                "end": 436
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 436,
                "end": 437
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 439,
                "end": 442
              },
              "start": 437,
              "end": 443
            },
            "start": 406,
            "end": 443
          },
          "definite": false,
          "start": 401,
          "end": 443
        }
      ],
      "declare": false,
      "start": 397,
      "end": 444
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
            "name": "k4",
            "optional": false,
            "typeAnnotation": null,
            "start": 449,
            "end": 451
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Button",
                "start": 455,
                "end": 461
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 454,
              "end": 462
            },
            "children": [
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 462,
                "end": 463
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 464,
                    "end": 466
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 463,
                  "end": 467
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " Hello ",
                    "raw": " Hello ",
                    "start": 467,
                    "end": 474
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 476,
                    "end": 478
                  },
                  "start": 474,
                  "end": 479
                },
                "start": 463,
                "end": 479
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 479,
                "end": 480
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Button",
                "start": 482,
                "end": 488
              },
              "start": 480,
              "end": 489
            },
            "start": 454,
            "end": 489
          },
          "definite": false,
          "start": 449,
          "end": 489
        }
      ],
      "declare": false,
      "start": 445,
      "end": 490
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 490
}
```
