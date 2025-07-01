__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_default",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 12
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 15,
            "end": 16
          },
          "definite": false,
          "start": 4,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_default",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 34
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 39
          },
          "exportKind": "value",
          "start": 26,
          "end": 39
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 18,
      "end": 40
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 56,
          "end": 57
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 60,
          "end": 61
        },
        "start": 56,
        "end": 61
      },
      "exportKind": "value",
      "start": 41,
      "end": 62
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 62
}
```
