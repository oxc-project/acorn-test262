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
        "start": 15,
        "end": 18
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
              "start": 32,
              "end": 39
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 40,
              "end": 43
            },
            "declare": false,
            "start": 22,
            "end": 43
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementAttributesProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 80
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
                    "start": 83,
                    "end": 88
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 90,
                      "end": 92
                    },
                    "start": 88,
                    "end": 92
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 83,
                  "end": 92
                }
              ],
              "start": 81,
              "end": 94
            },
            "declare": false,
            "start": 45,
            "end": 94
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 123
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
                    "start": 129,
                    "end": 132
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 134,
                      "end": 137
                    },
                    "start": 132,
                    "end": 137
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 129,
                  "end": 138
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
                    "start": 141,
                    "end": 143
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 145,
                      "end": 148
                    },
                    "start": 143,
                    "end": 148
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 141,
                  "end": 149
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
                    "start": 152,
                    "end": 154
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 156,
                      "end": 159
                    },
                    "start": 154,
                    "end": 159
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 152,
                  "end": 160
                }
              ],
              "start": 124,
              "end": 163
            },
            "declare": false,
            "start": 96,
            "end": 163
          }
        ],
        "start": 19,
        "end": 165
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 165
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
        "start": 173,
        "end": 179
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
              "start": 183,
              "end": 188
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 190,
                "end": 192
              },
              "start": 188,
              "end": 192
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
            "start": 183,
            "end": 192
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
              "start": 197,
              "end": 203
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
                          "start": 225,
                          "end": 228
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 224,
                        "end": 229
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "My Button",
                          "raw": "My Button",
                          "start": 229,
                          "end": 238
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 240,
                          "end": 243
                        },
                        "start": 238,
                        "end": 244
                      },
                      "start": 224,
                      "end": 244
                    },
                    "start": 216,
                    "end": 245
                  }
                ],
                "start": 206,
                "end": 251
              },
              "expression": false,
              "start": 203,
              "end": 251
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 197,
            "end": 251
          }
        ],
        "start": 180,
        "end": 253
      },
      "abstract": false,
      "declare": false,
      "start": 167,
      "end": 253
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
            "start": 265,
            "end": 267
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 271,
                "end": 274
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 270,
              "end": 275
            },
            "children": [
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 275,
                "end": 276
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 277,
                    "end": 279
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 276,
                  "end": 280
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " Hello ",
                    "raw": " Hello ",
                    "start": 280,
                    "end": 287
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 289,
                    "end": 291
                  },
                  "start": 287,
                  "end": 292
                },
                "start": 276,
                "end": 292
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 292,
                "end": 293
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h1",
                    "start": 294,
                    "end": 296
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 293,
                  "end": 297
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " world ",
                    "raw": " world ",
                    "start": 297,
                    "end": 304
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h1",
                    "start": 306,
                    "end": 308
                  },
                  "start": 304,
                  "end": 309
                },
                "start": 293,
                "end": 309
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 311,
                "end": 314
              },
              "start": 309,
              "end": 315
            },
            "start": 270,
            "end": 315
          },
          "definite": false,
          "start": 265,
          "end": 315
        }
      ],
      "declare": false,
      "start": 261,
      "end": 316
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
            "start": 321,
            "end": 323
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 327,
                "end": 330
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 326,
              "end": 331
            },
            "children": [
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 331,
                "end": 332
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 333,
                    "end": 335
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 332,
                  "end": 336
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " Hello ",
                    "raw": " Hello ",
                    "start": 336,
                    "end": 343
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 345,
                    "end": 347
                  },
                  "start": 343,
                  "end": 348
                },
                "start": 332,
                "end": 348
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 348,
                "end": 349
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
                          "start": 357,
                          "end": 360
                        },
                        "start": 355,
                        "end": 360
                      },
                      "start": 351,
                      "end": 360
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
                        "start": 366,
                        "end": 368
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": false,
                      "start": 365,
                      "end": 369
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
                            "start": 370,
                            "end": 374
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 375,
                            "end": 379
                          },
                          "optional": false,
                          "computed": false,
                          "start": 370,
                          "end": 379
                        },
                        "start": 369,
                        "end": 380
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "h2",
                        "start": 382,
                        "end": 384
                      },
                      "start": 380,
                      "end": 385
                    },
                    "start": 365,
                    "end": 385
                  },
                  "id": null,
                  "generator": false,
                  "start": 350,
                  "end": 385
                },
                "start": 349,
                "end": 386
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 388,
                "end": 391
              },
              "start": 386,
              "end": 392
            },
            "start": 326,
            "end": 392
          },
          "definite": false,
          "start": 321,
          "end": 392
        }
      ],
      "declare": false,
      "start": 317,
      "end": 393
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
            "start": 398,
            "end": 400
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 404,
                "end": 407
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 403,
              "end": 408
            },
            "children": [
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 408,
                "end": 409
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 410,
                  "end": 411
                },
                "start": 409,
                "end": 412
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 412,
                "end": 413
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "That is a number",
                  "raw": "\"That is a number\"",
                  "start": 414,
                  "end": 432
                },
                "start": 413,
                "end": 433
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 433,
                "end": 434
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 436,
                "end": 439
              },
              "start": 434,
              "end": 440
            },
            "start": 403,
            "end": 440
          },
          "definite": false,
          "start": 398,
          "end": 440
        }
      ],
      "declare": false,
      "start": 394,
      "end": 441
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
            "start": 446,
            "end": 448
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Button",
                "start": 452,
                "end": 458
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 451,
              "end": 459
            },
            "children": [
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 459,
                "end": 460
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 461,
                    "end": 463
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 460,
                  "end": 464
                },
                "children": [
                  {
                    "type": "JSXText",
                    "value": " Hello ",
                    "raw": " Hello ",
                    "start": 464,
                    "end": 471
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "h2",
                    "start": 473,
                    "end": 475
                  },
                  "start": 471,
                  "end": 476
                },
                "start": 460,
                "end": 476
              },
              {
                "type": "JSXText",
                "value": " ",
                "raw": " ",
                "start": 476,
                "end": 477
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Button",
                "start": 479,
                "end": 485
              },
              "start": 477,
              "end": 486
            },
            "start": 451,
            "end": 486
          },
          "definite": false,
          "start": 446,
          "end": 486
        }
      ],
      "declare": false,
      "start": 442,
      "end": 487
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 487
}
```
