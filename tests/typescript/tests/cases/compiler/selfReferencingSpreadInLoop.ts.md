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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 19,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 21,
      "end": 110,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 44,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 32,
            "end": 44,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 44,
              "decorators": [],
              "name": "subcomponent",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
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
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 52,
            "end": 53,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 55,
            "end": 56,
            "value": 3,
            "raw": "3"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 110,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 65,
            "end": 108,
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
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
