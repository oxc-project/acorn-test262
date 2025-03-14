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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "decorators": [],
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 68,
              "end": 76,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "RestElement",
                  "start": 70,
                  "end": 74,
                  "argument": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 74,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          ],
          "optional": false
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 86,
                    "decorators": [],
                    "name": "abc",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 88,
                    "end": 89,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            }
          ]
        }
      }
    },
    {
      "type": "ForOfStatement",
      "start": 94,
      "end": 130,
      "await": false,
      "body": {
        "type": "EmptyStatement",
        "start": 129,
        "end": 130
      },
      "left": {
        "type": "ArrayPattern",
        "start": 99,
        "end": 109,
        "decorators": [],
        "elements": [
          {
            "type": "ObjectPattern",
            "start": 100,
            "end": 108,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "RestElement",
                "start": 102,
                "end": 106,
                "argument": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "optional": false
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 120,
                      "decorators": [],
                      "name": "abc",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 122,
                      "end": 123,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
