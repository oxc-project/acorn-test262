__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 46,
  "end": 79,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 46,
      "end": 78,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 55,
          "end": 60,
          "imported": {
            "type": "Identifier",
            "start": 55,
            "end": 60,
            "name": "await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 55,
            "end": 60,
            "name": "await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 77,
        "value": "./other",
        "raw": "\"./other\""
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 25,
            "name": "_await",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 25,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 22,
                "end": 25
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
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 54,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 36,
          "end": 51,
          "local": {
            "type": "Identifier",
            "start": 36,
            "end": 42,
            "name": "_await",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 46,
            "end": 51,
            "name": "await",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
