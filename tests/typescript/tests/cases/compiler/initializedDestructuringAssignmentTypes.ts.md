__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              null,
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9,
                  "end": 10
                },
                "right": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 13,
                  "end": 15
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 9,
                "end": 15
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 16
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 19,
                  "end": 21
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "match",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 27
                },
                "optional": false,
                "computed": false,
                "start": 19,
                "end": 27
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 28,
                  "end": 30
                }
              ],
              "optional": false,
              "start": 19,
              "end": 31
            },
            "operator": "||",
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 35,
              "end": 37
            },
            "start": 19,
            "end": 37
          },
          "definite": false,
          "start": 6,
          "end": 37
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 49
          },
          "optional": false,
          "computed": false,
          "start": 40,
          "end": 49
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 40,
        "end": 51
      },
      "directive": null,
      "start": 40,
      "end": 51
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 51
}
```
