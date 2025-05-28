__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 238,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 54,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 52,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 29,
                "end": 38,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 30,
                  "end": 38,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 32,
                    "end": 38
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 41,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 46,
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 46,
                  "end": 51,
                  "params": [
                    {
                      "type": "TSArrayType",
                      "start": 47,
                      "end": 50,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 47,
                        "end": 48,
                        "typeName": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 48,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 57,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 70,
        "decorators": [],
        "name": "from",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 70,
        "end": 73,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 72,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "T",
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
      "params": [
        {
          "type": "Identifier",
          "start": 74,
          "end": 86,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 86,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 79,
              "end": 86
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 87,
        "end": 97,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 89,
          "end": 97,
          "typeName": {
            "type": "Identifier",
            "start": 89,
            "end": 94,
            "decorators": [],
            "name": "Query",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 94,
            "end": 97,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 95,
                "end": 96,
                "typeName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 176,
      "end": 238,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 189,
        "decorators": [],
        "name": "from",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 189,
        "end": 192,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 190,
            "end": 191,
            "name": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "decorators": [],
              "name": "T",
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
      "params": [
        {
          "type": "Identifier",
          "start": 193,
          "end": 201,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 196,
            "end": 201,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 198,
              "end": 201
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 202,
        "end": 212,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 204,
          "end": 212,
          "typeName": {
            "type": "Identifier",
            "start": 204,
            "end": 209,
            "decorators": [],
            "name": "Query",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 209,
            "end": 212,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 210,
                "end": 211,
                "typeName": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 213,
        "end": 238,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 219,
            "end": 236,
            "argument": {
              "type": "Identifier",
              "start": 226,
              "end": 235,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
