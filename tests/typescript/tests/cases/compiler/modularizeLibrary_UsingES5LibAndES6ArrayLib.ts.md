__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 12,
  "end": 106,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 12,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 32,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 32,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 26,
              "end": 32
            }
          }
        },
        {
          "type": "Identifier",
          "start": 34,
          "end": 43,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 43,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            }
          }
        },
        {
          "type": "Identifier",
          "start": 45,
          "end": 54,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 54,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 48,
              "end": 54
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 93,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 62,
            "end": 91,
            "argument": {
              "type": "CallExpression",
              "start": 69,
              "end": 90,
              "callee": {
                "type": "MemberExpression",
                "start": 69,
                "end": 79,
                "object": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 74,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 79,
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 80,
                  "end": 89,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 106,
      "expression": {
        "type": "CallExpression",
        "start": 95,
        "end": 105,
        "callee": {
          "type": "Identifier",
          "start": 95,
          "end": 96,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 97,
            "end": 98,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 100,
            "end": 101,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 103,
            "end": 104,
            "value": 3,
            "raw": "3"
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
