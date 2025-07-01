__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 105
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "dibbity",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 115
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "dibbity",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 126
            },
            "id": null,
            "generator": false,
            "start": 108,
            "end": 126
          },
          "definite": false,
          "start": 101,
          "end": 126
        }
      ],
      "declare": false,
      "start": 95,
      "end": 126
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 132
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 133,
            "end": 134
          }
        ],
        "optional": false,
        "start": 128,
        "end": 135
      },
      "directive": null,
      "start": 128,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 151
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hi",
            "raw": "'hi'",
            "start": 152,
            "end": 156
          }
        ],
        "optional": false,
        "start": 147,
        "end": 157
      },
      "directive": null,
      "start": 147,
      "end": 157
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 95,
  "end": 176
}
```
