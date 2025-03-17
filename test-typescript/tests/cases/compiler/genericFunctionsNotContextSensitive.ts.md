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
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 32,
            "end": 95,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 82,
                "end": 86,
                "name": "_",
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
                      "name": "F",
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
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "name": "F",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "argument": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 51,
                          "name": "args",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                "name": "G",
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 67,
                            "end": 71,
                            "name": "x",
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
                                  "name": "G",
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
                  "name": "F",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 108,
            "end": 148,
            "callee": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 110,
                "end": 147,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 129,
                    "end": 133,
                    "name": "_",
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
                          "name": "K",
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
                  "type": "ArrowFunctionExpression",
                  "start": 138,
                  "end": 147,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "name": "_",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "ObjectExpression",
                    "start": 144,
                    "end": 146,
                    "properties": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
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
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                "returnType": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
