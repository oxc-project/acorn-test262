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
          "end": 53,
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
              "start": 19,
              "end": 20,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 22,
              "end": 23,
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
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
          "type": "RestElement",
          "start": 69,
          "end": 83,
          "argument": {
            "type": "Identifier",
            "start": 72,
            "end": 76,
            "name": "rest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 89,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 111,
      "expression": {
        "type": "CallExpression",
        "start": 91,
        "end": 110,
        "callee": {
          "type": "Identifier",
          "start": 91,
          "end": 94,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 100,
                "end": 101,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 103,
                "end": 108,
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
      "start": 113,
      "end": 133,
      "expression": {
        "type": "CallExpression",
        "start": 113,
        "end": 132,
        "callee": {
          "type": "Identifier",
          "start": 113,
          "end": 116,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": false,
                "raw": "false"
              },
              {
                "type": "Literal",
                "start": 125,
                "end": 126,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 128,
                "end": 130,
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
