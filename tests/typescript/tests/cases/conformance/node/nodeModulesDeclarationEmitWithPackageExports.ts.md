__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 362,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 54,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 26,
          "end": 34,
          "local": {
            "type": "Identifier",
            "start": 31,
            "end": 34,
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 53,
        "value": "package/cjs",
        "raw": "\"package/cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 55,
      "end": 90,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 62,
          "end": 70,
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 70,
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 89,
        "value": "package/mjs",
        "raw": "\"package/mjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 91,
      "end": 123,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 98,
          "end": 107,
          "local": {
            "type": "Identifier",
            "start": 103,
            "end": 107,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 113,
        "end": 122,
        "value": "package",
        "raw": "\"package\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 145,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 131,
        "end": 145,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 137,
            "end": 144,
            "id": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 141,
              "end": 144,
              "decorators": [],
              "name": "cjs",
              "optional": false,
              "typeAnnotation": null
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
      "start": 146,
      "end": 167,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 153,
        "end": 167,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 166,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "decorators": [],
              "name": "mjs",
              "optional": false,
              "typeAnnotation": null
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
      "start": 168,
      "end": 190,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 175,
        "end": 190,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 181,
            "end": 189,
            "id": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 185,
              "end": 189,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
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
      "type": "ImportDeclaration",
      "start": 191,
      "end": 225,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 198,
          "end": 207,
          "local": {
            "type": "Identifier",
            "start": 203,
            "end": 207,
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 213,
        "end": 224,
        "value": "inner/cjs",
        "raw": "\"inner/cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 226,
      "end": 260,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 233,
          "end": 242,
          "local": {
            "type": "Identifier",
            "start": 238,
            "end": 242,
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 248,
        "end": 259,
        "value": "inner/mjs",
        "raw": "\"inner/mjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 261,
      "end": 292,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 268,
          "end": 278,
          "local": {
            "type": "Identifier",
            "start": 273,
            "end": 278,
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 284,
        "end": 291,
        "value": "inner",
        "raw": "\"inner\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 293,
      "end": 315,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 300,
        "end": 315,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 306,
            "end": 314,
            "id": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 310,
              "end": 314,
              "decorators": [],
              "name": "cjsi",
              "optional": false,
              "typeAnnotation": null
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
      "start": 316,
      "end": 338,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 323,
        "end": 338,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 329,
            "end": 337,
            "id": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 333,
              "end": 337,
              "decorators": [],
              "name": "mjsi",
              "optional": false,
              "typeAnnotation": null
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
      "start": 339,
      "end": 362,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 346,
        "end": 362,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 352,
            "end": 361,
            "id": {
              "type": "Identifier",
              "start": 352,
              "end": 353,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 356,
              "end": 361,
              "decorators": [],
              "name": "typei",
              "optional": false,
              "typeAnnotation": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 362,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 54,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 26,
          "end": 34,
          "local": {
            "type": "Identifier",
            "start": 31,
            "end": 34,
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 53,
        "value": "package/cjs",
        "raw": "\"package/cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 55,
      "end": 90,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 62,
          "end": 70,
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 70,
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 89,
        "value": "package/mjs",
        "raw": "\"package/mjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 91,
      "end": 123,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 98,
          "end": 107,
          "local": {
            "type": "Identifier",
            "start": 103,
            "end": 107,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 113,
        "end": 122,
        "value": "package",
        "raw": "\"package\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 145,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 131,
        "end": 145,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 137,
            "end": 144,
            "id": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 141,
              "end": 144,
              "decorators": [],
              "name": "cjs",
              "optional": false,
              "typeAnnotation": null
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
      "start": 146,
      "end": 167,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 153,
        "end": 167,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 166,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "decorators": [],
              "name": "mjs",
              "optional": false,
              "typeAnnotation": null
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
      "start": 168,
      "end": 190,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 175,
        "end": 190,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 181,
            "end": 189,
            "id": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 185,
              "end": 189,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
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
      "type": "ImportDeclaration",
      "start": 191,
      "end": 225,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 198,
          "end": 207,
          "local": {
            "type": "Identifier",
            "start": 203,
            "end": 207,
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 213,
        "end": 224,
        "value": "inner/cjs",
        "raw": "\"inner/cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 226,
      "end": 260,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 233,
          "end": 242,
          "local": {
            "type": "Identifier",
            "start": 238,
            "end": 242,
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 248,
        "end": 259,
        "value": "inner/mjs",
        "raw": "\"inner/mjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 261,
      "end": 292,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 268,
          "end": 278,
          "local": {
            "type": "Identifier",
            "start": 273,
            "end": 278,
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 284,
        "end": 291,
        "value": "inner",
        "raw": "\"inner\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 293,
      "end": 315,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 300,
        "end": 315,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 306,
            "end": 314,
            "id": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 310,
              "end": 314,
              "decorators": [],
              "name": "cjsi",
              "optional": false,
              "typeAnnotation": null
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
      "start": 316,
      "end": 338,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 323,
        "end": 338,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 329,
            "end": 337,
            "id": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 333,
              "end": 337,
              "decorators": [],
              "name": "mjsi",
              "optional": false,
              "typeAnnotation": null
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
      "start": 339,
      "end": 362,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 346,
        "end": 362,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 352,
            "end": 361,
            "id": {
              "type": "Identifier",
              "start": 352,
              "end": 353,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 356,
              "end": 361,
              "decorators": [],
              "name": "typei",
              "optional": false,
              "typeAnnotation": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 362,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 54,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 26,
          "end": 34,
          "local": {
            "type": "Identifier",
            "start": 31,
            "end": 34,
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 53,
        "value": "package/cjs",
        "raw": "\"package/cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 55,
      "end": 90,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 62,
          "end": 70,
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 70,
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 89,
        "value": "package/mjs",
        "raw": "\"package/mjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 91,
      "end": 123,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 98,
          "end": 107,
          "local": {
            "type": "Identifier",
            "start": 103,
            "end": 107,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 113,
        "end": 122,
        "value": "package",
        "raw": "\"package\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 145,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 131,
        "end": 145,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 137,
            "end": 144,
            "id": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 141,
              "end": 144,
              "decorators": [],
              "name": "cjs",
              "optional": false,
              "typeAnnotation": null
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
      "start": 146,
      "end": 167,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 153,
        "end": 167,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 166,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "decorators": [],
              "name": "mjs",
              "optional": false,
              "typeAnnotation": null
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
      "start": 168,
      "end": 190,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 175,
        "end": 190,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 181,
            "end": 189,
            "id": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 185,
              "end": 189,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
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
      "type": "ImportDeclaration",
      "start": 191,
      "end": 225,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 198,
          "end": 207,
          "local": {
            "type": "Identifier",
            "start": 203,
            "end": 207,
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 213,
        "end": 224,
        "value": "inner/cjs",
        "raw": "\"inner/cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 226,
      "end": 260,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 233,
          "end": 242,
          "local": {
            "type": "Identifier",
            "start": 238,
            "end": 242,
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 248,
        "end": 259,
        "value": "inner/mjs",
        "raw": "\"inner/mjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 261,
      "end": 292,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 268,
          "end": 278,
          "local": {
            "type": "Identifier",
            "start": 273,
            "end": 278,
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 284,
        "end": 291,
        "value": "inner",
        "raw": "\"inner\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 293,
      "end": 315,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 300,
        "end": 315,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 306,
            "end": 314,
            "id": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 310,
              "end": 314,
              "decorators": [],
              "name": "cjsi",
              "optional": false,
              "typeAnnotation": null
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
      "start": 316,
      "end": 338,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 323,
        "end": 338,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 329,
            "end": 337,
            "id": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 333,
              "end": 337,
              "decorators": [],
              "name": "mjsi",
              "optional": false,
              "typeAnnotation": null
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
      "start": 339,
      "end": 362,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 346,
        "end": 362,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 352,
            "end": 361,
            "id": {
              "type": "Identifier",
              "start": 352,
              "end": 353,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 356,
              "end": 361,
              "decorators": [],
              "name": "typei",
              "optional": false,
              "typeAnnotation": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 162,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 52,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 26,
          "end": 34,
          "local": {
            "type": "Identifier",
            "start": 31,
            "end": 34,
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 51,
        "value": "inner/cjs",
        "raw": "\"inner/cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 53,
      "end": 86,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 60,
          "end": 68,
          "local": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 74,
        "end": 85,
        "value": "inner/mjs",
        "raw": "\"inner/mjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 87,
      "end": 117,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 94,
          "end": 103,
          "local": {
            "type": "Identifier",
            "start": 99,
            "end": 103,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 109,
        "end": 116,
        "value": "inner",
        "raw": "\"inner\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 122,
      "expression": {
        "type": "Identifier",
        "start": 118,
        "end": 121,
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 127,
      "expression": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 133,
      "expression": {
        "type": "Identifier",
        "start": 128,
        "end": 132,
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 134,
      "end": 162,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 141,
        "end": 162,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 147,
            "end": 161,
            "id": {
              "type": "Identifier",
              "start": 147,
              "end": 154,
              "decorators": [],
              "name": "cjsMain",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 157,
              "end": 161,
              "value": true,
              "raw": "true"
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 158,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 52,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 26,
          "end": 34,
          "local": {
            "type": "Identifier",
            "start": 31,
            "end": 34,
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 51,
        "value": "inner/cjs",
        "raw": "\"inner/cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 53,
      "end": 86,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 60,
          "end": 68,
          "local": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 74,
        "end": 85,
        "value": "inner/mjs",
        "raw": "\"inner/mjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 87,
      "end": 117,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 94,
          "end": 103,
          "local": {
            "type": "Identifier",
            "start": 99,
            "end": 103,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 109,
        "end": 116,
        "value": "inner",
        "raw": "\"inner\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 122,
      "expression": {
        "type": "Identifier",
        "start": 118,
        "end": 121,
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 127,
      "expression": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 133,
      "expression": {
        "type": "Identifier",
        "start": 128,
        "end": 132,
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 134,
      "end": 158,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 141,
        "end": 158,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 147,
            "end": 157,
            "id": {
              "type": "Identifier",
              "start": 147,
              "end": 150,
              "decorators": [],
              "name": "esm",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 153,
              "end": 157,
              "value": true,
              "raw": "true"
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 165,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 52,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 26,
          "end": 34,
          "local": {
            "type": "Identifier",
            "start": 31,
            "end": 34,
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 51,
        "value": "inner/cjs",
        "raw": "\"inner/cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 53,
      "end": 86,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 60,
          "end": 68,
          "local": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 74,
        "end": 85,
        "value": "inner/mjs",
        "raw": "\"inner/mjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 87,
      "end": 117,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 94,
          "end": 103,
          "local": {
            "type": "Identifier",
            "start": 99,
            "end": 103,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 109,
        "end": 116,
        "value": "inner",
        "raw": "\"inner\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 122,
      "expression": {
        "type": "Identifier",
        "start": 118,
        "end": 121,
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 127,
      "expression": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 133,
      "expression": {
        "type": "Identifier",
        "start": 128,
        "end": 132,
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 134,
      "end": 165,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 141,
        "end": 165,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 147,
            "end": 164,
            "id": {
              "type": "Identifier",
              "start": 147,
              "end": 157,
              "decorators": [],
              "name": "cjsNonmain",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 160,
              "end": 164,
              "value": true,
              "raw": "true"
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
