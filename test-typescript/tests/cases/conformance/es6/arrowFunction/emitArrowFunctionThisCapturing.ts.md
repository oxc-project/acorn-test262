__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 176,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 9,
            "end": 36,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 15,
              "end": 36,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 21,
                  "end": 34,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 21,
                    "end": 34,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 21,
                      "end": 29,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 21,
                        "end": 25
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 26,
                        "end": 29,
                        "decorators": [],
                        "name": "age",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 32,
                      "end": 34,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 45,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 48,
            "end": 84,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 63,
              "end": 84,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 69,
                  "end": 82,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 69,
                    "end": 82,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 69,
                      "end": 78,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 69,
                        "end": 73
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 78,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 82,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 49,
                "end": 58,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 50,
                  "end": 58,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 52,
                    "end": 58
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 86,
      "end": 123,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 120,
        "end": 123,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 98,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 99,
          "end": 118,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 118,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 105,
              "end": 118,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 108,
                "end": 118,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 111,
                  "end": 118
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 176,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 124,
        "end": 175,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 128,
            "end": 174,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 134,
              "end": 174,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 140,
                  "end": 155,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 140,
                    "end": 154,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 140,
                      "end": 148,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 140,
                        "end": 144
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 145,
                        "end": 148,
                        "decorators": [],
                        "name": "age",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 151,
                      "end": 154,
                      "raw": "100",
                      "value": 100,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 160,
                  "end": 172,
                  "argument": {
                    "type": "Literal",
                    "start": 167,
                    "end": 171,
                    "raw": "true",
                    "value": true,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 124,
          "end": 127,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
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
