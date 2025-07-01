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
        "start": 7,
        "end": 16
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
                  "start": 26,
                  "end": 27
                },
                "init": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 42
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
                      "start": 43,
                      "end": 44
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 46,
                      "end": 47
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 49,
                      "end": 50
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 52,
                    "end": 59
                  },
                  "expression": false,
                  "start": 30,
                  "end": 59
                },
                "definite": false,
                "start": 26,
                "end": 59
              }
            ],
            "declare": false,
            "start": 22,
            "end": 59
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
                "start": 64,
                "end": 65
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 66,
                  "end": 67
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 69,
                  "end": 70
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 72,
                  "end": 73
                }
              ],
              "optional": false,
              "start": 64,
              "end": 74
            },
            "directive": null,
            "start": 64,
            "end": 75
          }
        ],
        "start": 16,
        "end": 77
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 77
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
