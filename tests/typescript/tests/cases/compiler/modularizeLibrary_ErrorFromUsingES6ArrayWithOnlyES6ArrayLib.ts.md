__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 42,
  "end": 136,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 42,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
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
          "start": 53,
          "end": 62,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 54,
            "end": 62,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 56,
              "end": 62
            }
          }
        },
        {
          "type": "Identifier",
          "start": 64,
          "end": 73,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 73,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 67,
              "end": 73
            }
          }
        },
        {
          "type": "Identifier",
          "start": 75,
          "end": 84,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 84,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 78,
              "end": 84
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 123,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 92,
            "end": 121,
            "argument": {
              "type": "CallExpression",
              "start": 99,
              "end": 120,
              "callee": {
                "type": "MemberExpression",
                "start": 99,
                "end": 109,
                "object": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 104,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 109,
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
                  "start": 110,
                  "end": 119,
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
      "start": 125,
      "end": 136,
      "expression": {
        "type": "CallExpression",
        "start": 125,
        "end": 135,
        "callee": {
          "type": "Identifier",
          "start": 125,
          "end": 126,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 127,
            "end": 128,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 130,
            "end": 131,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 133,
            "end": 134,
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
