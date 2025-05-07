__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 77,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 64,
            "end": 71,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 65,
                "end": 70,
                "decorators": [],
                "name": "await",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 74,
            "end": 77,
            "elements": [
              {
                "type": "Literal",
                "start": 75,
                "end": 76,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
