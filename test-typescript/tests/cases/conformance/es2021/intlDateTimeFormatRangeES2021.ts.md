__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 63,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 62,
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 37,
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
            "end": 37,
            "name": "formatRange",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 38,
            "end": 49,
            "callee": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "name": "Date",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 47,
                "end": 48,
                "value": 0,
                "raw": "0"
              }
            ],
            "typeArguments": null
          },
          {
            "type": "NewExpression",
            "start": 51,
            "end": 61,
            "callee": {
              "type": "Identifier",
              "start": 55,
              "end": 59,
              "name": "Date",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "ArrayPattern",
            "start": 70,
            "end": 78,
            "elements": [
              {
                "type": "Identifier",
                "start": 72,
                "end": 76,
                "name": "part",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 81,
            "end": 143,
            "callee": {
              "type": "MemberExpression",
              "start": 81,
              "end": 125,
              "object": {
                "type": "NewExpression",
                "start": 81,
                "end": 106,
                "callee": {
                  "type": "MemberExpression",
                  "start": 85,
                  "end": 104,
                  "object": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 89,
                    "name": "Intl",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 104,
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
                "start": 107,
                "end": 125,
                "name": "formatRangeToParts",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 126,
                "end": 130,
                "value": 1000,
                "raw": "1000"
              },
              {
                "type": "Literal",
                "start": 132,
                "end": 142,
                "value": 1000000000,
                "raw": "1000000000"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
