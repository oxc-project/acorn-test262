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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 58,
            "name": "x",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 93,
      "expression": {
        "type": "TSAsExpression",
        "start": 61,
        "end": 92,
        "expression": {
          "type": "CallExpression",
          "start": 61,
          "end": 71,
          "callee": {
            "type": "MemberExpression",
            "start": 61,
            "end": 68,
            "object": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 63,
              "end": 68,
              "name": "slice",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 69,
              "end": 70,
              "value": 1,
              "raw": "1"
            }
          ],
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
