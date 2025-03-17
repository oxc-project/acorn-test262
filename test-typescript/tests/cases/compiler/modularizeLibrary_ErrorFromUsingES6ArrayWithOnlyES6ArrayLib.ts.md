__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 65,
  "end": 160,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 65,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 75,
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
          "start": 76,
          "end": 85,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 85,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 79,
              "end": 85
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 87,
          "end": 96,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 96,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 90,
              "end": 96
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 98,
          "end": 107,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 99,
            "end": 107,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 101,
              "end": 107
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 109,
        "end": 146,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 115,
            "end": 144,
            "argument": {
              "type": "CallExpression",
              "start": 122,
              "end": 143,
              "callee": {
                "type": "MemberExpression",
                "start": 122,
                "end": 132,
                "object": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 127,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 132,
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
                  "start": 133,
                  "end": 142,
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
      "start": 148,
      "end": 159,
      "expression": {
        "type": "CallExpression",
        "start": 148,
        "end": 158,
        "callee": {
          "type": "Identifier",
          "start": 148,
          "end": 149,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 150,
            "end": 151,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 153,
            "end": 154,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 156,
            "end": 157,
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
