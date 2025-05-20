__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 64,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 25,
        "end": 64,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 31,
            "end": 42,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 35,
                "end": 41,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 37,
                  "decorators": [],
                  "name": "_a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 40,
                  "end": 41,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 47,
            "end": 62,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 47,
              "end": 61,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 59,
                  "end": 60,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 47,
                "end": 58,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 54,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 58,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 14,
        "end": 23,
        "elements": [
          {
            "type": "Literal",
            "start": 15,
            "end": 16,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 18,
            "end": 19,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 21,
            "end": 22,
            "raw": "3",
            "value": 3
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
