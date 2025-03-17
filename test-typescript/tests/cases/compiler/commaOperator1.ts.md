__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 34,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "name": "v1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "SequenceExpression",
            "start": 10,
            "end": 33,
            "expressions": [
              {
                "type": "SequenceExpression",
                "start": 11,
                "end": 18,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 11,
                    "end": 12,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 14,
                    "end": 15,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 17,
                    "end": 18,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 21,
                "end": 22,
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "start": 24,
                "end": 25,
                "value": 5,
                "raw": "5"
              },
              {
                "type": "SequenceExpression",
                "start": 28,
                "end": 32,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 28,
                    "end": 29,
                    "value": 6,
                    "raw": "6"
                  },
                  {
                    "type": "Literal",
                    "start": 31,
                    "end": 32,
                    "value": 7,
                    "raw": "7"
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 36,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 47,
        "name": "f1",
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
        "start": 50,
        "end": 89,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 56,
            "end": 66,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 65,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 64,
                  "end": 65,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 71,
            "end": 87,
            "argument": {
              "type": "SequenceExpression",
              "start": 78,
              "end": 86,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 81,
                  "end": 83,
                  "name": "v1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
