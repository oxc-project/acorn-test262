__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
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
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 14,
                    "end": 15,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 17,
                    "end": 18,
                    "raw": "3",
                    "value": 3,
                    "regex": null,
                    "bigint": null
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 21,
                "end": 22,
                "raw": "4",
                "value": 4,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 24,
                "end": 25,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
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
                    "raw": "6",
                    "value": 6,
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 31,
                    "end": 32,
                    "raw": "7",
                    "value": 7,
                    "regex": null,
                    "bigint": null
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 36,
      "end": 89,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 64,
                  "end": 65,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 81,
                  "end": 83,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 47,
        "decorators": [],
        "name": "f1",
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
