__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 308,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 12,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 7,
                "end": 12,
                "literal": {
                  "type": "Literal",
                  "start": 7,
                  "end": 12,
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
      "start": 14,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 34,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 34,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 21,
                "end": 34,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 21,
                    "end": 26,
                    "literal": {
                      "type": "Literal",
                      "start": 21,
                      "end": 26,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 29,
                    "end": 34,
                    "literal": {
                      "type": "Literal",
                      "start": 29,
                      "end": 34,
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
      "start": 37,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 51,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 51,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
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
      "start": 53,
      "end": 64,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 53,
        "end": 63,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 53,
          "end": 54,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 57,
          "end": 63,
          "operator": "==",
          "left": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 79,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 65,
        "end": 79,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 69,
          "end": 79,
          "operator": "==",
          "left": {
            "type": "Literal",
            "start": 69,
            "end": 74,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 80,
        "end": 94,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 80,
          "end": 81,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 84,
          "end": 94,
          "operator": "==",
          "left": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 89,
            "end": 94,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 115,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 96,
        "end": 114,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 96,
          "end": 97,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 100,
          "end": 114,
          "operator": "==",
          "left": {
            "type": "Literal",
            "start": 100,
            "end": 105,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Literal",
            "start": 109,
            "end": 114,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 131,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 116,
        "end": 130,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 116,
          "end": 117,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 120,
          "end": 130,
          "operator": "==",
          "left": {
            "type": "Literal",
            "start": 120,
            "end": 125,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 147,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 132,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 132,
          "end": 133,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 136,
          "end": 146,
          "operator": "==",
          "left": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 141,
            "end": 146,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 163,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 148,
        "end": 162,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 148,
          "end": 149,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 152,
          "end": 162,
          "operator": "==",
          "left": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 157,
            "end": 162,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 179,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 164,
        "end": 178,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 164,
          "end": 165,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 168,
          "end": 178,
          "operator": "==",
          "left": {
            "type": "Literal",
            "start": 168,
            "end": 173,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 192,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 181,
        "end": 191,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 181,
          "end": 182,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 185,
          "end": 191,
          "operator": "!=",
          "left": {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 190,
            "end": 191,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 193,
      "end": 207,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 193,
        "end": 207,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 193,
          "end": 194,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 197,
          "end": 207,
          "operator": "!=",
          "left": {
            "type": "Literal",
            "start": 197,
            "end": 202,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Identifier",
            "start": 206,
            "end": 207,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 223,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 208,
        "end": 222,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 212,
          "end": 222,
          "operator": "!=",
          "left": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 217,
            "end": 222,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 243,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 224,
        "end": 242,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 224,
          "end": 225,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 228,
          "end": 242,
          "operator": "!=",
          "left": {
            "type": "Literal",
            "start": 228,
            "end": 233,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Literal",
            "start": 237,
            "end": 242,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 244,
      "end": 259,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 244,
        "end": 258,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 244,
          "end": 245,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 248,
          "end": 258,
          "operator": "!=",
          "left": {
            "type": "Literal",
            "start": 248,
            "end": 253,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 257,
            "end": 258,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 275,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 260,
        "end": 274,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 260,
          "end": 261,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 264,
          "end": 274,
          "operator": "!=",
          "left": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 269,
            "end": 274,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 276,
      "end": 291,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 276,
        "end": 290,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 276,
          "end": 277,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 280,
          "end": 290,
          "operator": "!=",
          "left": {
            "type": "Identifier",
            "start": 280,
            "end": 281,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 285,
            "end": 290,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 292,
      "end": 307,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 292,
        "end": 306,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 292,
          "end": 293,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 296,
          "end": 306,
          "operator": "!=",
          "left": {
            "type": "Literal",
            "start": 296,
            "end": 301,
            "raw": "\"bar\"",
            "value": "bar"
          },
          "right": {
            "type": "Identifier",
            "start": 305,
            "end": 306,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
