__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regexMatchList",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 18
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 22,
                "end": 24
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 26,
                "end": 28
              }
            ],
            "start": 21,
            "end": 29
          },
          "definite": false,
          "start": 4,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
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
            "name": "regexMatchList",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 45
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 53
          },
          "optional": false,
          "computed": false,
          "start": 31,
          "end": 53
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 59
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 63,
                  "end": 65
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "replace",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 73
                },
                "optional": false,
                "computed": false,
                "start": 63,
                "end": 73
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "match",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 79
                },
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 81,
                  "end": 83
                }
              ],
              "optional": false,
              "start": 63,
              "end": 84
            },
            "id": null,
            "generator": false,
            "start": 54,
            "end": 84
          }
        ],
        "optional": false,
        "start": 31,
        "end": 85
      },
      "directive": null,
      "start": 31,
      "end": 86
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 86
}
```
