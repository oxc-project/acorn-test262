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
          "definite": false,
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
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 30,
              "end": 128,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 64,
                  "end": 70,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 64,
                    "end": 69,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 67,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 115,
                  "end": 126,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 115,
                    "end": 125,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 123,
                      "decorators": [],
                      "name": "recurser",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 164,
      "directive": null,
      "expression": {
        "type": "FunctionExpression",
        "start": 133,
        "end": 162,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 148,
          "end": 162,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 154,
              "end": 160,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 154,
                "end": 159,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 157,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 142,
          "end": 145,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
