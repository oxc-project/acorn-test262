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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 37,
          "id": {
            "type": "ArrayPattern",
            "start": 6,
            "end": 16,
            "decorators": [],
            "elements": [
              null,
              {
                "type": "AssignmentPattern",
                "start": 9,
                "end": 15,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 10,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 13,
                  "end": 15,
                  "value": "",
                  "raw": "''"
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
                  "decorators": [],
                  "name": "match",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 28,
                  "end": 30,
                  "value": "",
                  "raw": "''"
                }
              ],
              "optional": false
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 49,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
