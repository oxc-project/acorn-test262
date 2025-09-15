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
        "start": 127,
        "end": 133
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
              "start": 146,
              "end": 150
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
                    "start": 153,
                    "end": 156
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 158,
                      "end": 164
                    },
                    "start": 156,
                    "end": 164
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
                  "start": 153,
                  "end": 165
                }
              ],
              "start": 151,
              "end": 167
            },
            "abstract": false,
            "declare": false,
            "start": 140,
            "end": 167
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
              "start": 178,
              "end": 185
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
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
                    "name": "bar",
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
            "start": 172,
            "end": 215
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
              "start": 226,
              "end": 234
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 250
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
                    "start": 253,
                    "end": 256
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 258,
                      "end": 264
                    },
                    "start": 256,
                    "end": 264
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
                  "start": 253,
                  "end": 265
                }
              ],
              "start": 251,
              "end": 267
            },
            "abstract": false,
            "declare": false,
            "start": 220,
            "end": 267
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
              "start": 278,
              "end": 290
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 303
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
                    "start": 306,
                    "end": 310
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 312,
                      "end": 318
                    },
                    "start": 310,
                    "end": 318
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
                  "start": 306,
                  "end": 319
                }
              ],
              "start": 304,
              "end": 321
            },
            "abstract": false,
            "declare": false,
            "start": 272,
            "end": 321
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithNonGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 371
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 446,
                    "end": 447
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
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 462,
                          "end": 464
                        },
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
                                    "start": 474,
                                    "end": 480
                                  },
                                  "start": 472,
                                  "end": 480
                                },
                                "start": 471,
                                "end": 480
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 485,
                                  "end": 491
                                },
                                "start": 485,
                                "end": 493
                              },
                              "start": 482,
                              "end": 493
                            },
                            "start": 466,
                            "end": 493
                          },
                          "start": 464,
                          "end": 493
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 462,
                        "end": 494
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 507,
                          "end": 509
                        },
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
                                              "start": 525,
                                              "end": 529
                                            },
                                            "typeArguments": null,
                                            "start": 525,
                                            "end": 529
                                          },
                                          "start": 523,
                                          "end": 529
                                        },
                                        "start": 520,
                                        "end": 529
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
                                          "start": 534,
                                          "end": 541
                                        },
                                        "typeArguments": null,
                                        "start": 534,
                                        "end": 541
                                      },
                                      "start": 531,
                                      "end": 541
                                    },
                                    "start": 519,
                                    "end": 541
                                  },
                                  "start": 517,
                                  "end": 541
                                },
                                "start": 516,
                                "end": 541
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
                                          "start": 550,
                                          "end": 554
                                        },
                                        "typeArguments": null,
                                        "start": 550,
                                        "end": 554
                                      },
                                      "start": 548,
                                      "end": 554
                                    },
                                    "start": 547,
                                    "end": 554
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
                                      "start": 559,
                                      "end": 567
                                    },
                                    "typeArguments": null,
                                    "start": 559,
                                    "end": 567
                                  },
                                  "start": 556,
                                  "end": 567
                                },
                                "start": 546,
                                "end": 567
                              },
                              "start": 543,
                              "end": 567
                            },
                            "start": 511,
                            "end": 567
                          },
                          "start": 509,
                          "end": 567
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 507,
                        "end": 568
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a8",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 581,
                          "end": 583
                        },
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
                                              "start": 599,
                                              "end": 603
                                            },
                                            "typeArguments": null,
                                            "start": 599,
                                            "end": 603
                                          },
                                          "start": 597,
                                          "end": 603
                                        },
                                        "start": 594,
                                        "end": 603
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
                                          "start": 608,
                                          "end": 615
                                        },
                                        "typeArguments": null,
                                        "start": 608,
                                        "end": 615
                                      },
                                      "start": 605,
                                      "end": 615
                                    },
                                    "start": 593,
                                    "end": 615
                                  },
                                  "start": 591,
                                  "end": 615
                                },
                                "start": 590,
                                "end": 615
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
                                              "start": 627,
                                              "end": 631
                                            },
                                            "typeArguments": null,
                                            "start": 627,
                                            "end": 631
                                          },
                                          "start": 625,
                                          "end": 631
                                        },
                                        "start": 621,
                                        "end": 631
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
                                          "start": 636,
                                          "end": 643
                                        },
                                        "typeArguments": null,
                                        "start": 636,
                                        "end": 643
                                      },
                                      "start": 633,
                                      "end": 643
                                    },
                                    "start": 620,
                                    "end": 643
                                  },
                                  "start": 618,
                                  "end": 643
                                },
                                "start": 617,
                                "end": 643
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
                                          "start": 652,
                                          "end": 656
                                        },
                                        "typeArguments": null,
                                        "start": 652,
                                        "end": 656
                                      },
                                      "start": 650,
                                      "end": 656
                                    },
                                    "start": 649,
                                    "end": 656
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
                                      "start": 661,
                                      "end": 668
                                    },
                                    "typeArguments": null,
                                    "start": 661,
                                    "end": 668
                                  },
                                  "start": 658,
                                  "end": 668
                                },
                                "start": 648,
                                "end": 668
                              },
                              "start": 645,
                              "end": 668
                            },
                            "start": 585,
                            "end": 668
                          },
                          "start": 583,
                          "end": 668
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 581,
                        "end": 669
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a10",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 682,
                          "end": 685
                        },
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
                                  "start": 695,
                                  "end": 696
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
                                        "start": 698,
                                        "end": 702
                                      },
                                      "typeArguments": null,
                                      "start": 698,
                                      "end": 702
                                    },
                                    "start": 698,
                                    "end": 704
                                  },
                                  "start": 696,
                                  "end": 704
                                },
                                "value": null,
                                "start": 692,
                                "end": 704
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
                                  "start": 709,
                                  "end": 713
                                },
                                "typeArguments": null,
                                "start": 709,
                                "end": 713
                              },
                              "start": 706,
                              "end": 713
                            },
                            "start": 687,
                            "end": 713
                          },
                          "start": 685,
                          "end": 713
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 682,
                        "end": 714
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a11",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 727,
                          "end": 730
                        },
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
                                          "start": 742,
                                          "end": 745
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 747,
                                            "end": 753
                                          },
                                          "start": 745,
                                          "end": 753
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 742,
                                        "end": 753
                                      }
                                    ],
                                    "start": 740,
                                    "end": 755
                                  },
                                  "start": 738,
                                  "end": 755
                                },
                                "start": 737,
                                "end": 755
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
                                          "start": 762,
                                          "end": 765
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 767,
                                            "end": 773
                                          },
                                          "start": 765,
                                          "end": 773
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 762,
                                        "end": 774
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
                                          "start": 775,
                                          "end": 778
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 780,
                                            "end": 786
                                          },
                                          "start": 778,
                                          "end": 786
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 775,
                                        "end": 786
                                      }
                                    ],
                                    "start": 760,
                                    "end": 788
                                  },
                                  "start": 758,
                                  "end": 788
                                },
                                "start": 757,
                                "end": 788
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
                            "start": 732,
                            "end": 797
                          },
                          "start": 730,
                          "end": 797
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 727,
                        "end": 798
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a12",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 811,
                          "end": 814
                        },
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
                                      "start": 824,
                                      "end": 829
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
                                            "start": 830,
                                            "end": 834
                                          },
                                          "typeArguments": null,
                                          "start": 830,
                                          "end": 834
                                        }
                                      ],
                                      "start": 829,
                                      "end": 835
                                    },
                                    "start": 824,
                                    "end": 835
                                  },
                                  "start": 822,
                                  "end": 835
                                },
                                "start": 821,
                                "end": 835
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
                                      "start": 840,
                                      "end": 845
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
                                            "start": 846,
                                            "end": 854
                                          },
                                          "typeArguments": null,
                                          "start": 846,
                                          "end": 854
                                        }
                                      ],
                                      "start": 845,
                                      "end": 855
                                    },
                                    "start": 840,
                                    "end": 855
                                  },
                                  "start": 838,
                                  "end": 855
                                },
                                "start": 837,
                                "end": 855
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
                                  "start": 860,
                                  "end": 865
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
                                        "start": 866,
                                        "end": 873
                                      },
                                      "typeArguments": null,
                                      "start": 866,
                                      "end": 873
                                    }
                                  ],
                                  "start": 865,
                                  "end": 874
                                },
                                "start": 860,
                                "end": 874
                              },
                              "start": 857,
                              "end": 874
                            },
                            "start": 816,
                            "end": 874
                          },
                          "start": 814,
                          "end": 874
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 811,
                        "end": 875
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a14",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 888,
                          "end": 891
                        },
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
                                        "start": 919,
                                        "end": 925
                                      },
                                      "start": 917,
                                      "end": 925
                                    },
                                    "start": 916,
                                    "end": 925
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 928,
                                      "end": 934
                                    },
                                    "start": 928,
                                    "end": 936
                                  },
                                  "start": 926,
                                  "end": 936
                                },
                                "start": 911,
                                "end": 937
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
                                        "start": 962,
                                        "end": 968
                                      },
                                      "start": 960,
                                      "end": 968
                                    },
                                    "start": 959,
                                    "end": 968
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 971,
                                      "end": 977
                                    },
                                    "start": 971,
                                    "end": 979
                                  },
                                  "start": 969,
                                  "end": 979
                                },
                                "start": 954,
                                "end": 980
                              }
                            ],
                            "start": 893,
                            "end": 994
                          },
                          "start": 891,
                          "end": 994
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 888,
                        "end": 995
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a15",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1008,
                          "end": 1011
                        },
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
                                          "start": 1023,
                                          "end": 1024
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 1026,
                                            "end": 1032
                                          },
                                          "start": 1024,
                                          "end": 1032
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1023,
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
                                          "name": "b",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1034,
                                          "end": 1035
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1037,
                                            "end": 1043
                                          },
                                          "start": 1035,
                                          "end": 1043
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1034,
                                        "end": 1043
                                      }
                                    ],
                                    "start": 1021,
                                    "end": 1045
                                  },
                                  "start": 1019,
                                  "end": 1045
                                },
                                "start": 1018,
                                "end": 1045
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1050,
                                "end": 1056
                              },
                              "start": 1047,
                              "end": 1056
                            },
                            "start": 1013,
                            "end": 1056
                          },
                          "start": 1011,
                          "end": 1056
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1008,
                        "end": 1057
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a16",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1070,
                          "end": 1073
                        },
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
                                                    "start": 1237,
                                                    "end": 1243
                                                  },
                                                  "start": 1235,
                                                  "end": 1243
                                                },
                                                "start": 1234,
                                                "end": 1243
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1246,
                                                "end": 1252
                                              },
                                              "start": 1244,
                                              "end": 1252
                                            },
                                            "start": 1229,
                                            "end": 1253
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
                                                    "start": 1283,
                                                    "end": 1289
                                                  },
                                                  "start": 1281,
                                                  "end": 1289
                                                },
                                                "start": 1279,
                                                "end": 1289
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1292,
                                                "end": 1298
                                              },
                                              "start": 1290,
                                              "end": 1298
                                            },
                                            "start": 1274,
                                            "end": 1299
                                          }
                                        ],
                                        "start": 1207,
                                        "end": 1317
                                      },
                                      "start": 1205,
                                      "end": 1317
                                    },
                                    "start": 1204,
                                    "end": 1317
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1320,
                                      "end": 1326
                                    },
                                    "start": 1320,
                                    "end": 1328
                                  },
                                  "start": 1318,
                                  "end": 1328
                                },
                                "start": 1199,
                                "end": 1329
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
                                                    "start": 1384,
                                                    "end": 1391
                                                  },
                                                  "start": 1382,
                                                  "end": 1391
                                                },
                                                "start": 1381,
                                                "end": 1391
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1394,
                                                "end": 1401
                                              },
                                              "start": 1392,
                                              "end": 1401
                                            },
                                            "start": 1376,
                                            "end": 1402
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
                                                    "start": 1432,
                                                    "end": 1439
                                                  },
                                                  "start": 1430,
                                                  "end": 1439
                                                },
                                                "start": 1428,
                                                "end": 1439
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1442,
                                                "end": 1449
                                              },
                                              "start": 1440,
                                              "end": 1449
                                            },
                                            "start": 1423,
                                            "end": 1450
                                          }
                                        ],
                                        "start": 1354,
                                        "end": 1468
                                      },
                                      "start": 1352,
                                      "end": 1468
                                    },
                                    "start": 1351,
                                    "end": 1468
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1471,
                                      "end": 1478
                                    },
                                    "start": 1471,
                                    "end": 1480
                                  },
                                  "start": 1469,
                                  "end": 1480
                                },
                                "start": 1346,
                                "end": 1481
                              }
                            ],
                            "start": 1075,
                            "end": 1495
                          },
                          "start": 1073,
                          "end": 1495
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1070,
                        "end": 1496
                      }
                    ],
                    "start": 448,
                    "end": 1506
                  },
                  "declare": false,
                  "start": 436,
                  "end": 1506
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1526,
                    "end": 1527
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1536,
                        "end": 1537
                      },
                      "typeArguments": null,
                      "start": 1536,
                      "end": 1537
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1552,
                          "end": 1554
                        },
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
                                    "start": 1561,
                                    "end": 1562
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1561,
                                  "end": 1562
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1564,
                                    "end": 1565
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1564,
                                  "end": 1565
                                }
                              ],
                              "start": 1560,
                              "end": 1566
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
                                      "start": 1570,
                                      "end": 1571
                                    },
                                    "typeArguments": null,
                                    "start": 1570,
                                    "end": 1571
                                  },
                                  "start": 1568,
                                  "end": 1571
                                },
                                "start": 1567,
                                "end": 1571
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
                                    "start": 1576,
                                    "end": 1577
                                  },
                                  "typeArguments": null,
                                  "start": 1576,
                                  "end": 1577
                                },
                                "start": 1576,
                                "end": 1579
                              },
                              "start": 1573,
                              "end": 1579
                            },
                            "start": 1556,
                            "end": 1579
                          },
                          "start": 1554,
                          "end": 1579
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1552,
                        "end": 1580
                      }
                    ],
                    "start": 1538,
                    "end": 1701
                  },
                  "declare": false,
                  "start": 1516,
                  "end": 1701
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1721,
                    "end": 1723
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
                          "start": 1724,
                          "end": 1725
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1724,
                        "end": 1725
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1727,
                          "end": 1728
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1727,
                        "end": 1728
                      }
                    ],
                    "start": 1723,
                    "end": 1729
                  },
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1738,
                        "end": 1739
                      },
                      "typeArguments": null,
                      "start": 1738,
                      "end": 1739
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1754,
                          "end": 1756
                        },
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1766,
                                      "end": 1767
                                    },
                                    "typeArguments": null,
                                    "start": 1766,
                                    "end": 1767
                                  },
                                  "start": 1764,
                                  "end": 1767
                                },
                                "start": 1763,
                                "end": 1767
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
                                    "start": 1772,
                                    "end": 1773
                                  },
                                  "typeArguments": null,
                                  "start": 1772,
                                  "end": 1773
                                },
                                "start": 1772,
                                "end": 1775
                              },
                              "start": 1769,
                              "end": 1775
                            },
                            "start": 1758,
                            "end": 1775
                          },
                          "start": 1756,
                          "end": 1775
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1754,
                        "end": 1776
                      }
                    ],
                    "start": 1740,
                    "end": 1861
                  },
                  "declare": false,
                  "start": 1711,
                  "end": 1861
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1881,
                    "end": 1883
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1892,
                        "end": 1893
                      },
                      "typeArguments": null,
                      "start": 1892,
                      "end": 1893
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1977,
                          "end": 1979
                        },
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
                                    "start": 1986,
                                    "end": 1987
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1996,
                                      "end": 2000
                                    },
                                    "typeArguments": null,
                                    "start": 1996,
                                    "end": 2000
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1986,
                                  "end": 2000
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2002,
                                    "end": 2003
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2012,
                                      "end": 2019
                                    },
                                    "typeArguments": null,
                                    "start": 2012,
                                    "end": 2019
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2002,
                                  "end": 2019
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2021,
                                    "end": 2022
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2031,
                                      "end": 2039
                                    },
                                    "typeArguments": null,
                                    "start": 2031,
                                    "end": 2039
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2021,
                                  "end": 2039
                                }
                              ],
                              "start": 1985,
                              "end": 2040
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
                                              "start": 2050,
                                              "end": 2051
                                            },
                                            "typeArguments": null,
                                            "start": 2050,
                                            "end": 2051
                                          },
                                          "start": 2048,
                                          "end": 2051
                                        },
                                        "start": 2045,
                                        "end": 2051
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
                                          "start": 2056,
                                          "end": 2057
                                        },
                                        "typeArguments": null,
                                        "start": 2056,
                                        "end": 2057
                                      },
                                      "start": 2053,
                                      "end": 2057
                                    },
                                    "start": 2044,
                                    "end": 2057
                                  },
                                  "start": 2042,
                                  "end": 2057
                                },
                                "start": 2041,
                                "end": 2057
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
                                          "start": 2066,
                                          "end": 2067
                                        },
                                        "typeArguments": null,
                                        "start": 2066,
                                        "end": 2067
                                      },
                                      "start": 2064,
                                      "end": 2067
                                    },
                                    "start": 2063,
                                    "end": 2067
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
                                      "start": 2072,
                                      "end": 2073
                                    },
                                    "typeArguments": null,
                                    "start": 2072,
                                    "end": 2073
                                  },
                                  "start": 2069,
                                  "end": 2073
                                },
                                "start": 2062,
                                "end": 2073
                              },
                              "start": 2059,
                              "end": 2073
                            },
                            "start": 1981,
                            "end": 2073
                          },
                          "start": 1979,
                          "end": 2073
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1977,
                        "end": 2074
                      }
                    ],
                    "start": 1894,
                    "end": 2084
                  },
                  "declare": false,
                  "start": 1871,
                  "end": 2084
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2104,
                    "end": 2106
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2115,
                        "end": 2116
                      },
                      "typeArguments": null,
                      "start": 2115,
                      "end": 2116
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a8",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2131,
                          "end": 2133
                        },
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
                                    "start": 2140,
                                    "end": 2141
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2150,
                                      "end": 2154
                                    },
                                    "typeArguments": null,
                                    "start": 2150,
                                    "end": 2154
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2140,
                                  "end": 2154
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2156,
                                    "end": 2157
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2166,
                                      "end": 2173
                                    },
                                    "typeArguments": null,
                                    "start": 2166,
                                    "end": 2173
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2156,
                                  "end": 2173
                                }
                              ],
                              "start": 2139,
                              "end": 2174
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
                                              "start": 2184,
                                              "end": 2185
                                            },
                                            "typeArguments": null,
                                            "start": 2184,
                                            "end": 2185
                                          },
                                          "start": 2182,
                                          "end": 2185
                                        },
                                        "start": 2179,
                                        "end": 2185
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
                                          "start": 2190,
                                          "end": 2191
                                        },
                                        "typeArguments": null,
                                        "start": 2190,
                                        "end": 2191
                                      },
                                      "start": 2187,
                                      "end": 2191
                                    },
                                    "start": 2178,
                                    "end": 2191
                                  },
                                  "start": 2176,
                                  "end": 2191
                                },
                                "start": 2175,
                                "end": 2191
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
                                                  "start": 2205,
                                                  "end": 2208
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 2210,
                                                    "end": 2216
                                                  },
                                                  "start": 2208,
                                                  "end": 2216
                                                },
                                                "accessibility": null,
                                                "static": false,
                                                "start": 2205,
                                                "end": 2217
                                              }
                                            ],
                                            "start": 2203,
                                            "end": 2219
                                          },
                                          "start": 2201,
                                          "end": 2219
                                        },
                                        "start": 2197,
                                        "end": 2219
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
                                          "start": 2224,
                                          "end": 2225
                                        },
                                        "typeArguments": null,
                                        "start": 2224,
                                        "end": 2225
                                      },
                                      "start": 2221,
                                      "end": 2225
                                    },
                                    "start": 2196,
                                    "end": 2225
                                  },
                                  "start": 2194,
                                  "end": 2225
                                },
                                "start": 2193,
                                "end": 2225
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
                                          "start": 2234,
                                          "end": 2235
                                        },
                                        "typeArguments": null,
                                        "start": 2234,
                                        "end": 2235
                                      },
                                      "start": 2232,
                                      "end": 2235
                                    },
                                    "start": 2231,
                                    "end": 2235
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
                                      "start": 2240,
                                      "end": 2241
                                    },
                                    "typeArguments": null,
                                    "start": 2240,
                                    "end": 2241
                                  },
                                  "start": 2237,
                                  "end": 2241
                                },
                                "start": 2230,
                                "end": 2241
                              },
                              "start": 2227,
                              "end": 2241
                            },
                            "start": 2135,
                            "end": 2241
                          },
                          "start": 2133,
                          "end": 2241
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2131,
                        "end": 2242
                      }
                    ],
                    "start": 2117,
                    "end": 2276
                  },
                  "declare": false,
                  "start": 2094,
                  "end": 2276
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2296,
                    "end": 2299
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2308,
                        "end": 2309
                      },
                      "typeArguments": null,
                      "start": 2308,
                      "end": 2309
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a10",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2324,
                          "end": 2327
                        },
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
                                    "start": 2334,
                                    "end": 2335
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2344,
                                      "end": 2351
                                    },
                                    "typeArguments": null,
                                    "start": 2344,
                                    "end": 2351
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2334,
                                  "end": 2351
                                }
                              ],
                              "start": 2333,
                              "end": 2352
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
                                  "start": 2356,
                                  "end": 2357
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
                                        "start": 2359,
                                        "end": 2360
                                      },
                                      "typeArguments": null,
                                      "start": 2359,
                                      "end": 2360
                                    },
                                    "start": 2359,
                                    "end": 2362
                                  },
                                  "start": 2357,
                                  "end": 2362
                                },
                                "value": null,
                                "start": 2353,
                                "end": 2362
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
                                  "start": 2367,
                                  "end": 2368
                                },
                                "typeArguments": null,
                                "start": 2367,
                                "end": 2368
                              },
                              "start": 2364,
                              "end": 2368
                            },
                            "start": 2329,
                            "end": 2368
                          },
                          "start": 2327,
                          "end": 2368
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2324,
                        "end": 2369
                      }
                    ],
                    "start": 2310,
                    "end": 2462
                  },
                  "declare": false,
                  "start": 2286,
                  "end": 2462
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2482,
                    "end": 2485
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2494,
                        "end": 2495
                      },
                      "typeArguments": null,
                      "start": 2494,
                      "end": 2495
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a11",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2510,
                          "end": 2513
                        },
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
                                    "start": 2520,
                                    "end": 2521
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2530,
                                      "end": 2537
                                    },
                                    "typeArguments": null,
                                    "start": 2530,
                                    "end": 2537
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2520,
                                  "end": 2537
                                }
                              ],
                              "start": 2519,
                              "end": 2538
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
                                      "start": 2542,
                                      "end": 2543
                                    },
                                    "typeArguments": null,
                                    "start": 2542,
                                    "end": 2543
                                  },
                                  "start": 2540,
                                  "end": 2543
                                },
                                "start": 2539,
                                "end": 2543
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
                                      "start": 2548,
                                      "end": 2549
                                    },
                                    "typeArguments": null,
                                    "start": 2548,
                                    "end": 2549
                                  },
                                  "start": 2546,
                                  "end": 2549
                                },
                                "start": 2545,
                                "end": 2549
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
                                  "start": 2554,
                                  "end": 2555
                                },
                                "typeArguments": null,
                                "start": 2554,
                                "end": 2555
                              },
                              "start": 2551,
                              "end": 2555
                            },
                            "start": 2515,
                            "end": 2555
                          },
                          "start": 2513,
                          "end": 2555
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2510,
                        "end": 2556
                      }
                    ],
                    "start": 2496,
                    "end": 2674
                  },
                  "declare": false,
                  "start": 2472,
                  "end": 2674
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I4E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2694,
                    "end": 2697
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2706,
                        "end": 2707
                      },
                      "typeArguments": null,
                      "start": 2706,
                      "end": 2707
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a12",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2722,
                          "end": 2725
                        },
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
                                    "start": 2732,
                                    "end": 2733
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2742,
                                      "end": 2747
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
                                            "start": 2748,
                                            "end": 2756
                                          },
                                          "typeArguments": null,
                                          "start": 2748,
                                          "end": 2756
                                        }
                                      ],
                                      "start": 2747,
                                      "end": 2757
                                    },
                                    "start": 2742,
                                    "end": 2757
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2732,
                                  "end": 2757
                                }
                              ],
                              "start": 2731,
                              "end": 2758
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
                                      "start": 2762,
                                      "end": 2767
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
                                            "start": 2768,
                                            "end": 2772
                                          },
                                          "typeArguments": null,
                                          "start": 2768,
                                          "end": 2772
                                        }
                                      ],
                                      "start": 2767,
                                      "end": 2773
                                    },
                                    "start": 2762,
                                    "end": 2773
                                  },
                                  "start": 2760,
                                  "end": 2773
                                },
                                "start": 2759,
                                "end": 2773
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
                                      "start": 2778,
                                      "end": 2783
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
                                            "start": 2784,
                                            "end": 2788
                                          },
                                          "typeArguments": null,
                                          "start": 2784,
                                          "end": 2788
                                        }
                                      ],
                                      "start": 2783,
                                      "end": 2789
                                    },
                                    "start": 2778,
                                    "end": 2789
                                  },
                                  "start": 2776,
                                  "end": 2789
                                },
                                "start": 2775,
                                "end": 2789
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
                                  "start": 2794,
                                  "end": 2795
                                },
                                "typeArguments": null,
                                "start": 2794,
                                "end": 2795
                              },
                              "start": 2791,
                              "end": 2795
                            },
                            "start": 2727,
                            "end": 2795
                          },
                          "start": 2725,
                          "end": 2795
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2722,
                        "end": 2796
                      }
                    ],
                    "start": 2708,
                    "end": 2865
                  },
                  "declare": false,
                  "start": 2684,
                  "end": 2865
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2885,
                    "end": 2887
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2896,
                        "end": 2897
                      },
                      "typeArguments": null,
                      "start": 2896,
                      "end": 2897
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a15",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2912,
                          "end": 2915
                        },
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
                                    "start": 2922,
                                    "end": 2923
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2922,
                                  "end": 2923
                                }
                              ],
                              "start": 2921,
                              "end": 2924
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
                                          "start": 2930,
                                          "end": 2931
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
                                              "start": 2933,
                                              "end": 2934
                                            },
                                            "typeArguments": null,
                                            "start": 2933,
                                            "end": 2934
                                          },
                                          "start": 2931,
                                          "end": 2934
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2930,
                                        "end": 2935
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
                                          "start": 2936,
                                          "end": 2937
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
                                              "start": 2939,
                                              "end": 2940
                                            },
                                            "typeArguments": null,
                                            "start": 2939,
                                            "end": 2940
                                          },
                                          "start": 2937,
                                          "end": 2940
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2936,
                                        "end": 2940
                                      }
                                    ],
                                    "start": 2928,
                                    "end": 2942
                                  },
                                  "start": 2926,
                                  "end": 2942
                                },
                                "start": 2925,
                                "end": 2942
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
                                  "start": 2947,
                                  "end": 2948
                                },
                                "typeArguments": null,
                                "start": 2947,
                                "end": 2948
                              },
                              "start": 2944,
                              "end": 2948
                            },
                            "start": 2917,
                            "end": 2948
                          },
                          "start": 2915,
                          "end": 2948
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2912,
                        "end": 2949
                      }
                    ],
                    "start": 2898,
                    "end": 3015
                  },
                  "declare": false,
                  "start": 2875,
                  "end": 3015
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3035,
                    "end": 3037
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3046,
                        "end": 3047
                      },
                      "typeArguments": null,
                      "start": 3046,
                      "end": 3047
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a15",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3062,
                          "end": 3065
                        },
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
                                    "start": 3072,
                                    "end": 3073
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3082,
                                      "end": 3086
                                    },
                                    "typeArguments": null,
                                    "start": 3082,
                                    "end": 3086
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3072,
                                  "end": 3086
                                }
                              ],
                              "start": 3071,
                              "end": 3087
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
                                          "start": 3093,
                                          "end": 3094
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
                                              "start": 3096,
                                              "end": 3097
                                            },
                                            "typeArguments": null,
                                            "start": 3096,
                                            "end": 3097
                                          },
                                          "start": 3094,
                                          "end": 3097
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3093,
                                        "end": 3098
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
                                          "start": 3099,
                                          "end": 3100
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
                                              "start": 3102,
                                              "end": 3103
                                            },
                                            "typeArguments": null,
                                            "start": 3102,
                                            "end": 3103
                                          },
                                          "start": 3100,
                                          "end": 3103
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 3099,
                                        "end": 3103
                                      }
                                    ],
                                    "start": 3091,
                                    "end": 3105
                                  },
                                  "start": 3089,
                                  "end": 3105
                                },
                                "start": 3088,
                                "end": 3105
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3110,
                                "end": 3116
                              },
                              "start": 3107,
                              "end": 3116
                            },
                            "start": 3067,
                            "end": 3116
                          },
                          "start": 3065,
                          "end": 3116
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3062,
                        "end": 3117
                      }
                    ],
                    "start": 3048,
                    "end": 3203
                  },
                  "declare": false,
                  "start": 3025,
                  "end": 3203
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3223,
                    "end": 3225
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3234,
                        "end": 3235
                      },
                      "typeArguments": null,
                      "start": 3234,
                      "end": 3235
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a16",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3409,
                          "end": 3412
                        },
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
                                    "start": 3419,
                                    "end": 3420
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3419,
                                  "end": 3420
                                }
                              ],
                              "start": 3418,
                              "end": 3421
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
                                    "type": "TSConstructorType",
                                    "abstract": false,
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
                                              "start": 3433,
                                              "end": 3434
                                            },
                                            "typeArguments": null,
                                            "start": 3433,
                                            "end": 3434
                                          },
                                          "start": 3431,
                                          "end": 3434
                                        },
                                        "start": 3430,
                                        "end": 3434
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
                                          "start": 3439,
                                          "end": 3440
                                        },
                                        "typeArguments": null,
                                        "start": 3439,
                                        "end": 3440
                                      },
                                      "start": 3436,
                                      "end": 3440
                                    },
                                    "start": 3425,
                                    "end": 3440
                                  },
                                  "start": 3423,
                                  "end": 3440
                                },
                                "start": 3422,
                                "end": 3440
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
                                    "start": 3445,
                                    "end": 3446
                                  },
                                  "typeArguments": null,
                                  "start": 3445,
                                  "end": 3446
                                },
                                "start": 3445,
                                "end": 3448
                              },
                              "start": 3442,
                              "end": 3448
                            },
                            "start": 3414,
                            "end": 3448
                          },
                          "start": 3412,
                          "end": 3448
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3409,
                        "end": 3449
                      }
                    ],
                    "start": 3236,
                    "end": 3459
                  },
                  "declare": false,
                  "start": 3213,
                  "end": 3459
                }
              ],
              "start": 372,
              "end": 3465
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 327,
            "end": 3465
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3481,
              "end": 3512
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3581,
                    "end": 3582
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
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3597,
                          "end": 3599
                        },
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
                                    "start": 3606,
                                    "end": 3607
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3606,
                                  "end": 3607
                                }
                              ],
                              "start": 3605,
                              "end": 3608
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
                                      "start": 3612,
                                      "end": 3613
                                    },
                                    "typeArguments": null,
                                    "start": 3612,
                                    "end": 3613
                                  },
                                  "start": 3610,
                                  "end": 3613
                                },
                                "start": 3609,
                                "end": 3613
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
                                    "start": 3618,
                                    "end": 3619
                                  },
                                  "typeArguments": null,
                                  "start": 3618,
                                  "end": 3619
                                },
                                "start": 3618,
                                "end": 3621
                              },
                              "start": 3615,
                              "end": 3621
                            },
                            "start": 3601,
                            "end": 3621
                          },
                          "start": 3599,
                          "end": 3621
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3597,
                        "end": 3622
                      }
                    ],
                    "start": 3583,
                    "end": 3632
                  },
                  "declare": false,
                  "start": 3571,
                  "end": 3632
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3652,
                    "end": 3654
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3663,
                        "end": 3664
                      },
                      "typeArguments": null,
                      "start": 3663,
                      "end": 3664
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3679,
                          "end": 3681
                        },
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
                                    "start": 3688,
                                    "end": 3689
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3688,
                                  "end": 3689
                                }
                              ],
                              "start": 3687,
                              "end": 3690
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
                                      "start": 3694,
                                      "end": 3695
                                    },
                                    "typeArguments": null,
                                    "start": 3694,
                                    "end": 3695
                                  },
                                  "start": 3692,
                                  "end": 3695
                                },
                                "start": 3691,
                                "end": 3695
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3700,
                                  "end": 3706
                                },
                                "start": 3700,
                                "end": 3708
                              },
                              "start": 3697,
                              "end": 3708
                            },
                            "start": 3683,
                            "end": 3708
                          },
                          "start": 3681,
                          "end": 3708
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3679,
                        "end": 3709
                      }
                    ],
                    "start": 3665,
                    "end": 3728
                  },
                  "declare": false,
                  "start": 3642,
                  "end": 3728
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3796,
                    "end": 3797
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
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3812,
                          "end": 3814
                        },
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
                                    "start": 3821,
                                    "end": 3822
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3821,
                                  "end": 3822
                                }
                              ],
                              "start": 3820,
                              "end": 3823
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
                                      "start": 3827,
                                      "end": 3828
                                    },
                                    "typeArguments": null,
                                    "start": 3827,
                                    "end": 3828
                                  },
                                  "start": 3825,
                                  "end": 3828
                                },
                                "start": 3824,
                                "end": 3828
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3833,
                                  "end": 3839
                                },
                                "start": 3833,
                                "end": 3841
                              },
                              "start": 3830,
                              "end": 3841
                            },
                            "start": 3816,
                            "end": 3841
                          },
                          "start": 3814,
                          "end": 3841
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3812,
                        "end": 3842
                      }
                    ],
                    "start": 3798,
                    "end": 3852
                  },
                  "declare": false,
                  "start": 3786,
                  "end": 3852
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3872,
                    "end": 3874
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3883,
                        "end": 3884
                      },
                      "typeArguments": null,
                      "start": 3883,
                      "end": 3884
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3899,
                          "end": 3901
                        },
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
                                    "start": 3908,
                                    "end": 3909
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3908,
                                  "end": 3909
                                }
                              ],
                              "start": 3907,
                              "end": 3910
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
                                      "start": 3914,
                                      "end": 3915
                                    },
                                    "typeArguments": null,
                                    "start": 3914,
                                    "end": 3915
                                  },
                                  "start": 3912,
                                  "end": 3915
                                },
                                "start": 3911,
                                "end": 3915
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
                                    "start": 3920,
                                    "end": 3921
                                  },
                                  "typeArguments": null,
                                  "start": 3920,
                                  "end": 3921
                                },
                                "start": 3920,
                                "end": 3923
                              },
                              "start": 3917,
                              "end": 3923
                            },
                            "start": 3903,
                            "end": 3923
                          },
                          "start": 3901,
                          "end": 3923
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3899,
                        "end": 3924
                      }
                    ],
                    "start": 3885,
                    "end": 3943
                  },
                  "declare": false,
                  "start": 3862,
                  "end": 3943
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4028,
                    "end": 4029
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
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a14",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4044,
                          "end": 4047
                        },
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
                                        "start": 4072,
                                        "end": 4073
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4082,
                                          "end": 4089
                                        },
                                        "typeArguments": null,
                                        "start": 4082,
                                        "end": 4089
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 4072,
                                      "end": 4089
                                    }
                                  ],
                                  "start": 4071,
                                  "end": 4090
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
                                          "start": 4094,
                                          "end": 4095
                                        },
                                        "typeArguments": null,
                                        "start": 4094,
                                        "end": 4095
                                      },
                                      "start": 4092,
                                      "end": 4095
                                    },
                                    "start": 4091,
                                    "end": 4095
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 4098,
                                      "end": 4104
                                    },
                                    "start": 4098,
                                    "end": 4106
                                  },
                                  "start": 4096,
                                  "end": 4106
                                },
                                "start": 4067,
                                "end": 4107
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
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4129,
                                        "end": 4130
                                      },
                                      "constraint": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4139,
                                          "end": 4143
                                        },
                                        "typeArguments": null,
                                        "start": 4139,
                                        "end": 4143
                                      },
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 4129,
                                      "end": 4143
                                    }
                                  ],
                                  "start": 4128,
                                  "end": 4144
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
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4148,
                                          "end": 4149
                                        },
                                        "typeArguments": null,
                                        "start": 4148,
                                        "end": 4149
                                      },
                                      "start": 4146,
                                      "end": 4149
                                    },
                                    "start": 4145,
                                    "end": 4149
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 4152,
                                      "end": 4158
                                    },
                                    "start": 4152,
                                    "end": 4160
                                  },
                                  "start": 4150,
                                  "end": 4160
                                },
                                "start": 4124,
                                "end": 4161
                              }
                            ],
                            "start": 4049,
                            "end": 4175
                          },
                          "start": 4047,
                          "end": 4175
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4044,
                        "end": 4176
                      }
                    ],
                    "start": 4030,
                    "end": 4186
                  },
                  "declare": false,
                  "start": 4018,
                  "end": 4186
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4206,
                    "end": 4208
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4217,
                        "end": 4218
                      },
                      "typeArguments": null,
                      "start": 4217,
                      "end": 4218
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a14",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4233,
                          "end": 4236
                        },
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
                                    "start": 4243,
                                    "end": 4244
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4253,
                                      "end": 4257
                                    },
                                    "typeArguments": null,
                                    "start": 4253,
                                    "end": 4257
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 4243,
                                  "end": 4257
                                }
                              ],
                              "start": 4242,
                              "end": 4258
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
                                      "start": 4262,
                                      "end": 4263
                                    },
                                    "typeArguments": null,
                                    "start": 4262,
                                    "end": 4263
                                  },
                                  "start": 4260,
                                  "end": 4263
                                },
                                "start": 4259,
                                "end": 4263
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 4268,
                                  "end": 4274
                                },
                                "start": 4268,
                                "end": 4276
                              },
                              "start": 4265,
                              "end": 4276
                            },
                            "start": 4238,
                            "end": 4276
                          },
                          "start": 4236,
                          "end": 4276
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 4233,
                        "end": 4277
                      }
                    ],
                    "start": 4219,
                    "end": 4287
                  },
                  "declare": false,
                  "start": 4196,
                  "end": 4287
                }
              ],
              "start": 3513,
              "end": 4293
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 3471,
            "end": 4293
          }
        ],
        "start": 134,
        "end": 4295
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 117,
      "end": 4295
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 4295
}
```
