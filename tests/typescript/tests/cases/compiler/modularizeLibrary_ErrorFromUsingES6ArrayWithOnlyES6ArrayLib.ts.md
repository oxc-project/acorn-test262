__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 52
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 56,
              "end": 62
            },
            "start": 54,
            "end": 62
          },
          "start": 53,
          "end": 62
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 67,
              "end": 73
            },
            "start": 65,
            "end": 73
          },
          "start": 64,
          "end": 73
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 78,
              "end": 84
            },
            "start": 76,
            "end": 84
          },
          "start": 75,
          "end": 84
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 104
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 109
                },
                "optional": false,
                "computed": false,
                "start": 99,
                "end": 109
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 119
                }
              ],
              "optional": false,
              "start": 99,
              "end": 120
            },
            "start": 92,
            "end": 121
          }
        ],
        "start": 86,
        "end": 123
      },
      "expression": false,
      "start": 42,
      "end": 123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 126
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 127,
            "end": 128
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 130,
            "end": 131
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 133,
            "end": 134
          }
        ],
        "optional": false,
        "start": 125,
        "end": 135
      },
      "directive": null,
      "start": 125,
      "end": 136
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 42,
  "end": 136
}
```
