__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1187,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 1187,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 1187,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 21,
            "end": 139,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 32,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 33,
                "end": 50,
                "name": "arguments",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 42,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 44,
                    "end": 50
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 52,
                "end": 69,
                "argument": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 69,
                  "name": "restParameters",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 71,
              "end": 139,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 102,
                  "end": 121,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 106,
                      "end": 120,
                      "id": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 115,
                        "name": "arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 118,
                        "end": 120,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 144,
            "end": 252,
            "id": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "name": "f12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 157,
                "end": 166,
                "name": "i",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 158,
                  "end": 166,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 160,
                    "end": 166
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 168,
                "end": 180,
                "argument": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 180,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 182,
              "end": 252,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 213,
                  "end": 234,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 217,
                      "end": 233,
                      "id": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 233,
                        "name": "arguments",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 226,
                          "end": 233,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 228,
                            "end": 233,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 228,
                              "end": 231
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
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 257,
            "end": 354,
            "id": {
              "type": "Identifier",
              "start": 266,
              "end": 275,
              "name": "f1NoError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 276,
                "end": 293,
                "name": "arguments",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 285,
                  "end": 293,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 287,
                    "end": 293
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 295,
              "end": 354,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 317,
                  "end": 336,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 321,
                      "end": 335,
                      "id": {
                        "type": "Identifier",
                        "start": 321,
                        "end": 330,
                        "name": "arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 333,
                        "end": 335,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 360,
            "end": 438,
            "id": {
              "type": "Identifier",
              "start": 369,
              "end": 371,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "RestElement",
                "start": 372,
                "end": 389,
                "argument": {
                  "type": "Identifier",
                  "start": 375,
                  "end": 389,
                  "name": "restParameters",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 391,
              "end": 438,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 401,
                  "end": 420,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 405,
                      "end": 419,
                      "id": {
                        "type": "Identifier",
                        "start": 405,
                        "end": 414,
                        "name": "arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 417,
                        "end": 419,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 443,
            "end": 511,
            "id": {
              "type": "Identifier",
              "start": 452,
              "end": 461,
              "name": "f3NoError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 464,
              "end": 511,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 474,
                  "end": 493,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 478,
                      "end": 492,
                      "id": {
                        "type": "Identifier",
                        "start": 478,
                        "end": 487,
                        "name": "arguments",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 490,
                        "end": 492,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 517,
            "end": 557,
            "id": {
              "type": "Identifier",
              "start": 526,
              "end": 528,
              "name": "f4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 529,
                "end": 546,
                "name": "arguments",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 538,
                  "end": 546,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 540,
                    "end": 546
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 548,
                "end": 555,
                "argument": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 555,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 585,
            "end": 625,
            "id": {
              "type": "Identifier",
              "start": 594,
              "end": 596,
              "name": "f4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 597,
                "end": 614,
                "name": "arguments",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 606,
                  "end": 614,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 608,
                    "end": 614
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 616,
                "end": 623,
                "argument": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 623,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 653,
            "end": 746,
            "id": {
              "type": "Identifier",
              "start": 662,
              "end": 664,
              "name": "f4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 665,
                "end": 679,
                "name": "arguments",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 674,
                  "end": 679,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 676,
                    "end": 679
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 681,
                "end": 688,
                "argument": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 688,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 690,
              "end": 746,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 709,
                  "end": 728,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 713,
                      "end": 727,
                      "id": {
                        "type": "Identifier",
                        "start": 713,
                        "end": 727,
                        "name": "arguments",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 722,
                          "end": 727,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 724,
                            "end": 727
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
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 751,
            "end": 789,
            "id": {
              "type": "Identifier",
              "start": 760,
              "end": 763,
              "name": "f42",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 764,
                "end": 773,
                "name": "i",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 765,
                  "end": 773,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 767,
                    "end": 773
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 775,
                "end": 787,
                "argument": {
                  "type": "Identifier",
                  "start": 778,
                  "end": 787,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 817,
            "end": 855,
            "id": {
              "type": "Identifier",
              "start": 826,
              "end": 829,
              "name": "f42",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 830,
                "end": 839,
                "name": "i",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 831,
                  "end": 839,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 833,
                    "end": 839
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 841,
                "end": 853,
                "argument": {
                  "type": "Identifier",
                  "start": 844,
                  "end": 853,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 883,
            "end": 976,
            "id": {
              "type": "Identifier",
              "start": 892,
              "end": 895,
              "name": "f42",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 896,
                "end": 902,
                "name": "i",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 897,
                  "end": 902,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 899,
                    "end": 902
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 904,
                "end": 916,
                "argument": {
                  "type": "Identifier",
                  "start": 907,
                  "end": 916,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 918,
              "end": 976,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 937,
                  "end": 958,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 941,
                      "end": 957,
                      "id": {
                        "type": "Identifier",
                        "start": 941,
                        "end": 957,
                        "name": "arguments",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 950,
                          "end": 957,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 952,
                            "end": 957,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 952,
                              "end": 955
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
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 981,
            "end": 1019,
            "id": {
              "type": "Identifier",
              "start": 990,
              "end": 999,
              "name": "f4NoError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1000,
                "end": 1017,
                "name": "arguments",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1009,
                  "end": 1017,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1011,
                    "end": 1017
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 1036,
            "end": 1074,
            "id": {
              "type": "Identifier",
              "start": 1045,
              "end": 1054,
              "name": "f4NoError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1055,
                "end": 1072,
                "name": "arguments",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1064,
                  "end": 1072,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1066,
                    "end": 1072
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 1091,
            "end": 1185,
            "id": {
              "type": "Identifier",
              "start": 1100,
              "end": 1109,
              "name": "f4NoError",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1110,
                "end": 1124,
                "name": "arguments",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1119,
                  "end": 1124,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1121,
                    "end": 1124
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 1126,
              "end": 1185,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1148,
                  "end": 1167,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1152,
                      "end": 1166,
                      "id": {
                        "type": "Identifier",
                        "start": 1152,
                        "end": 1166,
                        "name": "arguments",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1161,
                          "end": 1166,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1163,
                            "end": 1166
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
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
