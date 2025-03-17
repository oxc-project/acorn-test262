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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 128,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 128,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 17,
              "end": 128,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 45,
                          "end": 46,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 49,
                          "end": 88,
                          "async": false,
                          "body": {
                            "type": "ArrowFunctionExpression",
                            "start": 65,
                            "end": 88,
                            "async": false,
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
                                  "raw": "null",
                                  "value": null
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
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [],
                            "returnType": null,
                            "typeParameters": null
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 50,
                              "end": 60,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
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
                                    "raw": "\"inner\"",
                                    "value": "inner"
                                  }
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
                    "kind": "const"
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 100,
                          "end": 101,
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 104,
                          "end": 112,
                          "arguments": [
                            {
                              "type": "TSNonNullExpression",
                              "start": 106,
                              "end": 111,
                              "expression": {
                                "type": "Literal",
                                "start": 106,
                                "end": 110,
                                "raw": "null",
                                "value": null
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 105,
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 117,
                    "end": 126,
                    "argument": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 125,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 18,
                  "end": 28,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
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
                        "raw": "\"outer\"",
                        "value": "outer"
                      }
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
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
