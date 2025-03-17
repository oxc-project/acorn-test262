__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 102,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 2,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 12,
        "end": 25,
        "name": "testGenerator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 101,
        "body": [
          {
            "type": "IfStatement",
            "start": 34,
            "end": 80,
            "test": {
              "type": "BinaryExpression",
              "start": 38,
              "end": 57,
              "left": {
                "type": "CallExpression",
                "start": 38,
                "end": 51,
                "callee": {
                  "type": "MemberExpression",
                  "start": 38,
                  "end": 49,
                  "object": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 42,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 49,
                    "name": "random",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "start": 54,
                "end": 57,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 59,
              "end": 80,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 68,
                  "end": 75,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 84,
            "end": 98,
            "expression": {
              "type": "YieldExpression",
              "start": 84,
              "end": 97,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 90,
                "end": 97,
                "value": "hello",
                "raw": "'hello'"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
