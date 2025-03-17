__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 400,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "ADT",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 11,
        "end": 112,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 11,
            "end": 60,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 17,
                "end": 27,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 21,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 21,
                  "end": 26,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 23,
                    "end": 26,
                    "literal": {
                      "type": "Literal",
                      "start": 23,
                      "end": 26,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSMethodSignature",
                "start": 32,
                "end": 58,
                "key": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 38,
                  "name": "method",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "method",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 39,
                    "end": 48,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 40,
                      "end": 48,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 42,
                        "end": 48
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 49,
                  "end": 57,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 51,
                    "end": 57
                  }
                },
                "accessibility": null,
                "readonly": false,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 63,
            "end": 112,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 69,
                "end": 79,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 73,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 73,
                  "end": 78,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 75,
                    "end": 78,
                    "literal": {
                      "type": "Literal",
                      "start": 75,
                      "end": 78,
                      "value": "b",
                      "raw": "\"b\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSMethodSignature",
                "start": 84,
                "end": 110,
                "key": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 90,
                  "name": "method",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false,
                "kind": "method",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 91,
                    "end": 100,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 100,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 94,
                        "end": 100
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 101,
                  "end": 109,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 103,
                    "end": 109
                  }
                },
                "accessibility": null,
                "readonly": false,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 131,
        "name": "invoke",
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
          "start": 132,
          "end": 141,
          "name": "item",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 136,
            "end": 141,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 141,
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 141,
                "name": "ADT",
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
        "start": 143,
        "end": 248,
        "body": [
          {
            "type": "IfStatement",
            "start": 149,
            "end": 246,
            "test": {
              "type": "BinaryExpression",
              "start": 153,
              "end": 170,
              "left": {
                "type": "MemberExpression",
                "start": 153,
                "end": 162,
                "object": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 157,
                  "name": "item",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 162,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 167,
                "end": 170,
                "value": "a",
                "raw": "\"a\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 172,
              "end": 204,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 182,
                  "end": 198,
                  "expression": {
                    "type": "CallExpression",
                    "start": 182,
                    "end": 197,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 182,
                      "end": 193,
                      "object": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 186,
                        "name": "item",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 193,
                        "name": "method",
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
                        "start": 194,
                        "end": 196,
                        "value": "",
                        "raw": "\"\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 214,
              "end": 246,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 224,
                  "end": 240,
                  "expression": {
                    "type": "CallExpression",
                    "start": 224,
                    "end": 239,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 224,
                      "end": 235,
                      "object": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 228,
                        "name": "item",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 235,
                        "name": "method",
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
                        "start": 236,
                        "end": 238,
                        "value": 42,
                        "raw": "42"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 250,
      "end": 318,
      "expression": {
        "type": "CallExpression",
        "start": 250,
        "end": 317,
        "callee": {
          "type": "Identifier",
          "start": 250,
          "end": 256,
          "name": "invoke",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 257,
            "end": 316,
            "properties": [
              {
                "type": "Property",
                "start": 263,
                "end": 272,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 267,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 269,
                  "end": 272,
                  "value": "a",
                  "raw": "\"a\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 278,
                "end": 314,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 284,
                  "name": "method",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 284,
                  "end": 314,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 285,
                      "end": 286,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 288,
                    "end": 314,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 298,
                        "end": 308,
                        "argument": {
                          "type": "UnaryExpression",
                          "start": 305,
                          "end": 307,
                          "operator": "+",
                          "prefix": true,
                          "argument": {
                            "type": "Identifier",
                            "start": 306,
                            "end": 307,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
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
      "type": "VariableDeclaration",
      "start": 320,
      "end": 336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 330,
            "name": "kind",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 333,
            "end": 336,
            "value": "a",
            "raw": "\"a\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 337,
      "end": 399,
      "expression": {
        "type": "CallExpression",
        "start": 337,
        "end": 399,
        "callee": {
          "type": "Identifier",
          "start": 337,
          "end": 343,
          "name": "invoke",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 344,
            "end": 398,
            "properties": [
              {
                "type": "Property",
                "start": 350,
                "end": 354,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 354,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 354,
                  "name": "kind",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 360,
                "end": 396,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 366,
                  "name": "method",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 366,
                  "end": 396,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 367,
                      "end": 368,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 370,
                    "end": 396,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 380,
                        "end": 390,
                        "argument": {
                          "type": "UnaryExpression",
                          "start": 387,
                          "end": 389,
                          "operator": "+",
                          "prefix": true,
                          "argument": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 389,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
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
