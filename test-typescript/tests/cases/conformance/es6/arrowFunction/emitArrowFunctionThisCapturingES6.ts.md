__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 191,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 22,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 25,
            "end": 52,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 52,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 37,
                  "end": 50,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 37,
                    "end": 50,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 37,
                      "end": 45,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 37,
                        "end": 41
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 45,
                        "decorators": [],
                        "name": "age",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 48,
                      "end": 50,
                      "raw": "10",
                      "value": 10
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
      "start": 55,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 100,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 61,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 64,
            "end": 100,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 79,
              "end": 100,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 85,
                  "end": 98,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 85,
                    "end": 98,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 85,
                      "end": 94,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 85,
                        "end": 89
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 94,
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
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
                "start": 65,
                "end": 74,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 66,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 68,
                    "end": 74
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
      "start": 102,
      "end": 138,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 135,
        "end": 138,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 114,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 115,
          "end": 134,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 119,
            "end": 134,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 121,
              "end": 134,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 124,
                "end": 134,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 127,
                  "end": 134
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
      "start": 139,
      "end": 191,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 139,
        "end": 190,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 143,
            "end": 189,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 149,
              "end": 189,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 155,
                  "end": 170,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 155,
                    "end": 169,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 155,
                      "end": 163,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 155,
                        "end": 159
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 163,
                        "decorators": [],
                        "name": "age",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 166,
                      "end": 169,
                      "raw": "100",
                      "value": 100
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 175,
                  "end": 187,
                  "argument": {
                    "type": "Literal",
                    "start": 182,
                    "end": 186,
                    "raw": "true",
                    "value": true
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
          "start": 139,
          "end": 142,
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
