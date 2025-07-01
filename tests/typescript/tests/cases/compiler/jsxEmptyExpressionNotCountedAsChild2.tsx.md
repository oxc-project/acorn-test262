__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 22,
      "end": 31
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 47
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 67
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 90
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 93,
                    "end": 96
                  },
                  "declare": false,
                  "start": 78,
                  "end": 97
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementAttributesProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 141
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
                          "name": "__properties__",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 156,
                          "end": 170
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 172,
                            "end": 174
                          },
                          "start": 170,
                          "end": 174
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 156,
                        "end": 175
                      }
                    ],
                    "start": 142,
                    "end": 185
                  },
                  "declare": false,
                  "start": 106,
                  "end": 185
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 221
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 242,
                                "end": 248
                              },
                              "start": 240,
                              "end": 248
                            },
                            "start": 237,
                            "end": 248
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 251,
                            "end": 257
                          },
                          "start": 249,
                          "end": 257
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 236,
                        "end": 258
                      }
                    ],
                    "start": 222,
                    "end": 268
                  },
                  "declare": false,
                  "start": 194,
                  "end": 268
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementChildrenAttribute",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 287,
                    "end": 311
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
                          "name": "__children__",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 326,
                          "end": 338
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 340,
                            "end": 342
                          },
                          "start": 338,
                          "end": 342
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 326,
                        "end": 343
                      }
                    ],
                    "start": 312,
                    "end": 353
                  },
                  "declare": false,
                  "start": 277,
                  "end": 353
                }
              ],
              "start": 68,
              "end": 359
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 54,
            "end": 359
          }
        ],
        "start": 48,
        "end": 361
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 33,
      "end": 361
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MockComponentInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 395
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
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
                      "name": "__properties__",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 431
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 435,
                                  "end": 438
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 441,
                                    "end": 447
                                  },
                                  "start": 439,
                                  "end": 447
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 435,
                                "end": 447
                              }
                            ],
                            "start": 433,
                            "end": 449
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
                                  "name": "__children__",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 454,
                                  "end": 466
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 474,
                                        "end": 480
                                      },
                                      "start": 471,
                                      "end": 480
                                    },
                                    "start": 468,
                                    "end": 480
                                  },
                                  "start": 466,
                                  "end": 480
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 454,
                                "end": 480
                              }
                            ],
                            "start": 452,
                            "end": 482
                          }
                        ],
                        "start": 433,
                        "end": 482
                      },
                      "start": 431,
                      "end": 482
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 417,
                    "end": 483
                  }
                ],
                "start": 407,
                "end": 486
              },
              "start": 405,
              "end": 486
            },
            "start": 399,
            "end": 487
          }
        ],
        "start": 396,
        "end": 489
      },
      "declare": false,
      "start": 363,
      "end": 489
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
            "name": "MockComponent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MockComponentInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 520,
                  "end": 542
                },
                "typeArguments": null,
                "start": 520,
                "end": 542
              },
              "start": 518,
              "end": 542
            },
            "start": 505,
            "end": 542
          },
          "init": null,
          "definite": false,
          "start": 505,
          "end": 542
        }
      ],
      "declare": true,
      "start": 491,
      "end": 543
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MockComponent",
            "start": 546,
            "end": 559
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 545,
          "end": 560
        },
        "children": [
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "JSXEmptyExpression",
              "start": 561,
              "end": 561
            },
            "start": 560,
            "end": 562
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MockComponent",
            "start": 564,
            "end": 577
          },
          "start": 562,
          "end": 578
        },
        "start": 545,
        "end": 578
      },
      "directive": null,
      "start": 545,
      "end": 579
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 588
}
```
