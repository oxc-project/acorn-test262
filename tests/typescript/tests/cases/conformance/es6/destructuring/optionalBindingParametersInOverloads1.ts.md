__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            }
          ],
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 27,
                  "end": 33
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 35,
                  "end": 41
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 43,
                  "end": 50
                }
              ],
              "start": 26,
              "end": 51
            },
            "start": 24,
            "end": 51
          },
          "start": 13,
          "end": 51
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 66
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 74
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 76,
                "end": 79
              },
              "start": 76,
              "end": 81
            },
            "start": 74,
            "end": 81
          },
          "value": null,
          "start": 67,
          "end": 81
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 83,
        "end": 87
      },
      "expression": false,
      "start": 54,
      "end": 87
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 92
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 94,
                "end": 96
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 98,
                "end": 99
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 101,
                "end": 106
              }
            ],
            "start": 93,
            "end": 107
          }
        ],
        "optional": false,
        "start": 89,
        "end": 108
      },
      "directive": null,
      "start": 89,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 114
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 116,
                "end": 121
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 123,
                "end": 124
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 126,
                "end": 128
              }
            ],
            "start": 115,
            "end": 129
          }
        ],
        "optional": false,
        "start": 111,
        "end": 130
      },
      "directive": null,
      "start": 111,
      "end": 131
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 131
}
```
