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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "SyntaxKind",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 16,
        "end": 55,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 32,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 32,
              "decorators": [],
              "name": "ImportClause",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 36,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 53,
              "decorators": [],
              "name": "ExportDeclaration",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 57,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 79,
        "decorators": [],
        "name": "SymbolFlags",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 80,
        "end": 118,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 84,
            "end": 97,
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
              "value": "Type",
              "raw": "\"Type\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 101,
            "end": 116,
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
              "value": "Value",
              "raw": "\"Value\""
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 120,
      "end": 147,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 134,
          "end": 144,
          "local": {
            "type": "Identifier",
            "start": 134,
            "end": 144,
            "decorators": [],
            "name": "SyntaxKind",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 134,
            "end": 144,
            "decorators": [],
            "name": "SyntaxKind",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 148,
      "end": 171,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 157,
          "end": 168,
          "local": {
            "type": "Identifier",
            "start": 157,
            "end": 168,
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 157,
            "end": 168,
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
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
  "end": 216,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 51,
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
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 24,
            "decorators": [],
            "name": "SyntaxKind",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
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
          "local": {
            "type": "Identifier",
            "start": 26,
            "end": 37,
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 45,
        "end": 50,
        "value": "./a",
        "raw": "'./a'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ExpressionStatement",
      "start": 53,
      "end": 77,
      "expression": {
        "type": "MemberExpression",
        "start": 53,
        "end": 76,
        "object": {
          "type": "Identifier",
          "start": 53,
          "end": 63,
          "decorators": [],
          "name": "SyntaxKind",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 64,
          "end": 76,
          "decorators": [],
          "name": "ImportClause",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 95,
      "expression": {
        "type": "MemberExpression",
        "start": 78,
        "end": 94,
        "object": {
          "type": "Identifier",
          "start": 78,
          "end": 89,
          "decorators": [],
          "name": "SymbolFlags",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 90,
          "end": 94,
          "decorators": [],
          "name": "Type",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 130,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 129,
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
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 154,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 153,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 153,
                  "decorators": [],
                  "name": "SymbolFlags",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 156,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 169,
        "decorators": [],
        "name": "TypeFlag",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 172,
        "end": 188,
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
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 190,
      "end": 215,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 204,
          "end": 212,
          "local": {
            "type": "Identifier",
            "start": 204,
            "end": 212,
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 204,
            "end": 212,
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
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
  "end": 113,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 33,
        "value": "./a",
        "raw": "'./a'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 71,
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
          "local": {
            "type": "Identifier",
            "start": 49,
            "end": 57,
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 65,
        "end": 70,
        "value": "./b",
        "raw": "'./b'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 113,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 112,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 93,
                  "decorators": [],
                  "name": "TypeFlag",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 96,
            "end": 112,
            "object": {
              "type": "Identifier",
              "start": 96,
              "end": 107,
              "decorators": [],
              "name": "SymbolFlags",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 108,
              "end": 112,
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
