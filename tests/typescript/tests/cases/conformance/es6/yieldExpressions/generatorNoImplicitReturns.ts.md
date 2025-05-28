__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 101,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 2,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 12,
        "end": 25,
        "decorators": [],
        "name": "testGenerator",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 49,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
