__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 148,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 18,
                      "end": 19,
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
                      "start": 19,
                      "end": 26,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 20,
                        "end": 26
                      }
                    }
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
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 40,
      "end": 76,
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
          "end": 67,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 56,
            "end": 67,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 57,
              "end": 67,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 57,
                "end": 65,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 58,
                    "end": 64,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
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
                      "start": 59,
                      "end": 63,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 60,
                        "end": 63
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 68,
        "end": 75,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 69,
          "end": 75
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 123,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 109,
        "end": 123,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 111,
            "end": 121,
            "argument": {
              "type": "Identifier",
              "start": 118,
              "end": 121,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 89,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 90,
          "end": 104,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 93,
            "end": 104,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 94,
              "end": 104,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 94,
                "end": 102,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 95,
                    "end": 101,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
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
                      "start": 96,
                      "end": 100,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 97,
                        "end": 100
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 105,
        "end": 109,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 106,
          "end": 109
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 129,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 132,
            "end": 146,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 136,
                "end": 145,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 137,
                    "end": 144,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 138,
                        "end": 143,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 139,
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
                          "start": 140,
                          "end": 143,
                          "raw": "'s'",
                          "value": "s"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 132,
              "end": 135,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
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
