__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FilterPropsByType",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 29
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
                "start": 30,
                "end": 31
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 30,
              "end": 31
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TT",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 35
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 33,
              "end": 35
            }
          ],
          "start": 29,
          "end": 36
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 56
                },
                "typeArguments": null,
                "start": 55,
                "end": 56
              },
              "start": 49,
              "end": 56
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 60
                  },
                  "typeArguments": null,
                  "start": 59,
                  "end": 60
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 62
                  },
                  "typeArguments": null,
                  "start": 61,
                  "end": 62
                },
                "start": 59,
                "end": 63
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 74
                },
                "typeArguments": null,
                "start": 72,
                "end": 74
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 78
                },
                "typeArguments": null,
                "start": 77,
                "end": 78
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 81,
                "end": 86
              },
              "start": 59,
              "end": 86
            },
            "optional": false,
            "readonly": null,
            "start": 39,
            "end": 88
          },
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 96
              },
              "typeArguments": null,
              "start": 95,
              "end": 96
            },
            "start": 89,
            "end": 96
          },
          "start": 39,
          "end": 97
        },
        "declare": false,
        "start": 7,
        "end": 98
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 98
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "select",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 115
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
              "start": 119,
              "end": 120
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 129,
                  "end": 135
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 138,
                  "end": 144
                }
              ],
              "start": 129,
              "end": 144
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 119,
            "end": 144
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TList",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 153
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 162,
              "end": 168
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 148,
            "end": 168
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValueProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 182
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FilterPropsByType",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 208
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TList",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 214
                    },
                    "typeArguments": null,
                    "start": 209,
                    "end": 214
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 216,
                      "end": 217
                    },
                    "typeArguments": null,
                    "start": 216,
                    "end": 217
                  }
                ],
                "start": 208,
                "end": 218
              },
              "start": 191,
              "end": 218
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 172,
            "end": 218
          }
        ],
        "start": 115,
        "end": 220
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "property",
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
                "start": 231,
                "end": 232
              },
              "typeArguments": null,
              "start": 231,
              "end": 232
            },
            "start": 229,
            "end": 232
          },
          "start": 221,
          "end": 232
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "list",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 245
                },
                "typeArguments": null,
                "start": 240,
                "end": 245
              },
              "start": 240,
              "end": 247
            },
            "start": 238,
            "end": 247
          },
          "start": 234,
          "end": 247
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "valueProp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TValueProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 270
              },
              "typeArguments": null,
              "start": 260,
              "end": 270
            },
            "start": 258,
            "end": 270
          },
          "start": 249,
          "end": 270
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 272,
        "end": 274
      },
      "expression": false,
      "start": 100,
      "end": 274
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 292,
          "end": 296
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
                "name": "XX",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 299
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 308,
                "end": 314
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 297,
              "end": 314
            }
          ],
          "start": 296,
          "end": 315
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "XX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 321
                },
                "typeArguments": null,
                "start": 319,
                "end": 321
              },
              "start": 317,
              "end": 321
            },
            "start": 316,
            "end": 321
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tipos",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 332,
                        "end": 337
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "XX",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 339,
                            "end": 341
                          },
                          "typeArguments": null,
                          "start": 339,
                          "end": 341
                        },
                        "start": 337,
                        "end": 341
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 332,
                      "end": 341
                    }
                  ],
                  "start": 330,
                  "end": 343
                },
                "start": 330,
                "end": 345
              },
              "start": 328,
              "end": 345
            },
            "start": 323,
            "end": 345
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "select",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 357
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 359
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tipos",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 366
                  },
                  {
                    "type": "Literal",
                    "value": "value",
                    "raw": "\"value\"",
                    "start": 368,
                    "end": 375
                  }
                ],
                "optional": false,
                "start": 351,
                "end": 376
              },
              "directive": null,
              "start": 351,
              "end": 377
            }
          ],
          "start": 347,
          "end": 379
        },
        "expression": false,
        "start": 283,
        "end": 379
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 276,
      "end": 379
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onlyNullablePlease",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 416
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 418
            },
            "constraint": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSNullKeyword",
                "start": 427,
                "end": 431
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 441
                },
                "typeArguments": null,
                "start": 440,
                "end": 441
              },
              "trueType": {
                "type": "TSAnyKeyword",
                "start": 444,
                "end": 447
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 450,
                "end": 455
              },
              "start": 427,
              "end": 455
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 417,
            "end": 455
          }
        ],
        "start": 416,
        "end": 456
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
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
                "start": 467,
                "end": 468
              },
              "typeArguments": null,
              "start": 467,
              "end": 468
            },
            "start": 465,
            "end": 468
          },
          "start": 460,
          "end": 468
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 472,
          "end": 476
        },
        "start": 470,
        "end": 476
      },
      "body": null,
      "expression": false,
      "start": 381,
      "end": 477
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onlyNullablePlease2",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 515
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 520
            },
            "constraint": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNullKeyword",
                    "start": 530,
                    "end": 534
                  }
                ],
                "start": 529,
                "end": 535
              },
              "extendsType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 545,
                      "end": 546
                    },
                    "typeArguments": null,
                    "start": 545,
                    "end": 546
                  }
                ],
                "start": 544,
                "end": 547
              },
              "trueType": {
                "type": "TSAnyKeyword",
                "start": 550,
                "end": 553
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 556,
                "end": 561
              },
              "start": 529,
              "end": 561
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 519,
            "end": 561
          }
        ],
        "start": 515,
        "end": 563
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
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
                "start": 571,
                "end": 572
              },
              "typeArguments": null,
              "start": 571,
              "end": 572
            },
            "start": 569,
            "end": 572
          },
          "start": 564,
          "end": 572
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 575,
          "end": 579
        },
        "start": 573,
        "end": 579
      },
      "body": null,
      "expression": false,
      "start": 479,
      "end": 580
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 597,
                    "end": 603
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 606,
                    "end": 610
                  }
                ],
                "start": 597,
                "end": 610
              },
              "start": 595,
              "end": 610
            },
            "start": 594,
            "end": 610
          },
          "init": null,
          "definite": false,
          "start": 594,
          "end": 610
        }
      ],
      "declare": true,
      "start": 582,
      "end": 611
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "onlyNullablePlease",
          "optional": false,
          "typeAnnotation": null,
          "start": 612,
          "end": 630
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 631,
            "end": 632
          }
        ],
        "optional": false,
        "start": 612,
        "end": 633
      },
      "directive": null,
      "start": 612,
      "end": 634
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "onlyNullablePlease2",
          "optional": false,
          "typeAnnotation": null,
          "start": 656,
          "end": 675
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 676,
            "end": 677
          }
        ],
        "optional": false,
        "start": 656,
        "end": 678
      },
      "directive": null,
      "start": 656,
      "end": 679
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 717,
                "end": 723
              },
              "start": 715,
              "end": 723
            },
            "start": 714,
            "end": 723
          },
          "init": null,
          "definite": false,
          "start": 714,
          "end": 723
        }
      ],
      "declare": true,
      "start": 702,
      "end": 724
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "onlyNullablePlease",
          "optional": false,
          "typeAnnotation": null,
          "start": 725,
          "end": 743
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 744,
            "end": 745
          }
        ],
        "optional": false,
        "start": 725,
        "end": 746
      },
      "directive": null,
      "start": 725,
      "end": 747
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "onlyNullablePlease2",
          "optional": false,
          "typeAnnotation": null,
          "start": 769,
          "end": 788
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 789,
            "end": 790
          }
        ],
        "optional": false,
        "start": 769,
        "end": 791
      },
      "directive": null,
      "start": 769,
      "end": 792
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 824,
        "end": 825
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
              "start": 826,
              "end": 827
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 826,
            "end": 827
          }
        ],
        "start": 825,
        "end": 828
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 832,
                "end": 833
              },
              "typeArguments": null,
              "start": 832,
              "end": 833
            },
            "start": 830,
            "end": 833
          },
          "start": 829,
          "end": 833
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 846,
                            "end": 847
                          },
                          "typeArguments": null,
                          "start": 846,
                          "end": 847
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 850,
                          "end": 854
                        }
                      ],
                      "start": 846,
                      "end": 854
                    },
                    "start": 844,
                    "end": 854
                  },
                  "start": 843,
                  "end": 854
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 857,
                          "end": 861
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 862,
                          "end": 868
                        },
                        "optional": false,
                        "computed": false,
                        "start": 857,
                        "end": 868
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 857,
                      "end": 870
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "value": 0.5,
                      "raw": "0.5",
                      "start": 873,
                      "end": 876
                    },
                    "start": 857,
                    "end": 876
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 879,
                    "end": 883
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 886,
                    "end": 887
                  },
                  "start": 857,
                  "end": 887
                },
                "definite": false,
                "start": 843,
                "end": 887
              }
            ],
            "declare": false,
            "start": 839,
            "end": 888
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "onlyNullablePlease",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 909
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 910,
                  "end": 911
                }
              ],
              "optional": false,
              "start": 891,
              "end": 912
            },
            "directive": null,
            "start": 891,
            "end": 913
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "onlyNullablePlease2",
                "optional": false,
                "typeAnnotation": null,
                "start": 931,
                "end": 950
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 951,
                  "end": 952
                }
              ],
              "optional": false,
              "start": 931,
              "end": 953
            },
            "directive": null,
            "start": 931,
            "end": 954
          }
        ],
        "start": 835,
        "end": 971
      },
      "expression": false,
      "start": 815,
      "end": 971
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 982,
        "end": 984
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
              "start": 985,
              "end": 986
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 985,
            "end": 986
          }
        ],
        "start": 984,
        "end": 987
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 994,
                    "end": 995
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
                        "start": 997,
                        "end": 998
                      },
                      "typeArguments": null,
                      "start": 997,
                      "end": 998
                    },
                    "start": 995,
                    "end": 998
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 994,
                  "end": 999
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1000,
                    "end": 1001
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
                        "start": 1003,
                        "end": 1004
                      },
                      "typeArguments": null,
                      "start": 1003,
                      "end": 1004
                    },
                    "start": 1001,
                    "end": 1004
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1000,
                  "end": 1004
                }
              ],
              "start": 992,
              "end": 1006
            },
            "start": 990,
            "end": 1006
          },
          "start": 988,
          "end": 1006
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1012,
                  "end": 1013
                },
                "typeArguments": null,
                "start": 1012,
                "end": 1013
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1022,
                  "end": 1023
                },
                "typeArguments": null,
                "start": 1022,
                "end": 1023
              },
              "trueType": {
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
                      "start": 1028,
                      "end": 1029
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
                          "start": 1031,
                          "end": 1032
                        },
                        "typeArguments": null,
                        "start": 1031,
                        "end": 1032
                      },
                      "start": 1029,
                      "end": 1032
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1028,
                    "end": 1033
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1034,
                      "end": 1035
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
                          "start": 1037,
                          "end": 1038
                        },
                        "typeArguments": null,
                        "start": 1037,
                        "end": 1038
                      },
                      "start": 1035,
                      "end": 1038
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1034,
                    "end": 1038
                  }
                ],
                "start": 1026,
                "end": 1040
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1043,
                "end": 1048
              },
              "start": 1012,
              "end": 1048
            },
            "start": 1010,
            "end": 1048
          },
          "start": 1008,
          "end": 1048
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1054,
                "end": 1056
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1059,
                "end": 1061
              },
              "start": 1054,
              "end": 1061
            },
            "directive": null,
            "start": 1054,
            "end": 1062
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1071,
                "end": 1073
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1076,
                "end": 1078
              },
              "start": 1071,
              "end": 1078
            },
            "directive": null,
            "start": 1071,
            "end": 1079
          }
        ],
        "start": 1050,
        "end": 1096
      },
      "expression": false,
      "start": 973,
      "end": 1096
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1103,
        "end": 1106
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
              "start": 1107,
              "end": 1108
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1107,
            "end": 1108
          }
        ],
        "start": 1106,
        "end": 1109
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1112,
            "end": 1113
          },
          "typeArguments": null,
          "start": 1112,
          "end": 1113
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1122,
            "end": 1126
          },
          "start": 1122,
          "end": 1126
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 1129,
          "end": 1135
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 1138,
            "end": 1141
          },
          "start": 1138,
          "end": 1141
        },
        "start": 1112,
        "end": 1141
      },
      "declare": false,
      "start": 1098,
      "end": 1142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1153,
        "end": 1157
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
              "start": 1158,
              "end": 1159
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1158,
            "end": 1159
          }
        ],
        "start": 1157,
        "end": 1160
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1164,
                "end": 1167
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
                      "start": 1168,
                      "end": 1169
                    },
                    "typeArguments": null,
                    "start": 1168,
                    "end": 1169
                  }
                ],
                "start": 1167,
                "end": 1170
              },
              "start": 1164,
              "end": 1170
            },
            "start": 1162,
            "end": 1170
          },
          "start": 1161,
          "end": 1170
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1175,
              "end": 1181
            },
            "start": 1173,
            "end": 1181
          },
          "start": 1172,
          "end": 1181
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1187,
                "end": 1188
              },
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1191,
                "end": 1194
              },
              "start": 1187,
              "end": 1194
            },
            "directive": null,
            "start": 1187,
            "end": 1195
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1234,
                "end": 1235
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1238,
                "end": 1239
              },
              "start": 1234,
              "end": 1239
            },
            "directive": null,
            "start": 1234,
            "end": 1240
          }
        ],
        "start": 1183,
        "end": 1251
      },
      "expression": false,
      "start": 1144,
      "end": 1251
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Distributive",
        "optional": false,
        "typeAnnotation": null,
        "start": 1268,
        "end": 1280
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
              "start": 1281,
              "end": 1282
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1281,
            "end": 1282
          }
        ],
        "start": 1280,
        "end": 1283
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1286,
            "end": 1287
          },
          "typeArguments": null,
          "start": 1286,
          "end": 1287
        },
        "extendsType": {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1298,
                "end": 1299
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1301,
                  "end": 1307
                },
                "start": 1299,
                "end": 1307
              },
              "accessibility": null,
              "static": false,
              "start": 1298,
              "end": 1307
            }
          ],
          "start": 1296,
          "end": 1309
        },
        "trueType": {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1314,
                "end": 1315
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1317,
                  "end": 1323
                },
                "start": 1315,
                "end": 1323
              },
              "accessibility": null,
              "static": false,
              "start": 1314,
              "end": 1323
            }
          ],
          "start": 1312,
          "end": 1325
        },
        "falseType": {
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
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1330,
                "end": 1331
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1333,
                  "end": 1339
                },
                "start": 1331,
                "end": 1339
              },
              "accessibility": null,
              "static": false,
              "start": 1330,
              "end": 1339
            }
          ],
          "start": 1328,
          "end": 1341
        },
        "start": 1286,
        "end": 1341
      },
      "declare": false,
      "start": 1263,
      "end": 1342
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testAssignabilityToConditionalType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1352,
        "end": 1386
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
              "start": 1387,
              "end": 1388
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1387,
            "end": 1388
          }
        ],
        "start": 1386,
        "end": 1389
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1402,
                  "end": 1403
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1408,
                        "end": 1409
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1411,
                        "end": 1412
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1408,
                      "end": 1412
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1414,
                        "end": 1415
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1417,
                        "end": 1418
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1414,
                      "end": 1418
                    }
                  ],
                  "start": 1406,
                  "end": 1420
                },
                "definite": false,
                "start": 1402,
                "end": 1420
              }
            ],
            "declare": false,
            "start": 1396,
            "end": 1421
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1434,
                              "end": 1435
                            },
                            "typeArguments": null,
                            "start": 1434,
                            "end": 1435
                          }
                        ],
                        "start": 1433,
                        "end": 1436
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1446,
                            "end": 1452
                          }
                        ],
                        "start": 1445,
                        "end": 1453
                      },
                      "trueType": {
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1462,
                              "end": 1463
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1465,
                                "end": 1471
                              },
                              "start": 1463,
                              "end": 1471
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1462,
                            "end": 1471
                          }
                        ],
                        "start": 1460,
                        "end": 1473
                      },
                      "falseType": {
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1482,
                              "end": 1483
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1485,
                                "end": 1491
                              },
                              "start": 1483,
                              "end": 1491
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1482,
                            "end": 1492
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1493,
                              "end": 1494
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1496,
                                "end": 1502
                              },
                              "start": 1494,
                              "end": 1502
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1493,
                            "end": 1502
                          }
                        ],
                        "start": 1480,
                        "end": 1504
                      },
                      "start": 1433,
                      "end": 1504
                    },
                    "start": 1431,
                    "end": 1504
                  },
                  "start": 1430,
                  "end": 1504
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1507,
                    "end": 1516
                  },
                  "start": 1507,
                  "end": 1517
                },
                "definite": false,
                "start": 1430,
                "end": 1517
              }
            ],
            "declare": false,
            "start": 1424,
            "end": 1518
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
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1553,
                              "end": 1554
                            },
                            "typeArguments": null,
                            "start": 1553,
                            "end": 1554
                          }
                        ],
                        "start": 1552,
                        "end": 1555
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1565,
                            "end": 1571
                          }
                        ],
                        "start": 1564,
                        "end": 1572
                      },
                      "trueType": {
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1577,
                              "end": 1578
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1580,
                                "end": 1586
                              },
                              "start": 1578,
                              "end": 1586
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1577,
                            "end": 1586
                          }
                        ],
                        "start": 1575,
                        "end": 1588
                      },
                      "falseType": {
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1593,
                              "end": 1594
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1596,
                                "end": 1602
                              },
                              "start": 1594,
                              "end": 1602
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1593,
                            "end": 1602
                          }
                        ],
                        "start": 1591,
                        "end": 1604
                      },
                      "start": 1552,
                      "end": 1604
                    },
                    "start": 1550,
                    "end": 1604
                  },
                  "start": 1548,
                  "end": 1604
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1607,
                  "end": 1608
                },
                "definite": false,
                "start": 1548,
                "end": 1608
              }
            ],
            "declare": false,
            "start": 1542,
            "end": 1609
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1695,
                              "end": 1696
                            },
                            "typeArguments": null,
                            "start": 1695,
                            "end": 1696
                          }
                        ],
                        "start": 1694,
                        "end": 1697
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1707,
                            "end": 1713
                          }
                        ],
                        "start": 1706,
                        "end": 1714
                      },
                      "trueType": {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1723,
                                "end": 1724
                              },
                              "typeArguments": null,
                              "start": 1723,
                              "end": 1724
                            }
                          ],
                          "start": 1722,
                          "end": 1725
                        },
                        "extendsType": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1735,
                              "end": 1741
                            }
                          ],
                          "start": 1734,
                          "end": 1742
                        },
                        "trueType": {
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
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1747,
                                "end": 1748
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1750,
                                  "end": 1756
                                },
                                "start": 1748,
                                "end": 1756
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1747,
                              "end": 1756
                            }
                          ],
                          "start": 1745,
                          "end": 1758
                        },
                        "falseType": {
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1763,
                                "end": 1764
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1766,
                                  "end": 1772
                                },
                                "start": 1764,
                                "end": 1772
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1763,
                              "end": 1772
                            }
                          ],
                          "start": 1761,
                          "end": 1774
                        },
                        "start": 1722,
                        "end": 1774
                      },
                      "falseType": {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1784,
                                "end": 1785
                              },
                              "typeArguments": null,
                              "start": 1784,
                              "end": 1785
                            }
                          ],
                          "start": 1783,
                          "end": 1786
                        },
                        "extendsType": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1796,
                              "end": 1802
                            }
                          ],
                          "start": 1795,
                          "end": 1803
                        },
                        "trueType": {
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
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1808,
                                "end": 1809
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1811,
                                  "end": 1817
                                },
                                "start": 1809,
                                "end": 1817
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1808,
                              "end": 1817
                            }
                          ],
                          "start": 1806,
                          "end": 1819
                        },
                        "falseType": {
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1824,
                                "end": 1825
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1827,
                                  "end": 1833
                                },
                                "start": 1825,
                                "end": 1833
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1824,
                              "end": 1833
                            }
                          ],
                          "start": 1822,
                          "end": 1835
                        },
                        "start": 1783,
                        "end": 1835
                      },
                      "start": 1694,
                      "end": 1836
                    },
                    "start": 1692,
                    "end": 1836
                  },
                  "start": 1690,
                  "end": 1836
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1839,
                  "end": 1840
                },
                "definite": false,
                "start": 1690,
                "end": 1840
              }
            ],
            "declare": false,
            "start": 1684,
            "end": 1841
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
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1891,
                              "end": 1892
                            },
                            "typeArguments": null,
                            "start": 1891,
                            "end": 1892
                          }
                        ],
                        "start": 1890,
                        "end": 1893
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSInferType",
                                "typeParameter": {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1910,
                                    "end": 1911
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1910,
                                  "end": 1911
                                },
                                "start": 1904,
                                "end": 1911
                              }
                            ],
                            "start": 1903,
                            "end": 1912
                          }
                        ],
                        "start": 1902,
                        "end": 1913
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1916,
                          "end": 1917
                        },
                        "typeArguments": null,
                        "start": 1916,
                        "end": 1917
                      },
                      "falseType": {
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1922,
                              "end": 1923
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1925,
                                "end": 1931
                              },
                              "start": 1923,
                              "end": 1931
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1922,
                            "end": 1931
                          }
                        ],
                        "start": 1920,
                        "end": 1933
                      },
                      "start": 1890,
                      "end": 1933
                    },
                    "start": 1888,
                    "end": 1933
                  },
                  "start": 1886,
                  "end": 1933
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1936,
                  "end": 1937
                },
                "definite": false,
                "start": 1886,
                "end": 1937
              }
            ],
            "declare": false,
            "start": 1880,
            "end": 1938
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
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2509,
                        "end": 2521
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
                              "start": 2522,
                              "end": 2523
                            },
                            "typeArguments": null,
                            "start": 2522,
                            "end": 2523
                          }
                        ],
                        "start": 2521,
                        "end": 2524
                      },
                      "start": 2509,
                      "end": 2524
                    },
                    "start": 2507,
                    "end": 2524
                  },
                  "start": 2505,
                  "end": 2524
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2527,
                  "end": 2528
                },
                "definite": false,
                "start": 2505,
                "end": 2528
              }
            ],
            "declare": false,
            "start": 2499,
            "end": 2529
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
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2618,
                        "end": 2630
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2631,
                                  "end": 2632
                                },
                                "typeArguments": null,
                                "start": 2631,
                                "end": 2632
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 2635,
                                "end": 2641
                              }
                            ],
                            "start": 2631,
                            "end": 2641
                          }
                        ],
                        "start": 2630,
                        "end": 2642
                      },
                      "start": 2618,
                      "end": 2642
                    },
                    "start": 2616,
                    "end": 2642
                  },
                  "start": 2614,
                  "end": 2642
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2645,
                  "end": 2646
                },
                "definite": false,
                "start": 2614,
                "end": 2646
              }
            ],
            "declare": false,
            "start": 2608,
            "end": 2647
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
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2723,
                        "end": 2735
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2738,
                                  "end": 2739
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
                                      "start": 2741,
                                      "end": 2742
                                    },
                                    "typeArguments": null,
                                    "start": 2741,
                                    "end": 2742
                                  },
                                  "start": 2739,
                                  "end": 2742
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 2738,
                                "end": 2742
                              }
                            ],
                            "start": 2736,
                            "end": 2744
                          }
                        ],
                        "start": 2735,
                        "end": 2745
                      },
                      "start": 2723,
                      "end": 2745
                    },
                    "start": 2721,
                    "end": 2745
                  },
                  "start": 2719,
                  "end": 2745
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2748,
                  "end": 2749
                },
                "definite": false,
                "start": 2719,
                "end": 2749
              }
            ],
            "declare": false,
            "start": 2713,
            "end": 2750
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
                  "name": "o6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2924,
                        "end": 2936
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2938,
                                    "end": 2939
                                  },
                                  "typeArguments": null,
                                  "start": 2938,
                                  "end": 2939
                                }
                              ],
                              "start": 2937,
                              "end": 2940
                            },
                            "extendsType": {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSNeverKeyword",
                                  "start": 2950,
                                  "end": 2955
                                }
                              ],
                              "start": 2949,
                              "end": 2956
                            },
                            "trueType": {
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
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2961,
                                    "end": 2962
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 2964,
                                      "end": 2970
                                    },
                                    "start": 2962,
                                    "end": 2970
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 2961,
                                  "end": 2970
                                }
                              ],
                              "start": 2959,
                              "end": 2972
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 2975,
                              "end": 2980
                            },
                            "start": 2937,
                            "end": 2980
                          }
                        ],
                        "start": 2936,
                        "end": 2981
                      },
                      "start": 2924,
                      "end": 2981
                    },
                    "start": 2922,
                    "end": 2981
                  },
                  "start": 2920,
                  "end": 2981
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2984,
                  "end": 2985
                },
                "definite": false,
                "start": 2920,
                "end": 2985
              }
            ],
            "declare": false,
            "start": 2914,
            "end": 2986
          }
        ],
        "start": 1392,
        "end": 2988
      },
      "expression": false,
      "start": 1343,
      "end": 2988
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 2995,
        "end": 3002
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
              "start": 3003,
              "end": 3004
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3003,
            "end": 3004
          }
        ],
        "start": 3002,
        "end": 3005
      },
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
              "name": "___secret",
              "optional": false,
              "typeAnnotation": null,
              "start": 3010,
              "end": 3019
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
                  "start": 3021,
                  "end": 3022
                },
                "typeArguments": null,
                "start": 3021,
                "end": 3022
              },
              "start": 3019,
              "end": 3022
            },
            "accessibility": null,
            "static": false,
            "start": 3010,
            "end": 3022
          }
        ],
        "start": 3008,
        "end": 3024
      },
      "declare": false,
      "start": 2990,
      "end": 3025
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unwrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 3031,
        "end": 3037
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
              "start": 3038,
              "end": 3039
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3038,
            "end": 3039
          }
        ],
        "start": 3037,
        "end": 3040
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3043,
            "end": 3044
          },
          "typeArguments": null,
          "start": 3043,
          "end": 3044
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Wrapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 3053,
            "end": 3060
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3067,
                    "end": 3068
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3067,
                  "end": 3068
                },
                "start": 3061,
                "end": 3068
              }
            ],
            "start": 3060,
            "end": 3069
          },
          "start": 3053,
          "end": 3069
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 3072,
            "end": 3073
          },
          "typeArguments": null,
          "start": 3072,
          "end": 3073
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3076,
            "end": 3077
          },
          "typeArguments": null,
          "start": 3076,
          "end": 3077
        },
        "start": 3043,
        "end": 3077
      },
      "declare": false,
      "start": 3026,
      "end": 3078
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "set",
        "optional": false,
        "typeAnnotation": null,
        "start": 3097,
        "end": 3100
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3101,
              "end": 3102
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3101,
            "end": 3102
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3104,
              "end": 3105
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3120,
                  "end": 3121
                },
                "typeArguments": null,
                "start": 3120,
                "end": 3121
              },
              "start": 3114,
              "end": 3121
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3104,
            "end": 3121
          }
        ],
        "start": 3100,
        "end": 3122
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 3131,
                "end": 3132
              },
              "typeArguments": null,
              "start": 3131,
              "end": 3132
            },
            "start": 3129,
            "end": 3132
          },
          "start": 3126,
          "end": 3132
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3141,
                "end": 3142
              },
              "typeArguments": null,
              "start": 3141,
              "end": 3142
            },
            "start": 3139,
            "end": 3142
          },
          "start": 3136,
          "end": 3142
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unwrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 3153,
                "end": 3159
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3160,
                        "end": 3161
                      },
                      "typeArguments": null,
                      "start": 3160,
                      "end": 3161
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3162,
                        "end": 3163
                      },
                      "typeArguments": null,
                      "start": 3162,
                      "end": 3163
                    },
                    "start": 3160,
                    "end": 3164
                  }
                ],
                "start": 3159,
                "end": 3165
              },
              "start": 3153,
              "end": 3165
            },
            "start": 3151,
            "end": 3165
          },
          "start": 3146,
          "end": 3165
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Unwrap",
            "optional": false,
            "typeAnnotation": null,
            "start": 3169,
            "end": 3175
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3176,
                    "end": 3177
                  },
                  "typeArguments": null,
                  "start": 3176,
                  "end": 3177
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3178,
                    "end": 3179
                  },
                  "typeArguments": null,
                  "start": 3178,
                  "end": 3179
                },
                "start": 3176,
                "end": 3180
              }
            ],
            "start": 3175,
            "end": 3181
          },
          "start": 3169,
          "end": 3181
        },
        "start": 3167,
        "end": 3181
      },
      "body": null,
      "expression": false,
      "start": 3080,
      "end": 3182
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3190,
        "end": 3194
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 3199,
              "end": 3203
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Wrapped",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3206,
                  "end": 3213
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3214,
                      "end": 3220
                    }
                  ],
                  "start": 3213,
                  "end": 3221
                },
                "start": 3206,
                "end": 3221
              },
              "start": 3204,
              "end": 3221
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 3199,
            "end": 3222
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 3226,
              "end": 3232
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "set",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3241,
                        "end": 3244
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 3245,
                          "end": 3249
                        },
                        {
                          "type": "Literal",
                          "value": "prop",
                          "raw": "\"prop\"",
                          "start": 3251,
                          "end": 3257
                        },
                        {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 3259,
                          "end": 3263
                        }
                      ],
                      "optional": false,
                      "start": 3241,
                      "end": 3264
                    },
                    "directive": null,
                    "start": 3241,
                    "end": 3265
                  }
                ],
                "start": 3235,
                "end": 3287
              },
              "expression": false,
              "start": 3232,
              "end": 3287
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3226,
            "end": 3287
          }
        ],
        "start": 3195,
        "end": 3289
      },
      "abstract": false,
      "declare": false,
      "start": 3184,
      "end": 3289
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "set",
          "optional": false,
          "typeAnnotation": null,
          "start": 3291,
          "end": 3294
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3299,
              "end": 3303
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3295,
            "end": 3305
          },
          {
            "type": "Literal",
            "value": "prop",
            "raw": "\"prop\"",
            "start": 3307,
            "end": 3313
          },
          {
            "type": "Literal",
            "value": "hi",
            "raw": "\"hi\"",
            "start": 3315,
            "end": 3319
          }
        ],
        "optional": false,
        "start": 3291,
        "end": 3320
      },
      "directive": null,
      "start": 3291,
      "end": 3321
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferBecauseWhyNot",
        "optional": false,
        "typeAnnotation": null,
        "start": 3346,
        "end": 3364
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
              "start": 3365,
              "end": 3366
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3365,
            "end": 3366
          }
        ],
        "start": 3364,
        "end": 3367
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3371,
                "end": 3372
              },
              "typeArguments": null,
              "start": 3371,
              "end": 3372
            }
          ],
          "start": 3370,
          "end": 3373
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3393,
                          "end": 3395
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 3393,
                        "end": 3395
                      },
                      "start": 3387,
                      "end": 3395
                    },
                    "start": 3385,
                    "end": 3395
                  },
                  "start": 3384,
                  "end": 3395
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3400,
                  "end": 3403
                },
                "start": 3397,
                "end": 3403
              },
              "start": 3383,
              "end": 3403
            }
          ],
          "start": 3382,
          "end": 3404
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3409,
                "end": 3411
              },
              "typeArguments": null,
              "start": 3409,
              "end": 3411
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3414,
                "end": 3415
              },
              "typeArguments": null,
              "start": 3414,
              "end": 3415
            }
          ],
          "start": 3409,
          "end": 3415
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3420,
          "end": 3425
        },
        "start": 3370,
        "end": 3425
      },
      "declare": false,
      "start": 3341,
      "end": 3426
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3437,
        "end": 3439
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
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 3440,
              "end": 3441
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3456,
                      "end": 3459
                    },
                    "start": 3454,
                    "end": 3459
                  },
                  "start": 3451,
                  "end": 3459
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3464,
                  "end": 3467
                },
                "start": 3461,
                "end": 3467
              },
              "start": 3450,
              "end": 3467
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3440,
            "end": 3467
          }
        ],
        "start": 3439,
        "end": 3468
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 3472,
                "end": 3473
              },
              "typeArguments": null,
              "start": 3472,
              "end": 3473
            },
            "start": 3470,
            "end": 3473
          },
          "start": 3469,
          "end": 3473
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "InferBecauseWhyNot",
            "optional": false,
            "typeAnnotation": null,
            "start": 3476,
            "end": 3494
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3495,
                  "end": 3496
                },
                "typeArguments": null,
                "start": 3495,
                "end": 3496
              }
            ],
            "start": 3494,
            "end": 3497
          },
          "start": 3476,
          "end": 3497
        },
        "start": 3474,
        "end": 3497
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3509,
              "end": 3510
            },
            "start": 3502,
            "end": 3511
          }
        ],
        "start": 3498,
        "end": 3513
      },
      "expression": false,
      "start": 3428,
      "end": 3513
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferBecauseWhyNotDistributive",
        "optional": false,
        "typeAnnotation": null,
        "start": 3520,
        "end": 3550
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
              "start": 3551,
              "end": 3552
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3551,
            "end": 3552
          }
        ],
        "start": 3550,
        "end": 3553
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3556,
            "end": 3557
          },
          "typeArguments": null,
          "start": 3556,
          "end": 3557
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3576,
                      "end": 3578
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3576,
                    "end": 3578
                  },
                  "start": 3570,
                  "end": 3578
                },
                "start": 3568,
                "end": 3578
              },
              "start": 3567,
              "end": 3578
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3583,
              "end": 3586
            },
            "start": 3580,
            "end": 3586
          },
          "start": 3566,
          "end": 3586
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3591,
                "end": 3593
              },
              "typeArguments": null,
              "start": 3591,
              "end": 3593
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3596,
                "end": 3597
              },
              "typeArguments": null,
              "start": 3596,
              "end": 3597
            }
          ],
          "start": 3591,
          "end": 3597
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3602,
          "end": 3607
        },
        "start": 3556,
        "end": 3607
      },
      "declare": false,
      "start": 3515,
      "end": 3608
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3619,
        "end": 3621
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
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 3622,
              "end": 3623
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3638,
                      "end": 3641
                    },
                    "start": 3636,
                    "end": 3641
                  },
                  "start": 3633,
                  "end": 3641
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3646,
                  "end": 3649
                },
                "start": 3643,
                "end": 3649
              },
              "start": 3632,
              "end": 3649
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3622,
            "end": 3649
          }
        ],
        "start": 3621,
        "end": 3650
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 3657,
                "end": 3658
              },
              "typeArguments": null,
              "start": 3657,
              "end": 3658
            },
            "start": 3655,
            "end": 3658
          },
          "start": 3654,
          "end": 3658
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "InferBecauseWhyNotDistributive",
            "optional": false,
            "typeAnnotation": null,
            "start": 3662,
            "end": 3692
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3693,
                  "end": 3694
                },
                "typeArguments": null,
                "start": 3693,
                "end": 3694
              }
            ],
            "start": 3692,
            "end": 3695
          },
          "start": 3662,
          "end": 3695
        },
        "start": 3660,
        "end": 3695
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3707,
              "end": 3708
            },
            "start": 3700,
            "end": 3709
          }
        ],
        "start": 3696,
        "end": 3726
      },
      "expression": false,
      "start": 3610,
      "end": 3726
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3726
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11,
    "range": [
      7,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "FilterPropsByType",
    "start": 12,
    "end": 29,
    "range": [
      12,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "TT",
    "start": 33,
    "end": 35,
    "range": [
      33,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 46,
    "end": 48,
    "range": [
      46,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 49,
    "end": 54,
    "range": [
      49,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 64,
    "end": 71,
    "range": [
      64,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "TT",
    "start": 72,
    "end": 74,
    "range": [
      72,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 81,
    "end": 86,
    "range": [
      81,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 89,
    "end": 94,
    "range": [
      89,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 100,
    "end": 108,
    "range": [
      100,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 109,
    "end": 115,
    "range": [
      109,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 121,
    "end": 128,
    "range": [
      121,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 129,
    "end": 135,
    "range": [
      129,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 138,
    "end": 144,
    "range": [
      138,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "TList",
    "start": 148,
    "end": 153,
    "range": [
      148,
      153
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 154,
    "end": 161,
    "range": [
      154,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 162,
    "end": 168,
    "range": [
      162,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "TValueProp",
    "start": 172,
    "end": 182,
    "range": [
      172,
      182
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 183,
    "end": 190,
    "range": [
      183,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "FilterPropsByType",
    "start": 191,
    "end": 208,
    "range": [
      191,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "TList",
    "start": 209,
    "end": 214,
    "range": [
      209,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 221,
    "end": 229,
    "range": [
      221,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 234,
    "end": 238,
    "range": [
      234,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "TList",
    "start": 240,
    "end": 245,
    "range": [
      240,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "valueProp",
    "start": 249,
    "end": 258,
    "range": [
      249,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "TValueProp",
    "start": 260,
    "end": 270,
    "range": [
      260,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 276,
    "end": 282,
    "range": [
      276,
      282
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 283,
    "end": 291,
    "range": [
      283,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 292,
    "end": 296,
    "range": [
      292,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "XX",
    "start": 297,
    "end": 299,
    "range": [
      297,
      299
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 300,
    "end": 307,
    "range": [
      300,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 308,
    "end": 314,
    "range": [
      308,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "XX",
    "start": 319,
    "end": 321,
    "range": [
      319,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "tipos",
    "start": 323,
    "end": 328,
    "range": [
      323,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 332,
    "end": 337,
    "range": [
      332,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "XX",
    "start": 339,
    "end": 341,
    "range": [
      339,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 351,
    "end": 357,
    "range": [
      351,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "tipos",
    "start": 361,
    "end": 366,
    "range": [
      361,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 368,
    "end": 375,
    "range": [
      368,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 381,
    "end": 388,
    "range": [
      381,
      388
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 389,
    "end": 397,
    "range": [
      389,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "onlyNullablePlease",
    "start": 398,
    "end": 416,
    "range": [
      398,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 419,
    "end": 426,
    "range": [
      419,
      426
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 427,
    "end": 431,
    "range": [
      427,
      431
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 432,
    "end": 439,
    "range": [
      432,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 444,
    "end": 447,
    "range": [
      444,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 450,
    "end": 455,
    "range": [
      450,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 460,
    "end": 465,
    "range": [
      460,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 472,
    "end": 476,
    "range": [
      472,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 479,
    "end": 486,
    "range": [
      479,
      486
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 487,
    "end": 495,
    "range": [
      487,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "onlyNullablePlease2",
    "start": 496,
    "end": 515,
    "range": [
      496,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 521,
    "end": 528,
    "range": [
      521,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 530,
    "end": 534,
    "range": [
      530,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 536,
    "end": 543,
    "range": [
      536,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 550,
    "end": 553,
    "range": [
      550,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 556,
    "end": 561,
    "range": [
      556,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 564,
    "end": 569,
    "range": [
      564,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 575,
    "end": 579,
    "range": [
      575,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 582,
    "end": 589,
    "range": [
      582,
      589
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 590,
    "end": 593,
    "range": [
      590,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 597,
    "end": 603,
    "range": [
      597,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 606,
    "end": 610,
    "range": [
      606,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "onlyNullablePlease",
    "start": 612,
    "end": 630,
    "range": [
      612,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "onlyNullablePlease2",
    "start": 656,
    "end": 675,
    "range": [
      656,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 702,
    "end": 709,
    "range": [
      702,
      709
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 710,
    "end": 713,
    "range": [
      710,
      713
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 717,
    "end": 723,
    "range": [
      717,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "onlyNullablePlease",
    "start": 725,
    "end": 743,
    "range": [
      725,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "onlyNullablePlease2",
    "start": 769,
    "end": 788,
    "range": [
      769,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 815,
    "end": 823,
    "range": [
      815,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 839,
    "end": 842,
    "range": [
      839,
      842
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 850,
    "end": 854,
    "range": [
      850,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 857,
    "end": 861,
    "range": [
      857,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 862,
    "end": 868,
    "range": [
      862,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 873,
    "end": 876,
    "range": [
      873,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 879,
    "end": 883,
    "range": [
      879,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Identifier",
    "value": "onlyNullablePlease",
    "start": 891,
    "end": 909,
    "range": [
      891,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Identifier",
    "value": "onlyNullablePlease2",
    "start": 931,
    "end": 950,
    "range": [
      931,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 973,
    "end": 981,
    "range": [
      973,
      981
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 982,
    "end": 984,
    "range": [
      982,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 988,
    "end": 990,
    "range": [
      988,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1008,
    "end": 1010,
    "range": [
      1008,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1014,
    "end": 1021,
    "range": [
      1014,
      1021
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1043,
    "end": 1048,
    "range": [
      1043,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1054,
    "end": 1056,
    "range": [
      1054,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1059,
    "end": 1061,
    "range": [
      1059,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1071,
    "end": 1073,
    "range": [
      1071,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1076,
    "end": 1078,
    "range": [
      1076,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1098,
    "end": 1102,
    "range": [
      1098,
      1102
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1103,
    "end": 1106,
    "range": [
      1103,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1114,
    "end": 1121,
    "range": [
      1114,
      1121
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1122,
    "end": 1126,
    "range": [
      1122,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1129,
    "end": 1135,
    "range": [
      1129,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1138,
    "end": 1141,
    "range": [
      1138,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1144,
    "end": 1152,
    "range": [
      1144,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1153,
    "end": 1157,
    "range": [
      1153,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1164,
    "end": 1167,
    "range": [
      1164,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1175,
    "end": 1181,
    "range": [
      1175,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1191,
    "end": 1194,
    "range": [
      1191,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1263,
    "end": 1267,
    "range": [
      1263,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "Distributive",
    "start": 1268,
    "end": 1280,
    "range": [
      1268,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1288,
    "end": 1295,
    "range": [
      1288,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1301,
    "end": 1307,
    "range": [
      1301,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1317,
    "end": 1323,
    "range": [
      1317,
      1323
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1333,
    "end": 1339,
    "range": [
      1333,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1343,
    "end": 1351,
    "range": [
      1343,
      1351
    ]
  },
  {
    "type": "Identifier",
    "value": "testAssignabilityToConditionalType",
    "start": 1352,
    "end": 1386,
    "range": [
      1352,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1396,
    "end": 1401,
    "range": [
      1396,
      1401
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1424,
    "end": 1429,
    "range": [
      1424,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1437,
    "end": 1444,
    "range": [
      1437,
      1444
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1446,
    "end": 1452,
    "range": [
      1446,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1465,
    "end": 1471,
    "range": [
      1465,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1485,
    "end": 1491,
    "range": [
      1485,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1496,
    "end": 1502,
    "range": [
      1496,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1507,
    "end": 1516,
    "range": [
      1507,
      1516
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1542,
    "end": 1547,
    "range": [
      1542,
      1547
    ]
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 1548,
    "end": 1550,
    "range": [
      1548,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1556,
    "end": 1563,
    "range": [
      1556,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1565,
    "end": 1571,
    "range": [
      1565,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1580,
    "end": 1586,
    "range": [
      1580,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1596,
    "end": 1602,
    "range": [
      1596,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1684,
    "end": 1689,
    "range": [
      1684,
      1689
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1690,
    "end": 1692,
    "range": [
      1690,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1698,
    "end": 1705,
    "range": [
      1698,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1707,
    "end": 1713,
    "range": [
      1707,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1726,
    "end": 1733,
    "range": [
      1726,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1735,
    "end": 1741,
    "range": [
      1735,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1750,
    "end": 1756,
    "range": [
      1750,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1766,
    "end": 1772,
    "range": [
      1766,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1787,
    "end": 1794,
    "range": [
      1787,
      1794
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1796,
    "end": 1802,
    "range": [
      1796,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1811,
    "end": 1817,
    "range": [
      1811,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1818,
    "end": 1819,
    "range": [
      1818,
      1819
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1820,
    "end": 1821,
    "range": [
      1820,
      1821
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1827,
    "end": 1833,
    "range": [
      1827,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1880,
    "end": 1885,
    "range": [
      1880,
      1885
    ]
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 1886,
    "end": 1888,
    "range": [
      1886,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1894,
    "end": 1901,
    "range": [
      1894,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1904,
    "end": 1909,
    "range": [
      1904,
      1909
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1911,
    "end": 1912,
    "range": [
      1911,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1925,
    "end": 1931,
    "range": [
      1925,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1932,
    "end": 1933,
    "range": [
      1932,
      1933
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2499,
    "end": 2504,
    "range": [
      2499,
      2504
    ]
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 2505,
    "end": 2507,
    "range": [
      2505,
      2507
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2507,
    "end": 2508,
    "range": [
      2507,
      2508
    ]
  },
  {
    "type": "Identifier",
    "value": "Distributive",
    "start": 2509,
    "end": 2521,
    "range": [
      2509,
      2521
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2521,
    "end": 2522,
    "range": [
      2521,
      2522
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2522,
    "end": 2523,
    "range": [
      2522,
      2523
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2523,
    "end": 2524,
    "range": [
      2523,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2525,
    "end": 2526,
    "range": [
      2525,
      2526
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2527,
    "end": 2528,
    "range": [
      2527,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2528,
    "end": 2529,
    "range": [
      2528,
      2529
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2608,
    "end": 2613,
    "range": [
      2608,
      2613
    ]
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 2614,
    "end": 2616,
    "range": [
      2614,
      2616
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2616,
    "end": 2617,
    "range": [
      2616,
      2617
    ]
  },
  {
    "type": "Identifier",
    "value": "Distributive",
    "start": 2618,
    "end": 2630,
    "range": [
      2618,
      2630
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2630,
    "end": 2631,
    "range": [
      2630,
      2631
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2631,
    "end": 2632,
    "range": [
      2631,
      2632
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2633,
    "end": 2634,
    "range": [
      2633,
      2634
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2635,
    "end": 2641,
    "range": [
      2635,
      2641
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2641,
    "end": 2642,
    "range": [
      2641,
      2642
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2643,
    "end": 2644,
    "range": [
      2643,
      2644
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2645,
    "end": 2646,
    "range": [
      2645,
      2646
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2646,
    "end": 2647,
    "range": [
      2646,
      2647
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2713,
    "end": 2718,
    "range": [
      2713,
      2718
    ]
  },
  {
    "type": "Identifier",
    "value": "o5",
    "start": 2719,
    "end": 2721,
    "range": [
      2719,
      2721
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2721,
    "end": 2722,
    "range": [
      2721,
      2722
    ]
  },
  {
    "type": "Identifier",
    "value": "Distributive",
    "start": 2723,
    "end": 2735,
    "range": [
      2723,
      2735
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2735,
    "end": 2736,
    "range": [
      2735,
      2736
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2736,
    "end": 2737,
    "range": [
      2736,
      2737
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2738,
    "end": 2739,
    "range": [
      2738,
      2739
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2739,
    "end": 2740,
    "range": [
      2739,
      2740
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2741,
    "end": 2742,
    "range": [
      2741,
      2742
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2743,
    "end": 2744,
    "range": [
      2743,
      2744
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2744,
    "end": 2745,
    "range": [
      2744,
      2745
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2746,
    "end": 2747,
    "range": [
      2746,
      2747
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2748,
    "end": 2749,
    "range": [
      2748,
      2749
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2749,
    "end": 2750,
    "range": [
      2749,
      2750
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2914,
    "end": 2919,
    "range": [
      2914,
      2919
    ]
  },
  {
    "type": "Identifier",
    "value": "o6",
    "start": 2920,
    "end": 2922,
    "range": [
      2920,
      2922
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2922,
    "end": 2923,
    "range": [
      2922,
      2923
    ]
  },
  {
    "type": "Identifier",
    "value": "Distributive",
    "start": 2924,
    "end": 2936,
    "range": [
      2924,
      2936
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2936,
    "end": 2937,
    "range": [
      2936,
      2937
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2937,
    "end": 2938,
    "range": [
      2937,
      2938
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2938,
    "end": 2939,
    "range": [
      2938,
      2939
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2939,
    "end": 2940,
    "range": [
      2939,
      2940
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2941,
    "end": 2948,
    "range": [
      2941,
      2948
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2949,
    "end": 2950,
    "range": [
      2949,
      2950
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2950,
    "end": 2955,
    "range": [
      2950,
      2955
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2955,
    "end": 2956,
    "range": [
      2955,
      2956
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2957,
    "end": 2958,
    "range": [
      2957,
      2958
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2959,
    "end": 2960,
    "range": [
      2959,
      2960
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2962,
    "end": 2963,
    "range": [
      2962,
      2963
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2964,
    "end": 2970,
    "range": [
      2964,
      2970
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2971,
    "end": 2972,
    "range": [
      2971,
      2972
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2973,
    "end": 2974,
    "range": [
      2973,
      2974
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2975,
    "end": 2980,
    "range": [
      2975,
      2980
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2980,
    "end": 2981,
    "range": [
      2980,
      2981
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2982,
    "end": 2983,
    "range": [
      2982,
      2983
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2984,
    "end": 2985,
    "range": [
      2984,
      2985
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2985,
    "end": 2986,
    "range": [
      2985,
      2986
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2987,
    "end": 2988,
    "range": [
      2987,
      2988
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2990,
    "end": 2994,
    "range": [
      2990,
      2994
    ]
  },
  {
    "type": "Identifier",
    "value": "Wrapped",
    "start": 2995,
    "end": 3002,
    "range": [
      2995,
      3002
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3002,
    "end": 3003,
    "range": [
      3002,
      3003
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3003,
    "end": 3004,
    "range": [
      3003,
      3004
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3004,
    "end": 3005,
    "range": [
      3004,
      3005
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3006,
    "end": 3007,
    "range": [
      3006,
      3007
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3008,
    "end": 3009,
    "range": [
      3008,
      3009
    ]
  },
  {
    "type": "Identifier",
    "value": "___secret",
    "start": 3010,
    "end": 3019,
    "range": [
      3010,
      3019
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3019,
    "end": 3020,
    "range": [
      3019,
      3020
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3021,
    "end": 3022,
    "range": [
      3021,
      3022
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3023,
    "end": 3024,
    "range": [
      3023,
      3024
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3024,
    "end": 3025,
    "range": [
      3024,
      3025
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3026,
    "end": 3030,
    "range": [
      3026,
      3030
    ]
  },
  {
    "type": "Identifier",
    "value": "Unwrap",
    "start": 3031,
    "end": 3037,
    "range": [
      3031,
      3037
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3037,
    "end": 3038,
    "range": [
      3037,
      3038
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3038,
    "end": 3039,
    "range": [
      3038,
      3039
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3039,
    "end": 3040,
    "range": [
      3039,
      3040
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3041,
    "end": 3042,
    "range": [
      3041,
      3042
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3043,
    "end": 3044,
    "range": [
      3043,
      3044
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3045,
    "end": 3052,
    "range": [
      3045,
      3052
    ]
  },
  {
    "type": "Identifier",
    "value": "Wrapped",
    "start": 3053,
    "end": 3060,
    "range": [
      3053,
      3060
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3060,
    "end": 3061,
    "range": [
      3060,
      3061
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3061,
    "end": 3066,
    "range": [
      3061,
      3066
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3067,
    "end": 3068,
    "range": [
      3067,
      3068
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3068,
    "end": 3069,
    "range": [
      3068,
      3069
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3070,
    "end": 3071,
    "range": [
      3070,
      3071
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3072,
    "end": 3073,
    "range": [
      3072,
      3073
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3074,
    "end": 3075,
    "range": [
      3074,
      3075
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3076,
    "end": 3077,
    "range": [
      3076,
      3077
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3077,
    "end": 3078,
    "range": [
      3077,
      3078
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3080,
    "end": 3087,
    "range": [
      3080,
      3087
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3088,
    "end": 3096,
    "range": [
      3088,
      3096
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3097,
    "end": 3100,
    "range": [
      3097,
      3100
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3100,
    "end": 3101,
    "range": [
      3100,
      3101
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3101,
    "end": 3102,
    "range": [
      3101,
      3102
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3102,
    "end": 3103,
    "range": [
      3102,
      3103
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3104,
    "end": 3105,
    "range": [
      3104,
      3105
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3106,
    "end": 3113,
    "range": [
      3106,
      3113
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3114,
    "end": 3119,
    "range": [
      3114,
      3119
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3120,
    "end": 3121,
    "range": [
      3120,
      3121
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3121,
    "end": 3122,
    "range": [
      3121,
      3122
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3122,
    "end": 3123,
    "range": [
      3122,
      3123
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3126,
    "end": 3129,
    "range": [
      3126,
      3129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3129,
    "end": 3130,
    "range": [
      3129,
      3130
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3131,
    "end": 3132,
    "range": [
      3131,
      3132
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3132,
    "end": 3133,
    "range": [
      3132,
      3133
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3136,
    "end": 3139,
    "range": [
      3136,
      3139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3139,
    "end": 3140,
    "range": [
      3139,
      3140
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3141,
    "end": 3142,
    "range": [
      3141,
      3142
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3142,
    "end": 3143,
    "range": [
      3142,
      3143
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3146,
    "end": 3151,
    "range": [
      3146,
      3151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3151,
    "end": 3152,
    "range": [
      3151,
      3152
    ]
  },
  {
    "type": "Identifier",
    "value": "Unwrap",
    "start": 3153,
    "end": 3159,
    "range": [
      3153,
      3159
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3159,
    "end": 3160,
    "range": [
      3159,
      3160
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3160,
    "end": 3161,
    "range": [
      3160,
      3161
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3161,
    "end": 3162,
    "range": [
      3161,
      3162
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3162,
    "end": 3163,
    "range": [
      3162,
      3163
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3163,
    "end": 3164,
    "range": [
      3163,
      3164
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3164,
    "end": 3165,
    "range": [
      3164,
      3165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3166,
    "end": 3167,
    "range": [
      3166,
      3167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3167,
    "end": 3168,
    "range": [
      3167,
      3168
    ]
  },
  {
    "type": "Identifier",
    "value": "Unwrap",
    "start": 3169,
    "end": 3175,
    "range": [
      3169,
      3175
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3175,
    "end": 3176,
    "range": [
      3175,
      3176
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3176,
    "end": 3177,
    "range": [
      3176,
      3177
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3177,
    "end": 3178,
    "range": [
      3177,
      3178
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3178,
    "end": 3179,
    "range": [
      3178,
      3179
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3179,
    "end": 3180,
    "range": [
      3179,
      3180
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3180,
    "end": 3181,
    "range": [
      3180,
      3181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3181,
    "end": 3182,
    "range": [
      3181,
      3182
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3184,
    "end": 3189,
    "range": [
      3184,
      3189
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 3190,
    "end": 3194,
    "range": [
      3190,
      3194
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3195,
    "end": 3196,
    "range": [
      3195,
      3196
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 3199,
    "end": 3203,
    "range": [
      3199,
      3203
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3203,
    "end": 3204,
    "range": [
      3203,
      3204
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3204,
    "end": 3205,
    "range": [
      3204,
      3205
    ]
  },
  {
    "type": "Identifier",
    "value": "Wrapped",
    "start": 3206,
    "end": 3213,
    "range": [
      3206,
      3213
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3213,
    "end": 3214,
    "range": [
      3213,
      3214
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3214,
    "end": 3220,
    "range": [
      3214,
      3220
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3220,
    "end": 3221,
    "range": [
      3220,
      3221
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3221,
    "end": 3222,
    "range": [
      3221,
      3222
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 3226,
    "end": 3232,
    "range": [
      3226,
      3232
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3232,
    "end": 3233,
    "range": [
      3232,
      3233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3233,
    "end": 3234,
    "range": [
      3233,
      3234
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3235,
    "end": 3236,
    "range": [
      3235,
      3236
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3241,
    "end": 3244,
    "range": [
      3241,
      3244
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3244,
    "end": 3245,
    "range": [
      3244,
      3245
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3245,
    "end": 3249,
    "range": [
      3245,
      3249
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3249,
    "end": 3250,
    "range": [
      3249,
      3250
    ]
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 3251,
    "end": 3257,
    "range": [
      3251,
      3257
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3257,
    "end": 3258,
    "range": [
      3257,
      3258
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 3259,
    "end": 3263,
    "range": [
      3259,
      3263
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3263,
    "end": 3264,
    "range": [
      3263,
      3264
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3264,
    "end": 3265,
    "range": [
      3264,
      3265
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3286,
    "end": 3287,
    "range": [
      3286,
      3287
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3288,
    "end": 3289,
    "range": [
      3288,
      3289
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3291,
    "end": 3294,
    "range": [
      3291,
      3294
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3294,
    "end": 3295,
    "range": [
      3294,
      3295
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3295,
    "end": 3298,
    "range": [
      3295,
      3298
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 3299,
    "end": 3303,
    "range": [
      3299,
      3303
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3303,
    "end": 3304,
    "range": [
      3303,
      3304
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3304,
    "end": 3305,
    "range": [
      3304,
      3305
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3305,
    "end": 3306,
    "range": [
      3305,
      3306
    ]
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 3307,
    "end": 3313,
    "range": [
      3307,
      3313
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3313,
    "end": 3314,
    "range": [
      3313,
      3314
    ]
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 3315,
    "end": 3319,
    "range": [
      3315,
      3319
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3319,
    "end": 3320,
    "range": [
      3319,
      3320
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3320,
    "end": 3321,
    "range": [
      3320,
      3321
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3341,
    "end": 3345,
    "range": [
      3341,
      3345
    ]
  },
  {
    "type": "Identifier",
    "value": "InferBecauseWhyNot",
    "start": 3346,
    "end": 3364,
    "range": [
      3346,
      3364
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3364,
    "end": 3365,
    "range": [
      3364,
      3365
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3365,
    "end": 3366,
    "range": [
      3365,
      3366
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3366,
    "end": 3367,
    "range": [
      3366,
      3367
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3368,
    "end": 3369,
    "range": [
      3368,
      3369
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3370,
    "end": 3371,
    "range": [
      3370,
      3371
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3371,
    "end": 3372,
    "range": [
      3371,
      3372
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3372,
    "end": 3373,
    "range": [
      3372,
      3373
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3374,
    "end": 3381,
    "range": [
      3374,
      3381
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3382,
    "end": 3383,
    "range": [
      3382,
      3383
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3383,
    "end": 3384,
    "range": [
      3383,
      3384
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3385,
    "end": 3386,
    "range": [
      3385,
      3386
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3387,
    "end": 3392,
    "range": [
      3387,
      3392
    ]
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 3393,
    "end": 3395,
    "range": [
      3393,
      3395
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3395,
    "end": 3396,
    "range": [
      3395,
      3396
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3397,
    "end": 3399,
    "range": [
      3397,
      3399
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3400,
    "end": 3403,
    "range": [
      3400,
      3403
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3403,
    "end": 3404,
    "range": [
      3403,
      3404
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3407,
    "end": 3408,
    "range": [
      3407,
      3408
    ]
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 3409,
    "end": 3411,
    "range": [
      3409,
      3411
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3412,
    "end": 3413,
    "range": [
      3412,
      3413
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3414,
    "end": 3415,
    "range": [
      3414,
      3415
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3418,
    "end": 3419,
    "range": [
      3418,
      3419
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3420,
    "end": 3425,
    "range": [
      3420,
      3425
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3425,
    "end": 3426,
    "range": [
      3425,
      3426
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3428,
    "end": 3436,
    "range": [
      3428,
      3436
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 3437,
    "end": 3439,
    "range": [
      3437,
      3439
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3439,
    "end": 3440,
    "range": [
      3439,
      3440
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3440,
    "end": 3441,
    "range": [
      3440,
      3441
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3442,
    "end": 3449,
    "range": [
      3442,
      3449
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3450,
    "end": 3451,
    "range": [
      3450,
      3451
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3451,
    "end": 3454,
    "range": [
      3451,
      3454
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3454,
    "end": 3455,
    "range": [
      3454,
      3455
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3456,
    "end": 3459,
    "range": [
      3456,
      3459
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3459,
    "end": 3460,
    "range": [
      3459,
      3460
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3461,
    "end": 3463,
    "range": [
      3461,
      3463
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3464,
    "end": 3467,
    "range": [
      3464,
      3467
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3467,
    "end": 3468,
    "range": [
      3467,
      3468
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3468,
    "end": 3469,
    "range": [
      3468,
      3469
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3469,
    "end": 3470,
    "range": [
      3469,
      3470
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3470,
    "end": 3471,
    "range": [
      3470,
      3471
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3472,
    "end": 3473,
    "range": [
      3472,
      3473
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3473,
    "end": 3474,
    "range": [
      3473,
      3474
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3474,
    "end": 3475,
    "range": [
      3474,
      3475
    ]
  },
  {
    "type": "Identifier",
    "value": "InferBecauseWhyNot",
    "start": 3476,
    "end": 3494,
    "range": [
      3476,
      3494
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3494,
    "end": 3495,
    "range": [
      3494,
      3495
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3495,
    "end": 3496,
    "range": [
      3495,
      3496
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3496,
    "end": 3497,
    "range": [
      3496,
      3497
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3498,
    "end": 3499,
    "range": [
      3498,
      3499
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3502,
    "end": 3508,
    "range": [
      3502,
      3508
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3509,
    "end": 3510,
    "range": [
      3509,
      3510
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3510,
    "end": 3511,
    "range": [
      3510,
      3511
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3512,
    "end": 3513,
    "range": [
      3512,
      3513
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3515,
    "end": 3519,
    "range": [
      3515,
      3519
    ]
  },
  {
    "type": "Identifier",
    "value": "InferBecauseWhyNotDistributive",
    "start": 3520,
    "end": 3550,
    "range": [
      3520,
      3550
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3550,
    "end": 3551,
    "range": [
      3550,
      3551
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3551,
    "end": 3552,
    "range": [
      3551,
      3552
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3552,
    "end": 3553,
    "range": [
      3552,
      3553
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3554,
    "end": 3555,
    "range": [
      3554,
      3555
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3556,
    "end": 3557,
    "range": [
      3556,
      3557
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3558,
    "end": 3565,
    "range": [
      3558,
      3565
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3566,
    "end": 3567,
    "range": [
      3566,
      3567
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3567,
    "end": 3568,
    "range": [
      3567,
      3568
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3568,
    "end": 3569,
    "range": [
      3568,
      3569
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3570,
    "end": 3575,
    "range": [
      3570,
      3575
    ]
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 3576,
    "end": 3578,
    "range": [
      3576,
      3578
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3578,
    "end": 3579,
    "range": [
      3578,
      3579
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3580,
    "end": 3582,
    "range": [
      3580,
      3582
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3583,
    "end": 3586,
    "range": [
      3583,
      3586
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3589,
    "end": 3590,
    "range": [
      3589,
      3590
    ]
  },
  {
    "type": "Identifier",
    "value": "P1",
    "start": 3591,
    "end": 3593,
    "range": [
      3591,
      3593
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3594,
    "end": 3595,
    "range": [
      3594,
      3595
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3596,
    "end": 3597,
    "range": [
      3596,
      3597
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3600,
    "end": 3601,
    "range": [
      3600,
      3601
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3602,
    "end": 3607,
    "range": [
      3602,
      3607
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3607,
    "end": 3608,
    "range": [
      3607,
      3608
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3610,
    "end": 3618,
    "range": [
      3610,
      3618
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 3619,
    "end": 3621,
    "range": [
      3619,
      3621
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3621,
    "end": 3622,
    "range": [
      3621,
      3622
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3622,
    "end": 3623,
    "range": [
      3622,
      3623
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3624,
    "end": 3631,
    "range": [
      3624,
      3631
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3632,
    "end": 3633,
    "range": [
      3632,
      3633
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3633,
    "end": 3636,
    "range": [
      3633,
      3636
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3636,
    "end": 3637,
    "range": [
      3636,
      3637
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3638,
    "end": 3641,
    "range": [
      3638,
      3641
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3641,
    "end": 3642,
    "range": [
      3641,
      3642
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3643,
    "end": 3645,
    "range": [
      3643,
      3645
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3646,
    "end": 3649,
    "range": [
      3646,
      3649
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3649,
    "end": 3650,
    "range": [
      3649,
      3650
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3650,
    "end": 3651,
    "range": [
      3650,
      3651
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3654,
    "end": 3655,
    "range": [
      3654,
      3655
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3655,
    "end": 3656,
    "range": [
      3655,
      3656
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3657,
    "end": 3658,
    "range": [
      3657,
      3658
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3659,
    "end": 3660,
    "range": [
      3659,
      3660
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3660,
    "end": 3661,
    "range": [
      3660,
      3661
    ]
  },
  {
    "type": "Identifier",
    "value": "InferBecauseWhyNotDistributive",
    "start": 3662,
    "end": 3692,
    "range": [
      3662,
      3692
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3692,
    "end": 3693,
    "range": [
      3692,
      3693
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3693,
    "end": 3694,
    "range": [
      3693,
      3694
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3694,
    "end": 3695,
    "range": [
      3694,
      3695
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3696,
    "end": 3697,
    "range": [
      3696,
      3697
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3700,
    "end": 3706,
    "range": [
      3700,
      3706
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3707,
    "end": 3708,
    "range": [
      3707,
      3708
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3708,
    "end": 3709,
    "range": [
      3708,
      3709
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3725,
    "end": 3726,
    "range": [
      3725,
      3726
    ]
  }
]
```
