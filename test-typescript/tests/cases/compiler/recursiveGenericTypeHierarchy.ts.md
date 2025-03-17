__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 15,
  "end": 150,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 15,
      "end": 68,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 68,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 64,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 44,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 37,
              "end": 44,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 38,
                "end": 44,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 39,
                    "end": 40,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 40,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 42,
                    "end": 43,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 63,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 56,
              "end": 63,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 57,
                "end": 63,
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
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 61,
                    "end": 62,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 62,
                      "decorators": [],
                      "name": "S",
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "S",
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
      "start": 69,
      "end": 150,
      "body": {
        "type": "TSInterfaceBody",
        "start": 147,
        "end": 150,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 127,
          "end": 146,
          "expression": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 128,
            "end": 146,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 129,
                "end": 136,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 130,
                  "end": 136,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 131,
                      "end": 132,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 132,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 134,
                      "end": 135,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 135,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 138,
                "end": 145,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 139,
                  "end": 145,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 140,
                      "end": 141,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 141,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 143,
                      "end": 144,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 144,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 80,
        "end": 118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 81,
            "end": 98,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 98,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 92,
                "end": 98,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 93,
                    "end": 94,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 96,
                    "end": 97,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
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
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 100,
            "end": 117,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 110,
              "end": 117,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 111,
                "end": 117,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 112,
                    "end": 113,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 115,
                    "end": 116,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 116,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
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
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
