__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 324,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
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
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 35,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 34,
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
                      "value": "foo",
                      "raw": "\"foo\""
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
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 52,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 51,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 53,
      "end": 65,
      "expression": {
        "type": "AssignmentExpression",
        "start": 53,
        "end": 64,
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
          "end": 64,
          "left": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 81,
      "expression": {
        "type": "AssignmentExpression",
        "start": 66,
        "end": 81,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 70,
          "end": 81,
          "left": {
            "type": "Literal",
            "start": 70,
            "end": 75,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "start": 80,
            "end": 81,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 98,
      "expression": {
        "type": "AssignmentExpression",
        "start": 82,
        "end": 97,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 82,
          "end": 83,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 86,
          "end": 97,
          "left": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 92,
            "end": 97,
            "value": "foo",
            "raw": "\"foo\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 119,
      "expression": {
        "type": "AssignmentExpression",
        "start": 99,
        "end": 118,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 99,
          "end": 100,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 103,
          "end": 118,
          "left": {
            "type": "Literal",
            "start": 103,
            "end": 108,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 113,
            "end": 118,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 136,
      "expression": {
        "type": "AssignmentExpression",
        "start": 120,
        "end": 135,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 124,
          "end": 135,
          "left": {
            "type": "Literal",
            "start": 124,
            "end": 129,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "start": 134,
            "end": 135,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 153,
      "expression": {
        "type": "AssignmentExpression",
        "start": 137,
        "end": 152,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 137,
          "end": 138,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 141,
          "end": 152,
          "left": {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 147,
            "end": 152,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 170,
      "expression": {
        "type": "AssignmentExpression",
        "start": 154,
        "end": 169,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 154,
          "end": 155,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 158,
          "end": 169,
          "left": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 164,
            "end": 169,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 171,
      "end": 187,
      "expression": {
        "type": "AssignmentExpression",
        "start": 171,
        "end": 186,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 171,
          "end": 172,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 175,
          "end": 186,
          "left": {
            "type": "Literal",
            "start": 175,
            "end": 180,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 201,
      "expression": {
        "type": "AssignmentExpression",
        "start": 189,
        "end": 200,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 189,
          "end": 190,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 193,
          "end": 200,
          "left": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 217,
      "expression": {
        "type": "AssignmentExpression",
        "start": 202,
        "end": 217,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 202,
          "end": 203,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 206,
          "end": 217,
          "left": {
            "type": "Literal",
            "start": 206,
            "end": 211,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 218,
      "end": 234,
      "expression": {
        "type": "AssignmentExpression",
        "start": 218,
        "end": 233,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 218,
          "end": 219,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 222,
          "end": 233,
          "left": {
            "type": "Identifier",
            "start": 222,
            "end": 223,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "start": 228,
            "end": 233,
            "value": "foo",
            "raw": "\"foo\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 235,
      "end": 255,
      "expression": {
        "type": "AssignmentExpression",
        "start": 235,
        "end": 254,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 235,
          "end": 236,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 239,
          "end": 254,
          "left": {
            "type": "Literal",
            "start": 239,
            "end": 244,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "start": 249,
            "end": 254,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 256,
      "end": 272,
      "expression": {
        "type": "AssignmentExpression",
        "start": 256,
        "end": 271,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 256,
          "end": 257,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 260,
          "end": 271,
          "left": {
            "type": "Literal",
            "start": 260,
            "end": 265,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "start": 270,
            "end": 271,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 273,
      "end": 289,
      "expression": {
        "type": "AssignmentExpression",
        "start": 273,
        "end": 288,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 273,
          "end": 274,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 277,
          "end": 288,
          "left": {
            "type": "Identifier",
            "start": 277,
            "end": 278,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "start": 283,
            "end": 288,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 290,
      "end": 306,
      "expression": {
        "type": "AssignmentExpression",
        "start": 290,
        "end": 305,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 290,
          "end": 291,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 294,
          "end": 305,
          "left": {
            "type": "Identifier",
            "start": 294,
            "end": 295,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "start": 300,
            "end": 305,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 307,
      "end": 323,
      "expression": {
        "type": "AssignmentExpression",
        "start": 307,
        "end": 322,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 307,
          "end": 308,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 311,
          "end": 322,
          "left": {
            "type": "Literal",
            "start": 311,
            "end": 316,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "start": 321,
            "end": 322,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
