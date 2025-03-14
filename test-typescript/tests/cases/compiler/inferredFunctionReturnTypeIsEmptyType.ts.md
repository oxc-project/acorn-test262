inferredFunctionReturnTypeIsEmptyType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 97,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 97,
        "body": [
          {
            "type": "IfStatement",
            "start": 21,
            "end": 95,
            "alternate": {
              "type": "BlockStatement",
              "start": 67,
              "end": 95,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 77,
                  "end": 89,
                  "argument": {
                    "type": "Literal",
                    "start": 84,
                    "end": 88,
                    "raw": "\"42\"",
                    "value": "42"
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 31,
              "end": 57,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 41,
                  "end": 51,
                  "argument": {
                    "type": "Literal",
                    "start": 48,
                    "end": 50,
                    "raw": "42",
                    "value": 42
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 25,
              "end": 29,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "EmptyStatement",
      "start": 97,
      "end": 98
    }
  ],
  "sourceType": "script"
}
```
