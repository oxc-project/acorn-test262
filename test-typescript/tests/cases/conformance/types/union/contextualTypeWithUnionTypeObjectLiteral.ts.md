contextualTypeWithUnionTypeObjectLiteral.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 2146,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 16,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 16,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 10,
                "end": 16
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
      "start": 18,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 33,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 33,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
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
      "start": 35,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 67,
            "decorators": [],
            "name": "strOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 67,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 52,
                "end": 67,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 52,
                    "end": 58
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 61,
                    "end": 67
                  }
                ]
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 70,
            "end": 80,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "decorators": [],
              "name": "str",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 77,
              "end": 80,
              "decorators": [],
              "name": "num",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 110,
            "decorators": [],
            "name": "objStr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 94,
                "end": 110,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 96,
                    "end": 108,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 100,
                      "decorators": [],
                      "name": "prop",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 108,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 102,
                        "end": 108
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
      "start": 112,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 140,
            "decorators": [],
            "name": "objNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 124,
                "end": 140,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 126,
                    "end": 138,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 130,
                      "decorators": [],
                      "name": "prop",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 130,
                      "end": 138,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 132,
                        "end": 138
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
      "start": 142,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 195,
            "decorators": [],
            "name": "objStrOrNum1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 195,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 160,
                "end": 195,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 160,
                    "end": 176,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 162,
                        "end": 174,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 166,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 166,
                          "end": 174,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 168,
                            "end": 174
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 179,
                    "end": 195,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 181,
                        "end": 193,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 185,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 185,
                          "end": 193,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 187,
                            "end": 193
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
            "start": 198,
            "end": 214,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 198,
              "end": 204,
              "decorators": [],
              "name": "objStr",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 208,
              "end": 214,
              "decorators": [],
              "name": "objNum",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 278,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 259,
            "decorators": [],
            "name": "objStrOrNum2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 232,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 234,
                "end": 259,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 236,
                    "end": 257,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 240,
                      "decorators": [],
                      "name": "prop",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 240,
                      "end": 257,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 242,
                        "end": 257,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 242,
                            "end": 248
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 251,
                            "end": 257
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
            "start": 262,
            "end": 278,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 262,
              "end": 268,
              "decorators": [],
              "name": "objStr",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 272,
              "end": 278,
              "decorators": [],
              "name": "objNum",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 770,
      "end": 852,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 774,
          "end": 851,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 774,
            "end": 823,
            "decorators": [],
            "name": "objStrOrNum3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 786,
              "end": 823,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 788,
                "end": 823,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 788,
                    "end": 804,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 790,
                        "end": 802,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 790,
                          "end": 794,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 794,
                          "end": 802,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 796,
                            "end": 802
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 807,
                    "end": 823,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 809,
                        "end": 821,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 809,
                          "end": 813,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 813,
                          "end": 821,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 815,
                            "end": 821
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
            "start": 826,
            "end": 851,
            "properties": [
              {
                "type": "Property",
                "start": 832,
                "end": 849,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 832,
                  "end": 836,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 838,
                  "end": 849,
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false
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
      "start": 853,
      "end": 925,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 857,
          "end": 924,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 857,
            "end": 896,
            "decorators": [],
            "name": "objStrOrNum4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 869,
              "end": 896,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 871,
                "end": 896,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 873,
                    "end": 894,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 873,
                      "end": 877,
                      "decorators": [],
                      "name": "prop",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 877,
                      "end": 894,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 879,
                        "end": 894,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 879,
                            "end": 885
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 888,
                            "end": 894
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
            "start": 899,
            "end": 924,
            "properties": [
              {
                "type": "Property",
                "start": 905,
                "end": 922,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 905,
                  "end": 909,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 911,
                  "end": 922,
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false
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
      "start": 926,
      "end": 1023,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 930,
          "end": 1022,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 930,
            "end": 998,
            "decorators": [],
            "name": "objStrOrNum5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 942,
              "end": 998,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 944,
                "end": 998,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 944,
                    "end": 979,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 946,
                        "end": 959,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 946,
                          "end": 950,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 950,
                          "end": 958,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 952,
                            "end": 958
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 960,
                        "end": 977,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 960,
                          "end": 968,
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 968,
                          "end": 976,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 970,
                            "end": 976
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 982,
                    "end": 998,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 984,
                        "end": 996,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 984,
                          "end": 988,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 988,
                          "end": 996,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 990,
                            "end": 996
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
            "start": 1001,
            "end": 1022,
            "properties": [
              {
                "type": "Property",
                "start": 1003,
                "end": 1020,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1003,
                  "end": 1007,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1009,
                  "end": 1020,
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false
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
      "start": 1024,
      "end": 1144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1028,
          "end": 1143,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1028,
            "end": 1096,
            "decorators": [],
            "name": "objStrOrNum6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1040,
              "end": 1096,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1042,
                "end": 1096,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1042,
                    "end": 1077,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1044,
                        "end": 1057,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1044,
                          "end": 1048,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1048,
                          "end": 1056,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1050,
                            "end": 1056
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1058,
                        "end": 1075,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1058,
                          "end": 1066,
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1066,
                          "end": 1074,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1068,
                            "end": 1074
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1080,
                    "end": 1096,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1082,
                        "end": 1094,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1082,
                          "end": 1086,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1086,
                          "end": 1094,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1088,
                            "end": 1094
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
            "start": 1099,
            "end": 1143,
            "properties": [
              {
                "type": "Property",
                "start": 1105,
                "end": 1122,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1105,
                  "end": 1109,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1111,
                  "end": 1122,
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 1128,
                "end": 1141,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1128,
                  "end": 1136,
                  "decorators": [],
                  "name": "anotherP",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1138,
                  "end": 1141,
                  "decorators": [],
                  "name": "str",
                  "optional": false
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
      "start": 1145,
      "end": 1284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1149,
          "end": 1283,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1149,
            "end": 1236,
            "decorators": [],
            "name": "objStrOrNum7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1161,
              "end": 1236,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1163,
                "end": 1236,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1163,
                    "end": 1198,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1165,
                        "end": 1178,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1165,
                          "end": 1169,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1169,
                          "end": 1177,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1171,
                            "end": 1177
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1179,
                        "end": 1196,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1179,
                          "end": 1187,
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1187,
                          "end": 1195,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1189,
                            "end": 1195
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1201,
                    "end": 1236,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1203,
                        "end": 1216,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1203,
                          "end": 1207,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1207,
                          "end": 1215,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1209,
                            "end": 1215
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1217,
                        "end": 1234,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1217,
                          "end": 1226,
                          "decorators": [],
                          "name": "anotherP1",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1226,
                          "end": 1234,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1228,
                            "end": 1234
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
            "start": 1239,
            "end": 1283,
            "properties": [
              {
                "type": "Property",
                "start": 1245,
                "end": 1262,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1245,
                  "end": 1249,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1251,
                  "end": 1262,
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 1268,
                "end": 1281,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1268,
                  "end": 1276,
                  "decorators": [],
                  "name": "anotherP",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1278,
                  "end": 1281,
                  "decorators": [],
                  "name": "str",
                  "optional": false
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
      "start": 1285,
      "end": 1444,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1289,
          "end": 1443,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1289,
            "end": 1376,
            "decorators": [],
            "name": "objStrOrNum8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1301,
              "end": 1376,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1303,
                "end": 1376,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1303,
                    "end": 1338,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1305,
                        "end": 1318,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1305,
                          "end": 1309,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1309,
                          "end": 1317,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1311,
                            "end": 1317
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1319,
                        "end": 1336,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1319,
                          "end": 1327,
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1327,
                          "end": 1335,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1329,
                            "end": 1335
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1341,
                    "end": 1376,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1343,
                        "end": 1356,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1343,
                          "end": 1347,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1347,
                          "end": 1355,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1349,
                            "end": 1355
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1357,
                        "end": 1374,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1357,
                          "end": 1366,
                          "decorators": [],
                          "name": "anotherP1",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1366,
                          "end": 1374,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1368,
                            "end": 1374
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
            "start": 1379,
            "end": 1443,
            "properties": [
              {
                "type": "Property",
                "start": 1385,
                "end": 1402,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1385,
                  "end": 1389,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1391,
                  "end": 1402,
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 1408,
                "end": 1421,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1408,
                  "end": 1416,
                  "decorators": [],
                  "name": "anotherP",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1418,
                  "end": 1421,
                  "decorators": [],
                  "name": "str",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 1427,
                "end": 1441,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1427,
                  "end": 1436,
                  "decorators": [],
                  "name": "anotherP1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1438,
                  "end": 1441,
                  "decorators": [],
                  "name": "num",
                  "optional": false
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
      "start": 1445,
      "end": 1529,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1459,
        "end": 1529,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1465,
            "end": 1527,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1465,
              "end": 1496,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1497,
                "end": 1506,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1498,
                  "end": 1506,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1500,
                    "end": 1506
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1508,
                "end": 1517,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1509,
                  "end": 1517,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1511,
                    "end": 1517
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1518,
              "end": 1526,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1520,
                "end": 1526
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1455,
        "end": 1458,
        "decorators": [],
        "name": "I11",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1530,
      "end": 1614,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1544,
        "end": 1614,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1550,
            "end": 1612,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1550,
              "end": 1581,
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1582,
                "end": 1591,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1583,
                  "end": 1591,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1585,
                    "end": 1591
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1593,
                "end": 1602,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1594,
                  "end": 1602,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1596,
                    "end": 1602
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1603,
              "end": 1611,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1605,
                "end": 1611
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1540,
        "end": 1543,
        "decorators": [],
        "name": "I21",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1615,
      "end": 1628,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1619,
          "end": 1627,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1619,
            "end": 1627,
            "decorators": [],
            "name": "i11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1622,
              "end": 1627,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1624,
                "end": 1627,
                "typeName": {
                  "type": "Identifier",
                  "start": 1624,
                  "end": 1627,
                  "decorators": [],
                  "name": "I11",
                  "optional": false
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
      "start": 1629,
      "end": 1642,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1633,
          "end": 1641,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1633,
            "end": 1641,
            "decorators": [],
            "name": "i21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1636,
              "end": 1641,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1638,
                "end": 1641,
                "typeName": {
                  "type": "Identifier",
                  "start": 1638,
                  "end": 1641,
                  "decorators": [],
                  "name": "I21",
                  "optional": false
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
      "start": 1643,
      "end": 1673,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1647,
          "end": 1672,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1647,
            "end": 1666,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1655,
              "end": 1666,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1657,
                "end": 1666,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1657,
                    "end": 1660,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1657,
                      "end": 1660,
                      "decorators": [],
                      "name": "I11",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1663,
                    "end": 1666,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1663,
                      "end": 1666,
                      "decorators": [],
                      "name": "I21",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1669,
            "end": 1672,
            "decorators": [],
            "name": "i11",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1674,
      "end": 1704,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1678,
          "end": 1703,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1678,
            "end": 1697,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1686,
              "end": 1697,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1688,
                "end": 1697,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1688,
                    "end": 1691,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1688,
                      "end": 1691,
                      "decorators": [],
                      "name": "I11",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1694,
                    "end": 1697,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1694,
                      "end": 1697,
                      "decorators": [],
                      "name": "I21",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1700,
            "end": 1703,
            "decorators": [],
            "name": "i21",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1705,
      "end": 1849,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1709,
          "end": 1848,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1709,
            "end": 1728,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1717,
              "end": 1728,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1719,
                "end": 1728,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1719,
                    "end": 1722,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1719,
                      "end": 1722,
                      "decorators": [],
                      "name": "I11",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1725,
                    "end": 1728,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1725,
                      "end": 1728,
                      "decorators": [],
                      "name": "I21",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1731,
            "end": 1848,
            "properties": [
              {
                "type": "Property",
                "start": 1748,
                "end": 1845,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1748,
                  "end": 1779,
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1781,
                  "end": 1845,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1791,
                    "end": 1845,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1801,
                        "end": 1821,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1805,
                            "end": 1820,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 1805,
                              "end": 1806,
                              "decorators": [],
                              "name": "z",
                              "optional": false
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 1809,
                              "end": 1820,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1818,
                                  "end": 1819,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1809,
                                "end": 1817,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1809,
                                  "end": 1810,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1811,
                                  "end": 1817,
                                  "decorators": [],
                                  "name": "charAt",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1830,
                        "end": 1839,
                        "argument": {
                          "type": "Identifier",
                          "start": 1837,
                          "end": 1838,
                          "decorators": [],
                          "name": "z",
                          "optional": false
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
                      "start": 1782,
                      "end": 1783,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1785,
                      "end": 1786,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ]
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
      "start": 1850,
      "end": 1998,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1854,
          "end": 1997,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1854,
            "end": 1873,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1862,
              "end": 1873,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1864,
                "end": 1873,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1864,
                    "end": 1867,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1864,
                      "end": 1867,
                      "decorators": [],
                      "name": "I11",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1870,
                    "end": 1873,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1870,
                      "end": 1873,
                      "decorators": [],
                      "name": "I21",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1876,
            "end": 1997,
            "properties": [
              {
                "type": "Property",
                "start": 1893,
                "end": 1994,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1893,
                  "end": 1924,
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1926,
                  "end": 1994,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1936,
                    "end": 1994,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1946,
                        "end": 1970,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1950,
                            "end": 1969,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 1950,
                              "end": 1951,
                              "decorators": [],
                              "name": "z",
                              "optional": false
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 1954,
                              "end": 1969,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1967,
                                  "end": 1968,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1954,
                                "end": 1966,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1954,
                                  "end": 1955,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1956,
                                  "end": 1966,
                                  "decorators": [],
                                  "name": "charCodeAt",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1979,
                        "end": 1988,
                        "argument": {
                          "type": "Identifier",
                          "start": 1986,
                          "end": 1987,
                          "decorators": [],
                          "name": "z",
                          "optional": false
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
                      "start": 1927,
                      "end": 1928,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1930,
                      "end": 1931,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ]
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
      "start": 1999,
      "end": 2032,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2003,
          "end": 2031,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2003,
            "end": 2031,
            "decorators": [],
            "name": "strOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2014,
              "end": 2031,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2016,
                "end": 2031,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2016,
                    "end": 2022
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2025,
                    "end": 2031
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
      "start": 2033,
      "end": 2146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2037,
          "end": 2145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2037,
            "end": 2056,
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2045,
              "end": 2056,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2047,
                "end": 2056,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2047,
                    "end": 2050,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2047,
                      "end": 2050,
                      "decorators": [],
                      "name": "I11",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2053,
                    "end": 2056,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2053,
                      "end": 2056,
                      "decorators": [],
                      "name": "I21",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2059,
            "end": 2145,
            "properties": [
              {
                "type": "Property",
                "start": 2088,
                "end": 2142,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2088,
                  "end": 2119,
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2121,
                  "end": 2142,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 2131,
                    "end": 2142,
                    "decorators": [],
                    "name": "strOrNumber",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2122,
                      "end": 2123,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2125,
                      "end": 2126,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ]
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
  "sourceType": "script"
}
```
