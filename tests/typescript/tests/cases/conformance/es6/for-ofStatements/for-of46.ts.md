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
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 18,
                "end": 25
              },
              "start": 16,
              "end": 25
            },
            "start": 15,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 44
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 47,
                        "end": 49
                      },
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 51,
                        "end": 55
                      }
                    ],
                    "start": 46,
                    "end": 56
                  }
                ],
                "start": 45,
                "end": 57
              }
            ],
            "start": 37,
            "end": 58
          },
          "definite": false,
          "start": 31,
          "end": 58
        }
      ],
      "declare": false,
      "start": 27,
      "end": 59
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "right": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 70,
              "end": 75
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 75
          },
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 81,
              "end": 83
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 83
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 84
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 91
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "directive": null,
            "start": 99,
            "end": 101
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "directive": null,
            "start": 106,
            "end": 108
          }
        ],
        "start": 93,
        "end": 110
      },
      "start": 60,
      "end": 110
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
