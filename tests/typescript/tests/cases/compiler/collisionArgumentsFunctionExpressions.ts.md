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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 33,
                "end": 50,
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 42,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 44,
                    "end": 50
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 52,
                "end": 69,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 69,
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 71,
              "end": 139,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 102,
                  "end": 121,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 106,
                      "end": 120,
                      "id": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 115,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
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
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 144,
            "end": 252,
            "id": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "decorators": [],
              "name": "f12",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 157,
                "end": 166,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 158,
                  "end": 166,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 160,
                    "end": 166
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 168,
                "end": 180,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 180,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 182,
              "end": 252,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 213,
                  "end": 234,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 217,
                      "end": 233,
                      "id": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 233,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
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
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 257,
            "end": 354,
            "id": {
              "type": "Identifier",
              "start": 266,
              "end": 275,
              "decorators": [],
              "name": "f1NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 276,
                "end": 293,
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 285,
                  "end": 293,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 287,
                    "end": 293
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 295,
              "end": 354,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 317,
                  "end": 336,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 321,
                      "end": 335,
                      "id": {
                        "type": "Identifier",
                        "start": 321,
                        "end": 330,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
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
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 360,
            "end": 438,
            "id": {
              "type": "Identifier",
              "start": 369,
              "end": 371,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 372,
                "end": 389,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 375,
                  "end": 389,
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 391,
              "end": 438,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 401,
                  "end": 420,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 405,
                      "end": 419,
                      "id": {
                        "type": "Identifier",
                        "start": 405,
                        "end": 414,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
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
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 443,
            "end": 511,
            "id": {
              "type": "Identifier",
              "start": 452,
              "end": 461,
              "decorators": [],
              "name": "f3NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 464,
              "end": 511,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 474,
                  "end": 493,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 478,
                      "end": 492,
                      "id": {
                        "type": "Identifier",
                        "start": 478,
                        "end": 487,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
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
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 517,
            "end": 557,
            "id": {
              "type": "Identifier",
              "start": 526,
              "end": 528,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 529,
                "end": 546,
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 538,
                  "end": 546,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 540,
                    "end": 546
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 548,
                "end": 555,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 555,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 585,
            "end": 625,
            "id": {
              "type": "Identifier",
              "start": 594,
              "end": 596,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 597,
                "end": 614,
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 606,
                  "end": 614,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 608,
                    "end": 614
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 616,
                "end": 623,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 623,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 653,
            "end": 746,
            "id": {
              "type": "Identifier",
              "start": 662,
              "end": 664,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 665,
                "end": 679,
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 674,
                  "end": 679,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 676,
                    "end": 679
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 681,
                "end": 688,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 688,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 690,
              "end": 746,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 709,
                  "end": 728,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 713,
                      "end": 727,
                      "id": {
                        "type": "Identifier",
                        "start": 713,
                        "end": 727,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 722,
                          "end": 727,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 724,
                            "end": 727
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 751,
            "end": 789,
            "id": {
              "type": "Identifier",
              "start": 760,
              "end": 763,
              "decorators": [],
              "name": "f42",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 764,
                "end": 773,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 765,
                  "end": 773,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 767,
                    "end": 773
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 775,
                "end": 787,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 778,
                  "end": 787,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 817,
            "end": 855,
            "id": {
              "type": "Identifier",
              "start": 826,
              "end": 829,
              "decorators": [],
              "name": "f42",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 830,
                "end": 839,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 831,
                  "end": 839,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 833,
                    "end": 839
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 841,
                "end": 853,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 844,
                  "end": 853,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 883,
            "end": 976,
            "id": {
              "type": "Identifier",
              "start": 892,
              "end": 895,
              "decorators": [],
              "name": "f42",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 896,
                "end": 902,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 897,
                  "end": 902,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 899,
                    "end": 902
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 904,
                "end": 916,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 907,
                  "end": 916,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 918,
              "end": 976,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 937,
                  "end": 958,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 941,
                      "end": 957,
                      "id": {
                        "type": "Identifier",
                        "start": 941,
                        "end": 957,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
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
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 981,
            "end": 1019,
            "id": {
              "type": "Identifier",
              "start": 990,
              "end": 999,
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1000,
                "end": 1017,
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1009,
                  "end": 1017,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1011,
                    "end": 1017
                  }
                }
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 1036,
            "end": 1074,
            "id": {
              "type": "Identifier",
              "start": 1045,
              "end": 1054,
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1055,
                "end": 1072,
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1064,
                  "end": 1072,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1066,
                    "end": 1072
                  }
                }
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 1091,
            "end": 1185,
            "id": {
              "type": "Identifier",
              "start": 1100,
              "end": 1109,
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1110,
                "end": 1124,
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1119,
                  "end": 1124,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1121,
                    "end": 1124
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1126,
              "end": 1185,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1148,
                  "end": 1167,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1152,
                      "end": 1166,
                      "id": {
                        "type": "Identifier",
                        "start": 1152,
                        "end": 1166,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1161,
                          "end": 1166,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1163,
                            "end": 1166
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
