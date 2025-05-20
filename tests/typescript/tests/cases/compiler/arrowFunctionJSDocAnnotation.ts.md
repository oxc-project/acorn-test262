__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 178,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 64,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 64,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 53,
            "end": 62,
            "argument": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 43,
        "decorators": [],
        "name": "identity",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 44,
          "end": 45,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 177,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 76,
            "end": 177,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 161,
                "end": 175,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 175,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 161,
                    "end": 166,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 76,
              "end": 84,
              "decorators": [],
              "name": "identity",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
