__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 67,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 6,
            "end": 26,
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 7,
                "end": 15,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 8,
                    "end": 10,
                    "decorators": [],
                    "name": "k1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 12,
                    "end": 14,
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
                "start": 17,
                "end": 25,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 18,
                    "end": 20,
                    "decorators": [],
                    "name": "k2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 22,
                    "end": 24,
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
          "init": {
            "type": "NewExpression",
            "start": 29,
            "end": 67,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 37,
                "end": 66,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 38,
                    "end": 48,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 39,
                        "end": 41,
                        "raw": "\"\"",
                        "value": ""
                      },
                      {
                        "type": "Literal",
                        "start": 43,
                        "end": 47,
                        "raw": "true",
                        "value": true
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 50,
                    "end": 65,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 51,
                        "end": 58,
                        "raw": "\"hello\"",
                        "value": "hello"
                      },
                      {
                        "type": "Literal",
                        "start": 60,
                        "end": 64,
                        "raw": "true",
                        "value": true
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
