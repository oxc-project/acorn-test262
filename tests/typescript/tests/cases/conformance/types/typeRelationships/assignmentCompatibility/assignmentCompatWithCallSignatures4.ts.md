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
        "start": 99,
        "end": 105
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
              "start": 118,
              "end": 122
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
                    "start": 125,
                    "end": 128
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 130,
                      "end": 136
                    },
                    "start": 128,
                    "end": 136
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
                  "start": 125,
                  "end": 137
                }
              ],
              "start": 123,
              "end": 139
            },
            "abstract": false,
            "declare": false,
            "start": 112,
            "end": 139
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
              "start": 150,
              "end": 157
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 170
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
                    "start": 173,
                    "end": 176
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 178,
                      "end": 184
                    },
                    "start": 176,
                    "end": 184
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
                  "start": 173,
                  "end": 185
                }
              ],
              "start": 171,
              "end": 187
            },
            "abstract": false,
            "declare": false,
            "start": 144,
            "end": 187
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
              "start": 198,
              "end": 206
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 222
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
                    "start": 225,
                    "end": 228
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 230,
                      "end": 236
                    },
                    "start": 228,
                    "end": 236
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
                  "start": 225,
                  "end": 237
                }
              ],
              "start": 223,
              "end": 239
            },
            "abstract": false,
            "declare": false,
            "start": 192,
            "end": 239
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
              "start": 250,
              "end": 262
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 275
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
                    "start": 278,
                    "end": 282
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 284,
                      "end": 290
                    },
                    "start": 282,
                    "end": 290
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
                  "start": 278,
                  "end": 291
                }
              ],
              "start": 276,
              "end": 293
            },
            "abstract": false,
            "declare": false,
            "start": 244,
            "end": 293
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithNonGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 340
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
                            "type": "TSFunctionType",
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
                                    "start": 419,
                                    "end": 425
                                  },
                                  "start": 417,
                                  "end": 425
                                },
                                "start": 416,
                                "end": 425
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 430,
                                  "end": 436
                                },
                                "start": 430,
                                "end": 438
                              },
                              "start": 427,
                              "end": 438
                            },
                            "start": 415,
                            "end": 438
                          },
                          "start": 413,
                          "end": 438
                        },
                        "start": 411,
                        "end": 438
                      },
                      "init": null,
                      "definite": false,
                      "start": 411,
                      "end": 438
                    }
                  ],
                  "declare": false,
                  "start": 407,
                  "end": 439
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
                            "type": "TSFunctionType",
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
                                              "start": 466,
                                              "end": 470
                                            },
                                            "typeArguments": null,
                                            "start": 466,
                                            "end": 470
                                          },
                                          "start": 464,
                                          "end": 470
                                        },
                                        "start": 461,
                                        "end": 470
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
                                          "start": 475,
                                          "end": 482
                                        },
                                        "typeArguments": null,
                                        "start": 475,
                                        "end": 482
                                      },
                                      "start": 472,
                                      "end": 482
                                    },
                                    "start": 460,
                                    "end": 482
                                  },
                                  "start": 458,
                                  "end": 482
                                },
                                "start": 457,
                                "end": 482
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
                                          "start": 491,
                                          "end": 495
                                        },
                                        "typeArguments": null,
                                        "start": 491,
                                        "end": 495
                                      },
                                      "start": 489,
                                      "end": 495
                                    },
                                    "start": 488,
                                    "end": 495
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
                                      "start": 500,
                                      "end": 508
                                    },
                                    "typeArguments": null,
                                    "start": 500,
                                    "end": 508
                                  },
                                  "start": 497,
                                  "end": 508
                                },
                                "start": 487,
                                "end": 508
                              },
                              "start": 484,
                              "end": 508
                            },
                            "start": 456,
                            "end": 508
                          },
                          "start": 454,
                          "end": 508
                        },
                        "start": 452,
                        "end": 508
                      },
                      "init": null,
                      "definite": false,
                      "start": 452,
                      "end": 508
                    }
                  ],
                  "declare": false,
                  "start": 448,
                  "end": 509
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
                            "type": "TSFunctionType",
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
                                              "start": 536,
                                              "end": 540
                                            },
                                            "typeArguments": null,
                                            "start": 536,
                                            "end": 540
                                          },
                                          "start": 534,
                                          "end": 540
                                        },
                                        "start": 531,
                                        "end": 540
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
                                          "start": 545,
                                          "end": 552
                                        },
                                        "typeArguments": null,
                                        "start": 545,
                                        "end": 552
                                      },
                                      "start": 542,
                                      "end": 552
                                    },
                                    "start": 530,
                                    "end": 552
                                  },
                                  "start": 528,
                                  "end": 552
                                },
                                "start": 527,
                                "end": 552
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
                                              "start": 564,
                                              "end": 568
                                            },
                                            "typeArguments": null,
                                            "start": 564,
                                            "end": 568
                                          },
                                          "start": 562,
                                          "end": 568
                                        },
                                        "start": 558,
                                        "end": 568
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
                                          "start": 573,
                                          "end": 580
                                        },
                                        "typeArguments": null,
                                        "start": 573,
                                        "end": 580
                                      },
                                      "start": 570,
                                      "end": 580
                                    },
                                    "start": 557,
                                    "end": 580
                                  },
                                  "start": 555,
                                  "end": 580
                                },
                                "start": 554,
                                "end": 580
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
                                          "start": 589,
                                          "end": 593
                                        },
                                        "typeArguments": null,
                                        "start": 589,
                                        "end": 593
                                      },
                                      "start": 587,
                                      "end": 593
                                    },
                                    "start": 586,
                                    "end": 593
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
                                      "start": 598,
                                      "end": 605
                                    },
                                    "typeArguments": null,
                                    "start": 598,
                                    "end": 605
                                  },
                                  "start": 595,
                                  "end": 605
                                },
                                "start": 585,
                                "end": 605
                              },
                              "start": 582,
                              "end": 605
                            },
                            "start": 526,
                            "end": 605
                          },
                          "start": 524,
                          "end": 605
                        },
                        "start": 522,
                        "end": 605
                      },
                      "init": null,
                      "definite": false,
                      "start": 522,
                      "end": 605
                    }
                  ],
                  "declare": false,
                  "start": 518,
                  "end": 606
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
                            "type": "TSFunctionType",
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
                                  "start": 628,
                                  "end": 629
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
                                        "start": 631,
                                        "end": 635
                                      },
                                      "typeArguments": null,
                                      "start": 631,
                                      "end": 635
                                    },
                                    "start": 631,
                                    "end": 637
                                  },
                                  "start": 629,
                                  "end": 637
                                },
                                "value": null,
                                "start": 625,
                                "end": 637
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
                                  "start": 642,
                                  "end": 646
                                },
                                "typeArguments": null,
                                "start": 642,
                                "end": 646
                              },
                              "start": 639,
                              "end": 646
                            },
                            "start": 624,
                            "end": 646
                          },
                          "start": 622,
                          "end": 646
                        },
                        "start": 619,
                        "end": 646
                      },
                      "init": null,
                      "definite": false,
                      "start": 619,
                      "end": 646
                    }
                  ],
                  "declare": false,
                  "start": 615,
                  "end": 647
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
                            "type": "TSFunctionType",
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
                                          "start": 671,
                                          "end": 674
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 676,
                                            "end": 682
                                          },
                                          "start": 674,
                                          "end": 682
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 671,
                                        "end": 682
                                      }
                                    ],
                                    "start": 669,
                                    "end": 684
                                  },
                                  "start": 667,
                                  "end": 684
                                },
                                "start": 666,
                                "end": 684
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
                                          "start": 691,
                                          "end": 694
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 696,
                                            "end": 702
                                          },
                                          "start": 694,
                                          "end": 702
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 691,
                                        "end": 703
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
                                          "start": 704,
                                          "end": 707
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 709,
                                            "end": 715
                                          },
                                          "start": 707,
                                          "end": 715
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 704,
                                        "end": 715
                                      }
                                    ],
                                    "start": 689,
                                    "end": 717
                                  },
                                  "start": 687,
                                  "end": 717
                                },
                                "start": 686,
                                "end": 717
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
                                  "start": 722,
                                  "end": 726
                                },
                                "typeArguments": null,
                                "start": 722,
                                "end": 726
                              },
                              "start": 719,
                              "end": 726
                            },
                            "start": 665,
                            "end": 726
                          },
                          "start": 663,
                          "end": 726
                        },
                        "start": 660,
                        "end": 726
                      },
                      "init": null,
                      "definite": false,
                      "start": 660,
                      "end": 726
                    }
                  ],
                  "declare": false,
                  "start": 656,
                  "end": 727
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
                            "type": "TSFunctionType",
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
                            "start": 745,
                            "end": 799
                          },
                          "start": 743,
                          "end": 799
                        },
                        "start": 740,
                        "end": 799
                      },
                      "init": null,
                      "definite": false,
                      "start": 740,
                      "end": 799
                    }
                  ],
                  "declare": false,
                  "start": 736,
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
                                "type": "TSCallSignatureDeclaration",
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
                                        "start": 840,
                                        "end": 846
                                      },
                                      "start": 838,
                                      "end": 846
                                    },
                                    "start": 837,
                                    "end": 846
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 849,
                                      "end": 855
                                    },
                                    "start": 849,
                                    "end": 857
                                  },
                                  "start": 847,
                                  "end": 857
                                },
                                "start": 836,
                                "end": 858
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
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
                                        "start": 879,
                                        "end": 885
                                      },
                                      "start": 877,
                                      "end": 885
                                    },
                                    "start": 876,
                                    "end": 885
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 888,
                                      "end": 894
                                    },
                                    "start": 888,
                                    "end": 896
                                  },
                                  "start": 886,
                                  "end": 896
                                },
                                "start": 875,
                                "end": 897
                              }
                            ],
                            "start": 818,
                            "end": 911
                          },
                          "start": 816,
                          "end": 911
                        },
                        "start": 813,
                        "end": 911
                      },
                      "init": null,
                      "definite": false,
                      "start": 813,
                      "end": 911
                    }
                  ],
                  "declare": false,
                  "start": 809,
                  "end": 912
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
                            "type": "TSFunctionType",
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
                                          "start": 936,
                                          "end": 937
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 939,
                                            "end": 945
                                          },
                                          "start": 937,
                                          "end": 945
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 936,
                                        "end": 946
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
                                          "start": 947,
                                          "end": 948
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 950,
                                            "end": 956
                                          },
                                          "start": 948,
                                          "end": 956
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 947,
                                        "end": 956
                                      }
                                    ],
                                    "start": 934,
                                    "end": 958
                                  },
                                  "start": 932,
                                  "end": 958
                                },
                                "start": 931,
                                "end": 958
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 963,
                                "end": 969
                              },
                              "start": 960,
                              "end": 969
                            },
                            "start": 930,
                            "end": 969
                          },
                          "start": 928,
                          "end": 969
                        },
                        "start": 925,
                        "end": 969
                      },
                      "init": null,
                      "definite": false,
                      "start": 925,
                      "end": 969
                    }
                  ],
                  "declare": false,
                  "start": 921,
                  "end": 970
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
                                "type": "TSCallSignatureDeclaration",
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
                                            "type": "TSCallSignatureDeclaration",
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
                                                    "start": 1036,
                                                    "end": 1042
                                                  },
                                                  "start": 1034,
                                                  "end": 1042
                                                },
                                                "start": 1033,
                                                "end": 1042
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1045,
                                                "end": 1051
                                              },
                                              "start": 1043,
                                              "end": 1051
                                            },
                                            "start": 1032,
                                            "end": 1052
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
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
                                                    "start": 1078,
                                                    "end": 1084
                                                  },
                                                  "start": 1076,
                                                  "end": 1084
                                                },
                                                "start": 1074,
                                                "end": 1084
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1087,
                                                "end": 1093
                                              },
                                              "start": 1085,
                                              "end": 1093
                                            },
                                            "start": 1073,
                                            "end": 1094
                                          }
                                        ],
                                        "start": 1010,
                                        "end": 1112
                                      },
                                      "start": 1008,
                                      "end": 1112
                                    },
                                    "start": 1007,
                                    "end": 1112
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1115,
                                      "end": 1121
                                    },
                                    "start": 1115,
                                    "end": 1123
                                  },
                                  "start": 1113,
                                  "end": 1123
                                },
                                "start": 1006,
                                "end": 1124
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
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
                                            "type": "TSCallSignatureDeclaration",
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
                                                    "start": 1171,
                                                    "end": 1178
                                                  },
                                                  "start": 1169,
                                                  "end": 1178
                                                },
                                                "start": 1168,
                                                "end": 1178
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1181,
                                                "end": 1188
                                              },
                                              "start": 1179,
                                              "end": 1188
                                            },
                                            "start": 1167,
                                            "end": 1189
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
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
                                                    "start": 1215,
                                                    "end": 1222
                                                  },
                                                  "start": 1213,
                                                  "end": 1222
                                                },
                                                "start": 1211,
                                                "end": 1222
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1225,
                                                "end": 1232
                                              },
                                              "start": 1223,
                                              "end": 1232
                                            },
                                            "start": 1210,
                                            "end": 1233
                                          }
                                        ],
                                        "start": 1145,
                                        "end": 1251
                                      },
                                      "start": 1143,
                                      "end": 1251
                                    },
                                    "start": 1142,
                                    "end": 1251
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1254,
                                      "end": 1261
                                    },
                                    "start": 1254,
                                    "end": 1263
                                  },
                                  "start": 1252,
                                  "end": 1263
                                },
                                "start": 1141,
                                "end": 1264
                              }
                            ],
                            "start": 988,
                            "end": 1278
                          },
                          "start": 986,
                          "end": 1278
                        },
                        "start": 983,
                        "end": 1278
                      },
                      "init": null,
                      "definite": false,
                      "start": 983,
                      "end": 1278
                    }
                  ],
                  "declare": false,
                  "start": 979,
                  "end": 1279
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
                                "type": "TSCallSignatureDeclaration",
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
                                            "type": "TSCallSignatureDeclaration",
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
                                                    "start": 1342,
                                                    "end": 1343
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1352,
                                                      "end": 1359
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1352,
                                                    "end": 1359
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1342,
                                                  "end": 1359
                                                }
                                              ],
                                              "start": 1341,
                                              "end": 1360
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
                                                      "start": 1364,
                                                      "end": 1365
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1364,
                                                    "end": 1365
                                                  },
                                                  "start": 1362,
                                                  "end": 1365
                                                },
                                                "start": 1361,
                                                "end": 1365
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
                                                  "start": 1368,
                                                  "end": 1369
                                                },
                                                "typeArguments": null,
                                                "start": 1368,
                                                "end": 1369
                                              },
                                              "start": 1366,
                                              "end": 1369
                                            },
                                            "start": 1341,
                                            "end": 1370
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
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
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1402,
                                                      "end": 1406
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1402,
                                                    "end": 1406
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1392,
                                                  "end": 1406
                                                }
                                              ],
                                              "start": 1391,
                                              "end": 1407
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
                                                      "start": 1411,
                                                      "end": 1412
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1411,
                                                    "end": 1412
                                                  },
                                                  "start": 1409,
                                                  "end": 1412
                                                },
                                                "start": 1408,
                                                "end": 1412
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
                                                  "start": 1415,
                                                  "end": 1416
                                                },
                                                "typeArguments": null,
                                                "start": 1415,
                                                "end": 1416
                                              },
                                              "start": 1413,
                                              "end": 1416
                                            },
                                            "start": 1391,
                                            "end": 1417
                                          }
                                        ],
                                        "start": 1319,
                                        "end": 1435
                                      },
                                      "start": 1317,
                                      "end": 1435
                                    },
                                    "start": 1316,
                                    "end": 1435
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1438,
                                      "end": 1441
                                    },
                                    "start": 1438,
                                    "end": 1443
                                  },
                                  "start": 1436,
                                  "end": 1443
                                },
                                "start": 1315,
                                "end": 1444
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
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
                                            "type": "TSCallSignatureDeclaration",
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
                                                    "start": 1488,
                                                    "end": 1489
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived2",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1498,
                                                      "end": 1506
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1498,
                                                    "end": 1506
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1488,
                                                  "end": 1506
                                                }
                                              ],
                                              "start": 1487,
                                              "end": 1507
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
                                                      "start": 1511,
                                                      "end": 1512
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1511,
                                                    "end": 1512
                                                  },
                                                  "start": 1509,
                                                  "end": 1512
                                                },
                                                "start": 1508,
                                                "end": 1512
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
                                                  "start": 1515,
                                                  "end": 1516
                                                },
                                                "typeArguments": null,
                                                "start": 1515,
                                                "end": 1516
                                              },
                                              "start": 1513,
                                              "end": 1516
                                            },
                                            "start": 1487,
                                            "end": 1517
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
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
                                                    "start": 1539,
                                                    "end": 1540
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1549,
                                                      "end": 1553
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1549,
                                                    "end": 1553
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1539,
                                                  "end": 1553
                                                }
                                              ],
                                              "start": 1538,
                                              "end": 1554
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
                                                      "start": 1558,
                                                      "end": 1559
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1558,
                                                    "end": 1559
                                                  },
                                                  "start": 1556,
                                                  "end": 1559
                                                },
                                                "start": 1555,
                                                "end": 1559
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
                                                  "start": 1562,
                                                  "end": 1563
                                                },
                                                "typeArguments": null,
                                                "start": 1562,
                                                "end": 1563
                                              },
                                              "start": 1560,
                                              "end": 1563
                                            },
                                            "start": 1538,
                                            "end": 1564
                                          }
                                        ],
                                        "start": 1465,
                                        "end": 1582
                                      },
                                      "start": 1463,
                                      "end": 1582
                                    },
                                    "start": 1462,
                                    "end": 1582
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1585,
                                      "end": 1588
                                    },
                                    "start": 1585,
                                    "end": 1590
                                  },
                                  "start": 1583,
                                  "end": 1590
                                },
                                "start": 1461,
                                "end": 1591
                              }
                            ],
                            "start": 1297,
                            "end": 1605
                          },
                          "start": 1295,
                          "end": 1605
                        },
                        "start": 1292,
                        "end": 1605
                      },
                      "init": null,
                      "definite": false,
                      "start": 1292,
                      "end": 1605
                    }
                  ],
                  "declare": false,
                  "start": 1288,
                  "end": 1606
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
                                    "start": 1625,
                                    "end": 1626
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1625,
                                  "end": 1626
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1628,
                                    "end": 1629
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1628,
                                  "end": 1629
                                }
                              ],
                              "start": 1624,
                              "end": 1630
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
                                      "start": 1634,
                                      "end": 1635
                                    },
                                    "typeArguments": null,
                                    "start": 1634,
                                    "end": 1635
                                  },
                                  "start": 1632,
                                  "end": 1635
                                },
                                "start": 1631,
                                "end": 1635
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
                                    "start": 1640,
                                    "end": 1641
                                  },
                                  "typeArguments": null,
                                  "start": 1640,
                                  "end": 1641
                                },
                                "start": 1640,
                                "end": 1643
                              },
                              "start": 1637,
                              "end": 1643
                            },
                            "start": 1624,
                            "end": 1643
                          },
                          "start": 1622,
                          "end": 1643
                        },
                        "start": 1620,
                        "end": 1643
                      },
                      "init": null,
                      "definite": false,
                      "start": 1620,
                      "end": 1643
                    }
                  ],
                  "declare": false,
                  "start": 1616,
                  "end": 1644
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
                      "start": 1654,
                      "end": 1656
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1659,
                      "end": 1661
                    },
                    "start": 1654,
                    "end": 1661
                  },
                  "directive": null,
                  "start": 1654,
                  "end": 1662
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
                      "start": 1671,
                      "end": 1673
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1676,
                      "end": 1678
                    },
                    "start": 1671,
                    "end": 1678
                  },
                  "directive": null,
                  "start": 1671,
                  "end": 1679
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
                                    "start": 1698,
                                    "end": 1699
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1708,
                                      "end": 1712
                                    },
                                    "typeArguments": null,
                                    "start": 1708,
                                    "end": 1712
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1698,
                                  "end": 1712
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1714,
                                    "end": 1715
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1724,
                                      "end": 1731
                                    },
                                    "typeArguments": null,
                                    "start": 1724,
                                    "end": 1731
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1714,
                                  "end": 1731
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1733,
                                    "end": 1734
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1743,
                                      "end": 1751
                                    },
                                    "typeArguments": null,
                                    "start": 1743,
                                    "end": 1751
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1733,
                                  "end": 1751
                                }
                              ],
                              "start": 1697,
                              "end": 1752
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
                                              "start": 1762,
                                              "end": 1763
                                            },
                                            "typeArguments": null,
                                            "start": 1762,
                                            "end": 1763
                                          },
                                          "start": 1760,
                                          "end": 1763
                                        },
                                        "start": 1757,
                                        "end": 1763
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
                                          "start": 1768,
                                          "end": 1769
                                        },
                                        "typeArguments": null,
                                        "start": 1768,
                                        "end": 1769
                                      },
                                      "start": 1765,
                                      "end": 1769
                                    },
                                    "start": 1756,
                                    "end": 1769
                                  },
                                  "start": 1754,
                                  "end": 1769
                                },
                                "start": 1753,
                                "end": 1769
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
                                          "start": 1778,
                                          "end": 1779
                                        },
                                        "typeArguments": null,
                                        "start": 1778,
                                        "end": 1779
                                      },
                                      "start": 1776,
                                      "end": 1779
                                    },
                                    "start": 1775,
                                    "end": 1779
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
                                      "start": 1784,
                                      "end": 1785
                                    },
                                    "typeArguments": null,
                                    "start": 1784,
                                    "end": 1785
                                  },
                                  "start": 1781,
                                  "end": 1785
                                },
                                "start": 1774,
                                "end": 1785
                              },
                              "start": 1771,
                              "end": 1785
                            },
                            "start": 1697,
                            "end": 1785
                          },
                          "start": 1695,
                          "end": 1785
                        },
                        "start": 1693,
                        "end": 1785
                      },
                      "init": null,
                      "definite": false,
                      "start": 1693,
                      "end": 1785
                    }
                  ],
                  "declare": false,
                  "start": 1689,
                  "end": 1786
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
                      "start": 1795,
                      "end": 1797
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1800,
                      "end": 1802
                    },
                    "start": 1795,
                    "end": 1802
                  },
                  "directive": null,
                  "start": 1795,
                  "end": 1803
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
                      "start": 1812,
                      "end": 1814
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1817,
                      "end": 1819
                    },
                    "start": 1812,
                    "end": 1819
                  },
                  "directive": null,
                  "start": 1812,
                  "end": 1820
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
                                    "start": 1839,
                                    "end": 1840
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1849,
                                      "end": 1853
                                    },
                                    "typeArguments": null,
                                    "start": 1849,
                                    "end": 1853
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1839,
                                  "end": 1853
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1855,
                                    "end": 1856
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1865,
                                      "end": 1872
                                    },
                                    "typeArguments": null,
                                    "start": 1865,
                                    "end": 1872
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1855,
                                  "end": 1872
                                }
                              ],
                              "start": 1838,
                              "end": 1873
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
                                              "start": 1883,
                                              "end": 1884
                                            },
                                            "typeArguments": null,
                                            "start": 1883,
                                            "end": 1884
                                          },
                                          "start": 1881,
                                          "end": 1884
                                        },
                                        "start": 1878,
                                        "end": 1884
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
                                          "start": 1889,
                                          "end": 1890
                                        },
                                        "typeArguments": null,
                                        "start": 1889,
                                        "end": 1890
                                      },
                                      "start": 1886,
                                      "end": 1890
                                    },
                                    "start": 1877,
                                    "end": 1890
                                  },
                                  "start": 1875,
                                  "end": 1890
                                },
                                "start": 1874,
                                "end": 1890
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
                                                  "start": 1904,
                                                  "end": 1907
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1909,
                                                    "end": 1915
                                                  },
                                                  "start": 1907,
                                                  "end": 1915
                                                },
                                                "accessibility": null,
                                                "static": false,
                                                "start": 1904,
                                                "end": 1916
                                              }
                                            ],
                                            "start": 1902,
                                            "end": 1918
                                          },
                                          "start": 1900,
                                          "end": 1918
                                        },
                                        "start": 1896,
                                        "end": 1918
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
                                          "start": 1923,
                                          "end": 1924
                                        },
                                        "typeArguments": null,
                                        "start": 1923,
                                        "end": 1924
                                      },
                                      "start": 1920,
                                      "end": 1924
                                    },
                                    "start": 1895,
                                    "end": 1924
                                  },
                                  "start": 1893,
                                  "end": 1924
                                },
                                "start": 1892,
                                "end": 1924
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
                                          "start": 1933,
                                          "end": 1934
                                        },
                                        "typeArguments": null,
                                        "start": 1933,
                                        "end": 1934
                                      },
                                      "start": 1931,
                                      "end": 1934
                                    },
                                    "start": 1930,
                                    "end": 1934
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
                                      "start": 1939,
                                      "end": 1940
                                    },
                                    "typeArguments": null,
                                    "start": 1939,
                                    "end": 1940
                                  },
                                  "start": 1936,
                                  "end": 1940
                                },
                                "start": 1929,
                                "end": 1940
                              },
                              "start": 1926,
                              "end": 1940
                            },
                            "start": 1838,
                            "end": 1940
                          },
                          "start": 1836,
                          "end": 1940
                        },
                        "start": 1834,
                        "end": 1940
                      },
                      "init": null,
                      "definite": false,
                      "start": 1834,
                      "end": 1940
                    }
                  ],
                  "declare": false,
                  "start": 1830,
                  "end": 1941
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
                      "start": 1951,
                      "end": 1953
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1956,
                      "end": 1958
                    },
                    "start": 1951,
                    "end": 1958
                  },
                  "directive": null,
                  "start": 1951,
                  "end": 1959
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
                      "start": 2020,
                      "end": 2022
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2025,
                      "end": 2027
                    },
                    "start": 2020,
                    "end": 2027
                  },
                  "directive": null,
                  "start": 2020,
                  "end": 2028
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
                                    "start": 2109,
                                    "end": 2110
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2119,
                                      "end": 2126
                                    },
                                    "typeArguments": null,
                                    "start": 2119,
                                    "end": 2126
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2109,
                                  "end": 2126
                                }
                              ],
                              "start": 2108,
                              "end": 2127
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
                                  "start": 2131,
                                  "end": 2132
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
                                        "start": 2134,
                                        "end": 2135
                                      },
                                      "typeArguments": null,
                                      "start": 2134,
                                      "end": 2135
                                    },
                                    "start": 2134,
                                    "end": 2137
                                  },
                                  "start": 2132,
                                  "end": 2137
                                },
                                "value": null,
                                "start": 2128,
                                "end": 2137
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
                                  "start": 2142,
                                  "end": 2143
                                },
                                "typeArguments": null,
                                "start": 2142,
                                "end": 2143
                              },
                              "start": 2139,
                              "end": 2143
                            },
                            "start": 2108,
                            "end": 2143
                          },
                          "start": 2106,
                          "end": 2143
                        },
                        "start": 2103,
                        "end": 2143
                      },
                      "init": null,
                      "definite": false,
                      "start": 2103,
                      "end": 2143
                    }
                  ],
                  "declare": false,
                  "start": 2099,
                  "end": 2144
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
                      "start": 2154,
                      "end": 2157
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2160,
                      "end": 2163
                    },
                    "start": 2154,
                    "end": 2163
                  },
                  "directive": null,
                  "start": 2154,
                  "end": 2164
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
                      "start": 2173,
                      "end": 2176
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2179,
                      "end": 2182
                    },
                    "start": 2173,
                    "end": 2182
                  },
                  "directive": null,
                  "start": 2173,
                  "end": 2183
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
                                    "start": 2203,
                                    "end": 2204
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2213,
                                      "end": 2220
                                    },
                                    "typeArguments": null,
                                    "start": 2213,
                                    "end": 2220
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2203,
                                  "end": 2220
                                }
                              ],
                              "start": 2202,
                              "end": 2221
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
                                      "start": 2225,
                                      "end": 2226
                                    },
                                    "typeArguments": null,
                                    "start": 2225,
                                    "end": 2226
                                  },
                                  "start": 2223,
                                  "end": 2226
                                },
                                "start": 2222,
                                "end": 2226
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
                                      "start": 2231,
                                      "end": 2232
                                    },
                                    "typeArguments": null,
                                    "start": 2231,
                                    "end": 2232
                                  },
                                  "start": 2229,
                                  "end": 2232
                                },
                                "start": 2228,
                                "end": 2232
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
                                  "start": 2237,
                                  "end": 2238
                                },
                                "typeArguments": null,
                                "start": 2237,
                                "end": 2238
                              },
                              "start": 2234,
                              "end": 2238
                            },
                            "start": 2202,
                            "end": 2238
                          },
                          "start": 2200,
                          "end": 2238
                        },
                        "start": 2197,
                        "end": 2238
                      },
                      "init": null,
                      "definite": false,
                      "start": 2197,
                      "end": 2238
                    }
                  ],
                  "declare": false,
                  "start": 2193,
                  "end": 2239
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
                      "start": 2249,
                      "end": 2252
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2255,
                      "end": 2258
                    },
                    "start": 2249,
                    "end": 2258
                  },
                  "directive": null,
                  "start": 2249,
                  "end": 2259
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
                      "start": 2268,
                      "end": 2271
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2274,
                      "end": 2277
                    },
                    "start": 2268,
                    "end": 2277
                  },
                  "directive": null,
                  "start": 2268,
                  "end": 2278
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
                                    "start": 2298,
                                    "end": 2299
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2308,
                                      "end": 2313
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
                                            "start": 2314,
                                            "end": 2322
                                          },
                                          "typeArguments": null,
                                          "start": 2314,
                                          "end": 2322
                                        }
                                      ],
                                      "start": 2313,
                                      "end": 2323
                                    },
                                    "start": 2308,
                                    "end": 2323
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2298,
                                  "end": 2323
                                }
                              ],
                              "start": 2297,
                              "end": 2324
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
                                      "start": 2328,
                                      "end": 2333
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
                                            "start": 2334,
                                            "end": 2338
                                          },
                                          "typeArguments": null,
                                          "start": 2334,
                                          "end": 2338
                                        }
                                      ],
                                      "start": 2333,
                                      "end": 2339
                                    },
                                    "start": 2328,
                                    "end": 2339
                                  },
                                  "start": 2326,
                                  "end": 2339
                                },
                                "start": 2325,
                                "end": 2339
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
                                      "start": 2344,
                                      "end": 2349
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
                                            "start": 2350,
                                            "end": 2354
                                          },
                                          "typeArguments": null,
                                          "start": 2350,
                                          "end": 2354
                                        }
                                      ],
                                      "start": 2349,
                                      "end": 2355
                                    },
                                    "start": 2344,
                                    "end": 2355
                                  },
                                  "start": 2342,
                                  "end": 2355
                                },
                                "start": 2341,
                                "end": 2355
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
                                  "start": 2360,
                                  "end": 2361
                                },
                                "typeArguments": null,
                                "start": 2360,
                                "end": 2361
                              },
                              "start": 2357,
                              "end": 2361
                            },
                            "start": 2297,
                            "end": 2361
                          },
                          "start": 2295,
                          "end": 2361
                        },
                        "start": 2292,
                        "end": 2361
                      },
                      "init": null,
                      "definite": false,
                      "start": 2292,
                      "end": 2361
                    }
                  ],
                  "declare": false,
                  "start": 2288,
                  "end": 2362
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
                      "start": 2372,
                      "end": 2375
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2378,
                      "end": 2381
                    },
                    "start": 2372,
                    "end": 2381
                  },
                  "directive": null,
                  "start": 2372,
                  "end": 2382
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
                      "start": 2391,
                      "end": 2394
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2397,
                      "end": 2400
                    },
                    "start": 2391,
                    "end": 2400
                  },
                  "directive": null,
                  "start": 2391,
                  "end": 2401
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
                                    "start": 2421,
                                    "end": 2422
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2421,
                                  "end": 2422
                                }
                              ],
                              "start": 2420,
                              "end": 2423
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
                                          "start": 2429,
                                          "end": 2430
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
                                              "start": 2432,
                                              "end": 2433
                                            },
                                            "typeArguments": null,
                                            "start": 2432,
                                            "end": 2433
                                          },
                                          "start": 2430,
                                          "end": 2433
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2429,
                                        "end": 2434
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
                                          "start": 2435,
                                          "end": 2436
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
                                              "start": 2438,
                                              "end": 2439
                                            },
                                            "typeArguments": null,
                                            "start": 2438,
                                            "end": 2439
                                          },
                                          "start": 2436,
                                          "end": 2439
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2435,
                                        "end": 2439
                                      }
                                    ],
                                    "start": 2427,
                                    "end": 2441
                                  },
                                  "start": 2425,
                                  "end": 2441
                                },
                                "start": 2424,
                                "end": 2441
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
                                  "start": 2446,
                                  "end": 2447
                                },
                                "typeArguments": null,
                                "start": 2446,
                                "end": 2447
                              },
                              "start": 2443,
                              "end": 2447
                            },
                            "start": 2420,
                            "end": 2447
                          },
                          "start": 2418,
                          "end": 2447
                        },
                        "start": 2415,
                        "end": 2447
                      },
                      "init": null,
                      "definite": false,
                      "start": 2415,
                      "end": 2447
                    }
                  ],
                  "declare": false,
                  "start": 2411,
                  "end": 2448
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
                      "start": 2458,
                      "end": 2461
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15",
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
                      "start": 2477,
                      "end": 2480
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2483,
                      "end": 2486
                    },
                    "start": 2477,
                    "end": 2486
                  },
                  "directive": null,
                  "start": 2477,
                  "end": 2487
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
                                    "start": 2508,
                                    "end": 2509
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2518,
                                      "end": 2522
                                    },
                                    "typeArguments": null,
                                    "start": 2518,
                                    "end": 2522
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2508,
                                  "end": 2522
                                }
                              ],
                              "start": 2507,
                              "end": 2523
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
                                          "start": 2529,
                                          "end": 2530
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
                                              "start": 2532,
                                              "end": 2533
                                            },
                                            "typeArguments": null,
                                            "start": 2532,
                                            "end": 2533
                                          },
                                          "start": 2530,
                                          "end": 2533
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2529,
                                        "end": 2534
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
                                          "start": 2535,
                                          "end": 2536
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
                                              "start": 2538,
                                              "end": 2539
                                            },
                                            "typeArguments": null,
                                            "start": 2538,
                                            "end": 2539
                                          },
                                          "start": 2536,
                                          "end": 2539
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2535,
                                        "end": 2539
                                      }
                                    ],
                                    "start": 2527,
                                    "end": 2541
                                  },
                                  "start": 2525,
                                  "end": 2541
                                },
                                "start": 2524,
                                "end": 2541
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2546,
                                "end": 2552
                              },
                              "start": 2543,
                              "end": 2552
                            },
                            "start": 2507,
                            "end": 2552
                          },
                          "start": 2505,
                          "end": 2552
                        },
                        "start": 2501,
                        "end": 2552
                      },
                      "init": null,
                      "definite": false,
                      "start": 2501,
                      "end": 2552
                    }
                  ],
                  "declare": false,
                  "start": 2497,
                  "end": 2553
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
                      "start": 2563,
                      "end": 2566
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2569,
                      "end": 2573
                    },
                    "start": 2563,
                    "end": 2573
                  },
                  "directive": null,
                  "start": 2563,
                  "end": 2574
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
                      "start": 2583,
                      "end": 2587
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2590,
                      "end": 2593
                    },
                    "start": 2583,
                    "end": 2593
                  },
                  "directive": null,
                  "start": 2583,
                  "end": 2594
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
                                    "start": 2614,
                                    "end": 2615
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2614,
                                  "end": 2615
                                }
                              ],
                              "start": 2613,
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
                                              "start": 2624,
                                              "end": 2625
                                            },
                                            "typeArguments": null,
                                            "start": 2624,
                                            "end": 2625
                                          },
                                          "start": 2622,
                                          "end": 2625
                                        },
                                        "start": 2621,
                                        "end": 2625
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
                                          "start": 2630,
                                          "end": 2631
                                        },
                                        "typeArguments": null,
                                        "start": 2630,
                                        "end": 2631
                                      },
                                      "start": 2627,
                                      "end": 2631
                                    },
                                    "start": 2620,
                                    "end": 2631
                                  },
                                  "start": 2618,
                                  "end": 2631
                                },
                                "start": 2617,
                                "end": 2631
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
                                    "start": 2636,
                                    "end": 2637
                                  },
                                  "typeArguments": null,
                                  "start": 2636,
                                  "end": 2637
                                },
                                "start": 2636,
                                "end": 2639
                              },
                              "start": 2633,
                              "end": 2639
                            },
                            "start": 2613,
                            "end": 2639
                          },
                          "start": 2611,
                          "end": 2639
                        },
                        "start": 2608,
                        "end": 2639
                      },
                      "init": null,
                      "definite": false,
                      "start": 2608,
                      "end": 2639
                    }
                  ],
                  "declare": false,
                  "start": 2604,
                  "end": 2640
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
                      "start": 2649,
                      "end": 2652
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2655,
                      "end": 2658
                    },
                    "start": 2649,
                    "end": 2658
                  },
                  "directive": null,
                  "start": 2649,
                  "end": 2659
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
                      "start": 2668,
                      "end": 2671
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2674,
                      "end": 2677
                    },
                    "start": 2668,
                    "end": 2677
                  },
                  "directive": null,
                  "start": 2668,
                  "end": 2678
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
                                    "start": 2698,
                                    "end": 2699
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2698,
                                  "end": 2699
                                }
                              ],
                              "start": 2697,
                              "end": 2700
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
                                              "start": 2708,
                                              "end": 2709
                                            },
                                            "typeArguments": null,
                                            "start": 2708,
                                            "end": 2709
                                          },
                                          "start": 2706,
                                          "end": 2709
                                        },
                                        "start": 2705,
                                        "end": 2709
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
                                          "start": 2714,
                                          "end": 2715
                                        },
                                        "typeArguments": null,
                                        "start": 2714,
                                        "end": 2715
                                      },
                                      "start": 2711,
                                      "end": 2715
                                    },
                                    "start": 2704,
                                    "end": 2715
                                  },
                                  "start": 2702,
                                  "end": 2715
                                },
                                "start": 2701,
                                "end": 2715
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 2720,
                                  "end": 2723
                                },
                                "start": 2720,
                                "end": 2725
                              },
                              "start": 2717,
                              "end": 2725
                            },
                            "start": 2697,
                            "end": 2725
                          },
                          "start": 2695,
                          "end": 2725
                        },
                        "start": 2692,
                        "end": 2725
                      },
                      "init": null,
                      "definite": false,
                      "start": 2692,
                      "end": 2725
                    }
                  ],
                  "declare": false,
                  "start": 2688,
                  "end": 2726
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
                      "start": 2735,
                      "end": 2738
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2741,
                      "end": 2744
                    },
                    "start": 2735,
                    "end": 2744
                  },
                  "directive": null,
                  "start": 2735,
                  "end": 2745
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
                      "start": 2754,
                      "end": 2757
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2760,
                      "end": 2763
                    },
                    "start": 2754,
                    "end": 2763
                  },
                  "directive": null,
                  "start": 2754,
                  "end": 2764
                }
              ],
              "start": 341,
              "end": 2770
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 299,
            "end": 2770
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2783,
              "end": 2814
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
                                    "start": 2884,
                                    "end": 2885
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2884,
                                  "end": 2885
                                }
                              ],
                              "start": 2883,
                              "end": 2886
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
                                      "start": 2890,
                                      "end": 2891
                                    },
                                    "typeArguments": null,
                                    "start": 2890,
                                    "end": 2891
                                  },
                                  "start": 2888,
                                  "end": 2891
                                },
                                "start": 2887,
                                "end": 2891
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
                                    "start": 2896,
                                    "end": 2897
                                  },
                                  "typeArguments": null,
                                  "start": 2896,
                                  "end": 2897
                                },
                                "start": 2896,
                                "end": 2899
                              },
                              "start": 2893,
                              "end": 2899
                            },
                            "start": 2883,
                            "end": 2899
                          },
                          "start": 2881,
                          "end": 2899
                        },
                        "start": 2879,
                        "end": 2899
                      },
                      "init": null,
                      "definite": false,
                      "start": 2879,
                      "end": 2899
                    }
                  ],
                  "declare": false,
                  "start": 2875,
                  "end": 2900
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
                                    "start": 2918,
                                    "end": 2919
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2918,
                                  "end": 2919
                                }
                              ],
                              "start": 2917,
                              "end": 2920
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
                                      "start": 2924,
                                      "end": 2925
                                    },
                                    "typeArguments": null,
                                    "start": 2924,
                                    "end": 2925
                                  },
                                  "start": 2922,
                                  "end": 2925
                                },
                                "start": 2921,
                                "end": 2925
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 2930,
                                  "end": 2936
                                },
                                "start": 2930,
                                "end": 2938
                              },
                              "start": 2927,
                              "end": 2938
                            },
                            "start": 2917,
                            "end": 2938
                          },
                          "start": 2915,
                          "end": 2938
                        },
                        "start": 2913,
                        "end": 2938
                      },
                      "init": null,
                      "definite": false,
                      "start": 2913,
                      "end": 2938
                    }
                  ],
                  "declare": false,
                  "start": 2909,
                  "end": 2939
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
                      "start": 2948,
                      "end": 2950
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2953,
                      "end": 2955
                    },
                    "start": 2948,
                    "end": 2955
                  },
                  "directive": null,
                  "start": 2948,
                  "end": 2956
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
                      "start": 2965,
                      "end": 2967
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2970,
                      "end": 2972
                    },
                    "start": 2965,
                    "end": 2972
                  },
                  "directive": null,
                  "start": 2965,
                  "end": 2973
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
                                    "start": 3042,
                                    "end": 3043
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3042,
                                  "end": 3043
                                }
                              ],
                              "start": 3041,
                              "end": 3044
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
                                      "start": 3048,
                                      "end": 3049
                                    },
                                    "typeArguments": null,
                                    "start": 3048,
                                    "end": 3049
                                  },
                                  "start": 3046,
                                  "end": 3049
                                },
                                "start": 3045,
                                "end": 3049
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3054,
                                  "end": 3060
                                },
                                "start": 3054,
                                "end": 3062
                              },
                              "start": 3051,
                              "end": 3062
                            },
                            "start": 3041,
                            "end": 3062
                          },
                          "start": 3039,
                          "end": 3062
                        },
                        "start": 3037,
                        "end": 3062
                      },
                      "init": null,
                      "definite": false,
                      "start": 3037,
                      "end": 3062
                    }
                  ],
                  "declare": false,
                  "start": 3033,
                  "end": 3063
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
                                    "start": 3081,
                                    "end": 3082
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3081,
                                  "end": 3082
                                }
                              ],
                              "start": 3080,
                              "end": 3083
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
                                      "start": 3087,
                                      "end": 3088
                                    },
                                    "typeArguments": null,
                                    "start": 3087,
                                    "end": 3088
                                  },
                                  "start": 3085,
                                  "end": 3088
                                },
                                "start": 3084,
                                "end": 3088
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
                                    "start": 3093,
                                    "end": 3094
                                  },
                                  "typeArguments": null,
                                  "start": 3093,
                                  "end": 3094
                                },
                                "start": 3093,
                                "end": 3096
                              },
                              "start": 3090,
                              "end": 3096
                            },
                            "start": 3080,
                            "end": 3096
                          },
                          "start": 3078,
                          "end": 3096
                        },
                        "start": 3076,
                        "end": 3096
                      },
                      "init": null,
                      "definite": false,
                      "start": 3076,
                      "end": 3096
                    }
                  ],
                  "declare": false,
                  "start": 3072,
                  "end": 3097
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
                      "start": 3107,
                      "end": 3109
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3112,
                      "end": 3114
                    },
                    "start": 3107,
                    "end": 3114
                  },
                  "directive": null,
                  "start": 3107,
                  "end": 3115
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
                      "start": 3124,
                      "end": 3126
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3129,
                      "end": 3131
                    },
                    "start": 3124,
                    "end": 3131
                  },
                  "directive": null,
                  "start": 3124,
                  "end": 3132
                }
              ],
              "start": 2815,
              "end": 3138
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 2776,
            "end": 3138
          }
        ],
        "start": 106,
        "end": 3140
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 92,
      "end": 3140
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 92,
  "end": 3140
}
```
