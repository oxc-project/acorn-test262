__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 95,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 95,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 38,
          "decorators": [],
          "name": "usePrivateType",
          "optional": false
        },
        "params": [
          {
            "type": "RestElement",
            "start": 60,
            "end": 70,
            "argument": {
              "type": "Identifier",
              "start": 63,
              "end": 67,
              "decorators": [],
              "name": "args",
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 70,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 69,
                "end": 70,
                "typeName": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 71,
          "end": 94,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 73,
            "end": 94,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 86,
              "end": 94,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 87,
                  "end": 93,
                  "indexType": {
                    "type": "TSAnyKeyword",
                    "start": 89,
                    "end": 92
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 87,
                    "end": 88,
                    "typeName": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 88,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 73,
              "end": 86,
              "decorators": [],
              "name": "PrivateMapped",
              "optional": false
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 38,
          "end": 59,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 39,
              "end": 58,
              "const": false,
              "constraint": {
                "type": "TSArrayType",
                "start": 49,
                "end": 58,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 49,
                  "end": 56
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "T",
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
      "type": "TSTypeAliasDeclaration",
      "start": 97,
      "end": 150,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 115,
        "decorators": [],
        "name": "PrivateMapped",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 123,
        "end": 149,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 130,
          "end": 139,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 136,
            "end": 139,
            "typeName": {
              "type": "Identifier",
              "start": 136,
              "end": 139,
              "decorators": [],
              "name": "Obj",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 125,
          "end": 126,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 142,
          "end": 148,
          "indexType": {
            "type": "TSTypeReference",
            "start": 146,
            "end": 147,
            "typeName": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 142,
            "end": 145,
            "typeName": {
              "type": "Identifier",
              "start": 142,
              "end": 145,
              "decorators": [],
              "name": "Obj",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 115,
        "end": 120,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 119,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "decorators": [],
              "name": "Obj",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 42,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 41,
        "raw": "'./internal'",
        "value": "./internal"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 22,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 22,
            "decorators": [],
            "name": "usePrivateType",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 22,
            "decorators": [],
            "name": "usePrivateType",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 43,
      "end": 146,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 50,
        "end": 146,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 56,
            "end": 145,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 82,
              "decorators": [],
              "name": "mappedUnionWithPrivateType",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 85,
              "end": 145,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 122,
                "end": 145,
                "arguments": [
                  {
                    "type": "SpreadElement",
                    "start": 137,
                    "end": 144,
                    "argument": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 144,
                      "decorators": [],
                      "name": "args",
                      "optional": false
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 136,
                  "decorators": [],
                  "name": "usePrivateType",
                  "optional": false
                },
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 107,
                  "end": 117,
                  "argument": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 114,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 114,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 116,
                      "end": 117,
                      "typeName": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 117,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 85,
                "end": 106,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 86,
                    "end": 105,
                    "const": false,
                    "constraint": {
                      "type": "TSArrayType",
                      "start": 96,
                      "end": 105,
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 96,
                        "end": 103
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 87,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
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
