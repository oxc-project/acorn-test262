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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 13,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 12,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "directive": null,
      "expression": {
        "type": "ImportExpression",
        "start": 26,
        "end": 39,
        "options": null,
        "source": {
          "type": "Literal",
          "start": 33,
          "end": 38,
          "raw": "\"./a\"",
          "value": "./a"
        },
        "phase": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
