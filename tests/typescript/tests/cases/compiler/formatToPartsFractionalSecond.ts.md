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
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 9,
                    "end": 23,
                    "decorators": [],
                    "name": "DateTimeFormat",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 26,
                "end": 39,
                "decorators": [],
                "name": "formatToParts",
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
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "decorators": [],
            "name": "find",
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
            "start": 47,
            "end": 87,
            "expression": true,
            "async": false,
            "typeParameters": null,
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
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 64,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
