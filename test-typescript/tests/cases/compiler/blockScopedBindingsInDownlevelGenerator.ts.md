__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 78,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 18,
            "end": 76,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 23,
              "end": 30,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 29,
                  "end": 30,
                  "id": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "name": "i",
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
              "start": 34,
              "end": 41,
              "elements": [
                {
                  "type": "Literal",
                  "start": 35,
                  "end": 36,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 37,
                  "end": 38,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 39,
                  "end": 40,
                  "value": 3,
                  "raw": "3"
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 43,
              "end": 76,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 49,
                  "end": 60,
                  "expression": {
                    "type": "CallExpression",
                    "start": 49,
                    "end": 60,
                    "callee": {
                      "type": "ArrowFunctionExpression",
                      "start": 50,
                      "end": 57,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 56,
                        "end": 57,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 65,
                  "end": 72,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 65,
                    "end": 72,
                    "delegate": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
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
