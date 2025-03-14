__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 326,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 13,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 8,
                "end": 13,
                "literal": {
                  "type": "Literal",
                  "start": 8,
                  "end": 13,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 35,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 35,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 22,
                "end": 35,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 22,
                    "end": 27,
                    "literal": {
                      "type": "Literal",
                      "start": 22,
                      "end": 27,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 30,
                    "end": 35,
                    "literal": {
                      "type": "Literal",
                      "start": 30,
                      "end": 35,
                      "raw": "\"bar\"",
                      "value": "bar"
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
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 52,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 52,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 45,
                "end": 52
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 66,
      "expression": {
        "type": "AssignmentExpression",
        "start": 54,
        "end": 65,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 54,
          "end": 55,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 58,
          "end": 65,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 82,
      "expression": {
        "type": "AssignmentExpression",
        "start": 67,
        "end": 82,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 67,
          "end": 68,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 71,
          "end": 82,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 71,
            "end": 76,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 99,
      "expression": {
        "type": "AssignmentExpression",
        "start": 83,
        "end": 98,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 83,
          "end": 84,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 87,
          "end": 98,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 93,
            "end": 98,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 120,
      "expression": {
        "type": "AssignmentExpression",
        "start": 100,
        "end": 119,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 100,
          "end": 101,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 104,
          "end": 119,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 104,
            "end": 109,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Literal",
            "start": 114,
            "end": 119,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 137,
      "expression": {
        "type": "AssignmentExpression",
        "start": 121,
        "end": 136,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 121,
          "end": 122,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 125,
          "end": 136,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 125,
            "end": 130,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 135,
            "end": 136,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 154,
      "expression": {
        "type": "AssignmentExpression",
        "start": 138,
        "end": 153,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 138,
          "end": 139,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 142,
          "end": 153,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 148,
            "end": 153,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 155,
      "end": 171,
      "expression": {
        "type": "AssignmentExpression",
        "start": 155,
        "end": 170,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 155,
          "end": 156,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 159,
          "end": 170,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 159,
            "end": 160,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 165,
            "end": 170,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 172,
      "end": 188,
      "expression": {
        "type": "AssignmentExpression",
        "start": 172,
        "end": 187,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 172,
          "end": 173,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 176,
          "end": 187,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 176,
            "end": 181,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 186,
            "end": 187,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 202,
      "expression": {
        "type": "AssignmentExpression",
        "start": 190,
        "end": 201,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 190,
          "end": 191,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 194,
          "end": 201,
          "operator": "!==",
          "left": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 200,
            "end": 201,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 218,
      "expression": {
        "type": "AssignmentExpression",
        "start": 203,
        "end": 218,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 203,
          "end": 204,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 207,
          "end": 218,
          "operator": "!==",
          "left": {
            "type": "Literal",
            "start": 207,
            "end": 212,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 235,
      "expression": {
        "type": "AssignmentExpression",
        "start": 219,
        "end": 234,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 223,
          "end": 234,
          "operator": "!==",
          "left": {
            "type": "Identifier",
            "start": 223,
            "end": 224,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 229,
            "end": 234,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 236,
      "end": 256,
      "expression": {
        "type": "AssignmentExpression",
        "start": 236,
        "end": 255,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 236,
          "end": 237,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 240,
          "end": 255,
          "operator": "!==",
          "left": {
            "type": "Literal",
            "start": 240,
            "end": 245,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Literal",
            "start": 250,
            "end": 255,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 257,
      "end": 273,
      "expression": {
        "type": "AssignmentExpression",
        "start": 257,
        "end": 272,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 257,
          "end": 258,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 261,
          "end": 272,
          "operator": "!==",
          "left": {
            "type": "Literal",
            "start": 261,
            "end": 266,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 271,
            "end": 272,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 274,
      "end": 290,
      "expression": {
        "type": "AssignmentExpression",
        "start": 274,
        "end": 289,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 274,
          "end": 275,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 278,
          "end": 289,
          "operator": "!==",
          "left": {
            "type": "Identifier",
            "start": 278,
            "end": 279,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 284,
            "end": 289,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 291,
      "end": 307,
      "expression": {
        "type": "AssignmentExpression",
        "start": 291,
        "end": 306,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 291,
          "end": 292,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 295,
          "end": 306,
          "operator": "!==",
          "left": {
            "type": "Identifier",
            "start": 295,
            "end": 296,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 301,
            "end": 306,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 308,
      "end": 324,
      "expression": {
        "type": "AssignmentExpression",
        "start": 308,
        "end": 323,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 308,
          "end": 309,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 312,
          "end": 323,
          "operator": "!==",
          "left": {
            "type": "Literal",
            "start": 312,
            "end": 317,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 322,
            "end": 323,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
