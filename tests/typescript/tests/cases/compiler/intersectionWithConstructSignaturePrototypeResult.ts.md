__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmberObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 25
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 26,
        "end": 28
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 28
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PersonType",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 45
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Readonly",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 56
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EmberObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 75
                  },
                  "typeArguments": null,
                  "start": 57,
                  "end": 75
                }
              ],
              "start": 56,
              "end": 76
            },
            "start": 48,
            "end": 76
          },
          {
            "type": "TSConstructorType",
            "abstract": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "properties",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 100,
                    "end": 106
                  },
                  "start": 98,
                  "end": 106
                },
                "start": 87,
                "end": 106
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "firstName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 117,
                          "end": 126
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 128,
                            "end": 134
                          },
                          "start": 126,
                          "end": 134
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 117,
                        "end": 135
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "lastName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 140,
                          "end": 148
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 150,
                            "end": 156
                          },
                          "start": 148,
                          "end": 156
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 140,
                        "end": 157
                      }
                    ],
                    "start": 111,
                    "end": 161
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EmberObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 164,
                      "end": 175
                    },
                    "typeArguments": null,
                    "start": 164,
                    "end": 175
                  }
                ],
                "start": 111,
                "end": 175
              },
              "start": 108,
              "end": 175
            },
            "start": 82,
            "end": 175
          },
          {
            "type": "TSConstructorType",
            "abstract": false,
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
                  "start": 190,
                  "end": 194
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 196,
                      "end": 199
                    },
                    "start": 196,
                    "end": 201
                  },
                  "start": 194,
                  "end": 201
                },
                "value": null,
                "start": 187,
                "end": 201
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "firstName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 212,
                          "end": 221
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 223,
                            "end": 229
                          },
                          "start": 221,
                          "end": 229
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 212,
                        "end": 230
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "lastName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 235,
                          "end": 243
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 245,
                            "end": 251
                          },
                          "start": 243,
                          "end": 251
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 235,
                        "end": 252
                      }
                    ],
                    "start": 206,
                    "end": 256
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EmberObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 270
                    },
                    "typeArguments": null,
                    "start": 259,
                    "end": 270
                  }
                ],
                "start": 206,
                "end": 270
              },
              "start": 203,
              "end": 270
            },
            "start": 182,
            "end": 270
          }
        ],
        "start": 48,
        "end": 271
      },
      "declare": false,
      "start": 30,
      "end": 272
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PersonPrototype",
        "optional": false,
        "typeAnnotation": null,
        "start": 279,
        "end": 294
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PersonType",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 307
          },
          "typeArguments": null,
          "start": 297,
          "end": 307
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "prototype",
            "raw": "\"prototype\"",
            "start": 308,
            "end": 319
          },
          "start": 308,
          "end": 319
        },
        "start": 297,
        "end": 320
      },
      "declare": false,
      "start": 274,
      "end": 321
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 321
}
```
