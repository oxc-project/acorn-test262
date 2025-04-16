__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 335,
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
      "type": "ExpressionStatement",
      "start": 124,
      "end": 128,
      "expression": {
        "type": "Identifier",
        "start": 124,
        "end": 127,
        "name": "cjs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "mjs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "type",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 140,
      "end": 172,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 147,
          "end": 156,
          "local": {
            "type": "Identifier",
            "start": 152,
            "end": 156,
            "name": "cjsi",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 162,
        "end": 171,
        "value": "inner/a",
        "raw": "\"inner/a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 173,
      "end": 205,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 180,
          "end": 189,
          "local": {
            "type": "Identifier",
            "start": 185,
            "end": 189,
            "name": "mjsi",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 195,
        "end": 204,
        "value": "inner/b",
        "raw": "\"inner/b\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 206,
      "end": 237,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 213,
          "end": 223,
          "local": {
            "type": "Identifier",
            "start": 218,
            "end": 223,
            "name": "typei",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 229,
        "end": 236,
        "value": "inner",
        "raw": "\"inner\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 238,
      "end": 272,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 245,
          "end": 252,
          "local": {
            "type": "Identifier",
            "start": 250,
            "end": 252,
            "name": "ts",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 258,
        "end": 271,
        "value": "inner/types",
        "raw": "\"inner/types\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 273,
      "end": 288,
      "expression": {
        "type": "MemberExpression",
        "start": 273,
        "end": 287,
        "object": {
          "type": "Identifier",
          "start": 273,
          "end": 277,
          "name": "cjsi",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 278,
          "end": 287,
          "name": "mjsSource",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 289,
      "end": 304,
      "expression": {
        "type": "MemberExpression",
        "start": 289,
        "end": 303,
        "object": {
          "type": "Identifier",
          "start": 289,
          "end": 293,
          "name": "mjsi",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 294,
          "end": 303,
          "name": "mjsSource",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 305,
      "end": 321,
      "expression": {
        "type": "MemberExpression",
        "start": 305,
        "end": 320,
        "object": {
          "type": "Identifier",
          "start": 305,
          "end": 310,
          "name": "typei",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 311,
          "end": 320,
          "name": "mjsSource",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 322,
      "end": 335,
      "expression": {
        "type": "MemberExpression",
        "start": 322,
        "end": 334,
        "object": {
          "type": "Identifier",
          "start": 322,
          "end": 324,
          "name": "ts",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 325,
          "end": 334,
          "name": "mjsSource",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
  "end": 251,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 50,
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
        "end": 49,
        "value": "inner/a",
        "raw": "\"inner/a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 82,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 58,
          "end": 66,
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 66,
            "name": "mjs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 72,
        "end": 81,
        "value": "inner/b",
        "raw": "\"inner/b\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 83,
      "end": 113,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 90,
          "end": 99,
          "local": {
            "type": "Identifier",
            "start": 95,
            "end": 99,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 105,
        "end": 112,
        "value": "inner",
        "raw": "\"inner\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 114,
      "end": 148,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 121,
          "end": 128,
          "local": {
            "type": "Identifier",
            "start": 126,
            "end": 128,
            "name": "ts",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 134,
        "end": 147,
        "value": "inner/types",
        "raw": "\"inner/types\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 149,
      "end": 164,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 158,
          "end": 161,
          "local": {
            "type": "Identifier",
            "start": 158,
            "end": 161,
            "name": "cjs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 158,
            "end": 161,
            "name": "cjs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 165,
      "end": 180,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 174,
          "end": 177,
          "local": {
            "type": "Identifier",
            "start": 174,
            "end": 177,
            "name": "mjs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 174,
            "end": 177,
            "name": "mjs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 181,
      "end": 197,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 190,
          "end": 194,
          "local": {
            "type": "Identifier",
            "start": 190,
            "end": 194,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 190,
            "end": 194,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 198,
      "end": 212,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 207,
          "end": 209,
          "local": {
            "type": "Identifier",
            "start": 207,
            "end": 209,
            "name": "ts",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 207,
            "end": 209,
            "name": "ts",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 213,
      "end": 251,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 220,
        "end": 251,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 226,
            "end": 250,
            "id": {
              "type": "Identifier",
              "start": 226,
              "end": 243,
              "name": "implicitCjsSource",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 246,
              "end": 250,
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
