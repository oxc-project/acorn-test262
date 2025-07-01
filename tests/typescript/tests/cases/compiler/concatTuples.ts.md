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
            "name": "ijs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 10,
                      "end": 16
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 18,
                      "end": 24
                    }
                  ],
                  "start": 9,
                  "end": 25
                },
                "start": 9,
                "end": 27
              },
              "start": 7,
              "end": 27
            },
            "start": 4,
            "end": 27
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 32,
                    "end": 33
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 35,
                    "end": 36
                  }
                ],
                "start": 31,
                "end": 37
              }
            ],
            "start": 30,
            "end": 38
          },
          "definite": false,
          "start": 4,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ijs",
          "optional": false,
          "typeAnnotation": null,
          "start": 40,
          "end": 43
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ijs",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 49
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 56
            },
            "optional": false,
            "computed": false,
            "start": 46,
            "end": 56
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
                      "value": 3,
                      "raw": "3",
                      "start": 59,
                      "end": 60
                    },
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 62,
                      "end": 63
                    }
                  ],
                  "start": 58,
                  "end": 64
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 67,
                      "end": 68
                    },
                    {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 70,
                      "end": 71
                    }
                  ],
                  "start": 66,
                  "end": 72
                }
              ],
              "start": 57,
              "end": 73
            }
          ],
          "optional": false,
          "start": 46,
          "end": 74
        },
        "start": 40,
        "end": 74
      },
      "directive": null,
      "start": 40,
      "end": 75
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 75
}
```
