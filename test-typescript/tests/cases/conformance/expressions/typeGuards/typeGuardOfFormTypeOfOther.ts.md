__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2013,
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
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 318,
            "name": "emptyObj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 314,
              "end": 318,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 316,
                "end": 318,
                "members": []
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
      "start": 320,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 324,
          "end": 328,
          "id": {
            "type": "Identifier",
            "start": 324,
            "end": 328,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 328,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 327,
                "end": 328,
                "typeName": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 328,
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
      "start": 606,
      "end": 710,
      "test": {
        "type": "BinaryExpression",
        "start": 610,
        "end": 636,
        "left": {
          "type": "UnaryExpression",
          "start": 610,
          "end": 623,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 617,
            "end": 623,
            "name": "strOrC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 628,
          "end": 636,
          "value": "Object",
          "raw": "\"Object\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 638,
        "end": 662,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 644,
            "end": 655,
            "expression": {
              "type": "AssignmentExpression",
              "start": 644,
              "end": 654,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 644,
                "end": 645,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 648,
                "end": 654,
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
        "start": 668,
        "end": 710,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 674,
            "end": 698,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 678,
                "end": 697,
                "id": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 688,
                  "name": "r2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 680,
                    "end": 688,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 682,
                      "end": 688
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 691,
                  "end": 697,
                  "name": "strOrC",
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
      "start": 711,
      "end": 816,
      "test": {
        "type": "BinaryExpression",
        "start": 715,
        "end": 741,
        "left": {
          "type": "UnaryExpression",
          "start": 715,
          "end": 728,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 722,
            "end": 728,
            "name": "numOrC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 733,
          "end": 741,
          "value": "Object",
          "raw": "\"Object\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 743,
        "end": 767,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 749,
            "end": 760,
            "expression": {
              "type": "AssignmentExpression",
              "start": 749,
              "end": 759,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 749,
                "end": 750,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 753,
                "end": 759,
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
        "start": 773,
        "end": 816,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 779,
            "end": 804,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 783,
                "end": 803,
                "id": {
                  "type": "Identifier",
                  "start": 783,
                  "end": 793,
                  "name": "r3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 785,
                    "end": 793,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 787,
                      "end": 793
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 797,
                  "end": 803,
                  "name": "numOrC",
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
      "start": 817,
      "end": 926,
      "test": {
        "type": "BinaryExpression",
        "start": 821,
        "end": 848,
        "left": {
          "type": "UnaryExpression",
          "start": 821,
          "end": 835,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 828,
            "end": 835,
            "name": "boolOrC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 840,
          "end": 848,
          "value": "Object",
          "raw": "\"Object\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 850,
        "end": 875,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 856,
            "end": 868,
            "expression": {
              "type": "AssignmentExpression",
              "start": 856,
              "end": 867,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 856,
                "end": 857,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 860,
                "end": 867,
                "name": "boolOrC",
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
        "end": 926,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 887,
            "end": 913,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 891,
                "end": 912,
                "id": {
                  "type": "Identifier",
                  "start": 891,
                  "end": 902,
                  "name": "r4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 893,
                    "end": 902,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 895,
                      "end": 902
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 905,
                  "end": 912,
                  "name": "boolOrC",
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
      "start": 927,
      "end": 1121,
      "test": {
        "type": "BinaryExpression",
        "start": 931,
        "end": 967,
        "left": {
          "type": "UnaryExpression",
          "start": 931,
          "end": 944,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 938,
            "end": 944,
            "name": "strOrC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "TSAsExpression",
          "start": 949,
          "end": 967,
          "expression": {
            "type": "Literal",
            "start": 949,
            "end": 957,
            "value": "Object",
            "raw": "\"Object\""
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 961,
            "end": 967
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 969,
        "end": 1050,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1005,
            "end": 1016,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1005,
              "end": 1015,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1005,
                "end": 1006,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1009,
                "end": 1015,
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
        "start": 1056,
        "end": 1121,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1062,
            "end": 1086,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1066,
                "end": 1085,
                "id": {
                  "type": "Identifier",
                  "start": 1066,
                  "end": 1076,
                  "name": "r5",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1068,
                    "end": 1076,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1070,
                      "end": 1076
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1079,
                  "end": 1085,
                  "name": "strOrC",
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
      "start": 1123,
      "end": 1299,
      "test": {
        "type": "BinaryExpression",
        "start": 1127,
        "end": 1161,
        "left": {
          "type": "UnaryExpression",
          "start": 1127,
          "end": 1148,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1134,
            "end": 1148,
            "name": "strOrNumOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 1153,
          "end": 1161,
          "value": "Object",
          "raw": "\"Object\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1163,
        "end": 1205,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1169,
            "end": 1197,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1173,
                "end": 1196,
                "id": {
                  "type": "Identifier",
                  "start": 1173,
                  "end": 1179,
                  "name": "q1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1175,
                    "end": 1179,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1177,
                      "end": 1179,
                      "members": []
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1182,
                  "end": 1196,
                  "name": "strOrNumOrBool",
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
        "start": 1211,
        "end": 1299,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1217,
            "end": 1268,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1221,
                "end": 1267,
                "id": {
                  "type": "Identifier",
                  "start": 1221,
                  "end": 1250,
                  "name": "q2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1223,
                    "end": 1250,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1225,
                      "end": 1250,
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
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1253,
                  "end": 1267,
                  "name": "strOrNumOrBool",
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
      "start": 1515,
      "end": 1619,
      "test": {
        "type": "BinaryExpression",
        "start": 1519,
        "end": 1545,
        "left": {
          "type": "UnaryExpression",
          "start": 1519,
          "end": 1532,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1526,
            "end": 1532,
            "name": "strOrC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1537,
          "end": 1545,
          "value": "Object",
          "raw": "\"Object\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1547,
        "end": 1589,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1553,
            "end": 1577,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1557,
                "end": 1576,
                "id": {
                  "type": "Identifier",
                  "start": 1557,
                  "end": 1567,
                  "name": "r2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1559,
                    "end": 1567,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1561,
                      "end": 1567
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1570,
                  "end": 1576,
                  "name": "strOrC",
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
        "start": 1595,
        "end": 1619,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1601,
            "end": 1612,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1601,
              "end": 1611,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1601,
                "end": 1602,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1605,
                "end": 1611,
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
      "start": 1620,
      "end": 1724,
      "test": {
        "type": "BinaryExpression",
        "start": 1624,
        "end": 1650,
        "left": {
          "type": "UnaryExpression",
          "start": 1624,
          "end": 1637,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1631,
            "end": 1637,
            "name": "numOrC",
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
          "value": "Object",
          "raw": "\"Object\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1652,
        "end": 1694,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1658,
            "end": 1682,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1662,
                "end": 1681,
                "id": {
                  "type": "Identifier",
                  "start": 1662,
                  "end": 1672,
                  "name": "r3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1664,
                    "end": 1672,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1666,
                      "end": 1672
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1675,
                  "end": 1681,
                  "name": "numOrC",
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
        "start": 1700,
        "end": 1724,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1706,
            "end": 1717,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1706,
              "end": 1716,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1706,
                "end": 1707,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1710,
                "end": 1716,
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
      "start": 1725,
      "end": 1834,
      "test": {
        "type": "BinaryExpression",
        "start": 1729,
        "end": 1756,
        "left": {
          "type": "UnaryExpression",
          "start": 1729,
          "end": 1743,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1736,
            "end": 1743,
            "name": "boolOrC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1748,
          "end": 1756,
          "value": "Object",
          "raw": "\"Object\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1758,
        "end": 1803,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1764,
            "end": 1790,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1768,
                "end": 1789,
                "id": {
                  "type": "Identifier",
                  "start": 1768,
                  "end": 1779,
                  "name": "r4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1770,
                    "end": 1779,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1772,
                      "end": 1779
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1782,
                  "end": 1789,
                  "name": "boolOrC",
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
        "start": 1809,
        "end": 1834,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1815,
            "end": 1827,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1815,
              "end": 1826,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1815,
                "end": 1816,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1819,
                "end": 1826,
                "name": "boolOrC",
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
      "start": 1836,
      "end": 2012,
      "test": {
        "type": "BinaryExpression",
        "start": 1840,
        "end": 1874,
        "left": {
          "type": "UnaryExpression",
          "start": 1840,
          "end": 1861,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1847,
            "end": 1861,
            "name": "strOrNumOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 1866,
          "end": 1874,
          "value": "Object",
          "raw": "\"Object\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1876,
        "end": 1964,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1882,
            "end": 1933,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1886,
                "end": 1932,
                "id": {
                  "type": "Identifier",
                  "start": 1886,
                  "end": 1915,
                  "name": "q1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1888,
                    "end": 1915,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1890,
                      "end": 1915,
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
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1918,
                  "end": 1932,
                  "name": "strOrNumOrBool",
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
        "start": 1970,
        "end": 2012,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1976,
            "end": 2004,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1980,
                "end": 2003,
                "id": {
                  "type": "Identifier",
                  "start": 1980,
                  "end": 1986,
                  "name": "q2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1982,
                    "end": 1986,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1984,
                      "end": 1986,
                      "members": []
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1989,
                  "end": 2003,
                  "name": "strOrNumOrBool",
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
