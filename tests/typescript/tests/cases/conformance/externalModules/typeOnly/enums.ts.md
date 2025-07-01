__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SyntaxKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportClause",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 32
            },
            "initializer": null,
            "computed": false,
            "start": 20,
            "end": 32
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ExportDeclaration",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 53
            },
            "initializer": null,
            "computed": false,
            "start": 36,
            "end": 53
          }
        ],
        "start": 16,
        "end": 55
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 55
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SymbolFlags",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 79
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 88
            },
            "initializer": {
              "type": "Literal",
              "value": "Type",
              "raw": "\"Type\"",
              "start": 91,
              "end": 97
            },
            "computed": false,
            "start": 84,
            "end": 97
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 106
            },
            "initializer": {
              "type": "Literal",
              "value": "Value",
              "raw": "\"Value\"",
              "start": 109,
              "end": 116
            },
            "computed": false,
            "start": 101,
            "end": 116
          }
        ],
        "start": 80,
        "end": 118
      },
      "const": true,
      "declare": false,
      "start": 57,
      "end": 118
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "SyntaxKind",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 144
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "SyntaxKind",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 144
          },
          "exportKind": "value",
          "start": 134,
          "end": 144
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 120,
      "end": 147
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 168
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 168
          },
          "exportKind": "value",
          "start": 157,
          "end": 168
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 148,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 172
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "SyntaxKind",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 24
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "SyntaxKind",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 24
          },
          "importKind": "value",
          "start": 14,
          "end": 24
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 37
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 37
          },
          "importKind": "value",
          "start": 26,
          "end": 37
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 45,
        "end": 50
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 51
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "SyntaxKind",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 63
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImportClause",
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 76
        },
        "optional": false,
        "computed": false,
        "start": 53,
        "end": 76
      },
      "directive": null,
      "start": 53,
      "end": 77
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "SymbolFlags",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 89
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Type",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 94
        },
        "optional": false,
        "computed": false,
        "start": 78,
        "end": 94
      },
      "directive": null,
      "start": 78,
      "end": 95
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "kind",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 116
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ImportClause",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 129
                  },
                  "start": 106,
                  "end": 129
                },
                "typeArguments": null,
                "start": 106,
                "end": 129
              },
              "start": 104,
              "end": 129
            },
            "start": 100,
            "end": 129
          },
          "init": null,
          "definite": false,
          "start": 100,
          "end": 129
        }
      ],
      "declare": false,
      "start": 96,
      "end": 130
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "flags",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SymbolFlags",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 153
                },
                "typeArguments": null,
                "start": 142,
                "end": 153
              },
              "start": 140,
              "end": 153
            },
            "start": 135,
            "end": 153
          },
          "init": null,
          "definite": false,
          "start": 135,
          "end": 153
        }
      ],
      "declare": false,
      "start": 131,
      "end": 154
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeFlag",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 169
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 183
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 188
          },
          "start": 172,
          "end": 188
        },
        "typeArguments": null,
        "start": 172,
        "end": 188
      },
      "declare": false,
      "start": 156,
      "end": 189
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 212
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 212
          },
          "exportKind": "value",
          "start": 204,
          "end": 212
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 190,
      "end": 215
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 216
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "SymbolFlags",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 28,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 57
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeFlag",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 57
          },
          "importKind": "value",
          "start": 49,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "'./b'",
        "start": 65,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 35,
      "end": 71
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "flags",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeFlag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 93
                },
                "typeArguments": null,
                "start": 85,
                "end": 93
              },
              "start": 83,
              "end": 93
            },
            "start": 78,
            "end": 93
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "SymbolFlags",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 107
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 112
            },
            "optional": false,
            "computed": false,
            "start": 96,
            "end": 112
          },
          "definite": false,
          "start": 78,
          "end": 112
        }
      ],
      "declare": false,
      "start": 72,
      "end": 113
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 113
}
```
