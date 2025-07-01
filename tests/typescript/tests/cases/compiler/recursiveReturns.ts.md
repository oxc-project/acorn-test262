__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "R1",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 19
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 17,
              "end": 21
            },
            "directive": null,
            "start": 17,
            "end": 22
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 24,
            "end": 31
          }
        ],
        "start": 14,
        "end": 33
      },
      "expression": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R2",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 46
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "R2",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 53
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 51,
              "end": 55
            },
            "directive": null,
            "start": 51,
            "end": 56
          }
        ],
        "start": 49,
        "end": 58
      },
      "expression": false,
      "start": 35,
      "end": 58
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R3",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 71
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 74,
              "end": 80
            },
            "start": 73,
            "end": 80
          },
          "start": 72,
          "end": 80
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 90
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 94,
                "end": 95
              },
              "start": 89,
              "end": 95
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 97,
              "end": 113
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
                      "name": "R3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 124,
                      "end": 126
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "UpdateExpression",
                        "operator": "--",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 127,
                          "end": 128
                        },
                        "start": 127,
                        "end": 130
                      }
                    ],
                    "optional": false,
                    "start": 124,
                    "end": 131
                  },
                  "directive": null,
                  "start": 124,
                  "end": 132
                }
              ],
              "start": 120,
              "end": 135
            },
            "start": 85,
            "end": 135
          }
        ],
        "start": 82,
        "end": 137
      },
      "expression": false,
      "start": 60,
      "end": 137
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 137
}
```
