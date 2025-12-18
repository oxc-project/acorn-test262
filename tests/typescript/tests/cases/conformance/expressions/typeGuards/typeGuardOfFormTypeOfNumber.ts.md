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
          "value": "number",
          "raw": "\"number\"",
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
                "name": "num",
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
                "name": "str",
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
            "name": "numOrBool",
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
          "value": "number",
          "raw": "\"number\"",
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
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 725,
                "end": 728
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrBool",
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 772,
                          "end": 778
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 781,
                          "end": 788
                        }
                      ],
                      "start": 772,
                      "end": 788
                    },
                    "start": 770,
                    "end": 788
                  },
                  "start": 769,
                  "end": 788
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 800
                },
                "definite": false,
                "start": 769,
                "end": 800
              }
            ],
            "declare": false,
            "start": 765,
            "end": 801
          }
        ],
        "start": 759,
        "end": 823
      },
      "start": 684,
      "end": 823
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
            "start": 835,
            "end": 849
          },
          "prefix": true,
          "start": 828,
          "end": 849
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 854,
          "end": 862
        },
        "start": 828,
        "end": 862
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
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 870,
                "end": 873
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 876,
                "end": 890
              },
              "start": 870,
              "end": 890
            },
            "directive": null,
            "start": 870,
            "end": 891
          }
        ],
        "start": 864,
        "end": 903
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
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 915,
                "end": 924
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 927,
                "end": 941
              },
              "start": 915,
              "end": 941
            },
            "directive": null,
            "start": 915,
            "end": 942
          }
        ],
        "start": 909,
        "end": 964
      },
      "start": 824,
      "end": 964
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
            "start": 976,
            "end": 982
          },
          "prefix": true,
          "start": 969,
          "end": 982
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 987,
          "end": 995
        },
        "start": 969,
        "end": 995
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
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 1003,
                "end": 1006
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1009,
                "end": 1015
              },
              "start": 1003,
              "end": 1015
            },
            "directive": null,
            "start": 1003,
            "end": 1016
          }
        ],
        "start": 997,
        "end": 1028
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
                "start": 1040,
                "end": 1041
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1044,
                "end": 1050
              },
              "start": 1040,
              "end": 1050
            },
            "directive": null,
            "start": 1040,
            "end": 1051
          }
        ],
        "start": 1034,
        "end": 1058
      },
      "start": 965,
      "end": 1058
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
            "start": 1071,
            "end": 1080
          },
          "prefix": true,
          "start": 1064,
          "end": 1080
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 1085,
          "end": 1093
        },
        "start": 1064,
        "end": 1093
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
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1109,
                      "end": 1111
                    },
                    "start": 1107,
                    "end": 1111
                  },
                  "start": 1105,
                  "end": 1111
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1114,
                  "end": 1123
                },
                "definite": false,
                "start": 1105,
                "end": 1123
              }
            ],
            "declare": false,
            "start": 1101,
            "end": 1124
          }
        ],
        "start": 1095,
        "end": 1132
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
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1152,
                          "end": 1158
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1161,
                          "end": 1168
                        }
                      ],
                      "start": 1152,
                      "end": 1168
                    },
                    "start": 1150,
                    "end": 1168
                  },
                  "start": 1148,
                  "end": 1168
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1171,
                  "end": 1180
                },
                "definite": false,
                "start": 1148,
                "end": 1180
              }
            ],
            "declare": false,
            "start": 1144,
            "end": 1181
          }
        ],
        "start": 1138,
        "end": 1203
      },
      "start": 1060,
      "end": 1203
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
            "start": 1430,
            "end": 1438
          },
          "prefix": true,
          "start": 1423,
          "end": 1438
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 1443,
          "end": 1451
        },
        "start": 1423,
        "end": 1451
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
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 1459,
                "end": 1462
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 1467,
                "end": 1475
              },
              "start": 1459,
              "end": 1475
            },
            "directive": null,
            "start": 1459,
            "end": 1476
          }
        ],
        "start": 1453,
        "end": 1488
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
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 1500,
                "end": 1503
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 1506,
                "end": 1514
              },
              "start": 1500,
              "end": 1514
            },
            "directive": null,
            "start": 1500,
            "end": 1515
          }
        ],
        "start": 1494,
        "end": 1527
      },
      "start": 1419,
      "end": 1527
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
            "start": 1539,
            "end": 1548
          },
          "prefix": true,
          "start": 1532,
          "end": 1548
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 1553,
          "end": 1561
        },
        "start": 1532,
        "end": 1561
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1576,
                          "end": 1582
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1585,
                          "end": 1592
                        }
                      ],
                      "start": 1576,
                      "end": 1592
                    },
                    "start": 1574,
                    "end": 1592
                  },
                  "start": 1573,
                  "end": 1592
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1595,
                  "end": 1604
                },
                "definite": false,
                "start": 1573,
                "end": 1604
              }
            ],
            "declare": false,
            "start": 1569,
            "end": 1605
          }
        ],
        "start": 1563,
        "end": 1627
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
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 1639,
                "end": 1642
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1645,
                "end": 1654
              },
              "start": 1639,
              "end": 1654
            },
            "directive": null,
            "start": 1639,
            "end": 1655
          }
        ],
        "start": 1633,
        "end": 1667
      },
      "start": 1528,
      "end": 1667
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
            "start": 1679,
            "end": 1693
          },
          "prefix": true,
          "start": 1672,
          "end": 1693
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 1698,
          "end": 1706
        },
        "start": 1672,
        "end": 1706
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
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1714,
                "end": 1723
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1726,
                "end": 1740
              },
              "start": 1714,
              "end": 1740
            },
            "directive": null,
            "start": 1714,
            "end": 1741
          }
        ],
        "start": 1708,
        "end": 1763
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
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 1775,
                "end": 1778
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1781,
                "end": 1795
              },
              "start": 1775,
              "end": 1795
            },
            "directive": null,
            "start": 1775,
            "end": 1796
          }
        ],
        "start": 1769,
        "end": 1808
      },
      "start": 1668,
      "end": 1808
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
            "start": 1820,
            "end": 1826
          },
          "prefix": true,
          "start": 1813,
          "end": 1826
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 1831,
          "end": 1839
        },
        "start": 1813,
        "end": 1839
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
                "start": 1847,
                "end": 1848
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1851,
                "end": 1857
              },
              "start": 1847,
              "end": 1857
            },
            "directive": null,
            "start": 1847,
            "end": 1858
          }
        ],
        "start": 1841,
        "end": 1865
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
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 1877,
                "end": 1880
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1883,
                "end": 1889
              },
              "start": 1877,
              "end": 1889
            },
            "directive": null,
            "start": 1877,
            "end": 1890
          }
        ],
        "start": 1871,
        "end": 1902
      },
      "start": 1809,
      "end": 1902
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
            "start": 1915,
            "end": 1924
          },
          "prefix": true,
          "start": 1908,
          "end": 1924
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 1929,
          "end": 1937
        },
        "start": 1908,
        "end": 1937
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
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1953,
                          "end": 1959
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1962,
                          "end": 1969
                        }
                      ],
                      "start": 1953,
                      "end": 1969
                    },
                    "start": 1951,
                    "end": 1969
                  },
                  "start": 1949,
                  "end": 1969
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1972,
                  "end": 1981
                },
                "definite": false,
                "start": 1949,
                "end": 1981
              }
            ],
            "declare": false,
            "start": 1945,
            "end": 1982
          }
        ],
        "start": 1939,
        "end": 2004
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
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 2024,
                      "end": 2026
                    },
                    "start": 2022,
                    "end": 2026
                  },
                  "start": 2020,
                  "end": 2026
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2029,
                  "end": 2038
                },
                "definite": false,
                "start": 2020,
                "end": 2038
              }
            ],
            "declare": false,
            "start": 2016,
            "end": 2039
          }
        ],
        "start": 2010,
        "end": 2047
      },
      "start": 1904,
      "end": 2047
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2047
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
    "value": "\"number\"",
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
    "value": "num",
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
    "value": "str",
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
    "value": "numOrBool",
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
    "value": "\"number\"",
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
    "value": "num",
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
    "value": "numOrBool",
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
    "type": "Keyword",
    "value": "var",
    "start": 765,
    "end": 768,
    "range": [
      765,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 772,
    "end": 778,
    "range": [
      772,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 781,
    "end": 788,
    "range": [
      781,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 791,
    "end": 800,
    "range": [
      791,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 824,
    "end": 826,
    "range": [
      824,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 828,
    "end": 834,
    "range": [
      828,
      834
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 835,
    "end": 849,
    "range": [
      835,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 850,
    "end": 853,
    "range": [
      850,
      853
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 854,
    "end": 862,
    "range": [
      854,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 870,
    "end": 873,
    "range": [
      870,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 876,
    "end": 890,
    "range": [
      876,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 904,
    "end": 908,
    "range": [
      904,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 915,
    "end": 924,
    "range": [
      915,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 927,
    "end": 941,
    "range": [
      927,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 965,
    "end": 967,
    "range": [
      965,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 969,
    "end": 975,
    "range": [
      969,
      975
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 976,
    "end": 982,
    "range": [
      976,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 983,
    "end": 986,
    "range": [
      983,
      986
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 987,
    "end": 995,
    "range": [
      987,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1003,
    "end": 1006,
    "range": [
      1003,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 1009,
    "end": 1015,
    "range": [
      1009,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1029,
    "end": 1033,
    "range": [
      1029,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 1044,
    "end": 1050,
    "range": [
      1044,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1060,
    "end": 1062,
    "range": [
      1060,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1064,
    "end": 1070,
    "range": [
      1064,
      1070
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1071,
    "end": 1080,
    "range": [
      1071,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1081,
    "end": 1084,
    "range": [
      1081,
      1084
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1085,
    "end": 1093,
    "range": [
      1085,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1101,
    "end": 1104,
    "range": [
      1101,
      1104
    ]
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1105,
    "end": 1107,
    "range": [
      1105,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1114,
    "end": 1123,
    "range": [
      1114,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1133,
    "end": 1137,
    "range": [
      1133,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1144,
    "end": 1147,
    "range": [
      1144,
      1147
    ]
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 1148,
    "end": 1150,
    "range": [
      1148,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1152,
    "end": 1158,
    "range": [
      1152,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1161,
    "end": 1168,
    "range": [
      1161,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1171,
    "end": 1180,
    "range": [
      1171,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1419,
    "end": 1421,
    "range": [
      1419,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1423,
    "end": 1429,
    "range": [
      1423,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1430,
    "end": 1438,
    "range": [
      1430,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1439,
    "end": 1442,
    "range": [
      1439,
      1442
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1443,
    "end": 1451,
    "range": [
      1443,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1459,
    "end": 1462,
    "range": [
      1459,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1463,
    "end": 1466,
    "range": [
      1463,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1467,
    "end": 1475,
    "range": [
      1467,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1489,
    "end": 1493,
    "range": [
      1489,
      1493
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1500,
    "end": 1503,
    "range": [
      1500,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1506,
    "end": 1514,
    "range": [
      1506,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1528,
    "end": 1530,
    "range": [
      1528,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1532,
    "end": 1538,
    "range": [
      1532,
      1538
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1539,
    "end": 1548,
    "range": [
      1539,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1549,
    "end": 1552,
    "range": [
      1549,
      1552
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1553,
    "end": 1561,
    "range": [
      1553,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1569,
    "end": 1572,
    "range": [
      1569,
      1572
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1576,
    "end": 1582,
    "range": [
      1576,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1585,
    "end": 1592,
    "range": [
      1585,
      1592
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1595,
    "end": 1604,
    "range": [
      1595,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1628,
    "end": 1632,
    "range": [
      1628,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1639,
    "end": 1642,
    "range": [
      1639,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1645,
    "end": 1654,
    "range": [
      1645,
      1654
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1666,
    "end": 1667,
    "range": [
      1666,
      1667
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1668,
    "end": 1670,
    "range": [
      1668,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1672,
    "end": 1678,
    "range": [
      1672,
      1678
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1679,
    "end": 1693,
    "range": [
      1679,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1694,
    "end": 1697,
    "range": [
      1694,
      1697
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1698,
    "end": 1706,
    "range": [
      1698,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1708,
    "end": 1709,
    "range": [
      1708,
      1709
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1714,
    "end": 1723,
    "range": [
      1714,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1726,
    "end": 1740,
    "range": [
      1726,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1764,
    "end": 1768,
    "range": [
      1764,
      1768
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1775,
    "end": 1778,
    "range": [
      1775,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1781,
    "end": 1795,
    "range": [
      1781,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1809,
    "end": 1811,
    "range": [
      1809,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1813,
    "end": 1819,
    "range": [
      1813,
      1819
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 1820,
    "end": 1826,
    "range": [
      1820,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1827,
    "end": 1830,
    "range": [
      1827,
      1830
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1831,
    "end": 1839,
    "range": [
      1831,
      1839
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1849,
    "end": 1850,
    "range": [
      1849,
      1850
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 1851,
    "end": 1857,
    "range": [
      1851,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1864,
    "end": 1865,
    "range": [
      1864,
      1865
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1866,
    "end": 1870,
    "range": [
      1866,
      1870
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1877,
    "end": 1880,
    "range": [
      1877,
      1880
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 1883,
    "end": 1889,
    "range": [
      1883,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1904,
    "end": 1906,
    "range": [
      1904,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1908,
    "end": 1914,
    "range": [
      1908,
      1914
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1915,
    "end": 1924,
    "range": [
      1915,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1925,
    "end": 1928,
    "range": [
      1925,
      1928
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1929,
    "end": 1937,
    "range": [
      1929,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1945,
    "end": 1948,
    "range": [
      1945,
      1948
    ]
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1949,
    "end": 1951,
    "range": [
      1949,
      1951
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1953,
    "end": 1959,
    "range": [
      1953,
      1959
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1962,
    "end": 1969,
    "range": [
      1962,
      1969
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1970,
    "end": 1971,
    "range": [
      1970,
      1971
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1972,
    "end": 1981,
    "range": [
      1972,
      1981
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2005,
    "end": 2009,
    "range": [
      2005,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2010,
    "end": 2011,
    "range": [
      2010,
      2011
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2016,
    "end": 2019,
    "range": [
      2016,
      2019
    ]
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 2020,
    "end": 2022,
    "range": [
      2020,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2024,
    "end": 2025,
    "range": [
      2024,
      2025
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2025,
    "end": 2026,
    "range": [
      2025,
      2026
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 2029,
    "end": 2038,
    "range": [
      2029,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  }
]
```
