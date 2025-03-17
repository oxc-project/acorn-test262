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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 52,
        "end": 56,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 14,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 15,
          "end": 50,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          ],
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
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 78,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 58,
        "end": 77,
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
                "raw": "\"\"",
                "value": ""
              },
              {
                "type": "Literal",
                "start": 67,
                "end": 68,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 70,
                "end": 75,
                "raw": "false",
                "value": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 58,
          "end": 61,
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
      "start": 80,
      "end": 100,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 80,
        "end": 99,
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
                "raw": "false",
                "value": false
              },
              {
                "type": "Literal",
                "start": 92,
                "end": 93,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 95,
                "end": 97,
                "raw": "\"\"",
                "value": ""
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 80,
          "end": 83,
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
