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
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 32,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 16,
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 17,
          "end": 32,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 23,
              "end": 24,
              "id": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 26,
              "end": 27,
              "id": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 29,
              "end": 30,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            }
          ]
        },
        "const": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 69,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 41,
        "end": 69,
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 54,
          "decorators": [],
          "name": "TestType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 71,
      "end": 157,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 78,
        "end": 157,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 84,
            "end": 156,
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
                    "value": null,
                    "raw": "null"
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
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 99,
                      "end": 107,
                      "typeName": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 107,
                        "decorators": [],
                        "name": "TestType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 108,
                      "end": 139,
                      "typeName": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 115,
                        "decorators": [],
                        "name": "Extract",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 122,
                                "end": 130,
                                "decorators": [],
                                "name": "TestType",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 132,
                            "end": 138
                          }
                        ]
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
