__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 53,
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
        "end": 49,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 29,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 22,
              "end": 29,
              "typeName": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 23,
                "end": 29,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 24,
                    "end": 25,
                    "typeName": {
                      "type": "Identifier",
                      "start": 24,
                      "end": 25,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 27,
                    "end": 28,
                    "typeName": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 28,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 31,
            "end": 48,
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 41,
              "end": 48,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 42,
                "end": 48,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 43,
                    "end": 44,
                    "typeName": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 46,
                    "end": 47,
                    "typeName": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 50,
        "end": 53,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 54,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 65,
        "end": 68,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 66,
            "end": 67,
            "name": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "U",
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 77,
          "end": 90,
          "expression": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 78,
            "end": 90,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 79,
                "end": 83,
                "typeName": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 80,
                  "end": 83,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 81,
                      "end": 82,
                      "typeName": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              {
                "type": "TSTypeReference",
                "start": 85,
                "end": 89,
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 86,
                  "end": 89,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 87,
                      "end": 88,
                      "typeName": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 88,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 94,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
