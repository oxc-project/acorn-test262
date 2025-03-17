__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 600,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
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
          "start": 15,
          "end": 19,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 19,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 19,
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "name": "T",
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
        "start": 21,
        "end": 78,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 48,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 47,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 35,
                  "end": 47,
                  "left": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "start": 40,
                    "end": 47,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 80,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 94,
        "name": "error",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 104,
        "end": 130,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 110,
            "end": 128,
            "argument": {
              "type": "NewExpression",
              "start": 116,
              "end": 127,
              "callee": {
                "type": "Identifier",
                "start": 120,
                "end": 125,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 96,
        "end": 103,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 98,
          "end": 103
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 132,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 143,
        "name": "f2",
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
          "start": 147,
          "end": 151,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 148,
            "end": 151,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 150,
              "end": 151,
              "typeName": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "name": "T",
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
        "start": 153,
        "end": 200,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 178,
            "end": 198,
            "argument": {
              "type": "LogicalExpression",
              "start": 185,
              "end": 197,
              "left": {
                "type": "Identifier",
                "start": 185,
                "end": 186,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "||",
              "right": {
                "type": "CallExpression",
                "start": 190,
                "end": 197,
                "callee": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 195,
                  "name": "error",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 143,
        "end": 146,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 144,
            "end": 145,
            "name": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 202,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 213,
        "name": "f3",
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
          "start": 214,
          "end": 224,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 224,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 217,
              "end": 224
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 226,
        "end": 252,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 232,
            "end": 243,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 236,
                "end": 242,
                "id": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 237,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "start": 240,
                  "end": 242,
                  "expression": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 241,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 254,
      "end": 514,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 265,
        "name": "f4",
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
          "start": 303,
          "end": 309,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 306,
            "end": 309,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 308,
              "end": 309,
              "typeName": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "name": "T",
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
        "start": 311,
        "end": 514,
        "body": [
          {
            "type": "IfStatement",
            "start": 317,
            "end": 380,
            "test": {
              "type": "BinaryExpression",
              "start": 321,
              "end": 339,
              "left": {
                "type": "ChainExpression",
                "start": 321,
                "end": 327,
                "expression": {
                  "type": "MemberExpression",
                  "start": 321,
                  "end": 327,
                  "object": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 324,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 332,
                "end": 339,
                "value": "hello",
                "raw": "\"hello\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 341,
              "end": 380,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 351,
                  "end": 355,
                  "expression": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 354,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 385,
            "end": 436,
            "test": {
              "type": "ChainExpression",
              "start": 389,
              "end": 395,
              "expression": {
                "type": "MemberExpression",
                "start": 389,
                "end": 395,
                "object": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 392,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 395,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": true
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 397,
              "end": 436,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 407,
                  "end": 411,
                  "expression": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 410,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 441,
            "end": 512,
            "test": {
              "type": "BinaryExpression",
              "start": 445,
              "end": 471,
              "left": {
                "type": "UnaryExpression",
                "start": 445,
                "end": 458,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "ChainExpression",
                  "start": 452,
                  "end": 458,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 452,
                    "end": 458,
                    "object": {
                      "type": "Identifier",
                      "start": 452,
                      "end": 455,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 457,
                      "end": 458,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 463,
                "end": 471,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 473,
              "end": 512,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 483,
                  "end": 487,
                  "expression": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 486,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 265,
        "end": 302,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 266,
            "end": 301,
            "name": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 276,
              "end": 301,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 276,
                  "end": 289,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 278,
                      "end": 287,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 278,
                        "end": 279,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 279,
                        "end": 287,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 281,
                          "end": 287
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 292,
                  "end": 301
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 516,
      "end": 599,
      "id": {
        "type": "Identifier",
        "start": 522,
        "end": 523,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 524,
        "end": 599,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 530,
            "end": 542,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 530,
              "end": 531,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 534,
              "end": 541,
              "value": "hello",
              "raw": "\"hello\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 547,
            "end": 597,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 547,
              "end": 550,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 550,
              "end": 597,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 553,
                "end": 597,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 563,
                    "end": 580,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 567,
                        "end": 579,
                        "id": {
                          "type": "Identifier",
                          "start": 567,
                          "end": 569,
                          "name": "zz",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ChainExpression",
                          "start": 572,
                          "end": 579,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 572,
                            "end": 579,
                            "object": {
                              "type": "ThisExpression",
                              "start": 572,
                              "end": 576
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 578,
                              "end": 579,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": true
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
