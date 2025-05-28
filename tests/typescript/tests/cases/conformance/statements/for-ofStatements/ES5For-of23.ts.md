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
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
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
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 18,
            "end": 19,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 21,
            "end": 22,
            "value": 3,
            "raw": "3"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 25,
        "end": 64,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 31,
            "end": 42,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 35,
                "end": 41,
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
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 47,
            "end": 62,
            "expression": {
              "type": "CallExpression",
              "start": 47,
              "end": 61,
              "callee": {
                "type": "MemberExpression",
                "start": 47,
                "end": 58,
                "object": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 54,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 58,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
