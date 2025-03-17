__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "R1",
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
        "start": 14,
        "end": 33,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 17,
            "end": 22,
            "expression": {
              "type": "CallExpression",
              "start": 17,
              "end": 21,
              "callee": {
                "type": "Identifier",
                "start": 17,
                "end": 19,
                "name": "R1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 24,
            "end": 31,
            "argument": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 35,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 46,
        "name": "R2",
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
        "start": 49,
        "end": 58,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 51,
            "end": 56,
            "expression": {
              "type": "CallExpression",
              "start": 51,
              "end": 55,
              "callee": {
                "type": "Identifier",
                "start": 51,
                "end": 53,
                "name": "R2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 60,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 71,
        "name": "R3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 72,
          "end": 80,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 80,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 74,
              "end": 80
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 137,
        "body": [
          {
            "type": "IfStatement",
            "start": 85,
            "end": 135,
            "test": {
              "type": "BinaryExpression",
              "start": 89,
              "end": 95,
              "left": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 94,
                "end": 95,
                "value": 0,
                "raw": "0"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 97,
              "end": 113,
              "body": []
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 120,
              "end": 135,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 124,
                  "end": 132,
                  "expression": {
                    "type": "CallExpression",
                    "start": 124,
                    "end": 131,
                    "callee": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 126,
                      "name": "R3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "UpdateExpression",
                        "start": 127,
                        "end": 130,
                        "operator": "--",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 128,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
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
