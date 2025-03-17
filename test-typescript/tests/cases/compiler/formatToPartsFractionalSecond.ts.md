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
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 88,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 47,
            "end": 87,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 56,
              "end": 87,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 56,
                "end": 64,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 59,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 64,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 69,
                "end": 87,
                "raw": "'fractionalSecond'",
                "value": "fractionalSecond"
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 48,
                "end": 51,
                "decorators": [],
                "name": "val",
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
          "start": 0,
          "end": 46,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 0,
            "end": 41,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 0,
              "end": 39,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 0,
                "end": 25,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 4,
                  "end": 23,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4,
                    "end": 8,
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 9,
                    "end": 23,
                    "decorators": [],
                    "name": "DateTimeFormat",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 26,
                "end": 39,
                "decorators": [],
                "name": "formatToParts",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "decorators": [],
            "name": "find",
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
