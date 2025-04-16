__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 50,
          "id": {
            "type": "ArrayPattern",
            "start": 4,
            "end": 25,
            "elements": [
              {
                "type": "Identifier",
                "start": 5,
                "end": 6,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8,
                "end": 9,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 12,
                "end": 25,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 13,
                    "end": 19
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 21,
                    "end": 24
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 28,
            "end": 50,
            "elements": [
              {
                "type": "Identifier",
                "start": 29,
                "end": 38,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 40,
                "end": 49,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
