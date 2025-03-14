targetTypingOnFunctions.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 128,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 71,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 29,
            "decorators": [],
            "name": "fu",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 29,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 8,
                "end": 29,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 9,
                    "end": 18,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10,
                      "end": 18,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 12,
                        "end": 18
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 29,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 23,
                    "end": 29
                  }
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 32,
            "end": 71,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 45,
              "end": 71,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 47,
                  "end": 69,
                  "argument": {
                    "type": "CallExpression",
                    "start": 54,
                    "end": 69,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 54,
                      "end": 67,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 56,
                        "end": 67,
                        "decorators": [],
                        "name": "toLowerCase",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 42,
                "end": 43,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 127,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 80,
            "decorators": [],
            "name": "zu",
            "optional": false
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 83,
            "end": 127,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 83,
              "end": 85,
              "decorators": [],
              "name": "fu",
              "optional": false
            },
            "right": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 127,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 127,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 103,
                    "end": 125,
                    "argument": {
                      "type": "CallExpression",
                      "start": 110,
                      "end": 125,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 110,
                        "end": 123,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 111,
                          "decorators": [],
                          "name": "s",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 123,
                          "decorators": [],
                          "name": "toLowerCase",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
