infinitelyExpandingBaseTypes1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 34,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 34,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 32,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 32,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 25,
                "end": 32,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 26,
                  "end": 32,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 27,
                      "end": 31,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 28,
                        "end": 31,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 29,
                            "end": 30,
                            "typeName": {
                              "type": "Identifier",
                              "start": 29,
                              "end": 30,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 27,
                        "end": 28,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "A",
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
      "start": 37,
      "end": 68,
      "body": {
        "type": "TSInterfaceBody",
        "start": 52,
        "end": 68,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 66,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 66,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 66,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 63,
                  "end": 66,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 64,
                      "end": 65,
                      "typeName": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 65,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "B",
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
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 48,
        "end": 51,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 49,
            "end": 50,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
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
      "start": 71,
      "end": 108,
      "body": {
        "type": "TSInterfaceBody",
        "start": 105,
        "end": 108,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 94,
          "end": 98,
          "expression": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 95,
            "end": 98,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 96,
                "end": 97,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 100,
          "end": 104,
          "expression": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "B",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 101,
            "end": 104,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 102,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
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
        "start": 81,
        "end": 82,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 82,
        "end": 85,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 83,
            "end": 84,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
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
