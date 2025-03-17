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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Thing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 27,
              "name": "thunk",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 50,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 29,
                "end": 50,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 30,
                    "end": 41,
                    "name": "str",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 41,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 35,
                        "end": 41
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 67,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 68,
          "end": 80,
          "name": "thing",
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
                "name": "Thing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "MemberExpression",
                "start": 88,
                "end": 99,
                "object": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 93,
                  "name": "thing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 99,
                  "name": "thunk",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 100,
                  "end": 105,
                  "value": "str",
                  "raw": "\"str\""
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 236,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 235,
        "callee": {
          "type": "Identifier",
          "start": 110,
          "end": 114,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 179,
                  "name": "thunk",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 181,
                  "end": 200,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 182,
                      "end": 193,
                      "name": "str",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 185,
                        "end": 193,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 187,
                          "end": 193
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 198,
                    "end": 200,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 206,
                "end": 232,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 211,
                  "name": "thunk",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 213,
                  "end": 232,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 214,
                      "end": 225,
                      "name": "num",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 217,
                        "end": 225,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 219,
                          "end": 225
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 230,
                    "end": 232,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 361,
      "expression": {
        "type": "CallExpression",
        "start": 238,
        "end": 360,
        "callee": {
          "type": "Identifier",
          "start": 238,
          "end": 242,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 304,
                  "name": "thunk",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 306,
                  "end": 325,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 307,
                      "end": 318,
                      "name": "num",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 310,
                        "end": 318,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 312,
                          "end": 318
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 323,
                    "end": 325,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 331,
                "end": 357,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 336,
                  "name": "thunk",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 338,
                  "end": 357,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 339,
                      "end": 350,
                      "name": "str",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 342,
                        "end": 350,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 344,
                          "end": 350
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 355,
                    "end": 357,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
