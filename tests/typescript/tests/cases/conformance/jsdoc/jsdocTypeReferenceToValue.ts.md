__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 28,
  "end": 82,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 28,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 44,
        "decorators": [],
        "name": "process",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 45,
          "end": 50,
          "decorators": [],
          "name": "image",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 52,
        "end": 82,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 58,
            "end": 80,
            "argument": {
              "type": "NewExpression",
              "start": 65,
              "end": 80,
              "callee": {
                "type": "Identifier",
                "start": 69,
                "end": 74,
                "decorators": [],
                "name": "image",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 75,
                  "end": 76,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 78,
                  "end": 79,
                  "value": 1,
                  "raw": "1"
                }
              ]
            }
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
