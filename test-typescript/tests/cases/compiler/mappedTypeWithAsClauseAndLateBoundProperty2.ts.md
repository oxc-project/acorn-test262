mappedTypeWithAsClauseAndLateBoundProperty2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 111,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 111,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 110,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 18,
              "decorators": [],
              "name": "thing",
              "optional": false
            },
            "init": {
              "type": "TSSatisfiesExpression",
              "start": 21,
              "end": 110,
              "expression": {
                "type": "TSAsExpression",
                "start": 22,
                "end": 95,
                "expression": {
                  "type": "TSNonNullExpression",
                  "start": 22,
                  "end": 27,
                  "expression": {
                    "type": "Literal",
                    "start": 22,
                    "end": 26,
                    "raw": "null",
                    "value": null
                  }
                },
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "start": 31,
                  "end": 95,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 39,
                    "end": 53,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 45,
                      "end": 53,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 45,
                        "end": 51
                      }
                    }
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 35,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  },
                  "nameType": {
                    "type": "TSTypeReference",
                    "start": 57,
                    "end": 77,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 64,
                      "end": 77,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 65,
                          "end": 66,
                          "typeName": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 66,
                            "decorators": [],
                            "name": "K",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 68,
                          "end": 76,
                          "literal": {
                            "type": "Literal",
                            "start": 68,
                            "end": 76,
                            "raw": "\"length\"",
                            "value": "length"
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 64,
                      "decorators": [],
                      "name": "Exclude",
                      "optional": false
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 80,
                    "end": 93,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 91,
                      "end": 92,
                      "typeName": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 92,
                        "decorators": [],
                        "name": "K",
                        "optional": false
                      }
                    },
                    "objectType": {
                      "type": "TSArrayType",
                      "start": 81,
                      "end": 89,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 81,
                        "end": 87
                      }
                    }
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 107,
                "end": 110
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
  "sourceType": "script"
}
```
