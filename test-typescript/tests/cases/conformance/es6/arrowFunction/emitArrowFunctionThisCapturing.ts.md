emitArrowFunctionThisCapturing.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 193,
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
            "optional": false
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
                        "optional": false
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
            "params": []
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
            "optional": false
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
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "decorators": [],
                      "name": "x",
                      "optional": false
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
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 139,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 136,
        "end": 139,
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
        "optional": false
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
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 140,
      "end": 192,
      "expression": {
        "type": "CallExpression",
        "start": 140,
        "end": 191,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 144,
            "end": 190,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 150,
              "end": 190,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 156,
                  "end": 171,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 156,
                    "end": 170,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 156,
                      "end": 164,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 156,
                        "end": 160
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 164,
                        "decorators": [],
                        "name": "age",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 167,
                      "end": 170,
                      "raw": "100",
                      "value": 100
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 176,
                  "end": 188,
                  "argument": {
                    "type": "Literal",
                    "start": 183,
                    "end": 187,
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 140,
          "end": 143,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
