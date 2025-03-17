__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 182,
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
      "start": 118,
      "end": 129,
      "expression": {
        "type": "AssignmentExpression",
        "start": 118,
        "end": 128,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 118,
          "end": 119,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 122,
          "end": 128,
          "left": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
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
      "start": 130,
      "end": 144,
      "expression": {
        "type": "AssignmentExpression",
        "start": 130,
        "end": 144,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 130,
          "end": 131,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 134,
          "end": 144,
          "left": {
            "type": "Literal",
            "start": 134,
            "end": 139,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
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
      "start": 145,
      "end": 160,
      "expression": {
        "type": "AssignmentExpression",
        "start": 145,
        "end": 159,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 149,
          "end": 159,
          "left": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 154,
            "end": 159,
            "value": "foo",
            "raw": "\"foo\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 180,
      "expression": {
        "type": "AssignmentExpression",
        "start": 161,
        "end": 179,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 161,
          "end": 162,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "BinaryExpression",
          "start": 165,
          "end": 179,
          "left": {
            "type": "Literal",
            "start": 165,
            "end": 170,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 174,
            "end": 179,
            "value": "bar",
            "raw": "\"bar\""
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
