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
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 4,
            "end": 25,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 5,
                "end": 6,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 8,
                "end": 9,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            ],
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
                "decorators": [],
                "name": "undefined",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 40,
                "end": 49,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
