__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 43,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 43,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 15,
                "end": 43,
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 15,
                    "end": 19
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 23,
                    "end": 42,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 24,
                        "end": 33,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 25,
                          "end": 33,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 27,
                            "end": 33
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 35,
                      "end": 42,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 38,
                        "end": 42
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 54,
            "end": 94,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 60,
              "end": 93,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 93,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 69,
                    "end": 91,
                    "directive": null,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 69,
                      "end": 91,
                      "argument": {
                        "type": "CallExpression",
                        "start": 74,
                        "end": 91,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 74,
                          "end": 89,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 74,
                            "end": 77,
                            "decorators": [],
                            "name": "abc",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 78,
                            "end": 89,
                            "decorators": [],
                            "name": "toLowerCase",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "operator": "void",
                      "prefix": true
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
                  "start": 60,
                  "end": 63,
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 95,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 101,
            "decorators": [],
            "name": "gg",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 104,
            "end": 144,
            "operator": "??",
            "left": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 110,
              "end": 143,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 117,
                "end": 143,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 141,
                    "directive": null,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 119,
                      "end": 141,
                      "argument": {
                        "type": "CallExpression",
                        "start": 124,
                        "end": 141,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 124,
                          "end": 139,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 127,
                            "decorators": [],
                            "name": "abc",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 139,
                            "decorators": [],
                            "name": "toLowerCase",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "operator": "void",
                      "prefix": true
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
                  "start": 110,
                  "end": 113,
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
