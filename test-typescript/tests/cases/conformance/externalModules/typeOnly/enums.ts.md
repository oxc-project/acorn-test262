__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 55,
      "body": {
        "type": "TSEnumBody",
        "start": 16,
        "end": 55,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 32,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 32,
              "decorators": [],
              "name": "ImportClause",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 36,
            "end": 53,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 53,
              "decorators": [],
              "name": "ExportDeclaration",
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
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "SyntaxKind",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 57,
      "end": 118,
      "body": {
        "type": "TSEnumBody",
        "start": 80,
        "end": 118,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 84,
            "end": 97,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 88,
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 91,
              "end": 97,
              "raw": "\"Type\"",
              "value": "Type",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 101,
            "end": 116,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 101,
              "end": 106,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 109,
              "end": 116,
              "raw": "\"Value\"",
              "value": "Value",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 79,
        "decorators": [],
        "name": "SymbolFlags",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 120,
      "end": 147,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 134,
          "end": 144,
          "exported": {
            "type": "Identifier",
            "start": 134,
            "end": 144,
            "decorators": [],
            "name": "SyntaxKind",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 134,
            "end": 144,
            "decorators": [],
            "name": "SyntaxKind",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 148,
      "end": 171,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 157,
          "end": 168,
          "exported": {
            "type": "Identifier",
            "start": 157,
            "end": 168,
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 157,
            "end": 168,
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 216,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 51,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 45,
        "end": 50,
        "raw": "'./a'",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 24,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 24,
            "decorators": [],
            "name": "SyntaxKind",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 24,
            "decorators": [],
            "name": "SyntaxKind",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 26,
          "end": 37,
          "imported": {
            "type": "Identifier",
            "start": 26,
            "end": 37,
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 26,
            "end": 37,
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 53,
      "end": 77,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 53,
        "end": 76,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 53,
          "end": 63,
          "decorators": [],
          "name": "SyntaxKind",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 64,
          "end": 76,
          "decorators": [],
          "name": "ImportClause",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 78,
        "end": 94,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 78,
          "end": 89,
          "decorators": [],
          "name": "SymbolFlags",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 90,
          "end": 94,
          "decorators": [],
          "name": "Type",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 129,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 129,
            "decorators": [],
            "name": "kind",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 129,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 106,
                  "end": 129,
                  "left": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 116,
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 129,
                    "decorators": [],
                    "name": "ImportClause",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 153,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 153,
            "decorators": [],
            "name": "flags",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 153,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 142,
                "end": 153,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 153,
                  "decorators": [],
                  "name": "SymbolFlags",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 156,
      "end": 189,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 169,
        "decorators": [],
        "name": "TypeFlag",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 172,
        "end": 188,
        "typeArguments": null,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 172,
          "end": 188,
          "left": {
            "type": "Identifier",
            "start": 172,
            "end": 183,
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 184,
            "end": 188,
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 190,
      "end": 215,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 204,
          "end": 212,
          "exported": {
            "type": "Identifier",
            "start": 204,
            "end": 212,
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 204,
            "end": 212,
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 113,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 33,
        "raw": "'./a'",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 71,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 65,
        "end": 70,
        "raw": "'./b'",
        "value": "./b",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 49,
          "end": 57,
          "imported": {
            "type": "Identifier",
            "start": 49,
            "end": 57,
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 49,
            "end": 57,
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 93,
            "decorators": [],
            "name": "flags",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 93,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 93,
                  "decorators": [],
                  "name": "TypeFlag",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 96,
            "end": 112,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 96,
              "end": 107,
              "decorators": [],
              "name": "SymbolFlags",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 108,
              "end": 112,
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
