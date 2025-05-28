__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 180,
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
      "start": 117,
      "end": 128,
      "expression": {
        "type": "AssignmentExpression",
        "start": 117,
        "end": 127,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 117,
          "end": 118,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 121,
          "end": 127,
          "left": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
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
      "start": 129,
      "end": 143,
      "expression": {
        "type": "AssignmentExpression",
        "start": 129,
        "end": 143,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 129,
          "end": 130,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 133,
          "end": 143,
          "left": {
            "type": "Literal",
            "start": 133,
            "end": 138,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
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
      "start": 144,
      "end": 159,
      "expression": {
        "type": "AssignmentExpression",
        "start": 144,
        "end": 158,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 144,
          "end": 145,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 148,
          "end": 158,
          "left": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 153,
            "end": 158,
            "value": "foo",
            "raw": "\"foo\""
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 160,
      "end": 179,
      "expression": {
        "type": "AssignmentExpression",
        "start": 160,
        "end": 178,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 160,
          "end": 161,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "BinaryExpression",
          "start": 164,
          "end": 178,
          "left": {
            "type": "Literal",
            "start": 164,
            "end": 169,
            "value": "foo",
            "raw": "\"foo\""
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "start": 173,
            "end": 178,
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
