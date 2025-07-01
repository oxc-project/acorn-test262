__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "commentedParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 36
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 44
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 37,
          "end": 44
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 47,
          "end": 50
        },
        "start": 45,
        "end": 50
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ifelse",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 68
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "commentedParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 100
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 101,
                  "end": 102
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 104,
                  "end": 105
                }
              ],
              "optional": false,
              "start": 81,
              "end": 106
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commentedParameters",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 158
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 159,
                        "end": 160
                      },
                      {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 162,
                        "end": 163
                      }
                    ],
                    "optional": false,
                    "start": 139,
                    "end": 164
                  },
                  "directive": null,
                  "start": 139,
                  "end": 165
                }
              ],
              "start": 108,
              "end": 192
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commentedParameters",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 227
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 228,
                        "end": 229
                      },
                      {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 231,
                        "end": 232
                      }
                    ],
                    "optional": false,
                    "start": 208,
                    "end": 233
                  },
                  "directive": null,
                  "start": 208,
                  "end": 234
                }
              ],
              "start": 198,
              "end": 240
            },
            "start": 77,
            "end": 240
          }
        ],
        "start": 71,
        "end": 242
      },
      "expression": false,
      "start": 53,
      "end": 242
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 242
}
```
