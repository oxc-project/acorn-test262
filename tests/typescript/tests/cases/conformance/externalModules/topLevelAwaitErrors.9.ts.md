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
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 55,
            "end": 60,
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
  "end": 54,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 25,
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
          "init": null,
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "_await",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 46,
            "end": 51,
            "decorators": [],
            "name": "await",
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
