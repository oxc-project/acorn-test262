__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 320,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 63,
      "body": {
        "type": "TSInterfaceBody",
        "start": 48,
        "end": 63,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 54,
            "end": 61,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 57,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 60,
              "typeAnnotation": {
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
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 44,
        "decorators": [],
        "name": "FindOperator",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 44,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 45,
            "end": 46,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
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
      "type": "TSTypeAliasDeclaration",
      "start": 65,
      "end": 174,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 84,
        "decorators": [],
        "name": "FindConditions",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 90,
        "end": 173,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 102,
          "end": 109,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 108,
            "end": 109,
            "typeName": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "optional": true,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 113,
          "end": 170,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 113,
              "end": 133,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 127,
                "end": 133,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 128,
                    "end": 132,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 130,
                      "end": 131,
                      "typeName": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 131,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 128,
                      "end": 129,
                      "typeName": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 129,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 113,
                "end": 127,
                "decorators": [],
                "name": "FindConditions",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 136,
              "end": 170,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 148,
                "end": 170,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 149,
                    "end": 169,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 163,
                      "end": 169,
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 164,
                          "end": 168,
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 166,
                            "end": 167,
                            "typeName": {
                              "type": "Identifier",
                              "start": 166,
                              "end": 167,
                              "decorators": [],
                              "name": "P",
                              "optional": false
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 164,
                            "end": 165,
                            "typeName": {
                              "type": "Identifier",
                              "start": 164,
                              "end": 165,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 163,
                      "decorators": [],
                      "name": "FindConditions",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 136,
                "end": 148,
                "decorators": [],
                "name": "FindOperator",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 84,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 86,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
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
      "type": "FunctionDeclaration",
      "start": 176,
      "end": 319,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 199,
        "end": 319,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 205,
            "end": 232,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 209,
                "end": 231,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 231,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 210,
                    "end": 231,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 212,
                      "end": 231,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 226,
                        "end": 231,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 227,
                            "end": 230
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 226,
                        "decorators": [],
                        "name": "FindConditions",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 237,
            "end": 267,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 241,
                "end": 266,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 266,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 242,
                    "end": 266,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 244,
                      "end": 266,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 258,
                        "end": 266,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 259,
                            "end": 265,
                            "typeName": {
                              "type": "Identifier",
                              "start": 259,
                              "end": 265,
                              "decorators": [],
                              "name": "Entity",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 244,
                        "end": 258,
                        "decorators": [],
                        "name": "FindConditions",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 188,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 188,
        "end": 196,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 189,
            "end": 195,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 195,
              "decorators": [],
              "name": "Entity",
              "optional": false
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
