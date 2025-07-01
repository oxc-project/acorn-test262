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
        "name": "identity",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 43
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 45
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "start": 53,
            "end": 62
          }
        ],
        "start": 47,
        "end": 64
      },
      "expression": false,
      "start": 26,
      "end": 64
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 73
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "identity",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 84
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 166
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 170,
                  "end": 175
                },
                "id": null,
                "generator": false,
                "start": 161,
                "end": 175
              }
            ],
            "optional": false,
            "start": 76,
            "end": 177
          },
          "definite": false,
          "start": 72,
          "end": 177
        }
      ],
      "declare": false,
      "start": 66,
      "end": 178
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 178
}
```
