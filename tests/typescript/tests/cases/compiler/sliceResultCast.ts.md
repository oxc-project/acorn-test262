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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
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
                    ],
                    "start": 15,
                    "end": 31
                  },
                  {
                    "type": "TSTupleType",
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
                    ],
                    "start": 34,
                    "end": 58
                  }
                ],
                "start": 15,
                "end": 58
              },
              "start": 13,
              "end": 58
            },
            "start": 12,
            "end": 58
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 58
        }
      ],
      "declare": true,
      "start": 0,
      "end": 59
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSAsExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "slice",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 68
            },
            "optional": false,
            "computed": false,
            "start": 61,
            "end": 68
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 69,
              "end": 70
            }
          ],
          "optional": false,
          "start": 61,
          "end": 71
        },
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSStringKeyword",
              "start": 84,
              "end": 90
            },
            "start": 84,
            "end": 92
          },
          "start": 75,
          "end": 92
        },
        "start": 61,
        "end": 92
      },
      "directive": null,
      "start": 61,
      "end": 93
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 93
}
```
