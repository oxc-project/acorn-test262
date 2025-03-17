__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 97,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 97,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 97,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 19,
              "end": 97,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 24,
                  "end": 28,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 28,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 27,
                      "end": 28,
                      "typeName": {
                        "type": "Identifier",
                        "start": 27,
                        "end": 28,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 97,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 36,
                    "end": 80,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 42,
                        "end": 79,
                        "id": {
                          "type": "Identifier",
                          "start": 42,
                          "end": 47,
                          "name": "inner",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 50,
                          "end": 79,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 55,
                              "end": 59,
                              "name": "y",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 56,
                                "end": 59,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 58,
                                  "end": 59,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 58,
                                    "end": 59,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "TSAsExpression",
                            "start": 64,
                            "end": 79,
                            "expression": {
                              "type": "ArrayExpression",
                              "start": 64,
                              "end": 70,
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "start": 65,
                                  "end": 66,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 68,
                                  "end": 69,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ]
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 74,
                              "end": 79,
                              "typeName": {
                                "type": "Identifier",
                                "start": 74,
                                "end": 79,
                                "name": "const",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 50,
                            "end": 54,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 51,
                                "end": 52,
                                "name": {
                                  "type": "Identifier",
                                  "start": 51,
                                  "end": 52,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              }
                            ]
                          },
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 82,
                    "end": 95,
                    "argument": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 94,
                      "name": "inner",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 19,
                "end": 23,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 20,
                    "end": 21,
                    "name": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 21,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
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
