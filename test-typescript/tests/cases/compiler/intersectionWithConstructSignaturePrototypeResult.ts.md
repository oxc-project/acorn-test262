__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 322,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 25,
        "name": "EmberObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 28,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 30,
      "end": 272,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 45,
        "name": "PersonType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 48,
        "end": 271,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 48,
            "end": 76,
            "typeName": {
              "type": "Identifier",
              "start": 48,
              "end": 56,
              "name": "Readonly",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 56,
              "end": 76,
              "params": [
                {
                  "type": "TSTypeQuery",
                  "start": 57,
                  "end": 75,
                  "exprName": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 75,
                    "name": "EmberObject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSConstructorType",
            "start": 82,
            "end": 175,
            "abstract": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 87,
                "end": 106,
                "name": "properties",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 98,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 100,
                    "end": 106
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 175,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 111,
                "end": 175,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 111,
                    "end": 161,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 117,
                        "end": 135,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 126,
                          "name": "firstName",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 126,
                          "end": 134,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 128,
                            "end": 134
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 140,
                        "end": 157,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 148,
                          "name": "lastName",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 148,
                          "end": 156,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 150,
                            "end": 156
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 164,
                    "end": 175,
                    "typeName": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 175,
                      "name": "EmberObject",
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
          {
            "type": "TSConstructorType",
            "start": 182,
            "end": 270,
            "abstract": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 187,
                "end": 201,
                "argument": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 194,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 194,
                  "end": 201,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 196,
                    "end": 201,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 196,
                      "end": 199
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 270,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 206,
                "end": 270,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 206,
                    "end": 256,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 212,
                        "end": 230,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 212,
                          "end": 221,
                          "name": "firstName",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 221,
                          "end": 229,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 223,
                            "end": 229
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 235,
                        "end": 252,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 243,
                          "name": "lastName",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 243,
                          "end": 251,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 245,
                            "end": 251
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 259,
                    "end": 270,
                    "typeName": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 270,
                      "name": "EmberObject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 274,
      "end": 321,
      "id": {
        "type": "Identifier",
        "start": 279,
        "end": 294,
        "name": "PersonPrototype",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 297,
        "end": 320,
        "objectType": {
          "type": "TSTypeReference",
          "start": 297,
          "end": 307,
          "typeName": {
            "type": "Identifier",
            "start": 297,
            "end": 307,
            "name": "PersonType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 308,
          "end": 319,
          "literal": {
            "type": "Literal",
            "start": 308,
            "end": 319,
            "value": "prototype",
            "raw": "\"prototype\""
          }
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
