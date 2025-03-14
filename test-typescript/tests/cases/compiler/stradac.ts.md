stradac.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 103,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 11,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 9,
            "end": 11,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 76,
      "end": 103,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 91,
        "end": 103,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 97,
            "end": 101,
            "expression": {
              "type": "UpdateExpression",
              "start": 97,
              "end": 100,
              "argument": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 88,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
