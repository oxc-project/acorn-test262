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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 11,
        "end": 57,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 12,
            "end": 45,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 23,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 19,
                  "name": "first",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 14,
                  "end": 23,
                  "left": {
                    "type": "Identifier",
                    "start": 14,
                    "end": 19,
                    "name": "first",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 22,
                    "end": 23,
                    "value": 0,
                    "raw": "0"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
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
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 34,
                      "name": "first",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 35,
                      "end": 43,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 37,
                        "end": 43
                      }
                    },
                    "accessibility": null,
                    "static": false
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
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 92,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 92,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 67,
                "end": 92,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 68,
                    "end": 81,
                    "left": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 77,
                      "name": "a",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 69,
                        "end": 77,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 71,
                          "end": 77
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 80,
                      "end": 81,
                      "value": 1,
                      "raw": "1"
                    },
                    "decorators": [],
                    "optional": false,
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
                }
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 102,
            "end": 139,
            "expression": {
              "type": "Identifier",
              "start": 129,
              "end": 138,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 103,
              "end": 127,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 104,
                  "end": 119,
                  "left": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 114,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 106,
                      "end": 114,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 108,
                        "end": 114
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 117,
                    "end": 119,
                    "value": "",
                    "raw": "\"\""
                  },
                  "decorators": [],
                  "optional": false,
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
