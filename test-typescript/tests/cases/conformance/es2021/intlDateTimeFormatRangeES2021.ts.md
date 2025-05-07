__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 63,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 62,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 38,
            "end": 49,
            "arguments": [
              {
                "type": "Literal",
                "start": 47,
                "end": 48,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "NewExpression",
            "start": 51,
            "end": 61,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 55,
              "end": 59,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 37,
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
            "end": 37,
            "decorators": [],
            "name": "formatRange",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 143,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 70,
            "end": 78,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 72,
                "end": 76,
                "decorators": [],
                "name": "part",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 81,
            "end": 143,
            "arguments": [
              {
                "type": "Literal",
                "start": 126,
                "end": 130,
                "raw": "1000",
                "value": 1000,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 132,
                "end": 142,
                "raw": "1000000000",
                "value": 1000000000,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 81,
              "end": 125,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 81,
                "end": 106,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 85,
                  "end": 104,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 89,
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 104,
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
                "start": 107,
                "end": 125,
                "decorators": [],
                "name": "formatRangeToParts",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
