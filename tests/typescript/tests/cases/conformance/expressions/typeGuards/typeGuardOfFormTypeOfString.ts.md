__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 10,
            "end": 27
          }
        ],
        "start": 8,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "EmptyStatement",
      "start": 29,
      "end": 30
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
              },
              "start": 39,
              "end": 47
            },
            "start": 36,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 47
        }
      ],
      "declare": false,
      "start": 32,
      "end": 48
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
            "name": "bool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 59,
                "end": 66
              },
              "start": 57,
              "end": 66
            },
            "start": 53,
            "end": 66
          },
          "init": null,
          "definite": false,
          "start": 53,
          "end": 66
        }
      ],
      "declare": false,
      "start": 49,
      "end": 67
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
                "start": 77,
                "end": 83
              },
              "start": 75,
              "end": 83
            },
            "start": 72,
            "end": 83
          },
          "init": null,
          "definite": false,
          "start": 72,
          "end": 83
        }
      ],
      "declare": false,
      "start": 68,
      "end": 84
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 99,
                "end": 114
              },
              "start": 97,
              "end": 114
            },
            "start": 89,
            "end": 114
          },
          "init": null,
          "definite": false,
          "start": 89,
          "end": 114
        }
      ],
      "declare": false,
      "start": 85,
      "end": 115
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
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 131,
                "end": 147
              },
              "start": 129,
              "end": 147
            },
            "start": 120,
            "end": 147
          },
          "init": null,
          "definite": false,
          "start": 120,
          "end": 147
        }
      ],
      "declare": false,
      "start": 116,
      "end": 148
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
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 164,
                "end": 180
              },
              "start": 162,
              "end": 180
            },
            "start": 153,
            "end": 180
          },
          "init": null,
          "definite": false,
          "start": 153,
          "end": 180
        }
      ],
      "declare": false,
      "start": 149,
      "end": 180
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
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 201,
                "end": 226
              },
              "start": 199,
              "end": 226
            },
            "start": 185,
            "end": 226
          },
          "init": null,
          "definite": false,
          "start": 185,
          "end": 226
        }
      ],
      "declare": false,
      "start": 181,
      "end": 227
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
            "name": "strOrC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 240,
                    "end": 246
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 249,
                      "end": 250
                    },
                    "typeArguments": null,
                    "start": 249,
                    "end": 250
                  }
                ],
                "start": 240,
                "end": 250
              },
              "start": 238,
              "end": 250
            },
            "start": 232,
            "end": 250
          },
          "init": null,
          "definite": false,
          "start": 232,
          "end": 250
        }
      ],
      "declare": false,
      "start": 228,
      "end": 251
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
            "name": "numOrC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 264,
                    "end": 270
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 274
                    },
                    "typeArguments": null,
                    "start": 273,
                    "end": 274
                  }
                ],
                "start": 264,
                "end": 274
              },
              "start": 262,
              "end": 274
            },
            "start": 256,
            "end": 274
          },
          "init": null,
          "definite": false,
          "start": 256,
          "end": 274
        }
      ],
      "declare": false,
      "start": 252,
      "end": 275
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
            "name": "boolOrC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 289,
                    "end": 296
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 300
                    },
                    "typeArguments": null,
                    "start": 299,
                    "end": 300
                  }
                ],
                "start": 289,
                "end": 300
              },
              "start": 287,
              "end": 300
            },
            "start": 280,
            "end": 300
          },
          "init": null,
          "definite": false,
          "start": 280,
          "end": 300
        }
      ],
      "declare": false,
      "start": 276,
      "end": 301
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 310
                },
                "typeArguments": null,
                "start": 309,
                "end": 310
              },
              "start": 307,
              "end": 310
            },
            "start": 306,
            "end": 310
          },
          "init": null,
          "definite": false,
          "start": 306,
          "end": 310
        }
      ],
      "declare": false,
      "start": 302,
      "end": 311
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 586,
            "end": 594
          },
          "prefix": true,
          "start": 579,
          "end": 594
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 599,
          "end": 607
        },
        "start": 579,
        "end": 607
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 618
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 621,
                "end": 629
              },
              "start": 615,
              "end": 629
            },
            "directive": null,
            "start": 615,
            "end": 630
          }
        ],
        "start": 609,
        "end": 642
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 654,
                "end": 657
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 662,
                "end": 670
              },
              "start": 654,
              "end": 670
            },
            "directive": null,
            "start": 654,
            "end": 671
          }
        ],
        "start": 648,
        "end": 683
      },
      "start": 575,
      "end": 683
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 695,
            "end": 704
          },
          "prefix": true,
          "start": 688,
          "end": 704
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 709,
          "end": 717
        },
        "start": 688,
        "end": 717
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 725,
                "end": 728
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 740
              },
              "start": 725,
              "end": 740
            },
            "directive": null,
            "start": 725,
            "end": 741
          }
        ],
        "start": 719,
        "end": 753
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null,
                "start": 765,
                "end": 769
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 772,
                "end": 781
              },
              "start": 765,
              "end": 781
            },
            "directive": null,
            "start": 765,
            "end": 782
          }
        ],
        "start": 759,
        "end": 795
      },
      "start": 684,
      "end": 795
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 807,
            "end": 821
          },
          "prefix": true,
          "start": 800,
          "end": 821
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 826,
          "end": 834
        },
        "start": 800,
        "end": 834
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 842,
                "end": 845
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 848,
                "end": 862
              },
              "start": 842,
              "end": 862
            },
            "directive": null,
            "start": 842,
            "end": 863
          }
        ],
        "start": 836,
        "end": 875
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 887,
                "end": 896
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 899,
                "end": 913
              },
              "start": 887,
              "end": 913
            },
            "directive": null,
            "start": 887,
            "end": 914
          }
        ],
        "start": 881,
        "end": 936
      },
      "start": 796,
      "end": 936
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrC",
            "optional": false,
            "typeAnnotation": null,
            "start": 948,
            "end": 954
          },
          "prefix": true,
          "start": 941,
          "end": 954
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 959,
          "end": 967
        },
        "start": 941,
        "end": 967
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 975,
                "end": 978
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 981,
                "end": 987
              },
              "start": 975,
              "end": 987
            },
            "directive": null,
            "start": 975,
            "end": 988
          }
        ],
        "start": 969,
        "end": 1000
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1012,
                "end": 1013
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1016,
                "end": 1022
              },
              "start": 1012,
              "end": 1022
            },
            "directive": null,
            "start": 1012,
            "end": 1023
          }
        ],
        "start": 1006,
        "end": 1030
      },
      "start": 937,
      "end": 1030
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1043,
            "end": 1052
          },
          "prefix": true,
          "start": 1036,
          "end": 1052
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 1057,
          "end": 1065
        },
        "start": 1036,
        "end": 1065
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1081,
                      "end": 1083
                    },
                    "start": 1079,
                    "end": 1083
                  },
                  "start": 1077,
                  "end": 1083
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1086,
                  "end": 1095
                },
                "definite": false,
                "start": 1077,
                "end": 1095
              }
            ],
            "declare": false,
            "start": 1073,
            "end": 1096
          }
        ],
        "start": 1067,
        "end": 1104
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 1124,
                      "end": 1140
                    },
                    "start": 1122,
                    "end": 1140
                  },
                  "start": 1120,
                  "end": 1140
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1143,
                  "end": 1152
                },
                "definite": false,
                "start": 1120,
                "end": 1152
              }
            ],
            "declare": false,
            "start": 1116,
            "end": 1153
          }
        ],
        "start": 1110,
        "end": 1175
      },
      "start": 1032,
      "end": 1175
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 1402,
            "end": 1410
          },
          "prefix": true,
          "start": 1395,
          "end": 1410
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 1415,
          "end": 1423
        },
        "start": 1395,
        "end": 1423
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 1431,
                "end": 1434
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 1439,
                "end": 1447
              },
              "start": 1431,
              "end": 1447
            },
            "directive": null,
            "start": 1431,
            "end": 1448
          }
        ],
        "start": 1425,
        "end": 1460
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 1472,
                "end": 1475
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 1478,
                "end": 1486
              },
              "start": 1472,
              "end": 1486
            },
            "directive": null,
            "start": 1472,
            "end": 1487
          }
        ],
        "start": 1466,
        "end": 1499
      },
      "start": 1391,
      "end": 1499
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1511,
            "end": 1520
          },
          "prefix": true,
          "start": 1504,
          "end": 1520
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 1525,
          "end": 1533
        },
        "start": 1504,
        "end": 1533
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1541,
                "end": 1545
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1548,
                "end": 1557
              },
              "start": 1541,
              "end": 1557
            },
            "directive": null,
            "start": 1541,
            "end": 1558
          }
        ],
        "start": 1535,
        "end": 1571
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 1583,
                "end": 1586
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1589,
                "end": 1598
              },
              "start": 1583,
              "end": 1598
            },
            "directive": null,
            "start": 1583,
            "end": 1599
          }
        ],
        "start": 1577,
        "end": 1611
      },
      "start": 1500,
      "end": 1611
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1623,
            "end": 1637
          },
          "prefix": true,
          "start": 1616,
          "end": 1637
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 1642,
          "end": 1650
        },
        "start": 1616,
        "end": 1650
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1658,
                "end": 1667
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1670,
                "end": 1684
              },
              "start": 1658,
              "end": 1684
            },
            "directive": null,
            "start": 1658,
            "end": 1685
          }
        ],
        "start": 1652,
        "end": 1707
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 1719,
                "end": 1722
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1725,
                "end": 1739
              },
              "start": 1719,
              "end": 1739
            },
            "directive": null,
            "start": 1719,
            "end": 1740
          }
        ],
        "start": 1713,
        "end": 1752
      },
      "start": 1612,
      "end": 1752
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrC",
            "optional": false,
            "typeAnnotation": null,
            "start": 1764,
            "end": 1770
          },
          "prefix": true,
          "start": 1757,
          "end": 1770
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 1775,
          "end": 1783
        },
        "start": 1757,
        "end": 1783
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1791,
                "end": 1792
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1795,
                "end": 1801
              },
              "start": 1791,
              "end": 1801
            },
            "directive": null,
            "start": 1791,
            "end": 1802
          }
        ],
        "start": 1785,
        "end": 1809
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 1821,
                "end": 1824
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1827,
                "end": 1833
              },
              "start": 1821,
              "end": 1833
            },
            "directive": null,
            "start": 1821,
            "end": 1834
          }
        ],
        "start": 1815,
        "end": 1846
      },
      "start": 1753,
      "end": 1846
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1859,
            "end": 1868
          },
          "prefix": true,
          "start": 1852,
          "end": 1868
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 1873,
          "end": 1881
        },
        "start": 1852,
        "end": 1881
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 1897,
                      "end": 1913
                    },
                    "start": 1895,
                    "end": 1913
                  },
                  "start": 1893,
                  "end": 1913
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1916,
                  "end": 1925
                },
                "definite": false,
                "start": 1893,
                "end": 1925
              }
            ],
            "declare": false,
            "start": 1889,
            "end": 1926
          }
        ],
        "start": 1883,
        "end": 1948
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1968,
                      "end": 1970
                    },
                    "start": 1966,
                    "end": 1970
                  },
                  "start": 1964,
                  "end": 1970
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1973,
                  "end": 1982
                },
                "definite": false,
                "start": 1964,
                "end": 1982
              }
            ],
            "declare": false,
            "start": 1960,
            "end": 1983
          }
        ],
        "start": 1954,
        "end": 1991
      },
      "start": 1848,
      "end": 1991
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1991
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 10,
    "end": 17,
    "range": [
      10,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 21,
    "end": 27,
    "range": [
      21,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 32,
    "end": 35,
    "range": [
      32,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 36,
    "end": 39,
    "range": [
      36,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 41,
    "end": 47,
    "range": [
      41,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 49,
    "end": 52,
    "range": [
      49,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 53,
    "end": 57,
    "range": [
      53,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 59,
    "end": 66,
    "range": [
      59,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 68,
    "end": 71,
    "range": [
      68,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 72,
    "end": 75,
    "range": [
      72,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 77,
    "end": 83,
    "range": [
      77,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 85,
    "end": 88,
    "range": [
      85,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 89,
    "end": 97,
    "range": [
      89,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 99,
    "end": 105,
    "range": [
      99,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 108,
    "end": 114,
    "range": [
      108,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 116,
    "end": 119,
    "range": [
      116,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 120,
    "end": 129,
    "range": [
      120,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 131,
    "end": 137,
    "range": [
      131,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 140,
    "end": 147,
    "range": [
      140,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 149,
    "end": 152,
    "range": [
      149,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 153,
    "end": 162,
    "range": [
      153,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 164,
    "end": 170,
    "range": [
      164,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 173,
    "end": 180,
    "range": [
      173,
      180
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 181,
    "end": 184,
    "range": [
      181,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 185,
    "end": 199,
    "range": [
      185,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 201,
    "end": 207,
    "range": [
      201,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 210,
    "end": 216,
    "range": [
      210,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 219,
    "end": 226,
    "range": [
      219,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 228,
    "end": 231,
    "range": [
      228,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 232,
    "end": 238,
    "range": [
      232,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 240,
    "end": 246,
    "range": [
      240,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 252,
    "end": 255,
    "range": [
      252,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 256,
    "end": 262,
    "range": [
      256,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 264,
    "end": 270,
    "range": [
      264,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 276,
    "end": 279,
    "range": [
      276,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 280,
    "end": 287,
    "range": [
      280,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 289,
    "end": 296,
    "range": [
      289,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 302,
    "end": 305,
    "range": [
      302,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 575,
    "end": 577,
    "range": [
      575,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 579,
    "end": 585,
    "range": [
      579,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 586,
    "end": 594,
    "range": [
      586,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 595,
    "end": 598,
    "range": [
      595,
      598
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 599,
    "end": 607,
    "range": [
      599,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 615,
    "end": 618,
    "range": [
      615,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 621,
    "end": 629,
    "range": [
      621,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 643,
    "end": 647,
    "range": [
      643,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 654,
    "end": 657,
    "range": [
      654,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 658,
    "end": 661,
    "range": [
      658,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 662,
    "end": 670,
    "range": [
      662,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 684,
    "end": 686,
    "range": [
      684,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 688,
    "end": 694,
    "range": [
      688,
      694
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 695,
    "end": 704,
    "range": [
      695,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 705,
    "end": 708,
    "range": [
      705,
      708
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 709,
    "end": 717,
    "range": [
      709,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 725,
    "end": 728,
    "range": [
      725,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 731,
    "end": 740,
    "range": [
      731,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 754,
    "end": 758,
    "range": [
      754,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 765,
    "end": 769,
    "range": [
      765,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 772,
    "end": 781,
    "range": [
      772,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 796,
    "end": 798,
    "range": [
      796,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 800,
    "end": 806,
    "range": [
      800,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 807,
    "end": 821,
    "range": [
      807,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 822,
    "end": 825,
    "range": [
      822,
      825
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 826,
    "end": 834,
    "range": [
      826,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 842,
    "end": 845,
    "range": [
      842,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 848,
    "end": 862,
    "range": [
      848,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 876,
    "end": 880,
    "range": [
      876,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 887,
    "end": 896,
    "range": [
      887,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 899,
    "end": 913,
    "range": [
      899,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 937,
    "end": 939,
    "range": [
      937,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 941,
    "end": 947,
    "range": [
      941,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 948,
    "end": 954,
    "range": [
      948,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 955,
    "end": 958,
    "range": [
      955,
      958
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 959,
    "end": 967,
    "range": [
      959,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 975,
    "end": 978,
    "range": [
      975,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 981,
    "end": 987,
    "range": [
      981,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1001,
    "end": 1005,
    "range": [
      1001,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 1016,
    "end": 1022,
    "range": [
      1016,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1032,
    "end": 1034,
    "range": [
      1032,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1036,
    "end": 1042,
    "range": [
      1036,
      1042
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1043,
    "end": 1052,
    "range": [
      1043,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1053,
    "end": 1056,
    "range": [
      1053,
      1056
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1057,
    "end": 1065,
    "range": [
      1057,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1073,
    "end": 1076,
    "range": [
      1073,
      1076
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1077,
    "end": 1079,
    "range": [
      1077,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1086,
    "end": 1095,
    "range": [
      1086,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1105,
    "end": 1109,
    "range": [
      1105,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1116,
    "end": 1119,
    "range": [
      1116,
      1119
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1120,
    "end": 1122,
    "range": [
      1120,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1124,
    "end": 1130,
    "range": [
      1124,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1133,
    "end": 1140,
    "range": [
      1133,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1143,
    "end": 1152,
    "range": [
      1143,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1391,
    "end": 1393,
    "range": [
      1391,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1395,
    "end": 1401,
    "range": [
      1395,
      1401
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1402,
    "end": 1410,
    "range": [
      1402,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1411,
    "end": 1414,
    "range": [
      1411,
      1414
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1415,
    "end": 1423,
    "range": [
      1415,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1431,
    "end": 1434,
    "range": [
      1431,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1435,
    "end": 1438,
    "range": [
      1435,
      1438
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1439,
    "end": 1447,
    "range": [
      1439,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1461,
    "end": 1465,
    "range": [
      1461,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1472,
    "end": 1475,
    "range": [
      1472,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1478,
    "end": 1486,
    "range": [
      1478,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1500,
    "end": 1502,
    "range": [
      1500,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1504,
    "end": 1510,
    "range": [
      1504,
      1510
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1511,
    "end": 1520,
    "range": [
      1511,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1521,
    "end": 1524,
    "range": [
      1521,
      1524
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1525,
    "end": 1533,
    "range": [
      1525,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 1541,
    "end": 1545,
    "range": [
      1541,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1548,
    "end": 1557,
    "range": [
      1548,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1570,
    "end": 1571,
    "range": [
      1570,
      1571
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1572,
    "end": 1576,
    "range": [
      1572,
      1576
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1583,
    "end": 1586,
    "range": [
      1583,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1589,
    "end": 1598,
    "range": [
      1589,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1612,
    "end": 1614,
    "range": [
      1612,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1616,
    "end": 1622,
    "range": [
      1616,
      1622
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1623,
    "end": 1637,
    "range": [
      1623,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1638,
    "end": 1641,
    "range": [
      1638,
      1641
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1642,
    "end": 1650,
    "range": [
      1642,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1658,
    "end": 1667,
    "range": [
      1658,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1670,
    "end": 1684,
    "range": [
      1670,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1708,
    "end": 1712,
    "range": [
      1708,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1719,
    "end": 1722,
    "range": [
      1719,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1725,
    "end": 1739,
    "range": [
      1725,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1753,
    "end": 1755,
    "range": [
      1753,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1757,
    "end": 1763,
    "range": [
      1757,
      1763
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 1764,
    "end": 1770,
    "range": [
      1764,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1771,
    "end": 1774,
    "range": [
      1771,
      1774
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1775,
    "end": 1783,
    "range": [
      1775,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 1795,
    "end": 1801,
    "range": [
      1795,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1810,
    "end": 1814,
    "range": [
      1810,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1821,
    "end": 1824,
    "range": [
      1821,
      1824
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 1827,
    "end": 1833,
    "range": [
      1827,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1848,
    "end": 1850,
    "range": [
      1848,
      1850
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1852,
    "end": 1858,
    "range": [
      1852,
      1858
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1859,
    "end": 1868,
    "range": [
      1859,
      1868
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1869,
    "end": 1872,
    "range": [
      1869,
      1872
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1873,
    "end": 1881,
    "range": [
      1873,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1889,
    "end": 1892,
    "range": [
      1889,
      1892
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1893,
    "end": 1895,
    "range": [
      1893,
      1895
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1897,
    "end": 1903,
    "range": [
      1897,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1906,
    "end": 1913,
    "range": [
      1906,
      1913
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1916,
    "end": 1925,
    "range": [
      1916,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1949,
    "end": 1953,
    "range": [
      1949,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1960,
    "end": 1963,
    "range": [
      1960,
      1963
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1964,
    "end": 1966,
    "range": [
      1964,
      1966
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1966,
    "end": 1967,
    "range": [
      1966,
      1967
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1969,
    "end": 1970,
    "range": [
      1969,
      1970
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1973,
    "end": 1982,
    "range": [
      1973,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1982,
    "end": 1983,
    "range": [
      1982,
      1983
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  }
]
```
