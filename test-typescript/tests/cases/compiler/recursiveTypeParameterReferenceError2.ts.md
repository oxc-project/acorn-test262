recursiveTypeParameterReferenceError2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 223,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 125,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 125,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 32,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 51,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "decorators": [],
              "name": "next",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 50,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 47,
                  "end": 50,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 48,
                      "end": 49,
                      "typeName": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 49,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 47,
                  "decorators": [],
                  "name": "List",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 56,
            "end": 77,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 61,
              "decorators": [],
              "name": "owner",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 63,
                "end": 76,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 67,
                  "end": 76,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 68,
                      "end": 75,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 72,
                        "end": 75,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 73,
                            "end": 74,
                            "typeName": {
                              "type": "Identifier",
                              "start": 73,
                              "end": 74,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "decorators": [],
                        "name": "List",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 67,
                  "decorators": [],
                  "name": "List",
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
        "end": 14,
        "decorators": [],
        "name": "List",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
      "start": 127,
      "end": 222,
      "body": {
        "type": "TSInterfaceBody",
        "start": 146,
        "end": 222,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 152,
            "end": 160,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 156,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 159,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 158,
                "end": 159,
                "typeName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 165,
            "end": 180,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 169,
              "decorators": [],
              "name": "next",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 169,
              "end": 179,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 171,
                "end": 179,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 176,
                  "end": 179,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 177,
                      "end": 178,
                      "typeName": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 178,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 176,
                  "decorators": [],
                  "name": "List2",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 185,
            "end": 213,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 190,
              "decorators": [],
              "name": "owner",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 190,
              "end": 212,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 192,
                "end": 212,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 197,
                  "end": 212,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 198,
                      "end": 211,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 203,
                        "end": 211,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 204,
                            "end": 210
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 198,
                        "end": 203,
                        "decorators": [],
                        "name": "List2",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 197,
                  "decorators": [],
                  "name": "List2",
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
        "start": 137,
        "end": 142,
        "decorators": [],
        "name": "List2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 142,
        "end": 145,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 143,
            "end": 144,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
