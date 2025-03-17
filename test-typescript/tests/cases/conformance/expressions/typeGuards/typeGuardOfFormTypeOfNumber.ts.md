__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2048,
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
          "value": "number",
          "raw": "\"number\""
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
                "name": "num",
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
                "name": "str",
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
      "end": 823,
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
            "name": "numOrBool",
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
          "value": "number",
          "raw": "\"number\""
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
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 731,
                "end": 740,
                "name": "numOrBool",
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
        "end": 823,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 765,
            "end": 801,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 769,
                "end": 800,
                "id": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 788,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 770,
                    "end": 788,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 772,
                      "end": 788,
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
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 791,
                  "end": 800,
                  "name": "numOrBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 824,
      "end": 964,
      "test": {
        "type": "BinaryExpression",
        "start": 828,
        "end": 862,
        "left": {
          "type": "UnaryExpression",
          "start": 828,
          "end": 849,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 835,
            "end": 849,
            "name": "strOrNumOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 854,
          "end": 862,
          "value": "number",
          "raw": "\"number\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 864,
        "end": 903,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 870,
            "end": 891,
            "expression": {
              "type": "AssignmentExpression",
              "start": 870,
              "end": 890,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 870,
                "end": 873,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 876,
                "end": 890,
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
        "start": 909,
        "end": 964,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 915,
            "end": 942,
            "expression": {
              "type": "AssignmentExpression",
              "start": 915,
              "end": 941,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 915,
                "end": 924,
                "name": "strOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 927,
                "end": 941,
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
      "start": 965,
      "end": 1058,
      "test": {
        "type": "BinaryExpression",
        "start": 969,
        "end": 995,
        "left": {
          "type": "UnaryExpression",
          "start": 969,
          "end": 982,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 976,
            "end": 982,
            "name": "numOrC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 987,
          "end": 995,
          "value": "number",
          "raw": "\"number\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 997,
        "end": 1028,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1003,
            "end": 1016,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1003,
              "end": 1015,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1003,
                "end": 1006,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1009,
                "end": 1015,
                "name": "numOrC",
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
        "start": 1034,
        "end": 1058,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1040,
            "end": 1051,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1040,
              "end": 1050,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1040,
                "end": 1041,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1044,
                "end": 1050,
                "name": "numOrC",
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
      "start": 1060,
      "end": 1203,
      "test": {
        "type": "BinaryExpression",
        "start": 1064,
        "end": 1093,
        "left": {
          "type": "UnaryExpression",
          "start": 1064,
          "end": 1080,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1071,
            "end": 1080,
            "name": "strOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 1085,
          "end": 1093,
          "value": "number",
          "raw": "\"number\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1095,
        "end": 1132,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1101,
            "end": 1124,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1105,
                "end": 1123,
                "id": {
                  "type": "Identifier",
                  "start": 1105,
                  "end": 1111,
                  "name": "y1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1107,
                    "end": 1111,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1109,
                      "end": 1111,
                      "members": []
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1114,
                  "end": 1123,
                  "name": "strOrBool",
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
        "start": 1138,
        "end": 1203,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1144,
            "end": 1181,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1148,
                "end": 1180,
                "id": {
                  "type": "Identifier",
                  "start": 1148,
                  "end": 1168,
                  "name": "y2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1150,
                    "end": 1168,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1152,
                      "end": 1168,
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
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1171,
                  "end": 1180,
                  "name": "strOrBool",
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
      "start": 1419,
      "end": 1527,
      "test": {
        "type": "BinaryExpression",
        "start": 1423,
        "end": 1451,
        "left": {
          "type": "UnaryExpression",
          "start": 1423,
          "end": 1438,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1430,
            "end": 1438,
            "name": "strOrNum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1443,
          "end": 1451,
          "value": "number",
          "raw": "\"number\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1453,
        "end": 1488,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1459,
            "end": 1476,
            "expression": {
              "type": "BinaryExpression",
              "start": 1459,
              "end": 1475,
              "left": {
                "type": "Identifier",
                "start": 1459,
                "end": 1462,
                "name": "str",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 1467,
                "end": 1475,
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
        "start": 1494,
        "end": 1527,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1500,
            "end": 1515,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1500,
              "end": 1514,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1500,
                "end": 1503,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1506,
                "end": 1514,
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
      "start": 1528,
      "end": 1667,
      "test": {
        "type": "BinaryExpression",
        "start": 1532,
        "end": 1561,
        "left": {
          "type": "UnaryExpression",
          "start": 1532,
          "end": 1548,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1539,
            "end": 1548,
            "name": "numOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1553,
          "end": 1561,
          "value": "number",
          "raw": "\"number\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1563,
        "end": 1627,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1569,
            "end": 1605,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1573,
                "end": 1604,
                "id": {
                  "type": "Identifier",
                  "start": 1573,
                  "end": 1592,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1574,
                    "end": 1592,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1576,
                      "end": 1592,
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
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1595,
                  "end": 1604,
                  "name": "numOrBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1633,
        "end": 1667,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1639,
            "end": 1655,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1639,
              "end": 1654,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1639,
                "end": 1642,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1645,
                "end": 1654,
                "name": "numOrBool",
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
      "start": 1668,
      "end": 1808,
      "test": {
        "type": "BinaryExpression",
        "start": 1672,
        "end": 1706,
        "left": {
          "type": "UnaryExpression",
          "start": 1672,
          "end": 1693,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1679,
            "end": 1693,
            "name": "strOrNumOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1698,
          "end": 1706,
          "value": "number",
          "raw": "\"number\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1708,
        "end": 1763,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1714,
            "end": 1741,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1714,
              "end": 1740,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1714,
                "end": 1723,
                "name": "strOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1726,
                "end": 1740,
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
        "start": 1769,
        "end": 1808,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1775,
            "end": 1796,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1775,
              "end": 1795,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1775,
                "end": 1778,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1781,
                "end": 1795,
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
      "start": 1809,
      "end": 1902,
      "test": {
        "type": "BinaryExpression",
        "start": 1813,
        "end": 1839,
        "left": {
          "type": "UnaryExpression",
          "start": 1813,
          "end": 1826,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1820,
            "end": 1826,
            "name": "numOrC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1831,
          "end": 1839,
          "value": "number",
          "raw": "\"number\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1841,
        "end": 1865,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1847,
            "end": 1858,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1847,
              "end": 1857,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1847,
                "end": 1848,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1851,
                "end": 1857,
                "name": "numOrC",
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
        "start": 1871,
        "end": 1902,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1877,
            "end": 1890,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1877,
              "end": 1889,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1877,
                "end": 1880,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1883,
                "end": 1889,
                "name": "numOrC",
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
      "start": 1904,
      "end": 2047,
      "test": {
        "type": "BinaryExpression",
        "start": 1908,
        "end": 1937,
        "left": {
          "type": "UnaryExpression",
          "start": 1908,
          "end": 1924,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1915,
            "end": 1924,
            "name": "strOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1929,
          "end": 1937,
          "value": "number",
          "raw": "\"number\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1939,
        "end": 2004,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1945,
            "end": 1982,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1949,
                "end": 1981,
                "id": {
                  "type": "Identifier",
                  "start": 1949,
                  "end": 1969,
                  "name": "y1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1951,
                    "end": 1969,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1953,
                      "end": 1969,
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
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1972,
                  "end": 1981,
                  "name": "strOrBool",
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
        "start": 2010,
        "end": 2047,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2016,
            "end": 2039,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2020,
                "end": 2038,
                "id": {
                  "type": "Identifier",
                  "start": 2020,
                  "end": 2026,
                  "name": "y2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2022,
                    "end": 2026,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 2024,
                      "end": 2026,
                      "members": []
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 2029,
                  "end": 2038,
                  "name": "strOrBool",
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
