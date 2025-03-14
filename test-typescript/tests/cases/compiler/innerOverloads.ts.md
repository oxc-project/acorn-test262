__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 157,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 157,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 23,
            "end": 48,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 37,
              "decorators": [],
              "name": "inner",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 38,
                "end": 46,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 46,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 40,
                    "end": 46
                  }
                }
              }
            ]
          },
          {
            "type": "TSDeclareFunction",
            "start": 68,
            "end": 93,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 77,
              "end": 82,
              "decorators": [],
              "name": "inner",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 83,
                "end": 91,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 84,
                  "end": 91,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 85,
                    "end": 91
                  }
                }
              }
            ]
          },
          {
            "type": "FunctionDeclaration",
            "start": 98,
            "end": 133,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 120,
              "end": 133,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 122,
                  "end": 131,
                  "argument": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 107,
              "end": 112,
              "decorators": [],
              "name": "inner",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 113,
                "end": 118,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 114,
                  "end": 118,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 115,
                    "end": 118
                  }
                }
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 139,
            "end": 155,
            "argument": {
              "type": "CallExpression",
              "start": 146,
              "end": 154,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 152,
                  "end": 153,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 146,
                "end": 151,
                "decorators": [],
                "name": "inner",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "outer",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 174,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 167,
            "end": 174,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 167,
              "end": 172,
              "decorators": [],
              "name": "outer",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
