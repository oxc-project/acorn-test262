__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 128,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 128,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 128,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 128,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 17,
              "end": 128,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 18,
                  "end": 28,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 19,
                    "end": 28,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 21,
                      "end": 28,
                      "literal": {
                        "type": "Literal",
                        "start": 21,
                        "end": 28,
                        "value": "outer",
                        "raw": "\"outer\""
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 128,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 39,
                    "end": 89,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 45,
                        "end": 88,
                        "id": {
                          "type": "Identifier",
                          "start": 45,
                          "end": 46,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 49,
                          "end": 88,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 50,
                              "end": 60,
                              "name": "v",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 51,
                                "end": 60,
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "start": 53,
                                  "end": 60,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 53,
                                    "end": 60,
                                    "value": "inner",
                                    "raw": "\"inner\""
                                  }
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "ArrowFunctionExpression",
                            "start": 65,
                            "end": 88,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "TSAsExpression",
                              "start": 71,
                              "end": 88,
                              "expression": {
                                "type": "TSNonNullExpression",
                                "start": 71,
                                "end": 76,
                                "expression": {
                                  "type": "Literal",
                                  "start": 71,
                                  "end": 75,
                                  "value": null,
                                  "raw": "null"
                                }
                              },
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "start": 80,
                                "end": 88,
                                "exprName": {
                                  "type": "Identifier",
                                  "start": 87,
                                  "end": 88,
                                  "name": "v",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "typeParameters": null,
                            "returnType": null
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 94,
                    "end": 112,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 100,
                        "end": 112,
                        "id": {
                          "type": "Identifier",
                          "start": 100,
                          "end": 101,
                          "name": "r",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 104,
                          "end": 112,
                          "callee": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 105,
                            "name": "f",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "TSNonNullExpression",
                              "start": 106,
                              "end": 111,
                              "expression": {
                                "type": "Literal",
                                "start": 106,
                                "end": 110,
                                "value": null,
                                "raw": "null"
                              }
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 117,
                    "end": 126,
                    "argument": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 125,
                      "name": "r",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
