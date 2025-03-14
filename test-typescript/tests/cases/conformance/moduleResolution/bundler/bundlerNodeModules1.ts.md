/node_modules/dual/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 25,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 24,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 24,
              "decorators": [],
              "name": "esm",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16,
                "end": 24,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 18,
                  "end": 24
                }
              }
            },
            "init": null
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
  "sourceType": "module"
}
```
/main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 31,
        "raw": "\"dual\"",
        "value": "dual"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "esm",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "esm",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "cjs",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "cjs",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
