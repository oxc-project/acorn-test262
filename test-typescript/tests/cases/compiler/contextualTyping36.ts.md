__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 10,
            "end": 65,
            "expression": {
              "type": "ArrayExpression",
              "start": 29,
              "end": 65,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 30,
                  "end": 39,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 32,
                      "end": 37,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 32,
                        "end": 34,
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
                        "start": 36,
                        "end": 37,
                        "raw": "4",
                        "value": 4,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeAssertion",
                  "start": 41,
                  "end": 64,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 59,
                    "end": 63,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 42,
                    "end": 57,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 44,
                        "end": 55,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 44,
                          "end": 46,
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
                          "start": 46,
                          "end": 54,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 48,
                            "end": 54
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 11,
              "end": 28,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 11,
                "end": 26,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 13,
                    "end": 24,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13,
                      "end": 15,
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
                      "start": 15,
                      "end": 23,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 17,
                        "end": 23
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
