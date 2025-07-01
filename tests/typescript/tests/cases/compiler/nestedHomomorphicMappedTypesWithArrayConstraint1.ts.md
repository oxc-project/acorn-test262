__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MatchArguments",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 49
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 50,
            "end": 51
          }
        ],
        "start": 49,
        "end": 52
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 63
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 74
            },
            "typeArguments": null,
            "start": 73,
            "end": 74
          },
          "start": 67,
          "end": 74
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "typeArguments": null,
            "start": 77,
            "end": 78
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "typeArguments": null,
            "start": 79,
            "end": 80
          },
          "start": 77,
          "end": 81
        },
        "optional": false,
        "readonly": null,
        "start": 55,
        "end": 84
      },
      "declare": false,
      "start": 30,
      "end": 85
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SinonSpyCallApi",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 112
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TArgs",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 118
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 127,
                "end": 130
              },
              "start": 127,
              "end": 132
            },
            "default": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 135,
                "end": 138
              },
              "start": 135,
              "end": 140
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 113,
            "end": 140
          }
        ],
        "start": 112,
        "end": 141
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "calledWith",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 158
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 166
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 168,
                      "end": 175
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MatchArguments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 176,
                            "end": 190
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TArgs",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 191,
                                  "end": 196
                                },
                                "typeArguments": null,
                                "start": 191,
                                "end": 196
                              }
                            ],
                            "start": 190,
                            "end": 197
                          },
                          "start": 176,
                          "end": 197
                        }
                      ],
                      "start": 175,
                      "end": 198
                    },
                    "start": 168,
                    "end": 198
                  },
                  "start": 166,
                  "end": 198
                },
                "value": null,
                "start": 159,
                "end": 198
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 201,
                "end": 208
              },
              "start": 199,
              "end": 208
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 148,
            "end": 209
          }
        ],
        "start": 142,
        "end": 211
      },
      "declare": false,
      "start": 87,
      "end": 211
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 211
}
```
