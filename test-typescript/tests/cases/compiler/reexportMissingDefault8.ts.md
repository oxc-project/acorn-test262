__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 14,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 14,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 16,
      "end": 27,
      "expression": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "name": "b",
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
  "end": 30,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 30,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 16,
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 29,
        "value": "./b",
        "raw": "\"./b\""
      },
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
