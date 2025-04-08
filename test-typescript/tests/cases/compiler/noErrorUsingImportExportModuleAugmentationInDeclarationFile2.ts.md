__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 52,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 42,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 30,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "j",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 34,
              "end": 41,
              "value": "hello",
              "raw": "\"hello\""
            },
            "definite": false
          }
        ],
        "kind": "var",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 11,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 33,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
