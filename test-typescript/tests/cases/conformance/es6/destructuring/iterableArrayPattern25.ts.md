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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 28,
        "name": "takeFirstTwoEntries",
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
          "start": 29,
          "end": 52,
          "argument": {
            "type": "ArrayPattern",
            "start": 32,
            "end": 52,
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 33,
                "end": 41,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 34,
                    "end": 36,
                    "name": "k1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 38,
                    "end": 40,
                    "name": "v1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayPattern",
                "start": 43,
                "end": 51,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 44,
                    "end": 46,
                    "name": "k2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 48,
                    "end": 50,
                    "name": "v2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 54,
        "end": 57,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 112,
      "expression": {
        "type": "CallExpression",
        "start": 58,
        "end": 111,
        "callee": {
          "type": "Identifier",
          "start": 58,
          "end": 77,
          "name": "takeFirstTwoEntries",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 78,
            "end": 110,
            "callee": {
              "type": "Identifier",
              "start": 82,
              "end": 85,
              "name": "Map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                        "value": "",
                        "raw": "\"\""
                      },
                      {
                        "type": "Literal",
                        "start": 92,
                        "end": 93,
                        "value": 0,
                        "raw": "0"
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
                        "value": "hello",
                        "raw": "\"hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 106,
                        "end": 107,
                        "value": 1,
                        "raw": "1"
                      }
                    ]
                  }
                ]
              }
            ],
            "typeArguments": null
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
