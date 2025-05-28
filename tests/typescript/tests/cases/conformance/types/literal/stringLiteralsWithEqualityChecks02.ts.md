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
      "end": 64,
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
          "left": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "==",
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 79,
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
          "left": {
            "type": "Literal",
            "start": 69,
            "end": 74,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "==",
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 95,
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
          "left": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "start": 89,
            "end": 94,
            "value": "foo",
            "raw": "\"foo\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 115,
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
          "left": {
            "type": "Literal",
            "start": 100,
            "end": 105,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "start": 109,
            "end": 114,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 131,
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
          "left": {
            "type": "Literal",
            "start": 120,
            "end": 125,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "==",
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 147,
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
          "left": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "start": 141,
            "end": 146,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 163,
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
          "left": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "start": 157,
            "end": 162,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 179,
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
          "left": {
            "type": "Literal",
            "start": 168,
            "end": 173,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "==",
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 192,
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
          "left": {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!=",
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 193,
      "end": 207,
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
          "left": {
            "type": "Literal",
            "start": 197,
            "end": 202,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "!=",
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 223,
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
          "left": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 217,
            "end": 222,
            "value": "foo",
            "raw": "\"foo\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 243,
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
          "left": {
            "type": "Literal",
            "start": 228,
            "end": 233,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 237,
            "end": 242,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 244,
      "end": 259,
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
          "left": {
            "type": "Literal",
            "start": 248,
            "end": 253,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "!=",
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 275,
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
          "left": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 269,
            "end": 274,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 276,
      "end": 291,
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
          "left": {
            "type": "Identifier",
            "start": 280,
            "end": 281,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 285,
            "end": 290,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 292,
      "end": 307,
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
          "left": {
            "type": "Literal",
            "start": 296,
            "end": 301,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "!=",
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
