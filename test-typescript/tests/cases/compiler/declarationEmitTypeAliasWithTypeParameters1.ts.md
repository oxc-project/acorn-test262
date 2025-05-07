__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 37,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 37,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 24,
          "end": 36,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 36,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 30,
              "end": 36,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 31,
                  "end": 32,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 34,
                  "end": 35,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          },
          "typeParameters": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 15,
          "end": 21,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 16,
              "end": 17,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 19,
              "end": 20,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null
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
      "start": 38,
      "end": 71,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 45,
        "end": 71,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 53,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 59,
          "end": 70,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 62,
            "end": 70,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 63,
                "end": 66
              },
              {
                "type": "TSTypeReference",
                "start": 68,
                "end": 69,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 59,
            "end": 62,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 53,
          "end": 56,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 54,
              "end": 55,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null
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
      "start": 72,
      "end": 110,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 79,
        "end": 110,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 85,
            "end": 110,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 89,
              "end": 110,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 109,
                "end": 110,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 90,
                  "end": 104,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 91,
                    "end": 104,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 93,
                      "end": 104,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 96,
                        "end": 104,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 97,
                            "end": 103
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 96,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
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
  "sourceType": "module",
  "hashbang": null
}
```
