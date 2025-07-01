__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 4,
              "end": 11
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 12,
                  "end": 14
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": "./foo.ts",
                  "raw": "\"./foo.ts\"",
                  "start": 17,
                  "end": 27
                },
                "start": 12,
                "end": 27
              }
            ],
            "optional": false,
            "start": 4,
            "end": 28
          },
          "directive": null,
          "start": 4,
          "end": 29
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "ImportExpression",
            "source": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 39,
                "end": 41
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "./foo.ts",
                "raw": "\"./foo.ts\"",
                "start": 44,
                "end": 54
              },
              "start": 39,
              "end": 54
            },
            "options": null,
            "phase": null,
            "start": 32,
            "end": 55
          },
          "directive": null,
          "start": 32,
          "end": 56
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 66
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./foo.ts",
                "raw": "\"./foo.ts\"",
                "start": 67,
                "end": 77
              }
            ],
            "optional": false,
            "start": 59,
            "end": 78
          },
          "directive": null,
          "start": 59,
          "end": 79
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./foo.ts",
              "raw": "\"./foo.ts\"",
              "start": 89,
              "end": 99
            },
            "options": null,
            "phase": null,
            "start": 82,
            "end": 100
          },
          "directive": null,
          "start": 82,
          "end": 101
        }
      ],
      "start": 0,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "ImportExpression",
            "source": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 11,
                "end": 13
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "./foo.ts",
                "raw": "\"./foo.ts\"",
                "start": 16,
                "end": 26
              },
              "start": 11,
              "end": 26
            },
            "options": null,
            "phase": null,
            "start": 4,
            "end": 27
          },
          "directive": null,
          "start": 4,
          "end": 28
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./foo.ts",
              "raw": "\"./foo.ts\"",
              "start": 38,
              "end": 48
            },
            "options": null,
            "phase": null,
            "start": 31,
            "end": 49
          },
          "directive": null,
          "start": 31,
          "end": 50
        }
      ],
      "start": 0,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
