__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 27,
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 27,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 11,
                "end": 27,
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
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 44,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 29,
        "end": 43,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 29,
          "end": 35,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 30,
              "end": 34,
              "argument": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 38,
          "end": 43,
          "decorators": [],
          "name": "tupel",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
