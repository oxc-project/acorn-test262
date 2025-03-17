__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 134,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 61,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 31,
        "end": 61,
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 39,
          "name": "Bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 39,
          "end": 45,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 40,
              "end": 41,
              "name": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 43,
              "end": 44,
              "name": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "name": "Y",
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
          "start": 48,
          "end": 60,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 60,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 54,
              "end": 60,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 55,
                  "end": 56,
                  "typeName": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 58,
                  "end": 59,
                  "typeName": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 59,
                    "name": "Y",
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 62,
      "end": 95,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 69,
        "end": 95,
        "id": {
          "type": "Identifier",
          "start": 74,
          "end": 77,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 77,
          "end": 80,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 78,
              "end": 79,
              "name": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "name": "Y",
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
          "type": "TSTypeReference",
          "start": 83,
          "end": 94,
          "typeName": {
            "type": "Identifier",
            "start": 83,
            "end": 86,
            "name": "Bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 86,
            "end": 94,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 87,
                "end": 90
              },
              {
                "type": "TSTypeReference",
                "start": 92,
                "end": 93,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 134,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 103,
        "end": 134,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 109,
            "end": 134,
            "id": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 113,
              "end": 134,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 114,
                  "end": 128,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 115,
                    "end": 128,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 117,
                      "end": 128,
                      "typeName": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 120,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 120,
                        "end": 128,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 121,
                            "end": 127
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "Literal",
                "start": 133,
                "end": 134,
                "value": 1,
                "raw": "1"
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
