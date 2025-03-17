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
