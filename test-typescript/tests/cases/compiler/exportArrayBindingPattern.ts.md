__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 63,
  "end": 107,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 89,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 69,
            "end": 77,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              null,
              {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 80,
            "end": 89,
            "elements": [
              {
                "type": "Literal",
                "start": 81,
                "end": 82,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 84,
                "end": 85,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 87,
                "end": 88,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 91,
      "end": 107,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 100,
          "end": 101,
          "exported": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 103,
          "end": 104,
          "exported": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
