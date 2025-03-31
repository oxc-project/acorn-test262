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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 55,
        "body": [
          {
            "type": "ForStatement",
            "start": 14,
            "end": 53,
            "init": {
              "type": "VariableDeclaration",
              "start": 19,
              "end": 28,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 23,
                  "end": 28,
                  "id": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 24,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 27,
                    "end": 28,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 30,
              "end": 35,
              "left": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 34,
                "end": 35,
                "value": 1,
                "raw": "1"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 37,
              "end": 40,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 42,
              "end": 53,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 46,
                  "end": 50,
                  "expression": {
                    "type": "BinaryExpression",
                    "start": 46,
                    "end": 49,
                    "left": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
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
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
