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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 27,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 47,
            "name": "str",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
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
      "start": 49,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 66,
            "name": "bool",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 66,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 59,
                "end": 66
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
      "start": 68,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 83,
            "name": "num",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 77,
                "end": 83
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
      "start": 85,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 114,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 114,
            "name": "strOrNum",
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
      "start": 116,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 147,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 147,
            "name": "strOrBool",
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
      "start": 149,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 180,
            "name": "numOrBool",
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
      "start": 181,
      "end": 227,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 226,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 226,
            "name": "strOrNumOrBool",
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
      "start": 228,
      "end": 251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 250,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 250,
            "name": "strOrC",
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
                      "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 256,
            "end": 274,
            "name": "numOrC",
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
                      "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 300,
            "name": "boolOrC",
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
                      "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 310,
            "name": "c",
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
                  "name": "C",
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
      "type": "IfStatement",
      "start": 575,
      "end": 683,
      "test": {
        "type": "BinaryExpression",
        "start": 579,
        "end": 607,
        "left": {
          "type": "UnaryExpression",
          "start": 579,
          "end": 594,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 586,
            "end": 594,
            "name": "strOrNum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 599,
          "end": 607,
          "value": "string",
          "raw": "\"string\""
        }
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
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 621,
                "end": 629,
                "name": "strOrNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
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
              "left": {
                "type": "Identifier",
                "start": 654,
                "end": 657,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 662,
                "end": 670,
                "name": "strOrNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 684,
      "end": 795,
      "test": {
        "type": "BinaryExpression",
        "start": 688,
        "end": 717,
        "left": {
          "type": "UnaryExpression",
          "start": 688,
          "end": 704,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 695,
            "end": 704,
            "name": "strOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 709,
          "end": 717,
          "value": "string",
          "raw": "\"string\""
        }
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
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 731,
                "end": 740,
                "name": "strOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
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
                "name": "bool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 772,
                "end": 781,
                "name": "strOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 796,
      "end": 936,
      "test": {
        "type": "BinaryExpression",
        "start": 800,
        "end": 834,
        "left": {
          "type": "UnaryExpression",
          "start": 800,
          "end": 821,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 807,
            "end": 821,
            "name": "strOrNumOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 826,
          "end": 834,
          "value": "string",
          "raw": "\"string\""
        }
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
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 848,
                "end": 862,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
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
                "name": "numOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 899,
                "end": 913,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 937,
      "end": 1030,
      "test": {
        "type": "BinaryExpression",
        "start": 941,
        "end": 967,
        "left": {
          "type": "UnaryExpression",
          "start": 941,
          "end": 954,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 948,
            "end": 954,
            "name": "strOrC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 959,
          "end": 967,
          "value": "string",
          "raw": "\"string\""
        }
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
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 981,
                "end": 987,
                "name": "strOrC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1016,
                "end": 1022,
                "name": "strOrC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1032,
      "end": 1175,
      "test": {
        "type": "BinaryExpression",
        "start": 1036,
        "end": 1065,
        "left": {
          "type": "UnaryExpression",
          "start": 1036,
          "end": 1052,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1043,
            "end": 1052,
            "name": "numOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 1057,
          "end": 1065,
          "value": "string",
          "raw": "\"string\""
        }
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
                "id": {
                  "type": "Identifier",
                  "start": 1077,
                  "end": 1083,
                  "name": "x1",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1086,
                  "end": 1095,
                  "name": "numOrBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 1120,
                  "end": 1140,
                  "name": "x2",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1143,
                  "end": 1152,
                  "name": "numOrBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1391,
      "end": 1499,
      "test": {
        "type": "BinaryExpression",
        "start": 1395,
        "end": 1423,
        "left": {
          "type": "UnaryExpression",
          "start": 1395,
          "end": 1410,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1402,
            "end": 1410,
            "name": "strOrNum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1415,
          "end": 1423,
          "value": "string",
          "raw": "\"string\""
        }
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
              "left": {
                "type": "Identifier",
                "start": 1431,
                "end": 1434,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1439,
                "end": 1447,
                "name": "strOrNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
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
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1478,
                "end": 1486,
                "name": "strOrNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1500,
      "end": 1611,
      "test": {
        "type": "BinaryExpression",
        "start": 1504,
        "end": 1533,
        "left": {
          "type": "UnaryExpression",
          "start": 1504,
          "end": 1520,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1511,
            "end": 1520,
            "name": "strOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1525,
          "end": 1533,
          "value": "string",
          "raw": "\"string\""
        }
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
                "name": "bool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1548,
                "end": 1557,
                "name": "strOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
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
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1589,
                "end": 1598,
                "name": "strOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1612,
      "end": 1752,
      "test": {
        "type": "BinaryExpression",
        "start": 1616,
        "end": 1650,
        "left": {
          "type": "UnaryExpression",
          "start": 1616,
          "end": 1637,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1623,
            "end": 1637,
            "name": "strOrNumOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1642,
          "end": 1650,
          "value": "string",
          "raw": "\"string\""
        }
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
                "name": "numOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1670,
                "end": 1684,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
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
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1725,
                "end": 1739,
                "name": "strOrNumOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1753,
      "end": 1846,
      "test": {
        "type": "BinaryExpression",
        "start": 1757,
        "end": 1783,
        "left": {
          "type": "UnaryExpression",
          "start": 1757,
          "end": 1770,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1764,
            "end": 1770,
            "name": "strOrC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1775,
          "end": 1783,
          "value": "string",
          "raw": "\"string\""
        }
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1795,
                "end": 1801,
                "name": "strOrC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
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
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1827,
                "end": 1833,
                "name": "strOrC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1848,
      "end": 1991,
      "test": {
        "type": "BinaryExpression",
        "start": 1852,
        "end": 1881,
        "left": {
          "type": "UnaryExpression",
          "start": 1852,
          "end": 1868,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1859,
            "end": 1868,
            "name": "numOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1873,
          "end": 1881,
          "value": "string",
          "raw": "\"string\""
        }
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
                "id": {
                  "type": "Identifier",
                  "start": 1893,
                  "end": 1913,
                  "name": "x1",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1916,
                  "end": 1925,
                  "name": "numOrBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 1964,
                  "end": 1970,
                  "name": "x2",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1973,
                  "end": 1982,
                  "name": "numOrBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
