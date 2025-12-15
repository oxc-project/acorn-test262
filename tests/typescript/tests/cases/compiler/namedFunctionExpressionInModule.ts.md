__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Variables",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 30
                },
                "init": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 42,
                    "end": 45
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 46,
                      "end": 47
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 49,
                      "end": 50
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 53
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 55,
                    "end": 62
                  },
                  "expression": false,
                  "start": 33,
                  "end": 62
                },
                "definite": false,
                "start": 29,
                "end": 62
              }
            ],
            "declare": false,
            "start": 25,
            "end": 62
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 68
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 69,
                  "end": 70
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 72,
                  "end": 73
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 75,
                  "end": 76
                }
              ],
              "optional": false,
              "start": 67,
              "end": 77
            },
            "directive": null,
            "start": 67,
            "end": 78
          }
        ],
        "start": 19,
        "end": 80
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 80
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 80
}
```
