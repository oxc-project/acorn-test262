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
            "optional": false
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
            "optional": false
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
            "optional": false
          }
        }
      ]
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
        "optional": false
      }
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
        "optional": false
      }
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
        "optional": false
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 140,
      "end": 172,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 162,
        "end": 171,
        "raw": "\"inner/a\"",
        "value": "inner/a"
      },
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 173,
      "end": 205,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 195,
        "end": 204,
        "raw": "\"inner/b\"",
        "value": "inner/b"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 180,
          "end": 189,
          "local": {
            "type": "Identifier",
            "start": 185,
            "end": 189,
            "decorators": [],
            "name": "mjsi",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 206,
      "end": 237,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 229,
        "end": 236,
        "raw": "\"inner\"",
        "value": "inner"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 213,
          "end": 223,
          "local": {
            "type": "Identifier",
            "start": 218,
            "end": 223,
            "decorators": [],
            "name": "typei",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 238,
      "end": 272,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 258,
        "end": 271,
        "raw": "\"inner/types\"",
        "value": "inner/types"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 245,
          "end": 252,
          "local": {
            "type": "Identifier",
            "start": 250,
            "end": 252,
            "decorators": [],
            "name": "ts",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 273,
      "end": 288,
      "expression": {
        "type": "MemberExpression",
        "start": 273,
        "end": 287,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 273,
          "end": 277,
          "decorators": [],
          "name": "cjsi",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 278,
          "end": 287,
          "decorators": [],
          "name": "mjsSource",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 289,
      "end": 304,
      "expression": {
        "type": "MemberExpression",
        "start": 289,
        "end": 303,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 289,
          "end": 293,
          "decorators": [],
          "name": "mjsi",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 294,
          "end": 303,
          "decorators": [],
          "name": "mjsSource",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 305,
      "end": 321,
      "expression": {
        "type": "MemberExpression",
        "start": 305,
        "end": 320,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 305,
          "end": 310,
          "decorators": [],
          "name": "typei",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 311,
          "end": 320,
          "decorators": [],
          "name": "mjsSource",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 322,
      "end": 335,
      "expression": {
        "type": "MemberExpression",
        "start": 322,
        "end": 334,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 322,
          "end": 324,
          "decorators": [],
          "name": "ts",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 325,
          "end": 334,
          "decorators": [],
          "name": "mjsSource",
          "optional": false
        }
      }
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 49,
        "raw": "\"inner/a\"",
        "value": "inner/a"
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 82,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 72,
        "end": 81,
        "raw": "\"inner/b\"",
        "value": "inner/b"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 58,
          "end": 66,
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 66,
            "decorators": [],
            "name": "mjs",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 83,
      "end": 113,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 105,
        "end": 112,
        "raw": "\"inner\"",
        "value": "inner"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 90,
          "end": 99,
          "local": {
            "type": "Identifier",
            "start": 95,
            "end": 99,
            "decorators": [],
            "name": "type",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 114,
      "end": 148,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 134,
        "end": 147,
        "raw": "\"inner/types\"",
        "value": "inner/types"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 121,
          "end": 128,
          "local": {
            "type": "Identifier",
            "start": 126,
            "end": 128,
            "decorators": [],
            "name": "ts",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 149,
      "end": 164,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 158,
          "end": 161,
          "exported": {
            "type": "Identifier",
            "start": 158,
            "end": 161,
            "decorators": [],
            "name": "cjs",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 158,
            "end": 161,
            "decorators": [],
            "name": "cjs",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 165,
      "end": 180,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 174,
          "end": 177,
          "exported": {
            "type": "Identifier",
            "start": 174,
            "end": 177,
            "decorators": [],
            "name": "mjs",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 174,
            "end": 177,
            "decorators": [],
            "name": "mjs",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 181,
      "end": 197,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 190,
          "end": 194,
          "exported": {
            "type": "Identifier",
            "start": 190,
            "end": 194,
            "decorators": [],
            "name": "type",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 190,
            "end": 194,
            "decorators": [],
            "name": "type",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 198,
      "end": 212,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 207,
          "end": 209,
          "exported": {
            "type": "Identifier",
            "start": 207,
            "end": 209,
            "decorators": [],
            "name": "ts",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 207,
            "end": 209,
            "decorators": [],
            "name": "ts",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 213,
      "end": 251,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 220,
        "end": 251,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 226,
            "end": 250,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 226,
              "end": 243,
              "decorators": [],
              "name": "implicitCjsSource",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 246,
              "end": 250,
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
