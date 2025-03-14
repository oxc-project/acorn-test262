recurringTypeParamForContainerOfBase01.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 52,
      "body": {
        "type": "TSInterfaceBody",
        "start": 37,
        "end": 52,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 43,
            "end": 50,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 47,
              "decorators": [],
              "name": "item",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 49,
                "end": 50,
                "typeName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
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
        "end": 18,
        "decorators": [],
        "name": "BoxOfFoo",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 36,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 35,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 35,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 32,
                "end": 35,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 33,
                    "end": 34,
                    "typeName": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 32,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
      "start": 54,
      "end": 102,
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 102,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 100,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 96,
              "decorators": [],
              "name": "self",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 99,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 99,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
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
        "start": 64,
        "end": 67,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 85,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 84,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 78,
              "end": 84,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 81,
                "end": 84,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 82,
                    "end": 83,
                    "typeName": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 78,
                "end": 81,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
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
      "start": 104,
      "end": 178,
      "body": {
        "type": "TSInterfaceBody",
        "start": 151,
        "end": 178,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 157,
            "end": 176,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 162,
              "decorators": [],
              "name": "other",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 175,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 164,
                "end": 175,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 172,
                  "end": 175,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 173,
                      "end": 174,
                      "typeName": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 174,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 172,
                  "decorators": [],
                  "name": "BoxOfFoo",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 144,
          "end": 150,
          "expression": {
            "type": "Identifier",
            "start": 144,
            "end": 147,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 147,
            "end": 150,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 148,
                "end": 149,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 117,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 117,
        "end": 135,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 118,
            "end": 134,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 128,
              "end": 134,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 131,
                "end": 134,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 132,
                    "end": 133,
                    "typeName": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 133,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 131,
                "decorators": [],
                "name": "Bar",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
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
