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
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 37,
        "name": "commentedParameters",
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
          "start": 38,
          "end": 45,
          "argument": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 46,
        "end": 51,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 48,
          "end": 51
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 69,
        "name": "ifelse",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 243,
        "body": [
          {
            "type": "IfStatement",
            "start": 78,
            "end": 241,
            "test": {
              "type": "CallExpression",
              "start": 82,
              "end": 107,
              "callee": {
                "type": "Identifier",
                "start": 82,
                "end": 101,
                "name": "commentedParameters",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 102,
                  "end": 103,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 105,
                  "end": 106,
                  "value": 2,
                  "raw": "2"
                }
              ],
              "optional": false,
              "typeArguments": null
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
                  "expression": {
                    "type": "CallExpression",
                    "start": 140,
                    "end": 165,
                    "callee": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 159,
                      "name": "commentedParameters",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 160,
                        "end": 161,
                        "value": 3,
                        "raw": "3"
                      },
                      {
                        "type": "Literal",
                        "start": 163,
                        "end": 164,
                        "value": 4,
                        "raw": "4"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 199,
              "end": 241,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 209,
                  "end": 235,
                  "expression": {
                    "type": "CallExpression",
                    "start": 209,
                    "end": 234,
                    "callee": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 228,
                      "name": "commentedParameters",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 229,
                        "end": 230,
                        "value": 5,
                        "raw": "5"
                      },
                      {
                        "type": "Literal",
                        "start": 232,
                        "end": 233,
                        "value": 6,
                        "raw": "6"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
