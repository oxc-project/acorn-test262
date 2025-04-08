__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
        "start": 16,
        "end": 60,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 21,
            "end": 57,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 23,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 23,
              "end": 26,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 24,
                  "end": 25,
                  "name": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 25,
                    "name": "U",
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
            "params": [
              {
                "type": "Identifier",
                "start": 27,
                "end": 48,
                "name": "callback",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 35,
                  "end": 48,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 37,
                    "end": 48,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 38,
                        "end": 42,
                        "name": "p",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 39,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 41,
                            "end": 42,
                            "typeName": {
                              "type": "Identifier",
                              "start": 41,
                              "end": 42,
                              "name": "T",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 44,
                      "end": 48,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 47,
                        "end": 48,
                        "typeName": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 48,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 51,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 53,
                  "name": "I1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 53,
                  "end": 56,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 54,
                      "end": 55,
                      "typeName": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 82,
            "name": "v1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 71,
                "end": 82,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 73,
                  "name": "I1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 73,
                  "end": 82,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 74,
                      "end": 81
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
      "start": 86,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 104,
            "name": "v2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 104,
                "typeName": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 96,
                  "name": "I1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 96,
                  "end": 104,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 97,
                      "end": 103
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
            "start": 107,
            "end": 109,
            "name": "v1",
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
