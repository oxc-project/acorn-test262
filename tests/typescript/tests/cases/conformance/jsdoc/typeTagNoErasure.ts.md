__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 95,
  "end": 176,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 95,
      "end": 126,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 126,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 105,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 108,
            "end": 126,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 108,
                "end": 115,
                "decorators": [],
                "name": "dibbity",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 119,
              "end": 126,
              "decorators": [],
              "name": "dibbity",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 135,
      "expression": {
        "type": "CallExpression",
        "start": 128,
        "end": 135,
        "callee": {
          "type": "Identifier",
          "start": 128,
          "end": 132,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 133,
            "end": 134,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 157,
      "expression": {
        "type": "CallExpression",
        "start": 147,
        "end": 157,
        "callee": {
          "type": "Identifier",
          "start": 147,
          "end": 151,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 152,
            "end": 156,
            "value": "hi",
            "raw": "'hi'"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
