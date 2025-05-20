__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 32,
        "body": {
          "type": "TSEnumBody",
          "start": 17,
          "end": 32,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 23,
              "end": 24,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            },
            {
              "type": "TSEnumMember",
              "start": 26,
              "end": 27,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            },
            {
              "type": "TSEnumMember",
              "start": 29,
              "end": 30,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 16,
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 69,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 41,
        "end": 69,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 54,
          "decorators": [],
          "name": "TestType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 57,
          "end": 68,
          "exprName": {
            "type": "Identifier",
            "start": 64,
            "end": 68,
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 71,
      "end": 157,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 78,
        "end": 157,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 84,
            "end": 156,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 87,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSSatisfiesExpression",
              "start": 90,
              "end": 156,
              "expression": {
                "type": "TSAsExpression",
                "start": 90,
                "end": 142,
                "expression": {
                  "type": "TSNonNullExpression",
                  "start": 90,
                  "end": 95,
                  "expression": {
                    "type": "Literal",
                    "start": 90,
                    "end": 94,
                    "raw": "null",
                    "value": null
                  }
                },
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 99,
                  "end": 142,
                  "elementType": {
                    "type": "TSIndexedAccessType",
                    "start": 99,
                    "end": 140,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 108,
                      "end": 139,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 115,
                        "end": 139,
                        "params": [
                          {
                            "type": "TSTypeOperator",
                            "start": 116,
                            "end": 130,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 122,
                              "end": 130,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 122,
                                "end": 130,
                                "decorators": [],
                                "name": "TestType",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 132,
                            "end": 138
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 115,
                        "decorators": [],
                        "name": "Extract",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 99,
                      "end": 107,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 107,
                        "decorators": [],
                        "name": "TestType",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 153,
                "end": 156
              }
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
