__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 14,
            "decorators": [],
            "name": "additional",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 17,
            "end": 19,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ForOfStatement",
      "start": 21,
      "end": 110,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 110,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 65,
            "end": 108,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 65,
              "end": 107,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 65,
                "end": 75,
                "decorators": [],
                "name": "additional",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ArrayExpression",
                "start": 78,
                "end": 107,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 79,
                    "end": 92,
                    "argument": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 92,
                      "decorators": [],
                      "name": "additional",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 94,
                    "end": 106,
                    "decorators": [],
                    "name": "subcomponent",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ]
              }
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 44,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 32,
            "end": 44,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 44,
              "decorators": [],
              "name": "subcomponent",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 48,
        "end": 57,
        "elements": [
          {
            "type": "Literal",
            "start": 49,
            "end": 50,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 52,
            "end": 53,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 55,
            "end": 56,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
