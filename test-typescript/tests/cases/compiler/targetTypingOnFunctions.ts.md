__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 29,
            "name": "fu",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 29,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 8,
                "end": 29,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 9,
                    "end": 18,
                    "name": "s",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10,
                      "end": 18,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 12,
                        "end": 18
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 32,
            "end": 71,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 42,
                "end": 43,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 54,
                      "end": 67,
                      "object": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 56,
                        "end": 67,
                        "name": "toLowerCase",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 80,
            "name": "zu",
            "typeAnnotation": null,
            "decorators": [],
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
              "name": "fu",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 127,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 110,
                        "end": 123,
                        "object": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 111,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 123,
                          "name": "toLowerCase",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
