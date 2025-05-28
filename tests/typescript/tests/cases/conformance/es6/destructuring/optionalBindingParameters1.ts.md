__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 13,
          "end": 48,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 48,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 23,
              "end": 48,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 24,
                  "end": 30
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 32,
                  "end": 38
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 40,
                  "end": 47
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 54,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 76,
      "expression": {
        "type": "CallExpression",
        "start": 56,
        "end": 75,
        "callee": {
          "type": "Identifier",
          "start": 56,
          "end": 59,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 60,
            "end": 74,
            "elements": [
              {
                "type": "Literal",
                "start": 61,
                "end": 63,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 65,
                "end": 66,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 68,
                "end": 73,
                "value": false,
                "raw": "false"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 98,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 97,
        "callee": {
          "type": "Identifier",
          "start": 78,
          "end": 81,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 82,
            "end": 96,
            "elements": [
              {
                "type": "Literal",
                "start": 83,
                "end": 88,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 90,
                "end": 91,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 93,
                "end": 95,
                "value": "",
                "raw": "\"\""
              }
            ]
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
