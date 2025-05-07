__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 57,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 54,
        "end": 57,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 28,
        "decorators": [],
        "name": "takeFirstTwoEntries",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 29,
          "end": 52,
          "argument": {
            "type": "ArrayPattern",
            "start": 32,
            "end": 52,
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 33,
                "end": 41,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 34,
                    "end": 36,
                    "decorators": [],
                    "name": "k1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 38,
                    "end": 40,
                    "decorators": [],
                    "name": "v1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayPattern",
                "start": 43,
                "end": 51,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 44,
                    "end": 46,
                    "decorators": [],
                    "name": "k2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 48,
                    "end": 50,
                    "decorators": [],
                    "name": "v2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 112,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 58,
        "end": 111,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 78,
            "end": 110,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 86,
                "end": 109,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 87,
                    "end": 94,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 88,
                        "end": 90,
                        "raw": "\"\"",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      },
                      {
                        "type": "Literal",
                        "start": 92,
                        "end": 93,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 96,
                    "end": 108,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 97,
                        "end": 104,
                        "raw": "\"hello\"",
                        "value": "hello",
                        "regex": null,
                        "bigint": null
                      },
                      {
                        "type": "Literal",
                        "start": 106,
                        "end": 107,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 82,
              "end": 85,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 58,
          "end": 77,
          "decorators": [],
          "name": "takeFirstTwoEntries",
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
