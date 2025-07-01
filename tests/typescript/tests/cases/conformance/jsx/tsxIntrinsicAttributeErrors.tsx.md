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
              "start": 38,
              "end": 45
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 46,
              "end": 49
            },
            "declare": false,
            "start": 28,
            "end": 49
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 76
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
                    "name": "render",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 93
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 95,
                      "end": 98
                    },
                    "start": 93,
                    "end": 98
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 87,
                  "end": 99
                }
              ],
              "start": 77,
              "end": 105
            },
            "declare": false,
            "start": 54,
            "end": 105
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicAttributes",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 139
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
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 153
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 155,
                          "end": 161
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 164,
                          "end": 170
                        }
                      ],
                      "start": 155,
                      "end": 170
                    },
                    "start": 153,
                    "end": 170
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 150,
                  "end": 170
                }
              ],
              "start": 140,
              "end": 176
            },
            "declare": false,
            "start": 110,
            "end": 176
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicClassAttributes",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 215
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 217
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 216,
                  "end": 217
                }
              ],
              "start": 215,
              "end": 218
            },
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
                    "name": "ref",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 229,
                    "end": 232
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 234,
                        "end": 235
                      },
                      "typeArguments": null,
                      "start": 234,
                      "end": 235
                    },
                    "start": 232,
                    "end": 235
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 229,
                  "end": 235
                }
              ],
              "start": 219,
              "end": 241
            },
            "declare": false,
            "start": 181,
            "end": 241
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 273
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
                    "start": 284,
                    "end": 287
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                            "name": "text",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 303,
                            "end": 307
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 310,
                              "end": 316
                            },
                            "start": 308,
                            "end": 316
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 303,
                          "end": 317
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "width",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 330,
                            "end": 335
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 338,
                              "end": 344
                            },
                            "start": 336,
                            "end": 344
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 330,
                          "end": 345
                        }
                      ],
                      "start": 289,
                      "end": 355
                    },
                    "start": 287,
                    "end": 355
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 284,
                  "end": 355
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "span",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 369
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 371,
                      "end": 374
                    },
                    "start": 369,
                    "end": 374
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 365,
                  "end": 375
                }
              ],
              "start": 274,
              "end": 381
            },
            "declare": false,
            "start": 246,
            "end": 381
          }
        ],
        "start": 22,
        "end": 383
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 383
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 395,
        "end": 396
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 410,
                    "end": 416
                  },
                  "start": 408,
                  "end": 416
                },
                "start": 407,
                "end": 416
              }
            ],
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 429,
                      "end": 430
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 432,
                        "end": 438
                      },
                      "start": 430,
                      "end": 438
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 429,
                    "end": 438
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "render",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 453
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 457,
                        "end": 461
                      },
                      "start": 455,
                      "end": 461
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 447,
                    "end": 461
                  }
                ],
                "start": 419,
                "end": 467
              },
              "start": 417,
              "end": 467
            },
            "start": 403,
            "end": 467
          }
        ],
        "start": 397,
        "end": 469
      },
      "declare": false,
      "start": 385,
      "end": 469
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
            "name": "E",
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
                  "start": 477,
                  "end": 478
                },
                "typeArguments": null,
                "start": 477,
                "end": 478
              },
              "start": 475,
              "end": 478
            },
            "start": 474,
            "end": 478
          },
          "init": null,
          "definite": false,
          "start": 474,
          "end": 478
        }
      ],
      "declare": false,
      "start": 470,
      "end": 479
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "E",
            "start": 481,
            "end": 482
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 483,
                "end": 484
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 486,
                  "end": 488
                },
                "start": 485,
                "end": 489
              },
              "start": 483,
              "end": 489
            }
          ],
          "selfClosing": true,
          "start": 480,
          "end": 492
        },
        "children": [],
        "closingElement": null,
        "start": 480,
        "end": 492
      },
      "directive": null,
      "start": 480,
      "end": 492
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 492
}
```
