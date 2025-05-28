__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "BlockStatement",
      "start": 0,
      "end": 103,
      "body": [
        {
          "type": "ExpressionStatement",
          "start": 4,
          "end": 29,
          "expression": {
            "type": "CallExpression",
            "start": 4,
            "end": 28,
            "callee": {
              "type": "Identifier",
              "start": 4,
              "end": 11,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "BinaryExpression",
                "start": 12,
                "end": 27,
                "left": {
                  "type": "Literal",
                  "start": 12,
                  "end": 14,
                  "value": "",
                  "raw": "\"\""
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 17,
                  "end": 27,
                  "value": "./foo.ts",
                  "raw": "\"./foo.ts\""
                }
              }
            ],
            "optional": false
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 32,
          "end": 56,
          "expression": {
            "type": "ImportExpression",
            "start": 32,
            "end": 55,
            "source": {
              "type": "BinaryExpression",
              "start": 39,
              "end": 54,
              "left": {
                "type": "Literal",
                "start": 39,
                "end": 41,
                "value": "",
                "raw": "\"\""
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 44,
                "end": 54,
                "value": "./foo.ts",
                "raw": "\"./foo.ts\""
              }
            },
            "options": null,
            "phase": null
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 59,
          "end": 79,
          "expression": {
            "type": "CallExpression",
            "start": 59,
            "end": 78,
            "callee": {
              "type": "Identifier",
              "start": 59,
              "end": 66,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 67,
                "end": 77,
                "value": "./foo.ts",
                "raw": "\"./foo.ts\""
              }
            ],
            "optional": false
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 82,
          "end": 101,
          "expression": {
            "type": "ImportExpression",
            "start": 82,
            "end": 100,
            "source": {
              "type": "Literal",
              "start": 89,
              "end": 99,
              "value": "./foo.ts",
              "raw": "\"./foo.ts\""
            },
            "options": null,
            "phase": null
          },
          "directive": null
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "BlockStatement",
      "start": 0,
      "end": 52,
      "body": [
        {
          "type": "ExpressionStatement",
          "start": 4,
          "end": 28,
          "expression": {
            "type": "ImportExpression",
            "start": 4,
            "end": 27,
            "source": {
              "type": "BinaryExpression",
              "start": 11,
              "end": 26,
              "left": {
                "type": "Literal",
                "start": 11,
                "end": 13,
                "value": "",
                "raw": "\"\""
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 16,
                "end": 26,
                "value": "./foo.ts",
                "raw": "\"./foo.ts\""
              }
            },
            "options": null,
            "phase": null
          },
          "directive": null
        },
        {
          "type": "ExpressionStatement",
          "start": 31,
          "end": 50,
          "expression": {
            "type": "ImportExpression",
            "start": 31,
            "end": 49,
            "source": {
              "type": "Literal",
              "start": 38,
              "end": 48,
              "value": "./foo.ts",
              "raw": "\"./foo.ts\""
            },
            "options": null,
            "phase": null
          },
          "directive": null
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
