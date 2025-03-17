__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 243,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 1,
      "end": 52,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 37,
        "decorators": [],
        "name": "commentedParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 38,
          "end": 45,
          "argument": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 46,
        "end": 51,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 48,
          "end": 51
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 243,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 243,
        "body": [
          {
            "type": "IfStatement",
            "start": 78,
            "end": 241,
            "alternate": {
              "type": "BlockStatement",
              "start": 199,
              "end": 241,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 209,
                  "end": 235,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 209,
                    "end": 234,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 229,
                        "end": 230,
                        "raw": "5",
                        "value": 5
                      },
                      {
                        "type": "Literal",
                        "start": 232,
                        "end": 233,
                        "raw": "6",
                        "value": 6
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 228,
                      "decorators": [],
                      "name": "commentedParameters",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 109,
              "end": 193,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 140,
                  "end": 166,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 140,
                    "end": 165,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 160,
                        "end": 161,
                        "raw": "3",
                        "value": 3
                      },
                      {
                        "type": "Literal",
                        "start": 163,
                        "end": 164,
                        "raw": "4",
                        "value": 4
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 159,
                      "decorators": [],
                      "name": "commentedParameters",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 82,
              "end": 107,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 102,
                  "end": 103,
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 105,
                  "end": 106,
                  "raw": "2",
                  "value": 2
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 82,
                "end": 101,
                "decorators": [],
                "name": "commentedParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 69,
        "decorators": [],
        "name": "ifelse",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
