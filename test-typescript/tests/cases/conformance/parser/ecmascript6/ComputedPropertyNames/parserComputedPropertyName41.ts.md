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
          "end": 31,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 31,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 29,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 15,
                  "end": 22,
                  "left": {
                    "type": "Literal",
                    "start": 15,
                    "end": 16,
                    "value": 0,
                    "raw": "0"
                  },
                  "operator": "in",
                  "right": {
                    "type": "ArrayExpression",
                    "start": 20,
                    "end": 22,
                    "elements": []
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 25,
                  "end": 29,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
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
