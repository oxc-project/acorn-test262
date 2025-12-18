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
            "name": "emptyObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 316,
                "end": 318
              },
              "start": 314,
              "end": 318
            },
            "start": 306,
            "end": 318
          },
          "init": null,
          "definite": false,
          "start": 306,
          "end": 318
        }
      ],
      "declare": false,
      "start": 302,
      "end": 319
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
                  "start": 327,
                  "end": 328
                },
                "typeArguments": null,
                "start": 327,
                "end": 328
              },
              "start": 325,
              "end": 328
            },
            "start": 324,
            "end": 328
          },
          "init": null,
          "definite": false,
          "start": 324,
          "end": 328
        }
      ],
      "declare": false,
      "start": 320,
      "end": 329
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
            "start": 617,
            "end": 623
          },
          "prefix": true,
          "start": 610,
          "end": 623
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 628,
          "end": 636
        },
        "start": 610,
        "end": 636
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
                "start": 644,
                "end": 645
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 648,
                "end": 654
              },
              "start": 644,
              "end": 654
            },
            "directive": null,
            "start": 644,
            "end": 655
          }
        ],
        "start": 638,
        "end": 662
      },
      "alternate": {
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 682,
                      "end": 688
                    },
                    "start": 680,
                    "end": 688
                  },
                  "start": 678,
                  "end": 688
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 691,
                  "end": 697
                },
                "definite": false,
                "start": 678,
                "end": 697
              }
            ],
            "declare": false,
            "start": 674,
            "end": 698
          }
        ],
        "start": 668,
        "end": 710
      },
      "start": 606,
      "end": 710
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
            "name": "numOrC",
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 728
          },
          "prefix": true,
          "start": 715,
          "end": 728
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 733,
          "end": 741
        },
        "start": 715,
        "end": 741
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
                "start": 749,
                "end": 750
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 753,
                "end": 759
              },
              "start": 749,
              "end": 759
            },
            "directive": null,
            "start": 749,
            "end": 760
          }
        ],
        "start": 743,
        "end": 767
      },
      "alternate": {
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 787,
                      "end": 793
                    },
                    "start": 785,
                    "end": 793
                  },
                  "start": 783,
                  "end": 793
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 797,
                  "end": 803
                },
                "definite": false,
                "start": 783,
                "end": 803
              }
            ],
            "declare": false,
            "start": 779,
            "end": 804
          }
        ],
        "start": 773,
        "end": 816
      },
      "start": 711,
      "end": 816
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
            "name": "boolOrC",
            "optional": false,
            "typeAnnotation": null,
            "start": 828,
            "end": 835
          },
          "prefix": true,
          "start": 821,
          "end": 835
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 840,
          "end": 848
        },
        "start": 821,
        "end": 848
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
                "start": 856,
                "end": 857
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "boolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 860,
                "end": 867
              },
              "start": 856,
              "end": 867
            },
            "directive": null,
            "start": 856,
            "end": 868
          }
        ],
        "start": 850,
        "end": 875
      },
      "alternate": {
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 895,
                      "end": 902
                    },
                    "start": 893,
                    "end": 902
                  },
                  "start": 891,
                  "end": 902
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "boolOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 905,
                  "end": 912
                },
                "definite": false,
                "start": 891,
                "end": 912
              }
            ],
            "declare": false,
            "start": 887,
            "end": 913
          }
        ],
        "start": 881,
        "end": 926
      },
      "start": 817,
      "end": 926
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
            "start": 938,
            "end": 944
          },
          "prefix": true,
          "start": 931,
          "end": 944
        },
        "operator": "===",
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Literal",
            "value": "Object",
            "raw": "\"Object\"",
            "start": 949,
            "end": 957
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 961,
            "end": 967
          },
          "start": 949,
          "end": 967
        },
        "start": 931,
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1005,
                "end": 1006
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1009,
                "end": 1015
              },
              "start": 1005,
              "end": 1015
            },
            "directive": null,
            "start": 1005,
            "end": 1016
          }
        ],
        "start": 969,
        "end": 1050
      },
      "alternate": {
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
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1070,
                      "end": 1076
                    },
                    "start": 1068,
                    "end": 1076
                  },
                  "start": 1066,
                  "end": 1076
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1079,
                  "end": 1085
                },
                "definite": false,
                "start": 1066,
                "end": 1085
              }
            ],
            "declare": false,
            "start": 1062,
            "end": 1086
          }
        ],
        "start": 1056,
        "end": 1121
      },
      "start": 927,
      "end": 1121
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
            "start": 1134,
            "end": 1148
          },
          "prefix": true,
          "start": 1127,
          "end": 1148
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 1153,
          "end": 1161
        },
        "start": 1127,
        "end": 1161
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
                  "name": "q1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1177,
                      "end": 1179
                    },
                    "start": 1175,
                    "end": 1179
                  },
                  "start": 1173,
                  "end": 1179
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1182,
                  "end": 1196
                },
                "definite": false,
                "start": 1173,
                "end": 1196
              }
            ],
            "declare": false,
            "start": 1169,
            "end": 1197
          }
        ],
        "start": 1163,
        "end": 1205
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
                  "name": "q2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1225,
                          "end": 1231
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1234,
                          "end": 1240
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1243,
                          "end": 1250
                        }
                      ],
                      "start": 1225,
                      "end": 1250
                    },
                    "start": 1223,
                    "end": 1250
                  },
                  "start": 1221,
                  "end": 1250
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1253,
                  "end": 1267
                },
                "definite": false,
                "start": 1221,
                "end": 1267
              }
            ],
            "declare": false,
            "start": 1217,
            "end": 1268
          }
        ],
        "start": 1211,
        "end": 1299
      },
      "start": 1123,
      "end": 1299
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
            "start": 1526,
            "end": 1532
          },
          "prefix": true,
          "start": 1519,
          "end": 1532
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 1537,
          "end": 1545
        },
        "start": 1519,
        "end": 1545
      },
      "consequent": {
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1561,
                      "end": 1567
                    },
                    "start": 1559,
                    "end": 1567
                  },
                  "start": 1557,
                  "end": 1567
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1570,
                  "end": 1576
                },
                "definite": false,
                "start": 1557,
                "end": 1576
              }
            ],
            "declare": false,
            "start": 1553,
            "end": 1577
          }
        ],
        "start": 1547,
        "end": 1589
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
                "start": 1601,
                "end": 1602
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1605,
                "end": 1611
              },
              "start": 1601,
              "end": 1611
            },
            "directive": null,
            "start": 1601,
            "end": 1612
          }
        ],
        "start": 1595,
        "end": 1619
      },
      "start": 1515,
      "end": 1619
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
            "name": "numOrC",
            "optional": false,
            "typeAnnotation": null,
            "start": 1631,
            "end": 1637
          },
          "prefix": true,
          "start": 1624,
          "end": 1637
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 1642,
          "end": 1650
        },
        "start": 1624,
        "end": 1650
      },
      "consequent": {
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1666,
                      "end": 1672
                    },
                    "start": 1664,
                    "end": 1672
                  },
                  "start": 1662,
                  "end": 1672
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1675,
                  "end": 1681
                },
                "definite": false,
                "start": 1662,
                "end": 1681
              }
            ],
            "declare": false,
            "start": 1658,
            "end": 1682
          }
        ],
        "start": 1652,
        "end": 1694
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
                "start": 1706,
                "end": 1707
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1710,
                "end": 1716
              },
              "start": 1706,
              "end": 1716
            },
            "directive": null,
            "start": 1706,
            "end": 1717
          }
        ],
        "start": 1700,
        "end": 1724
      },
      "start": 1620,
      "end": 1724
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
            "name": "boolOrC",
            "optional": false,
            "typeAnnotation": null,
            "start": 1736,
            "end": 1743
          },
          "prefix": true,
          "start": 1729,
          "end": 1743
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 1748,
          "end": 1756
        },
        "start": 1729,
        "end": 1756
      },
      "consequent": {
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1772,
                      "end": 1779
                    },
                    "start": 1770,
                    "end": 1779
                  },
                  "start": 1768,
                  "end": 1779
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "boolOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1782,
                  "end": 1789
                },
                "definite": false,
                "start": 1768,
                "end": 1789
              }
            ],
            "declare": false,
            "start": 1764,
            "end": 1790
          }
        ],
        "start": 1758,
        "end": 1803
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
                "start": 1815,
                "end": 1816
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "boolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1819,
                "end": 1826
              },
              "start": 1815,
              "end": 1826
            },
            "directive": null,
            "start": 1815,
            "end": 1827
          }
        ],
        "start": 1809,
        "end": 1834
      },
      "start": 1725,
      "end": 1834
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
            "start": 1847,
            "end": 1861
          },
          "prefix": true,
          "start": 1840,
          "end": 1861
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 1866,
          "end": 1874
        },
        "start": 1840,
        "end": 1874
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
                  "name": "q1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1890,
                          "end": 1896
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1899,
                          "end": 1905
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1908,
                          "end": 1915
                        }
                      ],
                      "start": 1890,
                      "end": 1915
                    },
                    "start": 1888,
                    "end": 1915
                  },
                  "start": 1886,
                  "end": 1915
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1918,
                  "end": 1932
                },
                "definite": false,
                "start": 1886,
                "end": 1932
              }
            ],
            "declare": false,
            "start": 1882,
            "end": 1933
          }
        ],
        "start": 1876,
        "end": 1964
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
                  "name": "q2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1984,
                      "end": 1986
                    },
                    "start": 1982,
                    "end": 1986
                  },
                  "start": 1980,
                  "end": 1986
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1989,
                  "end": 2003
                },
                "definite": false,
                "start": 1980,
                "end": 2003
              }
            ],
            "declare": false,
            "start": 1976,
            "end": 2004
          }
        ],
        "start": 1970,
        "end": 2012
      },
      "start": 1836,
      "end": 2012
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2012
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 10,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 32,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 49,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 53,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 68,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 85,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 89,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 116,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 120,
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
    "value": "string",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 149,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 153,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 173,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 181,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 185,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 210,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 219,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 228,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 232,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 252,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 256,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 276,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 280,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 289,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 302,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "emptyObj",
    "start": 306,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 320,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 606,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 610,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 617,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 624,
    "end": 627
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 628,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 648,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 663,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 674,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 678,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 682,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 691,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 711,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 715,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 722,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 729,
    "end": 732
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 733,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 753,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 766,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 768,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 773,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 779,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 783,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 787,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 797,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 817,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 821,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 828,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 836,
    "end": 839
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 840,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 860,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 876,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 887,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 891,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 895,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 905,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 927,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 931,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 938,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 945,
    "end": 948
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 949,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 958,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 961,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 1009,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1051,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1062,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 1066,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1070,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 1079,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1123,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1127,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1134,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1149,
    "end": 1152
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 1153,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "q1",
    "start": 1173,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1182,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1206,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1217,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "q2",
    "start": 1221,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1225,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1234,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1243,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1253,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1515,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1519,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 1526,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1533,
    "end": 1536
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 1537,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1553,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1557,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1561,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 1570,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1590,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 1605,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1620,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1624,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 1631,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1638,
    "end": 1641
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 1642,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1658,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1662,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1666,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 1675,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1695,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 1710,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1725,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1729,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 1736,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1744,
    "end": 1747
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 1748,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1764,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 1768,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1772,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 1782,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1804,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 1819,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1836,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1840,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1847,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1862,
    "end": 1865
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 1866,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1882,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "q1",
    "start": 1886,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1890,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1899,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1908,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1918,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1965,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1976,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "q2",
    "start": 1980,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1989,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2011,
    "end": 2012
  }
]
```
