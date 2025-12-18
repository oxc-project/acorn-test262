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
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "start": 8,
              "end": 9
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 9
          }
        ],
        "start": 7,
        "end": 10
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 11,
        "end": 14
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 14
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
            "name": "prop11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 27,
                  "end": 28
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Tany",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 31,
                              "end": 35
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 31,
                            "end": 35
                          }
                        ],
                        "start": 30,
                        "end": 36
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Tany",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 42,
                            "end": 46
                          },
                          "typeArguments": null,
                          "start": 42,
                          "end": 46
                        },
                        "start": 39,
                        "end": 46
                      },
                      "start": 30,
                      "end": 46
                    }
                  ],
                  "start": 28,
                  "end": 48
                },
                "start": 27,
                "end": 48
              },
              "start": 25,
              "end": 48
            },
            "start": 19,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 19,
          "end": 48
        }
      ],
      "declare": false,
      "start": 15,
      "end": 49
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
            "name": "prop12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 104
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Tany",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 107,
                              "end": 111
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 107,
                            "end": 111
                          }
                        ],
                        "start": 106,
                        "end": 112
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Tany",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 118,
                            "end": 122
                          },
                          "typeArguments": null,
                          "start": 118,
                          "end": 122
                        },
                        "start": 115,
                        "end": 122
                      },
                      "start": 106,
                      "end": 122
                    }
                  ],
                  "start": 104,
                  "end": 124
                },
                "start": 103,
                "end": 124
              },
              "start": 101,
              "end": 124
            },
            "start": 95,
            "end": 124
          },
          "init": null,
          "definite": false,
          "start": 95,
          "end": 124
        }
      ],
      "declare": false,
      "start": 91,
      "end": 125
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 178
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop11",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 224
            },
            "start": 211,
            "end": 225
          }
        ],
        "start": 181,
        "end": 227
      },
      "expression": false,
      "start": 167,
      "end": 227
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 237,
        "end": 239
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop12",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 285
            },
            "start": 272,
            "end": 286
          }
        ],
        "start": 242,
        "end": 288
      },
      "expression": false,
      "start": 228,
      "end": 288
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 298,
        "end": 300
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
            "start": 304,
            "end": 305
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tany",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 308,
                        "end": 312
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 308,
                      "end": 312
                    }
                  ],
                  "start": 307,
                  "end": 313
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tany",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 319,
                      "end": 323
                    },
                    "typeArguments": null,
                    "start": 319,
                    "end": 323
                  },
                  "start": 316,
                  "end": 323
                },
                "start": 307,
                "end": 323
              }
            ],
            "start": 305,
            "end": 324
          },
          "start": 304,
          "end": 324
        },
        "start": 302,
        "end": 324
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop11",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 387
            },
            "start": 374,
            "end": 388
          }
        ],
        "start": 325,
        "end": 390
      },
      "expression": false,
      "start": 289,
      "end": 390
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 400,
        "end": 402
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
            "start": 406,
            "end": 407
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tany",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 410,
                        "end": 414
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 410,
                      "end": 414
                    }
                  ],
                  "start": 409,
                  "end": 415
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tany",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 425
                    },
                    "typeArguments": null,
                    "start": 421,
                    "end": 425
                  },
                  "start": 418,
                  "end": 425
                },
                "start": 409,
                "end": 425
              }
            ],
            "start": 407,
            "end": 427
          },
          "start": 406,
          "end": 427
        },
        "start": 404,
        "end": 427
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop12",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 480
            },
            "start": 467,
            "end": 481
          }
        ],
        "start": 428,
        "end": 483
      },
      "expression": false,
      "start": 391,
      "end": 483
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 490,
        "end": 491
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
              "start": 492,
              "end": 493
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 492,
            "end": 493
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 496
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 495,
            "end": 496
          }
        ],
        "start": 491,
        "end": 497
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 498,
        "end": 501
      },
      "abstract": false,
      "declare": false,
      "start": 484,
      "end": 501
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
            "name": "prop2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 513,
                  "end": 514
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 515,
                        "end": 521
                      },
                      "start": 515,
                      "end": 523
                    },
                    {
                      "type": "TSFunctionType",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Tany",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 526,
                              "end": 530
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 526,
                            "end": 530
                          }
                        ],
                        "start": 525,
                        "end": 531
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Tany",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 537,
                            "end": 541
                          },
                          "typeArguments": null,
                          "start": 537,
                          "end": 541
                        },
                        "start": 534,
                        "end": 541
                      },
                      "start": 525,
                      "end": 541
                    }
                  ],
                  "start": 514,
                  "end": 542
                },
                "start": 513,
                "end": 542
              },
              "start": 511,
              "end": 542
            },
            "start": 506,
            "end": 542
          },
          "init": null,
          "definite": false,
          "start": 506,
          "end": 542
        }
      ],
      "declare": false,
      "start": 502,
      "end": 543
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
            "name": "prop2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 594,
                  "end": 595
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 596,
                        "end": 602
                      },
                      "start": 596,
                      "end": 604
                    },
                    {
                      "type": "TSFunctionType",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Tany",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 607,
                              "end": 611
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 607,
                            "end": 611
                          }
                        ],
                        "start": 606,
                        "end": 612
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Tany",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 618,
                            "end": 622
                          },
                          "typeArguments": null,
                          "start": 618,
                          "end": 622
                        },
                        "start": 615,
                        "end": 622
                      },
                      "start": 606,
                      "end": 622
                    }
                  ],
                  "start": 595,
                  "end": 623
                },
                "start": 594,
                "end": 623
              },
              "start": 592,
              "end": 623
            },
            "start": 587,
            "end": 623
          },
          "init": null,
          "definite": false,
          "start": 587,
          "end": 623
        }
      ],
      "declare": false,
      "start": 583,
      "end": 624
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
            "name": "prop3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 672,
                  "end": 673
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Tany",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 676,
                              "end": 680
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 676,
                            "end": 680
                          }
                        ],
                        "start": 675,
                        "end": 681
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Tany",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 687,
                            "end": 691
                          },
                          "typeArguments": null,
                          "start": 687,
                          "end": 691
                        },
                        "start": 684,
                        "end": 691
                      },
                      "start": 675,
                      "end": 691
                    },
                    {
                      "type": "TSFunctionType",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Tany",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 694,
                              "end": 698
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 694,
                            "end": 698
                          }
                        ],
                        "start": 693,
                        "end": 699
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Tany",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 705,
                            "end": 709
                          },
                          "typeArguments": null,
                          "start": 705,
                          "end": 709
                        },
                        "start": 702,
                        "end": 709
                      },
                      "start": 693,
                      "end": 709
                    }
                  ],
                  "start": 673,
                  "end": 710
                },
                "start": 672,
                "end": 710
              },
              "start": 670,
              "end": 710
            },
            "start": 665,
            "end": 710
          },
          "init": null,
          "definite": false,
          "start": 665,
          "end": 710
        }
      ],
      "declare": false,
      "start": 661,
      "end": 711
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
            "name": "prop4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 759,
                  "end": 760
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Tany",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 763,
                              "end": 767
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 763,
                            "end": 767
                          }
                        ],
                        "start": 762,
                        "end": 768
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Tany",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 774,
                            "end": 778
                          },
                          "typeArguments": null,
                          "start": 774,
                          "end": 778
                        },
                        "start": 771,
                        "end": 778
                      },
                      "start": 762,
                      "end": 778
                    },
                    {
                      "type": "TSFunctionType",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Tany",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 782,
                              "end": 786
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 782,
                            "end": 786
                          }
                        ],
                        "start": 781,
                        "end": 787
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Tany",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 793,
                            "end": 797
                          },
                          "typeArguments": null,
                          "start": 793,
                          "end": 797
                        },
                        "start": 790,
                        "end": 797
                      },
                      "start": 781,
                      "end": 797
                    }
                  ],
                  "start": 760,
                  "end": 798
                },
                "start": 759,
                "end": 798
              },
              "start": 757,
              "end": 798
            },
            "start": 752,
            "end": 798
          },
          "init": null,
          "definite": false,
          "start": 752,
          "end": 798
        }
      ],
      "declare": false,
      "start": 748,
      "end": 799
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 836
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 15,
    "end": 18,
    "range": [
      15,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "prop11",
    "start": 19,
    "end": 25,
    "range": [
      19,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 31,
    "end": 35,
    "range": [
      31,
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
    "value": "(",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 39,
    "end": 41,
    "range": [
      39,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 42,
    "end": 46,
    "range": [
      42,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 91,
    "end": 94,
    "range": [
      91,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "prop12",
    "start": 95,
    "end": 101,
    "range": [
      95,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 107,
    "end": 111,
    "range": [
      107,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 115,
    "end": 117,
    "range": [
      115,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 118,
    "end": 122,
    "range": [
      118,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 167,
    "end": 175,
    "range": [
      167,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 176,
    "end": 178,
    "range": [
      176,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 211,
    "end": 217,
    "range": [
      211,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "prop11",
    "start": 218,
    "end": 224,
    "range": [
      218,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 228,
    "end": 236,
    "range": [
      228,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 237,
    "end": 239,
    "range": [
      237,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 272,
    "end": 278,
    "range": [
      272,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "prop12",
    "start": 279,
    "end": 285,
    "range": [
      279,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 289,
    "end": 297,
    "range": [
      289,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 298,
    "end": 300,
    "range": [
      298,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 308,
    "end": 312,
    "range": [
      308,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 316,
    "end": 318,
    "range": [
      316,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 319,
    "end": 323,
    "range": [
      319,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 374,
    "end": 380,
    "range": [
      374,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "prop11",
    "start": 381,
    "end": 387,
    "range": [
      381,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 391,
    "end": 399,
    "range": [
      391,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 400,
    "end": 402,
    "range": [
      400,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 410,
    "end": 414,
    "range": [
      410,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 418,
    "end": 420,
    "range": [
      418,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 421,
    "end": 425,
    "range": [
      421,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 467,
    "end": 473,
    "range": [
      467,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "prop12",
    "start": 474,
    "end": 480,
    "range": [
      474,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 484,
    "end": 489,
    "range": [
      484,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 492,
    "end": 493,
    "range": [
      492,
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
    "value": "B",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 502,
    "end": 505,
    "range": [
      502,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 506,
    "end": 511,
    "range": [
      506,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 515,
    "end": 521,
    "range": [
      515,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 526,
    "end": 530,
    "range": [
      526,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 534,
    "end": 536,
    "range": [
      534,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 537,
    "end": 541,
    "range": [
      537,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 583,
    "end": 586,
    "range": [
      583,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 587,
    "end": 592,
    "range": [
      587,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "start": 596,
    "end": 602,
    "range": [
      596,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 607,
    "end": 611,
    "range": [
      607,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 615,
    "end": 617,
    "range": [
      615,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 618,
    "end": 622,
    "range": [
      618,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 661,
    "end": 664,
    "range": [
      661,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "prop3",
    "start": 665,
    "end": 670,
    "range": [
      665,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 676,
    "end": 680,
    "range": [
      676,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 684,
    "end": 686,
    "range": [
      684,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 687,
    "end": 691,
    "range": [
      687,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 694,
    "end": 698,
    "range": [
      694,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 702,
    "end": 704,
    "range": [
      702,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 705,
    "end": 709,
    "range": [
      705,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 748,
    "end": 751,
    "range": [
      748,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "prop4",
    "start": 752,
    "end": 757,
    "range": [
      752,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 763,
    "end": 767,
    "range": [
      763,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 771,
    "end": 773,
    "range": [
      771,
      773
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 774,
    "end": 778,
    "range": [
      774,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
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
    "value": "Tany",
    "start": 782,
    "end": 786,
    "range": [
      782,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 790,
    "end": 792,
    "range": [
      790,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "Tany",
    "start": 793,
    "end": 797,
    "range": [
      793,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  }
]
```
