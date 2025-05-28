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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 37,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
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
              "name": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 19,
              "end": 20,
              "name": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "decorators": [],
                "name": "Y",
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
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 24,
          "end": 36,
          "typeParameters": null,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 34,
                  "end": 35,
                  "typeName": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 71,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 45,
        "end": 71,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 53,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
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
              "name": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "Y",
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
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 59,
          "end": 70,
          "typeName": {
            "type": "Identifier",
            "start": 59,
            "end": 62,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
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
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 72,
      "end": 110,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 79,
        "end": 110,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 85,
            "end": 110,
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
              "expression": true,
              "async": false,
              "typeParameters": null,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 96,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "start": 109,
                "end": 110,
                "value": 1,
                "raw": "1"
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
