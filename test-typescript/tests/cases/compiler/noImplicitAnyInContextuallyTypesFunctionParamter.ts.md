__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 18,
            "name": "regexMatchList",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
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
            "name": "regexMatchList",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 53,
            "name": "forEach",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 54,
            "end": 84,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 54,
                "end": 59,
                "name": "match",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "replace",
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
                  "start": 74,
                  "end": 79,
                  "name": "match",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Literal",
                  "start": 81,
                  "end": 83,
                  "value": "",
                  "raw": "''"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
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
