__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 197,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 96,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 32,
            "end": 95,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 32,
              "end": 81,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 33,
                  "end": 80,
                  "name": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSFunctionType",
                    "start": 43,
                    "end": 80,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 44,
                        "end": 58,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 51,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 51,
                          "end": 58,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 53,
                            "end": 58,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 53,
                              "end": 56
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 60,
                      "end": 80,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 63,
                        "end": 80,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 63,
                          "end": 66,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 64,
                              "end": 65,
                              "name": {
                                "type": "Identifier",
                                "start": 64,
                                "end": 65,
                                "decorators": [],
                                "name": "G",
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
                            "start": 67,
                            "end": 71,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 68,
                              "end": 71,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 70,
                                "end": 71,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 70,
                                  "end": 71,
                                  "decorators": [],
                                  "name": "G",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 73,
                          "end": 80,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 76,
                            "end": 80
                          }
                        }
                      }
                    }
                  },
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
                "start": 82,
                "end": 86,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 83,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 85,
                    "end": 86,
                    "typeName": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 90,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
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
      "type": "VariableDeclaration",
      "start": 98,
      "end": 149,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 108,
            "end": 148,
            "callee": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 110,
                "end": 147,
                "expression": true,
                "async": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 110,
                  "end": 128,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 111,
                      "end": 127,
                      "name": {
                        "type": "Identifier",
                        "start": 111,
                        "end": 112,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      },
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
                    "start": 129,
                    "end": 133,
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 130,
                      "end": 133,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 132,
                        "end": 133,
                        "typeName": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 133,
                          "decorators": [],
                          "name": "K",
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
                  "type": "ArrowFunctionExpression",
                  "start": 138,
                  "end": 147,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "start": 144,
                    "end": 146,
                    "properties": []
                  },
                  "id": null,
                  "generator": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
