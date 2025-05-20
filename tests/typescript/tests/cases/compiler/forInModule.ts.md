__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 55,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 55,
        "body": [
          {
            "type": "ForStatement",
            "start": 14,
            "end": 53,
            "body": {
              "type": "BlockStatement",
              "start": 42,
              "end": 53,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 46,
                  "end": 50,
                  "directive": null,
                  "expression": {
                    "type": "BinaryExpression",
                    "start": 46,
                    "end": 49,
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 19,
              "end": 28,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 23,
                  "end": 28,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 27,
                    "end": 28,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 30,
              "end": 35,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 34,
                "end": 35,
                "raw": "1",
                "value": 1
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 37,
              "end": 40,
              "argument": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Foo",
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
