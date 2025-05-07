__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1851,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 1146,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 258,
        "end": 1146,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 280,
            "end": 391,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 284,
                "end": 390,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 327,
                  "decorators": [],
                  "name": "optionalUnionStops",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 302,
                    "end": 327,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 304,
                      "end": 327,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 306,
                          "end": 325,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 306,
                            "end": 308,
                            "decorators": [],
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 308,
                            "end": 325,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 310,
                              "end": 325,
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
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 330,
                  "end": 390,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 332,
                      "end": 350,
                      "argument": {
                        "type": "Identifier",
                        "start": 335,
                        "end": 350,
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 352,
                      "end": 369,
                      "argument": {
                        "type": "Identifier",
                        "start": 355,
                        "end": 369,
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 371,
                      "end": 388,
                      "argument": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 388,
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 396,
            "end": 531,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 400,
                "end": 530,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 448,
                  "decorators": [],
                  "name": "optionalUnionDuplicates",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 423,
                    "end": 448,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 425,
                      "end": 448,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 427,
                          "end": 446,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 427,
                            "end": 429,
                            "decorators": [],
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 429,
                            "end": 446,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 431,
                              "end": 446,
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
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 451,
                  "end": 530,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 453,
                      "end": 471,
                      "argument": {
                        "type": "Identifier",
                        "start": 456,
                        "end": 471,
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 473,
                      "end": 490,
                      "argument": {
                        "type": "Identifier",
                        "start": 476,
                        "end": 490,
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 492,
                      "end": 509,
                      "argument": {
                        "type": "Identifier",
                        "start": 495,
                        "end": 509,
                        "decorators": [],
                        "name": "optionalString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 511,
                      "end": 528,
                      "argument": {
                        "type": "Identifier",
                        "start": 514,
                        "end": 528,
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 536,
            "end": 621,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 540,
                "end": 620,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 577,
                  "decorators": [],
                  "name": "allOptional",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 551,
                    "end": 577,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 553,
                      "end": 577,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 555,
                          "end": 575,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 555,
                            "end": 557,
                            "decorators": [],
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 558,
                            "end": 575,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 560,
                              "end": 575,
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
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 580,
                  "end": 620,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 582,
                      "end": 599,
                      "argument": {
                        "type": "Identifier",
                        "start": 585,
                        "end": 599,
                        "decorators": [],
                        "name": "optionalString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 601,
                      "end": 618,
                      "argument": {
                        "type": "Identifier",
                        "start": 604,
                        "end": 618,
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 644,
            "end": 757,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 648,
                "end": 756,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 648,
                  "end": 692,
                  "decorators": [],
                  "name": "undefinedUnionStops",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 667,
                    "end": 692,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 669,
                      "end": 692,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 671,
                          "end": 690,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 671,
                            "end": 673,
                            "decorators": [],
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 673,
                            "end": 690,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 675,
                              "end": 690,
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
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 695,
                  "end": 756,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 697,
                      "end": 715,
                      "argument": {
                        "type": "Identifier",
                        "start": 700,
                        "end": 715,
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 717,
                      "end": 734,
                      "argument": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 734,
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 736,
                      "end": 754,
                      "argument": {
                        "type": "Identifier",
                        "start": 739,
                        "end": 754,
                        "decorators": [],
                        "name": "undefinedNumber",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 762,
            "end": 900,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 766,
                "end": 899,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 766,
                  "end": 815,
                  "decorators": [],
                  "name": "undefinedUnionDuplicates",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 790,
                    "end": 815,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 792,
                      "end": 815,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 794,
                          "end": 813,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 794,
                            "end": 796,
                            "decorators": [],
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 796,
                            "end": 813,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 798,
                              "end": 813,
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
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 818,
                  "end": 899,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 820,
                      "end": 838,
                      "argument": {
                        "type": "Identifier",
                        "start": 823,
                        "end": 838,
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 840,
                      "end": 857,
                      "argument": {
                        "type": "Identifier",
                        "start": 843,
                        "end": 857,
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 859,
                      "end": 877,
                      "argument": {
                        "type": "Identifier",
                        "start": 862,
                        "end": 877,
                        "decorators": [],
                        "name": "undefinedString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 879,
                      "end": 897,
                      "argument": {
                        "type": "Identifier",
                        "start": 882,
                        "end": 897,
                        "decorators": [],
                        "name": "undefinedNumber",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 905,
            "end": 1004,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 909,
                "end": 1003,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 909,
                  "end": 958,
                  "decorators": [],
                  "name": "allUndefined",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 921,
                    "end": 958,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 923,
                      "end": 958,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 925,
                          "end": 956,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 925,
                            "end": 927,
                            "decorators": [],
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 927,
                            "end": 956,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 929,
                              "end": 956,
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
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 961,
                  "end": 1003,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 963,
                      "end": 981,
                      "argument": {
                        "type": "Identifier",
                        "start": 966,
                        "end": 981,
                        "decorators": [],
                        "name": "undefinedString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 983,
                      "end": 1001,
                      "argument": {
                        "type": "Identifier",
                        "start": 986,
                        "end": 1001,
                        "decorators": [],
                        "name": "undefinedNumber",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 1010,
            "end": 1144,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1014,
                "end": 1143,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1014,
                  "end": 1079,
                  "decorators": [],
                  "name": "undefinedWithOptionalContinues",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1044,
                    "end": 1079,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1046,
                      "end": 1079,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1048,
                          "end": 1077,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1048,
                            "end": 1050,
                            "decorators": [],
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1050,
                            "end": 1077,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 1052,
                              "end": 1077,
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
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1082,
                  "end": 1143,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 1084,
                      "end": 1102,
                      "argument": {
                        "type": "Identifier",
                        "start": 1087,
                        "end": 1102,
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 1104,
                      "end": 1122,
                      "argument": {
                        "type": "Identifier",
                        "start": 1107,
                        "end": 1122,
                        "decorators": [],
                        "name": "undefinedString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 1124,
                      "end": 1141,
                      "argument": {
                        "type": "Identifier",
                        "start": 1127,
                        "end": 1141,
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 48,
          "decorators": [],
          "name": "definiteBoolean",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 48,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 33,
              "end": 48,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 35,
                  "end": 46,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 37,
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 37,
                    "end": 46,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 39,
                      "end": 46
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 54,
          "end": 84,
          "decorators": [],
          "name": "definiteString",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 68,
            "end": 84,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 70,
              "end": 84,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 72,
                  "end": 82,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 74,
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 74,
                    "end": 82,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 76,
                      "end": 82
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 90,
          "end": 121,
          "decorators": [],
          "name": "optionalString",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 121,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 106,
              "end": 121,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 108,
                  "end": 119,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 110,
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 111,
                    "end": 119,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 113,
                      "end": 119
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 127,
          "end": 158,
          "decorators": [],
          "name": "optionalNumber",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 141,
            "end": 158,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 143,
              "end": 158,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 145,
                  "end": 156,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 147,
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 148,
                    "end": 156,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 150,
                      "end": 156
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 164,
          "end": 207,
          "decorators": [],
          "name": "undefinedString",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 179,
            "end": 207,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 181,
              "end": 207,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 183,
                  "end": 205,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 185,
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 185,
                    "end": 205,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 187,
                      "end": 205,
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
                      ]
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 213,
          "end": 256,
          "decorators": [],
          "name": "undefinedNumber",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 228,
            "end": 256,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 230,
              "end": 256,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 232,
                  "end": 254,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 234,
                    "decorators": [],
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 234,
                    "end": 254,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 236,
                      "end": 254,
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
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1148,
      "end": 1209,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1153,
        "end": 1158,
        "decorators": [],
        "name": "Movie",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1161,
        "end": 1209,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1167,
            "end": 1181,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1167,
              "end": 1172,
              "decorators": [],
              "name": "title",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1172,
              "end": 1180,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1174,
                "end": 1180
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1186,
            "end": 1207,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1186,
              "end": 1198,
              "decorators": [],
              "name": "yearReleased",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1198,
              "end": 1206,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1200,
                "end": 1206
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1211,
      "end": 1265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1217,
          "end": 1264,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1217,
            "end": 1218,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1221,
            "end": 1264,
            "properties": [
              {
                "type": "Property",
                "start": 1223,
                "end": 1242,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1223,
                  "end": 1228,
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1230,
                  "end": 1242,
                  "raw": "\"The Matrix\"",
                  "value": "The Matrix",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 1244,
                "end": 1262,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1244,
                  "end": 1256,
                  "decorators": [],
                  "name": "yearReleased",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1258,
                  "end": 1262,
                  "raw": "1999",
                  "value": 1999,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1340,
      "end": 1384,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1346,
          "end": 1383,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1346,
            "end": 1354,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1347,
              "end": 1354,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1349,
                "end": 1354,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1349,
                  "end": 1354,
                  "decorators": [],
                  "name": "Movie",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1357,
            "end": 1383,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 1359,
                "end": 1363,
                "argument": {
                  "type": "Identifier",
                  "start": 1362,
                  "end": 1363,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 1365,
                "end": 1381,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1365,
                  "end": 1370,
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1372,
                  "end": 1381,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1386,
      "end": 1440,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1403,
        "end": 1440,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1409,
            "end": 1421,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1409,
              "end": 1412,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1412,
              "end": 1420,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1414,
                "end": 1420
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1426,
            "end": 1438,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1426,
              "end": 1429,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1429,
              "end": 1437,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1431,
                "end": 1437
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1396,
        "end": 1402,
        "decorators": [],
        "name": "Fields",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1441,
      "end": 1532,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1471,
        "end": 1532,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1477,
            "end": 1501,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1477,
              "end": 1480,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1480,
              "end": 1500,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1482,
                "end": 1500,
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
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1506,
            "end": 1530,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1506,
              "end": 1509,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1509,
              "end": 1529,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1511,
                "end": 1529,
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
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1451,
        "end": 1470,
        "decorators": [],
        "name": "NearlyPartialFields",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1533,
      "end": 1851,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1634,
        "end": 1851,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1710,
            "end": 1751,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1710,
              "end": 1750,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1710,
                "end": 1716,
                "decorators": [],
                "name": "fields",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 1719,
                "end": 1750,
                "properties": [
                  {
                    "type": "SpreadElement",
                    "start": 1721,
                    "end": 1730,
                    "argument": {
                      "type": "Identifier",
                      "start": 1724,
                      "end": 1730,
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "SpreadElement",
                    "start": 1732,
                    "end": 1748,
                    "argument": {
                      "type": "Identifier",
                      "start": 1735,
                      "end": 1748,
                      "decorators": [],
                      "name": "partialFields",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1802,
            "end": 1849,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1802,
              "end": 1848,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1802,
                "end": 1808,
                "decorators": [],
                "name": "fields",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 1811,
                "end": 1848,
                "properties": [
                  {
                    "type": "SpreadElement",
                    "start": 1813,
                    "end": 1822,
                    "argument": {
                      "type": "Identifier",
                      "start": 1816,
                      "end": 1822,
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "SpreadElement",
                    "start": 1824,
                    "end": 1846,
                    "argument": {
                      "type": "Identifier",
                      "start": 1827,
                      "end": 1846,
                      "decorators": [],
                      "name": "nearlyPartialFields",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1542,
        "end": 1543,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1544,
          "end": 1558,
          "decorators": [],
          "name": "fields",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1550,
            "end": 1558,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1552,
              "end": 1558,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1552,
                "end": 1558,
                "decorators": [],
                "name": "Fields",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1560,
          "end": 1590,
          "decorators": [],
          "name": "partialFields",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1573,
            "end": 1590,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1575,
              "end": 1590,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1582,
                "end": 1590,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1583,
                    "end": 1589,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1583,
                      "end": 1589,
                      "decorators": [],
                      "name": "Fields",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1575,
                "end": 1582,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1592,
          "end": 1632,
          "decorators": [],
          "name": "nearlyPartialFields",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1611,
            "end": 1632,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1613,
              "end": 1632,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1613,
                "end": 1632,
                "decorators": [],
                "name": "NearlyPartialFields",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
