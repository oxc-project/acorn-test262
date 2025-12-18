__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 17,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 21,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 34,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 38,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 73,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "objStr",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 111,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "objNum",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 141,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum1",
    "start": 145,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 167,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "objStr",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 204,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "objNum",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 215,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum2",
    "start": 219,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 235,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 241,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 250,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "objStr",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 268,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "objNum",
    "start": 271,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 769,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum3",
    "start": 773,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 789,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 795,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 808,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 814,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 831,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 837,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 850,
    "end": 851
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 852,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum4",
    "start": 856,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 872,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 878,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 887,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 904,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 910,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 925,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum5",
    "start": 929,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 945,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 951,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "anotherP",
    "start": 959,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 969,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 983,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 989,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1002,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 1008,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1023,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum6",
    "start": 1027,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1043,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1049,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "anotherP",
    "start": 1057,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1067,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1081,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1087,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1104,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 1110,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "anotherP",
    "start": 1127,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1137,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum7",
    "start": 1148,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1164,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1170,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "anotherP",
    "start": 1178,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1188,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1202,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1208,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "anotherP1",
    "start": 1216,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1227,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1244,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 1250,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "anotherP",
    "start": 1267,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1277,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1284,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum8",
    "start": 1288,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1304,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1310,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "anotherP",
    "start": 1318,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1328,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1342,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1348,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "anotherP1",
    "start": 1356,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1367,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1384,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 1390,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "anotherP",
    "start": 1407,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1417,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "anotherP1",
    "start": 1426,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1437,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1444,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1454,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 1464,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1499,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1510,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1519,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1529,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 1539,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 1549,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1584,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1595,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1604,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1614,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "i11",
    "start": 1618,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1623,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1628,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "i21",
    "start": 1632,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 1637,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1642,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "i11Ori21",
    "start": 1646,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1656,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 1662,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "i11",
    "start": 1668,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1673,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "i11Ori21",
    "start": 1677,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1687,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 1693,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "i21",
    "start": 1699,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1704,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "i11Ori21",
    "start": 1708,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1718,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 1724,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 1747,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1787,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1800,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 1810,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1829,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1849,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "i11Ori21",
    "start": 1853,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1863,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 1869,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 1892,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1932,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1945,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "charCodeAt",
    "start": 1955,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1978,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1998,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 2002,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2015,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2024,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2032,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "i11Ori21",
    "start": 2036,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 2046,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 2052,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 2087,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2127,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 2130,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2144,
    "end": 2145
  }
]
```
