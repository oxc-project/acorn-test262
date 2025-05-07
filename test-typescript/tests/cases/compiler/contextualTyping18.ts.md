__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 21,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 9,
                "end": 21,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 10,
                    "end": 20,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 10,
                      "end": 12,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 12,
                      "end": 19,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 13,
                        "end": 19
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 24,
            "end": 43,
            "expression": {
              "type": "ObjectExpression",
              "start": 39,
              "end": 42,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 25,
              "end": 37,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 26,
                  "end": 36,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 28,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 29,
                      "end": 35
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 59,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 45,
        "end": 58,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 45,
          "end": 48,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 51,
          "end": 58,
          "properties": [
            {
              "type": "Property",
              "start": 52,
              "end": 57,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 52,
                "end": 54,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 56,
                "end": 57,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
