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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "recurser",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 15,
            "end": 128,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
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
                      "decorators": [],
                      "name": "recurser",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "directive": null
            }
          ]
        },
        "expression": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
