__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 88,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 88,
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 46,
          "object": {
            "type": "CallExpression",
            "start": 0,
            "end": 41,
            "callee": {
              "type": "MemberExpression",
              "start": 0,
              "end": 39,
              "object": {
                "type": "NewExpression",
                "start": 0,
                "end": 25,
                "callee": {
                  "type": "MemberExpression",
                  "start": 4,
                  "end": 23,
                  "object": {
                    "type": "Identifier",
                    "start": 4,
                    "end": 8,
                    "name": "Intl",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 9,
                    "end": 23,
                    "name": "DateTimeFormat",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 26,
                "end": 39,
                "name": "formatToParts",
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
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "name": "find",
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
            "start": 47,
            "end": 87,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 48,
                "end": 51,
                "name": "val",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 56,
              "end": 87,
              "left": {
                "type": "MemberExpression",
                "start": 56,
                "end": 64,
                "object": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 59,
                  "name": "val",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 64,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 69,
                "end": 87,
                "value": "fractionalSecond",
                "raw": "'fractionalSecond'"
              }
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
