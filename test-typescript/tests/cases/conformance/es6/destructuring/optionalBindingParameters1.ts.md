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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 54,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 76,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 56,
        "end": 75,
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
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 65,
                "end": 66,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 68,
                "end": 73,
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 56,
          "end": 59,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 98,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 97,
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
                "raw": "false",
                "value": false,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 90,
                "end": 91,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 93,
                "end": 95,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 78,
          "end": 81,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
