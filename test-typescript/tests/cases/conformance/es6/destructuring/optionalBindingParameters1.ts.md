__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 100,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 2,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 14,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 15,
          "end": 50,
          "elements": [
            {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 50,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 25,
              "end": 50,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 26,
                  "end": 32
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 34,
                  "end": 40
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 42,
                  "end": 49
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 52,
        "end": 56,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 78,
      "expression": {
        "type": "CallExpression",
        "start": 58,
        "end": 77,
        "callee": {
          "type": "Identifier",
          "start": 58,
          "end": 61,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 62,
            "end": 76,
            "elements": [
              {
                "type": "Literal",
                "start": 63,
                "end": 65,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 67,
                "end": 68,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 70,
                "end": 75,
                "value": false,
                "raw": "false"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 100,
      "expression": {
        "type": "CallExpression",
        "start": 80,
        "end": 99,
        "callee": {
          "type": "Identifier",
          "start": 80,
          "end": 83,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 84,
            "end": 98,
            "elements": [
              {
                "type": "Literal",
                "start": 85,
                "end": 90,
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 92,
                "end": 93,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 95,
                "end": 97,
                "value": "",
                "raw": "\"\""
              }
            ]
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
