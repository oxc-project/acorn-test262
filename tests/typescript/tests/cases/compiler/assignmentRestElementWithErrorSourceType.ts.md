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
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 12,
                    "end": 18
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
                  }
                ],
                "start": 11,
                "end": 27
              },
              "start": 9,
              "end": 27
            },
            "start": 4,
            "end": 27
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 34
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 30,
              "end": 34
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 29,
          "end": 35
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "tupel",
          "optional": false,
          "typeAnnotation": null,
          "start": 38,
          "end": 43
        },
        "start": 29,
        "end": 43
      },
      "directive": null,
      "start": 29,
      "end": 44
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 72
}
```
