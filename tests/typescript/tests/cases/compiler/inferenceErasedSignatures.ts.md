__ESTREE_TEST__:AST:
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
        "name": "SomeBaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 49
      },
      "typeParameters": null,
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
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 59
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 61
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 76,
                        "end": 80
                      },
                      "start": 70,
                      "end": 80
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 60,
                    "end": 80
                  }
                ],
                "start": 59,
                "end": 81
              },
              "params": [
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
                        "start": 87,
                        "end": 88
                      },
                      "typeArguments": null,
                      "start": 87,
                      "end": 88
                    },
                    "start": 85,
                    "end": 88
                  },
                  "start": 82,
                  "end": 88
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSThisType",
                        "start": 97,
                        "end": 101
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 102,
                          "end": 103
                        },
                        "typeArguments": null,
                        "start": 102,
                        "end": 103
                      },
                      "start": 97,
                      "end": 104
                    },
                    "start": 95,
                    "end": 104
                  },
                  "start": 90,
                  "end": 104
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSThisType",
                    "start": 107,
                    "end": 111
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 112,
                      "end": 113
                    },
                    "typeArguments": null,
                    "start": 112,
                    "end": 113
                  },
                  "start": 107,
                  "end": 114
                },
                "start": 105,
                "end": 114
              },
              "body": null,
              "expression": false,
              "start": 59,
              "end": 115
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 56,
            "end": 115
          }
        ],
        "start": 50,
        "end": 117
      },
      "abstract": false,
      "declare": true,
      "start": 22,
      "end": 117
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeAbstractClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
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
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 153
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 152,
            "end": 153
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 155,
            "end": 156
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 159
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 158,
            "end": 159
          }
        ],
        "start": 151,
        "end": 160
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 182
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 192
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 200,
                          "end": 201
                        },
                        "typeArguments": null,
                        "start": 200,
                        "end": 201
                      },
                      "start": 198,
                      "end": 201
                    },
                    "start": 196,
                    "end": 201
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 206,
                    "end": 210
                  },
                  "start": 203,
                  "end": 210
                },
                "start": 195,
                "end": 210
              },
              "start": 193,
              "end": 210
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
            "start": 189,
            "end": 211
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 219
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 227,
                        "end": 230
                      },
                      "start": 225,
                      "end": 230
                    },
                    "start": 223,
                    "end": 230
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 235,
                    "end": 239
                  },
                  "start": 232,
                  "end": 239
                },
                "start": 222,
                "end": 239
              },
              "start": 220,
              "end": 239
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
            "start": 216,
            "end": 240
          },
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 257
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 261,
                        "end": 262
                      },
                      "typeArguments": null,
                      "start": 261,
                      "end": 262
                    },
                    "start": 259,
                    "end": 262
                  },
                  "start": 258,
                  "end": 262
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 265,
                    "end": 272
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 273,
                          "end": 274
                        },
                        "typeArguments": null,
                        "start": 273,
                        "end": 274
                      }
                    ],
                    "start": 272,
                    "end": 275
                  },
                  "start": 265,
                  "end": 275
                },
                "start": 263,
                "end": 275
              },
              "body": null,
              "expression": false,
              "start": 257,
              "end": 276
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 245,
            "end": 276
          }
        ],
        "start": 183,
        "end": 278
      },
      "abstract": true,
      "declare": false,
      "start": 119,
      "end": 278
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 295
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeAbstractClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 304,
        "end": 321
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 322,
            "end": 328
          },
          {
            "type": "TSStringKeyword",
            "start": 330,
            "end": 336
          },
          {
            "type": "TSBooleanKeyword",
            "start": 338,
            "end": 345
          }
        ],
        "start": 321,
        "end": 346
      },
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 362
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 372,
                      "end": 378
                    },
                    "start": 370,
                    "end": 378
                  },
                  "start": 363,
                  "end": 378
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 381,
                    "end": 388
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 389,
                        "end": 395
                      }
                    ],
                    "start": 388,
                    "end": 396
                  },
                  "start": 381,
                  "end": 396
                },
                "start": 379,
                "end": 396
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 414,
                          "end": 417
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 424,
                          "end": 426
                        }
                      ],
                      "expressions": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 417,
                          "end": 424
                        }
                      ],
                      "start": 414,
                      "end": 426
                    },
                    "start": 407,
                    "end": 427
                  }
                ],
                "start": 397,
                "end": 433
              },
              "expression": false,
              "start": 362,
              "end": 433
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 353,
            "end": 433
          }
        ],
        "start": 347,
        "end": 435
      },
      "abstract": false,
      "declare": false,
      "start": 280,
      "end": 435
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CType",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 447
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
              "start": 448,
              "end": 449
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 448,
            "end": 449
          }
        ],
        "start": 447,
        "end": 450
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
            "start": 453,
            "end": 454
          },
          "typeArguments": null,
          "start": 453,
          "end": 454
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeAbstractClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 480
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
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 487,
                    "end": 488
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 487,
                  "end": 488
                },
                "start": 481,
                "end": 488
              },
              {
                "type": "TSAnyKeyword",
                "start": 490,
                "end": 493
              },
              {
                "type": "TSAnyKeyword",
                "start": 495,
                "end": 498
              }
            ],
            "start": 480,
            "end": 499
          },
          "start": 463,
          "end": 499
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 503
          },
          "typeArguments": null,
          "start": 502,
          "end": 503
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 506,
          "end": 511
        },
        "start": 453,
        "end": 511
      },
      "declare": false,
      "start": 437,
      "end": 512
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MType",
        "optional": false,
        "typeAnnotation": null,
        "start": 518,
        "end": 523
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
              "start": 524,
              "end": 525
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 524,
            "end": 525
          }
        ],
        "start": 523,
        "end": 526
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
            "start": 529,
            "end": 530
          },
          "typeArguments": null,
          "start": 529,
          "end": 530
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeAbstractClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 556
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 557,
                "end": 560
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 568,
                    "end": 569
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 568,
                  "end": 569
                },
                "start": 562,
                "end": 569
              },
              {
                "type": "TSAnyKeyword",
                "start": 571,
                "end": 574
              }
            ],
            "start": 556,
            "end": 575
          },
          "start": 539,
          "end": 575
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 578,
            "end": 579
          },
          "typeArguments": null,
          "start": 578,
          "end": 579
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 582,
          "end": 587
        },
        "start": 529,
        "end": 587
      },
      "declare": false,
      "start": 513,
      "end": 588
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RType",
        "optional": false,
        "typeAnnotation": null,
        "start": 594,
        "end": 599
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
              "start": 600,
              "end": 601
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 600,
            "end": 601
          }
        ],
        "start": 599,
        "end": 602
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
            "start": 605,
            "end": 606
          },
          "typeArguments": null,
          "start": 605,
          "end": 606
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeAbstractClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 615,
            "end": 632
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 633,
                "end": 636
              },
              {
                "type": "TSAnyKeyword",
                "start": 638,
                "end": 641
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
                    "start": 649,
                    "end": 650
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 649,
                  "end": 650
                },
                "start": 643,
                "end": 650
              }
            ],
            "start": 632,
            "end": 651
          },
          "start": 615,
          "end": 651
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 655
          },
          "typeArguments": null,
          "start": 654,
          "end": 655
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 658,
          "end": 663
        },
        "start": 605,
        "end": 663
      },
      "declare": false,
      "start": 589,
      "end": 664
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeClassC",
        "optional": false,
        "typeAnnotation": null,
        "start": 671,
        "end": 681
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CType",
          "optional": false,
          "typeAnnotation": null,
          "start": 684,
          "end": 689
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 690,
                "end": 699
              },
              "typeArguments": null,
              "start": 690,
              "end": 699
            }
          ],
          "start": 689,
          "end": 700
        },
        "start": 684,
        "end": 700
      },
      "declare": false,
      "start": 666,
      "end": 701
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeClassM",
        "optional": false,
        "typeAnnotation": null,
        "start": 717,
        "end": 727
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MType",
          "optional": false,
          "typeAnnotation": null,
          "start": 730,
          "end": 735
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 736,
                "end": 745
              },
              "typeArguments": null,
              "start": 736,
              "end": 745
            }
          ],
          "start": 735,
          "end": 746
        },
        "start": 730,
        "end": 746
      },
      "declare": false,
      "start": 712,
      "end": 747
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeClassR",
        "optional": false,
        "typeAnnotation": null,
        "start": 763,
        "end": 773
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RType",
          "optional": false,
          "typeAnnotation": null,
          "start": 776,
          "end": 781
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 791
              },
              "typeArguments": null,
              "start": 782,
              "end": 791
            }
          ],
          "start": 781,
          "end": 792
        },
        "start": 776,
        "end": 792
      },
      "declare": false,
      "start": 758,
      "end": 793
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseType",
        "optional": false,
        "typeAnnotation": null,
        "start": 838,
        "end": 846
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
              "start": 847,
              "end": 849
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 847,
            "end": 849
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 851,
              "end": 853
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 851,
            "end": 853
          }
        ],
        "start": 846,
        "end": 854
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 862,
              "end": 865
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 866,
                    "end": 867
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 882,
                      "end": 886
                    },
                    "start": 876,
                    "end": 886
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 866,
                  "end": 886
                }
              ],
              "start": 865,
              "end": 887
            },
            "params": [
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
                      "start": 893,
                      "end": 894
                    },
                    "typeArguments": null,
                    "start": 893,
                    "end": 894
                  },
                  "start": 891,
                  "end": 894
                },
                "start": 888,
                "end": 894
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSThisType",
                      "start": 903,
                      "end": 907
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 908,
                        "end": 909
                      },
                      "typeArguments": null,
                      "start": 908,
                      "end": 909
                    },
                    "start": 903,
                    "end": 910
                  },
                  "start": 901,
                  "end": 910
                },
                "start": 896,
                "end": 910
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSThisType",
                  "start": 913,
                  "end": 917
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 918,
                    "end": 919
                  },
                  "typeArguments": null,
                  "start": 918,
                  "end": 919
                },
                "start": 913,
                "end": 920
              },
              "start": 911,
              "end": 920
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 862,
            "end": 921
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "useT1",
              "optional": false,
              "typeAnnotation": null,
              "start": 926,
              "end": 931
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 935,
                      "end": 937
                    },
                    "typeArguments": null,
                    "start": 935,
                    "end": 937
                  },
                  "start": 933,
                  "end": 937
                },
                "start": 932,
                "end": 937
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 940,
                "end": 944
              },
              "start": 938,
              "end": 944
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 926,
            "end": 945
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "useT2",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 955
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 960,
                      "end": 962
                    },
                    "typeArguments": null,
                    "start": 960,
                    "end": 962
                  },
                  "start": 958,
                  "end": 962
                },
                "start": 956,
                "end": 962
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 965,
                "end": 969
              },
              "start": 963,
              "end": 969
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 950,
            "end": 970
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "unrelatedButSomehowRelevant",
              "optional": false,
              "typeAnnotation": null,
              "start": 975,
              "end": 1002
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1007,
                    "end": 1010
                  },
                  "start": 1005,
                  "end": 1010
                },
                "start": 1003,
                "end": 1010
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1013,
                "end": 1017
              },
              "start": 1011,
              "end": 1017
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 975,
            "end": 1018
          }
        ],
        "start": 856,
        "end": 1020
      },
      "declare": false,
      "start": 828,
      "end": 1020
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InheritedType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1032,
        "end": 1045
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "BaseType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1054,
            "end": 1062
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1063,
                "end": 1069
              },
              {
                "type": "TSBooleanKeyword",
                "start": 1071,
                "end": 1078
              }
            ],
            "start": 1062,
            "end": 1079
          },
          "start": 1054,
          "end": 1079
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "useT1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1135,
              "end": 1140
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSNumberKeyword",
                    "start": 1144,
                    "end": 1150
                  },
                  "start": 1142,
                  "end": 1150
                },
                "start": 1141,
                "end": 1150
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1153,
                "end": 1157
              },
              "start": 1151,
              "end": 1157
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1135,
            "end": 1157
          }
        ],
        "start": 1080,
        "end": 1159
      },
      "declare": false,
      "start": 1022,
      "end": 1159
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StructuralVersion",
        "optional": false,
        "typeAnnotation": null,
        "start": 1212,
        "end": 1229
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1237,
              "end": 1240
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1241,
                    "end": 1242
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 1257,
                      "end": 1261
                    },
                    "start": 1251,
                    "end": 1261
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1241,
                  "end": 1261
                }
              ],
              "start": 1240,
              "end": 1262
            },
            "params": [
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
                      "start": 1268,
                      "end": 1269
                    },
                    "typeArguments": null,
                    "start": 1268,
                    "end": 1269
                  },
                  "start": 1266,
                  "end": 1269
                },
                "start": 1263,
                "end": 1269
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSThisType",
                      "start": 1278,
                      "end": 1282
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1283,
                        "end": 1284
                      },
                      "typeArguments": null,
                      "start": 1283,
                      "end": 1284
                    },
                    "start": 1278,
                    "end": 1285
                  },
                  "start": 1276,
                  "end": 1285
                },
                "start": 1271,
                "end": 1285
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSThisType",
                  "start": 1288,
                  "end": 1292
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1293,
                    "end": 1294
                  },
                  "typeArguments": null,
                  "start": 1293,
                  "end": 1294
                },
                "start": 1288,
                "end": 1295
              },
              "start": 1286,
              "end": 1295
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1237,
            "end": 1296
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "useT1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1301,
              "end": 1306
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1310,
                    "end": 1316
                  },
                  "start": 1308,
                  "end": 1316
                },
                "start": 1307,
                "end": 1316
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1319,
                "end": 1323
              },
              "start": 1317,
              "end": 1323
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1301,
            "end": 1324
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "useT2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1329,
              "end": 1334
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1339,
                    "end": 1346
                  },
                  "start": 1337,
                  "end": 1346
                },
                "start": 1335,
                "end": 1346
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1349,
                "end": 1353
              },
              "start": 1347,
              "end": 1353
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1329,
            "end": 1354
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "unrelatedButSomehowRelevant",
              "optional": false,
              "typeAnnotation": null,
              "start": 1359,
              "end": 1386
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1391,
                    "end": 1394
                  },
                  "start": 1389,
                  "end": 1394
                },
                "start": 1387,
                "end": 1394
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1397,
                "end": 1401
              },
              "start": 1395,
              "end": 1401
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1359,
            "end": 1402
          }
        ],
        "start": 1231,
        "end": 1404
      },
      "declare": false,
      "start": 1202,
      "end": 1404
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetT1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1411,
        "end": 1416
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
              "start": 1417,
              "end": 1418
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1417,
            "end": 1418
          }
        ],
        "start": 1416,
        "end": 1419
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
            "start": 1422,
            "end": 1423
          },
          "typeArguments": null,
          "start": 1422,
          "end": 1423
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "BaseType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1432,
            "end": 1440
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
                    "start": 1447,
                    "end": 1448
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1447,
                  "end": 1448
                },
                "start": 1441,
                "end": 1448
              },
              {
                "type": "TSAnyKeyword",
                "start": 1450,
                "end": 1453
              }
            ],
            "start": 1440,
            "end": 1454
          },
          "start": 1432,
          "end": 1454
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 1457,
            "end": 1458
          },
          "typeArguments": null,
          "start": 1457,
          "end": 1458
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1461,
          "end": 1466
        },
        "start": 1422,
        "end": 1466
      },
      "declare": false,
      "start": 1406,
      "end": 1467
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1474,
        "end": 1476
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetT1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1479,
          "end": 1484
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InheritedType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1485,
                "end": 1498
              },
              "typeArguments": null,
              "start": 1485,
              "end": 1498
            }
          ],
          "start": 1484,
          "end": 1499
        },
        "start": 1479,
        "end": 1499
      },
      "declare": false,
      "start": 1469,
      "end": 1500
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1516,
        "end": 1518
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "GetT1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1521,
          "end": 1526
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StructuralVersion",
                "optional": false,
                "typeAnnotation": null,
                "start": 1527,
                "end": 1544
              },
              "typeArguments": null,
              "start": 1527,
              "end": 1544
            }
          ],
          "start": 1526,
          "end": 1545
        },
        "start": 1521,
        "end": 1545
      },
      "declare": false,
      "start": 1511,
      "end": 1546
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 1556
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 22,
    "end": 29,
    "range": [
      22,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 30,
    "end": 35,
    "range": [
      30,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeBaseClass",
    "start": 36,
    "end": 49,
    "range": [
      36,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 56,
    "end": 59,
    "range": [
      56,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 62,
    "end": 69,
    "range": [
      62,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 70,
    "end": 75,
    "range": [
      70,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 76,
    "end": 80,
    "range": [
      76,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 82,
    "end": 85,
    "range": [
      82,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 90,
    "end": 95,
    "range": [
      90,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 97,
    "end": 101,
    "range": [
      97,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 107,
    "end": 111,
    "range": [
      107,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 119,
    "end": 127,
    "range": [
      119,
      127
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 128,
    "end": 133,
    "range": [
      128,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeAbstractClass",
    "start": 134,
    "end": 151,
    "range": [
      134,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 161,
    "end": 168,
    "range": [
      161,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeBaseClass",
    "start": 169,
    "end": 182,
    "range": [
      169,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 189,
    "end": 192,
    "range": [
      189,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 203,
    "end": 205,
    "range": [
      203,
      205
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 206,
    "end": 210,
    "range": [
      206,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 216,
    "end": 219,
    "range": [
      216,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 227,
    "end": 230,
    "range": [
      227,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 232,
    "end": 234,
    "range": [
      232,
      234
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 235,
    "end": 239,
    "range": [
      235,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 245,
    "end": 253,
    "range": [
      245,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 254,
    "end": 257,
    "range": [
      254,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 265,
    "end": 272,
    "range": [
      265,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 280,
    "end": 285,
    "range": [
      280,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeClass",
    "start": 286,
    "end": 295,
    "range": [
      286,
      295
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 296,
    "end": 303,
    "range": [
      296,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeAbstractClass",
    "start": 304,
    "end": 321,
    "range": [
      304,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 322,
    "end": 328,
    "range": [
      322,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 330,
    "end": 336,
    "range": [
      330,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 338,
    "end": 345,
    "range": [
      338,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "async",
    "start": 353,
    "end": 358,
    "range": [
      353,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 359,
    "end": 362,
    "range": [
      359,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 363,
    "end": 370,
    "range": [
      363,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 372,
    "end": 378,
    "range": [
      372,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 381,
    "end": 388,
    "range": [
      381,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 389,
    "end": 395,
    "range": [
      389,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 407,
    "end": 413,
    "range": [
      407,
      413
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 414,
    "end": 417,
    "range": [
      414,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 417,
    "end": 424,
    "range": [
      417,
      424
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 424,
    "end": 426,
    "range": [
      424,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 437,
    "end": 441,
    "range": [
      437,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "CType",
    "start": 442,
    "end": 447,
    "range": [
      442,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 455,
    "end": 462,
    "range": [
      455,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeAbstractClass",
    "start": 463,
    "end": 480,
    "range": [
      463,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 481,
    "end": 486,
    "range": [
      481,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 490,
    "end": 493,
    "range": [
      490,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 495,
    "end": 498,
    "range": [
      495,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 506,
    "end": 511,
    "range": [
      506,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 513,
    "end": 517,
    "range": [
      513,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "MType",
    "start": 518,
    "end": 523,
    "range": [
      518,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 531,
    "end": 538,
    "range": [
      531,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeAbstractClass",
    "start": 539,
    "end": 556,
    "range": [
      539,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 557,
    "end": 560,
    "range": [
      557,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 562,
    "end": 567,
    "range": [
      562,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 571,
    "end": 574,
    "range": [
      571,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 582,
    "end": 587,
    "range": [
      582,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 589,
    "end": 593,
    "range": [
      589,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "RType",
    "start": 594,
    "end": 599,
    "range": [
      594,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 607,
    "end": 614,
    "range": [
      607,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeAbstractClass",
    "start": 615,
    "end": 632,
    "range": [
      615,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 633,
    "end": 636,
    "range": [
      633,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 638,
    "end": 641,
    "range": [
      638,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 643,
    "end": 648,
    "range": [
      643,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 658,
    "end": 663,
    "range": [
      658,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 666,
    "end": 670,
    "range": [
      666,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeClassC",
    "start": 671,
    "end": 681,
    "range": [
      671,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "CType",
    "start": 684,
    "end": 689,
    "range": [
      684,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeClass",
    "start": 690,
    "end": 699,
    "range": [
      690,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 712,
    "end": 716,
    "range": [
      712,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeClassM",
    "start": 717,
    "end": 727,
    "range": [
      717,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "MType",
    "start": 730,
    "end": 735,
    "range": [
      730,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeClass",
    "start": 736,
    "end": 745,
    "range": [
      736,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "type",
    "start": 758,
    "end": 762,
    "range": [
      758,
      762
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeClassR",
    "start": 763,
    "end": 773,
    "range": [
      763,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Identifier",
    "value": "RType",
    "start": 776,
    "end": 781,
    "range": [
      776,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "SomeClass",
    "start": 782,
    "end": 791,
    "range": [
      782,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 828,
    "end": 837,
    "range": [
      828,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "BaseType",
    "start": 838,
    "end": 846,
    "range": [
      838,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 847,
    "end": 849,
    "range": [
      847,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 851,
    "end": 853,
    "range": [
      851,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 862,
    "end": 865,
    "range": [
      862,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 868,
    "end": 875,
    "range": [
      868,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 876,
    "end": 881,
    "range": [
      876,
      881
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 882,
    "end": 886,
    "range": [
      882,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 888,
    "end": 891,
    "range": [
      888,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 896,
    "end": 901,
    "range": [
      896,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 903,
    "end": 907,
    "range": [
      903,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 913,
    "end": 917,
    "range": [
      913,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "useT1",
    "start": 926,
    "end": 931,
    "range": [
      926,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 935,
    "end": 937,
    "range": [
      935,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 940,
    "end": 944,
    "range": [
      940,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "useT2",
    "start": 950,
    "end": 955,
    "range": [
      950,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 960,
    "end": 962,
    "range": [
      960,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 965,
    "end": 969,
    "range": [
      965,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "unrelatedButSomehowRelevant",
    "start": 975,
    "end": 1002,
    "range": [
      975,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1007,
    "end": 1010,
    "range": [
      1007,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1013,
    "end": 1017,
    "range": [
      1013,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1022,
    "end": 1031,
    "range": [
      1022,
      1031
    ]
  },
  {
    "type": "Identifier",
    "value": "InheritedType",
    "start": 1032,
    "end": 1045,
    "range": [
      1032,
      1045
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1046,
    "end": 1053,
    "range": [
      1046,
      1053
    ]
  },
  {
    "type": "Identifier",
    "value": "BaseType",
    "start": 1054,
    "end": 1062,
    "range": [
      1054,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1063,
    "end": 1069,
    "range": [
      1063,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1071,
    "end": 1078,
    "range": [
      1071,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Identifier",
    "value": "useT1",
    "start": 1135,
    "end": 1140,
    "range": [
      1135,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1144,
    "end": 1150,
    "range": [
      1144,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1153,
    "end": 1157,
    "range": [
      1153,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1202,
    "end": 1211,
    "range": [
      1202,
      1211
    ]
  },
  {
    "type": "Identifier",
    "value": "StructuralVersion",
    "start": 1212,
    "end": 1229,
    "range": [
      1212,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1237,
    "end": 1240,
    "range": [
      1237,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1243,
    "end": 1250,
    "range": [
      1243,
      1250
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1251,
    "end": 1256,
    "range": [
      1251,
      1256
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1257,
    "end": 1261,
    "range": [
      1257,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1263,
    "end": 1266,
    "range": [
      1263,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1271,
    "end": 1276,
    "range": [
      1271,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1278,
    "end": 1282,
    "range": [
      1278,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1288,
    "end": 1292,
    "range": [
      1288,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Identifier",
    "value": "useT1",
    "start": 1301,
    "end": 1306,
    "range": [
      1301,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1310,
    "end": 1316,
    "range": [
      1310,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1319,
    "end": 1323,
    "range": [
      1319,
      1323
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Identifier",
    "value": "useT2",
    "start": 1329,
    "end": 1334,
    "range": [
      1329,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1339,
    "end": 1346,
    "range": [
      1339,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1349,
    "end": 1353,
    "range": [
      1349,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "unrelatedButSomehowRelevant",
    "start": 1359,
    "end": 1386,
    "range": [
      1359,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1391,
    "end": 1394,
    "range": [
      1391,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1397,
    "end": 1401,
    "range": [
      1397,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1406,
    "end": 1410,
    "range": [
      1406,
      1410
    ]
  },
  {
    "type": "Identifier",
    "value": "GetT1",
    "start": 1411,
    "end": 1416,
    "range": [
      1411,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1424,
    "end": 1431,
    "range": [
      1424,
      1431
    ]
  },
  {
    "type": "Identifier",
    "value": "BaseType",
    "start": 1432,
    "end": 1440,
    "range": [
      1432,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1441,
    "end": 1446,
    "range": [
      1441,
      1446
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1450,
    "end": 1453,
    "range": [
      1450,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1461,
    "end": 1466,
    "range": [
      1461,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1469,
    "end": 1473,
    "range": [
      1469,
      1473
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1474,
    "end": 1476,
    "range": [
      1474,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Identifier",
    "value": "GetT1",
    "start": 1479,
    "end": 1484,
    "range": [
      1479,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Identifier",
    "value": "InheritedType",
    "start": 1485,
    "end": 1498,
    "range": [
      1485,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1511,
    "end": 1515,
    "range": [
      1511,
      1515
    ]
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1516,
    "end": 1518,
    "range": [
      1516,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "GetT1",
    "start": 1521,
    "end": 1526,
    "range": [
      1521,
      1526
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Identifier",
    "value": "StructuralVersion",
    "start": 1527,
    "end": 1544,
    "range": [
      1527,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  }
]
```
