__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 62
          },
          "start": 52,
          "end": 62
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 68,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 76
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
            "name": "myHoc",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 89
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComposedComponentProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 115
                  },
                  "constraint": {
                    "type": "TSAnyKeyword",
                    "start": 124,
                    "end": 127
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 93,
                  "end": 127
                }
              ],
              "start": 92,
              "end": 128
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ComposedComponent",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 153,
                        "end": 158
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ComponentClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 173
                      },
                      "start": 153,
                      "end": 173
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ComposedComponentProps",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 196
                          },
                          "typeArguments": null,
                          "start": 174,
                          "end": 196
                        }
                      ],
                      "start": 173,
                      "end": 197
                    },
                    "start": 153,
                    "end": 197
                  },
                  "start": 151,
                  "end": 197
                },
                "start": 134,
                "end": 197
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "WrapperComponentProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 236
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ComposedComponentProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 261
                        },
                        "typeArguments": null,
                        "start": 239,
                        "end": 261
                      },
                      {
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
                              "name": "myProp",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 266,
                              "end": 272
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 274,
                                "end": 280
                              },
                              "start": 272,
                              "end": 280
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 266,
                            "end": 280
                          }
                        ],
                        "start": 264,
                        "end": 282
                      }
                    ],
                    "start": 239,
                    "end": 282
                  },
                  "declare": false,
                  "start": 210,
                  "end": 283
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
                        "name": "WrapperComponent",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "React",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 312,
                                "end": 317
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ComponentClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 318,
                                "end": 332
                              },
                              "start": 312,
                              "end": 332
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "WrapperComponentProps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 333,
                                    "end": 354
                                  },
                                  "typeArguments": null,
                                  "start": 333,
                                  "end": 354
                                }
                              ],
                              "start": 332,
                              "end": 355
                            },
                            "start": 312,
                            "end": 355
                          },
                          "start": 310,
                          "end": 355
                        },
                        "start": 294,
                        "end": 355
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 358,
                          "end": 362
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 366,
                          "end": 369
                        },
                        "start": 358,
                        "end": 369
                      },
                      "definite": false,
                      "start": 294,
                      "end": 369
                    }
                  ],
                  "declare": false,
                  "start": 288,
                  "end": 370
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
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComposedComponentProps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 389,
                              "end": 411
                            },
                            "typeArguments": null,
                            "start": 389,
                            "end": 411
                          },
                          "start": 387,
                          "end": 411
                        },
                        "start": 382,
                        "end": 411
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 414,
                          "end": 418
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 422,
                          "end": 425
                        },
                        "start": 414,
                        "end": 425
                      },
                      "definite": false,
                      "start": 382,
                      "end": 425
                    }
                  ],
                  "declare": false,
                  "start": 376,
                  "end": 426
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "WrapperComponent",
                        "start": 433,
                        "end": 449
                      },
                      "typeArguments": null,
                      "attributes": [
                        {
                          "type": "JSXSpreadAttribute",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 454,
                            "end": 459
                          },
                          "start": 450,
                          "end": 460
                        },
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "myProp",
                            "start": 461,
                            "end": 467
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "Literal",
                              "value": "1000000",
                              "raw": "'1000000'",
                              "start": 469,
                              "end": 478
                            },
                            "start": 468,
                            "end": 479
                          },
                          "start": 461,
                          "end": 479
                        }
                      ],
                      "selfClosing": true,
                      "start": 432,
                      "end": 482
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 432,
                    "end": 482
                  },
                  "directive": null,
                  "start": 432,
                  "end": 483
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "WrapperComponent",
                        "start": 489,
                        "end": 505
                      },
                      "typeArguments": null,
                      "attributes": [
                        {
                          "type": "JSXSpreadAttribute",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 510,
                            "end": 515
                          },
                          "start": 506,
                          "end": 516
                        },
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "myProp",
                            "start": 517,
                            "end": 523
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "Literal",
                              "value": 1000000,
                              "raw": "1000000",
                              "start": 525,
                              "end": 532
                            },
                            "start": 524,
                            "end": 533
                          },
                          "start": 517,
                          "end": 533
                        }
                      ],
                      "selfClosing": true,
                      "start": 488,
                      "end": 536
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 488,
                    "end": 536
                  },
                  "directive": null,
                  "start": 488,
                  "end": 537
                }
              ],
              "start": 204,
              "end": 539
            },
            "id": null,
            "generator": false,
            "start": 92,
            "end": 539
          },
          "definite": false,
          "start": 84,
          "end": 539
        }
      ],
      "declare": false,
      "start": 78,
      "end": 540
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 540
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 54,
    "end": 56,
    "range": [
      54,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 57,
    "end": 62,
    "range": [
      57,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 63,
    "end": 67,
    "range": [
      63,
      67
    ]
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 68,
    "end": 75,
    "range": [
      68,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 78,
    "end": 83,
    "range": [
      78,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "myHoc",
    "start": 84,
    "end": 89,
    "range": [
      84,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "ComposedComponentProps",
    "start": 93,
    "end": 115,
    "range": [
      93,
      115
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 116,
    "end": 123,
    "range": [
      116,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 124,
    "end": 127,
    "range": [
      124,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "ComposedComponent",
    "start": 134,
    "end": 151,
    "range": [
      134,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 153,
    "end": 158,
    "range": [
      153,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 159,
    "end": 173,
    "range": [
      159,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "ComposedComponentProps",
    "start": 174,
    "end": 196,
    "range": [
      174,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 201,
    "end": 203,
    "range": [
      201,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 210,
    "end": 214,
    "range": [
      210,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "WrapperComponentProps",
    "start": 215,
    "end": 236,
    "range": [
      215,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "ComposedComponentProps",
    "start": 239,
    "end": 261,
    "range": [
      239,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "myProp",
    "start": 266,
    "end": 272,
    "range": [
      266,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 274,
    "end": 280,
    "range": [
      274,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 288,
    "end": 293,
    "range": [
      288,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "WrapperComponent",
    "start": 294,
    "end": 310,
    "range": [
      294,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 312,
    "end": 317,
    "range": [
      312,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 318,
    "end": 332,
    "range": [
      318,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "WrapperComponentProps",
    "start": 333,
    "end": 354,
    "range": [
      333,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 358,
    "end": 362,
    "range": [
      358,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 363,
    "end": 365,
    "range": [
      363,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 366,
    "end": 369,
    "range": [
      366,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 376,
    "end": 381,
    "range": [
      376,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 382,
    "end": 387,
    "range": [
      382,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "ComposedComponentProps",
    "start": 389,
    "end": 411,
    "range": [
      389,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 414,
    "end": 418,
    "range": [
      414,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 419,
    "end": 421,
    "range": [
      419,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 422,
    "end": 425,
    "range": [
      422,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "WrapperComponent",
    "start": 433,
    "end": 449,
    "range": [
      433,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 451,
    "end": 454,
    "range": [
      451,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 454,
    "end": 459,
    "range": [
      454,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "myProp",
    "start": 461,
    "end": 467,
    "range": [
      461,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "String",
    "value": "'1000000'",
    "start": 469,
    "end": 478,
    "range": [
      469,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "WrapperComponent",
    "start": 489,
    "end": 505,
    "range": [
      489,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 507,
    "end": 510,
    "range": [
      507,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 510,
    "end": 515,
    "range": [
      510,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "myProp",
    "start": 517,
    "end": 523,
    "range": [
      517,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Numeric",
    "value": "1000000",
    "start": 525,
    "end": 532,
    "range": [
      525,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  }
]
```
