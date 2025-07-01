__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Methods",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 43
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
              "start": 44,
              "end": 45
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 45
          }
        ],
        "start": 43,
        "end": 46
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 53
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
              "start": 63,
              "end": 64
            },
            "typeArguments": null,
            "start": 63,
            "end": 64
          },
          "start": 57,
          "end": 64
        },
        "nameType": {
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
                "start": 68,
                "end": 69
              },
              "typeArguments": null,
              "start": 68,
              "end": 69
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 71
              },
              "typeArguments": null,
              "start": 70,
              "end": 71
            },
            "start": 68,
            "end": 72
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 89
            },
            "typeArguments": null,
            "start": 81,
            "end": 89
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
            "typeArguments": null,
            "start": 92,
            "end": 93
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 96,
            "end": 101
          },
          "start": 68,
          "end": 101
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "typeArguments": null,
            "start": 104,
            "end": 105
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "typeArguments": null,
            "start": 106,
            "end": 107
          },
          "start": 104,
          "end": 108
        },
        "optional": false,
        "readonly": null,
        "start": 49,
        "end": 110
      },
      "declare": false,
      "start": 31,
      "end": 111
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 118
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
              "start": 119,
              "end": 120
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 119,
            "end": 120
          }
        ],
        "start": 118,
        "end": 121
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 125
          },
          "typeArguments": null,
          "start": 124,
          "end": 125
        },
        "indexType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Methods",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 139
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
                    "start": 140,
                    "end": 141
                  },
                  "typeArguments": null,
                  "start": 140,
                  "end": 141
                }
              ],
              "start": 139,
              "end": 142
            },
            "start": 132,
            "end": 142
          },
          "start": 126,
          "end": 142
        },
        "start": 124,
        "end": 143
      },
      "declare": false,
      "start": 112,
      "end": 144
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Filter",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 213
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
              "start": 214,
              "end": 215
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 214,
            "end": 215
          }
        ],
        "start": 213,
        "end": 216
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 223
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
              "start": 233,
              "end": 234
            },
            "typeArguments": null,
            "start": 233,
            "end": 234
          },
          "start": 227,
          "end": 234
        },
        "nameType": {
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
                "start": 238,
                "end": 239
              },
              "typeArguments": null,
              "start": 238,
              "end": 239
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 241
              },
              "typeArguments": null,
              "start": 240,
              "end": 241
            },
            "start": 238,
            "end": 242
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 259
            },
            "typeArguments": null,
            "start": 251,
            "end": 259
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 263
            },
            "typeArguments": null,
            "start": 262,
            "end": 263
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 266,
            "end": 271
          },
          "start": 238,
          "end": 271
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 275
            },
            "typeArguments": null,
            "start": 274,
            "end": 275
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 277
            },
            "typeArguments": null,
            "start": 276,
            "end": 277
          },
          "start": 274,
          "end": 278
        },
        "optional": false,
        "readonly": null,
        "start": 219,
        "end": 280
      },
      "declare": false,
      "start": 202,
      "end": 281
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Modify",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 339
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
              "start": 340,
              "end": 341
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 340,
            "end": 341
          }
        ],
        "start": 339,
        "end": 342
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 349
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
              "start": 359,
              "end": 360
            },
            "typeArguments": null,
            "start": 359,
            "end": 360
          },
          "start": 353,
          "end": 360
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 365
            },
            "typeArguments": null,
            "start": 364,
            "end": 365
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 374,
            "end": 380
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "bool",
                  "cooked": "bool"
                },
                "tail": false,
                "start": 382,
                "end": 389
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 390,
                "end": 392
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 389,
                  "end": 390
                },
                "typeArguments": null,
                "start": 389,
                "end": 390
              }
            ],
            "start": 382,
            "end": 392
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 395
            },
            "typeArguments": null,
            "start": 394,
            "end": 395
          },
          "start": 364,
          "end": 395
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 399
            },
            "typeArguments": null,
            "start": 398,
            "end": 399
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 401
            },
            "typeArguments": null,
            "start": 400,
            "end": 401
          },
          "start": 398,
          "end": 402
        },
        "optional": false,
        "readonly": null,
        "start": 345,
        "end": 404
      },
      "declare": false,
      "start": 328,
      "end": 405
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 416,
        "end": 419
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
              "start": 420,
              "end": 421
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 420,
            "end": 421
          }
        ],
        "start": 419,
        "end": 422
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "val",
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
                "start": 428,
                "end": 429
              },
              "typeArguments": null,
              "start": 428,
              "end": 429
            },
            "start": 426,
            "end": 429
          },
          "start": 423,
          "end": 429
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Filter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 450
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
                              "start": 451,
                              "end": 452
                            },
                            "typeArguments": null,
                            "start": 451,
                            "end": 452
                          }
                        ],
                        "start": 450,
                        "end": 453
                      },
                      "start": 444,
                      "end": 453
                    },
                    "start": 442,
                    "end": 453
                  },
                  "start": 441,
                  "end": 453
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 456,
                  "end": 459
                },
                "definite": false,
                "start": 441,
                "end": 459
              }
            ],
            "declare": false,
            "start": 437,
            "end": 460
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Modify",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 478,
                        "end": 484
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
                              "start": 485,
                              "end": 486
                            },
                            "typeArguments": null,
                            "start": 485,
                            "end": 486
                          }
                        ],
                        "start": 484,
                        "end": 487
                      },
                      "start": 478,
                      "end": 487
                    },
                    "start": 476,
                    "end": 487
                  },
                  "start": 475,
                  "end": 487
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 493
                },
                "definite": false,
                "start": 475,
                "end": 493
              }
            ],
            "declare": false,
            "start": 471,
            "end": 494
          }
        ],
        "start": 431,
        "end": 505
      },
      "expression": false,
      "start": 407,
      "end": 505
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FilterInclOpt",
        "optional": false,
        "typeAnnotation": null,
        "start": 512,
        "end": 525
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
              "start": 526,
              "end": 527
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 526,
            "end": 527
          }
        ],
        "start": 525,
        "end": 528
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 535
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
              "start": 545,
              "end": 546
            },
            "typeArguments": null,
            "start": 545,
            "end": 546
          },
          "start": 539,
          "end": 546
        },
        "nameType": {
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
                "start": 550,
                "end": 551
              },
              "typeArguments": null,
              "start": 550,
              "end": 551
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 552,
                "end": 553
              },
              "typeArguments": null,
              "start": 552,
              "end": 553
            },
            "start": 550,
            "end": 554
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 563,
              "end": 571
            },
            "typeArguments": null,
            "start": 563,
            "end": 571
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 575
            },
            "typeArguments": null,
            "start": 574,
            "end": 575
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 578,
            "end": 583
          },
          "start": 550,
          "end": 583
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 589
            },
            "typeArguments": null,
            "start": 588,
            "end": 589
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 591
            },
            "typeArguments": null,
            "start": 590,
            "end": 591
          },
          "start": 588,
          "end": 592
        },
        "optional": "+",
        "readonly": null,
        "start": 531,
        "end": 594
      },
      "declare": false,
      "start": 507,
      "end": 595
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ModifyInclOpt",
        "optional": false,
        "typeAnnotation": null,
        "start": 601,
        "end": 614
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
              "start": 615,
              "end": 616
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 615,
            "end": 616
          }
        ],
        "start": 614,
        "end": 617
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 623,
          "end": 624
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
              "start": 634,
              "end": 635
            },
            "typeArguments": null,
            "start": 634,
            "end": 635
          },
          "start": 628,
          "end": 635
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 639,
              "end": 640
            },
            "typeArguments": null,
            "start": 639,
            "end": 640
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 649,
            "end": 655
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "bool",
                  "cooked": "bool"
                },
                "tail": false,
                "start": 657,
                "end": 664
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 665,
                "end": 667
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 665
                },
                "typeArguments": null,
                "start": 664,
                "end": 665
              }
            ],
            "start": 657,
            "end": 667
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 669,
            "end": 674
          },
          "start": 639,
          "end": 674
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 680,
              "end": 681
            },
            "typeArguments": null,
            "start": 680,
            "end": 681
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 683
            },
            "typeArguments": null,
            "start": 682,
            "end": 683
          },
          "start": 680,
          "end": 684
        },
        "optional": "+",
        "readonly": null,
        "start": 620,
        "end": 686
      },
      "declare": false,
      "start": 596,
      "end": 687
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FilterExclOpt",
        "optional": false,
        "typeAnnotation": null,
        "start": 693,
        "end": 706
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
              "start": 707,
              "end": 708
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 707,
            "end": 708
          }
        ],
        "start": 706,
        "end": 709
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 715,
          "end": 716
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
              "start": 726,
              "end": 727
            },
            "typeArguments": null,
            "start": 726,
            "end": 727
          },
          "start": 720,
          "end": 727
        },
        "nameType": {
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
                "start": 731,
                "end": 732
              },
              "typeArguments": null,
              "start": 731,
              "end": 732
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 734
              },
              "typeArguments": null,
              "start": 733,
              "end": 734
            },
            "start": 731,
            "end": 735
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 744,
              "end": 752
            },
            "typeArguments": null,
            "start": 744,
            "end": 752
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 756
            },
            "typeArguments": null,
            "start": 755,
            "end": 756
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 759,
            "end": 764
          },
          "start": 731,
          "end": 764
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 769,
              "end": 770
            },
            "typeArguments": null,
            "start": 769,
            "end": 770
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 771,
              "end": 772
            },
            "typeArguments": null,
            "start": 771,
            "end": 772
          },
          "start": 769,
          "end": 773
        },
        "optional": "-",
        "readonly": null,
        "start": 712,
        "end": 775
      },
      "declare": false,
      "start": 688,
      "end": 776
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ModifyExclOpt",
        "optional": false,
        "typeAnnotation": null,
        "start": 782,
        "end": 795
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
              "start": 796,
              "end": 797
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 796,
            "end": 797
          }
        ],
        "start": 795,
        "end": 798
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 804,
          "end": 805
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
              "start": 815,
              "end": 816
            },
            "typeArguments": null,
            "start": 815,
            "end": 816
          },
          "start": 809,
          "end": 816
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 820,
              "end": 821
            },
            "typeArguments": null,
            "start": 820,
            "end": 821
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 830,
            "end": 836
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "bool",
                  "cooked": "bool"
                },
                "tail": false,
                "start": 838,
                "end": 845
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 846,
                "end": 848
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 845,
                  "end": 846
                },
                "typeArguments": null,
                "start": 845,
                "end": 846
              }
            ],
            "start": 838,
            "end": 848
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 850,
            "end": 855
          },
          "start": 820,
          "end": 855
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 861,
              "end": 862
            },
            "typeArguments": null,
            "start": 861,
            "end": 862
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 863,
              "end": 864
            },
            "typeArguments": null,
            "start": 863,
            "end": 864
          },
          "start": 861,
          "end": 865
        },
        "optional": "-",
        "readonly": null,
        "start": 801,
        "end": 867
      },
      "declare": false,
      "start": 777,
      "end": 868
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun2",
        "optional": false,
        "typeAnnotation": null,
        "start": 879,
        "end": 883
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
              "start": 884,
              "end": 885
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 884,
            "end": 885
          }
        ],
        "start": 883,
        "end": 886
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "val",
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
                "start": 892,
                "end": 893
              },
              "typeArguments": null,
              "start": 892,
              "end": 893
            },
            "start": 890,
            "end": 893
          },
          "start": 887,
          "end": 893
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FilterInclOpt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 908,
                        "end": 921
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
                              "start": 922,
                              "end": 923
                            },
                            "typeArguments": null,
                            "start": 922,
                            "end": 923
                          }
                        ],
                        "start": 921,
                        "end": 924
                      },
                      "start": 908,
                      "end": 924
                    },
                    "start": 906,
                    "end": 924
                  },
                  "start": 905,
                  "end": 924
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 927,
                  "end": 930
                },
                "definite": false,
                "start": 905,
                "end": 930
              }
            ],
            "declare": false,
            "start": 901,
            "end": 931
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ModifyInclOpt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 949,
                        "end": 962
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
                              "start": 963,
                              "end": 964
                            },
                            "typeArguments": null,
                            "start": 963,
                            "end": 964
                          }
                        ],
                        "start": 962,
                        "end": 965
                      },
                      "start": 949,
                      "end": 965
                    },
                    "start": 947,
                    "end": 965
                  },
                  "start": 946,
                  "end": 965
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 968,
                  "end": 971
                },
                "definite": false,
                "start": 946,
                "end": 971
              }
            ],
            "declare": false,
            "start": 942,
            "end": 972
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FilterExclOpt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 990,
                        "end": 1003
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
                              "start": 1004,
                              "end": 1005
                            },
                            "typeArguments": null,
                            "start": 1004,
                            "end": 1005
                          }
                        ],
                        "start": 1003,
                        "end": 1006
                      },
                      "start": 990,
                      "end": 1006
                    },
                    "start": 988,
                    "end": 1006
                  },
                  "start": 987,
                  "end": 1006
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1009,
                  "end": 1012
                },
                "definite": false,
                "start": 987,
                "end": 1012
              }
            ],
            "declare": false,
            "start": 983,
            "end": 1013
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
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ModifyExclOpt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1034,
                        "end": 1047
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
                              "start": 1048,
                              "end": 1049
                            },
                            "typeArguments": null,
                            "start": 1048,
                            "end": 1049
                          }
                        ],
                        "start": 1047,
                        "end": 1050
                      },
                      "start": 1034,
                      "end": 1050
                    },
                    "start": 1032,
                    "end": 1050
                  },
                  "start": 1031,
                  "end": 1050
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1053,
                  "end": 1056
                },
                "definite": false,
                "start": 1031,
                "end": 1056
              }
            ],
            "declare": false,
            "start": 1027,
            "end": 1057
          }
        ],
        "start": 895,
        "end": 1068
      },
      "expression": false,
      "start": 870,
      "end": 1068
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 31,
  "end": 1070
}
```
