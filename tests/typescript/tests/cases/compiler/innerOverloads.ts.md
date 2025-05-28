__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "outer",
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
        "start": 17,
        "end": 157,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 23,
            "end": 48,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 37,
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            ],
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 68,
            "end": 93,
            "id": {
              "type": "Identifier",
              "start": 77,
              "end": 82,
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            ],
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 98,
            "end": 133,
            "id": {
              "type": "Identifier",
              "start": 107,
              "end": 112,
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            ],
            "returnType": null,
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
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "ReturnStatement",
            "start": 139,
            "end": 155,
            "argument": {
              "type": "CallExpression",
              "start": 146,
              "end": 154,
              "callee": {
                "type": "Identifier",
                "start": 146,
                "end": 151,
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 152,
                  "end": 153,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 175,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 174,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 167,
            "end": 174,
            "callee": {
              "type": "Identifier",
              "start": 167,
              "end": 172,
              "decorators": [],
              "name": "outer",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
