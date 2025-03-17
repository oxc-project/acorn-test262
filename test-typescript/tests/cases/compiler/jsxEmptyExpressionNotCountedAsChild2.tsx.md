__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 589,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 31,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 33,
      "end": 361,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 47,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 48,
        "end": 361,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 54,
            "end": 359,
            "id": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "name": "JSX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 68,
              "end": 359,
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 78,
                  "end": 97,
                  "id": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 90,
                    "name": "Element",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 93,
                    "end": 96
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 106,
                  "end": 185,
                  "id": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 141,
                    "name": "ElementAttributesProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 142,
                    "end": 185,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 156,
                        "end": 175,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 170,
                          "name": "__properties__",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 170,
                          "end": 174,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 172,
                            "end": 174,
                            "members": []
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 194,
                  "end": 268,
                  "id": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 221,
                    "name": "IntrinsicElements",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 222,
                    "end": 268,
                    "body": [
                      {
                        "type": "TSIndexSignature",
                        "start": 236,
                        "end": 258,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 237,
                            "end": 248,
                            "name": "key",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 240,
                              "end": 248,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 242,
                                "end": 248
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 249,
                          "end": 257,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 251,
                            "end": 257
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 277,
                  "end": 353,
                  "id": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 311,
                    "name": "ElementChildrenAttribute",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 312,
                    "end": 353,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 326,
                        "end": 343,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 338,
                          "name": "__children__",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 338,
                          "end": 342,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 340,
                            "end": 342,
                            "members": []
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 363,
      "end": 489,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 395,
        "name": "MockComponentInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 396,
        "end": 489,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 399,
            "end": 487,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 405,
              "end": 486,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 407,
                "end": 486,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 417,
                    "end": 483,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 431,
                      "name": "__properties__",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 431,
                      "end": 482,
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "start": 433,
                        "end": 482,
                        "types": [
                          {
                            "type": "TSTypeLiteral",
                            "start": 433,
                            "end": 449,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 435,
                                "end": 447,
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 435,
                                  "end": 438,
                                  "name": "bar",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 439,
                                  "end": 447,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 441,
                                    "end": 447
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 452,
                            "end": 482,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 454,
                                "end": 480,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 454,
                                  "end": 466,
                                  "name": "__children__",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 466,
                                  "end": 480,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 468,
                                    "end": 480,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 471,
                                      "end": 480,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 474,
                                        "end": 480
                                      }
                                    }
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 543,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 542,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 542,
            "name": "MockComponent",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 518,
              "end": 542,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 520,
                "end": 542,
                "typeName": {
                  "type": "Identifier",
                  "start": 520,
                  "end": 542,
                  "name": "MockComponentInterface",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 545,
      "end": 579,
      "expression": {
        "type": "JSXElement",
        "start": 545,
        "end": 578,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 545,
          "end": 560,
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 546,
            "end": 559,
            "name": "MockComponent"
          },
          "selfClosing": false,
          "typeArguments": null
        },
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 562,
          "end": 578,
          "name": {
            "type": "JSXIdentifier",
            "start": 564,
            "end": 577,
            "name": "MockComponent"
          }
        },
        "children": [
          {
            "type": "JSXExpressionContainer",
            "start": 560,
            "end": 562,
            "expression": {
              "type": "JSXEmptyExpression",
              "start": 561,
              "end": 561
            }
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
