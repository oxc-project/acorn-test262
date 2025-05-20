__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2145,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 32,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 32,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 26,
                "end": 32
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 66,
            "decorators": [],
            "name": "strOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 66,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 51,
                "end": 66,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 51,
                    "end": 57
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 60,
                    "end": 66
                  }
                ]
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 69,
            "end": 79,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 76,
              "end": 79,
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 109,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 109,
            "decorators": [],
            "name": "objStr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 93,
                "end": 109,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 95,
                    "end": 107,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 99,
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 99,
                      "end": 107,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 101,
                        "end": 107
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 139,
            "decorators": [],
            "name": "objNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 123,
                "end": 139,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 125,
                    "end": 137,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 129,
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 129,
                      "end": 137,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 131,
                        "end": 137
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 141,
      "end": 214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 213,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 194,
            "decorators": [],
            "name": "objStrOrNum1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 194,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 159,
                "end": 194,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 159,
                    "end": 175,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 161,
                        "end": 173,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 161,
                          "end": 165,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 165,
                          "end": 173,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 167,
                            "end": 173
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 178,
                    "end": 194,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 180,
                        "end": 192,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 180,
                          "end": 184,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 184,
                          "end": 192,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 186,
                            "end": 192
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 197,
            "end": 213,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 197,
              "end": 203,
              "decorators": [],
              "name": "objStr",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 207,
              "end": 213,
              "decorators": [],
              "name": "objNum",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 215,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 277,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 258,
            "decorators": [],
            "name": "objStrOrNum2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 258,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 233,
                "end": 258,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 235,
                    "end": 256,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 235,
                      "end": 239,
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 239,
                      "end": 256,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 241,
                        "end": 256,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 241,
                            "end": 247
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 250,
                            "end": 256
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
            "type": "LogicalExpression",
            "start": 261,
            "end": 277,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 261,
              "end": 267,
              "decorators": [],
              "name": "objStr",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 271,
              "end": 277,
              "decorators": [],
              "name": "objNum",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 769,
      "end": 851,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 773,
          "end": 850,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 773,
            "end": 822,
            "decorators": [],
            "name": "objStrOrNum3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 785,
              "end": 822,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 787,
                "end": 822,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 787,
                    "end": 803,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 789,
                        "end": 801,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 789,
                          "end": 793,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 793,
                          "end": 801,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 795,
                            "end": 801
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 806,
                    "end": 822,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 808,
                        "end": 820,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 808,
                          "end": 812,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 812,
                          "end": 820,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 814,
                            "end": 820
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 825,
            "end": 850,
            "properties": [
              {
                "type": "Property",
                "start": 831,
                "end": 848,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 831,
                  "end": 835,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 837,
                  "end": 848,
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 852,
      "end": 924,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 856,
          "end": 923,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 856,
            "end": 895,
            "decorators": [],
            "name": "objStrOrNum4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 868,
              "end": 895,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 870,
                "end": 895,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 872,
                    "end": 893,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 872,
                      "end": 876,
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 876,
                      "end": 893,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 878,
                        "end": 893,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 878,
                            "end": 884
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 887,
                            "end": 893
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
            "start": 898,
            "end": 923,
            "properties": [
              {
                "type": "Property",
                "start": 904,
                "end": 921,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 904,
                  "end": 908,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 910,
                  "end": 921,
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 925,
      "end": 1022,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 929,
          "end": 1021,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 929,
            "end": 997,
            "decorators": [],
            "name": "objStrOrNum5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 941,
              "end": 997,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 943,
                "end": 997,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 943,
                    "end": 978,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 945,
                        "end": 958,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 945,
                          "end": 949,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 949,
                          "end": 957,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 951,
                            "end": 957
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 959,
                        "end": 976,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 959,
                          "end": 967,
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 967,
                          "end": 975,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 969,
                            "end": 975
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 981,
                    "end": 997,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 983,
                        "end": 995,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 983,
                          "end": 987,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 987,
                          "end": 995,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 989,
                            "end": 995
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1000,
            "end": 1021,
            "properties": [
              {
                "type": "Property",
                "start": 1002,
                "end": 1019,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1002,
                  "end": 1006,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1008,
                  "end": 1019,
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1023,
      "end": 1143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1027,
          "end": 1142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1027,
            "end": 1095,
            "decorators": [],
            "name": "objStrOrNum6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1039,
              "end": 1095,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1041,
                "end": 1095,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1041,
                    "end": 1076,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1043,
                        "end": 1056,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1043,
                          "end": 1047,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1047,
                          "end": 1055,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1049,
                            "end": 1055
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1057,
                        "end": 1074,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1057,
                          "end": 1065,
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1065,
                          "end": 1073,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1067,
                            "end": 1073
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1079,
                    "end": 1095,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1081,
                        "end": 1093,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1081,
                          "end": 1085,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
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
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1098,
            "end": 1142,
            "properties": [
              {
                "type": "Property",
                "start": 1104,
                "end": 1121,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1104,
                  "end": 1108,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1110,
                  "end": 1121,
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 1127,
                "end": 1140,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1127,
                  "end": 1135,
                  "decorators": [],
                  "name": "anotherP",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1137,
                  "end": 1140,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1144,
      "end": 1283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1148,
          "end": 1282,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1148,
            "end": 1235,
            "decorators": [],
            "name": "objStrOrNum7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1160,
              "end": 1235,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1162,
                "end": 1235,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1162,
                    "end": 1197,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1164,
                        "end": 1177,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1164,
                          "end": 1168,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1168,
                          "end": 1176,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1170,
                            "end": 1176
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1178,
                        "end": 1195,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1178,
                          "end": 1186,
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1186,
                          "end": 1194,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1188,
                            "end": 1194
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1200,
                    "end": 1235,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1202,
                        "end": 1215,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1202,
                          "end": 1206,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1206,
                          "end": 1214,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1208,
                            "end": 1214
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1216,
                        "end": 1233,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1216,
                          "end": 1225,
                          "decorators": [],
                          "name": "anotherP1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1225,
                          "end": 1233,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1227,
                            "end": 1233
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1238,
            "end": 1282,
            "properties": [
              {
                "type": "Property",
                "start": 1244,
                "end": 1261,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1244,
                  "end": 1248,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1250,
                  "end": 1261,
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 1267,
                "end": 1280,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1267,
                  "end": 1275,
                  "decorators": [],
                  "name": "anotherP",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1277,
                  "end": 1280,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1284,
      "end": 1443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1288,
          "end": 1442,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1288,
            "end": 1375,
            "decorators": [],
            "name": "objStrOrNum8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1300,
              "end": 1375,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1302,
                "end": 1375,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1302,
                    "end": 1337,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1304,
                        "end": 1317,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1304,
                          "end": 1308,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1308,
                          "end": 1316,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1310,
                            "end": 1316
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1318,
                        "end": 1335,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1318,
                          "end": 1326,
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1326,
                          "end": 1334,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1328,
                            "end": 1334
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1340,
                    "end": 1375,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1342,
                        "end": 1355,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1342,
                          "end": 1346,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1346,
                          "end": 1354,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1348,
                            "end": 1354
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1356,
                        "end": 1373,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1356,
                          "end": 1365,
                          "decorators": [],
                          "name": "anotherP1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1365,
                          "end": 1373,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1367,
                            "end": 1373
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1378,
            "end": 1442,
            "properties": [
              {
                "type": "Property",
                "start": 1384,
                "end": 1401,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1384,
                  "end": 1388,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1390,
                  "end": 1401,
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 1407,
                "end": 1420,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1407,
                  "end": 1415,
                  "decorators": [],
                  "name": "anotherP",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1417,
                  "end": 1420,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 1426,
                "end": 1440,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1426,
                  "end": 1435,
                  "decorators": [],
                  "name": "anotherP1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1437,
                  "end": 1440,
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1444,
      "end": 1528,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1458,
        "end": 1528,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1464,
            "end": 1526,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1464,
              "end": 1495,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1496,
                "end": 1505,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1497,
                  "end": 1505,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1499,
                    "end": 1505
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1507,
                "end": 1516,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1508,
                  "end": 1516,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1510,
                    "end": 1516
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1517,
              "end": 1525,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1519,
                "end": 1525
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1454,
        "end": 1457,
        "decorators": [],
        "name": "I11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1529,
      "end": 1613,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1543,
        "end": 1613,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1549,
            "end": 1611,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1549,
              "end": 1580,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1581,
                "end": 1590,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1582,
                  "end": 1590,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1584,
                    "end": 1590
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1592,
                "end": 1601,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1593,
                  "end": 1601,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1595,
                    "end": 1601
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1602,
              "end": 1610,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1604,
                "end": 1610
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1539,
        "end": 1542,
        "decorators": [],
        "name": "I21",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1614,
      "end": 1627,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1618,
          "end": 1626,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1618,
            "end": 1626,
            "decorators": [],
            "name": "i11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1621,
              "end": 1626,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1623,
                "end": 1626,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1623,
                  "end": 1626,
                  "decorators": [],
                  "name": "I11",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1628,
      "end": 1641,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1632,
          "end": 1640,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1632,
            "end": 1640,
            "decorators": [],
            "name": "i21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1635,
              "end": 1640,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1637,
                "end": 1640,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1637,
                  "end": 1640,
                  "decorators": [],
                  "name": "I21",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1642,
      "end": 1672,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1646,
          "end": 1671,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1646,
            "end": 1665,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1654,
              "end": 1665,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1656,
                "end": 1665,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1656,
                    "end": 1659,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1656,
                      "end": 1659,
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1662,
                    "end": 1665,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1662,
                      "end": 1665,
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1668,
            "end": 1671,
            "decorators": [],
            "name": "i11",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1673,
      "end": 1703,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1677,
          "end": 1702,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1677,
            "end": 1696,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1685,
              "end": 1696,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1687,
                "end": 1696,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1687,
                    "end": 1690,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1687,
                      "end": 1690,
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1693,
                    "end": 1696,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1693,
                      "end": 1696,
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1699,
            "end": 1702,
            "decorators": [],
            "name": "i21",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1704,
      "end": 1848,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1708,
          "end": 1847,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1708,
            "end": 1727,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1716,
              "end": 1727,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1718,
                "end": 1727,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1718,
                    "end": 1721,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1718,
                      "end": 1721,
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1724,
                    "end": 1727,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1724,
                      "end": 1727,
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1730,
            "end": 1847,
            "properties": [
              {
                "type": "Property",
                "start": 1747,
                "end": 1844,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1747,
                  "end": 1778,
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1780,
                  "end": 1844,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1790,
                    "end": 1844,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1800,
                        "end": 1820,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1804,
                            "end": 1819,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 1804,
                              "end": 1805,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 1808,
                              "end": 1819,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1817,
                                  "end": 1818,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1808,
                                "end": 1816,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1808,
                                  "end": 1809,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1810,
                                  "end": 1816,
                                  "decorators": [],
                                  "name": "charAt",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1829,
                        "end": 1838,
                        "argument": {
                          "type": "Identifier",
                          "start": 1836,
                          "end": 1837,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1781,
                      "end": 1782,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1784,
                      "end": 1785,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1849,
      "end": 1997,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1853,
          "end": 1996,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1853,
            "end": 1872,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1861,
              "end": 1872,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1863,
                "end": 1872,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1863,
                    "end": 1866,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1863,
                      "end": 1866,
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1869,
                    "end": 1872,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1869,
                      "end": 1872,
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1875,
            "end": 1996,
            "properties": [
              {
                "type": "Property",
                "start": 1892,
                "end": 1993,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1892,
                  "end": 1923,
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1925,
                  "end": 1993,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1935,
                    "end": 1993,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1945,
                        "end": 1969,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1949,
                            "end": 1968,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 1949,
                              "end": 1950,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 1953,
                              "end": 1968,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1966,
                                  "end": 1967,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1953,
                                "end": 1965,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1953,
                                  "end": 1954,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1955,
                                  "end": 1965,
                                  "decorators": [],
                                  "name": "charCodeAt",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1978,
                        "end": 1987,
                        "argument": {
                          "type": "Identifier",
                          "start": 1985,
                          "end": 1986,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1926,
                      "end": 1927,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 1929,
                      "end": 1930,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1998,
      "end": 2031,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2002,
          "end": 2030,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2002,
            "end": 2030,
            "decorators": [],
            "name": "strOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2013,
              "end": 2030,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2015,
                "end": 2030,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2015,
                    "end": 2021
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2024,
                    "end": 2030
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2032,
      "end": 2145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2036,
          "end": 2144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2036,
            "end": 2055,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2044,
              "end": 2055,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2046,
                "end": 2055,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2046,
                    "end": 2049,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2046,
                      "end": 2049,
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2052,
                    "end": 2055,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2052,
                      "end": 2055,
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2058,
            "end": 2144,
            "properties": [
              {
                "type": "Property",
                "start": 2087,
                "end": 2141,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2087,
                  "end": 2118,
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2120,
                  "end": 2141,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 2130,
                    "end": 2141,
                    "decorators": [],
                    "name": "strOrNumber",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2121,
                      "end": 2122,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2124,
                      "end": 2125,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
