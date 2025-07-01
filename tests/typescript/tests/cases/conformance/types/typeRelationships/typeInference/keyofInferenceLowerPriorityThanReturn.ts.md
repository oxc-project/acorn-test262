__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Write",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 29
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
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Write",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 58
                },
                "typeArguments": null,
                "start": 53,
                "end": 58
              },
              "start": 51,
              "end": 58
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 36,
            "end": 59
          }
        ],
        "start": 30,
        "end": 61
      },
      "abstract": false,
      "declare": true,
      "start": 10,
      "end": 61
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Col",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 80
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 81,
            "end": 82
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 84,
            "end": 85
          }
        ],
        "start": 80,
        "end": 86
      },
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
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 108
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Col",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 114
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 115,
                            "end": 116
                          },
                          "typeArguments": null,
                          "start": 115,
                          "end": 116
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 118,
                            "end": 119
                          },
                          "typeArguments": null,
                          "start": 118,
                          "end": 119
                        }
                      ],
                      "start": 114,
                      "end": 120
                    },
                    "start": 111,
                    "end": 120
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 123
                    },
                    "typeArguments": null,
                    "start": 122,
                    "end": 123
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 125,
                      "end": 126
                    },
                    "typeArguments": null,
                    "start": 125,
                    "end": 126
                  }
                ],
                "start": 110,
                "end": 127
              },
              "start": 108,
              "end": 127
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 93,
            "end": 128
          }
        ],
        "start": 87,
        "end": 130
      },
      "abstract": false,
      "declare": true,
      "start": 63,
      "end": 130
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Table",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 151
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Req",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 155
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 152,
            "end": 155
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Def",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 160
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 157,
            "end": 160
          }
        ],
        "start": 151,
        "end": 161
      },
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
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 183
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Table",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 191
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Req",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 192,
                            "end": 195
                          },
                          "typeArguments": null,
                          "start": 192,
                          "end": 195
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Def",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 197,
                            "end": 200
                          },
                          "typeArguments": null,
                          "start": 197,
                          "end": 200
                        }
                      ],
                      "start": 191,
                      "end": 201
                    },
                    "start": 186,
                    "end": 201
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Req",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 203,
                      "end": 206
                    },
                    "typeArguments": null,
                    "start": 203,
                    "end": 206
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Def",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 211
                    },
                    "typeArguments": null,
                    "start": 208,
                    "end": 211
                  }
                ],
                "start": 185,
                "end": 212
              },
              "start": 183,
              "end": 212
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 168,
            "end": 213
          }
        ],
        "start": 162,
        "end": 215
      },
      "abstract": false,
      "declare": true,
      "start": 132,
      "end": 215
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MakeTable",
        "optional": false,
        "typeAnnotation": null,
        "start": 222,
        "end": 231
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 234
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 243,
              "end": 249
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 232,
            "end": 249
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 253
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 262,
              "end": 268
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 251,
            "end": 268
          }
        ],
        "start": 231,
        "end": 269
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 280
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 290,
                  "end": 292
                },
                "typeArguments": null,
                "start": 290,
                "end": 292
              },
              "start": 284,
              "end": 292
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Col",
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 298
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Write",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 304
                    },
                    "typeArguments": null,
                    "start": 299,
                    "end": 304
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 306,
                        "end": 308
                      },
                      "typeArguments": null,
                      "start": 306,
                      "end": 308
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 309,
                        "end": 310
                      },
                      "typeArguments": null,
                      "start": 309,
                      "end": 310
                    },
                    "start": 306,
                    "end": 311
                  }
                ],
                "start": 298,
                "end": 312
              },
              "start": 295,
              "end": 312
            },
            "optional": false,
            "readonly": null,
            "start": 272,
            "end": 315
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 342
                },
                "typeArguments": null,
                "start": 340,
                "end": 342
              },
              "start": 334,
              "end": 342
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Col",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 348
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Write",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 354
                    },
                    "typeArguments": null,
                    "start": 349,
                    "end": 354
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 356,
                        "end": 358
                      },
                      "typeArguments": null,
                      "start": 356,
                      "end": 358
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 359,
                        "end": 360
                      },
                      "typeArguments": null,
                      "start": 359,
                      "end": 360
                    },
                    "start": 356,
                    "end": 361
                  }
                ],
                "start": 348,
                "end": 362
              },
              "start": 345,
              "end": 362
            },
            "optional": false,
            "readonly": null,
            "start": 318,
            "end": 369
          }
        ],
        "start": 272,
        "end": 369
      },
      "declare": false,
      "start": 217,
      "end": 370
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConflictTarget",
        "optional": false,
        "typeAnnotation": null,
        "start": 386,
        "end": 400
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cols",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 405
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 401,
            "end": 405
          }
        ],
        "start": 400,
        "end": 406
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tableColumns",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 439
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                      "name": "Cols",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 440,
                      "end": 444
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 440,
                    "end": 444
                  }
                ],
                "start": 439,
                "end": 445
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cols",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Cols",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 459,
                            "end": 463
                          },
                          "typeArguments": null,
                          "start": 459,
                          "end": 463
                        },
                        "start": 453,
                        "end": 463
                      },
                      "start": 452,
                      "end": 466
                    },
                    "start": 450,
                    "end": 466
                  },
                  "start": 446,
                  "end": 466
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ConflictTarget",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 469,
                    "end": 483
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Cols",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 484,
                          "end": 488
                        },
                        "typeArguments": null,
                        "start": 484,
                        "end": 488
                      }
                    ],
                    "start": 483,
                    "end": 489
                  },
                  "start": 469,
                  "end": 489
                },
                "start": 467,
                "end": 489
              },
              "body": null,
              "expression": false,
              "start": 439,
              "end": 490
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 413,
            "end": 490
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dummy",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 510
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ConflictTarget",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 513,
                      "end": 527
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Cols",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 528,
                            "end": 532
                          },
                          "typeArguments": null,
                          "start": 528,
                          "end": 532
                        }
                      ],
                      "start": 527,
                      "end": 533
                    },
                    "start": 513,
                    "end": 533
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cols",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 535,
                      "end": 539
                    },
                    "typeArguments": null,
                    "start": 535,
                    "end": 539
                  }
                ],
                "start": 512,
                "end": 540
              },
              "start": 510,
              "end": 540
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 495,
            "end": 541
          }
        ],
        "start": 407,
        "end": 543
      },
      "abstract": false,
      "declare": true,
      "start": 372,
      "end": 543
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
            "name": "bookTable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Table",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 564,
                  "end": 569
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BookReq",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 570,
                        "end": 577
                      },
                      "typeArguments": null,
                      "start": 570,
                      "end": 577
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BookDef",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 579,
                        "end": 586
                      },
                      "typeArguments": null,
                      "start": 579,
                      "end": 586
                    }
                  ],
                  "start": 569,
                  "end": 587
                },
                "start": 564,
                "end": 587
              },
              "start": 562,
              "end": 587
            },
            "start": 553,
            "end": 587
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 590,
              "end": 594
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 598,
              "end": 601
            },
            "start": 590,
            "end": 601
          },
          "definite": false,
          "start": 553,
          "end": 601
        }
      ],
      "declare": false,
      "start": 547,
      "end": 601
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BookReq",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 620
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "title",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 641
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 643,
                "end": 649
              },
              "start": 641,
              "end": 649
            },
            "accessibility": null,
            "static": false,
            "start": 627,
            "end": 650
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "serial",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 670
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 672,
                "end": 678
              },
              "start": 670,
              "end": 678
            },
            "accessibility": null,
            "static": false,
            "start": 655,
            "end": 679
          }
        ],
        "start": 621,
        "end": 681
      },
      "declare": false,
      "start": 603,
      "end": 681
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BookDef",
        "optional": false,
        "typeAnnotation": null,
        "start": 693,
        "end": 700
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "author",
              "optional": false,
              "typeAnnotation": null,
              "start": 716,
              "end": 722
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 724,
                "end": 730
              },
              "start": 722,
              "end": 730
            },
            "accessibility": null,
            "static": false,
            "start": 707,
            "end": 731
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "numPages",
              "optional": false,
              "typeAnnotation": null,
              "start": 745,
              "end": 753
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 755,
                    "end": 761
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 764,
                    "end": 768
                  }
                ],
                "start": 755,
                "end": 768
              },
              "start": 753,
              "end": 768
            },
            "accessibility": null,
            "static": false,
            "start": 736,
            "end": 769
          }
        ],
        "start": 701,
        "end": 771
      },
      "declare": false,
      "start": 683,
      "end": 771
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "insertOnConflictDoNothing",
        "optional": false,
        "typeAnnotation": null,
        "start": 783,
        "end": 808
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
              "name": "Req",
              "optional": false,
              "typeAnnotation": null,
              "start": 809,
              "end": 812
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 821,
              "end": 827
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 809,
            "end": 827
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Def",
              "optional": false,
              "typeAnnotation": null,
              "start": 829,
              "end": 832
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 841,
              "end": 847
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 829,
            "end": 847
          }
        ],
        "start": 808,
        "end": 848
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_table",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Table",
                "optional": false,
                "typeAnnotation": null,
                "start": 857,
                "end": 862
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Req",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 863,
                      "end": 866
                    },
                    "typeArguments": null,
                    "start": 863,
                    "end": 866
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Def",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 868,
                      "end": 871
                    },
                    "typeArguments": null,
                    "start": 868,
                    "end": 871
                  }
                ],
                "start": 862,
                "end": 872
              },
              "start": 857,
              "end": 872
            },
            "start": 855,
            "end": 872
          },
          "start": 849,
          "end": 872
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_conflictTarget",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ConflictTarget",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 905
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
                          "name": "Req",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 906,
                          "end": 909
                        },
                        "typeArguments": null,
                        "start": 906,
                        "end": 909
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Def",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 912,
                          "end": 915
                        },
                        "typeArguments": null,
                        "start": 912,
                        "end": 915
                      }
                    ],
                    "start": 906,
                    "end": 915
                  }
                ],
                "start": 905,
                "end": 916
              },
              "start": 891,
              "end": 916
            },
            "start": 889,
            "end": 916
          },
          "start": 874,
          "end": 916
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 919,
          "end": 926
        },
        "start": 917,
        "end": 926
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 943,
                "end": 948
              },
              "typeArguments": null,
              "arguments": [],
              "start": 939,
              "end": 950
            },
            "start": 933,
            "end": 951
          }
        ],
        "start": 927,
        "end": 953
      },
      "expression": false,
      "start": 774,
      "end": 953
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 964,
        "end": 965
      },
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
                "name": "insertOnConflictDoNothing",
                "optional": false,
                "typeAnnotation": null,
                "start": 974,
                "end": 999
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bookTable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1000,
                  "end": 1009
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ConflictTarget",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1011,
                      "end": 1025
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tableColumns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1026,
                      "end": 1038
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1011,
                    "end": 1038
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "serial",
                          "raw": "\"serial\"",
                          "start": 1040,
                          "end": 1048
                        }
                      ],
                      "start": 1039,
                      "end": 1049
                    }
                  ],
                  "optional": false,
                  "start": 1011,
                  "end": 1050
                }
              ],
              "optional": false,
              "start": 974,
              "end": 1051
            },
            "directive": null,
            "start": 974,
            "end": 1052
          }
        ],
        "start": 968,
        "end": 1144
      },
      "expression": false,
      "start": 955,
      "end": 1144
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 1144
}
```
