__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 163,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 43,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 43,
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
          "start": 27,
          "end": 42,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 42,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 33,
              "end": 42,
              "elementTypes": [
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 37,
                  "end": 38,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 40,
                  "end": 41,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "Z",
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
          "end": 24,
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
            },
            {
              "type": "TSTypeParameter",
              "start": 22,
              "end": 23,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "Z",
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
      "start": 44,
      "end": 86,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 51,
        "end": 86,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 56,
          "end": 59,
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 68,
          "end": 85,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 71,
            "end": 85,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 72,
                "end": 73,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              },
              {
                "type": "TSTypeReference",
                "start": 83,
                "end": 84,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 68,
            "end": 71,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 59,
          "end": 65,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 60,
              "end": 61,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 63,
              "end": 64,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "N",
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
      "start": 87,
      "end": 124,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 94,
        "end": 124,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 99,
          "end": 102,
          "decorators": [],
          "name": "Baa",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 108,
          "end": 123,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 111,
            "end": 123,
            "params": [
              {
                "type": "TSBooleanKeyword",
                "start": 112,
                "end": 119
              },
              {
                "type": "TSTypeReference",
                "start": 121,
                "end": 122,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 122,
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
            "start": 108,
            "end": 111,
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 102,
          "end": 105,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 103,
              "end": 104,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
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
      "start": 125,
      "end": 163,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 132,
        "end": 163,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 138,
            "end": 163,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 142,
              "end": 163,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 162,
                "end": 163,
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
                  "start": 143,
                  "end": 157,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 144,
                    "end": 157,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 146,
                      "end": 157,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 149,
                        "end": 157,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 150,
                            "end": 156
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 149,
                        "decorators": [],
                        "name": "Baa",
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
