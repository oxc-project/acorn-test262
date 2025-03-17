__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 133,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 2,
      "end": 55,
      "async": false,
      "body": null,
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
          "end": 53,
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
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 53,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 28,
              "end": 53,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 29,
                  "end": 35
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 37,
                  "end": 43
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 45,
                  "end": 52
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
      "start": 56,
      "end": 89,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 89,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 69,
          "end": 83,
          "argument": {
            "type": "Identifier",
            "start": 72,
            "end": 76,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 83,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 78,
              "end": 83,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 78,
                "end": 81
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
      "start": 91,
      "end": 111,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 91,
        "end": 110,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 95,
            "end": 109,
            "elements": [
              {
                "type": "Literal",
                "start": 96,
                "end": 98,
                "raw": "\"\"",
                "value": ""
              },
              {
                "type": "Literal",
                "start": 100,
                "end": 101,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 103,
                "end": 108,
                "raw": "false",
                "value": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 91,
          "end": 94,
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
      "start": 113,
      "end": 133,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 113,
        "end": 132,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 117,
            "end": 131,
            "elements": [
              {
                "type": "Literal",
                "start": 118,
                "end": 123,
                "raw": "false",
                "value": false
              },
              {
                "type": "Literal",
                "start": 125,
                "end": 126,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 128,
                "end": 130,
                "raw": "\"\"",
                "value": ""
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 113,
          "end": 116,
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
