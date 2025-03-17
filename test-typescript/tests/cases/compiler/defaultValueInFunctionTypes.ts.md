__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 58,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 11,
        "end": 57,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 12,
            "end": 45,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 23,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 19,
                  "decorators": [],
                  "name": "first",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 14,
                  "end": 23,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 14,
                    "end": 19,
                    "decorators": [],
                    "name": "first",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 22,
                    "end": 23,
                    "raw": "0",
                    "value": 0
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 27,
                "end": 45,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 29,
                    "end": 43,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 34,
                      "decorators": [],
                      "name": "first",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 35,
                      "end": 43,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 37,
                        "end": 43
                      }
                    }
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 47,
          "end": 57,
          "typeAnnotation": {
            "type": "TSUnknownKeyword",
            "start": 50,
            "end": 57
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 92,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 92,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 67,
                "end": 92,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 68,
                    "end": 81,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 77,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 69,
                        "end": 77,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 71,
                          "end": 77
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 80,
                      "end": 81,
                      "raw": "1",
                      "value": 1
                    },
                    "typeAnnotation": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 83,
                  "end": 92,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 86,
                    "end": 92
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 102,
            "end": 139,
            "expression": {
              "type": "Identifier",
              "start": 129,
              "end": 138,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 103,
              "end": 127,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 104,
                  "end": 119,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 114,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 106,
                      "end": 114,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 108,
                        "end": 114
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 117,
                    "end": 119,
                    "raw": "\"\"",
                    "value": ""
                  },
                  "typeAnnotation": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 121,
                "end": 127,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 124,
                  "end": 127
                }
              },
              "typeParameters": null
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
