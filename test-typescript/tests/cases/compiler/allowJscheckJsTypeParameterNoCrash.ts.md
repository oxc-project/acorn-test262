__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 211,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 79,
      "body": {
        "type": "TSInterfaceBody",
        "start": 30,
        "end": 79,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 77,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 41,
              "decorators": [],
              "name": "watch",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 76,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 49,
                  "end": 76,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 50,
                      "end": 56
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 58,
                      "end": 75,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 70,
                        "end": 75,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 71,
                            "end": 74
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 70,
                        "decorators": [],
                        "name": "WatchHandler",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 49,
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 10,
        "end": 26,
        "decorators": [],
        "name": "ComponentOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 28,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 80,
      "end": 120,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 97,
        "decorators": [],
        "name": "WatchHandler",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 103,
        "end": 119,
        "params": [
          {
            "type": "Identifier",
            "start": 104,
            "end": 110,
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 110,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 112,
          "end": 119,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 115,
            "end": 119
          }
        },
        "typeParameters": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 97,
        "end": 100,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 99,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
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
      "type": "TSDeclareFunction",
      "start": 121,
      "end": 182,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 144,
        "decorators": [],
        "name": "extend",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 145,
          "end": 174,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 152,
            "end": 174,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 154,
              "end": 174,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 170,
                "end": 174,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 171,
                    "end": 173,
                    "members": []
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 154,
                "end": 170,
                "decorators": [],
                "name": "ComponentOptions",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 181,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 177,
          "end": 181
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 183,
      "end": 211,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 190,
        "end": 211,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 194,
            "end": 210,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 194,
              "end": 201,
              "decorators": [],
              "name": "vextend",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 204,
              "end": 210,
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
