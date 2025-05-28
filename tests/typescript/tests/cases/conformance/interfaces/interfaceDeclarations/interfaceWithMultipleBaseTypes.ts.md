__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 149,
  "end": 1140,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 149,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 164,
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 165,
        "end": 202,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 171,
            "end": 200,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 200,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 174,
                "end": 200,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 184,
                    "end": 194,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 185,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 185,
                      "end": 193,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 187,
                        "end": 193
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 204,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 219,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 220,
        "end": 257,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 226,
            "end": 255,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 226,
              "end": 227,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 255,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 229,
                "end": 255,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 239,
                    "end": 249,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 240,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 240,
                      "end": 248,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 242,
                        "end": 248
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 259,
      "end": 346,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 276,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 285,
          "end": 290,
          "expression": {
            "type": "Identifier",
            "start": 285,
            "end": 290,
            "decorators": [],
            "name": "Base1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 292,
          "end": 297,
          "expression": {
            "type": "Identifier",
            "start": 292,
            "end": 297,
            "decorators": [],
            "name": "Base2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 298,
        "end": 346,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 304,
            "end": 344,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 304,
              "end": 305,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 305,
              "end": 344,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 307,
                "end": 344,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 317,
                    "end": 327,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 317,
                      "end": 318,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 318,
                      "end": 326,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 320,
                        "end": 326
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 328,
                    "end": 338,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 328,
                      "end": 329,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 329,
                      "end": 337,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 331,
                        "end": 337
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 348,
      "end": 445,
      "id": {
        "type": "Identifier",
        "start": 358,
        "end": 366,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 375,
          "end": 380,
          "expression": {
            "type": "Identifier",
            "start": 375,
            "end": 380,
            "decorators": [],
            "name": "Base1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 382,
          "end": 387,
          "expression": {
            "type": "Identifier",
            "start": 382,
            "end": 387,
            "decorators": [],
            "name": "Base2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 388,
        "end": 445,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 403,
            "end": 443,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 403,
              "end": 404,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 404,
              "end": 443,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 406,
                "end": 443,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 416,
                    "end": 426,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 417,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 417,
                      "end": 425,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 419,
                        "end": 425
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 427,
                    "end": 437,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 428,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 428,
                      "end": 436,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 430,
                        "end": 436
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 447,
      "end": 1140,
      "id": {
        "type": "Identifier",
        "start": 454,
        "end": 461,
        "decorators": [],
        "name": "Generic",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 462,
        "end": 1140,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 468,
            "end": 535,
            "id": {
              "type": "Identifier",
              "start": 478,
              "end": 483,
              "decorators": [],
              "name": "Base1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 483,
              "end": 486,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 484,
                  "end": 485,
                  "name": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 485,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 487,
              "end": 535,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 497,
                  "end": 529,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 497,
                    "end": 498,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 498,
                    "end": 529,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 500,
                      "end": 529,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 514,
                          "end": 519,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 514,
                            "end": 515,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 515,
                            "end": 518,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 517,
                              "end": 518,
                              "typeName": {
                                "type": "Identifier",
                                "start": 517,
                                "end": 518,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
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
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 541,
            "end": 608,
            "id": {
              "type": "Identifier",
              "start": 551,
              "end": 556,
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 556,
              "end": 559,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 557,
                  "end": 558,
                  "name": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 558,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 560,
              "end": 608,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 570,
                  "end": 602,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 570,
                    "end": 571,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 571,
                    "end": 602,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 573,
                      "end": 602,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 587,
                          "end": 592,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 587,
                            "end": 588,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 588,
                            "end": 591,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 590,
                              "end": 591,
                              "typeName": {
                                "type": "Identifier",
                                "start": 590,
                                "end": 591,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
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
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 614,
            "end": 736,
            "id": {
              "type": "Identifier",
              "start": 624,
              "end": 631,
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 631,
              "end": 634,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 632,
                  "end": 633,
                  "name": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 633,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 643,
                "end": 656,
                "expression": {
                  "type": "Identifier",
                  "start": 643,
                  "end": 648,
                  "decorators": [],
                  "name": "Base1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 648,
                  "end": 656,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 649,
                      "end": 655
                    }
                  ]
                }
              },
              {
                "type": "TSInterfaceHeritage",
                "start": 658,
                "end": 671,
                "expression": {
                  "type": "Identifier",
                  "start": 658,
                  "end": 663,
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 663,
                  "end": 671,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 664,
                      "end": 670
                    }
                  ]
                }
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 672,
              "end": 736,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 682,
                  "end": 730,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 682,
                    "end": 683,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 683,
                    "end": 730,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 685,
                      "end": 730,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 699,
                          "end": 709,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 699,
                            "end": 700,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 700,
                            "end": 708,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 702,
                              "end": 708
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 710,
                          "end": 720,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 710,
                            "end": 711,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 711,
                            "end": 719,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 713,
                              "end": 719
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 742,
            "end": 848,
            "id": {
              "type": "Identifier",
              "start": 752,
              "end": 760,
              "decorators": [],
              "name": "Derived2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 760,
              "end": 766,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 761,
                  "end": 762,
                  "name": {
                    "type": "Identifier",
                    "start": 761,
                    "end": 762,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 764,
                  "end": 765,
                  "name": {
                    "type": "Identifier",
                    "start": 764,
                    "end": 765,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 775,
                "end": 783,
                "expression": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 780,
                  "decorators": [],
                  "name": "Base1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 780,
                  "end": 783,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 781,
                      "end": 782,
                      "typeName": {
                        "type": "Identifier",
                        "start": 781,
                        "end": 782,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              {
                "type": "TSInterfaceHeritage",
                "start": 785,
                "end": 793,
                "expression": {
                  "type": "Identifier",
                  "start": 785,
                  "end": 790,
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 790,
                  "end": 793,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 791,
                      "end": 792,
                      "typeName": {
                        "type": "Identifier",
                        "start": 791,
                        "end": 792,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 794,
              "end": 848,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 804,
                  "end": 842,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 804,
                    "end": 805,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 805,
                    "end": 842,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 807,
                      "end": 842,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 821,
                          "end": 826,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 821,
                            "end": 822,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 822,
                            "end": 825,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 824,
                              "end": 825,
                              "typeName": {
                                "type": "Identifier",
                                "start": 824,
                                "end": 825,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 827,
                          "end": 832,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 827,
                            "end": 828,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 828,
                            "end": 831,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 830,
                              "end": 831,
                              "typeName": {
                                "type": "Identifier",
                                "start": 830,
                                "end": 831,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
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
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 854,
            "end": 916,
            "id": {
              "type": "Identifier",
              "start": 864,
              "end": 872,
              "decorators": [],
              "name": "Derived3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 872,
              "end": 875,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 873,
                  "end": 874,
                  "name": {
                    "type": "Identifier",
                    "start": 873,
                    "end": 874,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 884,
                "end": 897,
                "expression": {
                  "type": "Identifier",
                  "start": 884,
                  "end": 889,
                  "decorators": [],
                  "name": "Base1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 889,
                  "end": 897,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 890,
                      "end": 896
                    }
                  ]
                }
              },
              {
                "type": "TSInterfaceHeritage",
                "start": 899,
                "end": 912,
                "expression": {
                  "type": "Identifier",
                  "start": 899,
                  "end": 904,
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 904,
                  "end": 912,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 905,
                      "end": 911
                    }
                  ]
                }
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 913,
              "end": 916,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 931,
            "end": 1053,
            "id": {
              "type": "Identifier",
              "start": 941,
              "end": 949,
              "decorators": [],
              "name": "Derived4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 949,
              "end": 952,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 950,
                  "end": 951,
                  "name": {
                    "type": "Identifier",
                    "start": 950,
                    "end": 951,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 961,
                "end": 974,
                "expression": {
                  "type": "Identifier",
                  "start": 961,
                  "end": 966,
                  "decorators": [],
                  "name": "Base1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 966,
                  "end": 974,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 967,
                      "end": 973
                    }
                  ]
                }
              },
              {
                "type": "TSInterfaceHeritage",
                "start": 976,
                "end": 989,
                "expression": {
                  "type": "Identifier",
                  "start": 976,
                  "end": 981,
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 981,
                  "end": 989,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 982,
                      "end": 988
                    }
                  ]
                }
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 990,
              "end": 1053,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1009,
                  "end": 1047,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1009,
                    "end": 1010,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1010,
                    "end": 1047,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1012,
                      "end": 1047,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1026,
                          "end": 1031,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1026,
                            "end": 1027,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1027,
                            "end": 1030,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1029,
                              "end": 1030,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1029,
                                "end": 1030,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 1032,
                          "end": 1037,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1032,
                            "end": 1033,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1033,
                            "end": 1036,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1035,
                              "end": 1036,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1035,
                                "end": 1036,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
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
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1059,
            "end": 1138,
            "id": {
              "type": "Identifier",
              "start": 1069,
              "end": 1077,
              "decorators": [],
              "name": "Derived5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1077,
              "end": 1080,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1078,
                  "end": 1079,
                  "name": {
                    "type": "Identifier",
                    "start": 1078,
                    "end": 1079,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1089,
                "end": 1097,
                "expression": {
                  "type": "Identifier",
                  "start": 1089,
                  "end": 1094,
                  "decorators": [],
                  "name": "Base1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1094,
                  "end": 1097,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1095,
                      "end": 1096,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1095,
                        "end": 1096,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              {
                "type": "TSInterfaceHeritage",
                "start": 1099,
                "end": 1107,
                "expression": {
                  "type": "Identifier",
                  "start": 1099,
                  "end": 1104,
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1104,
                  "end": 1107,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1105,
                      "end": 1106,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1105,
                        "end": 1106,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 1108,
              "end": 1138,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1127,
                  "end": 1132,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1127,
                    "end": 1128,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1128,
                    "end": 1131,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1130,
                      "end": 1131,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1130,
                        "end": 1131,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
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
