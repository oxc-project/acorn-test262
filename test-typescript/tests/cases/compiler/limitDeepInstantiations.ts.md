__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "B",
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
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "Foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 111,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 111,
            "name": "f1",
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
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 137,
            "name": "f2",
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
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
