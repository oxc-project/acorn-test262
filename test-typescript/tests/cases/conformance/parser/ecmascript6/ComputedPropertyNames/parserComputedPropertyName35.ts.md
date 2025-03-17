__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 27,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 25,
                "computed": true,
                "key": {
                  "type": "SequenceExpression",
                  "start": 15,
                  "end": 19,
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 15,
                      "end": 16,
                      "raw": "0",
                      "value": 0
                    },
                    {
                      "type": "Literal",
                      "start": 18,
                      "end": 19,
                      "raw": "1",
                      "value": 1
                    }
                  ]
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 22,
                  "end": 25,
                  "properties": []
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
