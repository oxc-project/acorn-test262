__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 18,
            "decorators": [],
            "name": "regexMatchList",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 21,
            "end": 29,
            "elements": [
              {
                "type": "Literal",
                "start": 22,
                "end": 24,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 26,
                "end": 28,
                "value": "",
                "raw": "''"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 86,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 85,
        "callee": {
          "type": "MemberExpression",
          "start": 31,
          "end": 53,
          "object": {
            "type": "Identifier",
            "start": 31,
            "end": 45,
            "decorators": [],
            "name": "regexMatchList",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 53,
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 54,
            "end": 84,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 54,
                "end": 59,
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 63,
              "end": 84,
              "callee": {
                "type": "MemberExpression",
                "start": 63,
                "end": 73,
                "object": {
                  "type": "Literal",
                  "start": 63,
                  "end": 65,
                  "value": "",
                  "raw": "''"
                },
                "property": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 73,
                  "decorators": [],
                  "name": "replace",
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
                  "start": 74,
                  "end": 79,
                  "decorators": [],
                  "name": "match",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Literal",
                  "start": 81,
                  "end": 83,
                  "value": "",
                  "raw": "''"
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
