__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 198,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 95,
          "definite": false,
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
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 32,
              "end": 81,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 33,
                  "end": 80,
                  "const": false,
                  "constraint": {
                    "type": "TSFunctionType",
                    "start": 43,
                    "end": 80,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 44,
                        "end": 58,
                        "argument": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 51,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "decorators": [],
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
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 70,
                                  "end": 71,
                                  "decorators": [],
                                  "name": "G",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
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
                        },
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 63,
                          "end": 66,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 64,
                              "end": 65,
                              "const": false,
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "name": {
                                "type": "Identifier",
                                "start": 64,
                                "end": 65,
                                "decorators": [],
                                "name": "G",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "out": false
                            }
                          ]
                        }
                      }
                    },
                    "typeParameters": null
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 148,
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 110,
                "end": 147,
                "async": false,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 138,
                  "end": 147,
                  "async": false,
                  "body": {
                    "type": "ObjectExpression",
                    "start": 144,
                    "end": 146,
                    "properties": []
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
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
                  "typeParameters": null
                },
                "expression": true,
                "generator": false,
                "id": null,
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 133,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 110,
                  "end": 128,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 111,
                      "end": 127,
                      "const": false,
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 111,
                        "end": 112,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "out": false
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
