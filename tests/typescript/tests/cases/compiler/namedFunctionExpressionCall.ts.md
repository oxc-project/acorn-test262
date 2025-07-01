__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "recurser",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 12
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 27
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 67
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 64,
                    "end": 69
                  },
                  "directive": null,
                  "start": 64,
                  "end": 70
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "recurser",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 123
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 115,
                    "end": 125
                  },
                  "directive": null,
                  "start": 115,
                  "end": 126
                }
              ],
              "start": 30,
              "end": 128
            },
            "expression": false,
            "start": 15,
            "end": 128
          },
          "definite": false,
          "start": 4,
          "end": 128
        }
      ],
      "declare": false,
      "start": 0,
      "end": 129
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "FunctionExpression",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 142,
          "end": 145
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 157
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 154,
                "end": 159
              },
              "directive": null,
              "start": 154,
              "end": 160
            }
          ],
          "start": 148,
          "end": 162
        },
        "expression": false,
        "start": 133,
        "end": 162
      },
      "directive": null,
      "start": 132,
      "end": 164
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 164
}
```
