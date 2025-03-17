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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "ADT",
        "optional": false,
        "typeAnnotation": null
      },
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 21,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
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
                      "raw": "\"a\"",
                      "value": "a"
                    }
                  }
                }
              },
              {
                "type": "TSMethodSignature",
                "start": 32,
                "end": 58,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 38,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "method",
                "optional": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 39,
                    "end": 48,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 40,
                      "end": 48,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 42,
                        "end": 48
                      }
                    }
                  }
                ],
                "readonly": false,
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
                "static": false,
                "typeParameters": null
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 73,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
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
                      "raw": "\"b\"",
                      "value": "b"
                    }
                  }
                }
              },
              {
                "type": "TSMethodSignature",
                "start": 84,
                "end": 110,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 90,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "method",
                "optional": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 91,
                    "end": 100,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 100,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 94,
                        "end": 100
                      }
                    }
                  }
                ],
                "readonly": false,
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
                "static": false,
                "typeParameters": null
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 248,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 143,
        "end": 248,
        "body": [
          {
            "type": "IfStatement",
            "start": 149,
            "end": 246,
            "alternate": {
              "type": "BlockStatement",
              "start": 214,
              "end": 246,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 224,
                  "end": 240,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 224,
                    "end": 239,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 236,
                        "end": 238,
                        "raw": "42",
                        "value": 42
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 224,
                      "end": 235,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 228,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 235,
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 182,
                    "end": 197,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 194,
                        "end": 196,
                        "raw": "\"\"",
                        "value": ""
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 182,
                      "end": 193,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 186,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 193,
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 153,
              "end": 170,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 153,
                "end": 162,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 157,
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 162,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 167,
                "end": 170,
                "raw": "\"a\"",
                "value": "a"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 131,
        "decorators": [],
        "name": "invoke",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 132,
          "end": 141,
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 136,
            "end": 141,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 141,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 141,
                "decorators": [],
                "name": "ADT",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 250,
      "end": 318,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 250,
        "end": 317,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 267,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 269,
                  "end": 272,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              {
                "type": "Property",
                "start": 278,
                "end": 314,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 284,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 284,
                  "end": 314,
                  "async": false,
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
                          "argument": {
                            "type": "Identifier",
                            "start": 306,
                            "end": 307,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "prefix": true
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 285,
                      "end": 286,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 250,
          "end": 256,
          "decorators": [],
          "name": "invoke",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 330,
            "decorators": [],
            "name": "kind",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 333,
            "end": 336,
            "raw": "\"a\"",
            "value": "a"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 337,
      "end": 399,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 337,
        "end": 399,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 354,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 354,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 360,
                "end": 396,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 366,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 366,
                  "end": 396,
                  "async": false,
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
                          "argument": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 389,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "+",
                          "prefix": true
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 367,
                      "end": 368,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 337,
          "end": 343,
          "decorators": [],
          "name": "invoke",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
