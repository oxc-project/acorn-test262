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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 15,
      "end": 33,
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
          "callee": {
            "type": "MemberExpression",
            "start": 19,
            "end": 30,
            "object": {
              "type": "Identifier",
              "start": 19,
              "end": 23,
              "decorators": [],
              "name": "Math",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 24,
              "end": 30,
              "decorators": [],
              "name": "random",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 48,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 47,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
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
            "test": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 94,
              "end": 116,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 104,
                  "end": 110,
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
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "handler": null,
      "finalizer": {
        "type": "BlockStatement",
        "start": 127,
        "end": 150,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 133,
            "end": 148,
            "expression": {
              "type": "CallExpression",
              "start": 133,
              "end": 147,
              "callee": {
                "type": "MemberExpression",
                "start": 133,
                "end": 144,
                "object": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 140,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 144,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 167,
      "expression": {
        "type": "CallExpression",
        "start": 152,
        "end": 166,
        "callee": {
          "type": "MemberExpression",
          "start": 152,
          "end": 163,
          "object": {
            "type": "Identifier",
            "start": 152,
            "end": 159,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 160,
            "end": 163,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
