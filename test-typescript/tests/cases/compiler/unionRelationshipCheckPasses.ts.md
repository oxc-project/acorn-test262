__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 95,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 49,
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 49,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 12,
                "end": 49,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 12,
                    "end": 31,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 14,
                        "end": 29,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 14,
                          "end": 17,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 18,
                          "end": 29,
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "start": 20,
                            "end": 29
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 34,
                    "end": 49,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 36,
                        "end": 47,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 36,
                          "end": 39,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 39,
                          "end": 47,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 41,
                            "end": 47
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 52,
            "end": 95,
            "expression": {
              "type": "TSAsExpression",
              "start": 52,
              "end": 63,
              "expression": {
                "type": "Literal",
                "start": 52,
                "end": 56,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 60,
                "end": 63
              }
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 67,
              "end": 95,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 69,
                  "end": 93,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 72,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 73,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 75,
                      "end": 93,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 75,
                          "end": 81
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 84,
                          "end": 93
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
