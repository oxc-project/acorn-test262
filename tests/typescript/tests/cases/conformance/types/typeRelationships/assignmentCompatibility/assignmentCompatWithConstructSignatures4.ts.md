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
        "name": "Errors",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 81
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 98
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 104
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 106,
                      "end": 112
                    },
                    "start": 104,
                    "end": 112
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 101,
                  "end": 113
                }
              ],
              "start": 99,
              "end": 115
            },
            "abstract": false,
            "declare": false,
            "start": 88,
            "end": 115
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 133
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 146
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 152
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 154,
                      "end": 160
                    },
                    "start": 152,
                    "end": 160
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 149,
                  "end": 161
                }
              ],
              "start": 147,
              "end": 163
            },
            "abstract": false,
            "declare": false,
            "start": 120,
            "end": 163
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived2",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 182
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 198
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
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 204
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 206,
                      "end": 212
                    },
                    "start": 204,
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
                  "accessibility": null,
                  "start": 201,
                  "end": 213
                }
              ],
              "start": 199,
              "end": 215
            },
            "abstract": false,
            "declare": false,
            "start": 168,
            "end": 215
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "OtherDerived",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 238
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 251
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
                    "name": "bing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 254,
                    "end": 258
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 260,
                      "end": 266
                    },
                    "start": 258,
                    "end": 266
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 254,
                  "end": 267
                }
              ],
              "start": 252,
              "end": 269
            },
            "abstract": false,
            "declare": false,
            "start": 220,
            "end": 269
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithNonGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 316
            },
            "body": {
              "type": "TSModuleBlock",
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
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 399,
                                    "end": 405
                                  },
                                  "start": 397,
                                  "end": 405
                                },
                                "start": 396,
                                "end": 405
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 410,
                                  "end": 416
                                },
                                "start": 410,
                                "end": 418
                              },
                              "start": 407,
                              "end": 418
                            },
                            "start": 391,
                            "end": 418
                          },
                          "start": 389,
                          "end": 418
                        },
                        "start": 387,
                        "end": 418
                      },
                      "init": null,
                      "definite": false,
                      "start": 387,
                      "end": 418
                    }
                  ],
                  "declare": false,
                  "start": 383,
                  "end": 419
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
                        "name": "a7",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
                            "typeParameters": null,
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
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 450,
                                              "end": 454
                                            },
                                            "typeArguments": null,
                                            "start": 450,
                                            "end": 454
                                          },
                                          "start": 448,
                                          "end": 454
                                        },
                                        "start": 445,
                                        "end": 454
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 459,
                                          "end": 466
                                        },
                                        "typeArguments": null,
                                        "start": 459,
                                        "end": 466
                                      },
                                      "start": 456,
                                      "end": 466
                                    },
                                    "start": 444,
                                    "end": 466
                                  },
                                  "start": 442,
                                  "end": 466
                                },
                                "start": 441,
                                "end": 466
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 475,
                                          "end": 479
                                        },
                                        "typeArguments": null,
                                        "start": 475,
                                        "end": 479
                                      },
                                      "start": 473,
                                      "end": 479
                                    },
                                    "start": 472,
                                    "end": 479
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 484,
                                      "end": 492
                                    },
                                    "typeArguments": null,
                                    "start": 484,
                                    "end": 492
                                  },
                                  "start": 481,
                                  "end": 492
                                },
                                "start": 471,
                                "end": 492
                              },
                              "start": 468,
                              "end": 492
                            },
                            "start": 436,
                            "end": 492
                          },
                          "start": 434,
                          "end": 492
                        },
                        "start": 432,
                        "end": 492
                      },
                      "init": null,
                      "definite": false,
                      "start": 432,
                      "end": 492
                    }
                  ],
                  "declare": false,
                  "start": 428,
                  "end": 493
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
                        "name": "a8",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
                            "typeParameters": null,
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
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 524,
                                              "end": 528
                                            },
                                            "typeArguments": null,
                                            "start": 524,
                                            "end": 528
                                          },
                                          "start": 522,
                                          "end": 528
                                        },
                                        "start": 519,
                                        "end": 528
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 533,
                                          "end": 540
                                        },
                                        "typeArguments": null,
                                        "start": 533,
                                        "end": 540
                                      },
                                      "start": 530,
                                      "end": 540
                                    },
                                    "start": 518,
                                    "end": 540
                                  },
                                  "start": 516,
                                  "end": 540
                                },
                                "start": 515,
                                "end": 540
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 552,
                                              "end": 556
                                            },
                                            "typeArguments": null,
                                            "start": 552,
                                            "end": 556
                                          },
                                          "start": 550,
                                          "end": 556
                                        },
                                        "start": 546,
                                        "end": 556
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 561,
                                          "end": 568
                                        },
                                        "typeArguments": null,
                                        "start": 561,
                                        "end": 568
                                      },
                                      "start": 558,
                                      "end": 568
                                    },
                                    "start": 545,
                                    "end": 568
                                  },
                                  "start": 543,
                                  "end": 568
                                },
                                "start": 542,
                                "end": 568
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 577,
                                          "end": 581
                                        },
                                        "typeArguments": null,
                                        "start": 577,
                                        "end": 581
                                      },
                                      "start": 575,
                                      "end": 581
                                    },
                                    "start": 574,
                                    "end": 581
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 586,
                                      "end": 593
                                    },
                                    "typeArguments": null,
                                    "start": 586,
                                    "end": 593
                                  },
                                  "start": 583,
                                  "end": 593
                                },
                                "start": 573,
                                "end": 593
                              },
                              "start": 570,
                              "end": 593
                            },
                            "start": 510,
                            "end": 593
                          },
                          "start": 508,
                          "end": 593
                        },
                        "start": 506,
                        "end": 593
                      },
                      "init": null,
                      "definite": false,
                      "start": 506,
                      "end": 593
                    }
                  ],
                  "declare": false,
                  "start": 502,
                  "end": 594
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
                        "name": "a10",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 620,
                                  "end": 621
                                },
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
                                        "name": "Base",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 623,
                                        "end": 627
                                      },
                                      "typeArguments": null,
                                      "start": 623,
                                      "end": 627
                                    },
                                    "start": 623,
                                    "end": 629
                                  },
                                  "start": 621,
                                  "end": 629
                                },
                                "value": null,
                                "start": 617,
                                "end": 629
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 634,
                                  "end": 638
                                },
                                "typeArguments": null,
                                "start": 634,
                                "end": 638
                              },
                              "start": 631,
                              "end": 638
                            },
                            "start": 612,
                            "end": 638
                          },
                          "start": 610,
                          "end": 638
                        },
                        "start": 607,
                        "end": 638
                      },
                      "init": null,
                      "definite": false,
                      "start": 607,
                      "end": 638
                    }
                  ],
                  "declare": false,
                  "start": 603,
                  "end": 639
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
                        "name": "a11",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
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
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 667,
                                          "end": 670
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 672,
                                            "end": 678
                                          },
                                          "start": 670,
                                          "end": 678
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 667,
                                        "end": 678
                                      }
                                    ],
                                    "start": 665,
                                    "end": 680
                                  },
                                  "start": 663,
                                  "end": 680
                                },
                                "start": 662,
                                "end": 680
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
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
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 687,
                                          "end": 690
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 692,
                                            "end": 698
                                          },
                                          "start": 690,
                                          "end": 698
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 687,
                                        "end": 699
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 700,
                                          "end": 703
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 705,
                                            "end": 711
                                          },
                                          "start": 703,
                                          "end": 711
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 700,
                                        "end": 711
                                      }
                                    ],
                                    "start": 685,
                                    "end": 713
                                  },
                                  "start": 683,
                                  "end": 713
                                },
                                "start": 682,
                                "end": 713
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 718,
                                  "end": 722
                                },
                                "typeArguments": null,
                                "start": 718,
                                "end": 722
                              },
                              "start": 715,
                              "end": 722
                            },
                            "start": 657,
                            "end": 722
                          },
                          "start": 655,
                          "end": 722
                        },
                        "start": 652,
                        "end": 722
                      },
                      "init": null,
                      "definite": false,
                      "start": 652,
                      "end": 722
                    }
                  ],
                  "declare": false,
                  "start": 648,
                  "end": 723
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
                        "name": "a12",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
                            "typeParameters": null,
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
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 749,
                                      "end": 754
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 755,
                                            "end": 759
                                          },
                                          "typeArguments": null,
                                          "start": 755,
                                          "end": 759
                                        }
                                      ],
                                      "start": 754,
                                      "end": 760
                                    },
                                    "start": 749,
                                    "end": 760
                                  },
                                  "start": 747,
                                  "end": 760
                                },
                                "start": 746,
                                "end": 760
                              },
                              {
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
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 765,
                                      "end": 770
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 771,
                                            "end": 779
                                          },
                                          "typeArguments": null,
                                          "start": 771,
                                          "end": 779
                                        }
                                      ],
                                      "start": 770,
                                      "end": 780
                                    },
                                    "start": 765,
                                    "end": 780
                                  },
                                  "start": 763,
                                  "end": 780
                                },
                                "start": 762,
                                "end": 780
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Array",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 785,
                                  "end": 790
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Derived",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 791,
                                        "end": 798
                                      },
                                      "typeArguments": null,
                                      "start": 791,
                                      "end": 798
                                    }
                                  ],
                                  "start": 790,
                                  "end": 799
                                },
                                "start": 785,
                                "end": 799
                              },
                              "start": 782,
                              "end": 799
                            },
                            "start": 741,
                            "end": 799
                          },
                          "start": 739,
                          "end": 799
                        },
                        "start": 736,
                        "end": 799
                      },
                      "init": null,
                      "definite": false,
                      "start": 736,
                      "end": 799
                    }
                  ],
                  "declare": false,
                  "start": 732,
                  "end": 800
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
                        "name": "a14",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 844,
                                        "end": 850
                                      },
                                      "start": 842,
                                      "end": 850
                                    },
                                    "start": 841,
                                    "end": 850
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 853,
                                      "end": 859
                                    },
                                    "start": 853,
                                    "end": 861
                                  },
                                  "start": 851,
                                  "end": 861
                                },
                                "start": 836,
                                "end": 862
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 887,
                                        "end": 893
                                      },
                                      "start": 885,
                                      "end": 893
                                    },
                                    "start": 884,
                                    "end": 893
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 896,
                                      "end": 902
                                    },
                                    "start": 896,
                                    "end": 904
                                  },
                                  "start": 894,
                                  "end": 904
                                },
                                "start": 879,
                                "end": 905
                              }
                            ],
                            "start": 818,
                            "end": 919
                          },
                          "start": 816,
                          "end": 919
                        },
                        "start": 813,
                        "end": 919
                      },
                      "init": null,
                      "definite": false,
                      "start": 813,
                      "end": 919
                    }
                  ],
                  "declare": false,
                  "start": 809,
                  "end": 920
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
                        "name": "a15",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
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
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 948,
                                          "end": 949
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 951,
                                            "end": 957
                                          },
                                          "start": 949,
                                          "end": 957
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 948,
                                        "end": 958
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
                                          "start": 959,
                                          "end": 960
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 962,
                                            "end": 968
                                          },
                                          "start": 960,
                                          "end": 968
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 959,
                                        "end": 968
                                      }
                                    ],
                                    "start": 946,
                                    "end": 970
                                  },
                                  "start": 944,
                                  "end": 970
                                },
                                "start": 943,
                                "end": 970
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 975,
                                "end": 981
                              },
                              "start": 972,
                              "end": 981
                            },
                            "start": 938,
                            "end": 981
                          },
                          "start": 936,
                          "end": 981
                        },
                        "start": 933,
                        "end": 981
                      },
                      "init": null,
                      "definite": false,
                      "start": 933,
                      "end": 981
                    }
                  ],
                  "declare": false,
                  "start": 929,
                  "end": 982
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
                        "name": "a16",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1056,
                                                    "end": 1062
                                                  },
                                                  "start": 1054,
                                                  "end": 1062
                                                },
                                                "start": 1053,
                                                "end": 1062
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1065,
                                                "end": 1071
                                              },
                                              "start": 1063,
                                              "end": 1071
                                            },
                                            "start": 1048,
                                            "end": 1072
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1102,
                                                    "end": 1108
                                                  },
                                                  "start": 1100,
                                                  "end": 1108
                                                },
                                                "start": 1098,
                                                "end": 1108
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1111,
                                                "end": 1117
                                              },
                                              "start": 1109,
                                              "end": 1117
                                            },
                                            "start": 1093,
                                            "end": 1118
                                          }
                                        ],
                                        "start": 1026,
                                        "end": 1136
                                      },
                                      "start": 1024,
                                      "end": 1136
                                    },
                                    "start": 1023,
                                    "end": 1136
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1139,
                                      "end": 1145
                                    },
                                    "start": 1139,
                                    "end": 1147
                                  },
                                  "start": 1137,
                                  "end": 1147
                                },
                                "start": 1018,
                                "end": 1148
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1203,
                                                    "end": 1210
                                                  },
                                                  "start": 1201,
                                                  "end": 1210
                                                },
                                                "start": 1200,
                                                "end": 1210
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1213,
                                                "end": 1220
                                              },
                                              "start": 1211,
                                              "end": 1220
                                            },
                                            "start": 1195,
                                            "end": 1221
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1251,
                                                    "end": 1258
                                                  },
                                                  "start": 1249,
                                                  "end": 1258
                                                },
                                                "start": 1247,
                                                "end": 1258
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1261,
                                                "end": 1268
                                              },
                                              "start": 1259,
                                              "end": 1268
                                            },
                                            "start": 1242,
                                            "end": 1269
                                          }
                                        ],
                                        "start": 1173,
                                        "end": 1287
                                      },
                                      "start": 1171,
                                      "end": 1287
                                    },
                                    "start": 1170,
                                    "end": 1287
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1290,
                                      "end": 1297
                                    },
                                    "start": 1290,
                                    "end": 1299
                                  },
                                  "start": 1288,
                                  "end": 1299
                                },
                                "start": 1165,
                                "end": 1300
                              }
                            ],
                            "start": 1000,
                            "end": 1314
                          },
                          "start": 998,
                          "end": 1314
                        },
                        "start": 995,
                        "end": 1314
                      },
                      "init": null,
                      "definite": false,
                      "start": 995,
                      "end": 1314
                    }
                  ],
                  "declare": false,
                  "start": 991,
                  "end": 1315
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
                        "name": "a17",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1386,
                                                    "end": 1387
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1396,
                                                      "end": 1403
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1396,
                                                    "end": 1403
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1386,
                                                  "end": 1403
                                                }
                                              ],
                                              "start": 1385,
                                              "end": 1404
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
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
                                                      "start": 1408,
                                                      "end": 1409
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1408,
                                                    "end": 1409
                                                  },
                                                  "start": 1406,
                                                  "end": 1409
                                                },
                                                "start": 1405,
                                                "end": 1409
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1412,
                                                  "end": 1413
                                                },
                                                "typeArguments": null,
                                                "start": 1412,
                                                "end": 1413
                                              },
                                              "start": 1410,
                                              "end": 1413
                                            },
                                            "start": 1381,
                                            "end": 1414
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1440,
                                                    "end": 1441
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1450,
                                                      "end": 1454
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1450,
                                                    "end": 1454
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1440,
                                                  "end": 1454
                                                }
                                              ],
                                              "start": 1439,
                                              "end": 1455
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
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
                                                      "start": 1459,
                                                      "end": 1460
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1459,
                                                    "end": 1460
                                                  },
                                                  "start": 1457,
                                                  "end": 1460
                                                },
                                                "start": 1456,
                                                "end": 1460
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1463,
                                                  "end": 1464
                                                },
                                                "typeArguments": null,
                                                "start": 1463,
                                                "end": 1464
                                              },
                                              "start": 1461,
                                              "end": 1464
                                            },
                                            "start": 1435,
                                            "end": 1465
                                          }
                                        ],
                                        "start": 1359,
                                        "end": 1483
                                      },
                                      "start": 1357,
                                      "end": 1483
                                    },
                                    "start": 1356,
                                    "end": 1483
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1486,
                                      "end": 1489
                                    },
                                    "start": 1486,
                                    "end": 1491
                                  },
                                  "start": 1484,
                                  "end": 1491
                                },
                                "start": 1351,
                                "end": 1492
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1544,
                                                    "end": 1545
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived2",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1554,
                                                      "end": 1562
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1554,
                                                    "end": 1562
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1544,
                                                  "end": 1562
                                                }
                                              ],
                                              "start": 1543,
                                              "end": 1563
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
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
                                                      "start": 1567,
                                                      "end": 1568
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1567,
                                                    "end": 1568
                                                  },
                                                  "start": 1565,
                                                  "end": 1568
                                                },
                                                "start": 1564,
                                                "end": 1568
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1571,
                                                  "end": 1572
                                                },
                                                "typeArguments": null,
                                                "start": 1571,
                                                "end": 1572
                                              },
                                              "start": 1569,
                                              "end": 1572
                                            },
                                            "start": 1539,
                                            "end": 1573
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1599,
                                                    "end": 1600
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1609,
                                                      "end": 1613
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1609,
                                                    "end": 1613
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1599,
                                                  "end": 1613
                                                }
                                              ],
                                              "start": 1598,
                                              "end": 1614
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
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
                                                      "start": 1618,
                                                      "end": 1619
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1618,
                                                    "end": 1619
                                                  },
                                                  "start": 1616,
                                                  "end": 1619
                                                },
                                                "start": 1615,
                                                "end": 1619
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1622,
                                                  "end": 1623
                                                },
                                                "typeArguments": null,
                                                "start": 1622,
                                                "end": 1623
                                              },
                                              "start": 1620,
                                              "end": 1623
                                            },
                                            "start": 1594,
                                            "end": 1624
                                          }
                                        ],
                                        "start": 1517,
                                        "end": 1642
                                      },
                                      "start": 1515,
                                      "end": 1642
                                    },
                                    "start": 1514,
                                    "end": 1642
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1645,
                                      "end": 1648
                                    },
                                    "start": 1645,
                                    "end": 1650
                                  },
                                  "start": 1643,
                                  "end": 1650
                                },
                                "start": 1509,
                                "end": 1651
                              }
                            ],
                            "start": 1333,
                            "end": 1665
                          },
                          "start": 1331,
                          "end": 1665
                        },
                        "start": 1328,
                        "end": 1665
                      },
                      "init": null,
                      "definite": false,
                      "start": 1328,
                      "end": 1665
                    }
                  ],
                  "declare": false,
                  "start": 1324,
                  "end": 1666
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
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 1689,
                                    "end": 1690
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1689,
                                  "end": 1690
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1692,
                                    "end": 1693
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1692,
                                  "end": 1693
                                }
                              ],
                              "start": 1688,
                              "end": 1694
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1698,
                                      "end": 1699
                                    },
                                    "typeArguments": null,
                                    "start": 1698,
                                    "end": 1699
                                  },
                                  "start": 1696,
                                  "end": 1699
                                },
                                "start": 1695,
                                "end": 1699
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1704,
                                    "end": 1705
                                  },
                                  "typeArguments": null,
                                  "start": 1704,
                                  "end": 1705
                                },
                                "start": 1704,
                                "end": 1707
                              },
                              "start": 1701,
                              "end": 1707
                            },
                            "start": 1684,
                            "end": 1707
                          },
                          "start": 1682,
                          "end": 1707
                        },
                        "start": 1680,
                        "end": 1707
                      },
                      "init": null,
                      "definite": false,
                      "start": 1680,
                      "end": 1707
                    }
                  ],
                  "declare": false,
                  "start": 1676,
                  "end": 1708
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1718,
                      "end": 1720
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1723,
                      "end": 1725
                    },
                    "start": 1718,
                    "end": 1725
                  },
                  "directive": null,
                  "start": 1718,
                  "end": 1726
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1741,
                      "end": 1743
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1746,
                      "end": 1748
                    },
                    "start": 1741,
                    "end": 1748
                  },
                  "directive": null,
                  "start": 1741,
                  "end": 1749
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
                        "name": "b7",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 1778,
                                    "end": 1779
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1788,
                                      "end": 1792
                                    },
                                    "typeArguments": null,
                                    "start": 1788,
                                    "end": 1792
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1778,
                                  "end": 1792
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1794,
                                    "end": 1795
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1804,
                                      "end": 1811
                                    },
                                    "typeArguments": null,
                                    "start": 1804,
                                    "end": 1811
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1794,
                                  "end": 1811
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1813,
                                    "end": 1814
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1823,
                                      "end": 1831
                                    },
                                    "typeArguments": null,
                                    "start": 1823,
                                    "end": 1831
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1813,
                                  "end": 1831
                                }
                              ],
                              "start": 1777,
                              "end": 1832
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
                                              "start": 1842,
                                              "end": 1843
                                            },
                                            "typeArguments": null,
                                            "start": 1842,
                                            "end": 1843
                                          },
                                          "start": 1840,
                                          "end": 1843
                                        },
                                        "start": 1837,
                                        "end": 1843
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1848,
                                          "end": 1849
                                        },
                                        "typeArguments": null,
                                        "start": 1848,
                                        "end": 1849
                                      },
                                      "start": 1845,
                                      "end": 1849
                                    },
                                    "start": 1836,
                                    "end": 1849
                                  },
                                  "start": 1834,
                                  "end": 1849
                                },
                                "start": 1833,
                                "end": 1849
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
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
                                          "start": 1858,
                                          "end": 1859
                                        },
                                        "typeArguments": null,
                                        "start": 1858,
                                        "end": 1859
                                      },
                                      "start": 1856,
                                      "end": 1859
                                    },
                                    "start": 1855,
                                    "end": 1859
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1864,
                                      "end": 1865
                                    },
                                    "typeArguments": null,
                                    "start": 1864,
                                    "end": 1865
                                  },
                                  "start": 1861,
                                  "end": 1865
                                },
                                "start": 1854,
                                "end": 1865
                              },
                              "start": 1851,
                              "end": 1865
                            },
                            "start": 1773,
                            "end": 1865
                          },
                          "start": 1771,
                          "end": 1865
                        },
                        "start": 1769,
                        "end": 1865
                      },
                      "init": null,
                      "definite": false,
                      "start": 1769,
                      "end": 1865
                    }
                  ],
                  "declare": false,
                  "start": 1765,
                  "end": 1866
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1875,
                      "end": 1877
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1880,
                      "end": 1882
                    },
                    "start": 1875,
                    "end": 1882
                  },
                  "directive": null,
                  "start": 1875,
                  "end": 1883
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1898,
                      "end": 1900
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1903,
                      "end": 1905
                    },
                    "start": 1898,
                    "end": 1905
                  },
                  "directive": null,
                  "start": 1898,
                  "end": 1906
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
                        "name": "b8",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 1935,
                                    "end": 1936
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1945,
                                      "end": 1949
                                    },
                                    "typeArguments": null,
                                    "start": 1945,
                                    "end": 1949
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1935,
                                  "end": 1949
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1951,
                                    "end": 1952
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1961,
                                      "end": 1968
                                    },
                                    "typeArguments": null,
                                    "start": 1961,
                                    "end": 1968
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1951,
                                  "end": 1968
                                }
                              ],
                              "start": 1934,
                              "end": 1969
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
                                              "start": 1979,
                                              "end": 1980
                                            },
                                            "typeArguments": null,
                                            "start": 1979,
                                            "end": 1980
                                          },
                                          "start": 1977,
                                          "end": 1980
                                        },
                                        "start": 1974,
                                        "end": 1980
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1985,
                                          "end": 1986
                                        },
                                        "typeArguments": null,
                                        "start": 1985,
                                        "end": 1986
                                      },
                                      "start": 1982,
                                      "end": 1986
                                    },
                                    "start": 1973,
                                    "end": 1986
                                  },
                                  "start": 1971,
                                  "end": 1986
                                },
                                "start": 1970,
                                "end": 1986
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg2",
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
                                                  "name": "foo",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 2000,
                                                  "end": 2003
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 2005,
                                                    "end": 2011
                                                  },
                                                  "start": 2003,
                                                  "end": 2011
                                                },
                                                "accessibility": null,
                                                "static": false,
                                                "start": 2000,
                                                "end": 2012
                                              }
                                            ],
                                            "start": 1998,
                                            "end": 2014
                                          },
                                          "start": 1996,
                                          "end": 2014
                                        },
                                        "start": 1992,
                                        "end": 2014
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2019,
                                          "end": 2020
                                        },
                                        "typeArguments": null,
                                        "start": 2019,
                                        "end": 2020
                                      },
                                      "start": 2016,
                                      "end": 2020
                                    },
                                    "start": 1991,
                                    "end": 2020
                                  },
                                  "start": 1989,
                                  "end": 2020
                                },
                                "start": 1988,
                                "end": 2020
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
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
                                          "start": 2029,
                                          "end": 2030
                                        },
                                        "typeArguments": null,
                                        "start": 2029,
                                        "end": 2030
                                      },
                                      "start": 2027,
                                      "end": 2030
                                    },
                                    "start": 2026,
                                    "end": 2030
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2035,
                                      "end": 2036
                                    },
                                    "typeArguments": null,
                                    "start": 2035,
                                    "end": 2036
                                  },
                                  "start": 2032,
                                  "end": 2036
                                },
                                "start": 2025,
                                "end": 2036
                              },
                              "start": 2022,
                              "end": 2036
                            },
                            "start": 1930,
                            "end": 2036
                          },
                          "start": 1928,
                          "end": 2036
                        },
                        "start": 1926,
                        "end": 2036
                      },
                      "init": null,
                      "definite": false,
                      "start": 1926,
                      "end": 2036
                    }
                  ],
                  "declare": false,
                  "start": 1922,
                  "end": 2037
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2047,
                      "end": 2049
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2052,
                      "end": 2054
                    },
                    "start": 2047,
                    "end": 2054
                  },
                  "directive": null,
                  "start": 2047,
                  "end": 2055
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2088,
                      "end": 2090
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2093,
                      "end": 2095
                    },
                    "start": 2088,
                    "end": 2095
                  },
                  "directive": null,
                  "start": 2088,
                  "end": 2096
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
                        "name": "b10",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2138,
                                    "end": 2139
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2148,
                                      "end": 2155
                                    },
                                    "typeArguments": null,
                                    "start": 2148,
                                    "end": 2155
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2138,
                                  "end": 2155
                                }
                              ],
                              "start": 2137,
                              "end": 2156
                            },
                            "params": [
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2160,
                                  "end": 2161
                                },
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
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2163,
                                        "end": 2164
                                      },
                                      "typeArguments": null,
                                      "start": 2163,
                                      "end": 2164
                                    },
                                    "start": 2163,
                                    "end": 2166
                                  },
                                  "start": 2161,
                                  "end": 2166
                                },
                                "value": null,
                                "start": 2157,
                                "end": 2166
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2171,
                                  "end": 2172
                                },
                                "typeArguments": null,
                                "start": 2171,
                                "end": 2172
                              },
                              "start": 2168,
                              "end": 2172
                            },
                            "start": 2133,
                            "end": 2172
                          },
                          "start": 2131,
                          "end": 2172
                        },
                        "start": 2128,
                        "end": 2172
                      },
                      "init": null,
                      "definite": false,
                      "start": 2128,
                      "end": 2172
                    }
                  ],
                  "declare": false,
                  "start": 2124,
                  "end": 2173
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2183,
                      "end": 2186
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2189,
                      "end": 2192
                    },
                    "start": 2183,
                    "end": 2192
                  },
                  "directive": null,
                  "start": 2183,
                  "end": 2193
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2208,
                      "end": 2211
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2214,
                      "end": 2217
                    },
                    "start": 2208,
                    "end": 2217
                  },
                  "directive": null,
                  "start": 2208,
                  "end": 2218
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
                        "name": "b11",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2248,
                                    "end": 2249
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2258,
                                      "end": 2265
                                    },
                                    "typeArguments": null,
                                    "start": 2258,
                                    "end": 2265
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2248,
                                  "end": 2265
                                }
                              ],
                              "start": 2247,
                              "end": 2266
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2270,
                                      "end": 2271
                                    },
                                    "typeArguments": null,
                                    "start": 2270,
                                    "end": 2271
                                  },
                                  "start": 2268,
                                  "end": 2271
                                },
                                "start": 2267,
                                "end": 2271
                              },
                              {
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2276,
                                      "end": 2277
                                    },
                                    "typeArguments": null,
                                    "start": 2276,
                                    "end": 2277
                                  },
                                  "start": 2274,
                                  "end": 2277
                                },
                                "start": 2273,
                                "end": 2277
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2282,
                                  "end": 2283
                                },
                                "typeArguments": null,
                                "start": 2282,
                                "end": 2283
                              },
                              "start": 2279,
                              "end": 2283
                            },
                            "start": 2243,
                            "end": 2283
                          },
                          "start": 2241,
                          "end": 2283
                        },
                        "start": 2238,
                        "end": 2283
                      },
                      "init": null,
                      "definite": false,
                      "start": 2238,
                      "end": 2283
                    }
                  ],
                  "declare": false,
                  "start": 2234,
                  "end": 2284
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2294,
                      "end": 2297
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2300,
                      "end": 2303
                    },
                    "start": 2294,
                    "end": 2303
                  },
                  "directive": null,
                  "start": 2294,
                  "end": 2304
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2319,
                      "end": 2322
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2325,
                      "end": 2328
                    },
                    "start": 2319,
                    "end": 2328
                  },
                  "directive": null,
                  "start": 2319,
                  "end": 2329
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
                        "name": "b12",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2359,
                                    "end": 2360
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2369,
                                      "end": 2374
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2375,
                                            "end": 2383
                                          },
                                          "typeArguments": null,
                                          "start": 2375,
                                          "end": 2383
                                        }
                                      ],
                                      "start": 2374,
                                      "end": 2384
                                    },
                                    "start": 2369,
                                    "end": 2384
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2359,
                                  "end": 2384
                                }
                              ],
                              "start": 2358,
                              "end": 2385
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
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2389,
                                      "end": 2394
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2395,
                                            "end": 2399
                                          },
                                          "typeArguments": null,
                                          "start": 2395,
                                          "end": 2399
                                        }
                                      ],
                                      "start": 2394,
                                      "end": 2400
                                    },
                                    "start": 2389,
                                    "end": 2400
                                  },
                                  "start": 2387,
                                  "end": 2400
                                },
                                "start": 2386,
                                "end": 2400
                              },
                              {
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
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2405,
                                      "end": 2410
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2411,
                                            "end": 2415
                                          },
                                          "typeArguments": null,
                                          "start": 2411,
                                          "end": 2415
                                        }
                                      ],
                                      "start": 2410,
                                      "end": 2416
                                    },
                                    "start": 2405,
                                    "end": 2416
                                  },
                                  "start": 2403,
                                  "end": 2416
                                },
                                "start": 2402,
                                "end": 2416
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2421,
                                  "end": 2422
                                },
                                "typeArguments": null,
                                "start": 2421,
                                "end": 2422
                              },
                              "start": 2418,
                              "end": 2422
                            },
                            "start": 2354,
                            "end": 2422
                          },
                          "start": 2352,
                          "end": 2422
                        },
                        "start": 2349,
                        "end": 2422
                      },
                      "init": null,
                      "definite": false,
                      "start": 2349,
                      "end": 2422
                    }
                  ],
                  "declare": false,
                  "start": 2345,
                  "end": 2423
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2433,
                      "end": 2436
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2439,
                      "end": 2442
                    },
                    "start": 2433,
                    "end": 2442
                  },
                  "directive": null,
                  "start": 2433,
                  "end": 2443
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2458,
                      "end": 2461
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2464,
                      "end": 2467
                    },
                    "start": 2458,
                    "end": 2467
                  },
                  "directive": null,
                  "start": 2458,
                  "end": 2468
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
                        "name": "b15",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2498,
                                    "end": 2499
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2498,
                                  "end": 2499
                                }
                              ],
                              "start": 2497,
                              "end": 2500
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
                                          "start": 2506,
                                          "end": 2507
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
                                              "start": 2509,
                                              "end": 2510
                                            },
                                            "typeArguments": null,
                                            "start": 2509,
                                            "end": 2510
                                          },
                                          "start": 2507,
                                          "end": 2510
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2506,
                                        "end": 2511
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
                                          "start": 2512,
                                          "end": 2513
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
                                              "start": 2515,
                                              "end": 2516
                                            },
                                            "typeArguments": null,
                                            "start": 2515,
                                            "end": 2516
                                          },
                                          "start": 2513,
                                          "end": 2516
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2512,
                                        "end": 2516
                                      }
                                    ],
                                    "start": 2504,
                                    "end": 2518
                                  },
                                  "start": 2502,
                                  "end": 2518
                                },
                                "start": 2501,
                                "end": 2518
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2523,
                                  "end": 2524
                                },
                                "typeArguments": null,
                                "start": 2523,
                                "end": 2524
                              },
                              "start": 2520,
                              "end": 2524
                            },
                            "start": 2493,
                            "end": 2524
                          },
                          "start": 2491,
                          "end": 2524
                        },
                        "start": 2488,
                        "end": 2524
                      },
                      "init": null,
                      "definite": false,
                      "start": 2488,
                      "end": 2524
                    }
                  ],
                  "declare": false,
                  "start": 2484,
                  "end": 2525
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2535,
                      "end": 2538
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2541,
                      "end": 2544
                    },
                    "start": 2535,
                    "end": 2544
                  },
                  "directive": null,
                  "start": 2535,
                  "end": 2545
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2560,
                      "end": 2563
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2566,
                      "end": 2569
                    },
                    "start": 2560,
                    "end": 2569
                  },
                  "directive": null,
                  "start": 2560,
                  "end": 2570
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
                        "name": "b15a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2601,
                                    "end": 2602
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2611,
                                      "end": 2615
                                    },
                                    "typeArguments": null,
                                    "start": 2611,
                                    "end": 2615
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2601,
                                  "end": 2615
                                }
                              ],
                              "start": 2600,
                              "end": 2616
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
                                          "start": 2622,
                                          "end": 2623
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
                                              "start": 2625,
                                              "end": 2626
                                            },
                                            "typeArguments": null,
                                            "start": 2625,
                                            "end": 2626
                                          },
                                          "start": 2623,
                                          "end": 2626
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2622,
                                        "end": 2627
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
                                          "start": 2628,
                                          "end": 2629
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
                                              "start": 2631,
                                              "end": 2632
                                            },
                                            "typeArguments": null,
                                            "start": 2631,
                                            "end": 2632
                                          },
                                          "start": 2629,
                                          "end": 2632
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2628,
                                        "end": 2632
                                      }
                                    ],
                                    "start": 2620,
                                    "end": 2634
                                  },
                                  "start": 2618,
                                  "end": 2634
                                },
                                "start": 2617,
                                "end": 2634
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2639,
                                "end": 2645
                              },
                              "start": 2636,
                              "end": 2645
                            },
                            "start": 2596,
                            "end": 2645
                          },
                          "start": 2594,
                          "end": 2645
                        },
                        "start": 2590,
                        "end": 2645
                      },
                      "init": null,
                      "definite": false,
                      "start": 2590,
                      "end": 2645
                    }
                  ],
                  "declare": false,
                  "start": 2586,
                  "end": 2646
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2656,
                      "end": 2659
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2662,
                      "end": 2666
                    },
                    "start": 2656,
                    "end": 2666
                  },
                  "directive": null,
                  "start": 2656,
                  "end": 2667
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2682,
                      "end": 2686
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2689,
                      "end": 2692
                    },
                    "start": 2682,
                    "end": 2692
                  },
                  "directive": null,
                  "start": 2682,
                  "end": 2693
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
                        "name": "b16",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2723,
                                    "end": 2724
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2723,
                                  "end": 2724
                                }
                              ],
                              "start": 2722,
                              "end": 2725
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
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
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
                                              "start": 2733,
                                              "end": 2734
                                            },
                                            "typeArguments": null,
                                            "start": 2733,
                                            "end": 2734
                                          },
                                          "start": 2731,
                                          "end": 2734
                                        },
                                        "start": 2730,
                                        "end": 2734
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2739,
                                          "end": 2740
                                        },
                                        "typeArguments": null,
                                        "start": 2739,
                                        "end": 2740
                                      },
                                      "start": 2736,
                                      "end": 2740
                                    },
                                    "start": 2729,
                                    "end": 2740
                                  },
                                  "start": 2727,
                                  "end": 2740
                                },
                                "start": 2726,
                                "end": 2740
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2745,
                                    "end": 2746
                                  },
                                  "typeArguments": null,
                                  "start": 2745,
                                  "end": 2746
                                },
                                "start": 2745,
                                "end": 2748
                              },
                              "start": 2742,
                              "end": 2748
                            },
                            "start": 2718,
                            "end": 2748
                          },
                          "start": 2716,
                          "end": 2748
                        },
                        "start": 2713,
                        "end": 2748
                      },
                      "init": null,
                      "definite": false,
                      "start": 2713,
                      "end": 2748
                    }
                  ],
                  "declare": false,
                  "start": 2709,
                  "end": 2749
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2758,
                      "end": 2761
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2764,
                      "end": 2767
                    },
                    "start": 2758,
                    "end": 2767
                  },
                  "directive": null,
                  "start": 2758,
                  "end": 2768
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2786,
                      "end": 2789
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2792,
                      "end": 2795
                    },
                    "start": 2786,
                    "end": 2795
                  },
                  "directive": null,
                  "start": 2786,
                  "end": 2796
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
                        "name": "b17",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2829,
                                    "end": 2830
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2829,
                                  "end": 2830
                                }
                              ],
                              "start": 2828,
                              "end": 2831
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
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
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
                                              "start": 2839,
                                              "end": 2840
                                            },
                                            "typeArguments": null,
                                            "start": 2839,
                                            "end": 2840
                                          },
                                          "start": 2837,
                                          "end": 2840
                                        },
                                        "start": 2836,
                                        "end": 2840
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2845,
                                          "end": 2846
                                        },
                                        "typeArguments": null,
                                        "start": 2845,
                                        "end": 2846
                                      },
                                      "start": 2842,
                                      "end": 2846
                                    },
                                    "start": 2835,
                                    "end": 2846
                                  },
                                  "start": 2833,
                                  "end": 2846
                                },
                                "start": 2832,
                                "end": 2846
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 2851,
                                  "end": 2854
                                },
                                "start": 2851,
                                "end": 2856
                              },
                              "start": 2848,
                              "end": 2856
                            },
                            "start": 2824,
                            "end": 2856
                          },
                          "start": 2822,
                          "end": 2856
                        },
                        "start": 2819,
                        "end": 2856
                      },
                      "init": null,
                      "definite": false,
                      "start": 2819,
                      "end": 2856
                    }
                  ],
                  "declare": false,
                  "start": 2815,
                  "end": 2857
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2866,
                      "end": 2869
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2872,
                      "end": 2875
                    },
                    "start": 2866,
                    "end": 2875
                  },
                  "directive": null,
                  "start": 2866,
                  "end": 2876
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2894,
                      "end": 2897
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2900,
                      "end": 2903
                    },
                    "start": 2894,
                    "end": 2903
                  },
                  "directive": null,
                  "start": 2894,
                  "end": 2904
                }
              ],
              "start": 317,
              "end": 2919
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 275,
            "end": 2919
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2932,
              "end": 2963
            },
            "body": {
              "type": "TSModuleBlock",
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
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3037,
                                    "end": 3038
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3037,
                                  "end": 3038
                                }
                              ],
                              "start": 3036,
                              "end": 3039
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
                                  "start": 3041,
                                  "end": 3044
                                },
                                "start": 3040,
                                "end": 3044
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3049,
                                    "end": 3050
                                  },
                                  "typeArguments": null,
                                  "start": 3049,
                                  "end": 3050
                                },
                                "start": 3049,
                                "end": 3052
                              },
                              "start": 3046,
                              "end": 3052
                            },
                            "start": 3032,
                            "end": 3052
                          },
                          "start": 3030,
                          "end": 3052
                        },
                        "start": 3028,
                        "end": 3052
                      },
                      "init": null,
                      "definite": false,
                      "start": 3028,
                      "end": 3052
                    }
                  ],
                  "declare": false,
                  "start": 3024,
                  "end": 3053
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
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3075,
                                    "end": 3076
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3075,
                                  "end": 3076
                                }
                              ],
                              "start": 3074,
                              "end": 3077
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3081,
                                      "end": 3082
                                    },
                                    "typeArguments": null,
                                    "start": 3081,
                                    "end": 3082
                                  },
                                  "start": 3079,
                                  "end": 3082
                                },
                                "start": 3078,
                                "end": 3082
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3087,
                                  "end": 3093
                                },
                                "start": 3087,
                                "end": 3095
                              },
                              "start": 3084,
                              "end": 3095
                            },
                            "start": 3070,
                            "end": 3095
                          },
                          "start": 3068,
                          "end": 3095
                        },
                        "start": 3066,
                        "end": 3095
                      },
                      "init": null,
                      "definite": false,
                      "start": 3066,
                      "end": 3095
                    }
                  ],
                  "declare": false,
                  "start": 3062,
                  "end": 3096
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3105,
                      "end": 3107
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3110,
                      "end": 3112
                    },
                    "start": 3105,
                    "end": 3112
                  },
                  "directive": null,
                  "start": 3105,
                  "end": 3113
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3128,
                      "end": 3130
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3133,
                      "end": 3135
                    },
                    "start": 3128,
                    "end": 3135
                  },
                  "directive": null,
                  "start": 3128,
                  "end": 3136
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
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3215,
                                    "end": 3216
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3215,
                                  "end": 3216
                                }
                              ],
                              "start": 3214,
                              "end": 3217
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3221,
                                      "end": 3222
                                    },
                                    "typeArguments": null,
                                    "start": 3221,
                                    "end": 3222
                                  },
                                  "start": 3219,
                                  "end": 3222
                                },
                                "start": 3218,
                                "end": 3222
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3227,
                                  "end": 3233
                                },
                                "start": 3227,
                                "end": 3235
                              },
                              "start": 3224,
                              "end": 3235
                            },
                            "start": 3210,
                            "end": 3235
                          },
                          "start": 3208,
                          "end": 3235
                        },
                        "start": 3206,
                        "end": 3235
                      },
                      "init": null,
                      "definite": false,
                      "start": 3206,
                      "end": 3235
                    }
                  ],
                  "declare": false,
                  "start": 3202,
                  "end": 3236
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
                        "name": "b3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3258,
                                    "end": 3259
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3258,
                                  "end": 3259
                                }
                              ],
                              "start": 3257,
                              "end": 3260
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3264,
                                      "end": 3265
                                    },
                                    "typeArguments": null,
                                    "start": 3264,
                                    "end": 3265
                                  },
                                  "start": 3262,
                                  "end": 3265
                                },
                                "start": 3261,
                                "end": 3265
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3270,
                                    "end": 3271
                                  },
                                  "typeArguments": null,
                                  "start": 3270,
                                  "end": 3271
                                },
                                "start": 3270,
                                "end": 3273
                              },
                              "start": 3267,
                              "end": 3273
                            },
                            "start": 3253,
                            "end": 3273
                          },
                          "start": 3251,
                          "end": 3273
                        },
                        "start": 3249,
                        "end": 3273
                      },
                      "init": null,
                      "definite": false,
                      "start": 3249,
                      "end": 3273
                    }
                  ],
                  "declare": false,
                  "start": 3245,
                  "end": 3274
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3284,
                      "end": 3286
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3289,
                      "end": 3291
                    },
                    "start": 3284,
                    "end": 3291
                  },
                  "directive": null,
                  "start": 3284,
                  "end": 3292
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3307,
                      "end": 3309
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3312,
                      "end": 3314
                    },
                    "start": 3307,
                    "end": 3314
                  },
                  "directive": null,
                  "start": 3307,
                  "end": 3315
                }
              ],
              "start": 2964,
              "end": 3327
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 2925,
            "end": 3327
          }
        ],
        "start": 82,
        "end": 3329
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 68,
      "end": 3329
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 3329
}
```
