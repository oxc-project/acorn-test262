__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 599,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 78,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 35,
                  "end": 47,
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 40,
                    "end": 47,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 19,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 19,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 19,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 80,
      "end": 130,
      "async": false,
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
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 120,
                "end": 125,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 94,
        "decorators": [],
        "name": "error",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 96,
        "end": 103,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 98,
          "end": 103
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 132,
      "end": 200,
      "async": false,
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
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 185,
                "end": 186,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "CallExpression",
                "start": 190,
                "end": 197,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 195,
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
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
        "start": 141,
        "end": 143,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 147,
          "end": 151,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 148,
            "end": 151,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 150,
              "end": 151,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 143,
        "end": 146,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 144,
            "end": 145,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 202,
      "end": 252,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 237,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "start": 240,
                  "end": 242,
                  "expression": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 241,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 213,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 214,
          "end": 224,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 224,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 217,
              "end": 224
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 254,
      "end": 514,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 311,
        "end": 514,
        "body": [
          {
            "type": "IfStatement",
            "start": 317,
            "end": 380,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 341,
              "end": 380,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 351,
                  "end": 355,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 354,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 321,
              "end": 339,
              "operator": "===",
              "left": {
                "type": "ChainExpression",
                "start": 321,
                "end": 327,
                "expression": {
                  "type": "MemberExpression",
                  "start": 321,
                  "end": 327,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 324,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "Literal",
                "start": 332,
                "end": 339,
                "raw": "\"hello\"",
                "value": "hello"
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 385,
            "end": 436,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 397,
              "end": 436,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 407,
                  "end": 411,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 410,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "ChainExpression",
              "start": 389,
              "end": 395,
              "expression": {
                "type": "MemberExpression",
                "start": 389,
                "end": 395,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 392,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "property": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 395,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 441,
            "end": 512,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 473,
              "end": 512,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 483,
                  "end": 487,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 486,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 445,
              "end": 471,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 445,
                "end": 458,
                "argument": {
                  "type": "ChainExpression",
                  "start": 452,
                  "end": 458,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 452,
                    "end": 458,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 452,
                      "end": 455,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "property": {
                      "type": "Identifier",
                      "start": 457,
                      "end": 458,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 463,
                "end": 471,
                "raw": "\"string\"",
                "value": "string"
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
        "start": 263,
        "end": 265,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 303,
          "end": 309,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 306,
            "end": 309,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 308,
              "end": 309,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 265,
        "end": 302,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 266,
            "end": 301,
            "const": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 278,
                        "end": 279,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 279,
                        "end": 287,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 281,
                          "end": 287
                        }
                      }
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
            "name": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 516,
      "end": 599,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 524,
        "end": 599,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 530,
            "end": 542,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 530,
              "end": 531,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 534,
              "end": 541,
              "raw": "\"hello\"",
              "value": "hello"
            }
          },
          {
            "type": "MethodDefinition",
            "start": 547,
            "end": 597,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 547,
              "end": 550,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 550,
              "end": 597,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 567,
                          "end": 569,
                          "decorators": [],
                          "name": "zz",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ChainExpression",
                          "start": 572,
                          "end": 579,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 572,
                            "end": 579,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 572,
                              "end": 576
                            },
                            "optional": true,
                            "property": {
                              "type": "Identifier",
                              "start": 578,
                              "end": 579,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 522,
        "end": 523,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
