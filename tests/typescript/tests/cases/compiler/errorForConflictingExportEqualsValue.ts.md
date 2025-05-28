__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 13,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 13,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 12,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSExportAssignment",
      "start": 14,
      "end": 25,
      "expression": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
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
        "options": null,
        "phase": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
