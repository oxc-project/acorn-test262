__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 111,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 110,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 18,
              "name": "thing",
              "typeAnnotation": null,
              "decorators": [],
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
                    "value": null,
                    "raw": "null"
                  }
                },
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "start": 31,
                  "end": 95,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 34,
                    "end": 53,
                    "name": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  "nameType": {
                    "type": "TSTypeReference",
                    "start": 57,
                    "end": 77,
                    "typeName": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 64,
                      "name": "Exclude",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 68,
                          "end": 76,
                          "literal": {
                            "type": "Literal",
                            "start": 68,
                            "end": 76,
                            "value": "length",
                            "raw": "\"length\""
                          }
                        }
                      ]
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 80,
                    "end": 93,
                    "objectType": {
                      "type": "TSArrayType",
                      "start": 81,
                      "end": 89,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 81,
                        "end": 87
                      }
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 91,
                      "end": 92,
                      "typeName": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 92,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "optional": null,
                  "readonly": null,
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
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 107,
                "end": 110
              }
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
