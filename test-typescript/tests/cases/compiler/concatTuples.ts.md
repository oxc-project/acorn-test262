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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "definite": false,
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
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 35,
                    "end": 36,
                    "raw": "2",
                    "value": 2,
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
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 40,
      "end": 75,
      "directive": null,
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
                      "raw": "3",
                      "value": 3,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 62,
                      "end": 63,
                      "raw": "4",
                      "value": 4,
                      "regex": null,
                      "bigint": null
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
                      "raw": "5",
                      "value": 5,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 70,
                      "end": 71,
                      "raw": "6",
                      "value": 6,
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              ]
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 46,
            "end": 56,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "decorators": [],
              "name": "ijs",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 50,
              "end": 56,
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
