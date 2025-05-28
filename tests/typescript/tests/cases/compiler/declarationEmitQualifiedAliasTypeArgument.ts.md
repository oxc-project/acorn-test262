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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 42,
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
              "name": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "T",
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
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 26,
          "end": 42,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 32,
              "end": 40,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 32,
                "end": 36,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 38,
                  "end": 39,
                  "typeName": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
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
      "start": 44,
      "end": 88,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 51,
        "end": 88,
        "id": {
          "type": "Identifier",
          "start": 60,
          "end": 66,
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 66,
          "end": 69,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 67,
              "end": 68,
              "name": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "T",
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
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 71,
          "end": 87,
          "typeAnnotation": {
            "type": "TSFunctionType",
            "start": 73,
            "end": 87,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 87,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 79,
                "end": 87,
                "typeName": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 84,
                  "decorators": [],
                  "name": "INode",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 84,
                  "end": 87,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 85,
                      "end": 86,
                      "typeName": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 86,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        },
        "body": null,
        "expression": false
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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 55,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null
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
              "name": {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 34,
          "end": 54,
          "key": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 42,
            "end": 43,
            "typeName": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 46,
            "end": 52
          },
          "optional": false,
          "readonly": null
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
      "start": 57,
      "end": 99,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 64,
        "end": 99,
        "id": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 71,
          "end": 99,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 77,
              "end": 84,
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
                "value": "a",
                "raw": "\"a\""
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 90,
              "end": 97,
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
                "value": "b",
                "raw": "\"b\""
              },
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
      "start": 101,
      "end": 122,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 108,
        "end": 122,
        "id": {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 117,
          "end": 121,
          "typeName": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 118,
            "end": 121,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 119,
                "end": 120,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "E",
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
      "start": 124,
      "end": 147,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 131,
        "end": 147,
        "id": {
          "type": "Identifier",
          "start": 136,
          "end": 137,
          "decorators": [],
          "name": "Q",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 140,
          "end": 146,
          "typeName": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 141,
            "end": 146,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 142,
                "end": 145,
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
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
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 28,
        "value": "./lib",
        "raw": "\"./lib\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 61,
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
          "local": {
            "type": "Identifier",
            "start": 39,
            "end": 45,
            "decorators": [],
            "name": "create",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 60,
        "value": "./bbb",
        "raw": "\"./bbb\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 63,
      "end": 94,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 70,
        "end": 94,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 76,
            "end": 93,
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
              "callee": {
                "type": "Identifier",
                "start": 82,
                "end": 88,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 88,
                "end": 91,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 89,
                    "end": 90,
                    "typeName": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              },
              "arguments": [],
              "optional": false
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 128,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 103,
        "end": 128,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 109,
            "end": 127,
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
              "callee": {
                "type": "Identifier",
                "start": 116,
                "end": 122,
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 122,
                "end": 125,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 123,
                    "end": 124,
                    "typeName": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              },
              "arguments": [],
              "optional": false
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
