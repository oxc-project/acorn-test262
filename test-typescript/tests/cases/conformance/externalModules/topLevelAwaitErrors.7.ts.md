__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 40,
  "end": 74,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 40,
      "end": 73,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 72,
        "raw": "\"./other\"",
        "value": "./other"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 47,
          "end": 57,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 55,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 25,
            "decorators": [],
            "name": "_await",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 25,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 22,
                "end": 25
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 54,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 36,
          "end": 51,
          "exported": {
            "type": "Identifier",
            "start": 46,
            "end": 51,
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 36,
            "end": 42,
            "decorators": [],
            "name": "_await",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
