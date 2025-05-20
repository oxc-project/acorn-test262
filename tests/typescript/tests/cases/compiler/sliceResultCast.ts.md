__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 58,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 58,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 15,
                "end": 58,
                "types": [
                  {
                    "type": "TSTupleType",
                    "start": 15,
                    "end": 31,
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 16,
                        "end": 22
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 24,
                        "end": 30
                      }
                    ]
                  },
                  {
                    "type": "TSTupleType",
                    "start": 34,
                    "end": 58,
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 35,
                        "end": 41
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 43,
                        "end": 49
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 93,
      "directive": null,
      "expression": {
        "type": "TSAsExpression",
        "start": 61,
        "end": 92,
        "expression": {
          "type": "CallExpression",
          "start": 61,
          "end": 71,
          "arguments": [
            {
              "type": "Literal",
              "start": 69,
              "end": 70,
              "raw": "1",
              "value": 1
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 61,
            "end": 68,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 63,
              "end": 68,
              "decorators": [],
              "name": "slice",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        },
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 75,
          "end": 92,
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "start": 84,
            "end": 92,
            "elementType": {
              "type": "TSStringKeyword",
              "start": 84,
              "end": 90
            }
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
