__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 54,
            "decorators": [],
            "name": "f10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 54,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 9,
                "end": 54,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 13,
                    "end": 17,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 14,
                      "end": 17,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 16,
                        "end": 17,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 16,
                          "end": 17,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 19,
                    "end": 42,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 20,
                      "end": 42,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 22,
                        "end": 42,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 25,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 28,
                            "end": 42,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 29,
                                "end": 33,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 30,
                                  "end": 33,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 32,
                                    "end": 33,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 32,
                                      "end": 33,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
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
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 44,
                    "end": 48,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 48,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 47,
                        "end": 48,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 48,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 50,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 53,
                    "end": 54,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 9,
                  "end": 12,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 10,
                      "end": 11,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 10,
                        "end": 11,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 86,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 56,
        "end": 85,
        "arguments": [
          {
            "type": "Literal",
            "start": 60,
            "end": 62,
            "raw": "''",
            "value": ""
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 64,
            "end": 80,
            "async": false,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 70,
              "end": 80,
              "async": false,
              "body": {
                "type": "MemberExpression",
                "start": 75,
                "end": 80,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 80,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "Literal",
            "start": 82,
            "end": 84,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 56,
          "end": 59,
          "decorators": [],
          "name": "f10",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 104,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 107,
            "end": 137,
            "arguments": [
              {
                "type": "Literal",
                "start": 111,
                "end": 113,
                "raw": "''",
                "value": ""
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 115,
                "end": 133,
                "async": false,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 122,
                  "end": 132,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 127,
                    "end": 132,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 132,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              },
              {
                "type": "Literal",
                "start": 135,
                "end": 136,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 107,
              "end": 110,
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
