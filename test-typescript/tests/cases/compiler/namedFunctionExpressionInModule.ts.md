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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 16,
        "name": "Variables",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 30,
                  "end": 59,
                  "id": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 42,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 52,
                    "end": 59,
                    "body": []
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
            "start": 64,
            "end": 75,
            "expression": {
              "type": "CallExpression",
              "start": 64,
              "end": 74,
              "callee": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 66,
                  "end": 67,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 69,
                  "end": 70,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 72,
                  "end": 73,
                  "value": 3,
                  "raw": "3"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
