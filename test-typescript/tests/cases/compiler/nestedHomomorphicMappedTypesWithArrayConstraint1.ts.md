__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 211,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 30,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 49,
        "name": "MatchArguments",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 49,
        "end": 52,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 50,
            "end": 51,
            "name": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
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
        "start": 55,
        "end": 84,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 62,
          "end": 74,
          "name": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 67,
            "end": 74,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 73,
              "end": 74,
              "typeName": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
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
          "type": "TSIndexedAccessType",
          "start": 77,
          "end": 81,
          "objectType": {
            "type": "TSTypeReference",
            "start": 77,
            "end": 78,
            "typeName": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 79,
            "end": 80,
            "typeName": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 67,
          "end": 74,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 73,
            "end": 74,
            "typeName": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
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
          "start": 62,
          "end": 63,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 87,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 112,
        "name": "SinonSpyCallApi",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 141,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 140,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 118,
              "name": "TArgs",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 127,
              "end": 132,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 127,
                "end": 130
              }
            },
            "default": {
              "type": "TSArrayType",
              "start": 135,
              "end": 140,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 135,
                "end": 138
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 142,
        "end": 211,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 148,
            "end": 209,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 158,
              "name": "calledWith",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 159,
                "end": 198,
                "argument": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 166,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 166,
                  "end": 198,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 168,
                    "end": 198,
                    "typeName": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 175,
                      "name": "Partial",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 175,
                      "end": 198,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 176,
                          "end": 197,
                          "typeName": {
                            "type": "Identifier",
                            "start": 176,
                            "end": 190,
                            "name": "MatchArguments",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 190,
                            "end": 197,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 191,
                                "end": 196,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 191,
                                  "end": 196,
                                  "name": "TArgs",
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
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 208,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 201,
                "end": 208
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
