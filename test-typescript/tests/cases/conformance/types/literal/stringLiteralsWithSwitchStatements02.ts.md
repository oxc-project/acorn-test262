__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 181,
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
      "directive": null,
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
          "optional": false,
          "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
          },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 80,
      "directive": null,
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
          "optional": false,
          "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 96,
      "directive": null,
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
          "optional": false,
          "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
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
      "directive": null,
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
          "optional": false,
          "typeAnnotation": null
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
      "start": 118,
      "end": 129,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 118,
        "end": 128,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 118,
          "end": 119,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 122,
          "end": 128,
          "operator": "!=",
          "left": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
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
      "start": 130,
      "end": 144,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 130,
        "end": 144,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 130,
          "end": 131,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 134,
          "end": 144,
          "operator": "!=",
          "left": {
            "type": "Literal",
            "start": 134,
            "end": 139,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
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
      "start": 145,
      "end": 160,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 145,
        "end": 159,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 149,
          "end": 159,
          "operator": "!=",
          "left": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 154,
            "end": 159,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 180,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 161,
        "end": 179,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 161,
          "end": 162,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 165,
          "end": 179,
          "operator": "!=",
          "left": {
            "type": "Literal",
            "start": 165,
            "end": 170,
            "raw": "\"foo\"",
            "value": "foo"
          },
          "right": {
            "type": "Literal",
            "start": 174,
            "end": 179,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
