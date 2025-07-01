__ESTREE_TEST__:PASS:
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
      "end": 32
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
            "name": "decorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 49
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                    "start": 62,
                    "end": 63
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 62,
                  "end": 63
                }
              ],
              "start": 61,
              "end": 64
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Component",
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
                        "start": 76,
                        "end": 81
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StatelessComponent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 82,
                        "end": 100
                      },
                      "start": 76,
                      "end": 100
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 101,
                            "end": 102
                          },
                          "typeArguments": null,
                          "start": 101,
                          "end": 102
                        }
                      ],
                      "start": 100,
                      "end": 103
                    },
                    "start": 76,
                    "end": 103
                  },
                  "start": 74,
                  "end": 103
                },
                "start": 65,
                "end": 103
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
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 111
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StatelessComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 112,
                    "end": 130
                  },
                  "start": 106,
                  "end": 130
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 132
                      },
                      "typeArguments": null,
                      "start": 131,
                      "end": 132
                    }
                  ],
                  "start": 130,
                  "end": 133
                },
                "start": 106,
                "end": 133
              },
              "start": 104,
              "end": 133
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 153
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "Component",
                          "start": 159,
                          "end": 168
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
                              "start": 173,
                              "end": 178
                            },
                            "start": 169,
                            "end": 179
                          }
                        ],
                        "selfClosing": false,
                        "start": 158,
                        "end": 180
                      },
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "Component",
                          "start": 182,
                          "end": 191
                        },
                        "start": 180,
                        "end": 192
                      },
                      "start": 158,
                      "end": 192
                    },
                    "id": null,
                    "generator": false,
                    "start": 147,
                    "end": 192
                  },
                  "start": 140,
                  "end": 192
                }
              ],
              "start": 134,
              "end": 194
            },
            "expression": false,
            "start": 52,
            "end": 194
          },
          "definite": false,
          "start": 40,
          "end": 194
        }
      ],
      "declare": false,
      "start": 34,
      "end": 195
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
            "name": "decorator2",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 213
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                    "start": 226,
                    "end": 227
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 238,
                          "end": 239
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 241,
                            "end": 247
                          },
                          "start": 239,
                          "end": 247
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 238,
                        "end": 247
                      }
                    ],
                    "start": 236,
                    "end": 249
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 226,
                  "end": 249
                }
              ],
              "start": 225,
              "end": 250
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Component",
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
                        "start": 262,
                        "end": 267
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StatelessComponent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 268,
                        "end": 286
                      },
                      "start": 262,
                      "end": 286
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 287,
                            "end": 288
                          },
                          "typeArguments": null,
                          "start": 287,
                          "end": 288
                        }
                      ],
                      "start": 286,
                      "end": 289
                    },
                    "start": 262,
                    "end": 289
                  },
                  "start": 260,
                  "end": 289
                },
                "start": 251,
                "end": 289
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
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 292,
                    "end": 297
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StatelessComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 316
                  },
                  "start": 292,
                  "end": 316
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 317,
                        "end": 318
                      },
                      "typeArguments": null,
                      "start": 317,
                      "end": 318
                    }
                  ],
                  "start": 316,
                  "end": 319
                },
                "start": 292,
                "end": 319
              },
              "start": 290,
              "end": 319
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 334,
                        "end": 339
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "Component",
                          "start": 345,
                          "end": 354
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
                              "start": 359,
                              "end": 364
                            },
                            "start": 355,
                            "end": 365
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "x",
                              "start": 366,
                              "end": 367
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 369,
                                "end": 370
                              },
                              "start": 368,
                              "end": 371
                            },
                            "start": 366,
                            "end": 371
                          }
                        ],
                        "selfClosing": false,
                        "start": 344,
                        "end": 373
                      },
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "Component",
                          "start": 375,
                          "end": 384
                        },
                        "start": 373,
                        "end": 385
                      },
                      "start": 344,
                      "end": 385
                    },
                    "id": null,
                    "generator": false,
                    "start": 333,
                    "end": 385
                  },
                  "start": 326,
                  "end": 385
                }
              ],
              "start": 320,
              "end": 387
            },
            "expression": false,
            "start": 216,
            "end": 387
          },
          "definite": false,
          "start": 203,
          "end": 387
        }
      ],
      "declare": false,
      "start": 197,
      "end": 388
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
            "name": "decorator3",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 406
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                    "start": 419,
                    "end": 420
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 431,
                          "end": 432
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 434,
                            "end": 440
                          },
                          "start": 432,
                          "end": 440
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 431,
                        "end": 440
                      }
                    ],
                    "start": 429,
                    "end": 442
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 419,
                  "end": 442
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 444,
                    "end": 445
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 456,
                          "end": 457
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 459,
                            "end": 465
                          },
                          "start": 457,
                          "end": 465
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 456,
                        "end": 465
                      }
                    ],
                    "start": 454,
                    "end": 467
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 444,
                  "end": 467
                }
              ],
              "start": 418,
              "end": 469
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Component",
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
                        "start": 481,
                        "end": 486
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StatelessComponent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 487,
                        "end": 505
                      },
                      "start": 481,
                      "end": 505
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 506,
                            "end": 507
                          },
                          "typeArguments": null,
                          "start": 506,
                          "end": 507
                        }
                      ],
                      "start": 505,
                      "end": 508
                    },
                    "start": 481,
                    "end": 508
                  },
                  "start": 479,
                  "end": 508
                },
                "start": 470,
                "end": 508
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
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 511,
                    "end": 516
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StatelessComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 517,
                    "end": 535
                  },
                  "start": 511,
                  "end": 535
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 536,
                        "end": 537
                      },
                      "typeArguments": null,
                      "start": 536,
                      "end": 537
                    }
                  ],
                  "start": 535,
                  "end": 538
                },
                "start": 511,
                "end": 538
              },
              "start": 509,
              "end": 538
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 553,
                        "end": 558
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "Component",
                          "start": 564,
                          "end": 573
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "x",
                              "start": 574,
                              "end": 575
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 577,
                                "end": 578
                              },
                              "start": 576,
                              "end": 579
                            },
                            "start": 574,
                            "end": 579
                          },
                          {
                            "type": "JSXSpreadAttribute",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 584,
                              "end": 589
                            },
                            "start": 580,
                            "end": 590
                          }
                        ],
                        "selfClosing": false,
                        "start": 563,
                        "end": 592
                      },
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "Component",
                          "start": 594,
                          "end": 603
                        },
                        "start": 592,
                        "end": 604
                      },
                      "start": 563,
                      "end": 604
                    },
                    "id": null,
                    "generator": false,
                    "start": 552,
                    "end": 604
                  },
                  "start": 545,
                  "end": 604
                }
              ],
              "start": 539,
              "end": 606
            },
            "expression": false,
            "start": 409,
            "end": 606
          },
          "definite": false,
          "start": 396,
          "end": 606
        }
      ],
      "declare": false,
      "start": 390,
      "end": 607
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 607
}
```
