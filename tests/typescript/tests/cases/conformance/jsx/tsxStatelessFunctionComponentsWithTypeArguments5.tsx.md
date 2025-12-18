__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 59
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 60,
            "end": 61
          }
        ],
        "start": 59,
        "end": 62
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 67
              },
              "typeArguments": null,
              "start": 66,
              "end": 67
            },
            "start": 64,
            "end": 67
          },
          "start": 63,
          "end": 67
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 73
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 81
            },
            "start": 70,
            "end": 81
          },
          "typeArguments": null,
          "start": 70,
          "end": 81
        },
        "start": 68,
        "end": 81
      },
      "body": null,
      "expression": false,
      "start": 33,
      "end": 82
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 107
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 108,
              "end": 109
            },
            "constraint": {
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 124
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 126,
                      "end": 132
                    },
                    "start": 124,
                    "end": 132
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 120,
                  "end": 132
                }
              ],
              "start": 118,
              "end": 134
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 108,
            "end": 134
          }
        ],
        "start": 107,
        "end": 135
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
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
                "start": 141,
                "end": 142
              },
              "typeArguments": null,
              "start": 141,
              "end": 142
            },
            "start": 139,
            "end": 142
          },
          "start": 136,
          "end": 142
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 156
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Component",
                      "start": 160,
                      "end": 169
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 174,
                          "end": 177
                        },
                        "start": 170,
                        "end": 178
                      }
                    ],
                    "selfClosing": true,
                    "start": 159,
                    "end": 181
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 159,
                  "end": 181
                },
                "definite": false,
                "start": 154,
                "end": 181
              }
            ],
            "declare": false,
            "start": 150,
            "end": 182
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 193
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Component",
                      "start": 197,
                      "end": 206
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 211,
                          "end": 214
                        },
                        "start": 207,
                        "end": 215
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "prop1",
                          "start": 216,
                          "end": 221
                        },
                        "value": null,
                        "start": 216,
                        "end": 221
                      }
                    ],
                    "selfClosing": true,
                    "start": 196,
                    "end": 224
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 196,
                  "end": 224
                },
                "definite": false,
                "start": 191,
                "end": 224
              }
            ],
            "declare": false,
            "start": 187,
            "end": 225
          }
        ],
        "start": 144,
        "end": 227
      },
      "expression": false,
      "start": 83,
      "end": 227
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentSpecific",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 263
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 265
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 264,
            "end": 265
          }
        ],
        "start": 263,
        "end": 266
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 276
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 278,
                        "end": 279
                      },
                      "typeArguments": null,
                      "start": 278,
                      "end": 279
                    },
                    "start": 276,
                    "end": 279
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 272,
                  "end": 279
                }
              ],
              "start": 270,
              "end": 281
            },
            "start": 268,
            "end": 281
          },
          "start": 267,
          "end": 281
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 287
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 295
            },
            "start": 284,
            "end": 295
          },
          "typeArguments": null,
          "start": 284,
          "end": 295
        },
        "start": 282,
        "end": 295
      },
      "body": null,
      "expression": false,
      "start": 229,
      "end": 296
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentSpecific1",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 332
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 334
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 333,
            "end": 334
          }
        ],
        "start": 332,
        "end": 335
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 345
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 347,
                        "end": 348
                      },
                      "typeArguments": null,
                      "start": 347,
                      "end": 348
                    },
                    "start": 345,
                    "end": 348
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 341,
                  "end": 349
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "ignore-prop",
                    "raw": "\"ignore-prop\"",
                    "start": 350,
                    "end": 363
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 365,
                      "end": 371
                    },
                    "start": 363,
                    "end": 371
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 350,
                  "end": 371
                }
              ],
              "start": 339,
              "end": 373
            },
            "start": 337,
            "end": 373
          },
          "start": 336,
          "end": 373
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 379
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 387
            },
            "start": 376,
            "end": 387
          },
          "typeArguments": null,
          "start": 376,
          "end": 387
        },
        "start": 374,
        "end": 387
      },
      "body": null,
      "expression": false,
      "start": 297,
      "end": 388
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 402
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 403,
              "end": 404
            },
            "constraint": {
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 415,
                    "end": 419
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 421,
                      "end": 427
                    },
                    "start": 419,
                    "end": 427
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 415,
                  "end": 427
                }
              ],
              "start": 413,
              "end": 429
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 403,
            "end": 429
          }
        ],
        "start": 402,
        "end": 430
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
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
                "start": 436,
                "end": 437
              },
              "typeArguments": null,
              "start": 436,
              "end": 437
            },
            "start": 434,
            "end": 437
          },
          "start": 431,
          "end": 437
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "a1",
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
                      "name": "ComponentSpecific",
                      "start": 455,
                      "end": 472
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 477,
                          "end": 480
                        },
                        "start": 473,
                        "end": 481
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "start": 482,
                          "end": 493
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 494,
                          "end": 498
                        },
                        "start": 482,
                        "end": 498
                      }
                    ],
                    "selfClosing": true,
                    "start": 454,
                    "end": 501
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 454,
                  "end": 501
                },
                "definite": false,
                "start": 449,
                "end": 501
              }
            ],
            "declare": false,
            "start": 445,
            "end": 502
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 527,
                  "end": 529
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentSpecific1",
                      "start": 533,
                      "end": 551
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 556,
                          "end": 559
                        },
                        "start": 552,
                        "end": 560
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "ignore-prop",
                          "start": 561,
                          "end": 572
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 574,
                            "end": 576
                          },
                          "start": 573,
                          "end": 577
                        },
                        "start": 561,
                        "end": 577
                      }
                    ],
                    "selfClosing": true,
                    "start": 532,
                    "end": 580
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 532,
                  "end": 580
                },
                "definite": false,
                "start": 527,
                "end": 580
              }
            ],
            "declare": false,
            "start": 523,
            "end": 581
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
                  "name": "a3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 606,
                  "end": 608
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentSpecific",
                      "start": 612,
                      "end": 629
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 634,
                          "end": 637
                        },
                        "start": 630,
                        "end": 638
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "prop",
                          "start": 639,
                          "end": 643
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 644,
                          "end": 651
                        },
                        "start": 639,
                        "end": 651
                      }
                    ],
                    "selfClosing": true,
                    "start": 611,
                    "end": 654
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 611,
                  "end": 654
                },
                "definite": false,
                "start": 606,
                "end": 654
              }
            ],
            "declare": false,
            "start": 602,
            "end": 655
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
                  "name": "a4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 682,
                  "end": 684
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentSpecific",
                      "start": 688,
                      "end": 705
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 710,
                          "end": 713
                        },
                        "start": 706,
                        "end": 714
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "prop1",
                          "start": 715,
                          "end": 720
                        },
                        "value": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 721,
                          "end": 728
                        },
                        "start": 715,
                        "end": 728
                      }
                    ],
                    "selfClosing": true,
                    "start": 687,
                    "end": 731
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 687,
                  "end": 731
                },
                "definite": false,
                "start": 682,
                "end": 731
              }
            ],
            "declare": false,
            "start": 678,
            "end": 732
          }
        ],
        "start": 439,
        "end": 752
      },
      "expression": false,
      "start": 390,
      "end": 752
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 752
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 33,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 41,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 50,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 74,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 83,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "createComponent",
    "start": 92,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 110,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 150,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 159,
    "end": 160
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 160,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 171,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 197,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 208,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "JSXIdentifier",
    "value": "prop1",
    "start": 216,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 229,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 237,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "ComponentSpecific",
    "start": 246,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 288,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 297,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 305,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "ComponentSpecific1",
    "start": 314,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 341,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349
  },
  {
    "type": "String",
    "value": "\"ignore-prop\"",
    "start": 350,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 365,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 376,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 380,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 390,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 399,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 405,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 415,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 421,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 445,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 449,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 454,
    "end": 455
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentSpecific",
    "start": 455,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 474,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 477,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-prop",
    "start": 482,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 493,
    "end": 494
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 494,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 523,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 527,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 532,
    "end": 533
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentSpecific1",
    "start": 533,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 553,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 556,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 559,
    "end": 560
  },
  {
    "type": "JSXIdentifier",
    "value": "ignore-prop",
    "start": 561,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
    "end": 574
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 574,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 602,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 606,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 611,
    "end": 612
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentSpecific",
    "start": 612,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 631,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 634,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 637,
    "end": 638
  },
  {
    "type": "JSXIdentifier",
    "value": "prop",
    "start": 639,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 644,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 678,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 682,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 687,
    "end": 688
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentSpecific",
    "start": 688,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 707,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 710,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714
  },
  {
    "type": "JSXIdentifier",
    "value": "prop1",
    "start": 715,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 721,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 751,
    "end": 752
  }
]
```
