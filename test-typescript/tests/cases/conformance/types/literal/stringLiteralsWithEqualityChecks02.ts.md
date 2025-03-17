__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 13,
            "name": "x",
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
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 35,
            "name": "y",
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
                      "value": "foo",
                      "raw": "\"foo\""
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
                      "value": "bar",
                      "raw": "\"bar\""
                    }
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 52,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 52,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 45,
                "end": 52
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 58,
          "end": 64,
          "left": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "==",
          "right": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 70,
          "end": 80,
          "left": {
            "type": "Literal",
            "start": 70,
            "end": 75,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "==",
          "right": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 85,
          "end": 95,
          "left": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "start": 90,
            "end": 95,
            "value": "foo",
            "raw": "\"foo\""
          }
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 101,
          "end": 115,
          "left": {
            "type": "Literal",
            "start": 101,
            "end": 106,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "start": 110,
            "end": 115,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 121,
          "end": 131,
          "left": {
            "type": "Literal",
            "start": 121,
            "end": 126,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "==",
          "right": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 137,
          "end": 147,
          "left": {
            "type": "Identifier",
            "start": 137,
            "end": 138,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "start": 142,
            "end": 147,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 153,
          "end": 163,
          "left": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "start": 158,
            "end": 163,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 169,
          "end": 179,
          "left": {
            "type": "Literal",
            "start": 169,
            "end": 174,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "==",
          "right": {
            "type": "Identifier",
            "start": 178,
            "end": 179,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 186,
          "end": 192,
          "left": {
            "type": "Identifier",
            "start": 186,
            "end": 187,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "start": 191,
            "end": 192,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 198,
          "end": 208,
          "left": {
            "type": "Literal",
            "start": 198,
            "end": 203,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "start": 207,
            "end": 208,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 213,
          "end": 223,
          "left": {
            "type": "Identifier",
            "start": 213,
            "end": 214,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 218,
            "end": 223,
            "value": "foo",
            "raw": "\"foo\""
          }
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 229,
          "end": 243,
          "left": {
            "type": "Literal",
            "start": 229,
            "end": 234,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 238,
            "end": 243,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 249,
          "end": 259,
          "left": {
            "type": "Literal",
            "start": 249,
            "end": 254,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "start": 258,
            "end": 259,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 265,
          "end": 275,
          "left": {
            "type": "Identifier",
            "start": 265,
            "end": 266,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 270,
            "end": 275,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 281,
          "end": 291,
          "left": {
            "type": "Identifier",
            "start": 281,
            "end": 282,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 286,
            "end": 291,
            "value": "bar",
            "raw": "\"bar\""
          }
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 297,
          "end": 307,
          "left": {
            "type": "Literal",
            "start": 297,
            "end": 302,
            "value": "bar",
            "raw": "\"bar\""
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "start": 306,
            "end": 307,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
