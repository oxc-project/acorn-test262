__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "name": "recurser",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 15,
            "end": 128,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 30,
              "end": 128,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 64,
                  "end": 70,
                  "expression": {
                    "type": "CallExpression",
                    "start": 64,
                    "end": 69,
                    "callee": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 67,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 115,
                  "end": 126,
                  "expression": {
                    "type": "CallExpression",
                    "start": 115,
                    "end": 125,
                    "callee": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 123,
                      "name": "recurser",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 164,
      "expression": {
        "type": "FunctionExpression",
        "start": 133,
        "end": 162,
        "id": {
          "type": "Identifier",
          "start": 142,
          "end": 145,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 148,
          "end": 162,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 154,
              "end": 160,
              "expression": {
                "type": "CallExpression",
                "start": 154,
                "end": 159,
                "callee": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
