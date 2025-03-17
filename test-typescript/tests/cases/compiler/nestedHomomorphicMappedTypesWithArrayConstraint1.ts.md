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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 49,
        "decorators": [],
        "name": "MatchArguments",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 55,
        "end": 84,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 67,
          "end": 74,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 73,
            "end": 74,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 62,
          "end": 63,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 77,
          "end": 81,
          "indexType": {
            "type": "TSTypeReference",
            "start": 79,
            "end": 80,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 77,
            "end": 78,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 87,
      "end": 211,
      "body": {
        "type": "TSInterfaceBody",
        "start": 142,
        "end": 211,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 148,
            "end": 209,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 158,
              "decorators": [],
              "name": "calledWith",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 159,
                "end": 198,
                "argument": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 166,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
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
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 175,
                      "end": 198,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 176,
                          "end": 197,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 190,
                            "end": 197,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 191,
                                "end": 196,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 191,
                                  "end": 196,
                                  "decorators": [],
                                  "name": "TArgs",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 176,
                            "end": 190,
                            "decorators": [],
                            "name": "MatchArguments",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 175,
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "value": null
              }
            ],
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 112,
        "decorators": [],
        "name": "SinonSpyCallApi",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 141,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 140,
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 118,
              "decorators": [],
              "name": "TArgs",
              "optional": false,
              "typeAnnotation": null
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
