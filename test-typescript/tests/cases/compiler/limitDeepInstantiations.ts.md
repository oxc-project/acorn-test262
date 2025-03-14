limitDeepInstantiations.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 139,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 87,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 54,
        "end": 86,
        "indexType": {
          "type": "TSTypeReference",
          "start": 84,
          "end": 85,
          "typeName": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "objectType": {
          "type": "TSTypeLiteral",
          "start": 54,
          "end": 83,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 56,
              "end": 81,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 56,
                "end": 62,
                "raw": "\"true\"",
                "value": "true"
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 81,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 64,
                  "end": 81,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 67,
                    "end": 81,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 68,
                        "end": 69,
                        "typeName": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 69,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 71,
                        "end": 80,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 74,
                          "end": 80,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 75,
                              "end": 76,
                              "typeName": {
                                "type": "Identifier",
                                "start": 75,
                                "end": 76,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 78,
                              "end": 79,
                              "typeName": {
                                "type": "Identifier",
                                "start": 78,
                                "end": 79,
                                "decorators": [],
                                "name": "B",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 74,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 67,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 30,
        "end": 51,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 31,
            "end": 47,
            "const": false,
            "constraint": {
              "type": "TSLiteralType",
              "start": 41,
              "end": 47,
              "literal": {
                "type": "Literal",
                "start": 41,
                "end": 47,
                "raw": "\"true\"",
                "value": "true"
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
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
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 111,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 111,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 99,
                  "end": 111,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 100,
                      "end": 106,
                      "literal": {
                        "type": "Literal",
                        "start": 100,
                        "end": 106,
                        "raw": "\"true\"",
                        "value": "true"
                      }
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 108,
                      "end": 110,
                      "members": []
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 99,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 137,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 137,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 121,
                "end": 137,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 124,
                  "end": 137,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 125,
                      "end": 132,
                      "literal": {
                        "type": "Literal",
                        "start": 125,
                        "end": 132,
                        "raw": "\"false\"",
                        "value": "false"
                      }
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 134,
                      "end": 136,
                      "members": []
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 124,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
