__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 24,
            "name": "cjs",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 24,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 19,
                "end": 24,
                "literal": {
                  "type": "Literal",
                  "start": 19,
                  "end": 24,
                  "value": "cjs",
                  "raw": "\"cjs\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSExportAssignment",
      "start": 26,
      "end": 39,
      "expression": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "name": "cjs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "esm",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "esm",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "value": "dep",
        "raw": "\"dep\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 27,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "name": "cjs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 40,
        "end": 54,
        "expression": {
          "type": "Literal",
          "start": 48,
          "end": 53,
          "value": "dep",
          "raw": "\"dep\""
        }
      },
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
