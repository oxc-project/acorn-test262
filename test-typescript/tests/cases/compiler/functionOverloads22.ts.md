__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 149,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 39,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 23,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 23,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 17,
              "end": 23
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 24,
        "end": 38,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 25,
          "end": 38,
          "elementType": {
            "type": "TSTypeLiteral",
            "start": 25,
            "end": 36,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 26,
                "end": 35,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 27,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 28,
                    "end": 34
                  }
                }
              }
            ]
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 40,
      "end": 89,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 52,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 53,
          "end": 63,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 56,
            "end": 63,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 57,
              "end": 63
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 64,
        "end": 88,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 65,
          "end": 88,
          "elementType": {
            "type": "TSTypeLiteral",
            "start": 65,
            "end": 86,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 66,
                "end": 75,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 67,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 68,
                    "end": 74
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 76,
                "end": 85,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 77,
                  "end": 84,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 78,
                    "end": 84
                  }
                }
              }
            ]
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 90,
      "end": 149,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 130,
        "end": 149,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 132,
            "end": 147,
            "argument": {
              "type": "ArrayExpression",
              "start": 139,
              "end": 147,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 140,
                  "end": 146,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 141,
                      "end": 145,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 142,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 143,
                        "end": 145,
                        "raw": "\"\"",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 102,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 103,
          "end": 110,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 106,
            "end": 110,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 107,
              "end": 110
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 111,
        "end": 129,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 112,
          "end": 129,
          "elementType": {
            "type": "TSTypeLiteral",
            "start": 112,
            "end": 127,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 113,
                "end": 119,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 114,
                  "end": 118,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 115,
                    "end": 118
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 119,
                "end": 126,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 121,
                  "end": 125,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 122,
                    "end": 125
                  }
                }
              }
            ]
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
