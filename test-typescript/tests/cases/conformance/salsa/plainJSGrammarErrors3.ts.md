__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 0,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 52,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 52,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 21,
            "end": 50,
            "directive": null,
            "expression": {
              "type": "AwaitExpression",
              "start": 21,
              "end": 49,
              "argument": {
                "type": "NewExpression",
                "start": 27,
                "end": 49,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 39,
                    "end": 48,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 38,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
