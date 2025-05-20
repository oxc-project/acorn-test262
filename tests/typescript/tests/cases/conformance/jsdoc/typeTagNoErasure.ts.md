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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 126,
          "definite": false,
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
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 119,
              "end": 126,
              "decorators": [],
              "name": "dibbity",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 135,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 128,
        "end": 135,
        "arguments": [
          {
            "type": "Literal",
            "start": 133,
            "end": 134,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 128,
          "end": 132,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 157,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 147,
        "end": 157,
        "arguments": [
          {
            "type": "Literal",
            "start": 152,
            "end": 156,
            "raw": "'hi'",
            "value": "hi"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 147,
          "end": 151,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
