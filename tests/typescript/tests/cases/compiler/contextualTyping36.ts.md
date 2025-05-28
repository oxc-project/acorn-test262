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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 65,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13,
                      "end": 15,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 15,
                      "end": 23,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 17,
                        "end": 23
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 32,
                        "end": 34,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 36,
                        "end": 37,
                        "value": 4,
                        "raw": "4"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                {
                  "type": "TSTypeAssertion",
                  "start": 41,
                  "end": 64,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 42,
                    "end": 57,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 44,
                        "end": 55,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 44,
                          "end": 46,
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 46,
                          "end": 54,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 48,
                            "end": 54
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 59,
                    "end": 63,
                    "properties": []
                  }
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
