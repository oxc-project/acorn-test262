__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 54,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 19,
      "end": 30,
      "expression": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 52,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 52,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
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
