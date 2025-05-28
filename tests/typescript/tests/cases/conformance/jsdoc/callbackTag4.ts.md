__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 141,
  "end": 196,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 141,
      "end": 196,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 149,
            "decorators": [],
            "name": "cb",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 152,
            "end": 196,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 165,
                "end": 166,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 168,
              "end": 196,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 174,
                  "end": 178,
                  "expression": {
                    "type": "ThisExpression",
                    "start": 174,
                    "end": 178
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 183,
                  "end": 194,
                  "argument": {
                    "type": "Literal",
                    "start": 190,
                    "end": 194,
                    "value": true,
                    "raw": "true"
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
