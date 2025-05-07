__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 7,
                "end": 13
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
      "start": 15,
      "end": 33,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 15,
        "end": 32,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 15,
          "end": 16,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 19,
          "end": 32,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 19,
            "end": 30,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 19,
              "end": 23,
              "decorators": [],
              "name": "Math",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 24,
              "end": 30,
              "decorators": [],
              "name": "random",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 47,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 41,
                "end": 47
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
      "type": "TryStatement",
      "start": 49,
      "end": 150,
      "block": {
        "type": "BlockStatement",
        "start": 53,
        "end": 118,
        "body": [
          {
            "type": "IfStatement",
            "start": 59,
            "end": 116,
            "alternate": {
              "type": "BlockStatement",
              "start": 94,
              "end": 116,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 104,
                  "end": 110,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 104,
                    "end": 109,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 108,
                      "end": 109,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 66,
              "end": 88,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 76,
                  "end": 82,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 76,
                    "end": 81,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 80,
                      "end": 81,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "finalizer": {
        "type": "BlockStatement",
        "start": 127,
        "end": 150,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 133,
            "end": 148,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 133,
              "end": 147,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 133,
                "end": 144,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 140,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 144,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "handler": null
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 167,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 152,
        "end": 166,
        "arguments": [
          {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 152,
          "end": 163,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 152,
            "end": 159,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 160,
            "end": 163,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
