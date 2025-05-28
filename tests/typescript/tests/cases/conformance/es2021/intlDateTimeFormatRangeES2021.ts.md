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
            "end": 37,
            "decorators": [],
            "name": "formatRange",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 38,
            "end": 49,
            "callee": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 47,
                "end": 48,
                "value": 0,
                "raw": "0"
              }
            ]
          },
          {
            "type": "NewExpression",
            "start": 51,
            "end": 61,
            "callee": {
              "type": "Identifier",
              "start": 55,
              "end": 59,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 144,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 143,
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
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 104,
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
                "start": 107,
                "end": 125,
                "decorators": [],
                "name": "formatRangeToParts",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
