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
          "typeAnnotation": null,
          "value": null,
          "start": 29,
          "end": 52
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 54,
        "end": 57
      },
      "expression": false,
      "start": 0,
      "end": 57
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
          "start": 58,
          "end": 77
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 85
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
                        "start": 88,
                        "end": 90
                      },
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 92,
                        "end": 93
                      }
                    ],
                    "start": 87,
                    "end": 94
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 97,
                        "end": 104
                      },
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 106,
                        "end": 107
                      }
                    ],
                    "start": 96,
                    "end": 108
                  }
                ],
                "start": 86,
                "end": 109
              }
            ],
            "start": 78,
            "end": 110
          }
        ],
        "optional": false,
        "start": 58,
        "end": 111
      },
      "directive": null,
      "start": 58,
      "end": 112
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 112
}
```
