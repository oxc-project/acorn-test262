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
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 33,
        "body": {
          "type": "TSEnumBody",
          "start": 16,
          "end": 33,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 22,
              "end": 23,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            },
            {
              "type": "TSEnumMember",
              "start": 29,
              "end": 30,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
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
  "end": 108,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 26,
        "raw": "'./enum'",
        "value": "./enum",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSEnumDeclaration",
      "start": 29,
      "end": 55,
      "body": {
        "type": "TSEnumBody",
        "start": 38,
        "end": 55,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 44,
            "end": 45,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 51,
            "end": 52,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 66,
            "end": 80,
            "expression": {
              "type": "MemberExpression",
              "start": 66,
              "end": 71,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 66,
                "end": 69,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 75,
              "end": 80,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 75,
                "end": 80,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 89,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 92,
            "end": 106,
            "expression": {
              "type": "MemberExpression",
              "start": 92,
              "end": 97,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 92,
                "end": 95,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 101,
              "end": 106,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 101,
                "end": 106,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 65,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 40,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 26,
              "end": 40,
              "body": {
                "type": "TSEnumBody",
                "start": 35,
                "end": 40,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 37,
                    "end": 38,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": null
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 34,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExpressionStatement",
            "start": 45,
            "end": 63,
            "directive": null,
            "expression": {
              "type": "TSAsExpression",
              "start": 45,
              "end": 62,
              "expression": {
                "type": "MemberExpression",
                "start": 45,
                "end": 53,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 45,
                  "end": 51,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 47,
                    "decorators": [],
                    "name": "ns",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 51,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 62,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 62,
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
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
  "end": 39,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 21,
        "body": {
          "type": "TSEnumBody",
          "start": 16,
          "end": 21,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 18,
              "end": 19,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 39,
      "directive": null,
      "expression": {
        "type": "TSAsExpression",
        "start": 22,
        "end": 38,
        "expression": {
          "type": "MemberExpression",
          "start": 22,
          "end": 29,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 23,
            "end": 26,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 38,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 38,
            "decorators": [],
            "name": "const",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
