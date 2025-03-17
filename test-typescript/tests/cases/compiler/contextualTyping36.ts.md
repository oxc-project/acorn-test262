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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 32,
                        "end": 34,
                        "name": "id",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 36,
                        "end": 37,
                        "value": 4,
                        "raw": "4"
                      },
                      "kind": "init",
                      "optional": false
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 44,
                          "end": 46,
                          "name": "id",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13,
                      "end": 15,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
