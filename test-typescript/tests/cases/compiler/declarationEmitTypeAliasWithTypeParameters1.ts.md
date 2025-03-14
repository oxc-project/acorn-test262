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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 31,
        "end": 61,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 39,
          "decorators": [],
          "name": "Bar",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 48,
          "end": 60,
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
                    "decorators": [],
                    "name": "X",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 58,
                  "end": 59,
                  "typeName": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 59,
                    "decorators": [],
                    "name": "Y",
                    "optional": false
                  }
                }
              ]
            }
          }
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
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "X",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 43,
              "end": 44,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "decorators": [],
                "name": "Y",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 62,
      "end": 95,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 69,
        "end": 95,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 74,
          "end": 77,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 83,
          "end": 94,
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
                  "decorators": [],
                  "name": "Y",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 83,
            "end": 86,
            "decorators": [],
            "name": "Bar",
            "optional": false
          }
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
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "Y",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 134,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 103,
        "end": 134,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 109,
            "end": 134,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 113,
              "end": 134,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 133,
                "end": 134,
                "raw": "1",
                "value": 1
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 114,
                  "end": 128,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 115,
                    "end": 128,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 117,
                      "end": 128,
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
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 120,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
