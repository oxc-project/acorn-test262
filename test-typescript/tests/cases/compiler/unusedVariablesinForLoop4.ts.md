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
      "async": false,
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
            "body": {
              "type": "BlockStatement",
              "start": 57,
              "end": 98,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 67,
                  "end": 72,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 71,
                    "decorators": [],
                    "name": "elem",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 86,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 89,
                        "end": 91,
                        "raw": "20",
                        "value": 20,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
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
                  "value": "a",
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 46,
                  "end": 49,
                  "raw": "\"b\"",
                  "value": "b",
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 51,
                  "end": 54,
                  "raw": "\"c\"",
                  "value": "c",
                  "regex": null,
                  "bigint": null
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
