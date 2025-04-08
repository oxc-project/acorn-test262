__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 16,
            "name": "str",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 16,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 10,
                "end": 16
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
      "start": 18,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 33,
            "name": "num",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
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
      "start": 35,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 67,
            "name": "strOrNumber",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 70,
            "end": 80,
            "left": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "name": "str",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 77,
              "end": 80,
              "name": "num",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 110,
            "name": "objStr",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 100,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 108,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 102,
                        "end": 108
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 140,
            "name": "objNum",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 130,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 130,
                      "end": 138,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 132,
                        "end": 138
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 195,
            "name": "objStrOrNum1",
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 166,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 166,
                          "end": 174,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 168,
                            "end": 174
                          }
                        },
                        "accessibility": null,
                        "static": false
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 185,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 185,
                          "end": 193,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 187,
                            "end": 193
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 198,
            "end": 214,
            "left": {
              "type": "Identifier",
              "start": 198,
              "end": 204,
              "name": "objStr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 208,
              "end": 214,
              "name": "objNum",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 259,
            "name": "objStrOrNum2",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 240,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
          "init": {
            "type": "LogicalExpression",
            "start": 262,
            "end": 278,
            "left": {
              "type": "Identifier",
              "start": 262,
              "end": 268,
              "name": "objStr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 272,
              "end": 278,
              "name": "objNum",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 774,
            "end": 823,
            "name": "objStrOrNum3",
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 790,
                          "end": 794,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 794,
                          "end": 802,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 796,
                            "end": 802
                          }
                        },
                        "accessibility": null,
                        "static": false
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 809,
                          "end": 813,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 813,
                          "end": 821,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 815,
                            "end": 821
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 832,
                  "end": 836,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 838,
                  "end": 849,
                  "name": "strOrNumber",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 857,
            "end": 896,
            "name": "objStrOrNum4",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 873,
                      "end": 877,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
          "init": {
            "type": "ObjectExpression",
            "start": 899,
            "end": 924,
            "properties": [
              {
                "type": "Property",
                "start": 905,
                "end": 922,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 905,
                  "end": 909,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 911,
                  "end": 922,
                  "name": "strOrNumber",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 930,
            "end": 998,
            "name": "objStrOrNum5",
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 946,
                          "end": 950,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 950,
                          "end": 958,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 952,
                            "end": 958
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 960,
                        "end": 977,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 960,
                          "end": 968,
                          "name": "anotherP",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 968,
                          "end": 976,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 970,
                            "end": 976
                          }
                        },
                        "accessibility": null,
                        "static": false
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 984,
                          "end": 988,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 988,
                          "end": 996,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 990,
                            "end": 996
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1003,
                  "end": 1007,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1009,
                  "end": 1020,
                  "name": "strOrNumber",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1028,
            "end": 1096,
            "name": "objStrOrNum6",
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1044,
                          "end": 1048,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1048,
                          "end": 1056,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1050,
                            "end": 1056
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1058,
                        "end": 1075,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1058,
                          "end": 1066,
                          "name": "anotherP",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1066,
                          "end": 1074,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1068,
                            "end": 1074
                          }
                        },
                        "accessibility": null,
                        "static": false
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1082,
                          "end": 1086,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1086,
                          "end": 1094,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1088,
                            "end": 1094
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1105,
                  "end": 1109,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1111,
                  "end": 1122,
                  "name": "strOrNumber",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1128,
                "end": 1141,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1128,
                  "end": 1136,
                  "name": "anotherP",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1138,
                  "end": 1141,
                  "name": "str",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1149,
            "end": 1236,
            "name": "objStrOrNum7",
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1165,
                          "end": 1169,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1169,
                          "end": 1177,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1171,
                            "end": 1177
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1179,
                        "end": 1196,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1179,
                          "end": 1187,
                          "name": "anotherP",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1187,
                          "end": 1195,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1189,
                            "end": 1195
                          }
                        },
                        "accessibility": null,
                        "static": false
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1203,
                          "end": 1207,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1207,
                          "end": 1215,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1209,
                            "end": 1215
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1217,
                        "end": 1234,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1217,
                          "end": 1226,
                          "name": "anotherP1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1226,
                          "end": 1234,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1228,
                            "end": 1234
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1245,
                  "end": 1249,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1251,
                  "end": 1262,
                  "name": "strOrNumber",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1268,
                "end": 1281,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1268,
                  "end": 1276,
                  "name": "anotherP",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1278,
                  "end": 1281,
                  "name": "str",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1289,
            "end": 1376,
            "name": "objStrOrNum8",
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1305,
                          "end": 1309,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1309,
                          "end": 1317,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1311,
                            "end": 1317
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1319,
                        "end": 1336,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1319,
                          "end": 1327,
                          "name": "anotherP",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1327,
                          "end": 1335,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1329,
                            "end": 1335
                          }
                        },
                        "accessibility": null,
                        "static": false
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1343,
                          "end": 1347,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1347,
                          "end": 1355,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1349,
                            "end": 1355
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1357,
                        "end": 1374,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1357,
                          "end": 1366,
                          "name": "anotherP1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1366,
                          "end": 1374,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1368,
                            "end": 1374
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1385,
                  "end": 1389,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1391,
                  "end": 1402,
                  "name": "strOrNumber",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1408,
                "end": 1421,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1408,
                  "end": 1416,
                  "name": "anotherP",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1418,
                  "end": 1421,
                  "name": "str",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1427,
                "end": 1441,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1427,
                  "end": 1436,
                  "name": "anotherP1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 1438,
                  "end": 1441,
                  "name": "num",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1445,
      "end": 1529,
      "id": {
        "type": "Identifier",
        "start": 1455,
        "end": 1458,
        "name": "I11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1459,
        "end": 1529,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1465,
            "end": 1527,
            "key": {
              "type": "Identifier",
              "start": 1465,
              "end": 1496,
              "name": "commonMethodDifferentReturnType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1497,
                "end": 1506,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1498,
                  "end": 1506,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1500,
                    "end": 1506
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1508,
                "end": 1517,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1509,
                  "end": 1517,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1511,
                    "end": 1517
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1530,
      "end": 1614,
      "id": {
        "type": "Identifier",
        "start": 1540,
        "end": 1543,
        "name": "I21",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1544,
        "end": 1614,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1550,
            "end": 1612,
            "key": {
              "type": "Identifier",
              "start": 1550,
              "end": 1581,
              "name": "commonMethodDifferentReturnType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1582,
                "end": 1591,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1583,
                  "end": 1591,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1585,
                    "end": 1591
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1593,
                "end": 1602,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1594,
                  "end": 1602,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1596,
                    "end": 1602
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1619,
            "end": 1627,
            "name": "i11",
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
                  "name": "I11",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1633,
            "end": 1641,
            "name": "i21",
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
                  "name": "I21",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1647,
            "end": 1666,
            "name": "i11Ori21",
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
                      "name": "I11",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1663,
                    "end": 1666,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1663,
                      "end": 1666,
                      "name": "I21",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 1669,
            "end": 1672,
            "name": "i11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1678,
            "end": 1697,
            "name": "i11Ori21",
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
                      "name": "I11",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1694,
                    "end": 1697,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1694,
                      "end": 1697,
                      "name": "I21",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 1700,
            "end": 1703,
            "name": "i21",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1709,
            "end": 1728,
            "name": "i11Ori21",
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
                      "name": "I11",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1725,
                    "end": 1728,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1725,
                      "end": 1728,
                      "name": "I21",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1748,
                  "end": 1779,
                  "name": "commonMethodDifferentReturnType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1781,
                  "end": 1845,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1782,
                      "end": 1783,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1785,
                      "end": 1786,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                            "id": {
                              "type": "Identifier",
                              "start": 1805,
                              "end": 1806,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 1809,
                              "end": 1820,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1809,
                                "end": 1817,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1809,
                                  "end": 1810,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1811,
                                  "end": 1817,
                                  "name": "charAt",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1818,
                                  "end": 1819,
                                  "name": "b",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "var",
                        "declare": false
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1830,
                        "end": 1839,
                        "argument": {
                          "type": "Identifier",
                          "start": 1837,
                          "end": 1838,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1854,
            "end": 1873,
            "name": "i11Ori21",
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
                      "name": "I11",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1870,
                    "end": 1873,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1870,
                      "end": 1873,
                      "name": "I21",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1893,
                  "end": 1924,
                  "name": "commonMethodDifferentReturnType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1926,
                  "end": 1994,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1927,
                      "end": 1928,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 1930,
                      "end": 1931,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                            "id": {
                              "type": "Identifier",
                              "start": 1950,
                              "end": 1951,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "CallExpression",
                              "start": 1954,
                              "end": 1969,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1954,
                                "end": 1966,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1954,
                                  "end": 1955,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1956,
                                  "end": 1966,
                                  "name": "charCodeAt",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1967,
                                  "end": 1968,
                                  "name": "b",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "definite": false
                          }
                        ],
                        "kind": "var",
                        "declare": false
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1979,
                        "end": 1988,
                        "argument": {
                          "type": "Identifier",
                          "start": 1986,
                          "end": 1987,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2003,
            "end": 2031,
            "name": "strOrNumber",
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
      "start": 2033,
      "end": 2146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2037,
          "end": 2145,
          "id": {
            "type": "Identifier",
            "start": 2037,
            "end": 2056,
            "name": "i11Ori21",
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
                      "name": "I11",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2053,
                    "end": 2056,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2053,
                      "end": 2056,
                      "name": "I21",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2088,
                  "end": 2119,
                  "name": "commonMethodDifferentReturnType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2121,
                  "end": 2142,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2122,
                      "end": 2123,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 2125,
                      "end": 2126,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 2131,
                    "end": 2142,
                    "name": "strOrNumber",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
