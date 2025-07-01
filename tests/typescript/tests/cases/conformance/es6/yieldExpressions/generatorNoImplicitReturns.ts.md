__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testGenerator",
        "optional": false,
        "typeAnnotation": null,
        "start": 12,
        "end": 25
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 38,
                    "end": 42
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 49
                  },
                  "optional": false,
                  "computed": false,
                  "start": 38,
                  "end": 49
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 38,
                "end": 51
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 54,
                "end": 57
              },
              "start": 38,
              "end": 57
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 68,
                  "end": 75
                }
              ],
              "start": 59,
              "end": 80
            },
            "alternate": null,
            "start": 34,
            "end": 80
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 90,
                "end": 97
              },
              "start": 84,
              "end": 97
            },
            "directive": null,
            "start": 84,
            "end": 98
          }
        ],
        "start": 29,
        "end": 101
      },
      "expression": false,
      "start": 2,
      "end": 101
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 2,
  "end": 101
}
```
