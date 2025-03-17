__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 208,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 30,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 28,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 28,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 24,
                "end": 28,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 25,
                  "end": 28,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 26,
                      "end": 27,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 26,
                        "end": 27,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 118,
      "body": {
        "type": "TSInterfaceBody",
        "start": 63,
        "end": 118,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 116,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 112,
                "end": 116,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 113,
                  "end": 116,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 114,
                      "end": 115,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 115,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 62,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 61,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 54,
              "end": 61,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 55,
                "end": 61,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 56,
                    "end": 60,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 57,
                      "end": 60,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 58,
                          "end": 59,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 58,
                            "end": 59,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 136,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 127,
                "end": 136,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 128,
                  "end": 136,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 129,
                      "end": 135,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 130,
                        "end": 135,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 131,
                            "end": 134
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 130,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 128,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 137,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 157,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 153,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 153,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 144,
                "end": 153,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 145,
                  "end": 153,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 146,
                      "end": 152,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 147,
                        "end": 152,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 148,
                            "end": 151
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 147,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 145,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
