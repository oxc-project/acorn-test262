__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 11,
                    "end": 12
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 14,
                    "end": 15
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 17,
                    "end": 18
                  }
                ],
                "start": 11,
                "end": 18
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 21,
                "end": 22
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 24,
                "end": 25
              },
              {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 28,
                    "end": 29
                  },
                  {
                    "type": "Literal",
                    "value": 7,
                    "raw": "7",
                    "start": 31,
                    "end": 32
                  }
                ],
                "start": 28,
                "end": 32
              }
            ],
            "start": 10,
            "end": 33
          },
          "definite": false,
          "start": 4,
          "end": 34
        }
      ],
      "declare": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 47
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 61
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 64,
                  "end": 65
                },
                "definite": false,
                "start": 60,
                "end": 65
              }
            ],
            "declare": false,
            "start": 56,
            "end": 66
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 79
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 83
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 86
                }
              ],
              "start": 78,
              "end": 86
            },
            "start": 71,
            "end": 87
          }
        ],
        "start": 50,
        "end": 89
      },
      "expression": false,
      "start": 36,
      "end": 89
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 89
}
```
