__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/cjs",
        "raw": "\"package/cjs\"",
        "start": 40,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "start": 62,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/mjs",
        "raw": "\"package/mjs\"",
        "start": 76,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 107
          },
          "start": 98,
          "end": 107
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package",
        "raw": "\"package\"",
        "start": 113,
        "end": 122
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 123
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 144
            },
            "definite": false,
            "start": 137,
            "end": 144
          }
        ],
        "declare": false,
        "start": 131,
        "end": 145
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 124,
      "end": 145
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
            },
            "definite": false,
            "start": 159,
            "end": 166
          }
        ],
        "declare": false,
        "start": 153,
        "end": 167
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 167
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 189
            },
            "definite": false,
            "start": 181,
            "end": 189
          }
        ],
        "declare": false,
        "start": 175,
        "end": 190
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 168,
      "end": 190
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 207
          },
          "start": 198,
          "end": 207
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 213,
        "end": 224
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 191,
      "end": 225
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 242
          },
          "start": 233,
          "end": 242
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 248,
        "end": 259
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 226,
      "end": 260
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 278
          },
          "start": 268,
          "end": 278
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 284,
        "end": 291
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 261,
      "end": 292
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 314
            },
            "definite": false,
            "start": 306,
            "end": 314
          }
        ],
        "declare": false,
        "start": 300,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 293,
      "end": 315
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 337
            },
            "definite": false,
            "start": 329,
            "end": 337
          }
        ],
        "declare": false,
        "start": 323,
        "end": 338
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 316,
      "end": 338
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 353
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "typei",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 361
            },
            "definite": false,
            "start": 352,
            "end": 361
          }
        ],
        "declare": false,
        "start": 346,
        "end": 362
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 339,
      "end": 362
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 362
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/cjs",
        "raw": "\"package/cjs\"",
        "start": 40,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "start": 62,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/mjs",
        "raw": "\"package/mjs\"",
        "start": 76,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 107
          },
          "start": 98,
          "end": 107
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package",
        "raw": "\"package\"",
        "start": 113,
        "end": 122
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 123
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 144
            },
            "definite": false,
            "start": 137,
            "end": 144
          }
        ],
        "declare": false,
        "start": 131,
        "end": 145
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 124,
      "end": 145
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
            },
            "definite": false,
            "start": 159,
            "end": 166
          }
        ],
        "declare": false,
        "start": 153,
        "end": 167
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 167
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 189
            },
            "definite": false,
            "start": 181,
            "end": 189
          }
        ],
        "declare": false,
        "start": 175,
        "end": 190
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 168,
      "end": 190
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 207
          },
          "start": 198,
          "end": 207
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 213,
        "end": 224
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 191,
      "end": 225
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 242
          },
          "start": 233,
          "end": 242
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 248,
        "end": 259
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 226,
      "end": 260
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 278
          },
          "start": 268,
          "end": 278
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 284,
        "end": 291
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 261,
      "end": 292
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 314
            },
            "definite": false,
            "start": 306,
            "end": 314
          }
        ],
        "declare": false,
        "start": 300,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 293,
      "end": 315
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 337
            },
            "definite": false,
            "start": 329,
            "end": 337
          }
        ],
        "declare": false,
        "start": 323,
        "end": 338
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 316,
      "end": 338
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 353
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "typei",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 361
            },
            "definite": false,
            "start": 352,
            "end": 361
          }
        ],
        "declare": false,
        "start": 346,
        "end": 362
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 339,
      "end": 362
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 362
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/cjs",
        "raw": "\"package/cjs\"",
        "start": 40,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "start": 62,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/mjs",
        "raw": "\"package/mjs\"",
        "start": 76,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 107
          },
          "start": 98,
          "end": 107
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package",
        "raw": "\"package\"",
        "start": 113,
        "end": 122
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 123
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 144
            },
            "definite": false,
            "start": 137,
            "end": 144
          }
        ],
        "declare": false,
        "start": 131,
        "end": 145
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 124,
      "end": 145
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
            },
            "definite": false,
            "start": 159,
            "end": 166
          }
        ],
        "declare": false,
        "start": 153,
        "end": 167
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 167
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 189
            },
            "definite": false,
            "start": 181,
            "end": 189
          }
        ],
        "declare": false,
        "start": 175,
        "end": 190
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 168,
      "end": 190
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 207
          },
          "start": 198,
          "end": 207
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 213,
        "end": 224
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 191,
      "end": 225
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 242
          },
          "start": 233,
          "end": 242
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 248,
        "end": 259
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 226,
      "end": 260
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 278
          },
          "start": 268,
          "end": 278
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 284,
        "end": 291
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 261,
      "end": 292
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 314
            },
            "definite": false,
            "start": 306,
            "end": 314
          }
        ],
        "declare": false,
        "start": 300,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 293,
      "end": 315
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 337
            },
            "definite": false,
            "start": 329,
            "end": 337
          }
        ],
        "declare": false,
        "start": 323,
        "end": 338
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 316,
      "end": 338
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 353
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "typei",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 361
            },
            "definite": false,
            "start": 352,
            "end": 361
          }
        ],
        "declare": false,
        "start": 346,
        "end": 362
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 339,
      "end": 362
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 362
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 40,
        "end": 51
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 52
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
          },
          "start": 60,
          "end": 68
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 74,
        "end": 85
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 53,
      "end": 86
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 103
          },
          "start": 94,
          "end": 103
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 109,
        "end": 116
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 87,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 121
      },
      "directive": null,
      "start": 118,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 126
      },
      "directive": null,
      "start": 123,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 132
      },
      "directive": null,
      "start": 128,
      "end": 133
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjsMain",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 154
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 157,
              "end": 161
            },
            "definite": false,
            "start": 147,
            "end": 161
          }
        ],
        "declare": false,
        "start": 141,
        "end": 162
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 134,
      "end": 162
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 162
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 40,
        "end": 51
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 52
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
          },
          "start": 60,
          "end": 68
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 74,
        "end": 85
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 53,
      "end": 86
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 103
          },
          "start": 94,
          "end": 103
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 109,
        "end": 116
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 87,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 121
      },
      "directive": null,
      "start": 118,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 126
      },
      "directive": null,
      "start": 123,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 132
      },
      "directive": null,
      "start": 128,
      "end": 133
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "esm",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 150
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 153,
              "end": 157
            },
            "definite": false,
            "start": 147,
            "end": 157
          }
        ],
        "declare": false,
        "start": 141,
        "end": 158
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 134,
      "end": 158
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 158
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 40,
        "end": 51
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 52
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
          },
          "start": 60,
          "end": 68
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 74,
        "end": 85
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 53,
      "end": 86
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 103
          },
          "start": 94,
          "end": 103
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 109,
        "end": 116
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 87,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 121
      },
      "directive": null,
      "start": 118,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 126
      },
      "directive": null,
      "start": 123,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 132
      },
      "directive": null,
      "start": 128,
      "end": 133
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjsNonmain",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 157
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 160,
              "end": 164
            },
            "definite": false,
            "start": 147,
            "end": 164
          }
        ],
        "declare": false,
        "start": 141,
        "end": 165
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 134,
      "end": 165
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 165
}
```
