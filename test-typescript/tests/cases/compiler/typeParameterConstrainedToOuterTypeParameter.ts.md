typeParameterConstrainedToOuterTypeParameter.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 208,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 44,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 44,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 21,
            "end": 42,
            "params": [
              {
                "type": "Identifier",
                "start": 35,
                "end": 41,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 41,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 38,
                    "end": 41,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 38,
                      "end": 39,
                      "typeName": {
                        "type": "Identifier",
                        "start": 38,
                        "end": 39,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 21,
              "end": 34,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 22,
                  "end": 33,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 32,
                    "end": 33,
                    "typeName": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 33,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
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
      "start": 46,
      "end": 88,
      "body": {
        "type": "TSInterfaceBody",
        "start": 61,
        "end": 88,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 67,
            "end": 86,
            "params": [
              {
                "type": "Identifier",
                "start": 81,
                "end": 85,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 82,
                  "end": 85,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 84,
                    "end": 85,
                    "typeName": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 67,
              "end": 80,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 68,
                  "end": 79,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 78,
                    "end": 79,
                    "typeName": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 57,
        "end": 60,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 58,
            "end": 59,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
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
      "start": 90,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 106,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 106,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 106,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 98,
                  "end": 106,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 99,
                      "end": 105
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "decorators": [],
                  "name": "A",
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
      "start": 107,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 127,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 123,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 123,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 115,
                  "end": 123,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 116,
                      "end": 122
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "decorators": [],
            "name": "a",
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
