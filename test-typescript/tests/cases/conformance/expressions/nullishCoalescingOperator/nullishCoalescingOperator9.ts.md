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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 43,
            "name": "f",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 24,
                        "end": 33,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 25,
                          "end": 33,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 27,
                            "end": 33
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 54,
            "end": 94,
            "left": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 60,
              "end": 93,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 60,
                  "end": 63,
                  "name": "abc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 93,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 69,
                    "end": 91,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 69,
                      "end": 91,
                      "operator": "void",
                      "prefix": true,
                      "argument": {
                        "type": "CallExpression",
                        "start": 74,
                        "end": 91,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 74,
                          "end": 89,
                          "object": {
                            "type": "Identifier",
                            "start": 74,
                            "end": 77,
                            "name": "abc",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 78,
                            "end": 89,
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
                    },
                    "directive": null
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 101,
            "name": "gg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 104,
            "end": 144,
            "left": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "??",
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 110,
              "end": 143,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 110,
                  "end": 113,
                  "name": "abc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 117,
                "end": 143,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 141,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 119,
                      "end": 141,
                      "operator": "void",
                      "prefix": true,
                      "argument": {
                        "type": "CallExpression",
                        "start": 124,
                        "end": 141,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 124,
                          "end": 139,
                          "object": {
                            "type": "Identifier",
                            "start": 124,
                            "end": 127,
                            "name": "abc",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 139,
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
                    },
                    "directive": null
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
