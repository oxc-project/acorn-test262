__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 572,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 29,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 29,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 14,
                "end": 29,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 14,
                    "end": 20
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 23,
                    "end": 29
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
      "start": 31,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 62,
            "decorators": [],
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 62,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 46,
                "end": 62,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 46,
                    "end": 52
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 55,
                    "end": 62
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
      "start": 64,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 100,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 100,
            "decorators": [],
            "name": "strOrFunc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 100,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 79,
                "end": 100,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 79,
                    "end": 85
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 89,
                    "end": 99,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 99,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 95,
                        "end": 99
                      }
                    },
                    "typeParameters": null
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
      "start": 102,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 133,
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 133,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 117,
                "end": 133,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 117,
                    "end": 123
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 126,
                    "end": 133
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
      "start": 134,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 149,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 149,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
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
      "start": 151,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 166,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 166,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 160,
                "end": 166
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
      "start": 168,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 185,
            "decorators": [],
            "name": "bool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 185,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 178,
                "end": 185
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
      "start": 187,
      "end": 208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 207,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 207,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 207,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 197,
                "end": 207,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 200,
                  "end": 207,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 203,
                    "end": 207
                  }
                },
                "typeParameters": null
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
      "start": 210,
      "end": 296,
      "alternate": {
        "type": "BlockStatement",
        "start": 273,
        "end": 296,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 279,
            "end": 294,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 279,
              "end": 293,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 279,
                "end": 282,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 285,
                "end": 293,
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 244,
        "end": 267,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 250,
            "end": 265,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 250,
              "end": 264,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 250,
                "end": 253,
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 256,
                "end": 264,
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 214,
        "end": 242,
        "operator": "===",
        "left": {
          "type": "Literal",
          "start": 214,
          "end": 222,
          "raw": "\"string\"",
          "value": "string",
          "regex": null,
          "bigint": null
        },
        "right": {
          "type": "UnaryExpression",
          "start": 227,
          "end": 242,
          "argument": {
            "type": "Identifier",
            "start": 234,
            "end": 242,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 297,
      "end": 389,
      "alternate": {
        "type": "BlockStatement",
        "start": 365,
        "end": 389,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 371,
            "end": 387,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 371,
              "end": 386,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 371,
                "end": 374,
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 377,
                "end": 386,
                "decorators": [],
                "name": "strOrFunc",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 334,
        "end": 359,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 340,
            "end": 357,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 340,
              "end": 356,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 340,
                "end": 344,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 347,
                "end": 356,
                "decorators": [],
                "name": "strOrFunc",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 301,
        "end": 332,
        "operator": "===",
        "left": {
          "type": "Literal",
          "start": 301,
          "end": 311,
          "raw": "\"function\"",
          "value": "function",
          "regex": null,
          "bigint": null
        },
        "right": {
          "type": "UnaryExpression",
          "start": 316,
          "end": 332,
          "argument": {
            "type": "Identifier",
            "start": 323,
            "end": 332,
            "decorators": [],
            "name": "strOrFunc",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 390,
      "end": 480,
      "alternate": {
        "type": "BlockStatement",
        "start": 455,
        "end": 480,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 461,
            "end": 478,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 461,
              "end": 477,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 461,
                "end": 465,
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 468,
                "end": 477,
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 425,
        "end": 449,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 431,
            "end": 447,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 431,
              "end": 446,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 431,
                "end": 434,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 437,
                "end": 446,
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 394,
        "end": 423,
        "operator": "===",
        "left": {
          "type": "Literal",
          "start": 394,
          "end": 402,
          "raw": "\"number\"",
          "value": "number",
          "regex": null,
          "bigint": null
        },
        "right": {
          "type": "UnaryExpression",
          "start": 407,
          "end": 423,
          "argument": {
            "type": "Identifier",
            "start": 414,
            "end": 423,
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 481,
      "end": 572,
      "alternate": {
        "type": "BlockStatement",
        "start": 548,
        "end": 572,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 554,
            "end": 570,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 554,
              "end": 569,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 554,
                "end": 557,
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 560,
                "end": 569,
                "decorators": [],
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 517,
        "end": 542,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 523,
            "end": 540,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 523,
              "end": 539,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 523,
                "end": 527,
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 530,
                "end": 539,
                "decorators": [],
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 485,
        "end": 515,
        "operator": "===",
        "left": {
          "type": "Literal",
          "start": 485,
          "end": 494,
          "raw": "\"boolean\"",
          "value": "boolean",
          "regex": null,
          "bigint": null
        },
        "right": {
          "type": "UnaryExpression",
          "start": 499,
          "end": 515,
          "argument": {
            "type": "Identifier",
            "start": 506,
            "end": 515,
            "decorators": [],
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
