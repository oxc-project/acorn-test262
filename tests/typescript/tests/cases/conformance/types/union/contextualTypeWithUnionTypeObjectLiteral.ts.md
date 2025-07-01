__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              },
              "start": 7,
              "end": 15
            },
            "start": 4,
            "end": 15
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 26,
                "end": 32
              },
              "start": 24,
              "end": 32
            },
            "start": 21,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 21,
          "end": 32
        }
      ],
      "declare": false,
      "start": 17,
      "end": 33
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 51,
                "end": 66
              },
              "start": 49,
              "end": 66
            },
            "start": 38,
            "end": 66
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 72
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 79
            },
            "start": 69,
            "end": 79
          },
          "definite": false,
          "start": 38,
          "end": 79
        }
      ],
      "declare": false,
      "start": 34,
      "end": 80
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objStr",
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
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 95,
                      "end": 99
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 101,
                        "end": 107
                      },
                      "start": 99,
                      "end": 107
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 95,
                    "end": 107
                  }
                ],
                "start": 93,
                "end": 109
              },
              "start": 91,
              "end": 109
            },
            "start": 85,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 85,
          "end": 109
        }
      ],
      "declare": false,
      "start": 81,
      "end": 110
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objNum",
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
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 125,
                      "end": 129
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 131,
                        "end": 137
                      },
                      "start": 129,
                      "end": 137
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 125,
                    "end": 137
                  }
                ],
                "start": 123,
                "end": 139
              },
              "start": 121,
              "end": 139
            },
            "start": 115,
            "end": 139
          },
          "init": null,
          "definite": false,
          "start": 115,
          "end": 139
        }
      ],
      "declare": false,
      "start": 111,
      "end": 140
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objStrOrNum1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 161,
                          "end": 165
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 167,
                            "end": 173
                          },
                          "start": 165,
                          "end": 173
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 161,
                        "end": 173
                      }
                    ],
                    "start": 159,
                    "end": 175
                  },
                  {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 180,
                          "end": 184
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 186,
                            "end": 192
                          },
                          "start": 184,
                          "end": 192
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 180,
                        "end": 192
                      }
                    ],
                    "start": 178,
                    "end": 194
                  }
                ],
                "start": 159,
                "end": 194
              },
              "start": 157,
              "end": 194
            },
            "start": 145,
            "end": 194
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "objStr",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 203
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "objNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 213
            },
            "start": 197,
            "end": 213
          },
          "definite": false,
          "start": 145,
          "end": 213
        }
      ],
      "declare": false,
      "start": 141,
      "end": 214
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objStrOrNum2",
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
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 235,
                      "end": 239
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
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
                        ],
                        "start": 241,
                        "end": 256
                      },
                      "start": 239,
                      "end": 256
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 235,
                    "end": 256
                  }
                ],
                "start": 233,
                "end": 258
              },
              "start": 231,
              "end": 258
            },
            "start": 219,
            "end": 258
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "objStr",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 267
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "objNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 277
            },
            "start": 261,
            "end": 277
          },
          "definite": false,
          "start": 219,
          "end": 277
        }
      ],
      "declare": false,
      "start": 215,
      "end": 278
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objStrOrNum3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 789,
                          "end": 793
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 795,
                            "end": 801
                          },
                          "start": 793,
                          "end": 801
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 789,
                        "end": 801
                      }
                    ],
                    "start": 787,
                    "end": 803
                  },
                  {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 808,
                          "end": 812
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 814,
                            "end": 820
                          },
                          "start": 812,
                          "end": 820
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 808,
                        "end": 820
                      }
                    ],
                    "start": 806,
                    "end": 822
                  }
                ],
                "start": 787,
                "end": 822
              },
              "start": 785,
              "end": 822
            },
            "start": 773,
            "end": 822
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 831,
                  "end": 835
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 837,
                  "end": 848
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 831,
                "end": 848
              }
            ],
            "start": 825,
            "end": 850
          },
          "definite": false,
          "start": 773,
          "end": 850
        }
      ],
      "declare": false,
      "start": 769,
      "end": 851
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objStrOrNum4",
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
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 872,
                      "end": 876
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
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
                        ],
                        "start": 878,
                        "end": 893
                      },
                      "start": 876,
                      "end": 893
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 872,
                    "end": 893
                  }
                ],
                "start": 870,
                "end": 895
              },
              "start": 868,
              "end": 895
            },
            "start": 856,
            "end": 895
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 904,
                  "end": 908
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 910,
                  "end": 921
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 904,
                "end": 921
              }
            ],
            "start": 898,
            "end": 923
          },
          "definite": false,
          "start": 856,
          "end": 923
        }
      ],
      "declare": false,
      "start": 852,
      "end": 924
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objStrOrNum5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 945,
                          "end": 949
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 951,
                            "end": 957
                          },
                          "start": 949,
                          "end": 957
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 945,
                        "end": 958
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 959,
                          "end": 967
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 969,
                            "end": 975
                          },
                          "start": 967,
                          "end": 975
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 959,
                        "end": 976
                      }
                    ],
                    "start": 943,
                    "end": 978
                  },
                  {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 983,
                          "end": 987
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 989,
                            "end": 995
                          },
                          "start": 987,
                          "end": 995
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 983,
                        "end": 995
                      }
                    ],
                    "start": 981,
                    "end": 997
                  }
                ],
                "start": 943,
                "end": 997
              },
              "start": 941,
              "end": 997
            },
            "start": 929,
            "end": 997
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1002,
                  "end": 1006
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1008,
                  "end": 1019
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1002,
                "end": 1019
              }
            ],
            "start": 1000,
            "end": 1021
          },
          "definite": false,
          "start": 929,
          "end": 1021
        }
      ],
      "declare": false,
      "start": 925,
      "end": 1022
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objStrOrNum6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1043,
                          "end": 1047
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1049,
                            "end": 1055
                          },
                          "start": 1047,
                          "end": 1055
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1043,
                        "end": 1056
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1057,
                          "end": 1065
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1067,
                            "end": 1073
                          },
                          "start": 1065,
                          "end": 1073
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1057,
                        "end": 1074
                      }
                    ],
                    "start": 1041,
                    "end": 1076
                  },
                  {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1081,
                          "end": 1085
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1087,
                            "end": 1093
                          },
                          "start": 1085,
                          "end": 1093
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1081,
                        "end": 1093
                      }
                    ],
                    "start": 1079,
                    "end": 1095
                  }
                ],
                "start": 1041,
                "end": 1095
              },
              "start": 1039,
              "end": 1095
            },
            "start": 1027,
            "end": 1095
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1104,
                  "end": 1108
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1121
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1104,
                "end": 1121
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anotherP",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1127,
                  "end": 1135
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1137,
                  "end": 1140
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1127,
                "end": 1140
              }
            ],
            "start": 1098,
            "end": 1142
          },
          "definite": false,
          "start": 1027,
          "end": 1142
        }
      ],
      "declare": false,
      "start": 1023,
      "end": 1143
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objStrOrNum7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1164,
                          "end": 1168
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1170,
                            "end": 1176
                          },
                          "start": 1168,
                          "end": 1176
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1164,
                        "end": 1177
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1178,
                          "end": 1186
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1188,
                            "end": 1194
                          },
                          "start": 1186,
                          "end": 1194
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1178,
                        "end": 1195
                      }
                    ],
                    "start": 1162,
                    "end": 1197
                  },
                  {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1202,
                          "end": 1206
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1208,
                            "end": 1214
                          },
                          "start": 1206,
                          "end": 1214
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1202,
                        "end": 1215
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1216,
                          "end": 1225
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1227,
                            "end": 1233
                          },
                          "start": 1225,
                          "end": 1233
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1216,
                        "end": 1233
                      }
                    ],
                    "start": 1200,
                    "end": 1235
                  }
                ],
                "start": 1162,
                "end": 1235
              },
              "start": 1160,
              "end": 1235
            },
            "start": 1148,
            "end": 1235
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1244,
                  "end": 1248
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1250,
                  "end": 1261
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1244,
                "end": 1261
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anotherP",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1267,
                  "end": 1275
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1277,
                  "end": 1280
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1267,
                "end": 1280
              }
            ],
            "start": 1238,
            "end": 1282
          },
          "definite": false,
          "start": 1148,
          "end": 1282
        }
      ],
      "declare": false,
      "start": 1144,
      "end": 1283
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objStrOrNum8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1304,
                          "end": 1308
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1310,
                            "end": 1316
                          },
                          "start": 1308,
                          "end": 1316
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1304,
                        "end": 1317
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1318,
                          "end": 1326
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1328,
                            "end": 1334
                          },
                          "start": 1326,
                          "end": 1334
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1318,
                        "end": 1335
                      }
                    ],
                    "start": 1302,
                    "end": 1337
                  },
                  {
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1342,
                          "end": 1346
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1348,
                            "end": 1354
                          },
                          "start": 1346,
                          "end": 1354
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1342,
                        "end": 1355
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1356,
                          "end": 1365
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1367,
                            "end": 1373
                          },
                          "start": 1365,
                          "end": 1373
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1356,
                        "end": 1373
                      }
                    ],
                    "start": 1340,
                    "end": 1375
                  }
                ],
                "start": 1302,
                "end": 1375
              },
              "start": 1300,
              "end": 1375
            },
            "start": 1288,
            "end": 1375
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1384,
                  "end": 1388
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1390,
                  "end": 1401
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1384,
                "end": 1401
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anotherP",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1407,
                  "end": 1415
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1417,
                  "end": 1420
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1407,
                "end": 1420
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anotherP1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1426,
                  "end": 1435
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1437,
                  "end": 1440
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1426,
                "end": 1440
              }
            ],
            "start": 1378,
            "end": 1442
          },
          "definite": false,
          "start": 1288,
          "end": 1442
        }
      ],
      "declare": false,
      "start": 1284,
      "end": 1443
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1454,
        "end": 1457
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1464,
              "end": 1495
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1499,
                    "end": 1505
                  },
                  "start": 1497,
                  "end": 1505
                },
                "start": 1496,
                "end": 1505
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1510,
                    "end": 1516
                  },
                  "start": 1508,
                  "end": 1516
                },
                "start": 1507,
                "end": 1516
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1519,
                "end": 1525
              },
              "start": 1517,
              "end": 1525
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1464,
            "end": 1526
          }
        ],
        "start": 1458,
        "end": 1528
      },
      "declare": false,
      "start": 1444,
      "end": 1528
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1539,
        "end": 1542
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1549,
              "end": 1580
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1584,
                    "end": 1590
                  },
                  "start": 1582,
                  "end": 1590
                },
                "start": 1581,
                "end": 1590
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1595,
                    "end": 1601
                  },
                  "start": 1593,
                  "end": 1601
                },
                "start": 1592,
                "end": 1601
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1604,
                "end": 1610
              },
              "start": 1602,
              "end": 1610
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1549,
            "end": 1611
          }
        ],
        "start": 1543,
        "end": 1613
      },
      "declare": false,
      "start": 1529,
      "end": 1613
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1623,
                  "end": 1626
                },
                "typeArguments": null,
                "start": 1623,
                "end": 1626
              },
              "start": 1621,
              "end": 1626
            },
            "start": 1618,
            "end": 1626
          },
          "init": null,
          "definite": false,
          "start": 1618,
          "end": 1626
        }
      ],
      "declare": false,
      "start": 1614,
      "end": 1627
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I21",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1637,
                  "end": 1640
                },
                "typeArguments": null,
                "start": 1637,
                "end": 1640
              },
              "start": 1635,
              "end": 1640
            },
            "start": 1632,
            "end": 1640
          },
          "init": null,
          "definite": false,
          "start": 1632,
          "end": 1640
        }
      ],
      "declare": false,
      "start": 1628,
      "end": 1641
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1656,
                      "end": 1659
                    },
                    "typeArguments": null,
                    "start": 1656,
                    "end": 1659
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1662,
                      "end": 1665
                    },
                    "typeArguments": null,
                    "start": 1662,
                    "end": 1665
                  }
                ],
                "start": 1656,
                "end": 1665
              },
              "start": 1654,
              "end": 1665
            },
            "start": 1646,
            "end": 1665
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "i11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1668,
            "end": 1671
          },
          "definite": false,
          "start": 1646,
          "end": 1671
        }
      ],
      "declare": false,
      "start": 1642,
      "end": 1672
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1687,
                      "end": 1690
                    },
                    "typeArguments": null,
                    "start": 1687,
                    "end": 1690
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1693,
                      "end": 1696
                    },
                    "typeArguments": null,
                    "start": 1693,
                    "end": 1696
                  }
                ],
                "start": 1687,
                "end": 1696
              },
              "start": 1685,
              "end": 1696
            },
            "start": 1677,
            "end": 1696
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "i21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1699,
            "end": 1702
          },
          "definite": false,
          "start": 1677,
          "end": 1702
        }
      ],
      "declare": false,
      "start": 1673,
      "end": 1703
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1718,
                      "end": 1721
                    },
                    "typeArguments": null,
                    "start": 1718,
                    "end": 1721
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1724,
                      "end": 1727
                    },
                    "typeArguments": null,
                    "start": 1724,
                    "end": 1727
                  }
                ],
                "start": 1718,
                "end": 1727
              },
              "start": 1716,
              "end": 1727
            },
            "start": 1708,
            "end": 1727
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
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1747,
                  "end": 1778
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1781,
                      "end": 1782
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1784,
                      "end": 1785
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
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1804,
                              "end": 1805
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1808,
                                  "end": 1809
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "charAt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1810,
                                  "end": 1816
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1808,
                                "end": 1816
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1817,
                                  "end": 1818
                                }
                              ],
                              "optional": false,
                              "start": 1808,
                              "end": 1819
                            },
                            "definite": false,
                            "start": 1804,
                            "end": 1819
                          }
                        ],
                        "declare": false,
                        "start": 1800,
                        "end": 1820
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1836,
                          "end": 1837
                        },
                        "start": 1829,
                        "end": 1838
                      }
                    ],
                    "start": 1790,
                    "end": 1844
                  },
                  "id": null,
                  "generator": false,
                  "start": 1780,
                  "end": 1844
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1747,
                "end": 1844
              }
            ],
            "start": 1730,
            "end": 1847
          },
          "definite": false,
          "start": 1708,
          "end": 1847
        }
      ],
      "declare": false,
      "start": 1704,
      "end": 1848
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1863,
                      "end": 1866
                    },
                    "typeArguments": null,
                    "start": 1863,
                    "end": 1866
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1869,
                      "end": 1872
                    },
                    "typeArguments": null,
                    "start": 1869,
                    "end": 1872
                  }
                ],
                "start": 1863,
                "end": 1872
              },
              "start": 1861,
              "end": 1872
            },
            "start": 1853,
            "end": 1872
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
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1892,
                  "end": 1923
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1926,
                      "end": 1927
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1929,
                      "end": 1930
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
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1949,
                              "end": 1950
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1953,
                                  "end": 1954
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "charCodeAt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1955,
                                  "end": 1965
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1953,
                                "end": 1965
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1966,
                                  "end": 1967
                                }
                              ],
                              "optional": false,
                              "start": 1953,
                              "end": 1968
                            },
                            "definite": false,
                            "start": 1949,
                            "end": 1968
                          }
                        ],
                        "declare": false,
                        "start": 1945,
                        "end": 1969
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1985,
                          "end": 1986
                        },
                        "start": 1978,
                        "end": 1987
                      }
                    ],
                    "start": 1935,
                    "end": 1993
                  },
                  "id": null,
                  "generator": false,
                  "start": 1925,
                  "end": 1993
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1892,
                "end": 1993
              }
            ],
            "start": 1875,
            "end": 1996
          },
          "definite": false,
          "start": 1853,
          "end": 1996
        }
      ],
      "declare": false,
      "start": 1849,
      "end": 1997
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 2015,
                "end": 2030
              },
              "start": 2013,
              "end": 2030
            },
            "start": 2002,
            "end": 2030
          },
          "init": null,
          "definite": false,
          "start": 2002,
          "end": 2030
        }
      ],
      "declare": false,
      "start": 1998,
      "end": 2031
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2046,
                      "end": 2049
                    },
                    "typeArguments": null,
                    "start": 2046,
                    "end": 2049
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2052,
                      "end": 2055
                    },
                    "typeArguments": null,
                    "start": 2052,
                    "end": 2055
                  }
                ],
                "start": 2046,
                "end": 2055
              },
              "start": 2044,
              "end": 2055
            },
            "start": 2036,
            "end": 2055
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
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2087,
                  "end": 2118
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2121,
                      "end": 2122
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2124,
                      "end": 2125
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrNumber",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2130,
                    "end": 2141
                  },
                  "id": null,
                  "generator": false,
                  "start": 2120,
                  "end": 2141
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2087,
                "end": 2141
              }
            ],
            "start": 2058,
            "end": 2144
          },
          "definite": false,
          "start": 2036,
          "end": 2144
        }
      ],
      "declare": false,
      "start": 2032,
      "end": 2145
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2145
}
```
