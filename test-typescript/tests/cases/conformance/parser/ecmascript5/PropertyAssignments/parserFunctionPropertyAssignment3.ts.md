parserFunctionPropertyAssignment3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 23,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 21,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 10,
                  "end": 15,
                  "raw": "\"foo\"",
                  "value": "foo"
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 15,
                  "end": 21,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 18,
                    "end": 21,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
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
  "sourceType": "script"
}
```
