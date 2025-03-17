__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 13,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 13,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 12,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
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
    },
    {
      "type": "TSExportAssignment",
      "start": 14,
      "end": 25,
      "expression": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 40,
      "expression": {
        "type": "ImportExpression",
        "start": 26,
        "end": 39,
        "source": {
          "type": "Literal",
          "start": 33,
          "end": 38,
          "value": "./a",
          "raw": "\"./a\""
        },
        "options": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
