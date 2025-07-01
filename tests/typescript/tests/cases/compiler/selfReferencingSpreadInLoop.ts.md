__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "additional",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 14
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 17,
            "end": 19
          },
          "definite": false,
          "start": 4,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "subcomponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 44
            },
            "init": null,
            "definite": false,
            "start": 32,
            "end": 44
          }
        ],
        "declare": false,
        "start": 26,
        "end": 44
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 49,
            "end": 50
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 52,
            "end": 53
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 55,
            "end": 56
          }
        ],
        "start": 48,
        "end": 57
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "additional",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 75
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "additional",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 82,
                      "end": 92
                    },
                    "start": 79,
                    "end": 92
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "subcomponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 106
                  }
                ],
                "start": 78,
                "end": 107
              },
              "start": 65,
              "end": 107
            },
            "directive": null,
            "start": 65,
            "end": 108
          }
        ],
        "start": 59,
        "end": 110
      },
      "start": 21,
      "end": 110
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
