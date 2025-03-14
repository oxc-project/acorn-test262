__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1992,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 27,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "EmptyStatement",
      "start": 29,
      "end": 30
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 47,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
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
      "start": 49,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 66,
            "decorators": [],
            "name": "bool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 66,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 59,
                "end": 66
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
      "start": 68,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 83,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 83,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 77,
                "end": 83
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
      "start": 85,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 114,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 114,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 114,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 99,
                "end": 114,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 99,
                    "end": 105
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 108,
                    "end": 114
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
      "start": 116,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 147,
            "decorators": [],
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 147,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 131,
                "end": 147,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 131,
                    "end": 137
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 140,
                    "end": 147
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
      "start": 149,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 180,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 180,
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 180,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 164,
                "end": 180,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 164,
                    "end": 170
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 173,
                    "end": 180
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
      "start": 181,
      "end": 227,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 226,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 226,
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 226,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 201,
                "end": 226,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 201,
                    "end": 207
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 210,
                    "end": 216
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 219,
                    "end": 226
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
      "start": 228,
      "end": 251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 250,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 250,
            "decorators": [],
            "name": "strOrC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 250,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 240,
                "end": 250,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 240,
                    "end": 246
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 249,
                    "end": 250,
                    "typeName": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 250,
                      "decorators": [],
                      "name": "C",
                      "optional": false
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
      "start": 252,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 256,
          "end": 274,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 274,
            "decorators": [],
            "name": "numOrC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 262,
              "end": 274,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 264,
                "end": 274,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 264,
                    "end": 270
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 273,
                    "end": 274,
                    "typeName": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 274,
                      "decorators": [],
                      "name": "C",
                      "optional": false
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
      "start": 276,
      "end": 301,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 300,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 300,
            "decorators": [],
            "name": "boolOrC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 300,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 289,
                "end": 300,
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 289,
                    "end": 296
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 299,
                    "end": 300,
                    "typeName": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 300,
                      "decorators": [],
                      "name": "C",
                      "optional": false
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
      "start": 302,
      "end": 311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 310,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 310,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 310,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 309,
                "end": 310,
                "typeName": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "decorators": [],
                  "name": "C",
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
      "type": "IfStatement",
      "start": 575,
      "end": 683,
      "alternate": {
        "type": "BlockStatement",
        "start": 648,
        "end": 683,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 654,
            "end": 671,
            "expression": {
              "type": "BinaryExpression",
              "start": 654,
              "end": 670,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 654,
                "end": 657,
                "decorators": [],
                "name": "num",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 662,
                "end": 670,
                "decorators": [],
                "name": "strOrNum",
                "optional": false
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 609,
        "end": 642,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 615,
            "end": 630,
            "expression": {
              "type": "AssignmentExpression",
              "start": 615,
              "end": 629,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 615,
                "end": 618,
                "decorators": [],
                "name": "str",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 621,
                "end": 629,
                "decorators": [],
                "name": "strOrNum",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 579,
        "end": 607,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 579,
          "end": 594,
          "argument": {
            "type": "Identifier",
            "start": 586,
            "end": 594,
            "decorators": [],
            "name": "strOrNum",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 599,
          "end": 607,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 684,
      "end": 795,
      "alternate": {
        "type": "BlockStatement",
        "start": 759,
        "end": 795,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 765,
            "end": 782,
            "expression": {
              "type": "AssignmentExpression",
              "start": 765,
              "end": 781,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 765,
                "end": 769,
                "decorators": [],
                "name": "bool",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 772,
                "end": 781,
                "decorators": [],
                "name": "strOrBool",
                "optional": false
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 719,
        "end": 753,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 725,
            "end": 741,
            "expression": {
              "type": "AssignmentExpression",
              "start": 725,
              "end": 740,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 725,
                "end": 728,
                "decorators": [],
                "name": "str",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 731,
                "end": 740,
                "decorators": [],
                "name": "strOrBool",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 688,
        "end": 717,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 688,
          "end": 704,
          "argument": {
            "type": "Identifier",
            "start": 695,
            "end": 704,
            "decorators": [],
            "name": "strOrBool",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 709,
          "end": 717,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 796,
      "end": 936,
      "alternate": {
        "type": "BlockStatement",
        "start": 881,
        "end": 936,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 887,
            "end": 914,
            "expression": {
              "type": "AssignmentExpression",
              "start": 887,
              "end": 913,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 887,
                "end": 896,
                "decorators": [],
                "name": "numOrBool",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 899,
                "end": 913,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 836,
        "end": 875,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 842,
            "end": 863,
            "expression": {
              "type": "AssignmentExpression",
              "start": 842,
              "end": 862,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 842,
                "end": 845,
                "decorators": [],
                "name": "str",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 848,
                "end": 862,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 800,
        "end": 834,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 800,
          "end": 821,
          "argument": {
            "type": "Identifier",
            "start": 807,
            "end": 821,
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 826,
          "end": 834,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 937,
      "end": 1030,
      "alternate": {
        "type": "BlockStatement",
        "start": 1006,
        "end": 1030,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1012,
            "end": 1023,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1012,
              "end": 1022,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1012,
                "end": 1013,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1016,
                "end": 1022,
                "decorators": [],
                "name": "strOrC",
                "optional": false
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 969,
        "end": 1000,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 975,
            "end": 988,
            "expression": {
              "type": "AssignmentExpression",
              "start": 975,
              "end": 987,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 975,
                "end": 978,
                "decorators": [],
                "name": "str",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 981,
                "end": 987,
                "decorators": [],
                "name": "strOrC",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 941,
        "end": 967,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 941,
          "end": 954,
          "argument": {
            "type": "Identifier",
            "start": 948,
            "end": 954,
            "decorators": [],
            "name": "strOrC",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 959,
          "end": 967,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1032,
      "end": 1175,
      "alternate": {
        "type": "BlockStatement",
        "start": 1110,
        "end": 1175,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1116,
            "end": 1153,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1120,
                "end": 1152,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1120,
                  "end": 1140,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1122,
                    "end": 1140,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1124,
                      "end": 1140,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1124,
                          "end": 1130
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1133,
                          "end": 1140
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1143,
                  "end": 1152,
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1067,
        "end": 1104,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1073,
            "end": 1096,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1077,
                "end": 1095,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1077,
                  "end": 1083,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1079,
                    "end": 1083,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1081,
                      "end": 1083,
                      "members": []
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1086,
                  "end": 1095,
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1036,
        "end": 1065,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 1036,
          "end": 1052,
          "argument": {
            "type": "Identifier",
            "start": 1043,
            "end": 1052,
            "decorators": [],
            "name": "numOrBool",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 1057,
          "end": 1065,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1391,
      "end": 1499,
      "alternate": {
        "type": "BlockStatement",
        "start": 1466,
        "end": 1499,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1472,
            "end": 1487,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1472,
              "end": 1486,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1472,
                "end": 1475,
                "decorators": [],
                "name": "str",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1478,
                "end": 1486,
                "decorators": [],
                "name": "strOrNum",
                "optional": false
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1425,
        "end": 1460,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1431,
            "end": 1448,
            "expression": {
              "type": "BinaryExpression",
              "start": 1431,
              "end": 1447,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1431,
                "end": 1434,
                "decorators": [],
                "name": "num",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1439,
                "end": 1447,
                "decorators": [],
                "name": "strOrNum",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1395,
        "end": 1423,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 1395,
          "end": 1410,
          "argument": {
            "type": "Identifier",
            "start": 1402,
            "end": 1410,
            "decorators": [],
            "name": "strOrNum",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 1415,
          "end": 1423,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1500,
      "end": 1611,
      "alternate": {
        "type": "BlockStatement",
        "start": 1577,
        "end": 1611,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1583,
            "end": 1599,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1583,
              "end": 1598,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1583,
                "end": 1586,
                "decorators": [],
                "name": "str",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1589,
                "end": 1598,
                "decorators": [],
                "name": "strOrBool",
                "optional": false
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1535,
        "end": 1571,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1541,
            "end": 1558,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1541,
              "end": 1557,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1541,
                "end": 1545,
                "decorators": [],
                "name": "bool",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1548,
                "end": 1557,
                "decorators": [],
                "name": "strOrBool",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1504,
        "end": 1533,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 1504,
          "end": 1520,
          "argument": {
            "type": "Identifier",
            "start": 1511,
            "end": 1520,
            "decorators": [],
            "name": "strOrBool",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 1525,
          "end": 1533,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1612,
      "end": 1752,
      "alternate": {
        "type": "BlockStatement",
        "start": 1713,
        "end": 1752,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1719,
            "end": 1740,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1719,
              "end": 1739,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1719,
                "end": 1722,
                "decorators": [],
                "name": "str",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1725,
                "end": 1739,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1652,
        "end": 1707,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1658,
            "end": 1685,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1658,
              "end": 1684,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1658,
                "end": 1667,
                "decorators": [],
                "name": "numOrBool",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1670,
                "end": 1684,
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1616,
        "end": 1650,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 1616,
          "end": 1637,
          "argument": {
            "type": "Identifier",
            "start": 1623,
            "end": 1637,
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 1642,
          "end": 1650,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1753,
      "end": 1846,
      "alternate": {
        "type": "BlockStatement",
        "start": 1815,
        "end": 1846,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1821,
            "end": 1834,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1821,
              "end": 1833,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1821,
                "end": 1824,
                "decorators": [],
                "name": "str",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1827,
                "end": 1833,
                "decorators": [],
                "name": "strOrC",
                "optional": false
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1785,
        "end": 1809,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1791,
            "end": 1802,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1791,
              "end": 1801,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1791,
                "end": 1792,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1795,
                "end": 1801,
                "decorators": [],
                "name": "strOrC",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1757,
        "end": 1783,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 1757,
          "end": 1770,
          "argument": {
            "type": "Identifier",
            "start": 1764,
            "end": 1770,
            "decorators": [],
            "name": "strOrC",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 1775,
          "end": 1783,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1848,
      "end": 1991,
      "alternate": {
        "type": "BlockStatement",
        "start": 1954,
        "end": 1991,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1960,
            "end": 1983,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1964,
                "end": 1982,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1964,
                  "end": 1970,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1966,
                    "end": 1970,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1968,
                      "end": 1970,
                      "members": []
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1973,
                  "end": 1982,
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1883,
        "end": 1948,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1889,
            "end": 1926,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1893,
                "end": 1925,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1893,
                  "end": 1913,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1895,
                    "end": 1913,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1897,
                      "end": 1913,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1897,
                          "end": 1903
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1906,
                          "end": 1913
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1916,
                  "end": 1925,
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1852,
        "end": 1881,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 1852,
          "end": 1868,
          "argument": {
            "type": "Identifier",
            "start": 1859,
            "end": 1868,
            "decorators": [],
            "name": "numOrBool",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 1873,
          "end": 1881,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
