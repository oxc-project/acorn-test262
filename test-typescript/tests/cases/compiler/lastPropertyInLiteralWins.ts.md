__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 362,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 53,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 53,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 51,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 27,
              "decorators": [],
              "name": "thunk",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 50,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 29,
                "end": 50,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 30,
                    "end": 41,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 41,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 35,
                        "end": 41
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 46,
                    "end": 50
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Thing",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 109,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 109,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 88,
            "end": 107,
            "expression": {
              "type": "CallExpression",
              "start": 88,
              "end": 106,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 100,
                  "end": 105,
                  "raw": "\"str\"",
                  "value": "str"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 88,
                "end": 99,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 93,
                  "decorators": [],
                  "name": "thing",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 99,
                  "decorators": [],
                  "name": "thunk",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 67,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 68,
          "end": 80,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 80,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 75,
              "end": 80,
              "typeName": {
                "type": "Identifier",
                "start": 75,
                "end": 80,
                "decorators": [],
                "name": "Thing",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 236,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 235,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 115,
            "end": 234,
            "properties": [
              {
                "type": "Property",
                "start": 174,
                "end": 200,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 179,
                  "decorators": [],
                  "name": "thunk",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 181,
                  "end": 200,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 198,
                    "end": 200,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 182,
                      "end": 193,
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 185,
                        "end": 193,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 187,
                          "end": 193
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 206,
                "end": 232,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 211,
                  "decorators": [],
                  "name": "thunk",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 213,
                  "end": 232,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 230,
                    "end": 232,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 214,
                      "end": 225,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 217,
                        "end": 225,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 219,
                          "end": 225
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 110,
          "end": 114,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 361,
      "expression": {
        "type": "CallExpression",
        "start": 238,
        "end": 360,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 243,
            "end": 359,
            "properties": [
              {
                "type": "Property",
                "start": 299,
                "end": 325,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 304,
                  "decorators": [],
                  "name": "thunk",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 306,
                  "end": 325,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 323,
                    "end": 325,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 307,
                      "end": 318,
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 310,
                        "end": 318,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 312,
                          "end": 318
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 331,
                "end": 357,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 336,
                  "decorators": [],
                  "name": "thunk",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 338,
                  "end": 357,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 355,
                    "end": 357,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 339,
                      "end": 350,
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 342,
                        "end": 350,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 344,
                          "end": 350
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 238,
          "end": 242,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
