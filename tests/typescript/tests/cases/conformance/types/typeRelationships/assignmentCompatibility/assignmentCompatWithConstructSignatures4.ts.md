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
