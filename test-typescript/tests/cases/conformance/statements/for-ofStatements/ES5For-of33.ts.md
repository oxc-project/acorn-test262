__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 54,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 14,
        "end": 29,
        "elements": [
          {
            "type": "Literal",
            "start": 15,
            "end": 18,
            "value": "a",
            "raw": "'a'"
          },
          {
            "type": "Literal",
            "start": 20,
            "end": 23,
            "value": "b",
            "raw": "'b'"
          },
          {
            "type": "Literal",
            "start": 25,
            "end": 28,
            "value": "c",
            "raw": "'c'"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 54,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 37,
            "end": 52,
            "expression": {
              "type": "CallExpression",
              "start": 37,
              "end": 51,
              "callee": {
                "type": "MemberExpression",
                "start": 37,
                "end": 48,
                "object": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 44,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
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
