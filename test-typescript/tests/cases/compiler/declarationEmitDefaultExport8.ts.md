declarationEmitDefaultExport8.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 63,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "_default",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 15,
            "end": 16,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 18,
      "end": 40,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 26,
          "end": 39,
          "exported": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 26,
            "end": 34,
            "decorators": [],
            "name": "_default",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 41,
      "end": 62,
      "declaration": {
        "type": "BinaryExpression",
        "start": 56,
        "end": 61,
        "operator": "+",
        "left": {
          "type": "Literal",
          "start": 56,
          "end": 57,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 60,
          "end": 61,
          "raw": "2",
          "value": 2
        }
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script"
}
```
