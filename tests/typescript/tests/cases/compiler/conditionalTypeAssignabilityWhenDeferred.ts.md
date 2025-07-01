__ESTREE_TEST__:PASS:
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
