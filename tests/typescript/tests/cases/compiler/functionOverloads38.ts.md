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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 30,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 30,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 17,
              "end": 30,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 17,
                "end": 28,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 18,
                    "end": 27,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 18,
                      "end": 19,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 19,
                      "end": 26,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 20,
                        "end": 26
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 38,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 32,
          "end": 38
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 40,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 52,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 53,
          "end": 71,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 56,
            "end": 71,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 57,
              "end": 71,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 57,
                "end": 69,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 58,
                    "end": 68,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 59,
                      "end": 67,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 60,
                        "end": 67
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 72,
        "end": 79,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 73,
          "end": 79
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 81,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 93,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 94,
          "end": 108,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 97,
            "end": 108,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 98,
              "end": 108,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 98,
                "end": 106,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 99,
                    "end": 105,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 104,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 101,
                        "end": 104
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 109,
        "end": 113,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 110,
          "end": 113
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 113,
        "end": 127,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 115,
            "end": 125,
            "argument": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 149,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 136,
            "end": 148,
            "callee": {
              "type": "Identifier",
              "start": 136,
              "end": 139,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 140,
                "end": 147,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 141,
                    "end": 146,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 142,
                        "end": 145,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 142,
                          "end": 143,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 144,
                          "end": 145,
                          "value": 1,
                          "raw": "1"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                ]
              }
            ],
            "optional": false
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
