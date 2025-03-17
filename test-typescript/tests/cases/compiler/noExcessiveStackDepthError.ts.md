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
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 44,
        "name": "FindOperator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 44,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 45,
            "end": 46,
            "name": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
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
        "start": 48,
        "end": 63,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 54,
            "end": 61,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 57,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 65,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 84,
        "name": "FindConditions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 90,
        "end": 173,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 97,
          "end": 109,
          "name": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 113,
          "end": 170,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 113,
              "end": 133,
              "typeName": {
                "type": "Identifier",
                "start": 113,
                "end": 127,
                "name": "FindConditions",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 127,
                "end": 133,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 128,
                    "end": 132,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 128,
                      "end": 129,
                      "typeName": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 129,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 130,
                      "end": 131,
                      "typeName": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 131,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 136,
              "end": 170,
              "typeName": {
                "type": "Identifier",
                "start": 136,
                "end": 148,
                "name": "FindOperator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 148,
                "end": 170,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 149,
                    "end": 169,
                    "typeName": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 163,
                      "name": "FindConditions",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 163,
                      "end": 169,
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 164,
                          "end": 168,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 164,
                            "end": 165,
                            "typeName": {
                              "type": "Identifier",
                              "start": 164,
                              "end": 165,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 166,
                            "end": 167,
                            "typeName": {
                              "type": "Identifier",
                              "start": 166,
                              "end": 167,
                              "name": "P",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        },
        "optional": true,
        "readonly": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 176,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 188,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 231,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 210,
                    "end": 231,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 212,
                      "end": 231,
                      "typeName": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 226,
                        "name": "FindConditions",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
            "start": 237,
            "end": 267,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 241,
                "end": 266,
                "id": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 266,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 242,
                    "end": 266,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 244,
                      "end": 266,
                      "typeName": {
                        "type": "Identifier",
                        "start": 244,
                        "end": 258,
                        "name": "FindConditions",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "name": "Entity",
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
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 188,
        "end": 196,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 189,
            "end": 195,
            "name": {
              "type": "Identifier",
              "start": 189,
              "end": 195,
              "name": "Entity",
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
