__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 60,
  "end": 110,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 60,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 72,
        "decorators": [],
        "name": "foo",
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
          "start": 73,
          "end": 75,
          "decorators": [],
          "name": "𝑚",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 77,
          "end": 79,
          "decorators": [],
          "name": "𝑀",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 110,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 87,
            "end": 108,
            "expression": {
              "type": "CallExpression",
              "start": 87,
              "end": 107,
              "callee": {
                "type": "MemberExpression",
                "start": 87,
                "end": 98,
                "object": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 94,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 98,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 99,
                  "end": 106,
                  "left": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 101,
                    "decorators": [],
                    "name": "𝑀",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 106,
                    "decorators": [],
                    "name": "𝑚",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "optional": false
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
