__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 31,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 30,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 30,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 16,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 11,
                  "end": 12,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 15,
                  "end": 16,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 18,
                "end": 28,
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "start": 19,
                  "end": 24,
                  "left": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 20,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 27,
                  "end": 28,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
