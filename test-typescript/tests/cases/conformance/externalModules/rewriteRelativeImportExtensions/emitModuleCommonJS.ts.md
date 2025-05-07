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
          "directive": null,
          "expression": {
            "type": "CallExpression",
            "start": 4,
            "end": 28,
            "arguments": [
              {
                "type": "BinaryExpression",
                "start": 12,
                "end": 27,
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "start": 12,
                  "end": 14,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Literal",
                  "start": 17,
                  "end": 27,
                  "raw": "\"./foo.ts\"",
                  "value": "./foo.ts",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 4,
              "end": 11,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        },
        {
          "type": "ExpressionStatement",
          "start": 32,
          "end": 56,
          "directive": null,
          "expression": {
            "type": "ImportExpression",
            "start": 32,
            "end": 55,
            "options": null,
            "source": {
              "type": "BinaryExpression",
              "start": 39,
              "end": 54,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 39,
                "end": 41,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 44,
                "end": 54,
                "raw": "\"./foo.ts\"",
                "value": "./foo.ts",
                "regex": null,
                "bigint": null
              }
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "start": 59,
          "end": 79,
          "directive": null,
          "expression": {
            "type": "CallExpression",
            "start": 59,
            "end": 78,
            "arguments": [
              {
                "type": "Literal",
                "start": 67,
                "end": 77,
                "raw": "\"./foo.ts\"",
                "value": "./foo.ts",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 59,
              "end": 66,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        },
        {
          "type": "ExpressionStatement",
          "start": 82,
          "end": 101,
          "directive": null,
          "expression": {
            "type": "ImportExpression",
            "start": 82,
            "end": 100,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 89,
              "end": 99,
              "raw": "\"./foo.ts\"",
              "value": "./foo.ts",
              "regex": null,
              "bigint": null
            }
          }
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
          "directive": null,
          "expression": {
            "type": "ImportExpression",
            "start": 4,
            "end": 27,
            "options": null,
            "source": {
              "type": "BinaryExpression",
              "start": 11,
              "end": 26,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 11,
                "end": 13,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 16,
                "end": 26,
                "raw": "\"./foo.ts\"",
                "value": "./foo.ts",
                "regex": null,
                "bigint": null
              }
            }
          }
        },
        {
          "type": "ExpressionStatement",
          "start": 31,
          "end": 50,
          "directive": null,
          "expression": {
            "type": "ImportExpression",
            "start": 31,
            "end": 49,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 38,
              "end": 48,
              "raw": "\"./foo.ts\"",
              "value": "./foo.ts",
              "regex": null,
              "bigint": null
            }
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
