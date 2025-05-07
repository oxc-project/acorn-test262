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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 30,
          "definite": false,
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
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 11,
                  "end": 12,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 15,
                  "end": 16,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 18,
                "end": 28,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 19,
                  "end": 24,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 20,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 27,
                  "end": 28,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
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
