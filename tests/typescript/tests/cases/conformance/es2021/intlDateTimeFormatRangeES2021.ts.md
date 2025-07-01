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
            "name": "formatRange",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 37
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 37
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 46
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 47,
                "end": 48
              }
            ],
            "start": 38,
            "end": 49
          },
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 59
            },
            "typeArguments": null,
            "arguments": [],
            "start": 51,
            "end": 61
          }
        ],
        "optional": false,
        "start": 0,
        "end": 62
      },
      "directive": null,
      "start": 0,
      "end": 63
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "part",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 76
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 78
          },
          "init": {
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
                    "start": 85,
                    "end": 89
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DateTimeFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 104
                  },
                  "optional": false,
                  "computed": false,
                  "start": 85,
                  "end": 104
                },
                "typeArguments": null,
                "arguments": [],
                "start": 81,
                "end": 106
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "formatRangeToParts",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 125
              },
              "optional": false,
              "computed": false,
              "start": 81,
              "end": 125
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1000,
                "raw": "1000",
                "start": 126,
                "end": 130
              },
              {
                "type": "Literal",
                "value": 1000000000,
                "raw": "1000000000",
                "start": 132,
                "end": 142
              }
            ],
            "optional": false,
            "start": 81,
            "end": 143
          },
          "definite": false,
          "start": 70,
          "end": 143
        }
      ],
      "declare": false,
      "start": 64,
      "end": 144
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 144
}
```
