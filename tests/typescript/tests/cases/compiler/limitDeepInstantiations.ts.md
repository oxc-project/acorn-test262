__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 138,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSLiteralType",
              "start": 41,
              "end": 47,
              "literal": {
                "type": "Literal",
                "start": 41,
                "end": 47,
                "value": "true",
                "raw": "\"true\""
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 49,
            "end": 50,
            "name": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "B",
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
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 54,
        "end": 86,
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "start": 56,
                "end": 62,
                "value": "true",
                "raw": "\"true\""
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 81,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 64,
                  "end": 81,
                  "typeName": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 67,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 71,
                        "end": 80,
                        "typeName": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 74,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
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
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 112,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 111,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 99,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                        "value": "true",
                        "raw": "\"true\""
                      }
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 108,
                      "end": 110,
                      "members": []
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 138,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 137,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 124,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                        "value": "false",
                        "raw": "\"false\""
                      }
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 134,
                      "end": 136,
                      "members": []
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
