__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeFirstTwoEntries",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 28
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 34,
                    "end": 36
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 38,
                    "end": 40
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 41
              },
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 46
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 48,
                    "end": 50
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 51
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 52
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 55,
                    "end": 61
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 63,
                    "end": 69
                  }
                ],
                "start": 54,
                "end": 70
              },
              "start": 54,
              "end": 72
            },
            "start": 52,
            "end": 72
          },
          "value": null,
          "start": 29,
          "end": 72
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 74,
        "end": 77
      },
      "expression": false,
      "start": 0,
      "end": 77
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takeFirstTwoEntries",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 97
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Map",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 108
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 111,
                          "end": 113
                        },
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 115,
                          "end": 116
                        }
                      ],
                      "start": 110,
                      "end": 117
                    },
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 120,
                          "end": 127
                        },
                        {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 129,
                          "end": 133
                        }
                      ],
                      "start": 119,
                      "end": 134
                    }
                  ],
                  "start": 109,
                  "end": 135
                }
              ],
              "start": 101,
              "end": 136
            },
            "start": 98,
            "end": 136
          }
        ],
        "optional": false,
        "start": 78,
        "end": 137
      },
      "directive": null,
      "start": 78,
      "end": 138
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 138
}
```
