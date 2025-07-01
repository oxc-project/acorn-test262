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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 61
          },
          "init": null,
          "definite": false,
          "start": 60,
          "end": 61
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 64
          },
          "init": null,
          "definite": false,
          "start": 63,
          "end": 64
        }
      ],
      "declare": false,
      "start": 56,
      "end": 65
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 74
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 70,
                  "end": 74
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 76
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 77
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "abc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 86
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 88,
                    "end": 89
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 83,
                  "end": 89
                }
              ],
              "start": 81,
              "end": 91
            }
          ],
          "start": 80,
          "end": 92
        },
        "start": 67,
        "end": 92
      },
      "directive": null,
      "start": 67,
      "end": 93
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 106
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 102,
                "end": 106
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 108
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 109
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "abc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 120
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 122,
                      "end": 123
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 117,
                    "end": 123
                  }
                ],
                "start": 115,
                "end": 125
              }
            ],
            "start": 114,
            "end": 126
          }
        ],
        "start": 113,
        "end": 127
      },
      "body": {
        "type": "EmptyStatement",
        "start": 129,
        "end": 130
      },
      "start": 94,
      "end": 130
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 130
}
```
