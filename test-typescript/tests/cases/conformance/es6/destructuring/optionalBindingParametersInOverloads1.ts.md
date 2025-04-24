__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 53,
      "async": false,
      "body": null,
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
          "end": 51,
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
              "start": 17,
              "end": 18,
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
            "start": 24,
            "end": 51,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 26,
              "end": 51,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 87,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 87,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 66,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 67,
          "end": 81,
          "argument": {
            "type": "Identifier",
            "start": 70,
            "end": 74,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 74,
            "end": 81,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 76,
              "end": 81,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 76,
                "end": 79
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 109,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 89,
        "end": 108,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 93,
            "end": 107,
            "elements": [
              {
                "type": "Literal",
                "start": 94,
                "end": 96,
                "raw": "\"\"",
                "value": ""
              },
              {
                "type": "Literal",
                "start": 98,
                "end": 99,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 101,
                "end": 106,
                "raw": "false",
                "value": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 89,
          "end": 92,
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
      "start": 111,
      "end": 131,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 111,
        "end": 130,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 115,
            "end": 129,
            "elements": [
              {
                "type": "Literal",
                "start": 116,
                "end": 121,
                "raw": "false",
                "value": false
              },
              {
                "type": "Literal",
                "start": 123,
                "end": 124,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 126,
                "end": 128,
                "raw": "\"\"",
                "value": ""
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 111,
          "end": 114,
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
