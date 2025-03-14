stringLiteralsWithEqualityChecks02.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 310,
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
      "end": 65,
      "expression": {
        "type": "AssignmentExpression",
        "start": 54,
        "end": 64,
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
          "end": 64,
          "operator": "==",
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
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 80,
      "expression": {
        "type": "AssignmentExpression",
        "start": 66,
        "end": 80,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 70,
          "end": 80,
          "operator": "==",
          "left": {
            "type": "Literal",
            "start": 70,
            "end": 75,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 96,
      "expression": {
        "type": "AssignmentExpression",
        "start": 81,
        "end": 95,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 81,
          "end": 82,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 85,
          "end": 95,
          "operator": "==",
          "left": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 90,
            "end": 95,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 116,
      "expression": {
        "type": "AssignmentExpression",
        "start": 97,
        "end": 115,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 101,
          "end": 115,
          "operator": "==",
          "left": {
            "type": "Literal",
            "start": 101,
            "end": 106,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Literal",
            "start": 110,
            "end": 115,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 132,
      "expression": {
        "type": "AssignmentExpression",
        "start": 117,
        "end": 131,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 117,
          "end": 118,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 121,
          "end": 131,
          "operator": "==",
          "left": {
            "type": "Literal",
            "start": 121,
            "end": 126,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 133,
      "end": 148,
      "expression": {
        "type": "AssignmentExpression",
        "start": 133,
        "end": 147,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 133,
          "end": 134,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 137,
          "end": 147,
          "operator": "==",
          "left": {
            "type": "Identifier",
            "start": 137,
            "end": 138,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 142,
            "end": 147,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 164,
      "expression": {
        "type": "AssignmentExpression",
        "start": 149,
        "end": 163,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 149,
          "end": 150,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 153,
          "end": 163,
          "operator": "==",
          "left": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 158,
            "end": 163,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 165,
      "end": 180,
      "expression": {
        "type": "AssignmentExpression",
        "start": 165,
        "end": 179,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 169,
          "end": 179,
          "operator": "==",
          "left": {
            "type": "Literal",
            "start": 169,
            "end": 174,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 182,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 182,
          "end": 183,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 186,
          "end": 192,
          "operator": "!=",
          "left": {
            "type": "Identifier",
            "start": 186,
            "end": 187,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 191,
            "end": 192,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 208,
      "expression": {
        "type": "AssignmentExpression",
        "start": 194,
        "end": 208,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 194,
          "end": 195,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 198,
          "end": 208,
          "operator": "!=",
          "left": {
            "type": "Literal",
            "start": 198,
            "end": 203,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Identifier",
            "start": 207,
            "end": 208,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 209,
      "end": 224,
      "expression": {
        "type": "AssignmentExpression",
        "start": 209,
        "end": 223,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 209,
          "end": 210,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 213,
          "end": 223,
          "operator": "!=",
          "left": {
            "type": "Identifier",
            "start": 213,
            "end": 214,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 218,
            "end": 223,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 244,
      "expression": {
        "type": "AssignmentExpression",
        "start": 225,
        "end": 243,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 225,
          "end": 226,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 229,
          "end": 243,
          "operator": "!=",
          "left": {
            "type": "Literal",
            "start": 229,
            "end": 234,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Literal",
            "start": 238,
            "end": 243,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 245,
      "end": 260,
      "expression": {
        "type": "AssignmentExpression",
        "start": 245,
        "end": 259,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 245,
          "end": 246,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 249,
          "end": 259,
          "operator": "!=",
          "left": {
            "type": "Literal",
            "start": 249,
            "end": 254,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 258,
            "end": 259,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 261,
      "end": 276,
      "expression": {
        "type": "AssignmentExpression",
        "start": 261,
        "end": 275,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 261,
          "end": 262,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 265,
          "end": 275,
          "operator": "!=",
          "left": {
            "type": "Identifier",
            "start": 265,
            "end": 266,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 270,
            "end": 275,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 292,
      "expression": {
        "type": "AssignmentExpression",
        "start": 277,
        "end": 291,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 277,
          "end": 278,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 281,
          "end": 291,
          "operator": "!=",
          "left": {
            "type": "Identifier",
            "start": 281,
            "end": 282,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 286,
            "end": 291,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 293,
      "end": 308,
      "expression": {
        "type": "AssignmentExpression",
        "start": 293,
        "end": 307,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 293,
          "end": 294,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 297,
          "end": 307,
          "operator": "!=",
          "left": {
            "type": "Literal",
            "start": 297,
            "end": 302,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 306,
            "end": 307,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
