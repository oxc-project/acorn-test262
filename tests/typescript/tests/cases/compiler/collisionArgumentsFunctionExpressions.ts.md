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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 32
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 44,
                    "end": 50
                  },
                  "start": 42,
                  "end": 50
                },
                "start": 33,
                "end": 50
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 69
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 52,
                "end": 69
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 115
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 118,
                        "end": 120
                      },
                      "definite": false,
                      "start": 106,
                      "end": 120
                    }
                  ],
                  "declare": false,
                  "start": 102,
                  "end": 121
                }
              ],
              "start": 71,
              "end": 139
            },
            "expression": false,
            "start": 21,
            "end": 139
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f12",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 156
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 160,
                    "end": 166
                  },
                  "start": 158,
                  "end": 166
                },
                "start": 157,
                "end": 166
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 180
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 168,
                "end": 180
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 228,
                              "end": 231
                            },
                            "start": 228,
                            "end": 233
                          },
                          "start": 226,
                          "end": 233
                        },
                        "start": 217,
                        "end": 233
                      },
                      "init": null,
                      "definite": false,
                      "start": 217,
                      "end": 233
                    }
                  ],
                  "declare": false,
                  "start": 213,
                  "end": 234
                }
              ],
              "start": 182,
              "end": 252
            },
            "expression": false,
            "start": 144,
            "end": 252
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 275
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 287,
                    "end": 293
                  },
                  "start": 285,
                  "end": 293
                },
                "start": 276,
                "end": 293
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 321,
                        "end": 330
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 333,
                        "end": 335
                      },
                      "definite": false,
                      "start": 321,
                      "end": 335
                    }
                  ],
                  "declare": false,
                  "start": 317,
                  "end": 336
                }
              ],
              "start": 295,
              "end": 354
            },
            "expression": false,
            "start": 257,
            "end": 354
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 371
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 375,
                  "end": 389
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 372,
                "end": 389
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 405,
                        "end": 414
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 417,
                        "end": 419
                      },
                      "definite": false,
                      "start": 405,
                      "end": 419
                    }
                  ],
                  "declare": false,
                  "start": 401,
                  "end": 420
                }
              ],
              "start": 391,
              "end": 438
            },
            "expression": false,
            "start": 360,
            "end": 438
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 461
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
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 478,
                        "end": 487
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 490,
                        "end": 492
                      },
                      "definite": false,
                      "start": 478,
                      "end": 492
                    }
                  ],
                  "declare": false,
                  "start": 474,
                  "end": 493
                }
              ],
              "start": 464,
              "end": 511
            },
            "expression": false,
            "start": 443,
            "end": 511
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 528
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 540,
                    "end": 546
                  },
                  "start": 538,
                  "end": 546
                },
                "start": 529,
                "end": 546
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 555
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 548,
                "end": 555
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 517,
            "end": 557
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 596
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 608,
                    "end": 614
                  },
                  "start": 606,
                  "end": 614
                },
                "start": 597,
                "end": 614
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 623
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 616,
                "end": 623
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 585,
            "end": 625
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 664
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 676,
                    "end": 679
                  },
                  "start": 674,
                  "end": 679
                },
                "start": 665,
                "end": 679
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 688
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 681,
                "end": 688
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 724,
                            "end": 727
                          },
                          "start": 722,
                          "end": 727
                        },
                        "start": 713,
                        "end": 727
                      },
                      "init": null,
                      "definite": false,
                      "start": 713,
                      "end": 727
                    }
                  ],
                  "declare": false,
                  "start": 709,
                  "end": 728
                }
              ],
              "start": 690,
              "end": 746
            },
            "expression": false,
            "start": 653,
            "end": 746
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f42",
              "optional": false,
              "typeAnnotation": null,
              "start": 760,
              "end": 763
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 767,
                    "end": 773
                  },
                  "start": 765,
                  "end": 773
                },
                "start": 764,
                "end": 773
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 778,
                  "end": 787
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 775,
                "end": 787
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 751,
            "end": 789
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f42",
              "optional": false,
              "typeAnnotation": null,
              "start": 826,
              "end": 829
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 833,
                    "end": 839
                  },
                  "start": 831,
                  "end": 839
                },
                "start": 830,
                "end": 839
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 844,
                  "end": 853
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 841,
                "end": 853
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 817,
            "end": 855
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f42",
              "optional": false,
              "typeAnnotation": null,
              "start": 892,
              "end": 895
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 899,
                    "end": 902
                  },
                  "start": 897,
                  "end": 902
                },
                "start": 896,
                "end": 902
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 907,
                  "end": 916
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 904,
                "end": 916
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 952,
                              "end": 955
                            },
                            "start": 952,
                            "end": 957
                          },
                          "start": 950,
                          "end": 957
                        },
                        "start": 941,
                        "end": 957
                      },
                      "init": null,
                      "definite": false,
                      "start": 941,
                      "end": 957
                    }
                  ],
                  "declare": false,
                  "start": 937,
                  "end": 958
                }
              ],
              "start": 918,
              "end": 976
            },
            "expression": false,
            "start": 883,
            "end": 976
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 990,
              "end": 999
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1011,
                    "end": 1017
                  },
                  "start": 1009,
                  "end": 1017
                },
                "start": 1000,
                "end": 1017
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 981,
            "end": 1019
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1045,
              "end": 1054
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1066,
                    "end": 1072
                  },
                  "start": 1064,
                  "end": 1072
                },
                "start": 1055,
                "end": 1072
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 1036,
            "end": 1074
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1109
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1121,
                    "end": 1124
                  },
                  "start": 1119,
                  "end": 1124
                },
                "start": 1110,
                "end": 1124
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1163,
                            "end": 1166
                          },
                          "start": 1161,
                          "end": 1166
                        },
                        "start": 1152,
                        "end": 1166
                      },
                      "init": null,
                      "definite": false,
                      "start": 1152,
                      "end": 1166
                    }
                  ],
                  "declare": false,
                  "start": 1148,
                  "end": 1167
                }
              ],
              "start": 1126,
              "end": 1185
            },
            "expression": false,
            "start": 1091,
            "end": 1185
          }
        ],
        "start": 15,
        "end": 1187
      },
      "expression": false,
      "start": 0,
      "end": 1187
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1187
}
```
