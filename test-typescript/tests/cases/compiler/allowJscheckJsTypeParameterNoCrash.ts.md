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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 26,
        "name": "ComponentOptions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "V",
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
        "start": 30,
        "end": 79,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 77,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 41,
              "name": "watch",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 76,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 49,
                  "name": "Record",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 70,
                        "name": "WatchHandler",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 80,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 97,
        "name": "WatchHandler",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
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
        "type": "TSFunctionType",
        "start": 103,
        "end": 119,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 104,
            "end": 110,
            "name": "val",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 110,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 121,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 144,
        "name": "extend",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 145,
          "end": 174,
          "name": "options",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 152,
            "end": 174,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 154,
              "end": 174,
              "typeName": {
                "type": "Identifier",
                "start": 154,
                "end": 170,
                "name": "ComponentOptions",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 175,
        "end": 181,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 177,
          "end": 181
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 183,
      "end": 211,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 190,
        "end": 211,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 194,
            "end": 210,
            "id": {
              "type": "Identifier",
              "start": 194,
              "end": 201,
              "name": "vextend",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 204,
              "end": 210,
              "name": "extend",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
