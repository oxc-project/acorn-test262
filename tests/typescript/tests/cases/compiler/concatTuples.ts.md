__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 27,
            "decorators": [],
            "name": "ijs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 27,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 9,
                "end": 27,
                "elementType": {
                  "type": "TSTupleType",
                  "start": 9,
                  "end": 25,
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
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 30,
            "end": 38,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 31,
                "end": 37,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 32,
                    "end": 33,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 35,
                    "end": 36,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 75,
      "expression": {
        "type": "AssignmentExpression",
        "start": 40,
        "end": 74,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 40,
          "end": 43,
          "decorators": [],
          "name": "ijs",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 46,
          "end": 74,
          "callee": {
            "type": "MemberExpression",
            "start": 46,
            "end": 56,
            "object": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "decorators": [],
              "name": "ijs",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 50,
              "end": 56,
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 57,
              "end": 73,
              "elements": [
                {
                  "type": "ArrayExpression",
                  "start": 58,
                  "end": 64,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 59,
                      "end": 60,
                      "value": 3,
                      "raw": "3"
                    },
                    {
                      "type": "Literal",
                      "start": 62,
                      "end": 63,
                      "value": 4,
                      "raw": "4"
                    }
                  ]
                },
                {
                  "type": "ArrayExpression",
                  "start": 66,
                  "end": 72,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 67,
                      "end": 68,
                      "value": 5,
                      "raw": "5"
                    },
                    {
                      "type": "Literal",
                      "start": 70,
                      "end": 71,
                      "value": 6,
                      "raw": "6"
                    }
                  ]
                }
              ]
            }
          ],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
