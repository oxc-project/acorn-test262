__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 187,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 67,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 31,
        "end": 67,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 39,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 51,
          "end": 66,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 54,
            "end": 66,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 57,
              "end": 66,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 58,
                  "end": 59,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 59,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 61,
                  "end": 62,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 64,
                  "end": 65,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
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
          "start": 39,
          "end": 48,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 40,
              "end": 41,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 43,
              "end": 44,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 46,
              "end": 47,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
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
      "start": 68,
      "end": 110,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 75,
        "end": 110,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 80,
          "end": 83,
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 92,
          "end": 109,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 95,
            "end": 109,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 96,
                "end": 97,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 99,
                "end": 105
              },
              {
                "type": "TSTypeReference",
                "start": 107,
                "end": 108,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
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
            "start": 92,
            "end": 95,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 83,
          "end": 89,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 84,
              "end": 85,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 87,
              "end": 88,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
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
      "start": 111,
      "end": 148,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 118,
        "end": 148,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 123,
          "end": 126,
          "decorators": [],
          "name": "Baa",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 132,
          "end": 147,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 135,
            "end": 147,
            "params": [
              {
                "type": "TSBooleanKeyword",
                "start": 136,
                "end": 143
              },
              {
                "type": "TSTypeReference",
                "start": 145,
                "end": 146,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
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
            "start": 132,
            "end": 135,
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 126,
          "end": 129,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 127,
              "end": 128,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
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
      "start": 149,
      "end": 187,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 156,
        "end": 187,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 162,
            "end": 187,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 166,
              "end": 187,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 186,
                "end": 187,
                "raw": "1",
                "value": 1
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 167,
                  "end": 181,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 168,
                    "end": 181,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 170,
                      "end": 181,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 173,
                        "end": 181,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 174,
                            "end": 180
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 173,
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
  "sourceType": "script",
  "hashbang": null
}
```
