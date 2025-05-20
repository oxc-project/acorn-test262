__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 242,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 51,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 36,
        "decorators": [],
        "name": "commentedParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 37,
          "end": 44,
          "argument": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
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
        "start": 45,
        "end": 50,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 47,
          "end": 50
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 242,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 71,
        "end": 242,
        "body": [
          {
            "type": "IfStatement",
            "start": 77,
            "end": 240,
            "alternate": {
              "type": "BlockStatement",
              "start": 198,
              "end": 240,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 208,
                  "end": 234,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 208,
                    "end": 233,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 228,
                        "end": 229,
                        "raw": "5",
                        "value": 5
                      },
                      {
                        "type": "Literal",
                        "start": 231,
                        "end": 232,
                        "raw": "6",
                        "value": 6
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 227,
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
              "start": 108,
              "end": 192,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 139,
                  "end": 165,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 139,
                    "end": 164,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 159,
                        "end": 160,
                        "raw": "3",
                        "value": 3
                      },
                      {
                        "type": "Literal",
                        "start": 162,
                        "end": 163,
                        "raw": "4",
                        "value": 4
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 158,
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
              "start": 81,
              "end": 106,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 101,
                  "end": 102,
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 104,
                  "end": 105,
                  "raw": "2",
                  "value": 2
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 81,
                "end": 100,
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
        "start": 62,
        "end": 68,
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
