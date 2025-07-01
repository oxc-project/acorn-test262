__ESTREE_TEST__:PASS:
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
