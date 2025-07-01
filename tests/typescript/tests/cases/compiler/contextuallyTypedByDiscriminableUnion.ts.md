__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ADT",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 21
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 23,
                      "end": 26
                    },
                    "start": 23,
                    "end": 26
                  },
                  "start": 21,
                  "end": 26
                },
                "accessibility": null,
                "static": false,
                "start": 17,
                "end": 27
              },
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 38
                },
                "computed": false,
                "optional": false,
                "kind": "method",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 42,
                        "end": 48
                      },
                      "start": 40,
                      "end": 48
                    },
                    "start": 39,
                    "end": 48
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 51,
                    "end": 57
                  },
                  "start": 49,
                  "end": 57
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 32,
                "end": 58
              }
            ],
            "start": 11,
            "end": 60
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 73
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 75,
                      "end": 78
                    },
                    "start": 75,
                    "end": 78
                  },
                  "start": 73,
                  "end": 78
                },
                "accessibility": null,
                "static": false,
                "start": 69,
                "end": 79
              },
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 90
                },
                "computed": false,
                "optional": false,
                "kind": "method",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 94,
                        "end": 100
                      },
                      "start": 92,
                      "end": 100
                    },
                    "start": 91,
                    "end": 100
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 103,
                    "end": 109
                  },
                  "start": 101,
                  "end": 109
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 84,
                "end": 110
              }
            ],
            "start": 63,
            "end": 112
          }
        ],
        "start": 11,
        "end": 112
      },
      "declare": false,
      "start": 0,
      "end": 113
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invoke",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 131
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ADT",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 141
              },
              "typeArguments": null,
              "start": 138,
              "end": 141
            },
            "start": 136,
            "end": 141
          },
          "start": 132,
          "end": 141
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 157
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 162
                },
                "optional": false,
                "computed": false,
                "start": 153,
                "end": 162
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 167,
                "end": 170
              },
              "start": 153,
              "end": 170
            },
            "consequent": {
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 182,
                        "end": 186
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 193
                      },
                      "optional": false,
                      "computed": false,
                      "start": 182,
                      "end": 193
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 194,
                        "end": 196
                      }
                    ],
                    "optional": false,
                    "start": 182,
                    "end": 197
                  },
                  "directive": null,
                  "start": 182,
                  "end": 198
                }
              ],
              "start": 172,
              "end": 204
            },
            "alternate": {
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
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 224,
                        "end": 228
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 229,
                        "end": 235
                      },
                      "optional": false,
                      "computed": false,
                      "start": 224,
                      "end": 235
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 236,
                        "end": 238
                      }
                    ],
                    "optional": false,
                    "start": 224,
                    "end": 239
                  },
                  "directive": null,
                  "start": 224,
                  "end": 240
                }
              ],
              "start": 214,
              "end": 246
            },
            "start": 149,
            "end": 246
          }
        ],
        "start": 143,
        "end": 248
      },
      "expression": false,
      "start": 116,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "invoke",
          "optional": false,
          "typeAnnotation": null,
          "start": 250,
          "end": 256
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 267
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 269,
                  "end": 272
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 263,
                "end": 272
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 284
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 286
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "UnaryExpression",
                          "operator": "+",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 306,
                            "end": 307
                          },
                          "prefix": true,
                          "start": 305,
                          "end": 307
                        },
                        "start": 298,
                        "end": 308
                      }
                    ],
                    "start": 288,
                    "end": 314
                  },
                  "expression": false,
                  "start": 284,
                  "end": 314
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 278,
                "end": 314
              }
            ],
            "start": 257,
            "end": 316
          }
        ],
        "optional": false,
        "start": 250,
        "end": 317
      },
      "directive": null,
      "start": 250,
      "end": 318
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "kind",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 330
          },
          "init": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 333,
            "end": 336
          },
          "definite": false,
          "start": 326,
          "end": 336
        }
      ],
      "declare": false,
      "start": 320,
      "end": 336
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "invoke",
          "optional": false,
          "typeAnnotation": null,
          "start": 337,
          "end": 343
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 354
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 354
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 350,
                "end": 354
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 360,
                  "end": 366
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 367,
                      "end": 368
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "UnaryExpression",
                          "operator": "+",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 388,
                            "end": 389
                          },
                          "prefix": true,
                          "start": 387,
                          "end": 389
                        },
                        "start": 380,
                        "end": 390
                      }
                    ],
                    "start": 370,
                    "end": 396
                  },
                  "expression": false,
                  "start": 366,
                  "end": 396
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 360,
                "end": 396
              }
            ],
            "start": 344,
            "end": 398
          }
        ],
        "optional": false,
        "start": 337,
        "end": 399
      },
      "directive": null,
      "start": 337,
      "end": 399
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 399
}
```
