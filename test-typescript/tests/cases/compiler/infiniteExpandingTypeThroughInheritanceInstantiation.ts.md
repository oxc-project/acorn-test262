infiniteExpandingTypeThroughInheritanceInstantiation.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 32,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 32,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 30,
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
              "start": 21,
              "end": 30,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 30,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 24,
                  "end": 30,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 25,
                      "end": 29,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 26,
                        "end": 29,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 27,
                            "end": 28,
                            "typeName": {
                              "type": "Identifier",
                              "start": 27,
                              "end": 28,
                              "decorators": [],
                              "name": "T",
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
                        "name": "B",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
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
      "start": 34,
      "end": 88,
      "body": {
        "type": "TSInterfaceBody",
        "start": 71,
        "end": 88,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 76,
            "end": 86,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 86,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 79,
                "end": 86,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 80,
                  "end": 86,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 81,
                      "end": 85,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 82,
                        "end": 85,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 83,
                            "end": 84,
                            "typeName": {
                              "type": "Identifier",
                              "start": 83,
                              "end": 84,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 57,
          "end": 61,
          "expression": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 58,
            "end": 61,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 59,
                "end": 60,
                "typeName": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 60,
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
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 45,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 47,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
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
