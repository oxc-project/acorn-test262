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
            "name": "cjs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "mjs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 137,
            "end": 144,
            "id": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 141,
              "end": 144,
              "name": "cjs",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 146,
      "end": 167,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 153,
        "end": 167,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 166,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "name": "mjs",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 168,
      "end": 190,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 175,
        "end": 190,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 181,
            "end": 189,
            "id": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 185,
              "end": 189,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
            "name": "cjsi",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "mjsi",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "typei",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 306,
            "end": 314,
            "id": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 310,
              "end": 314,
              "name": "cjsi",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 316,
      "end": 338,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 323,
        "end": 338,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 329,
            "end": 337,
            "id": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 333,
              "end": 337,
              "name": "mjsi",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 339,
      "end": 362,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 346,
        "end": 362,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 352,
            "end": 361,
            "id": {
              "type": "Identifier",
              "start": 352,
              "end": 353,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 356,
              "end": 361,
              "name": "typei",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
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
            "name": "cjs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "mjs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "name": "cjs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "mjs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "type",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 147,
            "end": 161,
            "id": {
              "type": "Identifier",
              "start": 147,
              "end": 154,
              "name": "cjsMain",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "const",
        "declare": false
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
