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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 53,
        "raw": "\"package/cjs\"",
        "value": "package/cjs"
      },
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
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 55,
      "end": 90,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 89,
        "raw": "\"package/mjs\"",
        "value": "package/mjs"
      },
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
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 91,
      "end": 123,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 113,
        "end": 122,
        "raw": "\"package\"",
        "value": "package"
      },
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
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 145,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 131,
        "end": 145,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 137,
            "end": 144,
            "definite": false,
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
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 146,
      "end": 167,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 153,
        "end": 167,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 166,
            "definite": false,
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
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 168,
      "end": 190,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 175,
        "end": 190,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 181,
            "end": 189,
            "definite": false,
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
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 191,
      "end": 225,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 213,
        "end": 224,
        "raw": "\"inner/cjs\"",
        "value": "inner/cjs"
      },
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
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 226,
      "end": 260,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 248,
        "end": 259,
        "raw": "\"inner/mjs\"",
        "value": "inner/mjs"
      },
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
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 261,
      "end": 292,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 284,
        "end": 291,
        "raw": "\"inner\"",
        "value": "inner"
      },
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
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 293,
      "end": 315,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 300,
        "end": 315,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 306,
            "end": 314,
            "definite": false,
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
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 316,
      "end": 338,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 323,
        "end": 338,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 329,
            "end": 337,
            "definite": false,
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
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 339,
      "end": 362,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 346,
        "end": 362,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 352,
            "end": 361,
            "definite": false,
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
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
  "start": 19,
  "end": 162,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 52,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 51,
        "raw": "\"inner/cjs\"",
        "value": "inner/cjs"
      },
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
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 53,
      "end": 86,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 74,
        "end": 85,
        "raw": "\"inner/mjs\"",
        "value": "inner/mjs"
      },
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
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 87,
      "end": 117,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 109,
        "end": 116,
        "raw": "\"inner\"",
        "value": "inner"
      },
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
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 122,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 118,
        "end": 121,
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 127,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 123,
        "end": 126,
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 133,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 128,
        "end": 132,
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 134,
      "end": 162,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 141,
        "end": 162,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 147,
            "end": 161,
            "definite": false,
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
              "raw": "true",
              "value": true
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
