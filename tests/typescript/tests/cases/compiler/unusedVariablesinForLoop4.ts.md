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
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "elem",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 71
                  },
                  "directive": null,
                  "start": 67,
                  "end": 72
                },
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
                        "start": 85,
                        "end": 86
                      },
                      "init": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 89,
                        "end": 91
                      },
                      "definite": false,
                      "start": 85,
                      "end": 91
                    }
                  ],
                  "declare": false,
                  "start": 81,
                  "end": 92
                }
              ],
              "start": 57,
              "end": 98
            },
            "start": 21,
            "end": 98
          }
        ],
        "start": 15,
        "end": 100
      },
      "expression": false,
      "start": 0,
      "end": 100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 100
}
```
