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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 36,
        "decorators": [],
        "name": "commentedParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 37,
          "end": 44,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 68,
        "decorators": [],
        "name": "ifelse",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 71,
        "end": 242,
        "body": [
          {
            "type": "IfStatement",
            "start": 77,
            "end": 240,
            "test": {
              "type": "CallExpression",
              "start": 81,
              "end": 106,
              "callee": {
                "type": "Identifier",
                "start": 81,
                "end": 100,
                "decorators": [],
                "name": "commentedParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 101,
                  "end": 102,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 104,
                  "end": 105,
                  "value": 2,
                  "raw": "2"
                }
              ],
              "optional": false
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
                  "expression": {
                    "type": "CallExpression",
                    "start": 139,
                    "end": 164,
                    "callee": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 158,
                      "decorators": [],
                      "name": "commentedParameters",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 159,
                        "end": 160,
                        "value": 3,
                        "raw": "3"
                      },
                      {
                        "type": "Literal",
                        "start": 162,
                        "end": 163,
                        "value": 4,
                        "raw": "4"
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 198,
              "end": 240,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 208,
                  "end": 234,
                  "expression": {
                    "type": "CallExpression",
                    "start": 208,
                    "end": 233,
                    "callee": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 227,
                      "decorators": [],
                      "name": "commentedParameters",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 228,
                        "end": 229,
                        "value": 5,
                        "raw": "5"
                      },
                      {
                        "type": "Literal",
                        "start": 231,
                        "end": 232,
                        "value": 6,
                        "raw": "6"
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
