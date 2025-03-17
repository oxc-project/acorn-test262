__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 77,
      "body": {
        "type": "TSModuleBlock",
        "start": 16,
        "end": 77,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 22,
            "end": 59,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 59,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 30,
                  "end": 59,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 52,
                    "end": 59,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 42,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "c",
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
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 64,
            "end": 75,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 64,
              "end": 74,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 66,
                  "end": 67,
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 69,
                  "end": 70,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 72,
                  "end": 73,
                  "raw": "3",
                  "value": 3
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "x",
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
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 16,
        "decorators": [],
        "name": "Variables",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
