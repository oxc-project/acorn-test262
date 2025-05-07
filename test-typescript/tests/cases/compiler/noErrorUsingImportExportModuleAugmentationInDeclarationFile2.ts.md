__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 22,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 22,
              "raw": "\"hello\"",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
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
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 33,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
