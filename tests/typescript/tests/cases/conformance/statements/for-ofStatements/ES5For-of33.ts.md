__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 10
            },
            "init": null,
            "definite": false,
            "start": 9,
            "end": 10
          }
        ],
        "declare": false,
        "start": 5,
        "end": 10
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 15,
            "end": 18
          },
          {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 20,
            "end": 23
          },
          {
            "type": "Literal",
            "value": "c",
            "raw": "'c'",
            "start": 25,
            "end": 28
          }
        ],
        "start": 14,
        "end": 29
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 44
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 48
                },
                "optional": false,
                "computed": false,
                "start": 37,
                "end": 48
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 50
                }
              ],
              "optional": false,
              "start": 37,
              "end": 51
            },
            "directive": null,
            "start": 37,
            "end": 52
          }
        ],
        "start": 31,
        "end": 54
      },
      "start": 0,
      "end": 54
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 54
}
```
