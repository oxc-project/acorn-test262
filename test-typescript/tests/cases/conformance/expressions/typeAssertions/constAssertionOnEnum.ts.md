__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 33,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 33,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 22,
            "end": 23,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ],
        "const": false,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 16,
          "end": 33,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 22,
              "end": 23,
              "id": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": null,
              "computed": false
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 108,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 26,
        "value": "./enum",
        "raw": "'./enum'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 29,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 44,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 51,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 38,
        "end": 55,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 44,
            "end": 45,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 51,
            "end": 52,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 66,
            "end": 80,
            "expression": {
              "type": "MemberExpression",
              "start": 66,
              "end": 71,
              "object": {
                "type": "Identifier",
                "start": 66,
                "end": 69,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 75,
              "end": 80,
              "typeName": {
                "type": "Identifier",
                "start": 75,
                "end": 80,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 89,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 92,
            "end": 106,
            "expression": {
              "type": "MemberExpression",
              "start": 92,
              "end": 97,
              "object": {
                "type": "Identifier",
                "start": 92,
                "end": 95,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 101,
              "end": 106,
              "typeName": {
                "type": "Identifier",
                "start": 101,
                "end": 106,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
  "end": 66,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "ns",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 65,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 40,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 26,
              "end": 40,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 34,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 37,
                  "end": 38,
                  "id": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 35,
                "end": 40,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 37,
                    "end": 38,
                    "id": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExpressionStatement",
            "start": 45,
            "end": 63,
            "expression": {
              "type": "TSAsExpression",
              "start": 45,
              "end": 62,
              "expression": {
                "type": "MemberExpression",
                "start": 45,
                "end": 53,
                "object": {
                  "type": "MemberExpression",
                  "start": 45,
                  "end": 51,
                  "object": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 47,
                    "name": "ns",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 51,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 62,
                  "name": "const",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
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
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 21,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 18,
            "end": 19,
            "id": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ],
        "const": false,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 16,
          "end": 21,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 18,
              "end": 19,
              "id": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": null,
              "computed": false
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 39,
      "expression": {
        "type": "TSAsExpression",
        "start": 22,
        "end": 38,
        "expression": {
          "type": "MemberExpression",
          "start": 22,
          "end": 29,
          "object": {
            "type": "Identifier",
            "start": 23,
            "end": 26,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 38,
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 38,
            "name": "const",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
