__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 97,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 97,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 97,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 19,
              "end": 97,
              "expression": false,
              "async": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 24,
                  "end": 28,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 97,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 36,
                    "end": 80,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 42,
                        "end": 79,
                        "id": {
                          "type": "Identifier",
                          "start": 42,
                          "end": 47,
                          "decorators": [],
                          "name": "inner",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 50,
                          "end": 79,
                          "expression": true,
                          "async": false,
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              }
                            ]
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 55,
                              "end": 59,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ],
                          "returnType": null,
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
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 68,
                                  "end": 69,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                "decorators": [],
                                "name": "const",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
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
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
