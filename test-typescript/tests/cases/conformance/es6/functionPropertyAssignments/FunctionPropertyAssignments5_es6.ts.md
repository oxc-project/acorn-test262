FunctionPropertyAssignments5_es6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
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
            "end": 26,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 24,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 12,
                  "end": 17,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 12,
                    "end": 15,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 18,
                  "end": 24,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 21,
                    "end": 24,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
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
