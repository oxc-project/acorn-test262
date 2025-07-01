__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4,
                    "end": 8
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DateTimeFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9,
                    "end": 23
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4,
                  "end": 23
                },
                "typeArguments": null,
                "arguments": [],
                "start": 0,
                "end": 25
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "formatToParts",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 39
              },
              "optional": false,
              "computed": false,
              "start": 0,
              "end": 39
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 0,
            "end": 41
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "find",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 46
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 46
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
                "name": "val",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 51
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 59
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 64
                },
                "optional": false,
                "computed": false,
                "start": 56,
                "end": 64
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "fractionalSecond",
                "raw": "'fractionalSecond'",
                "start": 69,
                "end": 87
              },
              "start": 56,
              "end": 87
            },
            "id": null,
            "generator": false,
            "start": 47,
            "end": 87
          }
        ],
        "optional": false,
        "start": 0,
        "end": 88
      },
      "directive": null,
      "start": 0,
      "end": 88
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
