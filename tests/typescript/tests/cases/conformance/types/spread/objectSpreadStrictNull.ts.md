__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "definiteBoolean",
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
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 37
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 39,
                      "end": 46
                    },
                    "start": 37,
                    "end": 46
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 35,
                  "end": 46
                }
              ],
              "start": 33,
              "end": 48
            },
            "start": 31,
            "end": 48
          },
          "start": 16,
          "end": 48
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "definiteString",
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
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 74
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 76,
                      "end": 82
                    },
                    "start": 74,
                    "end": 82
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 72,
                  "end": 82
                }
              ],
              "start": 70,
              "end": 84
            },
            "start": 68,
            "end": 84
          },
          "start": 54,
          "end": 84
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "optionalString",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 110
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 113,
                      "end": 119
                    },
                    "start": 111,
                    "end": 119
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 108,
                  "end": 119
                }
              ],
              "start": 106,
              "end": 121
            },
            "start": 104,
            "end": 121
          },
          "start": 90,
          "end": 121
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "optionalNumber",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 147
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 150,
                      "end": 156
                    },
                    "start": 148,
                    "end": 156
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 145,
                  "end": 156
                }
              ],
              "start": 143,
              "end": 158
            },
            "start": 141,
            "end": 158
          },
          "start": 127,
          "end": 158
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "undefinedString",
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
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 185
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 187,
                          "end": 193
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 196,
                          "end": 205
                        }
                      ],
                      "start": 187,
                      "end": 205
                    },
                    "start": 185,
                    "end": 205
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 183,
                  "end": 205
                }
              ],
              "start": 181,
              "end": 207
            },
            "start": 179,
            "end": 207
          },
          "start": 164,
          "end": 207
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "undefinedNumber",
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
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 234
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 236,
                          "end": 242
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 245,
                          "end": 254
                        }
                      ],
                      "start": 236,
                      "end": 254
                    },
                    "start": 234,
                    "end": 254
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 232,
                  "end": 254
                }
              ],
              "start": 230,
              "end": 256
            },
            "start": 228,
            "end": 256
          },
          "start": 213,
          "end": 256
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
                  "name": "optionalUnionStops",
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 306,
                            "end": 308
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 310,
                                  "end": 316
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 319,
                                  "end": 325
                                }
                              ],
                              "start": 310,
                              "end": 325
                            },
                            "start": 308,
                            "end": 325
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 306,
                          "end": 325
                        }
                      ],
                      "start": 304,
                      "end": 327
                    },
                    "start": 302,
                    "end": 327
                  },
                  "start": 284,
                  "end": 327
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 335,
                        "end": 350
                      },
                      "start": 332,
                      "end": 350
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 355,
                        "end": 369
                      },
                      "start": 352,
                      "end": 369
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 374,
                        "end": 388
                      },
                      "start": 371,
                      "end": 388
                    }
                  ],
                  "start": 330,
                  "end": 390
                },
                "definite": false,
                "start": 284,
                "end": 390
              }
            ],
            "declare": false,
            "start": 280,
            "end": 391
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
                  "name": "optionalUnionDuplicates",
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 427,
                            "end": 429
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 431,
                                  "end": 437
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 440,
                                  "end": 446
                                }
                              ],
                              "start": 431,
                              "end": 446
                            },
                            "start": 429,
                            "end": 446
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 427,
                          "end": 446
                        }
                      ],
                      "start": 425,
                      "end": 448
                    },
                    "start": 423,
                    "end": 448
                  },
                  "start": 400,
                  "end": 448
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 456,
                        "end": 471
                      },
                      "start": 453,
                      "end": 471
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 476,
                        "end": 490
                      },
                      "start": 473,
                      "end": 490
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 495,
                        "end": 509
                      },
                      "start": 492,
                      "end": 509
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 514,
                        "end": 528
                      },
                      "start": 511,
                      "end": 528
                    }
                  ],
                  "start": 451,
                  "end": 530
                },
                "definite": false,
                "start": 400,
                "end": 530
              }
            ],
            "declare": false,
            "start": 396,
            "end": 531
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
                  "name": "allOptional",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 555,
                            "end": 557
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 560,
                                  "end": 566
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 569,
                                  "end": 575
                                }
                              ],
                              "start": 560,
                              "end": 575
                            },
                            "start": 558,
                            "end": 575
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 555,
                          "end": 575
                        }
                      ],
                      "start": 553,
                      "end": 577
                    },
                    "start": 551,
                    "end": 577
                  },
                  "start": 540,
                  "end": 577
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 585,
                        "end": 599
                      },
                      "start": 582,
                      "end": 599
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 604,
                        "end": 618
                      },
                      "start": 601,
                      "end": 618
                    }
                  ],
                  "start": 580,
                  "end": 620
                },
                "definite": false,
                "start": 540,
                "end": 620
              }
            ],
            "declare": false,
            "start": 536,
            "end": 621
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
                  "name": "undefinedUnionStops",
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 671,
                            "end": 673
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 675,
                                  "end": 681
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 684,
                                  "end": 690
                                }
                              ],
                              "start": 675,
                              "end": 690
                            },
                            "start": 673,
                            "end": 690
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 671,
                          "end": 690
                        }
                      ],
                      "start": 669,
                      "end": 692
                    },
                    "start": 667,
                    "end": 692
                  },
                  "start": 648,
                  "end": 692
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 700,
                        "end": 715
                      },
                      "start": 697,
                      "end": 715
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 720,
                        "end": 734
                      },
                      "start": 717,
                      "end": 734
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefinedNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 739,
                        "end": 754
                      },
                      "start": 736,
                      "end": 754
                    }
                  ],
                  "start": 695,
                  "end": 756
                },
                "definite": false,
                "start": 648,
                "end": 756
              }
            ],
            "declare": false,
            "start": 644,
            "end": 757
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
                  "name": "undefinedUnionDuplicates",
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 794,
                            "end": 796
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 798,
                                  "end": 804
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 807,
                                  "end": 813
                                }
                              ],
                              "start": 798,
                              "end": 813
                            },
                            "start": 796,
                            "end": 813
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 794,
                          "end": 813
                        }
                      ],
                      "start": 792,
                      "end": 815
                    },
                    "start": 790,
                    "end": 815
                  },
                  "start": 766,
                  "end": 815
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 823,
                        "end": 838
                      },
                      "start": 820,
                      "end": 838
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 843,
                        "end": 857
                      },
                      "start": 840,
                      "end": 857
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefinedString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 862,
                        "end": 877
                      },
                      "start": 859,
                      "end": 877
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefinedNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 882,
                        "end": 897
                      },
                      "start": 879,
                      "end": 897
                    }
                  ],
                  "start": 818,
                  "end": 899
                },
                "definite": false,
                "start": 766,
                "end": 899
              }
            ],
            "declare": false,
            "start": 762,
            "end": 900
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
                  "name": "allUndefined",
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 925,
                            "end": 927
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 929,
                                  "end": 935
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 938,
                                  "end": 944
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 947,
                                  "end": 956
                                }
                              ],
                              "start": 929,
                              "end": 956
                            },
                            "start": 927,
                            "end": 956
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 925,
                          "end": 956
                        }
                      ],
                      "start": 923,
                      "end": 958
                    },
                    "start": 921,
                    "end": 958
                  },
                  "start": 909,
                  "end": 958
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefinedString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 966,
                        "end": 981
                      },
                      "start": 963,
                      "end": 981
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefinedNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 986,
                        "end": 1001
                      },
                      "start": 983,
                      "end": 1001
                    }
                  ],
                  "start": 961,
                  "end": 1003
                },
                "definite": false,
                "start": 909,
                "end": 1003
              }
            ],
            "declare": false,
            "start": 905,
            "end": 1004
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
                  "name": "undefinedWithOptionalContinues",
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1048,
                            "end": 1050
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1052,
                                  "end": 1058
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 1061,
                                  "end": 1067
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 1070,
                                  "end": 1077
                                }
                              ],
                              "start": 1052,
                              "end": 1077
                            },
                            "start": 1050,
                            "end": 1077
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1048,
                          "end": 1077
                        }
                      ],
                      "start": 1046,
                      "end": 1079
                    },
                    "start": 1044,
                    "end": 1079
                  },
                  "start": 1014,
                  "end": 1079
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1087,
                        "end": 1102
                      },
                      "start": 1084,
                      "end": 1102
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefinedString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1107,
                        "end": 1122
                      },
                      "start": 1104,
                      "end": 1122
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1127,
                        "end": 1141
                      },
                      "start": 1124,
                      "end": 1141
                    }
                  ],
                  "start": 1082,
                  "end": 1143
                },
                "definite": false,
                "start": 1014,
                "end": 1143
              }
            ],
            "declare": false,
            "start": 1010,
            "end": 1144
          }
        ],
        "start": 258,
        "end": 1146
      },
      "expression": false,
      "start": 0,
      "end": 1146
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Movie",
        "optional": false,
        "typeAnnotation": null,
        "start": 1153,
        "end": 1158
      },
      "typeParameters": null,
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
              "name": "title",
              "optional": false,
              "typeAnnotation": null,
              "start": 1167,
              "end": 1172
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1174,
                "end": 1180
              },
              "start": 1172,
              "end": 1180
            },
            "accessibility": null,
            "static": false,
            "start": 1167,
            "end": 1181
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "yearReleased",
              "optional": false,
              "typeAnnotation": null,
              "start": 1186,
              "end": 1198
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1200,
                "end": 1206
              },
              "start": 1198,
              "end": 1206
            },
            "accessibility": null,
            "static": false,
            "start": 1186,
            "end": 1207
          }
        ],
        "start": 1161,
        "end": 1209
      },
      "declare": false,
      "start": 1148,
      "end": 1209
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 1217,
            "end": 1218
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1223,
                  "end": 1228
                },
                "value": {
                  "type": "Literal",
                  "value": "The Matrix",
                  "raw": "\"The Matrix\"",
                  "start": 1230,
                  "end": 1242
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1223,
                "end": 1242
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yearReleased",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1244,
                  "end": 1256
                },
                "value": {
                  "type": "Literal",
                  "value": 1999,
                  "raw": "1999",
                  "start": 1258,
                  "end": 1262
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1244,
                "end": 1262
              }
            ],
            "start": 1221,
            "end": 1264
          },
          "definite": false,
          "start": 1217,
          "end": 1264
        }
      ],
      "declare": false,
      "start": 1211,
      "end": 1265
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
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
                  "name": "Movie",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1349,
                  "end": 1354
                },
                "typeArguments": null,
                "start": 1349,
                "end": 1354
              },
              "start": 1347,
              "end": 1354
            },
            "start": 1346,
            "end": 1354
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1362,
                  "end": 1363
                },
                "start": 1359,
                "end": 1363
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1365,
                  "end": 1370
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1372,
                  "end": 1381
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1365,
                "end": 1381
              }
            ],
            "start": 1357,
            "end": 1383
          },
          "definite": false,
          "start": 1346,
          "end": 1383
        }
      ],
      "declare": false,
      "start": 1340,
      "end": 1384
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fields",
        "optional": false,
        "typeAnnotation": null,
        "start": 1396,
        "end": 1402
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1409,
              "end": 1412
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1414,
                "end": 1420
              },
              "start": 1412,
              "end": 1420
            },
            "accessibility": null,
            "static": false,
            "start": 1409,
            "end": 1421
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
              "start": 1426,
              "end": 1429
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1431,
                "end": 1437
              },
              "start": 1429,
              "end": 1437
            },
            "accessibility": null,
            "static": false,
            "start": 1426,
            "end": 1438
          }
        ],
        "start": 1403,
        "end": 1440
      },
      "declare": false,
      "start": 1386,
      "end": 1440
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NearlyPartialFields",
        "optional": false,
        "typeAnnotation": null,
        "start": 1451,
        "end": 1470
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1477,
              "end": 1480
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1482,
                    "end": 1488
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1491,
                    "end": 1500
                  }
                ],
                "start": 1482,
                "end": 1500
              },
              "start": 1480,
              "end": 1500
            },
            "accessibility": null,
            "static": false,
            "start": 1477,
            "end": 1501
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
              "start": 1506,
              "end": 1509
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1511,
                    "end": 1517
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1520,
                    "end": 1529
                  }
                ],
                "start": 1511,
                "end": 1529
              },
              "start": 1509,
              "end": 1529
            },
            "accessibility": null,
            "static": false,
            "start": 1506,
            "end": 1530
          }
        ],
        "start": 1471,
        "end": 1532
      },
      "declare": false,
      "start": 1441,
      "end": 1532
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1542,
        "end": 1543
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fields",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fields",
                "optional": false,
                "typeAnnotation": null,
                "start": 1552,
                "end": 1558
              },
              "typeArguments": null,
              "start": 1552,
              "end": 1558
            },
            "start": 1550,
            "end": 1558
          },
          "start": 1544,
          "end": 1558
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "partialFields",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1575,
                "end": 1582
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1583,
                      "end": 1589
                    },
                    "typeArguments": null,
                    "start": 1583,
                    "end": 1589
                  }
                ],
                "start": 1582,
                "end": 1590
              },
              "start": 1575,
              "end": 1590
            },
            "start": 1573,
            "end": 1590
          },
          "start": 1560,
          "end": 1590
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "nearlyPartialFields",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NearlyPartialFields",
                "optional": false,
                "typeAnnotation": null,
                "start": 1613,
                "end": 1632
              },
              "typeArguments": null,
              "start": 1613,
              "end": 1632
            },
            "start": 1611,
            "end": 1632
          },
          "start": 1592,
          "end": 1632
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "fields",
                "optional": false,
                "typeAnnotation": null,
                "start": 1710,
                "end": 1716
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1724,
                      "end": 1730
                    },
                    "start": 1721,
                    "end": 1730
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "partialFields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1735,
                      "end": 1748
                    },
                    "start": 1732,
                    "end": 1748
                  }
                ],
                "start": 1719,
                "end": 1750
              },
              "start": 1710,
              "end": 1750
            },
            "directive": null,
            "start": 1710,
            "end": 1751
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "fields",
                "optional": false,
                "typeAnnotation": null,
                "start": 1802,
                "end": 1808
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1816,
                      "end": 1822
                    },
                    "start": 1813,
                    "end": 1822
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nearlyPartialFields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1827,
                      "end": 1846
                    },
                    "start": 1824,
                    "end": 1846
                  }
                ],
                "start": 1811,
                "end": 1848
              },
              "start": 1802,
              "end": 1848
            },
            "directive": null,
            "start": 1802,
            "end": 1849
          }
        ],
        "start": 1634,
        "end": 1851
      },
      "expression": false,
      "start": 1533,
      "end": 1851
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1851
}
```
