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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 30,
            "end": 41,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "j",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 34,
              "end": 41,
              "raw": "\"hello\"",
              "value": "hello"
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
