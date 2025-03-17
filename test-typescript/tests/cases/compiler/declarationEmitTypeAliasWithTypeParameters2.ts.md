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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 31,
        "end": 67,
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
          "end": 48,
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
            },
            {
              "type": "TSTypeParameter",
              "start": 46,
              "end": 47,
              "name": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "name": "Z",
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
          "start": 51,
          "end": 66,
          "typeParameters": null,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 59,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 61,
                  "end": 62,
                  "typeName": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "name": "Y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 64,
                  "end": 65,
                  "typeName": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "name": "Z",
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
      "start": 68,
      "end": 110,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 75,
        "end": 110,
        "id": {
          "type": "Identifier",
          "start": 80,
          "end": 83,
          "name": "Baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "M",
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
              "start": 87,
              "end": 88,
              "name": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "name": "N",
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
          "start": 92,
          "end": 109,
          "typeName": {
            "type": "Identifier",
            "start": 92,
            "end": 95,
            "name": "Bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 95,
            "end": 109,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 96,
                "end": 97,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "name": "N",
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
      "start": 111,
      "end": 148,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 118,
        "end": 148,
        "id": {
          "type": "Identifier",
          "start": 123,
          "end": 126,
          "name": "Baa",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
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
          "start": 132,
          "end": 147,
          "typeName": {
            "type": "Identifier",
            "start": 132,
            "end": 135,
            "name": "Baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
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
      "start": 149,
      "end": 187,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 156,
        "end": 187,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 162,
            "end": 187,
            "id": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 166,
              "end": 187,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 167,
                  "end": 181,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 168,
                    "end": 181,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 170,
                      "end": 181,
                      "typeName": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 173,
                        "name": "Baa",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "Literal",
                "start": 186,
                "end": 187,
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
