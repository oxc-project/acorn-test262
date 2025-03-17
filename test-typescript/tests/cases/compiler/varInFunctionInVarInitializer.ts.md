__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 8,
            "end": 52,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 20,
              "end": 52,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 26,
                  "end": 36,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 30,
                      "end": 35,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 30,
                        "end": 31,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 34,
                        "end": 35,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ReturnStatement",
                  "start": 41,
                  "end": 50,
                  "argument": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        },
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 62,
            "end": 63,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
