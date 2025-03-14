infinitelyExpandingTypeAssignability.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 155,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 27,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 27,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 25,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 24,
                "end": 25,
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 30,
      "end": 70,
      "body": {
        "type": "TSInterfaceBody",
        "start": 67,
        "end": 70,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 53,
          "end": 66,
          "expression": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 54,
            "end": 66,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 55,
                "end": 65,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 56,
                  "end": 65,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 57,
                      "end": 64,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 58,
                        "end": 64,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 59,
                            "end": 63,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 60,
                              "end": 63,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 61,
                                  "end": 62,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 61,
                                    "end": 62,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 59,
                              "end": 60,
                              "decorators": [],
                              "name": "B",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 58,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 41,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 43,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 72,
      "end": 112,
      "body": {
        "type": "TSInterfaceBody",
        "start": 109,
        "end": 112,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 95,
          "end": 108,
          "expression": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 96,
            "end": 108,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 97,
                "end": 107,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 98,
                  "end": 107,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 99,
                      "end": 106,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 100,
                        "end": 106,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 101,
                            "end": 105,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 102,
                              "end": 105,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 103,
                                  "end": 104,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 103,
                                    "end": 104,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 101,
                              "end": 102,
                              "decorators": [],
                              "name": "C",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 100,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 83,
        "end": 86,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 84,
            "end": 85,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 132,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 132,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 132,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 124,
                  "end": 132,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 125,
                      "end": 131
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "decorators": [],
                  "name": "B",
                  "optional": false
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
      "type": "VariableDeclaration",
      "start": 133,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 150,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 150,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 142,
                  "end": 150,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 143,
                      "end": 149
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
