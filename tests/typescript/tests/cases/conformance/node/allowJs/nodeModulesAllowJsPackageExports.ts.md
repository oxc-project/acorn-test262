__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 260,
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
      "type": "ExpressionStatement",
      "start": 124,
      "end": 128,
      "expression": {
        "type": "Identifier",
        "start": 124,
        "end": 127,
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 133,
      "expression": {
        "type": "Identifier",
        "start": 129,
        "end": 132,
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 139,
      "expression": {
        "type": "Identifier",
        "start": 134,
        "end": 138,
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 140,
      "end": 174,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 147,
          "end": 156,
          "local": {
            "type": "Identifier",
            "start": 152,
            "end": 156,
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 162,
        "end": 173,
        "value": "inner/cjs",
        "raw": "\"inner/cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 175,
      "end": 209,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 182,
          "end": 191,
          "local": {
            "type": "Identifier",
            "start": 187,
            "end": 191,
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 197,
        "end": 208,
        "value": "inner/mjs",
        "raw": "\"inner/mjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 210,
      "end": 241,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 217,
          "end": 227,
          "local": {
            "type": "Identifier",
            "start": 222,
            "end": 227,
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 233,
        "end": 240,
        "value": "inner",
        "raw": "\"inner\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 247,
      "expression": {
        "type": "Identifier",
        "start": 242,
        "end": 246,
        "decorators": [],
        "name": "cjsi",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 253,
      "expression": {
        "type": "Identifier",
        "start": 248,
        "end": 252,
        "decorators": [],
        "name": "mjsi",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 254,
      "end": 260,
      "expression": {
        "type": "Identifier",
        "start": 254,
        "end": 259,
        "decorators": [],
        "name": "typei",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
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
  "end": 260,
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
      "type": "ExpressionStatement",
      "start": 124,
      "end": 128,
      "expression": {
        "type": "Identifier",
        "start": 124,
        "end": 127,
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 133,
      "expression": {
        "type": "Identifier",
        "start": 129,
        "end": 132,
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 139,
      "expression": {
        "type": "Identifier",
        "start": 134,
        "end": 138,
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 140,
      "end": 174,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 147,
          "end": 156,
          "local": {
            "type": "Identifier",
            "start": 152,
            "end": 156,
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 162,
        "end": 173,
        "value": "inner/cjs",
        "raw": "\"inner/cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 175,
      "end": 209,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 182,
          "end": 191,
          "local": {
            "type": "Identifier",
            "start": 187,
            "end": 191,
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 197,
        "end": 208,
        "value": "inner/mjs",
        "raw": "\"inner/mjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 210,
      "end": 241,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 217,
          "end": 227,
          "local": {
            "type": "Identifier",
            "start": 222,
            "end": 227,
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 233,
        "end": 240,
        "value": "inner",
        "raw": "\"inner\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 247,
      "expression": {
        "type": "Identifier",
        "start": 242,
        "end": 246,
        "decorators": [],
        "name": "cjsi",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 253,
      "expression": {
        "type": "Identifier",
        "start": 248,
        "end": 252,
        "decorators": [],
        "name": "mjsi",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 254,
      "end": 260,
      "expression": {
        "type": "Identifier",
        "start": 254,
        "end": 259,
        "decorators": [],
        "name": "typei",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
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
  "end": 260,
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
      "type": "ExpressionStatement",
      "start": 124,
      "end": 128,
      "expression": {
        "type": "Identifier",
        "start": 124,
        "end": 127,
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 133,
      "expression": {
        "type": "Identifier",
        "start": 129,
        "end": 132,
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 139,
      "expression": {
        "type": "Identifier",
        "start": 134,
        "end": 138,
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 140,
      "end": 174,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 147,
          "end": 156,
          "local": {
            "type": "Identifier",
            "start": 152,
            "end": 156,
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 162,
        "end": 173,
        "value": "inner/cjs",
        "raw": "\"inner/cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 175,
      "end": 209,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 182,
          "end": 191,
          "local": {
            "type": "Identifier",
            "start": 187,
            "end": 191,
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 197,
        "end": 208,
        "value": "inner/mjs",
        "raw": "\"inner/mjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 210,
      "end": 241,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 217,
          "end": 227,
          "local": {
            "type": "Identifier",
            "start": 222,
            "end": 227,
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 233,
        "end": 240,
        "value": "inner",
        "raw": "\"inner\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 247,
      "expression": {
        "type": "Identifier",
        "start": 242,
        "end": 246,
        "decorators": [],
        "name": "cjsi",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 253,
      "expression": {
        "type": "Identifier",
        "start": 248,
        "end": 252,
        "decorators": [],
        "name": "mjsi",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 254,
      "end": 260,
      "expression": {
        "type": "Identifier",
        "start": 254,
        "end": 259,
        "decorators": [],
        "name": "typei",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
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
  "end": 166,
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
      "type": "ExportNamedDeclaration",
      "start": 118,
      "end": 133,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 127,
          "end": 130,
          "local": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 134,
      "end": 149,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 143,
          "end": 146,
          "local": {
            "type": "Identifier",
            "start": 143,
            "end": 146,
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 143,
            "end": 146,
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 150,
      "end": 166,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 159,
          "end": 163,
          "local": {
            "type": "Identifier",
            "start": 159,
            "end": 163,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 159,
            "end": 163,
            "decorators": [],
            "name": "type",
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
  "start": 19,
  "end": 166,
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
      "type": "ExportNamedDeclaration",
      "start": 118,
      "end": 133,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 127,
          "end": 130,
          "local": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 134,
      "end": 149,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 143,
          "end": 146,
          "local": {
            "type": "Identifier",
            "start": 143,
            "end": 146,
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 143,
            "end": 146,
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 150,
      "end": 166,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 159,
          "end": 163,
          "local": {
            "type": "Identifier",
            "start": 159,
            "end": 163,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 159,
            "end": 163,
            "decorators": [],
            "name": "type",
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
  "start": 19,
  "end": 166,
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
      "type": "ExportNamedDeclaration",
      "start": 118,
      "end": 133,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 127,
          "end": 130,
          "local": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 134,
      "end": 149,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 143,
          "end": 146,
          "local": {
            "type": "Identifier",
            "start": 143,
            "end": 146,
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 143,
            "end": 146,
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 150,
      "end": 166,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 159,
          "end": 163,
          "local": {
            "type": "Identifier",
            "start": 159,
            "end": 163,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 159,
            "end": 163,
            "decorators": [],
            "name": "type",
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
