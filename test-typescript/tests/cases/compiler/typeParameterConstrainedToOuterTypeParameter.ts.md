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
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 44,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 21,
            "end": 42,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 21,
              "end": 34,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 22,
                  "end": 33,
                  "name": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 32,
                    "end": 33,
                    "typeName": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 33,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
                "start": 35,
                "end": 41,
                "name": "x",
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
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 46,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 57,
        "end": 60,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 58,
            "end": 59,
            "name": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 61,
        "end": 88,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 67,
            "end": 86,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 67,
              "end": 80,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 68,
                  "end": 79,
                  "name": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 78,
                    "end": 79,
                    "typeName": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
                "start": 81,
                "end": 85,
                "name": "x",
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
                      "name": "U",
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
            "returnType": null
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 106,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 106,
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 123,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 123,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
