__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "thunk",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 27
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 35,
                        "end": 41
                      },
                      "start": 33,
                      "end": 41
                    },
                    "start": 30,
                    "end": 41
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 46,
                    "end": 50
                  },
                  "start": 43,
                  "end": 50
                },
                "start": 29,
                "end": 50
              },
              "start": 27,
              "end": 50
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 51
          }
        ],
        "start": 16,
        "end": 53
      },
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 80
              },
              "typeArguments": null,
              "start": 75,
              "end": 80
            },
            "start": 73,
            "end": 80
          },
          "start": 68,
          "end": 80
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 93
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thunk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 99
                },
                "optional": false,
                "computed": false,
                "start": 88,
                "end": 99
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "str",
                  "raw": "\"str\"",
                  "start": 100,
                  "end": 105
                }
              ],
              "optional": false,
              "start": 88,
              "end": 106
            },
            "directive": null,
            "start": 88,
            "end": 107
          }
        ],
        "start": 82,
        "end": 109
      },
      "expression": false,
      "start": 54,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 114
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thunk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 179
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 187,
                          "end": 193
                        },
                        "start": 185,
                        "end": 193
                      },
                      "start": 182,
                      "end": 193
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 198,
                    "end": 200
                  },
                  "id": null,
                  "generator": false,
                  "start": 181,
                  "end": 200
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 174,
                "end": 200
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thunk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 211
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 219,
                          "end": 225
                        },
                        "start": 217,
                        "end": 225
                      },
                      "start": 214,
                      "end": 225
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 230,
                    "end": 232
                  },
                  "id": null,
                  "generator": false,
                  "start": 213,
                  "end": 232
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 206,
                "end": 232
              }
            ],
            "start": 115,
            "end": 234
          }
        ],
        "optional": false,
        "start": 110,
        "end": 235
      },
      "directive": null,
      "start": 110,
      "end": 236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 238,
          "end": 242
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thunk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 304
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 312,
                          "end": 318
                        },
                        "start": 310,
                        "end": 318
                      },
                      "start": 307,
                      "end": 318
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 323,
                    "end": 325
                  },
                  "id": null,
                  "generator": false,
                  "start": 306,
                  "end": 325
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 299,
                "end": 325
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thunk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 331,
                  "end": 336
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 344,
                          "end": 350
                        },
                        "start": 342,
                        "end": 350
                      },
                      "start": 339,
                      "end": 350
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 355,
                    "end": 357
                  },
                  "id": null,
                  "generator": false,
                  "start": 338,
                  "end": 357
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 331,
                "end": 357
              }
            ],
            "start": 243,
            "end": 359
          }
        ],
        "optional": false,
        "start": 238,
        "end": 360
      },
      "directive": null,
      "start": 238,
      "end": 361
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 361
}
```
