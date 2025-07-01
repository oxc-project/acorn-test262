__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "elem",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 32,
                    "end": 36
                  },
                  "init": null,
                  "definite": false,
                  "start": 32,
                  "end": 36
                }
              ],
              "declare": false,
              "start": 26,
              "end": 36
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 41,
                  "end": 44
                },
                {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 46,
                  "end": 49
                },
                {
                  "type": "Literal",
                  "value": "c",
                  "raw": "\"c\"",
                  "start": 51,
                  "end": 54
                }
              ],
              "start": 40,
              "end": 55
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 57,
              "end": 65
            },
            "start": 21,
            "end": 65
          }
        ],
        "start": 15,
        "end": 67
      },
      "expression": false,
      "start": 0,
      "end": 67
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 67
}
```
