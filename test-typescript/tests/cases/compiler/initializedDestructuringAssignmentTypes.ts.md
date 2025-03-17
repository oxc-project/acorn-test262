__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 37,
          "id": {
            "type": "ArrayPattern",
            "start": 6,
            "end": 16,
            "elements": [
              null,
              {
                "type": "AssignmentPattern",
                "start": 9,
                "end": 15,
                "left": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 10,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 13,
                  "end": 15,
                  "value": "",
                  "raw": "''"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 19,
            "end": 37,
            "left": {
              "type": "CallExpression",
              "start": 19,
              "end": 31,
              "callee": {
                "type": "MemberExpression",
                "start": 19,
                "end": 27,
                "object": {
                  "type": "Literal",
                  "start": 19,
                  "end": 21,
                  "value": "",
                  "raw": "''"
                },
                "property": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 27,
                  "name": "match",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 28,
                  "end": 30,
                  "value": "",
                  "raw": "''"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "operator": "||",
            "right": {
              "type": "ArrayExpression",
              "start": 35,
              "end": 37,
              "elements": []
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 51,
      "expression": {
        "type": "CallExpression",
        "start": 40,
        "end": 51,
        "callee": {
          "type": "MemberExpression",
          "start": 40,
          "end": 49,
          "object": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 49,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
