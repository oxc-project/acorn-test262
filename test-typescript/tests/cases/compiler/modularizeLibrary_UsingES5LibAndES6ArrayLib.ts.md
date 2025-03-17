__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 133,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 39,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 50,
          "end": 59,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 59,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 53,
              "end": 59
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 61,
          "end": 70,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 70,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 64,
              "end": 70
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 72,
          "end": 81,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 81,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 75,
              "end": 81
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 120,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 89,
            "end": 118,
            "argument": {
              "type": "CallExpression",
              "start": 96,
              "end": 117,
              "callee": {
                "type": "MemberExpression",
                "start": 96,
                "end": 106,
                "object": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 101,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 106,
                  "name": "from",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 107,
                  "end": 116,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 122,
      "end": 133,
      "expression": {
        "type": "CallExpression",
        "start": 122,
        "end": 132,
        "callee": {
          "type": "Identifier",
          "start": 122,
          "end": 123,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 124,
            "end": 125,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 127,
            "end": 128,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 130,
            "end": 131,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
