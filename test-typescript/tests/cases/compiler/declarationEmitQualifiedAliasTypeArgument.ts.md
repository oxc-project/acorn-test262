__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 42,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 42,
        "body": {
          "type": "TSInterfaceBody",
          "start": 26,
          "end": 42,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 32,
              "end": 40,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 32,
                "end": 36,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 38,
                  "end": 39,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 22,
          "decorators": [],
          "name": "INode",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 22,
          "end": 25,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 23,
              "end": 24,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "T",
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
      "end": 88,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 51,
        "end": 88,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 60,
          "end": 66,
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 71,
          "end": 87,
          "typeAnnotation": {
            "type": "TSFunctionType",
            "start": 73,
            "end": 87,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 87,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 79,
                "end": 87,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 84,
                  "end": 87,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 85,
                      "end": 86,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 86,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 84,
                  "decorators": [],
                  "name": "INode",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 66,
          "end": 69,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 67,
              "end": 68,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 148,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 55,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 55,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 34,
          "end": 54,
          "constraint": {
            "type": "TSTypeReference",
            "start": 42,
            "end": 43,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": false,
          "readonly": null,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 46,
            "end": 52
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 13,
          "end": 31,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 14,
              "end": 30,
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "decorators": [],
                "name": "T",
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
      "start": 57,
      "end": 99,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 64,
        "end": 99,
        "body": {
          "type": "TSEnumBody",
          "start": 71,
          "end": 99,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 77,
              "end": 84,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 81,
                "end": 84,
                "raw": "\"a\"",
                "value": "a"
              }
            },
            {
              "type": "TSEnumMember",
              "start": 90,
              "end": 97,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 94,
                "end": 97,
                "raw": "\"b\"",
                "value": "b"
              }
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "decorators": [],
          "name": "E",
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
      "start": 101,
      "end": 122,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 108,
        "end": 122,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 117,
          "end": 121,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 118,
            "end": 121,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 119,
                "end": 120,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 147,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 131,
        "end": 147,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 136,
          "end": 137,
          "decorators": [],
          "name": "Q",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 140,
          "end": 146,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 141,
            "end": 146,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 142,
                "end": 145,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 142,
                  "end": 145,
                  "left": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 143,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 145,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
  "end": 128,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 28,
        "raw": "\"./lib\"",
        "value": "./lib"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 61,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 60,
        "raw": "\"./bbb\"",
        "value": "./bbb"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 39,
          "end": 45,
          "imported": {
            "type": "Identifier",
            "start": 39,
            "end": 45,
            "decorators": [],
            "name": "create",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 39,
            "end": 45,
            "decorators": [],
            "name": "create",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 63,
      "end": 94,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 70,
        "end": 94,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 76,
            "end": 93,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 76,
              "end": 79,
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 82,
              "end": 93,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 82,
                "end": 88,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 88,
                "end": 91,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 89,
                    "end": 90,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 128,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 103,
        "end": 128,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 109,
            "end": 127,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 109,
              "end": 113,
              "decorators": [],
              "name": "fun2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 116,
              "end": 127,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 116,
                "end": 122,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 122,
                "end": 125,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 123,
                    "end": 124,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
