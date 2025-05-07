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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "definite": false,
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
                "raw": "''",
                "value": "",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 26,
                "end": 28,
                "raw": "''",
                "value": "",
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 86,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 85,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 54,
            "end": 84,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 63,
              "end": 84,
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
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 63,
                "end": 73,
                "computed": false,
                "object": {
                  "type": "Literal",
                  "start": 63,
                  "end": 65,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 73,
                  "decorators": [],
                  "name": "replace",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 31,
          "end": 53,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 31,
            "end": 45,
            "decorators": [],
            "name": "regexMatchList",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 53,
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
