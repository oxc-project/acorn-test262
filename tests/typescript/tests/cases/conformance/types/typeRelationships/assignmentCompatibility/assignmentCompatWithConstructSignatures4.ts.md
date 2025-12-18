__ESTREE_TEST__:AST:
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
        "start": 78,
        "end": 84
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
              "start": 97,
              "end": 101
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
                    "start": 104,
                    "end": 107
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 109,
                      "end": 115
                    },
                    "start": 107,
                    "end": 115
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
                  "start": 104,
                  "end": 116
                }
              ],
              "start": 102,
              "end": 118
            },
            "abstract": false,
            "declare": false,
            "start": 91,
            "end": 118
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
              "start": 129,
              "end": 136
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 149
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
                    "start": 152,
                    "end": 155
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 157,
                      "end": 163
                    },
                    "start": 155,
                    "end": 163
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
                  "start": 152,
                  "end": 164
                }
              ],
              "start": 150,
              "end": 166
            },
            "abstract": false,
            "declare": false,
            "start": 123,
            "end": 166
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
              "start": 177,
              "end": 185
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 201
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
                    "start": 204,
                    "end": 207
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 209,
                      "end": 215
                    },
                    "start": 207,
                    "end": 215
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
                  "start": 204,
                  "end": 216
                }
              ],
              "start": 202,
              "end": 218
            },
            "abstract": false,
            "declare": false,
            "start": 171,
            "end": 218
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
              "start": 229,
              "end": 241
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 254
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
                    "start": 257,
                    "end": 261
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 263,
                      "end": 269
                    },
                    "start": 261,
                    "end": 269
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
                  "start": 257,
                  "end": 270
                }
              ],
              "start": 255,
              "end": 272
            },
            "abstract": false,
            "declare": false,
            "start": 223,
            "end": 272
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithNonGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 322
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
                                    "start": 405,
                                    "end": 411
                                  },
                                  "start": 403,
                                  "end": 411
                                },
                                "start": 402,
                                "end": 411
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 416,
                                  "end": 422
                                },
                                "start": 416,
                                "end": 424
                              },
                              "start": 413,
                              "end": 424
                            },
                            "start": 397,
                            "end": 424
                          },
                          "start": 395,
                          "end": 424
                        },
                        "start": 393,
                        "end": 424
                      },
                      "init": null,
                      "definite": false,
                      "start": 393,
                      "end": 424
                    }
                  ],
                  "declare": false,
                  "start": 389,
                  "end": 425
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
                                              "start": 456,
                                              "end": 460
                                            },
                                            "typeArguments": null,
                                            "start": 456,
                                            "end": 460
                                          },
                                          "start": 454,
                                          "end": 460
                                        },
                                        "start": 451,
                                        "end": 460
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
                                          "start": 465,
                                          "end": 472
                                        },
                                        "typeArguments": null,
                                        "start": 465,
                                        "end": 472
                                      },
                                      "start": 462,
                                      "end": 472
                                    },
                                    "start": 450,
                                    "end": 472
                                  },
                                  "start": 448,
                                  "end": 472
                                },
                                "start": 447,
                                "end": 472
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
                                          "start": 481,
                                          "end": 485
                                        },
                                        "typeArguments": null,
                                        "start": 481,
                                        "end": 485
                                      },
                                      "start": 479,
                                      "end": 485
                                    },
                                    "start": 478,
                                    "end": 485
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
                                      "start": 490,
                                      "end": 498
                                    },
                                    "typeArguments": null,
                                    "start": 490,
                                    "end": 498
                                  },
                                  "start": 487,
                                  "end": 498
                                },
                                "start": 477,
                                "end": 498
                              },
                              "start": 474,
                              "end": 498
                            },
                            "start": 442,
                            "end": 498
                          },
                          "start": 440,
                          "end": 498
                        },
                        "start": 438,
                        "end": 498
                      },
                      "init": null,
                      "definite": false,
                      "start": 438,
                      "end": 498
                    }
                  ],
                  "declare": false,
                  "start": 434,
                  "end": 499
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
                                              "start": 530,
                                              "end": 534
                                            },
                                            "typeArguments": null,
                                            "start": 530,
                                            "end": 534
                                          },
                                          "start": 528,
                                          "end": 534
                                        },
                                        "start": 525,
                                        "end": 534
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
                                          "start": 539,
                                          "end": 546
                                        },
                                        "typeArguments": null,
                                        "start": 539,
                                        "end": 546
                                      },
                                      "start": 536,
                                      "end": 546
                                    },
                                    "start": 524,
                                    "end": 546
                                  },
                                  "start": 522,
                                  "end": 546
                                },
                                "start": 521,
                                "end": 546
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
                                              "start": 558,
                                              "end": 562
                                            },
                                            "typeArguments": null,
                                            "start": 558,
                                            "end": 562
                                          },
                                          "start": 556,
                                          "end": 562
                                        },
                                        "start": 552,
                                        "end": 562
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
                                          "start": 567,
                                          "end": 574
                                        },
                                        "typeArguments": null,
                                        "start": 567,
                                        "end": 574
                                      },
                                      "start": 564,
                                      "end": 574
                                    },
                                    "start": 551,
                                    "end": 574
                                  },
                                  "start": 549,
                                  "end": 574
                                },
                                "start": 548,
                                "end": 574
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
                                          "start": 583,
                                          "end": 587
                                        },
                                        "typeArguments": null,
                                        "start": 583,
                                        "end": 587
                                      },
                                      "start": 581,
                                      "end": 587
                                    },
                                    "start": 580,
                                    "end": 587
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
                                      "start": 592,
                                      "end": 599
                                    },
                                    "typeArguments": null,
                                    "start": 592,
                                    "end": 599
                                  },
                                  "start": 589,
                                  "end": 599
                                },
                                "start": 579,
                                "end": 599
                              },
                              "start": 576,
                              "end": 599
                            },
                            "start": 516,
                            "end": 599
                          },
                          "start": 514,
                          "end": 599
                        },
                        "start": 512,
                        "end": 599
                      },
                      "init": null,
                      "definite": false,
                      "start": 512,
                      "end": 599
                    }
                  ],
                  "declare": false,
                  "start": 508,
                  "end": 600
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
                                  "start": 626,
                                  "end": 627
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
                                        "start": 629,
                                        "end": 633
                                      },
                                      "typeArguments": null,
                                      "start": 629,
                                      "end": 633
                                    },
                                    "start": 629,
                                    "end": 635
                                  },
                                  "start": 627,
                                  "end": 635
                                },
                                "value": null,
                                "start": 623,
                                "end": 635
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
                                  "start": 640,
                                  "end": 644
                                },
                                "typeArguments": null,
                                "start": 640,
                                "end": 644
                              },
                              "start": 637,
                              "end": 644
                            },
                            "start": 618,
                            "end": 644
                          },
                          "start": 616,
                          "end": 644
                        },
                        "start": 613,
                        "end": 644
                      },
                      "init": null,
                      "definite": false,
                      "start": 613,
                      "end": 644
                    }
                  ],
                  "declare": false,
                  "start": 609,
                  "end": 645
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
                                          "start": 673,
                                          "end": 676
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 678,
                                            "end": 684
                                          },
                                          "start": 676,
                                          "end": 684
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 673,
                                        "end": 684
                                      }
                                    ],
                                    "start": 671,
                                    "end": 686
                                  },
                                  "start": 669,
                                  "end": 686
                                },
                                "start": 668,
                                "end": 686
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
                                          "start": 693,
                                          "end": 696
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 698,
                                            "end": 704
                                          },
                                          "start": 696,
                                          "end": 704
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 693,
                                        "end": 705
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
                                          "start": 706,
                                          "end": 709
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 711,
                                            "end": 717
                                          },
                                          "start": 709,
                                          "end": 717
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 706,
                                        "end": 717
                                      }
                                    ],
                                    "start": 691,
                                    "end": 719
                                  },
                                  "start": 689,
                                  "end": 719
                                },
                                "start": 688,
                                "end": 719
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
                                  "start": 724,
                                  "end": 728
                                },
                                "typeArguments": null,
                                "start": 724,
                                "end": 728
                              },
                              "start": 721,
                              "end": 728
                            },
                            "start": 663,
                            "end": 728
                          },
                          "start": 661,
                          "end": 728
                        },
                        "start": 658,
                        "end": 728
                      },
                      "init": null,
                      "definite": false,
                      "start": 658,
                      "end": 728
                    }
                  ],
                  "declare": false,
                  "start": 654,
                  "end": 729
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
                                      "start": 755,
                                      "end": 760
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
                                            "start": 761,
                                            "end": 765
                                          },
                                          "typeArguments": null,
                                          "start": 761,
                                          "end": 765
                                        }
                                      ],
                                      "start": 760,
                                      "end": 766
                                    },
                                    "start": 755,
                                    "end": 766
                                  },
                                  "start": 753,
                                  "end": 766
                                },
                                "start": 752,
                                "end": 766
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
                                      "start": 771,
                                      "end": 776
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
                                            "start": 777,
                                            "end": 785
                                          },
                                          "typeArguments": null,
                                          "start": 777,
                                          "end": 785
                                        }
                                      ],
                                      "start": 776,
                                      "end": 786
                                    },
                                    "start": 771,
                                    "end": 786
                                  },
                                  "start": 769,
                                  "end": 786
                                },
                                "start": 768,
                                "end": 786
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
                                  "start": 791,
                                  "end": 796
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
                                        "start": 797,
                                        "end": 804
                                      },
                                      "typeArguments": null,
                                      "start": 797,
                                      "end": 804
                                    }
                                  ],
                                  "start": 796,
                                  "end": 805
                                },
                                "start": 791,
                                "end": 805
                              },
                              "start": 788,
                              "end": 805
                            },
                            "start": 747,
                            "end": 805
                          },
                          "start": 745,
                          "end": 805
                        },
                        "start": 742,
                        "end": 805
                      },
                      "init": null,
                      "definite": false,
                      "start": 742,
                      "end": 805
                    }
                  ],
                  "declare": false,
                  "start": 738,
                  "end": 806
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
                                        "start": 850,
                                        "end": 856
                                      },
                                      "start": 848,
                                      "end": 856
                                    },
                                    "start": 847,
                                    "end": 856
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 859,
                                      "end": 865
                                    },
                                    "start": 859,
                                    "end": 867
                                  },
                                  "start": 857,
                                  "end": 867
                                },
                                "start": 842,
                                "end": 868
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
                                        "start": 893,
                                        "end": 899
                                      },
                                      "start": 891,
                                      "end": 899
                                    },
                                    "start": 890,
                                    "end": 899
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 902,
                                      "end": 908
                                    },
                                    "start": 902,
                                    "end": 910
                                  },
                                  "start": 900,
                                  "end": 910
                                },
                                "start": 885,
                                "end": 911
                              }
                            ],
                            "start": 824,
                            "end": 925
                          },
                          "start": 822,
                          "end": 925
                        },
                        "start": 819,
                        "end": 925
                      },
                      "init": null,
                      "definite": false,
                      "start": 819,
                      "end": 925
                    }
                  ],
                  "declare": false,
                  "start": 815,
                  "end": 926
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
                                          "start": 954,
                                          "end": 955
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 957,
                                            "end": 963
                                          },
                                          "start": 955,
                                          "end": 963
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 954,
                                        "end": 964
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
                                          "start": 965,
                                          "end": 966
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 968,
                                            "end": 974
                                          },
                                          "start": 966,
                                          "end": 974
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 965,
                                        "end": 974
                                      }
                                    ],
                                    "start": 952,
                                    "end": 976
                                  },
                                  "start": 950,
                                  "end": 976
                                },
                                "start": 949,
                                "end": 976
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 981,
                                "end": 987
                              },
                              "start": 978,
                              "end": 987
                            },
                            "start": 944,
                            "end": 987
                          },
                          "start": 942,
                          "end": 987
                        },
                        "start": 939,
                        "end": 987
                      },
                      "init": null,
                      "definite": false,
                      "start": 939,
                      "end": 987
                    }
                  ],
                  "declare": false,
                  "start": 935,
                  "end": 988
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
                                                    "start": 1062,
                                                    "end": 1068
                                                  },
                                                  "start": 1060,
                                                  "end": 1068
                                                },
                                                "start": 1059,
                                                "end": 1068
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1071,
                                                "end": 1077
                                              },
                                              "start": 1069,
                                              "end": 1077
                                            },
                                            "start": 1054,
                                            "end": 1078
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
                                                    "start": 1108,
                                                    "end": 1114
                                                  },
                                                  "start": 1106,
                                                  "end": 1114
                                                },
                                                "start": 1104,
                                                "end": 1114
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1117,
                                                "end": 1123
                                              },
                                              "start": 1115,
                                              "end": 1123
                                            },
                                            "start": 1099,
                                            "end": 1124
                                          }
                                        ],
                                        "start": 1032,
                                        "end": 1142
                                      },
                                      "start": 1030,
                                      "end": 1142
                                    },
                                    "start": 1029,
                                    "end": 1142
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1145,
                                      "end": 1151
                                    },
                                    "start": 1145,
                                    "end": 1153
                                  },
                                  "start": 1143,
                                  "end": 1153
                                },
                                "start": 1024,
                                "end": 1154
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
                                                    "start": 1209,
                                                    "end": 1216
                                                  },
                                                  "start": 1207,
                                                  "end": 1216
                                                },
                                                "start": 1206,
                                                "end": 1216
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1219,
                                                "end": 1226
                                              },
                                              "start": 1217,
                                              "end": 1226
                                            },
                                            "start": 1201,
                                            "end": 1227
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
                                                    "start": 1257,
                                                    "end": 1264
                                                  },
                                                  "start": 1255,
                                                  "end": 1264
                                                },
                                                "start": 1253,
                                                "end": 1264
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1267,
                                                "end": 1274
                                              },
                                              "start": 1265,
                                              "end": 1274
                                            },
                                            "start": 1248,
                                            "end": 1275
                                          }
                                        ],
                                        "start": 1179,
                                        "end": 1293
                                      },
                                      "start": 1177,
                                      "end": 1293
                                    },
                                    "start": 1176,
                                    "end": 1293
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1296,
                                      "end": 1303
                                    },
                                    "start": 1296,
                                    "end": 1305
                                  },
                                  "start": 1294,
                                  "end": 1305
                                },
                                "start": 1171,
                                "end": 1306
                              }
                            ],
                            "start": 1006,
                            "end": 1320
                          },
                          "start": 1004,
                          "end": 1320
                        },
                        "start": 1001,
                        "end": 1320
                      },
                      "init": null,
                      "definite": false,
                      "start": 1001,
                      "end": 1320
                    }
                  ],
                  "declare": false,
                  "start": 997,
                  "end": 1321
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
                                                    "start": 1392,
                                                    "end": 1393
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1402,
                                                      "end": 1409
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1402,
                                                    "end": 1409
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1392,
                                                  "end": 1409
                                                }
                                              ],
                                              "start": 1391,
                                              "end": 1410
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
                                                      "start": 1414,
                                                      "end": 1415
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1414,
                                                    "end": 1415
                                                  },
                                                  "start": 1412,
                                                  "end": 1415
                                                },
                                                "start": 1411,
                                                "end": 1415
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
                                                  "start": 1418,
                                                  "end": 1419
                                                },
                                                "typeArguments": null,
                                                "start": 1418,
                                                "end": 1419
                                              },
                                              "start": 1416,
                                              "end": 1419
                                            },
                                            "start": 1387,
                                            "end": 1420
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
                                                    "start": 1446,
                                                    "end": 1447
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1456,
                                                      "end": 1460
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1456,
                                                    "end": 1460
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1446,
                                                  "end": 1460
                                                }
                                              ],
                                              "start": 1445,
                                              "end": 1461
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
                                                      "start": 1465,
                                                      "end": 1466
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1465,
                                                    "end": 1466
                                                  },
                                                  "start": 1463,
                                                  "end": 1466
                                                },
                                                "start": 1462,
                                                "end": 1466
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
                                                  "start": 1469,
                                                  "end": 1470
                                                },
                                                "typeArguments": null,
                                                "start": 1469,
                                                "end": 1470
                                              },
                                              "start": 1467,
                                              "end": 1470
                                            },
                                            "start": 1441,
                                            "end": 1471
                                          }
                                        ],
                                        "start": 1365,
                                        "end": 1489
                                      },
                                      "start": 1363,
                                      "end": 1489
                                    },
                                    "start": 1362,
                                    "end": 1489
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1492,
                                      "end": 1495
                                    },
                                    "start": 1492,
                                    "end": 1497
                                  },
                                  "start": 1490,
                                  "end": 1497
                                },
                                "start": 1357,
                                "end": 1498
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
                                                    "start": 1550,
                                                    "end": 1551
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived2",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1560,
                                                      "end": 1568
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1560,
                                                    "end": 1568
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1550,
                                                  "end": 1568
                                                }
                                              ],
                                              "start": 1549,
                                              "end": 1569
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
                                                      "start": 1573,
                                                      "end": 1574
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1573,
                                                    "end": 1574
                                                  },
                                                  "start": 1571,
                                                  "end": 1574
                                                },
                                                "start": 1570,
                                                "end": 1574
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
                                                  "start": 1577,
                                                  "end": 1578
                                                },
                                                "typeArguments": null,
                                                "start": 1577,
                                                "end": 1578
                                              },
                                              "start": 1575,
                                              "end": 1578
                                            },
                                            "start": 1545,
                                            "end": 1579
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
                                                    "start": 1605,
                                                    "end": 1606
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1615,
                                                      "end": 1619
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1615,
                                                    "end": 1619
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1605,
                                                  "end": 1619
                                                }
                                              ],
                                              "start": 1604,
                                              "end": 1620
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
                                                      "start": 1624,
                                                      "end": 1625
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1624,
                                                    "end": 1625
                                                  },
                                                  "start": 1622,
                                                  "end": 1625
                                                },
                                                "start": 1621,
                                                "end": 1625
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
                                                  "start": 1628,
                                                  "end": 1629
                                                },
                                                "typeArguments": null,
                                                "start": 1628,
                                                "end": 1629
                                              },
                                              "start": 1626,
                                              "end": 1629
                                            },
                                            "start": 1600,
                                            "end": 1630
                                          }
                                        ],
                                        "start": 1523,
                                        "end": 1648
                                      },
                                      "start": 1521,
                                      "end": 1648
                                    },
                                    "start": 1520,
                                    "end": 1648
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1651,
                                      "end": 1654
                                    },
                                    "start": 1651,
                                    "end": 1656
                                  },
                                  "start": 1649,
                                  "end": 1656
                                },
                                "start": 1515,
                                "end": 1657
                              }
                            ],
                            "start": 1339,
                            "end": 1671
                          },
                          "start": 1337,
                          "end": 1671
                        },
                        "start": 1334,
                        "end": 1671
                      },
                      "init": null,
                      "definite": false,
                      "start": 1334,
                      "end": 1671
                    }
                  ],
                  "declare": false,
                  "start": 1330,
                  "end": 1672
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
                                    "start": 1695,
                                    "end": 1696
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1695,
                                  "end": 1696
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1698,
                                    "end": 1699
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1698,
                                  "end": 1699
                                }
                              ],
                              "start": 1694,
                              "end": 1700
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
                                      "start": 1704,
                                      "end": 1705
                                    },
                                    "typeArguments": null,
                                    "start": 1704,
                                    "end": 1705
                                  },
                                  "start": 1702,
                                  "end": 1705
                                },
                                "start": 1701,
                                "end": 1705
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
                                    "start": 1710,
                                    "end": 1711
                                  },
                                  "typeArguments": null,
                                  "start": 1710,
                                  "end": 1711
                                },
                                "start": 1710,
                                "end": 1713
                              },
                              "start": 1707,
                              "end": 1713
                            },
                            "start": 1690,
                            "end": 1713
                          },
                          "start": 1688,
                          "end": 1713
                        },
                        "start": 1686,
                        "end": 1713
                      },
                      "init": null,
                      "definite": false,
                      "start": 1686,
                      "end": 1713
                    }
                  ],
                  "declare": false,
                  "start": 1682,
                  "end": 1714
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
                      "start": 1724,
                      "end": 1726
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1729,
                      "end": 1731
                    },
                    "start": 1724,
                    "end": 1731
                  },
                  "directive": null,
                  "start": 1724,
                  "end": 1732
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
                      "start": 1747,
                      "end": 1749
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1752,
                      "end": 1754
                    },
                    "start": 1747,
                    "end": 1754
                  },
                  "directive": null,
                  "start": 1747,
                  "end": 1755
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
                                    "start": 1784,
                                    "end": 1785
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1794,
                                      "end": 1798
                                    },
                                    "typeArguments": null,
                                    "start": 1794,
                                    "end": 1798
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1784,
                                  "end": 1798
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1800,
                                    "end": 1801
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1810,
                                      "end": 1817
                                    },
                                    "typeArguments": null,
                                    "start": 1810,
                                    "end": 1817
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1800,
                                  "end": 1817
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1819,
                                    "end": 1820
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1829,
                                      "end": 1837
                                    },
                                    "typeArguments": null,
                                    "start": 1829,
                                    "end": 1837
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1819,
                                  "end": 1837
                                }
                              ],
                              "start": 1783,
                              "end": 1838
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
                                              "start": 1848,
                                              "end": 1849
                                            },
                                            "typeArguments": null,
                                            "start": 1848,
                                            "end": 1849
                                          },
                                          "start": 1846,
                                          "end": 1849
                                        },
                                        "start": 1843,
                                        "end": 1849
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
                                          "start": 1854,
                                          "end": 1855
                                        },
                                        "typeArguments": null,
                                        "start": 1854,
                                        "end": 1855
                                      },
                                      "start": 1851,
                                      "end": 1855
                                    },
                                    "start": 1842,
                                    "end": 1855
                                  },
                                  "start": 1840,
                                  "end": 1855
                                },
                                "start": 1839,
                                "end": 1855
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
                                          "start": 1864,
                                          "end": 1865
                                        },
                                        "typeArguments": null,
                                        "start": 1864,
                                        "end": 1865
                                      },
                                      "start": 1862,
                                      "end": 1865
                                    },
                                    "start": 1861,
                                    "end": 1865
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
                                      "start": 1870,
                                      "end": 1871
                                    },
                                    "typeArguments": null,
                                    "start": 1870,
                                    "end": 1871
                                  },
                                  "start": 1867,
                                  "end": 1871
                                },
                                "start": 1860,
                                "end": 1871
                              },
                              "start": 1857,
                              "end": 1871
                            },
                            "start": 1779,
                            "end": 1871
                          },
                          "start": 1777,
                          "end": 1871
                        },
                        "start": 1775,
                        "end": 1871
                      },
                      "init": null,
                      "definite": false,
                      "start": 1775,
                      "end": 1871
                    }
                  ],
                  "declare": false,
                  "start": 1771,
                  "end": 1872
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
                      "start": 1881,
                      "end": 1883
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1886,
                      "end": 1888
                    },
                    "start": 1881,
                    "end": 1888
                  },
                  "directive": null,
                  "start": 1881,
                  "end": 1889
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
                      "start": 1904,
                      "end": 1906
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1909,
                      "end": 1911
                    },
                    "start": 1904,
                    "end": 1911
                  },
                  "directive": null,
                  "start": 1904,
                  "end": 1912
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
                                    "start": 1941,
                                    "end": 1942
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1951,
                                      "end": 1955
                                    },
                                    "typeArguments": null,
                                    "start": 1951,
                                    "end": 1955
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1941,
                                  "end": 1955
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1957,
                                    "end": 1958
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1967,
                                      "end": 1974
                                    },
                                    "typeArguments": null,
                                    "start": 1967,
                                    "end": 1974
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1957,
                                  "end": 1974
                                }
                              ],
                              "start": 1940,
                              "end": 1975
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
                                              "start": 1985,
                                              "end": 1986
                                            },
                                            "typeArguments": null,
                                            "start": 1985,
                                            "end": 1986
                                          },
                                          "start": 1983,
                                          "end": 1986
                                        },
                                        "start": 1980,
                                        "end": 1986
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
                                          "start": 1991,
                                          "end": 1992
                                        },
                                        "typeArguments": null,
                                        "start": 1991,
                                        "end": 1992
                                      },
                                      "start": 1988,
                                      "end": 1992
                                    },
                                    "start": 1979,
                                    "end": 1992
                                  },
                                  "start": 1977,
                                  "end": 1992
                                },
                                "start": 1976,
                                "end": 1992
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
                                                  "start": 2006,
                                                  "end": 2009
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 2011,
                                                    "end": 2017
                                                  },
                                                  "start": 2009,
                                                  "end": 2017
                                                },
                                                "accessibility": null,
                                                "static": false,
                                                "start": 2006,
                                                "end": 2018
                                              }
                                            ],
                                            "start": 2004,
                                            "end": 2020
                                          },
                                          "start": 2002,
                                          "end": 2020
                                        },
                                        "start": 1998,
                                        "end": 2020
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
                                          "start": 2025,
                                          "end": 2026
                                        },
                                        "typeArguments": null,
                                        "start": 2025,
                                        "end": 2026
                                      },
                                      "start": 2022,
                                      "end": 2026
                                    },
                                    "start": 1997,
                                    "end": 2026
                                  },
                                  "start": 1995,
                                  "end": 2026
                                },
                                "start": 1994,
                                "end": 2026
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
                                          "start": 2035,
                                          "end": 2036
                                        },
                                        "typeArguments": null,
                                        "start": 2035,
                                        "end": 2036
                                      },
                                      "start": 2033,
                                      "end": 2036
                                    },
                                    "start": 2032,
                                    "end": 2036
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
                                      "start": 2041,
                                      "end": 2042
                                    },
                                    "typeArguments": null,
                                    "start": 2041,
                                    "end": 2042
                                  },
                                  "start": 2038,
                                  "end": 2042
                                },
                                "start": 2031,
                                "end": 2042
                              },
                              "start": 2028,
                              "end": 2042
                            },
                            "start": 1936,
                            "end": 2042
                          },
                          "start": 1934,
                          "end": 2042
                        },
                        "start": 1932,
                        "end": 2042
                      },
                      "init": null,
                      "definite": false,
                      "start": 1932,
                      "end": 2042
                    }
                  ],
                  "declare": false,
                  "start": 1928,
                  "end": 2043
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
                      "start": 2053,
                      "end": 2055
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2058,
                      "end": 2060
                    },
                    "start": 2053,
                    "end": 2060
                  },
                  "directive": null,
                  "start": 2053,
                  "end": 2061
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
                      "start": 2094,
                      "end": 2096
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2099,
                      "end": 2101
                    },
                    "start": 2094,
                    "end": 2101
                  },
                  "directive": null,
                  "start": 2094,
                  "end": 2102
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
                                    "start": 2144,
                                    "end": 2145
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2154,
                                      "end": 2161
                                    },
                                    "typeArguments": null,
                                    "start": 2154,
                                    "end": 2161
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2144,
                                  "end": 2161
                                }
                              ],
                              "start": 2143,
                              "end": 2162
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
                                  "start": 2166,
                                  "end": 2167
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
                                        "start": 2169,
                                        "end": 2170
                                      },
                                      "typeArguments": null,
                                      "start": 2169,
                                      "end": 2170
                                    },
                                    "start": 2169,
                                    "end": 2172
                                  },
                                  "start": 2167,
                                  "end": 2172
                                },
                                "value": null,
                                "start": 2163,
                                "end": 2172
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
                                  "start": 2177,
                                  "end": 2178
                                },
                                "typeArguments": null,
                                "start": 2177,
                                "end": 2178
                              },
                              "start": 2174,
                              "end": 2178
                            },
                            "start": 2139,
                            "end": 2178
                          },
                          "start": 2137,
                          "end": 2178
                        },
                        "start": 2134,
                        "end": 2178
                      },
                      "init": null,
                      "definite": false,
                      "start": 2134,
                      "end": 2178
                    }
                  ],
                  "declare": false,
                  "start": 2130,
                  "end": 2179
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
                      "start": 2189,
                      "end": 2192
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2195,
                      "end": 2198
                    },
                    "start": 2189,
                    "end": 2198
                  },
                  "directive": null,
                  "start": 2189,
                  "end": 2199
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
                      "start": 2214,
                      "end": 2217
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2220,
                      "end": 2223
                    },
                    "start": 2214,
                    "end": 2223
                  },
                  "directive": null,
                  "start": 2214,
                  "end": 2224
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
                                    "start": 2254,
                                    "end": 2255
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2264,
                                      "end": 2271
                                    },
                                    "typeArguments": null,
                                    "start": 2264,
                                    "end": 2271
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2254,
                                  "end": 2271
                                }
                              ],
                              "start": 2253,
                              "end": 2272
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
                                      "start": 2282,
                                      "end": 2283
                                    },
                                    "typeArguments": null,
                                    "start": 2282,
                                    "end": 2283
                                  },
                                  "start": 2280,
                                  "end": 2283
                                },
                                "start": 2279,
                                "end": 2283
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
                                  "start": 2288,
                                  "end": 2289
                                },
                                "typeArguments": null,
                                "start": 2288,
                                "end": 2289
                              },
                              "start": 2285,
                              "end": 2289
                            },
                            "start": 2249,
                            "end": 2289
                          },
                          "start": 2247,
                          "end": 2289
                        },
                        "start": 2244,
                        "end": 2289
                      },
                      "init": null,
                      "definite": false,
                      "start": 2244,
                      "end": 2289
                    }
                  ],
                  "declare": false,
                  "start": 2240,
                  "end": 2290
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
                      "start": 2300,
                      "end": 2303
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2306,
                      "end": 2309
                    },
                    "start": 2300,
                    "end": 2309
                  },
                  "directive": null,
                  "start": 2300,
                  "end": 2310
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
                      "start": 2325,
                      "end": 2328
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2331,
                      "end": 2334
                    },
                    "start": 2325,
                    "end": 2334
                  },
                  "directive": null,
                  "start": 2325,
                  "end": 2335
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
                                    "start": 2365,
                                    "end": 2366
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2375,
                                      "end": 2380
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
                                            "start": 2381,
                                            "end": 2389
                                          },
                                          "typeArguments": null,
                                          "start": 2381,
                                          "end": 2389
                                        }
                                      ],
                                      "start": 2380,
                                      "end": 2390
                                    },
                                    "start": 2375,
                                    "end": 2390
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2365,
                                  "end": 2390
                                }
                              ],
                              "start": 2364,
                              "end": 2391
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
                                      "start": 2395,
                                      "end": 2400
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
                                            "start": 2401,
                                            "end": 2405
                                          },
                                          "typeArguments": null,
                                          "start": 2401,
                                          "end": 2405
                                        }
                                      ],
                                      "start": 2400,
                                      "end": 2406
                                    },
                                    "start": 2395,
                                    "end": 2406
                                  },
                                  "start": 2393,
                                  "end": 2406
                                },
                                "start": 2392,
                                "end": 2406
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
                                      "start": 2411,
                                      "end": 2416
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
                                            "start": 2417,
                                            "end": 2421
                                          },
                                          "typeArguments": null,
                                          "start": 2417,
                                          "end": 2421
                                        }
                                      ],
                                      "start": 2416,
                                      "end": 2422
                                    },
                                    "start": 2411,
                                    "end": 2422
                                  },
                                  "start": 2409,
                                  "end": 2422
                                },
                                "start": 2408,
                                "end": 2422
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
                                  "start": 2427,
                                  "end": 2428
                                },
                                "typeArguments": null,
                                "start": 2427,
                                "end": 2428
                              },
                              "start": 2424,
                              "end": 2428
                            },
                            "start": 2360,
                            "end": 2428
                          },
                          "start": 2358,
                          "end": 2428
                        },
                        "start": 2355,
                        "end": 2428
                      },
                      "init": null,
                      "definite": false,
                      "start": 2355,
                      "end": 2428
                    }
                  ],
                  "declare": false,
                  "start": 2351,
                  "end": 2429
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
                      "start": 2439,
                      "end": 2442
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2445,
                      "end": 2448
                    },
                    "start": 2439,
                    "end": 2448
                  },
                  "directive": null,
                  "start": 2439,
                  "end": 2449
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
                      "start": 2464,
                      "end": 2467
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2470,
                      "end": 2473
                    },
                    "start": 2464,
                    "end": 2473
                  },
                  "directive": null,
                  "start": 2464,
                  "end": 2474
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
                                    "start": 2504,
                                    "end": 2505
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2504,
                                  "end": 2505
                                }
                              ],
                              "start": 2503,
                              "end": 2506
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
                                        "end": 2517
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
                                          "start": 2518,
                                          "end": 2519
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
                                              "start": 2521,
                                              "end": 2522
                                            },
                                            "typeArguments": null,
                                            "start": 2521,
                                            "end": 2522
                                          },
                                          "start": 2519,
                                          "end": 2522
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2518,
                                        "end": 2522
                                      }
                                    ],
                                    "start": 2510,
                                    "end": 2524
                                  },
                                  "start": 2508,
                                  "end": 2524
                                },
                                "start": 2507,
                                "end": 2524
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
                                  "start": 2529,
                                  "end": 2530
                                },
                                "typeArguments": null,
                                "start": 2529,
                                "end": 2530
                              },
                              "start": 2526,
                              "end": 2530
                            },
                            "start": 2499,
                            "end": 2530
                          },
                          "start": 2497,
                          "end": 2530
                        },
                        "start": 2494,
                        "end": 2530
                      },
                      "init": null,
                      "definite": false,
                      "start": 2494,
                      "end": 2530
                    }
                  ],
                  "declare": false,
                  "start": 2490,
                  "end": 2531
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
                      "start": 2541,
                      "end": 2544
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2547,
                      "end": 2550
                    },
                    "start": 2541,
                    "end": 2550
                  },
                  "directive": null,
                  "start": 2541,
                  "end": 2551
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
                      "start": 2566,
                      "end": 2569
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2572,
                      "end": 2575
                    },
                    "start": 2566,
                    "end": 2575
                  },
                  "directive": null,
                  "start": 2566,
                  "end": 2576
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
                                    "start": 2607,
                                    "end": 2608
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2617,
                                      "end": 2621
                                    },
                                    "typeArguments": null,
                                    "start": 2617,
                                    "end": 2621
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2607,
                                  "end": 2621
                                }
                              ],
                              "start": 2606,
                              "end": 2622
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
                                        "end": 2633
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
                                          "start": 2634,
                                          "end": 2635
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
                                              "start": 2637,
                                              "end": 2638
                                            },
                                            "typeArguments": null,
                                            "start": 2637,
                                            "end": 2638
                                          },
                                          "start": 2635,
                                          "end": 2638
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2634,
                                        "end": 2638
                                      }
                                    ],
                                    "start": 2626,
                                    "end": 2640
                                  },
                                  "start": 2624,
                                  "end": 2640
                                },
                                "start": 2623,
                                "end": 2640
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2645,
                                "end": 2651
                              },
                              "start": 2642,
                              "end": 2651
                            },
                            "start": 2602,
                            "end": 2651
                          },
                          "start": 2600,
                          "end": 2651
                        },
                        "start": 2596,
                        "end": 2651
                      },
                      "init": null,
                      "definite": false,
                      "start": 2596,
                      "end": 2651
                    }
                  ],
                  "declare": false,
                  "start": 2592,
                  "end": 2652
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
                      "start": 2662,
                      "end": 2665
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2668,
                      "end": 2672
                    },
                    "start": 2662,
                    "end": 2672
                  },
                  "directive": null,
                  "start": 2662,
                  "end": 2673
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
                      "start": 2688,
                      "end": 2692
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2695,
                      "end": 2698
                    },
                    "start": 2688,
                    "end": 2698
                  },
                  "directive": null,
                  "start": 2688,
                  "end": 2699
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
                                    "start": 2729,
                                    "end": 2730
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2729,
                                  "end": 2730
                                }
                              ],
                              "start": 2728,
                              "end": 2731
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
                                              "start": 2739,
                                              "end": 2740
                                            },
                                            "typeArguments": null,
                                            "start": 2739,
                                            "end": 2740
                                          },
                                          "start": 2737,
                                          "end": 2740
                                        },
                                        "start": 2736,
                                        "end": 2740
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
                                          "start": 2745,
                                          "end": 2746
                                        },
                                        "typeArguments": null,
                                        "start": 2745,
                                        "end": 2746
                                      },
                                      "start": 2742,
                                      "end": 2746
                                    },
                                    "start": 2735,
                                    "end": 2746
                                  },
                                  "start": 2733,
                                  "end": 2746
                                },
                                "start": 2732,
                                "end": 2746
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
                                    "start": 2751,
                                    "end": 2752
                                  },
                                  "typeArguments": null,
                                  "start": 2751,
                                  "end": 2752
                                },
                                "start": 2751,
                                "end": 2754
                              },
                              "start": 2748,
                              "end": 2754
                            },
                            "start": 2724,
                            "end": 2754
                          },
                          "start": 2722,
                          "end": 2754
                        },
                        "start": 2719,
                        "end": 2754
                      },
                      "init": null,
                      "definite": false,
                      "start": 2719,
                      "end": 2754
                    }
                  ],
                  "declare": false,
                  "start": 2715,
                  "end": 2755
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
                      "start": 2764,
                      "end": 2767
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2770,
                      "end": 2773
                    },
                    "start": 2764,
                    "end": 2773
                  },
                  "directive": null,
                  "start": 2764,
                  "end": 2774
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
                      "start": 2792,
                      "end": 2795
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2798,
                      "end": 2801
                    },
                    "start": 2792,
                    "end": 2801
                  },
                  "directive": null,
                  "start": 2792,
                  "end": 2802
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
                                    "start": 2835,
                                    "end": 2836
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2835,
                                  "end": 2836
                                }
                              ],
                              "start": 2834,
                              "end": 2837
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
                                              "start": 2845,
                                              "end": 2846
                                            },
                                            "typeArguments": null,
                                            "start": 2845,
                                            "end": 2846
                                          },
                                          "start": 2843,
                                          "end": 2846
                                        },
                                        "start": 2842,
                                        "end": 2846
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
                                          "start": 2851,
                                          "end": 2852
                                        },
                                        "typeArguments": null,
                                        "start": 2851,
                                        "end": 2852
                                      },
                                      "start": 2848,
                                      "end": 2852
                                    },
                                    "start": 2841,
                                    "end": 2852
                                  },
                                  "start": 2839,
                                  "end": 2852
                                },
                                "start": 2838,
                                "end": 2852
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 2857,
                                  "end": 2860
                                },
                                "start": 2857,
                                "end": 2862
                              },
                              "start": 2854,
                              "end": 2862
                            },
                            "start": 2830,
                            "end": 2862
                          },
                          "start": 2828,
                          "end": 2862
                        },
                        "start": 2825,
                        "end": 2862
                      },
                      "init": null,
                      "definite": false,
                      "start": 2825,
                      "end": 2862
                    }
                  ],
                  "declare": false,
                  "start": 2821,
                  "end": 2863
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
                      "start": 2872,
                      "end": 2875
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2878,
                      "end": 2881
                    },
                    "start": 2872,
                    "end": 2881
                  },
                  "directive": null,
                  "start": 2872,
                  "end": 2882
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
                      "start": 2900,
                      "end": 2903
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2906,
                      "end": 2909
                    },
                    "start": 2900,
                    "end": 2909
                  },
                  "directive": null,
                  "start": 2900,
                  "end": 2910
                }
              ],
              "start": 323,
              "end": 2925
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 278,
            "end": 2925
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2941,
              "end": 2972
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
                                    "start": 3046,
                                    "end": 3047
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3046,
                                  "end": 3047
                                }
                              ],
                              "start": 3045,
                              "end": 3048
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
                                      "start": 3052,
                                      "end": 3053
                                    },
                                    "typeArguments": null,
                                    "start": 3052,
                                    "end": 3053
                                  },
                                  "start": 3050,
                                  "end": 3053
                                },
                                "start": 3049,
                                "end": 3053
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
                                    "start": 3058,
                                    "end": 3059
                                  },
                                  "typeArguments": null,
                                  "start": 3058,
                                  "end": 3059
                                },
                                "start": 3058,
                                "end": 3061
                              },
                              "start": 3055,
                              "end": 3061
                            },
                            "start": 3041,
                            "end": 3061
                          },
                          "start": 3039,
                          "end": 3061
                        },
                        "start": 3037,
                        "end": 3061
                      },
                      "init": null,
                      "definite": false,
                      "start": 3037,
                      "end": 3061
                    }
                  ],
                  "declare": false,
                  "start": 3033,
                  "end": 3062
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
                                    "start": 3084,
                                    "end": 3085
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3084,
                                  "end": 3085
                                }
                              ],
                              "start": 3083,
                              "end": 3086
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
                                      "start": 3090,
                                      "end": 3091
                                    },
                                    "typeArguments": null,
                                    "start": 3090,
                                    "end": 3091
                                  },
                                  "start": 3088,
                                  "end": 3091
                                },
                                "start": 3087,
                                "end": 3091
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3096,
                                  "end": 3102
                                },
                                "start": 3096,
                                "end": 3104
                              },
                              "start": 3093,
                              "end": 3104
                            },
                            "start": 3079,
                            "end": 3104
                          },
                          "start": 3077,
                          "end": 3104
                        },
                        "start": 3075,
                        "end": 3104
                      },
                      "init": null,
                      "definite": false,
                      "start": 3075,
                      "end": 3104
                    }
                  ],
                  "declare": false,
                  "start": 3071,
                  "end": 3105
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
                      "start": 3114,
                      "end": 3116
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3119,
                      "end": 3121
                    },
                    "start": 3114,
                    "end": 3121
                  },
                  "directive": null,
                  "start": 3114,
                  "end": 3122
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
                      "start": 3137,
                      "end": 3139
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3142,
                      "end": 3144
                    },
                    "start": 3137,
                    "end": 3144
                  },
                  "directive": null,
                  "start": 3137,
                  "end": 3145
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
                                    "start": 3224,
                                    "end": 3225
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3224,
                                  "end": 3225
                                }
                              ],
                              "start": 3223,
                              "end": 3226
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
                                      "start": 3230,
                                      "end": 3231
                                    },
                                    "typeArguments": null,
                                    "start": 3230,
                                    "end": 3231
                                  },
                                  "start": 3228,
                                  "end": 3231
                                },
                                "start": 3227,
                                "end": 3231
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3236,
                                  "end": 3242
                                },
                                "start": 3236,
                                "end": 3244
                              },
                              "start": 3233,
                              "end": 3244
                            },
                            "start": 3219,
                            "end": 3244
                          },
                          "start": 3217,
                          "end": 3244
                        },
                        "start": 3215,
                        "end": 3244
                      },
                      "init": null,
                      "definite": false,
                      "start": 3215,
                      "end": 3244
                    }
                  ],
                  "declare": false,
                  "start": 3211,
                  "end": 3245
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
                                    "start": 3267,
                                    "end": 3268
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3267,
                                  "end": 3268
                                }
                              ],
                              "start": 3266,
                              "end": 3269
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
                                      "start": 3273,
                                      "end": 3274
                                    },
                                    "typeArguments": null,
                                    "start": 3273,
                                    "end": 3274
                                  },
                                  "start": 3271,
                                  "end": 3274
                                },
                                "start": 3270,
                                "end": 3274
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
                                    "start": 3279,
                                    "end": 3280
                                  },
                                  "typeArguments": null,
                                  "start": 3279,
                                  "end": 3280
                                },
                                "start": 3279,
                                "end": 3282
                              },
                              "start": 3276,
                              "end": 3282
                            },
                            "start": 3262,
                            "end": 3282
                          },
                          "start": 3260,
                          "end": 3282
                        },
                        "start": 3258,
                        "end": 3282
                      },
                      "init": null,
                      "definite": false,
                      "start": 3258,
                      "end": 3282
                    }
                  ],
                  "declare": false,
                  "start": 3254,
                  "end": 3283
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
                      "start": 3293,
                      "end": 3295
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3298,
                      "end": 3300
                    },
                    "start": 3293,
                    "end": 3300
                  },
                  "directive": null,
                  "start": 3293,
                  "end": 3301
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
                      "start": 3316,
                      "end": 3318
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3321,
                      "end": 3323
                    },
                    "start": 3316,
                    "end": 3323
                  },
                  "directive": null,
                  "start": 3316,
                  "end": 3324
                }
              ],
              "start": 2973,
              "end": 3336
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 2931,
            "end": 3336
          }
        ],
        "start": 85,
        "end": 3338
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 68,
      "end": 3338
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 3338
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 68,
    "end": 77,
    "range": [
      68,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "Errors",
    "start": 78,
    "end": 84,
    "range": [
      78,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 91,
    "end": 96,
    "range": [
      91,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 97,
    "end": 101,
    "range": [
      97,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 104,
    "end": 107,
    "range": [
      104,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 109,
    "end": 115,
    "range": [
      109,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 123,
    "end": 128,
    "range": [
      123,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 129,
    "end": 136,
    "range": [
      129,
      136
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 137,
    "end": 144,
    "range": [
      137,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 145,
    "end": 149,
    "range": [
      145,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 152,
    "end": 155,
    "range": [
      152,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 157,
    "end": 163,
    "range": [
      157,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 171,
    "end": 176,
    "range": [
      171,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 177,
    "end": 185,
    "range": [
      177,
      185
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 186,
    "end": 193,
    "range": [
      186,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 194,
    "end": 201,
    "range": [
      194,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 204,
    "end": 207,
    "range": [
      204,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 209,
    "end": 215,
    "range": [
      209,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 223,
    "end": 228,
    "range": [
      223,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 229,
    "end": 241,
    "range": [
      229,
      241
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 242,
    "end": 249,
    "range": [
      242,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 250,
    "end": 254,
    "range": [
      250,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 257,
    "end": 261,
    "range": [
      257,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 263,
    "end": 269,
    "range": [
      263,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 278,
    "end": 287,
    "range": [
      278,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "WithNonGenericSignaturesInBaseType",
    "start": 288,
    "end": 322,
    "range": [
      288,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 389,
    "end": 392,
    "range": [
      389,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 393,
    "end": 395,
    "range": [
      393,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 397,
    "end": 400,
    "range": [
      397,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 405,
    "end": 411,
    "range": [
      405,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 413,
    "end": 415,
    "range": [
      413,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 416,
    "end": 422,
    "range": [
      416,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 434,
    "end": 437,
    "range": [
      434,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 438,
    "end": 440,
    "range": [
      438,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 442,
    "end": 445,
    "range": [
      442,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
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
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 451,
    "end": 454,
    "range": [
      451,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 456,
    "end": 460,
    "range": [
      456,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 462,
    "end": 464,
    "range": [
      462,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 465,
    "end": 472,
    "range": [
      465,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 474,
    "end": 476,
    "range": [
      474,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 481,
    "end": 485,
    "range": [
      481,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 487,
    "end": 489,
    "range": [
      487,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 490,
    "end": 498,
    "range": [
      490,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 508,
    "end": 511,
    "range": [
      508,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 512,
    "end": 514,
    "range": [
      512,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 516,
    "end": 519,
    "range": [
      516,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 525,
    "end": 528,
    "range": [
      525,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 530,
    "end": 534,
    "range": [
      530,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 536,
    "end": 538,
    "range": [
      536,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 539,
    "end": 546,
    "range": [
      539,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 552,
    "end": 556,
    "range": [
      552,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 558,
    "end": 562,
    "range": [
      558,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 564,
    "end": 566,
    "range": [
      564,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 567,
    "end": 574,
    "range": [
      567,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 576,
    "end": 578,
    "range": [
      576,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 583,
    "end": 587,
    "range": [
      583,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 589,
    "end": 591,
    "range": [
      589,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 592,
    "end": 599,
    "range": [
      592,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 609,
    "end": 612,
    "range": [
      609,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 613,
    "end": 616,
    "range": [
      613,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 618,
    "end": 621,
    "range": [
      618,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 623,
    "end": 626,
    "range": [
      623,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 629,
    "end": 633,
    "range": [
      629,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 637,
    "end": 639,
    "range": [
      637,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 640,
    "end": 644,
    "range": [
      640,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 654,
    "end": 657,
    "range": [
      654,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 658,
    "end": 661,
    "range": [
      658,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 663,
    "end": 666,
    "range": [
      663,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 673,
    "end": 676,
    "range": [
      673,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 678,
    "end": 684,
    "range": [
      678,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 693,
    "end": 696,
    "range": [
      693,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 698,
    "end": 704,
    "range": [
      698,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 706,
    "end": 709,
    "range": [
      706,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 711,
    "end": 717,
    "range": [
      711,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 721,
    "end": 723,
    "range": [
      721,
      723
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 724,
    "end": 728,
    "range": [
      724,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 738,
    "end": 741,
    "range": [
      738,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 742,
    "end": 745,
    "range": [
      742,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 747,
    "end": 750,
    "range": [
      747,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 755,
    "end": 760,
    "range": [
      755,
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
    "type": "Identifier",
    "value": "Base",
    "start": 761,
    "end": 765,
    "range": [
      761,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 771,
    "end": 776,
    "range": [
      771,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 777,
    "end": 785,
    "range": [
      777,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 788,
    "end": 790,
    "range": [
      788,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 791,
    "end": 796,
    "range": [
      791,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 797,
    "end": 804,
    "range": [
      797,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 815,
    "end": 818,
    "range": [
      815,
      818
    ]
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 819,
    "end": 822,
    "range": [
      819,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 842,
    "end": 845,
    "range": [
      842,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 850,
    "end": 856,
    "range": [
      850,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 859,
    "end": 865,
    "range": [
      859,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 885,
    "end": 888,
    "range": [
      885,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 890,
    "end": 891,
    "range": [
      890,
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
    "value": "string",
    "start": 893,
    "end": 899,
    "range": [
      893,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 902,
    "end": 908,
    "range": [
      902,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ";",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 935,
    "end": 938,
    "range": [
      935,
      938
    ]
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 939,
    "end": 942,
    "range": [
      939,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 944,
    "end": 947,
    "range": [
      944,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 957,
    "end": 963,
    "range": [
      957,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 968,
    "end": 974,
    "range": [
      968,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 978,
    "end": 980,
    "range": [
      978,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 981,
    "end": 987,
    "range": [
      981,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 997,
    "end": 1000,
    "range": [
      997,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 1001,
    "end": 1004,
    "range": [
      1001,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1024,
    "end": 1027,
    "range": [
      1024,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1054,
    "end": 1057,
    "range": [
      1054,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1062,
    "end": 1068,
    "range": [
      1062,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1071,
    "end": 1077,
    "range": [
      1071,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1099,
    "end": 1102,
    "range": [
      1099,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1108,
    "end": 1114,
    "range": [
      1108,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1117,
    "end": 1123,
    "range": [
      1117,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1145,
    "end": 1151,
    "range": [
      1145,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1171,
    "end": 1174,
    "range": [
      1171,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1201,
    "end": 1204,
    "range": [
      1201,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1209,
    "end": 1216,
    "range": [
      1209,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1219,
    "end": 1226,
    "range": [
      1219,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1248,
    "end": 1251,
    "range": [
      1248,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1257,
    "end": 1264,
    "range": [
      1257,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1267,
    "end": 1274,
    "range": [
      1267,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1296,
    "end": 1303,
    "range": [
      1296,
      1303
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1330,
    "end": 1333,
    "range": [
      1330,
      1333
    ]
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 1334,
    "end": 1337,
    "range": [
      1334,
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
    "type": "Punctuator",
    "value": "{",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1357,
    "end": 1360,
    "range": [
      1357,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1387,
    "end": 1390,
    "range": [
      1387,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1394,
    "end": 1401,
    "range": [
      1394,
      1401
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1402,
    "end": 1409,
    "range": [
      1402,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1441,
    "end": 1444,
    "range": [
      1441,
      1444
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1448,
    "end": 1455,
    "range": [
      1448,
      1455
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1456,
    "end": 1460,
    "range": [
      1456,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "T",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1492,
    "end": 1495,
    "range": [
      1492,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1515,
    "end": 1518,
    "range": [
      1515,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1545,
    "end": 1548,
    "range": [
      1545,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1552,
    "end": 1559,
    "range": [
      1552,
      1559
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1560,
    "end": 1568,
    "range": [
      1560,
      1568
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1568,
    "end": 1569,
    "range": [
      1568,
      1569
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1569,
    "end": 1570,
    "range": [
      1569,
      1570
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1570,
    "end": 1571,
    "range": [
      1570,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1600,
    "end": 1603,
    "range": [
      1600,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1607,
    "end": 1614,
    "range": [
      1607,
      1614
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1615,
    "end": 1619,
    "range": [
      1615,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1647,
    "end": 1648,
    "range": [
      1647,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1651,
    "end": 1654,
    "range": [
      1651,
      1654
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1655,
    "end": 1656,
    "range": [
      1655,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1682,
    "end": 1685,
    "range": [
      1682,
      1685
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1686,
    "end": 1688,
    "range": [
      1686,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1690,
    "end": 1693,
    "range": [
      1690,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "value": ",",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1700,
    "end": 1701,
    "range": [
      1700,
      1701
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1707,
    "end": 1709,
    "range": [
      1707,
      1709
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1724,
    "end": 1726,
    "range": [
      1724,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1729,
    "end": 1731,
    "range": [
      1729,
      1731
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1747,
    "end": 1749,
    "range": [
      1747,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1750,
    "end": 1751,
    "range": [
      1750,
      1751
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1752,
    "end": 1754,
    "range": [
      1752,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1771,
    "end": 1774,
    "range": [
      1771,
      1774
    ]
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1775,
    "end": 1777,
    "range": [
      1775,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1779,
    "end": 1782,
    "range": [
      1779,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "type": "Keyword",
    "value": "extends",
    "start": 1786,
    "end": 1793,
    "range": [
      1786,
      1793
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1794,
    "end": 1798,
    "range": [
      1794,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1802,
    "end": 1809,
    "range": [
      1802,
      1809
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1810,
    "end": 1817,
    "range": [
      1810,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1819,
    "end": 1820,
    "range": [
      1819,
      1820
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1821,
    "end": 1828,
    "range": [
      1821,
      1828
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1829,
    "end": 1837,
    "range": [
      1829,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
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
    "value": ":",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1843,
    "end": 1846,
    "range": [
      1843,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1848,
    "end": 1849,
    "range": [
      1848,
      1849
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1849,
    "end": 1850,
    "range": [
      1849,
      1850
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1851,
    "end": 1853,
    "range": [
      1851,
      1853
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1857,
    "end": 1859,
    "range": [
      1857,
      1859
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1864,
    "end": 1865,
    "range": [
      1864,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1867,
    "end": 1869,
    "range": [
      1867,
      1869
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1870,
    "end": 1871,
    "range": [
      1870,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1881,
    "end": 1883,
    "range": [
      1881,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1886,
    "end": 1888,
    "range": [
      1886,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1904,
    "end": 1906,
    "range": [
      1904,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1909,
    "end": 1911,
    "range": [
      1909,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1911,
    "end": 1912,
    "range": [
      1911,
      1912
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1928,
    "end": 1931,
    "range": [
      1928,
      1931
    ]
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 1932,
    "end": 1934,
    "range": [
      1932,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1936,
    "end": 1939,
    "range": [
      1936,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1941,
    "end": 1942,
    "range": [
      1941,
      1942
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1943,
    "end": 1950,
    "range": [
      1943,
      1950
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1951,
    "end": 1955,
    "range": [
      1951,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1959,
    "end": 1966,
    "range": [
      1959,
      1966
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1967,
    "end": 1974,
    "range": [
      1967,
      1974
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1974,
    "end": 1975,
    "range": [
      1974,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1980,
    "end": 1983,
    "range": [
      1980,
      1983
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1986,
    "end": 1987,
    "range": [
      1986,
      1987
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1988,
    "end": 1990,
    "range": [
      1988,
      1990
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1994,
    "end": 1995,
    "range": [
      1994,
      1995
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1995,
    "end": 1996,
    "range": [
      1995,
      1996
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1997,
    "end": 1998,
    "range": [
      1997,
      1998
    ]
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 1998,
    "end": 2002,
    "range": [
      1998,
      2002
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2002,
    "end": 2003,
    "range": [
      2002,
      2003
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2004,
    "end": 2005,
    "range": [
      2004,
      2005
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2006,
    "end": 2009,
    "range": [
      2006,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2011,
    "end": 2017,
    "range": [
      2011,
      2017
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2022,
    "end": 2024,
    "range": [
      2022,
      2024
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2025,
    "end": 2026,
    "range": [
      2025,
      2026
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2028,
    "end": 2030,
    "range": [
      2028,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2038,
    "end": 2040,
    "range": [
      2038,
      2040
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2041,
    "end": 2042,
    "range": [
      2041,
      2042
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 2053,
    "end": 2055,
    "range": [
      2053,
      2055
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2058,
    "end": 2060,
    "range": [
      2058,
      2060
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2094,
    "end": 2096,
    "range": [
      2094,
      2096
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 2099,
    "end": 2101,
    "range": [
      2099,
      2101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2101,
    "end": 2102,
    "range": [
      2101,
      2102
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2130,
    "end": 2133,
    "range": [
      2130,
      2133
    ]
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2134,
    "end": 2137,
    "range": [
      2134,
      2137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2139,
    "end": 2142,
    "range": [
      2139,
      2142
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2143,
    "end": 2144,
    "range": [
      2143,
      2144
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2146,
    "end": 2153,
    "range": [
      2146,
      2153
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2154,
    "end": 2161,
    "range": [
      2154,
      2161
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2162,
    "end": 2163,
    "range": [
      2162,
      2163
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2163,
    "end": 2166,
    "range": [
      2163,
      2166
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2166,
    "end": 2167,
    "range": [
      2166,
      2167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2167,
    "end": 2168,
    "range": [
      2167,
      2168
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2170,
    "end": 2171,
    "range": [
      2170,
      2171
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2171,
    "end": 2172,
    "range": [
      2171,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2174,
    "end": 2176,
    "range": [
      2174,
      2176
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2189,
    "end": 2192,
    "range": [
      2189,
      2192
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2193,
    "end": 2194,
    "range": [
      2193,
      2194
    ]
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2195,
    "end": 2198,
    "range": [
      2195,
      2198
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2214,
    "end": 2217,
    "range": [
      2214,
      2217
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2218,
    "end": 2219,
    "range": [
      2218,
      2219
    ]
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2220,
    "end": 2223,
    "range": [
      2220,
      2223
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2223,
    "end": 2224,
    "range": [
      2223,
      2224
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2240,
    "end": 2243,
    "range": [
      2240,
      2243
    ]
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2244,
    "end": 2247,
    "range": [
      2244,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2247,
    "end": 2248,
    "range": [
      2247,
      2248
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2249,
    "end": 2252,
    "range": [
      2249,
      2252
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2256,
    "end": 2263,
    "range": [
      2256,
      2263
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2264,
    "end": 2271,
    "range": [
      2264,
      2271
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2282,
    "end": 2283,
    "range": [
      2282,
      2283
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2283,
    "end": 2284,
    "range": [
      2283,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2285,
    "end": 2287,
    "range": [
      2285,
      2287
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2288,
    "end": 2289,
    "range": [
      2288,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2300,
    "end": 2303,
    "range": [
      2300,
      2303
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2304,
    "end": 2305,
    "range": [
      2304,
      2305
    ]
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2306,
    "end": 2309,
    "range": [
      2306,
      2309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2309,
    "end": 2310,
    "range": [
      2309,
      2310
    ]
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2325,
    "end": 2328,
    "range": [
      2325,
      2328
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2329,
    "end": 2330,
    "range": [
      2329,
      2330
    ]
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2331,
    "end": 2334,
    "range": [
      2331,
      2334
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2334,
    "end": 2335,
    "range": [
      2334,
      2335
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2351,
    "end": 2354,
    "range": [
      2351,
      2354
    ]
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2355,
    "end": 2358,
    "range": [
      2355,
      2358
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2358,
    "end": 2359,
    "range": [
      2358,
      2359
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2360,
    "end": 2363,
    "range": [
      2360,
      2363
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2365,
    "end": 2366,
    "range": [
      2365,
      2366
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2367,
    "end": 2374,
    "range": [
      2367,
      2374
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2375,
    "end": 2380,
    "range": [
      2375,
      2380
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2380,
    "end": 2381,
    "range": [
      2380,
      2381
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2381,
    "end": 2389,
    "range": [
      2381,
      2389
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2390,
    "end": 2391,
    "range": [
      2390,
      2391
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2392,
    "end": 2393,
    "range": [
      2392,
      2393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2393,
    "end": 2394,
    "range": [
      2393,
      2394
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2395,
    "end": 2400,
    "range": [
      2395,
      2400
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2401,
    "end": 2405,
    "range": [
      2401,
      2405
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2406,
    "end": 2407,
    "range": [
      2406,
      2407
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2408,
    "end": 2409,
    "range": [
      2408,
      2409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2411,
    "end": 2416,
    "range": [
      2411,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2416,
    "end": 2417,
    "range": [
      2416,
      2417
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2417,
    "end": 2421,
    "range": [
      2417,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2422,
    "end": 2423,
    "range": [
      2422,
      2423
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2424,
    "end": 2426,
    "range": [
      2424,
      2426
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2427,
    "end": 2428,
    "range": [
      2427,
      2428
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2428,
    "end": 2429,
    "range": [
      2428,
      2429
    ]
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2439,
    "end": 2442,
    "range": [
      2439,
      2442
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2443,
    "end": 2444,
    "range": [
      2443,
      2444
    ]
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2445,
    "end": 2448,
    "range": [
      2445,
      2448
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2448,
    "end": 2449,
    "range": [
      2448,
      2449
    ]
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2464,
    "end": 2467,
    "range": [
      2464,
      2467
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2468,
    "end": 2469,
    "range": [
      2468,
      2469
    ]
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2470,
    "end": 2473,
    "range": [
      2470,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2490,
    "end": 2493,
    "range": [
      2490,
      2493
    ]
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2494,
    "end": 2497,
    "range": [
      2494,
      2497
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2497,
    "end": 2498,
    "range": [
      2497,
      2498
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2499,
    "end": 2502,
    "range": [
      2499,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2505,
    "end": 2506,
    "range": [
      2505,
      2506
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2506,
    "end": 2507,
    "range": [
      2506,
      2507
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2507,
    "end": 2508,
    "range": [
      2507,
      2508
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2508,
    "end": 2509,
    "range": [
      2508,
      2509
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2513,
    "end": 2514,
    "range": [
      2513,
      2514
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2515,
    "end": 2516,
    "range": [
      2515,
      2516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2516,
    "end": 2517,
    "range": [
      2516,
      2517
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2518,
    "end": 2519,
    "range": [
      2518,
      2519
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2519,
    "end": 2520,
    "range": [
      2519,
      2520
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2521,
    "end": 2522,
    "range": [
      2521,
      2522
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2523,
    "end": 2524,
    "range": [
      2523,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2526,
    "end": 2528,
    "range": [
      2526,
      2528
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2529,
    "end": 2530,
    "range": [
      2529,
      2530
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2530,
    "end": 2531,
    "range": [
      2530,
      2531
    ]
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2541,
    "end": 2544,
    "range": [
      2541,
      2544
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2545,
    "end": 2546,
    "range": [
      2545,
      2546
    ]
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2547,
    "end": 2550,
    "range": [
      2547,
      2550
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2566,
    "end": 2569,
    "range": [
      2566,
      2569
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2570,
    "end": 2571,
    "range": [
      2570,
      2571
    ]
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2572,
    "end": 2575,
    "range": [
      2572,
      2575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2575,
    "end": 2576,
    "range": [
      2575,
      2576
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2592,
    "end": 2595,
    "range": [
      2592,
      2595
    ]
  },
  {
    "type": "Identifier",
    "value": "b15a",
    "start": 2596,
    "end": 2600,
    "range": [
      2596,
      2600
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2600,
    "end": 2601,
    "range": [
      2600,
      2601
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2602,
    "end": 2605,
    "range": [
      2602,
      2605
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2606,
    "end": 2607,
    "range": [
      2606,
      2607
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2607,
    "end": 2608,
    "range": [
      2607,
      2608
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2609,
    "end": 2616,
    "range": [
      2609,
      2616
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2617,
    "end": 2621,
    "range": [
      2617,
      2621
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2621,
    "end": 2622,
    "range": [
      2621,
      2622
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2622,
    "end": 2623,
    "range": [
      2622,
      2623
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2623,
    "end": 2624,
    "range": [
      2623,
      2624
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2624,
    "end": 2625,
    "range": [
      2624,
      2625
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2626,
    "end": 2627,
    "range": [
      2626,
      2627
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2628,
    "end": 2629,
    "range": [
      2628,
      2629
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2629,
    "end": 2630,
    "range": [
      2629,
      2630
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
    "value": ";",
    "start": 2632,
    "end": 2633,
    "range": [
      2632,
      2633
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2634,
    "end": 2635,
    "range": [
      2634,
      2635
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2635,
    "end": 2636,
    "range": [
      2635,
      2636
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2637,
    "end": 2638,
    "range": [
      2637,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2639,
    "end": 2640,
    "range": [
      2639,
      2640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2642,
    "end": 2644,
    "range": [
      2642,
      2644
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2645,
    "end": 2651,
    "range": [
      2645,
      2651
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2662,
    "end": 2665,
    "range": [
      2662,
      2665
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2666,
    "end": 2667,
    "range": [
      2666,
      2667
    ]
  },
  {
    "type": "Identifier",
    "value": "b15a",
    "start": 2668,
    "end": 2672,
    "range": [
      2668,
      2672
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2672,
    "end": 2673,
    "range": [
      2672,
      2673
    ]
  },
  {
    "type": "Identifier",
    "value": "b15a",
    "start": 2688,
    "end": 2692,
    "range": [
      2688,
      2692
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2693,
    "end": 2694,
    "range": [
      2693,
      2694
    ]
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2695,
    "end": 2698,
    "range": [
      2695,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2698,
    "end": 2699,
    "range": [
      2698,
      2699
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2715,
    "end": 2718,
    "range": [
      2715,
      2718
    ]
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2719,
    "end": 2722,
    "range": [
      2719,
      2722
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2722,
    "end": 2723,
    "range": [
      2722,
      2723
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2724,
    "end": 2727,
    "range": [
      2724,
      2727
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2728,
    "end": 2729,
    "range": [
      2728,
      2729
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2729,
    "end": 2730,
    "range": [
      2729,
      2730
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2730,
    "end": 2731,
    "range": [
      2730,
      2731
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2731,
    "end": 2732,
    "range": [
      2731,
      2732
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2732,
    "end": 2733,
    "range": [
      2732,
      2733
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2733,
    "end": 2734,
    "range": [
      2733,
      2734
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2735,
    "end": 2736,
    "range": [
      2735,
      2736
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2736,
    "end": 2737,
    "range": [
      2736,
      2737
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2737,
    "end": 2738,
    "range": [
      2737,
      2738
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2739,
    "end": 2740,
    "range": [
      2739,
      2740
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2740,
    "end": 2741,
    "range": [
      2740,
      2741
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2742,
    "end": 2744,
    "range": [
      2742,
      2744
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2745,
    "end": 2746,
    "range": [
      2745,
      2746
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2746,
    "end": 2747,
    "range": [
      2746,
      2747
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2748,
    "end": 2750,
    "range": [
      2748,
      2750
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2751,
    "end": 2752,
    "range": [
      2751,
      2752
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2752,
    "end": 2753,
    "range": [
      2752,
      2753
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2753,
    "end": 2754,
    "range": [
      2753,
      2754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2754,
    "end": 2755,
    "range": [
      2754,
      2755
    ]
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 2764,
    "end": 2767,
    "range": [
      2764,
      2767
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2768,
    "end": 2769,
    "range": [
      2768,
      2769
    ]
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2770,
    "end": 2773,
    "range": [
      2770,
      2773
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2773,
    "end": 2774,
    "range": [
      2773,
      2774
    ]
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2792,
    "end": 2795,
    "range": [
      2792,
      2795
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2796,
    "end": 2797,
    "range": [
      2796,
      2797
    ]
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 2798,
    "end": 2801,
    "range": [
      2798,
      2801
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2801,
    "end": 2802,
    "range": [
      2801,
      2802
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2821,
    "end": 2824,
    "range": [
      2821,
      2824
    ]
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 2825,
    "end": 2828,
    "range": [
      2825,
      2828
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2830,
    "end": 2833,
    "range": [
      2830,
      2833
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2834,
    "end": 2835,
    "range": [
      2834,
      2835
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2835,
    "end": 2836,
    "range": [
      2835,
      2836
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2837,
    "end": 2838,
    "range": [
      2837,
      2838
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2838,
    "end": 2839,
    "range": [
      2838,
      2839
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2839,
    "end": 2840,
    "range": [
      2839,
      2840
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2841,
    "end": 2842,
    "range": [
      2841,
      2842
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2842,
    "end": 2843,
    "range": [
      2842,
      2843
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2843,
    "end": 2844,
    "range": [
      2843,
      2844
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2845,
    "end": 2846,
    "range": [
      2845,
      2846
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2846,
    "end": 2847,
    "range": [
      2846,
      2847
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2848,
    "end": 2850,
    "range": [
      2848,
      2850
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2851,
    "end": 2852,
    "range": [
      2851,
      2852
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2852,
    "end": 2853,
    "range": [
      2852,
      2853
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2854,
    "end": 2856,
    "range": [
      2854,
      2856
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2857,
    "end": 2860,
    "range": [
      2857,
      2860
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2860,
    "end": 2861,
    "range": [
      2860,
      2861
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2861,
    "end": 2862,
    "range": [
      2861,
      2862
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2862,
    "end": 2863,
    "range": [
      2862,
      2863
    ]
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 2872,
    "end": 2875,
    "range": [
      2872,
      2875
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2876,
    "end": 2877,
    "range": [
      2876,
      2877
    ]
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 2878,
    "end": 2881,
    "range": [
      2878,
      2881
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 2900,
    "end": 2903,
    "range": [
      2900,
      2903
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2904,
    "end": 2905,
    "range": [
      2904,
      2905
    ]
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 2906,
    "end": 2909,
    "range": [
      2906,
      2909
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2909,
    "end": 2910,
    "range": [
      2909,
      2910
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2924,
    "end": 2925,
    "range": [
      2924,
      2925
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2931,
    "end": 2940,
    "range": [
      2931,
      2940
    ]
  },
  {
    "type": "Identifier",
    "value": "WithGenericSignaturesInBaseType",
    "start": 2941,
    "end": 2972,
    "range": [
      2941,
      2972
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2973,
    "end": 2974,
    "range": [
      2973,
      2974
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3033,
    "end": 3036,
    "range": [
      3033,
      3036
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3037,
    "end": 3039,
    "range": [
      3037,
      3039
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3039,
    "end": 3040,
    "range": [
      3039,
      3040
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3041,
    "end": 3044,
    "range": [
      3041,
      3044
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3045,
    "end": 3046,
    "range": [
      3045,
      3046
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3046,
    "end": 3047,
    "range": [
      3046,
      3047
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3047,
    "end": 3048,
    "range": [
      3047,
      3048
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3048,
    "end": 3049,
    "range": [
      3048,
      3049
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3049,
    "end": 3050,
    "range": [
      3049,
      3050
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3050,
    "end": 3051,
    "range": [
      3050,
      3051
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3052,
    "end": 3053,
    "range": [
      3052,
      3053
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3053,
    "end": 3054,
    "range": [
      3053,
      3054
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3055,
    "end": 3057,
    "range": [
      3055,
      3057
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3058,
    "end": 3059,
    "range": [
      3058,
      3059
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3059,
    "end": 3060,
    "range": [
      3059,
      3060
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3060,
    "end": 3061,
    "range": [
      3060,
      3061
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3061,
    "end": 3062,
    "range": [
      3061,
      3062
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3071,
    "end": 3074,
    "range": [
      3071,
      3074
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 3075,
    "end": 3077,
    "range": [
      3075,
      3077
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3077,
    "end": 3078,
    "range": [
      3077,
      3078
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3079,
    "end": 3082,
    "range": [
      3079,
      3082
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3083,
    "end": 3084,
    "range": [
      3083,
      3084
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3084,
    "end": 3085,
    "range": [
      3084,
      3085
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3085,
    "end": 3086,
    "range": [
      3085,
      3086
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3086,
    "end": 3087,
    "range": [
      3086,
      3087
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3087,
    "end": 3088,
    "range": [
      3087,
      3088
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3088,
    "end": 3089,
    "range": [
      3088,
      3089
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3090,
    "end": 3091,
    "range": [
      3090,
      3091
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3091,
    "end": 3092,
    "range": [
      3091,
      3092
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3093,
    "end": 3095,
    "range": [
      3093,
      3095
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3096,
    "end": 3102,
    "range": [
      3096,
      3102
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3102,
    "end": 3103,
    "range": [
      3102,
      3103
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3103,
    "end": 3104,
    "range": [
      3103,
      3104
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3104,
    "end": 3105,
    "range": [
      3104,
      3105
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3114,
    "end": 3116,
    "range": [
      3114,
      3116
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3117,
    "end": 3118,
    "range": [
      3117,
      3118
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 3119,
    "end": 3121,
    "range": [
      3119,
      3121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3121,
    "end": 3122,
    "range": [
      3121,
      3122
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 3137,
    "end": 3139,
    "range": [
      3137,
      3139
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3140,
    "end": 3141,
    "range": [
      3140,
      3141
    ]
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3142,
    "end": 3144,
    "range": [
      3142,
      3144
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3144,
    "end": 3145,
    "range": [
      3144,
      3145
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3211,
    "end": 3214,
    "range": [
      3211,
      3214
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3215,
    "end": 3217,
    "range": [
      3215,
      3217
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3217,
    "end": 3218,
    "range": [
      3217,
      3218
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3219,
    "end": 3222,
    "range": [
      3219,
      3222
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3224,
    "end": 3225,
    "range": [
      3224,
      3225
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3225,
    "end": 3226,
    "range": [
      3225,
      3226
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3226,
    "end": 3227,
    "range": [
      3226,
      3227
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3227,
    "end": 3228,
    "range": [
      3227,
      3228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3228,
    "end": 3229,
    "range": [
      3228,
      3229
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3230,
    "end": 3231,
    "range": [
      3230,
      3231
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3231,
    "end": 3232,
    "range": [
      3231,
      3232
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3233,
    "end": 3235,
    "range": [
      3233,
      3235
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3236,
    "end": 3242,
    "range": [
      3236,
      3242
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3242,
    "end": 3243,
    "range": [
      3242,
      3243
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3243,
    "end": 3244,
    "range": [
      3243,
      3244
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3244,
    "end": 3245,
    "range": [
      3244,
      3245
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3254,
    "end": 3257,
    "range": [
      3254,
      3257
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3258,
    "end": 3260,
    "range": [
      3258,
      3260
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3260,
    "end": 3261,
    "range": [
      3260,
      3261
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3262,
    "end": 3265,
    "range": [
      3262,
      3265
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3266,
    "end": 3267,
    "range": [
      3266,
      3267
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3267,
    "end": 3268,
    "range": [
      3267,
      3268
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3268,
    "end": 3269,
    "range": [
      3268,
      3269
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3269,
    "end": 3270,
    "range": [
      3269,
      3270
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3270,
    "end": 3271,
    "range": [
      3270,
      3271
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3271,
    "end": 3272,
    "range": [
      3271,
      3272
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3273,
    "end": 3274,
    "range": [
      3273,
      3274
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3274,
    "end": 3275,
    "range": [
      3274,
      3275
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3276,
    "end": 3278,
    "range": [
      3276,
      3278
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3279,
    "end": 3280,
    "range": [
      3279,
      3280
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3280,
    "end": 3281,
    "range": [
      3280,
      3281
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3281,
    "end": 3282,
    "range": [
      3281,
      3282
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3282,
    "end": 3283,
    "range": [
      3282,
      3283
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3293,
    "end": 3295,
    "range": [
      3293,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3296,
    "end": 3297,
    "range": [
      3296,
      3297
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3298,
    "end": 3300,
    "range": [
      3298,
      3300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3300,
    "end": 3301,
    "range": [
      3300,
      3301
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3316,
    "end": 3318,
    "range": [
      3316,
      3318
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3319,
    "end": 3320,
    "range": [
      3319,
      3320
    ]
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3321,
    "end": 3323,
    "range": [
      3321,
      3323
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3323,
    "end": 3324,
    "range": [
      3323,
      3324
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3335,
    "end": 3336,
    "range": [
      3335,
      3336
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3337,
    "end": 3338,
    "range": [
      3337,
      3338
    ]
  }
]
```
