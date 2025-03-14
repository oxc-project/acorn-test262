__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2009,
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
      "end": 687,
      "alternate": {
        "type": "BlockStatement",
        "start": 653,
        "end": 687,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 659,
            "end": 675,
            "expression": {
              "type": "AssignmentExpression",
              "start": 659,
              "end": 674,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 659,
                "end": 662,
                "decorators": [],
                "name": "str",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 665,
                "end": 674,
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
        "start": 611,
        "end": 647,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 617,
            "end": 634,
            "expression": {
              "type": "AssignmentExpression",
              "start": 617,
              "end": 633,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 617,
                "end": 621,
                "decorators": [],
                "name": "bool",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 624,
                "end": 633,
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
        "start": 579,
        "end": 609,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 579,
          "end": 595,
          "argument": {
            "type": "Identifier",
            "start": 586,
            "end": 595,
            "decorators": [],
            "name": "strOrBool",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 600,
          "end": 609,
          "raw": "\"boolean\"",
          "value": "boolean"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 688,
      "end": 800,
      "alternate": {
        "type": "BlockStatement",
        "start": 766,
        "end": 800,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 772,
            "end": 788,
            "expression": {
              "type": "AssignmentExpression",
              "start": 772,
              "end": 787,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 772,
                "end": 775,
                "decorators": [],
                "name": "num",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 778,
                "end": 787,
                "decorators": [],
                "name": "numOrBool",
                "optional": false
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 724,
        "end": 760,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 730,
            "end": 747,
            "expression": {
              "type": "AssignmentExpression",
              "start": 730,
              "end": 746,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 730,
                "end": 734,
                "decorators": [],
                "name": "bool",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 737,
                "end": 746,
                "decorators": [],
                "name": "numOrBool",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 692,
        "end": 722,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 692,
          "end": 708,
          "argument": {
            "type": "Identifier",
            "start": 699,
            "end": 708,
            "decorators": [],
            "name": "numOrBool",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 713,
          "end": 722,
          "raw": "\"boolean\"",
          "value": "boolean"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 801,
      "end": 942,
      "alternate": {
        "type": "BlockStatement",
        "start": 889,
        "end": 942,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 895,
            "end": 921,
            "expression": {
              "type": "AssignmentExpression",
              "start": 895,
              "end": 920,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 895,
                "end": 903,
                "decorators": [],
                "name": "strOrNum",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 906,
                "end": 920,
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
        "start": 842,
        "end": 883,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 848,
            "end": 870,
            "expression": {
              "type": "AssignmentExpression",
              "start": 848,
              "end": 869,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 848,
                "end": 852,
                "decorators": [],
                "name": "bool",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 855,
                "end": 869,
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
        "start": 805,
        "end": 840,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 805,
          "end": 826,
          "argument": {
            "type": "Identifier",
            "start": 812,
            "end": 826,
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 831,
          "end": 840,
          "raw": "\"boolean\"",
          "value": "boolean"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 943,
      "end": 1042,
      "alternate": {
        "type": "BlockStatement",
        "start": 1017,
        "end": 1042,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1023,
            "end": 1035,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1023,
              "end": 1034,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1023,
                "end": 1024,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1027,
                "end": 1034,
                "decorators": [],
                "name": "boolOrC",
                "optional": false
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 977,
        "end": 1011,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 983,
            "end": 998,
            "expression": {
              "type": "AssignmentExpression",
              "start": 983,
              "end": 997,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 983,
                "end": 987,
                "decorators": [],
                "name": "bool",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 990,
                "end": 997,
                "decorators": [],
                "name": "boolOrC",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 947,
        "end": 975,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 947,
          "end": 961,
          "argument": {
            "type": "Identifier",
            "start": 954,
            "end": 961,
            "decorators": [],
            "name": "boolOrC",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 966,
          "end": 975,
          "raw": "\"boolean\"",
          "value": "boolean"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1044,
      "end": 1183,
      "alternate": {
        "type": "BlockStatement",
        "start": 1121,
        "end": 1183,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1127,
            "end": 1162,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1131,
                "end": 1161,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1131,
                  "end": 1150,
                  "decorators": [],
                  "name": "z2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1133,
                    "end": 1150,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1135,
                      "end": 1150,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1135,
                          "end": 1141
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1144,
                          "end": 1150
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1153,
                  "end": 1161,
                  "decorators": [],
                  "name": "strOrNum",
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
        "start": 1079,
        "end": 1115,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1085,
            "end": 1107,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1089,
                "end": 1106,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1089,
                  "end": 1095,
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1091,
                    "end": 1095,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1093,
                      "end": 1095,
                      "members": []
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1098,
                  "end": 1106,
                  "decorators": [],
                  "name": "strOrNum",
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
        "start": 1048,
        "end": 1077,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 1048,
          "end": 1063,
          "argument": {
            "type": "Identifier",
            "start": 1055,
            "end": 1063,
            "decorators": [],
            "name": "strOrNum",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 1068,
          "end": 1077,
          "raw": "\"boolean\"",
          "value": "boolean"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1400,
      "end": 1512,
      "alternate": {
        "type": "BlockStatement",
        "start": 1476,
        "end": 1512,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1482,
            "end": 1499,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1482,
              "end": 1498,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1482,
                "end": 1486,
                "decorators": [],
                "name": "bool",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1489,
                "end": 1498,
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
        "start": 1436,
        "end": 1470,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1442,
            "end": 1458,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1442,
              "end": 1457,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1442,
                "end": 1445,
                "decorators": [],
                "name": "str",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1448,
                "end": 1457,
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
        "start": 1404,
        "end": 1434,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 1404,
          "end": 1420,
          "argument": {
            "type": "Identifier",
            "start": 1411,
            "end": 1420,
            "decorators": [],
            "name": "strOrBool",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 1425,
          "end": 1434,
          "raw": "\"boolean\"",
          "value": "boolean"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1513,
      "end": 1625,
      "alternate": {
        "type": "BlockStatement",
        "start": 1589,
        "end": 1625,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1595,
            "end": 1612,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1595,
              "end": 1611,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1595,
                "end": 1599,
                "decorators": [],
                "name": "bool",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1602,
                "end": 1611,
                "decorators": [],
                "name": "numOrBool",
                "optional": false
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1549,
        "end": 1583,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1555,
            "end": 1571,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1555,
              "end": 1570,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1555,
                "end": 1558,
                "decorators": [],
                "name": "num",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1561,
                "end": 1570,
                "decorators": [],
                "name": "numOrBool",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1517,
        "end": 1547,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 1517,
          "end": 1533,
          "argument": {
            "type": "Identifier",
            "start": 1524,
            "end": 1533,
            "decorators": [],
            "name": "numOrBool",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 1538,
          "end": 1547,
          "raw": "\"boolean\"",
          "value": "boolean"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1626,
      "end": 1767,
      "alternate": {
        "type": "BlockStatement",
        "start": 1726,
        "end": 1767,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1732,
            "end": 1754,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1732,
              "end": 1753,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1732,
                "end": 1736,
                "decorators": [],
                "name": "bool",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1739,
                "end": 1753,
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
        "start": 1667,
        "end": 1720,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1673,
            "end": 1699,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1673,
              "end": 1698,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1673,
                "end": 1681,
                "decorators": [],
                "name": "strOrNum",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1684,
                "end": 1698,
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
        "start": 1630,
        "end": 1665,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 1630,
          "end": 1651,
          "argument": {
            "type": "Identifier",
            "start": 1637,
            "end": 1651,
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 1656,
          "end": 1665,
          "raw": "\"boolean\"",
          "value": "boolean"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1768,
      "end": 1867,
      "alternate": {
        "type": "BlockStatement",
        "start": 1833,
        "end": 1867,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1839,
            "end": 1854,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1839,
              "end": 1853,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1839,
                "end": 1843,
                "decorators": [],
                "name": "bool",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1846,
                "end": 1853,
                "decorators": [],
                "name": "boolOrC",
                "optional": false
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1802,
        "end": 1827,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1808,
            "end": 1820,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1808,
              "end": 1819,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1808,
                "end": 1809,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1812,
                "end": 1819,
                "decorators": [],
                "name": "boolOrC",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1772,
        "end": 1800,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 1772,
          "end": 1786,
          "argument": {
            "type": "Identifier",
            "start": 1779,
            "end": 1786,
            "decorators": [],
            "name": "boolOrC",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 1791,
          "end": 1800,
          "raw": "\"boolean\"",
          "value": "boolean"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 1869,
      "end": 2008,
      "alternate": {
        "type": "BlockStatement",
        "start": 1972,
        "end": 2008,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1978,
            "end": 2000,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1982,
                "end": 1999,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1982,
                  "end": 1988,
                  "decorators": [],
                  "name": "z2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1984,
                    "end": 1988,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1986,
                      "end": 1988,
                      "members": []
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1991,
                  "end": 1999,
                  "decorators": [],
                  "name": "strOrNum",
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
        "start": 1904,
        "end": 1966,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1910,
            "end": 1945,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1914,
                "end": 1944,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1914,
                  "end": 1933,
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1916,
                    "end": 1933,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1918,
                      "end": 1933,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1918,
                          "end": 1924
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1927,
                          "end": 1933
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1936,
                  "end": 1944,
                  "decorators": [],
                  "name": "strOrNum",
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
        "start": 1873,
        "end": 1902,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 1873,
          "end": 1888,
          "argument": {
            "type": "Identifier",
            "start": 1880,
            "end": 1888,
            "decorators": [],
            "name": "strOrNum",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 1893,
          "end": 1902,
          "raw": "\"boolean\"",
          "value": "boolean"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
