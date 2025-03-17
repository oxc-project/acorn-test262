__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 130,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 61,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 93,
      "expression": {
        "type": "AssignmentExpression",
        "start": 67,
        "end": 92,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 67,
          "end": 77,
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 68,
              "end": 76,
              "properties": [
                {
                  "type": "RestElement",
                  "start": 70,
                  "end": 74,
                  "argument": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 74,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 80,
          "end": 92,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 81,
              "end": 91,
              "properties": [
                {
                  "type": "Property",
                  "start": 83,
                  "end": 89,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 86,
                    "name": "abc",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 88,
                    "end": 89,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ForOfStatement",
      "start": 94,
      "end": 130,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 99,
        "end": 109,
        "elements": [
          {
            "type": "ObjectPattern",
            "start": 100,
            "end": 108,
            "properties": [
              {
                "type": "RestElement",
                "start": 102,
                "end": 106,
                "argument": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 113,
        "end": 127,
        "elements": [
          {
            "type": "ArrayExpression",
            "start": 114,
            "end": 126,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 115,
                "end": 125,
                "properties": [
                  {
                    "type": "Property",
                    "start": 117,
                    "end": 123,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 120,
                      "name": "abc",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 122,
                      "end": 123,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          }
        ]
      },
      "body": {
        "type": "EmptyStatement",
        "start": 129,
        "end": 130
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
