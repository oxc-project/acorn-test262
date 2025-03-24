__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 92,
  "end": 3140,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 92,
      "end": 3140,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 105,
        "name": "Errors",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 106,
        "end": 3140,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 112,
            "end": 139,
            "id": {
              "type": "Identifier",
              "start": 118,
              "end": 122,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 123,
              "end": 139,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 125,
                  "end": 137,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 128,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 128,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 130,
                      "end": 136
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 144,
            "end": 187,
            "id": {
              "type": "Identifier",
              "start": 150,
              "end": 157,
              "name": "Derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 166,
              "end": 170,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 171,
              "end": 187,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 173,
                  "end": 185,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 176,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 184,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 178,
                      "end": 184
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 192,
            "end": 239,
            "id": {
              "type": "Identifier",
              "start": 198,
              "end": 206,
              "name": "Derived2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 215,
              "end": 222,
              "name": "Derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 223,
              "end": 239,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 225,
                  "end": 237,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 228,
                    "name": "baz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 228,
                    "end": 236,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 230,
                      "end": 236
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 244,
            "end": 293,
            "id": {
              "type": "Identifier",
              "start": 250,
              "end": 262,
              "name": "OtherDerived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 271,
              "end": 275,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 276,
              "end": 293,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 278,
                  "end": 291,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 278,
                    "end": 282,
                    "name": "bing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 282,
                    "end": 290,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 284,
                      "end": 290
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 299,
            "end": 2770,
            "id": {
              "type": "Identifier",
              "start": 306,
              "end": 340,
              "name": "WithNonGenericSignaturesInBaseType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 341,
              "end": 2770,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 407,
                  "end": 439,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 411,
                      "end": 438,
                      "id": {
                        "type": "Identifier",
                        "start": 411,
                        "end": 438,
                        "name": "a2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 413,
                          "end": 438,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 415,
                            "end": 438,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 416,
                                "end": 425,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 417,
                                  "end": 425,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 419,
                                    "end": 425
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 427,
                              "end": 438,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 430,
                                "end": 438,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 430,
                                  "end": 436
                                }
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 448,
                  "end": 509,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 452,
                      "end": 508,
                      "id": {
                        "type": "Identifier",
                        "start": 452,
                        "end": 508,
                        "name": "a7",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 454,
                          "end": 508,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 456,
                            "end": 508,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 457,
                                "end": 482,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 458,
                                  "end": 482,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 460,
                                    "end": 482,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 461,
                                        "end": 470,
                                        "name": "arg",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 464,
                                          "end": 470,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 466,
                                            "end": 470,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 466,
                                              "end": 470,
                                              "name": "Base",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 472,
                                      "end": 482,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 475,
                                        "end": 482,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 475,
                                          "end": 482,
                                          "name": "Derived",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 484,
                              "end": 508,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 487,
                                "end": 508,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 488,
                                    "end": 495,
                                    "name": "r",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 489,
                                      "end": 495,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 491,
                                        "end": 495,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 491,
                                          "end": 495,
                                          "name": "Base",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 497,
                                  "end": 508,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 500,
                                    "end": 508,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 500,
                                      "end": 508,
                                      "name": "Derived2",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 518,
                  "end": 606,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 522,
                      "end": 605,
                      "id": {
                        "type": "Identifier",
                        "start": 522,
                        "end": 605,
                        "name": "a8",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 524,
                          "end": 605,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 526,
                            "end": 605,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 527,
                                "end": 552,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 528,
                                  "end": 552,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 530,
                                    "end": 552,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 531,
                                        "end": 540,
                                        "name": "arg",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 534,
                                          "end": 540,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 536,
                                            "end": 540,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 536,
                                              "end": 540,
                                              "name": "Base",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 542,
                                      "end": 552,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 545,
                                        "end": 552,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 545,
                                          "end": 552,
                                          "name": "Derived",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 554,
                                "end": 580,
                                "name": "y",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 555,
                                  "end": 580,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 557,
                                    "end": 580,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 558,
                                        "end": 568,
                                        "name": "arg2",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 562,
                                          "end": 568,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 564,
                                            "end": 568,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 564,
                                              "end": 568,
                                              "name": "Base",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 570,
                                      "end": 580,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 573,
                                        "end": 580,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 573,
                                          "end": 580,
                                          "name": "Derived",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 582,
                              "end": 605,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 585,
                                "end": 605,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 586,
                                    "end": 593,
                                    "name": "r",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 587,
                                      "end": 593,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 589,
                                        "end": 593,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 589,
                                          "end": 593,
                                          "name": "Base",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 595,
                                  "end": 605,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 598,
                                    "end": 605,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 598,
                                      "end": 605,
                                      "name": "Derived",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 615,
                  "end": 647,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 619,
                      "end": 646,
                      "id": {
                        "type": "Identifier",
                        "start": 619,
                        "end": 646,
                        "name": "a10",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 622,
                          "end": 646,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 624,
                            "end": 646,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 625,
                                "end": 637,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 628,
                                  "end": 629,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 629,
                                  "end": 637,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 631,
                                    "end": 637,
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "start": 631,
                                      "end": 635,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 631,
                                        "end": 635,
                                        "name": "Base",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                },
                                "value": null
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 639,
                              "end": 646,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 642,
                                "end": 646,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 642,
                                  "end": 646,
                                  "name": "Base",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 656,
                  "end": 727,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 660,
                      "end": 726,
                      "id": {
                        "type": "Identifier",
                        "start": 660,
                        "end": 726,
                        "name": "a11",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 663,
                          "end": 726,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 665,
                            "end": 726,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 666,
                                "end": 684,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 667,
                                  "end": 684,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 669,
                                    "end": 684,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 671,
                                        "end": 682,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 671,
                                          "end": 674,
                                          "name": "foo",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 674,
                                          "end": 682,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 676,
                                            "end": 682
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      }
                                    ]
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 686,
                                "end": 717,
                                "name": "y",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 687,
                                  "end": 717,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 689,
                                    "end": 717,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 691,
                                        "end": 703,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 691,
                                          "end": 694,
                                          "name": "foo",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 694,
                                          "end": 702,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 696,
                                            "end": 702
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 704,
                                        "end": 715,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 704,
                                          "end": 707,
                                          "name": "bar",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 707,
                                          "end": 715,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 709,
                                            "end": 715
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      }
                                    ]
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 719,
                              "end": 726,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 722,
                                "end": 726,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 722,
                                  "end": 726,
                                  "name": "Base",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 736,
                  "end": 800,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 740,
                      "end": 799,
                      "id": {
                        "type": "Identifier",
                        "start": 740,
                        "end": 799,
                        "name": "a12",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 743,
                          "end": 799,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 745,
                            "end": 799,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 746,
                                "end": 760,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 747,
                                  "end": 760,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 749,
                                    "end": 760,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 749,
                                      "end": 754,
                                      "name": "Array",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 754,
                                      "end": 760,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 755,
                                          "end": 759,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 755,
                                            "end": 759,
                                            "name": "Base",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      ]
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 762,
                                "end": 780,
                                "name": "y",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 763,
                                  "end": 780,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 765,
                                    "end": 780,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 765,
                                      "end": 770,
                                      "name": "Array",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 770,
                                      "end": 780,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 771,
                                          "end": 779,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 771,
                                            "end": 779,
                                            "name": "Derived2",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      ]
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 782,
                              "end": 799,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 785,
                                "end": 799,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 785,
                                  "end": 790,
                                  "name": "Array",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 790,
                                  "end": 799,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 791,
                                      "end": 798,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 791,
                                        "end": 798,
                                        "name": "Derived",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 809,
                  "end": 912,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 813,
                      "end": 911,
                      "id": {
                        "type": "Identifier",
                        "start": 813,
                        "end": 911,
                        "name": "a14",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 816,
                          "end": 911,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 818,
                            "end": 911,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 836,
                                "end": 858,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 837,
                                    "end": 846,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 838,
                                      "end": 846,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 840,
                                        "end": 846
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 847,
                                  "end": 857,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 849,
                                    "end": 857,
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 849,
                                      "end": 855
                                    }
                                  }
                                }
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 875,
                                "end": 897,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 876,
                                    "end": 885,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 877,
                                      "end": 885,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 879,
                                        "end": 885
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 886,
                                  "end": 896,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 888,
                                    "end": 896,
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 888,
                                      "end": 894
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 921,
                  "end": 970,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 925,
                      "end": 969,
                      "id": {
                        "type": "Identifier",
                        "start": 925,
                        "end": 969,
                        "name": "a15",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 928,
                          "end": 969,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 930,
                            "end": 969,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 931,
                                "end": 958,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 932,
                                  "end": 958,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 934,
                                    "end": 958,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 936,
                                        "end": 946,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 936,
                                          "end": 937,
                                          "name": "a",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 937,
                                          "end": 945,
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 939,
                                            "end": 945
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 947,
                                        "end": 956,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 947,
                                          "end": 948,
                                          "name": "b",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 948,
                                          "end": 956,
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 950,
                                            "end": 956
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      }
                                    ]
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 960,
                              "end": 969,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 963,
                                "end": 969
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 979,
                  "end": 1279,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 983,
                      "end": 1278,
                      "id": {
                        "type": "Identifier",
                        "start": 983,
                        "end": 1278,
                        "name": "a16",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 986,
                          "end": 1278,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 988,
                            "end": 1278,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1006,
                                "end": 1124,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1007,
                                    "end": 1112,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1008,
                                      "end": 1112,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 1010,
                                        "end": 1112,
                                        "members": [
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1032,
                                            "end": 1052,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1033,
                                                "end": 1042,
                                                "name": "a",
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1034,
                                                  "end": 1042,
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1036,
                                                    "end": 1042
                                                  }
                                                },
                                                "decorators": [],
                                                "optional": false
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1043,
                                              "end": 1051,
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1045,
                                                "end": 1051
                                              }
                                            }
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1073,
                                            "end": 1094,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1074,
                                                "end": 1084,
                                                "name": "a",
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1076,
                                                  "end": 1084,
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1078,
                                                    "end": 1084
                                                  }
                                                },
                                                "decorators": [],
                                                "optional": true
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1085,
                                              "end": 1093,
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1087,
                                                "end": 1093
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1113,
                                  "end": 1123,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1115,
                                    "end": 1123,
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1115,
                                      "end": 1121
                                    }
                                  }
                                }
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1141,
                                "end": 1264,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1142,
                                    "end": 1251,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1143,
                                      "end": 1251,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 1145,
                                        "end": 1251,
                                        "members": [
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1167,
                                            "end": 1189,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1168,
                                                "end": 1178,
                                                "name": "a",
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1169,
                                                  "end": 1178,
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1171,
                                                    "end": 1178
                                                  }
                                                },
                                                "decorators": [],
                                                "optional": false
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1179,
                                              "end": 1188,
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1181,
                                                "end": 1188
                                              }
                                            }
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1210,
                                            "end": 1233,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1211,
                                                "end": 1222,
                                                "name": "a",
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1213,
                                                  "end": 1222,
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1215,
                                                    "end": 1222
                                                  }
                                                },
                                                "decorators": [],
                                                "optional": true
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1223,
                                              "end": 1232,
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1225,
                                                "end": 1232
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1252,
                                  "end": 1263,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1254,
                                    "end": 1263,
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1254,
                                      "end": 1261
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1288,
                  "end": 1606,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1292,
                      "end": 1605,
                      "id": {
                        "type": "Identifier",
                        "start": 1292,
                        "end": 1605,
                        "name": "a17",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1295,
                          "end": 1605,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1297,
                            "end": 1605,
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1315,
                                "end": 1444,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1316,
                                    "end": 1435,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1317,
                                      "end": 1435,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 1319,
                                        "end": 1435,
                                        "members": [
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1341,
                                            "end": 1370,
                                            "typeParameters": {
                                              "type": "TSTypeParameterDeclaration",
                                              "start": 1341,
                                              "end": 1360,
                                              "params": [
                                                {
                                                  "type": "TSTypeParameter",
                                                  "start": 1342,
                                                  "end": 1359,
                                                  "name": {
                                                    "type": "Identifier",
                                                    "start": 1342,
                                                    "end": 1343,
                                                    "name": "T",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "start": 1352,
                                                    "end": 1359,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1352,
                                                      "end": 1359,
                                                      "name": "Derived",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "typeArguments": null
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false
                                                }
                                              ]
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1361,
                                                "end": 1365,
                                                "name": "a",
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1362,
                                                  "end": 1365,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 1364,
                                                    "end": 1365,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1364,
                                                      "end": 1365,
                                                      "name": "T",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "typeArguments": null
                                                  }
                                                },
                                                "decorators": [],
                                                "optional": false
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1366,
                                              "end": 1369,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 1368,
                                                "end": 1369,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1368,
                                                  "end": 1369,
                                                  "name": "T",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeArguments": null
                                              }
                                            }
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1391,
                                            "end": 1417,
                                            "typeParameters": {
                                              "type": "TSTypeParameterDeclaration",
                                              "start": 1391,
                                              "end": 1407,
                                              "params": [
                                                {
                                                  "type": "TSTypeParameter",
                                                  "start": 1392,
                                                  "end": 1406,
                                                  "name": {
                                                    "type": "Identifier",
                                                    "start": 1392,
                                                    "end": 1393,
                                                    "name": "T",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "start": 1402,
                                                    "end": 1406,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1402,
                                                      "end": 1406,
                                                      "name": "Base",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "typeArguments": null
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false
                                                }
                                              ]
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1408,
                                                "end": 1412,
                                                "name": "a",
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1409,
                                                  "end": 1412,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 1411,
                                                    "end": 1412,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1411,
                                                      "end": 1412,
                                                      "name": "T",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "typeArguments": null
                                                  }
                                                },
                                                "decorators": [],
                                                "optional": false
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1413,
                                              "end": 1416,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 1415,
                                                "end": 1416,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1415,
                                                  "end": 1416,
                                                  "name": "T",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeArguments": null
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1436,
                                  "end": 1443,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1438,
                                    "end": 1443,
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1438,
                                      "end": 1441
                                    }
                                  }
                                }
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
                                "start": 1461,
                                "end": 1591,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1462,
                                    "end": 1582,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1463,
                                      "end": 1582,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 1465,
                                        "end": 1582,
                                        "members": [
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1487,
                                            "end": 1517,
                                            "typeParameters": {
                                              "type": "TSTypeParameterDeclaration",
                                              "start": 1487,
                                              "end": 1507,
                                              "params": [
                                                {
                                                  "type": "TSTypeParameter",
                                                  "start": 1488,
                                                  "end": 1506,
                                                  "name": {
                                                    "type": "Identifier",
                                                    "start": 1488,
                                                    "end": 1489,
                                                    "name": "T",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "start": 1498,
                                                    "end": 1506,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1498,
                                                      "end": 1506,
                                                      "name": "Derived2",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "typeArguments": null
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false
                                                }
                                              ]
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1508,
                                                "end": 1512,
                                                "name": "a",
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1509,
                                                  "end": 1512,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 1511,
                                                    "end": 1512,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1511,
                                                      "end": 1512,
                                                      "name": "T",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "typeArguments": null
                                                  }
                                                },
                                                "decorators": [],
                                                "optional": false
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1513,
                                              "end": 1516,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 1515,
                                                "end": 1516,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1515,
                                                  "end": 1516,
                                                  "name": "T",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeArguments": null
                                              }
                                            }
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "start": 1538,
                                            "end": 1564,
                                            "typeParameters": {
                                              "type": "TSTypeParameterDeclaration",
                                              "start": 1538,
                                              "end": 1554,
                                              "params": [
                                                {
                                                  "type": "TSTypeParameter",
                                                  "start": 1539,
                                                  "end": 1553,
                                                  "name": {
                                                    "type": "Identifier",
                                                    "start": 1539,
                                                    "end": 1540,
                                                    "name": "T",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "start": 1549,
                                                    "end": 1553,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1549,
                                                      "end": 1553,
                                                      "name": "Base",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "typeArguments": null
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false
                                                }
                                              ]
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 1555,
                                                "end": 1559,
                                                "name": "a",
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1556,
                                                  "end": 1559,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 1558,
                                                    "end": 1559,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 1558,
                                                      "end": 1559,
                                                      "name": "T",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "typeArguments": null
                                                  }
                                                },
                                                "decorators": [],
                                                "optional": false
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "start": 1560,
                                              "end": 1563,
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "start": 1562,
                                                "end": 1563,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 1562,
                                                  "end": 1563,
                                                  "name": "T",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeArguments": null
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1583,
                                  "end": 1590,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 1585,
                                    "end": 1590,
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1585,
                                      "end": 1588
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1616,
                  "end": 1644,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1620,
                      "end": 1643,
                      "id": {
                        "type": "Identifier",
                        "start": 1620,
                        "end": 1643,
                        "name": "b2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1622,
                          "end": 1643,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1624,
                            "end": 1643,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 1624,
                              "end": 1630,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1625,
                                  "end": 1626,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1625,
                                    "end": 1626,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1628,
                                  "end": 1629,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1628,
                                    "end": 1629,
                                    "name": "U",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              ]
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1631,
                                "end": 1635,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1632,
                                  "end": 1635,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1634,
                                    "end": 1635,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1634,
                                      "end": 1635,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1637,
                              "end": 1643,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 1640,
                                "end": 1643,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 1640,
                                  "end": 1641,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1640,
                                    "end": 1641,
                                    "name": "U",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1654,
                  "end": 1662,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1654,
                    "end": 1661,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1654,
                      "end": 1656,
                      "name": "a2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1659,
                      "end": 1661,
                      "name": "b2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1671,
                  "end": 1679,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1671,
                    "end": 1678,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1671,
                      "end": 1673,
                      "name": "b2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1676,
                      "end": 1678,
                      "name": "a2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1689,
                  "end": 1786,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1693,
                      "end": 1785,
                      "id": {
                        "type": "Identifier",
                        "start": 1693,
                        "end": 1785,
                        "name": "b7",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1695,
                          "end": 1785,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1697,
                            "end": 1785,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 1697,
                              "end": 1752,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1698,
                                  "end": 1712,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1698,
                                    "end": 1699,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 1708,
                                    "end": 1712,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1708,
                                      "end": 1712,
                                      "name": "Base",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1714,
                                  "end": 1731,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1714,
                                    "end": 1715,
                                    "name": "U",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 1724,
                                    "end": 1731,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1724,
                                      "end": 1731,
                                      "name": "Derived",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1733,
                                  "end": 1751,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1733,
                                    "end": 1734,
                                    "name": "V",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 1743,
                                    "end": 1751,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1743,
                                      "end": 1751,
                                      "name": "Derived2",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              ]
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1753,
                                "end": 1769,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1754,
                                  "end": 1769,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 1756,
                                    "end": 1769,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1757,
                                        "end": 1763,
                                        "name": "arg",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1760,
                                          "end": 1763,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 1762,
                                            "end": 1763,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1762,
                                              "end": 1763,
                                              "name": "T",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1765,
                                      "end": 1769,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1768,
                                        "end": 1769,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1768,
                                          "end": 1769,
                                          "name": "U",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1771,
                              "end": 1785,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 1774,
                                "end": 1785,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1775,
                                    "end": 1779,
                                    "name": "r",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1776,
                                      "end": 1779,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1778,
                                        "end": 1779,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1778,
                                          "end": 1779,
                                          "name": "T",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1781,
                                  "end": 1785,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1784,
                                    "end": 1785,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1784,
                                      "end": 1785,
                                      "name": "V",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1795,
                  "end": 1803,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1795,
                    "end": 1802,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1795,
                      "end": 1797,
                      "name": "a7",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1800,
                      "end": 1802,
                      "name": "b7",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1812,
                  "end": 1820,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1812,
                    "end": 1819,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1812,
                      "end": 1814,
                      "name": "b7",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1817,
                      "end": 1819,
                      "name": "a7",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1830,
                  "end": 1941,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1834,
                      "end": 1940,
                      "id": {
                        "type": "Identifier",
                        "start": 1834,
                        "end": 1940,
                        "name": "b8",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1836,
                          "end": 1940,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1838,
                            "end": 1940,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 1838,
                              "end": 1873,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1839,
                                  "end": 1853,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1839,
                                    "end": 1840,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 1849,
                                    "end": 1853,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1849,
                                      "end": 1853,
                                      "name": "Base",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1855,
                                  "end": 1872,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1855,
                                    "end": 1856,
                                    "name": "U",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 1865,
                                    "end": 1872,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1865,
                                      "end": 1872,
                                      "name": "Derived",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              ]
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1874,
                                "end": 1890,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1875,
                                  "end": 1890,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 1877,
                                    "end": 1890,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1878,
                                        "end": 1884,
                                        "name": "arg",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1881,
                                          "end": 1884,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 1883,
                                            "end": 1884,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 1883,
                                              "end": 1884,
                                              "name": "T",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1886,
                                      "end": 1890,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1889,
                                        "end": 1890,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1889,
                                          "end": 1890,
                                          "name": "U",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 1892,
                                "end": 1924,
                                "name": "y",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1893,
                                  "end": 1924,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 1895,
                                    "end": 1924,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 1896,
                                        "end": 1918,
                                        "name": "arg2",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 1900,
                                          "end": 1918,
                                          "typeAnnotation": {
                                            "type": "TSTypeLiteral",
                                            "start": 1902,
                                            "end": 1918,
                                            "members": [
                                              {
                                                "type": "TSPropertySignature",
                                                "start": 1904,
                                                "end": 1916,
                                                "computed": false,
                                                "optional": false,
                                                "readonly": false,
                                                "key": {
                                                  "type": "Identifier",
                                                  "start": 1904,
                                                  "end": 1907,
                                                  "name": "foo",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 1907,
                                                  "end": 1915,
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1909,
                                                    "end": 1915
                                                  }
                                                },
                                                "accessibility": null,
                                                "static": false
                                              }
                                            ]
                                          }
                                        },
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1920,
                                      "end": 1924,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1923,
                                        "end": 1924,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1923,
                                          "end": 1924,
                                          "name": "U",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1926,
                              "end": 1940,
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "start": 1929,
                                "end": 1940,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 1930,
                                    "end": 1934,
                                    "name": "r",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1931,
                                      "end": 1934,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 1933,
                                        "end": 1934,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1933,
                                          "end": 1934,
                                          "name": "T",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1936,
                                  "end": 1940,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1939,
                                    "end": 1940,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1939,
                                      "end": 1940,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1951,
                  "end": 1959,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1951,
                    "end": 1958,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1951,
                      "end": 1953,
                      "name": "a8",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1956,
                      "end": 1958,
                      "name": "b8",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2020,
                  "end": 2028,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2020,
                    "end": 2027,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2020,
                      "end": 2022,
                      "name": "b8",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2025,
                      "end": 2027,
                      "name": "a8",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2099,
                  "end": 2144,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2103,
                      "end": 2143,
                      "id": {
                        "type": "Identifier",
                        "start": 2103,
                        "end": 2143,
                        "name": "b10",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2106,
                          "end": 2143,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2108,
                            "end": 2143,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2108,
                              "end": 2127,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2109,
                                  "end": 2126,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2109,
                                    "end": 2110,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2119,
                                    "end": 2126,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2119,
                                      "end": 2126,
                                      "name": "Derived",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              ]
                            },
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 2128,
                                "end": 2137,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 2131,
                                  "end": 2132,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2132,
                                  "end": 2137,
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "start": 2134,
                                    "end": 2137,
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "start": 2134,
                                      "end": 2135,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2134,
                                        "end": 2135,
                                        "name": "T",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                },
                                "value": null
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2139,
                              "end": 2143,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2142,
                                "end": 2143,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2142,
                                  "end": 2143,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2154,
                  "end": 2164,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2154,
                    "end": 2163,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2154,
                      "end": 2157,
                      "name": "a10",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2160,
                      "end": 2163,
                      "name": "b10",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2173,
                  "end": 2183,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2173,
                    "end": 2182,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2173,
                      "end": 2176,
                      "name": "b10",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2179,
                      "end": 2182,
                      "name": "a10",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2193,
                  "end": 2239,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2197,
                      "end": 2238,
                      "id": {
                        "type": "Identifier",
                        "start": 2197,
                        "end": 2238,
                        "name": "b11",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2200,
                          "end": 2238,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2202,
                            "end": 2238,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2202,
                              "end": 2221,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2203,
                                  "end": 2220,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2203,
                                    "end": 2204,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2213,
                                    "end": 2220,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2213,
                                      "end": 2220,
                                      "name": "Derived",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              ]
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2222,
                                "end": 2226,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2223,
                                  "end": 2226,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2225,
                                    "end": 2226,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2225,
                                      "end": 2226,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 2228,
                                "end": 2232,
                                "name": "y",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2229,
                                  "end": 2232,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2231,
                                    "end": 2232,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2231,
                                      "end": 2232,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2234,
                              "end": 2238,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2237,
                                "end": 2238,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2237,
                                  "end": 2238,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2249,
                  "end": 2259,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2249,
                    "end": 2258,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2249,
                      "end": 2252,
                      "name": "a11",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2255,
                      "end": 2258,
                      "name": "b11",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2268,
                  "end": 2278,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2268,
                    "end": 2277,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2268,
                      "end": 2271,
                      "name": "b11",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2274,
                      "end": 2277,
                      "name": "a11",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2288,
                  "end": 2362,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2292,
                      "end": 2361,
                      "id": {
                        "type": "Identifier",
                        "start": 2292,
                        "end": 2361,
                        "name": "b12",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2295,
                          "end": 2361,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2297,
                            "end": 2361,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2297,
                              "end": 2324,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2298,
                                  "end": 2323,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2298,
                                    "end": 2299,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2308,
                                    "end": 2323,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2308,
                                      "end": 2313,
                                      "name": "Array",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 2313,
                                      "end": 2323,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 2314,
                                          "end": 2322,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2314,
                                            "end": 2322,
                                            "name": "Derived2",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      ]
                                    }
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              ]
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2325,
                                "end": 2339,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2326,
                                  "end": 2339,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2328,
                                    "end": 2339,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2328,
                                      "end": 2333,
                                      "name": "Array",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 2333,
                                      "end": 2339,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 2334,
                                          "end": 2338,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2334,
                                            "end": 2338,
                                            "name": "Base",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      ]
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 2341,
                                "end": 2355,
                                "name": "y",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2342,
                                  "end": 2355,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2344,
                                    "end": 2355,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2344,
                                      "end": 2349,
                                      "name": "Array",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 2349,
                                      "end": 2355,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 2350,
                                          "end": 2354,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 2350,
                                            "end": 2354,
                                            "name": "Base",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      ]
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2357,
                              "end": 2361,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2360,
                                "end": 2361,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2360,
                                  "end": 2361,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2372,
                  "end": 2382,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2372,
                    "end": 2381,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2372,
                      "end": 2375,
                      "name": "a12",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2378,
                      "end": 2381,
                      "name": "b12",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2391,
                  "end": 2401,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2391,
                    "end": 2400,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2391,
                      "end": 2394,
                      "name": "b12",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2397,
                      "end": 2400,
                      "name": "a12",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2411,
                  "end": 2448,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2415,
                      "end": 2447,
                      "id": {
                        "type": "Identifier",
                        "start": 2415,
                        "end": 2447,
                        "name": "b15",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2418,
                          "end": 2447,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2420,
                            "end": 2447,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2420,
                              "end": 2423,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2421,
                                  "end": 2422,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2421,
                                    "end": 2422,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              ]
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2424,
                                "end": 2441,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2425,
                                  "end": 2441,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 2427,
                                    "end": 2441,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 2429,
                                        "end": 2434,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2429,
                                          "end": 2430,
                                          "name": "a",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2430,
                                          "end": 2433,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2432,
                                            "end": 2433,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2432,
                                              "end": 2433,
                                              "name": "T",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 2435,
                                        "end": 2439,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2435,
                                          "end": 2436,
                                          "name": "b",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2436,
                                          "end": 2439,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2438,
                                            "end": 2439,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2438,
                                              "end": 2439,
                                              "name": "T",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      }
                                    ]
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2443,
                              "end": 2447,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2446,
                                "end": 2447,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2446,
                                  "end": 2447,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2458,
                  "end": 2468,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2458,
                    "end": 2467,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2458,
                      "end": 2461,
                      "name": "a15",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2464,
                      "end": 2467,
                      "name": "b15",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2477,
                  "end": 2487,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2477,
                    "end": 2486,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2477,
                      "end": 2480,
                      "name": "b15",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2483,
                      "end": 2486,
                      "name": "a15",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2497,
                  "end": 2553,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2501,
                      "end": 2552,
                      "id": {
                        "type": "Identifier",
                        "start": 2501,
                        "end": 2552,
                        "name": "b15a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2505,
                          "end": 2552,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2507,
                            "end": 2552,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2507,
                              "end": 2523,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2508,
                                  "end": 2522,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2508,
                                    "end": 2509,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 2518,
                                    "end": 2522,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2518,
                                      "end": 2522,
                                      "name": "Base",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              ]
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2524,
                                "end": 2541,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2525,
                                  "end": 2541,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 2527,
                                    "end": 2541,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 2529,
                                        "end": 2534,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2529,
                                          "end": 2530,
                                          "name": "a",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2530,
                                          "end": 2533,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2532,
                                            "end": 2533,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2532,
                                              "end": 2533,
                                              "name": "T",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 2535,
                                        "end": 2539,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 2535,
                                          "end": 2536,
                                          "name": "b",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2536,
                                          "end": 2539,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2538,
                                            "end": 2539,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2538,
                                              "end": 2539,
                                              "name": "T",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      }
                                    ]
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2543,
                              "end": 2552,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2546,
                                "end": 2552
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2563,
                  "end": 2574,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2563,
                    "end": 2573,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2563,
                      "end": 2566,
                      "name": "a15",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2569,
                      "end": 2573,
                      "name": "b15a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2583,
                  "end": 2594,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2583,
                    "end": 2593,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2583,
                      "end": 2587,
                      "name": "b15a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2590,
                      "end": 2593,
                      "name": "a15",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2604,
                  "end": 2640,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2608,
                      "end": 2639,
                      "id": {
                        "type": "Identifier",
                        "start": 2608,
                        "end": 2639,
                        "name": "b16",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2611,
                          "end": 2639,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2613,
                            "end": 2639,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2613,
                              "end": 2616,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2614,
                                  "end": 2615,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2614,
                                    "end": 2615,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              ]
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2617,
                                "end": 2631,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2618,
                                  "end": 2631,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 2620,
                                    "end": 2631,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 2621,
                                        "end": 2625,
                                        "name": "a",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2622,
                                          "end": 2625,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2624,
                                            "end": 2625,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2624,
                                              "end": 2625,
                                              "name": "T",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2627,
                                      "end": 2631,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2630,
                                        "end": 2631,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2630,
                                          "end": 2631,
                                          "name": "T",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2633,
                              "end": 2639,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 2636,
                                "end": 2639,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 2636,
                                  "end": 2637,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2636,
                                    "end": 2637,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2649,
                  "end": 2659,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2649,
                    "end": 2658,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2649,
                      "end": 2652,
                      "name": "a16",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2655,
                      "end": 2658,
                      "name": "b16",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2668,
                  "end": 2678,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2668,
                    "end": 2677,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2668,
                      "end": 2671,
                      "name": "b16",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2674,
                      "end": 2677,
                      "name": "a16",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2688,
                  "end": 2726,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2692,
                      "end": 2725,
                      "id": {
                        "type": "Identifier",
                        "start": 2692,
                        "end": 2725,
                        "name": "b17",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2695,
                          "end": 2725,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2697,
                            "end": 2725,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2697,
                              "end": 2700,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2698,
                                  "end": 2699,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2698,
                                    "end": 2699,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              ]
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2701,
                                "end": 2715,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2702,
                                  "end": 2715,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 2704,
                                    "end": 2715,
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 2705,
                                        "end": 2709,
                                        "name": "a",
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 2706,
                                          "end": 2709,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 2708,
                                            "end": 2709,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2708,
                                              "end": 2709,
                                              "name": "T",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 2711,
                                      "end": 2715,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 2714,
                                        "end": 2715,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 2714,
                                          "end": 2715,
                                          "name": "T",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2717,
                              "end": 2725,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 2720,
                                "end": 2725,
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 2720,
                                  "end": 2723
                                }
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2735,
                  "end": 2745,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2735,
                    "end": 2744,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2735,
                      "end": 2738,
                      "name": "a17",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2741,
                      "end": 2744,
                      "name": "b17",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2754,
                  "end": 2764,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2754,
                    "end": 2763,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2754,
                      "end": 2757,
                      "name": "b17",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2760,
                      "end": 2763,
                      "name": "a17",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 2776,
            "end": 3138,
            "id": {
              "type": "Identifier",
              "start": 2783,
              "end": 2814,
              "name": "WithGenericSignaturesInBaseType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 2815,
              "end": 3138,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2875,
                  "end": 2900,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2879,
                      "end": 2899,
                      "id": {
                        "type": "Identifier",
                        "start": 2879,
                        "end": 2899,
                        "name": "a2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2881,
                          "end": 2899,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2883,
                            "end": 2899,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2883,
                              "end": 2886,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2884,
                                  "end": 2885,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2884,
                                    "end": 2885,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              ]
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2887,
                                "end": 2891,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2888,
                                  "end": 2891,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2890,
                                    "end": 2891,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2890,
                                      "end": 2891,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2893,
                              "end": 2899,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 2896,
                                "end": 2899,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 2896,
                                  "end": 2897,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2896,
                                    "end": 2897,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 2909,
                  "end": 2939,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2913,
                      "end": 2938,
                      "id": {
                        "type": "Identifier",
                        "start": 2913,
                        "end": 2938,
                        "name": "b2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2915,
                          "end": 2938,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 2917,
                            "end": 2938,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 2917,
                              "end": 2920,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 2918,
                                  "end": 2919,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 2918,
                                    "end": 2919,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              ]
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 2921,
                                "end": 2925,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2922,
                                  "end": 2925,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2924,
                                    "end": 2925,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2924,
                                      "end": 2925,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 2927,
                              "end": 2938,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 2930,
                                "end": 2938,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 2930,
                                  "end": 2936
                                }
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2948,
                  "end": 2956,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2948,
                    "end": 2955,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2948,
                      "end": 2950,
                      "name": "a2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2953,
                      "end": 2955,
                      "name": "b2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2965,
                  "end": 2973,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2965,
                    "end": 2972,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2965,
                      "end": 2967,
                      "name": "b2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2970,
                      "end": 2972,
                      "name": "a2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3033,
                  "end": 3063,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3037,
                      "end": 3062,
                      "id": {
                        "type": "Identifier",
                        "start": 3037,
                        "end": 3062,
                        "name": "a3",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3039,
                          "end": 3062,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 3041,
                            "end": 3062,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3041,
                              "end": 3044,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3042,
                                  "end": 3043,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3042,
                                    "end": 3043,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              ]
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3045,
                                "end": 3049,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3046,
                                  "end": 3049,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3048,
                                    "end": 3049,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3048,
                                      "end": 3049,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3051,
                              "end": 3062,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3054,
                                "end": 3062,
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3054,
                                  "end": 3060
                                }
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3072,
                  "end": 3097,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3076,
                      "end": 3096,
                      "id": {
                        "type": "Identifier",
                        "start": 3076,
                        "end": 3096,
                        "name": "b3",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3078,
                          "end": 3096,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 3080,
                            "end": 3096,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 3080,
                              "end": 3083,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 3081,
                                  "end": 3082,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 3081,
                                    "end": 3082,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false
                                }
                              ]
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 3084,
                                "end": 3088,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 3085,
                                  "end": 3088,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 3087,
                                    "end": 3088,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3087,
                                      "end": 3088,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 3090,
                              "end": 3096,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 3093,
                                "end": 3096,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 3093,
                                  "end": 3094,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 3093,
                                    "end": 3094,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3107,
                  "end": 3115,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 3107,
                    "end": 3114,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 3107,
                      "end": 3109,
                      "name": "a3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3112,
                      "end": 3114,
                      "name": "b3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3124,
                  "end": 3132,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 3124,
                    "end": 3131,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 3124,
                      "end": 3126,
                      "name": "b3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3129,
                      "end": 3131,
                      "name": "a3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
