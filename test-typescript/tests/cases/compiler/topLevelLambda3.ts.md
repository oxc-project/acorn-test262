__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 8,
            "end": 28,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 14,
              "end": 28,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 15,
                  "end": 27,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 15,
                    "end": 26,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 15,
                      "end": 19
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 26,
                      "decorators": [],
                      "name": "window",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
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
