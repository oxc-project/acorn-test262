__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 100,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 21,
            "end": 98,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 26,
              "end": 36,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 32,
                  "end": 36,
                  "id": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 36,
                    "name": "elem",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
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
                  "value": "a",
                  "raw": "\"a\""
                },
                {
                  "type": "Literal",
                  "start": 46,
                  "end": 49,
                  "value": "b",
                  "raw": "\"b\""
                },
                {
                  "type": "Literal",
                  "start": 51,
                  "end": 54,
                  "value": "c",
                  "raw": "\"c\""
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 57,
              "end": 98,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 67,
                  "end": 72,
                  "expression": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 71,
                    "name": "elem",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 81,
                  "end": 92,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 85,
                      "end": 91,
                      "id": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 86,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 89,
                        "end": 91,
                        "value": 20,
                        "raw": "20"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
