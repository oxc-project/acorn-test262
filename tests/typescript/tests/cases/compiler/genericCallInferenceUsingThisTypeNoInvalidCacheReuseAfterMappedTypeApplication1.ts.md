__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "EffectTypeId",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 35,
                  "end": 41
                },
                "start": 28,
                "end": 41
              },
              "start": 26,
              "end": 41
            },
            "start": 14,
            "end": 41
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 41
        }
      ],
      "declare": true,
      "start": 0,
      "end": 42
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Variance",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 62
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 63,
            "end": 68
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 70,
            "end": 75
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 77,
            "end": 82
          }
        ],
        "start": 62,
        "end": 83
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "EffectTypeId",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 110
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceStruct",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 127
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 129
                      },
                      "typeArguments": null,
                      "start": 128,
                      "end": 129
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 132
                      },
                      "typeArguments": null,
                      "start": 131,
                      "end": 132
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 135
                      },
                      "typeArguments": null,
                      "start": 134,
                      "end": 135
                    }
                  ],
                  "start": 127,
                  "end": 136
                },
                "start": 113,
                "end": 136
              },
              "start": 111,
              "end": 136
            },
            "accessibility": null,
            "static": false,
            "start": 88,
            "end": 137
          }
        ],
        "start": 84,
        "end": 139
      },
      "declare": false,
      "start": 44,
      "end": 139
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Covariant",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 155
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 156,
            "end": 157
          }
        ],
        "start": 155,
        "end": 158
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 165,
                "end": 170
              },
              "start": 163,
              "end": 170
            },
            "start": 162,
            "end": 170
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "typeArguments": null,
            "start": 175,
            "end": 176
          },
          "start": 172,
          "end": 176
        },
        "start": 161,
        "end": 176
      },
      "declare": false,
      "start": 141,
      "end": 177
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VarianceStruct",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 203
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 209
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 204,
            "end": 209
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 211,
            "end": 216
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 223
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 218,
            "end": 223
          }
        ],
        "start": 203,
        "end": 224
      },
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
              "name": "_V",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 240
            },
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
            "accessibility": null,
            "static": false,
            "start": 229,
            "end": 249
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_A",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 263
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Covariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 274
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 275,
                        "end": 276
                      },
                      "typeArguments": null,
                      "start": 275,
                      "end": 276
                    }
                  ],
                  "start": 274,
                  "end": 277
                },
                "start": 265,
                "end": 277
              },
              "start": 263,
              "end": 277
            },
            "accessibility": null,
            "static": false,
            "start": 252,
            "end": 278
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_E",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 292
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Covariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 303
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 304,
                        "end": 305
                      },
                      "typeArguments": null,
                      "start": 304,
                      "end": 305
                    }
                  ],
                  "start": 303,
                  "end": 306
                },
                "start": 294,
                "end": 306
              },
              "start": 292,
              "end": 306
            },
            "accessibility": null,
            "static": false,
            "start": 281,
            "end": 307
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_R",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 321
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Covariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 323,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 333,
                        "end": 334
                      },
                      "typeArguments": null,
                      "start": 333,
                      "end": 334
                    }
                  ],
                  "start": 332,
                  "end": 335
                },
                "start": 323,
                "end": 335
              },
              "start": 321,
              "end": 335
            },
            "accessibility": null,
            "static": false,
            "start": 310,
            "end": 336
          }
        ],
        "start": 225,
        "end": 338
      },
      "declare": false,
      "start": 179,
      "end": 338
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Effect",
        "optional": false,
        "typeAnnotation": null,
        "start": 350,
        "end": 356
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 362
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 357,
            "end": 362
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 369
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 372,
              "end": 377
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 364,
            "end": 377
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 384
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 387,
              "end": 392
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 379,
            "end": 392
          }
        ],
        "start": 356,
        "end": 393
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Variance",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 412
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 414
                },
                "typeArguments": null,
                "start": 413,
                "end": 414
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 417
                },
                "typeArguments": null,
                "start": 416,
                "end": 417
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 419,
                  "end": 420
                },
                "typeArguments": null,
                "start": 419,
                "end": 420
              }
            ],
            "start": 412,
            "end": 421
          },
          "start": 404,
          "end": 421
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 422,
        "end": 424
      },
      "declare": false,
      "start": 340,
      "end": 424
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
            "name": "succeed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 450,
                        "end": 451
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 450,
                      "end": 451
                    }
                  ],
                  "start": 449,
                  "end": 452
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 460,
                          "end": 461
                        },
                        "typeArguments": null,
                        "start": 460,
                        "end": 461
                      },
                      "start": 458,
                      "end": 461
                    },
                    "start": 453,
                    "end": 461
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Effect",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 466,
                      "end": 472
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 473,
                            "end": 474
                          },
                          "typeArguments": null,
                          "start": 473,
                          "end": 474
                        }
                      ],
                      "start": 472,
                      "end": 475
                    },
                    "start": 466,
                    "end": 475
                  },
                  "start": 463,
                  "end": 475
                },
                "start": 449,
                "end": 475
              },
              "start": 447,
              "end": 475
            },
            "start": 440,
            "end": 475
          },
          "init": null,
          "definite": false,
          "start": 440,
          "end": 475
        }
      ],
      "declare": true,
      "start": 426,
      "end": 476
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 483,
        "end": 484
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 486
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 485,
            "end": 486
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 489
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 488,
            "end": 489
          }
        ],
        "start": 484,
        "end": 490
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 494
          },
          "typeArguments": null,
          "start": 493,
          "end": 494
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
                "name": "_type",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 510
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 518,
                      "end": 519
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 518,
                    "end": 519
                  },
                  "start": 512,
                  "end": 519
                },
                "start": 510,
                "end": 519
              },
              "accessibility": null,
              "static": false,
              "start": 505,
              "end": 519
            }
          ],
          "start": 503,
          "end": 521
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 527
            },
            "typeArguments": null,
            "start": 526,
            "end": 527
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Effect",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 542
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 549,
                      "end": 550
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 549,
                    "end": 550
                  },
                  "start": 543,
                  "end": 550
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 558,
                      "end": 559
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 558,
                    "end": 559
                  },
                  "start": 552,
                  "end": 559
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 567,
                      "end": 568
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 567,
                    "end": 568
                  },
                  "start": 561,
                  "end": 568
                }
              ],
              "start": 542,
              "end": 569
            },
            "start": 536,
            "end": 569
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Effect",
              "optional": false,
              "typeAnnotation": null,
              "start": 576,
              "end": 582
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 583,
                    "end": 584
                  },
                  "typeArguments": null,
                  "start": 583,
                  "end": 584
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 586,
                    "end": 587
                  },
                  "typeArguments": null,
                  "start": 586,
                  "end": 587
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 590
                      },
                      "typeArguments": null,
                      "start": 589,
                      "end": 590
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 593,
                        "end": 594
                      },
                      "typeArguments": null,
                      "start": 593,
                      "end": 594
                    }
                  ],
                  "start": 589,
                  "end": 594
                }
              ],
              "start": 582,
              "end": 595
            },
            "start": 576,
            "end": 595
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 602,
              "end": 603
            },
            "typeArguments": null,
            "start": 602,
            "end": 603
          },
          "start": 526,
          "end": 603
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 609
          },
          "typeArguments": null,
          "start": 608,
          "end": 609
        },
        "start": 493,
        "end": 609
      },
      "declare": false,
      "start": 478,
      "end": 610
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProxyMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 625
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Service",
              "optional": false,
              "typeAnnotation": null,
              "start": 626,
              "end": 633
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 626,
            "end": 633
          }
        ],
        "start": 625,
        "end": 634
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 642,
          "end": 643
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Service",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 660
            },
            "typeArguments": null,
            "start": 653,
            "end": 660
          },
          "start": 647,
          "end": 660
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Service",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 671
                },
                "typeArguments": null,
                "start": 664,
                "end": 671
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
                      "name": "_type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 676,
                      "end": 681
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Service",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 683,
                          "end": 690
                        },
                        "typeArguments": null,
                        "start": 683,
                        "end": 690
                      },
                      "start": 681,
                      "end": 690
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 676,
                    "end": 690
                  }
                ],
                "start": 674,
                "end": 692
              }
            ],
            "start": 664,
            "end": 692
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 694,
              "end": 695
            },
            "typeArguments": null,
            "start": 694,
            "end": 695
          },
          "start": 663,
          "end": 696
        },
        "optional": false,
        "readonly": null,
        "start": 637,
        "end": 699
      },
      "declare": false,
      "start": 612,
      "end": 700
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
            "name": "implement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 728,
                        "end": 729
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 728,
                      "end": 729
                    }
                  ],
                  "start": 727,
                  "end": 730
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 737,
                            "end": 738
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ReadonlyArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 747,
                              "end": 760
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 761,
                                  "end": 764
                                }
                              ],
                              "start": 760,
                              "end": 765
                            },
                            "start": 747,
                            "end": 765
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 737,
                          "end": 765
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 767,
                            "end": 768
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 767,
                          "end": 768
                        }
                      ],
                      "start": 736,
                      "end": 769
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
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 780,
                                  "end": 781
                                },
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
                                      "start": 783,
                                      "end": 784
                                    },
                                    "typeArguments": null,
                                    "start": 783,
                                    "end": 784
                                  },
                                  "start": 781,
                                  "end": 784
                                },
                                "value": null,
                                "start": 777,
                                "end": 784
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "X",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 789,
                                  "end": 790
                                },
                                "typeArguments": null,
                                "start": 789,
                                "end": 790
                              },
                              "start": 786,
                              "end": 790
                            },
                            "start": 776,
                            "end": 790
                          },
                          "start": 774,
                          "end": 790
                        },
                        "start": 773,
                        "end": 790
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 801,
                              "end": 802
                            },
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
                                  "start": 804,
                                  "end": 805
                                },
                                "typeArguments": null,
                                "start": 804,
                                "end": 805
                              },
                              "start": 802,
                              "end": 805
                            },
                            "value": null,
                            "start": 798,
                            "end": 805
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "F",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 810,
                              "end": 811
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "X",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 812,
                                    "end": 813
                                  },
                                  "typeArguments": null,
                                  "start": 812,
                                  "end": 813
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 815,
                                    "end": 816
                                  },
                                  "typeArguments": null,
                                  "start": 815,
                                  "end": 816
                                }
                              ],
                              "start": 811,
                              "end": 817
                            },
                            "start": 810,
                            "end": 817
                          },
                          "start": 807,
                          "end": 817
                        },
                        "start": 797,
                        "end": 817
                      },
                      "start": 794,
                      "end": 817
                    },
                    "start": 736,
                    "end": 817
                  },
                  "start": 733,
                  "end": 817
                },
                "start": 727,
                "end": 817
              },
              "start": 725,
              "end": 817
            },
            "start": 716,
            "end": 817
          },
          "init": null,
          "definite": false,
          "start": 716,
          "end": 817
        }
      ],
      "declare": true,
      "start": 702,
      "end": 818
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "XXX",
        "optional": false,
        "typeAnnotation": null,
        "start": 826,
        "end": 829
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
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 834,
              "end": 837
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "implement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 840,
                  "end": 849
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSThisType",
                      "start": 850,
                      "end": 854
                    }
                  ],
                  "start": 849,
                  "end": 855
                },
                "arguments": [],
                "optional": false,
                "start": 840,
                "end": 857
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "N",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 859,
                          "end": 860
                        },
                        "constraint": {
                          "type": "TSNumberKeyword",
                          "start": 869,
                          "end": 875
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 859,
                        "end": 875
                      }
                    ],
                    "start": 858,
                    "end": 876
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 880,
                            "end": 881
                          },
                          "typeArguments": null,
                          "start": 880,
                          "end": 881
                        },
                        "start": 878,
                        "end": 881
                      },
                      "start": 877,
                      "end": 881
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "succeed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 886,
                      "end": 893
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 894,
                        "end": 895
                      }
                    ],
                    "optional": false,
                    "start": 886,
                    "end": 896
                  },
                  "id": null,
                  "generator": false,
                  "start": 858,
                  "end": 896
                }
              ],
              "optional": false,
              "start": 840,
              "end": 897
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 834,
            "end": 898
          }
        ],
        "start": 830,
        "end": 900
      },
      "abstract": false,
      "declare": false,
      "start": 820,
      "end": 900
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "XXX",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 930,
                    "end": 933
                  },
                  "typeArguments": null,
                  "start": 930,
                  "end": 933
                },
                "start": 928,
                "end": 933
              },
              "start": 923,
              "end": 933
            },
            "init": null,
            "definite": false,
            "start": 923,
            "end": 933
          }
        ],
        "declare": true,
        "start": 909,
        "end": 934
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 902,
      "end": 934
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "outer",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ProxyMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 963,
                    "end": 971
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "XXX",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 972,
                          "end": 975
                        },
                        "typeArguments": null,
                        "start": 972,
                        "end": 975
                      }
                    ],
                    "start": 971,
                    "end": 976
                  },
                  "start": 963,
                  "end": 976
                },
                "start": 961,
                "end": 976
              },
              "start": 956,
              "end": 976
            },
            "init": null,
            "definite": false,
            "start": 956,
            "end": 976
          }
        ],
        "declare": true,
        "start": 942,
        "end": 977
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 935,
      "end": 977
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 992,
              "end": 993
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inner",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 996,
                  "end": 1001
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1002,
                  "end": 1005
                },
                "optional": false,
                "computed": false,
                "start": 996,
                "end": 1005
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 1006,
                  "end": 1009
                }
              ],
              "optional": false,
              "start": 996,
              "end": 1010
            },
            "definite": false,
            "start": 992,
            "end": 1010
          }
        ],
        "declare": false,
        "start": 986,
        "end": 1011
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 979,
      "end": 1011
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1054,
              "end": 1055
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1058,
                  "end": 1063
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1064,
                  "end": 1067
                },
                "optional": false,
                "computed": false,
                "start": 1058,
                "end": 1067
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 1068,
                  "end": 1071
                }
              ],
              "optional": false,
              "start": 1058,
              "end": 1072
            },
            "definite": false,
            "start": 1054,
            "end": 1072
          }
        ],
        "declare": false,
        "start": 1048,
        "end": 1073
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1041,
      "end": 1073
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1100
}
```
