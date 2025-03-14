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
