__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 67,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 67,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 21,
            "end": 65,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 57,
              "end": 65,
              "body": []
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 36,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 32,
                  "end": 36,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 36,
                    "decorators": [],
                    "name": "elem",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 40,
              "end": 55,
              "elements": [
                {
                  "type": "Literal",
                  "start": 41,
                  "end": 44,
                  "raw": "\"a\"",
                  "value": "a"
                },
                {
                  "type": "Literal",
                  "start": 46,
                  "end": 49,
                  "raw": "\"b\"",
                  "value": "b"
                },
                {
                  "type": "Literal",
                  "start": 51,
                  "end": 54,
                  "raw": "\"c\"",
                  "value": "c"
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
