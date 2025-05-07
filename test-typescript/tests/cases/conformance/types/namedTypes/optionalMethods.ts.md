__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 813,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 83,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 83,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 30,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 46,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 51,
            "end": 63,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 62,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 56,
                "end": 62
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 68,
            "end": 81,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": true,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 80,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 74,
                "end": 80
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 224,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 108,
        "end": 224,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 114,
            "end": 118,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 114,
              "end": 117,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 116,
                "end": 117,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 123,
            "end": 127,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 123,
              "end": 126,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 132,
            "end": 136,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 132,
              "end": 135,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 141,
            "end": 145,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 141,
              "end": 144,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 150,
            "end": 165,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 154,
                "end": 164,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 156,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 159,
                  "end": 164,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 159,
                    "end": 162,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 160,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 162,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 170,
            "end": 192,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 174,
                "end": 191,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 176,
                  "decorators": [],
                  "name": "g1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 179,
                  "end": 191,
                  "operator": "&&",
                  "left": {
                    "type": "MemberExpression",
                    "start": 179,
                    "end": 182,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 180,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 182,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 186,
                    "end": 191,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 186,
                      "end": 189,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 186,
                        "end": 187,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 189,
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 197,
            "end": 222,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 201,
                "end": 221,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 203,
                  "decorators": [],
                  "name": "g2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 206,
                  "end": 221,
                  "alternate": {
                    "type": "Literal",
                    "start": 220,
                    "end": 221,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "start": 212,
                    "end": 217,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 212,
                      "end": 215,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 213,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 215,
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "test": {
                    "type": "MemberExpression",
                    "start": 206,
                    "end": 209,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 207,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 209,
                      "decorators": [],
                      "name": "g",
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
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 99,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 100,
          "end": 106,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 101,
            "end": 106,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 103,
              "end": 106,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 103,
                "end": 106,
                "decorators": [],
                "name": "Foo",
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
      "type": "ClassDeclaration",
      "start": 226,
      "end": 465,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 236,
        "end": 465,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 242,
            "end": 252,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 251,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 245,
                "end": 251
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 257,
            "end": 268,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 259,
              "end": 267,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 261,
                "end": 267
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 273,
            "end": 280,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 273,
              "end": 274,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 278,
              "end": 279,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 285,
            "end": 333,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 285,
              "end": 296,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 296,
              "end": 333,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 331,
                "end": 333,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 297,
                  "end": 314,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 314,
                    "decorators": [],
                    "name": "d",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 306,
                      "end": 314,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 308,
                        "end": 314
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 316,
                  "end": 329,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 323,
                    "end": 329,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 323,
                      "end": 324,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 327,
                      "end": 329,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 338,
            "end": 367,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 339,
              "end": 367,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 342,
                "end": 367,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 352,
                    "end": 361,
                    "argument": {
                      "type": "Literal",
                      "start": 359,
                      "end": 360,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 372,
            "end": 385,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": true,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 374,
              "end": 385,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 376,
                "end": 384,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 378,
                  "end": 384
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 433,
            "end": 463,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 433,
              "end": 434,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": true,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 435,
              "end": 463,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 438,
                "end": 463,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 448,
                    "end": 457,
                    "argument": {
                      "type": "Literal",
                      "start": 455,
                      "end": 456,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    }
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
        "start": 232,
        "end": 235,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 467,
      "end": 690,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 490,
        "end": 690,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 496,
            "end": 500,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 496,
              "end": 499,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 496,
                "end": 497,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 498,
                "end": 499,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 505,
            "end": 509,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 505,
              "end": 508,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 505,
                "end": 506,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 507,
                "end": 508,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 514,
            "end": 518,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 514,
              "end": 517,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 514,
                "end": 515,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 516,
                "end": 517,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 523,
            "end": 527,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 523,
              "end": 526,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 523,
                "end": 524,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 525,
                "end": 526,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 532,
            "end": 536,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 532,
              "end": 535,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 532,
                "end": 533,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 534,
                "end": 535,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 541,
            "end": 545,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 541,
              "end": 544,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 541,
                "end": 542,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 543,
                "end": 544,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 550,
            "end": 554,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 550,
              "end": 553,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 550,
                "end": 551,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 552,
                "end": 553,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 559,
            "end": 574,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 563,
                "end": 573,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 563,
                  "end": 565,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 568,
                  "end": 573,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 568,
                    "end": 571,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 568,
                      "end": 569,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 570,
                      "end": 571,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 579,
            "end": 601,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 583,
                "end": 600,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 583,
                  "end": 585,
                  "decorators": [],
                  "name": "g1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 588,
                  "end": 600,
                  "operator": "&&",
                  "left": {
                    "type": "MemberExpression",
                    "start": 588,
                    "end": 591,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 588,
                      "end": 589,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 590,
                      "end": 591,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 595,
                    "end": 600,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 595,
                      "end": 598,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 595,
                        "end": 596,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 597,
                        "end": 598,
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 606,
            "end": 631,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 610,
                "end": 630,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 610,
                  "end": 612,
                  "decorators": [],
                  "name": "g2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 615,
                  "end": 630,
                  "alternate": {
                    "type": "Literal",
                    "start": 629,
                    "end": 630,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "start": 621,
                    "end": 626,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 621,
                      "end": 624,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 621,
                        "end": 622,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 623,
                        "end": 624,
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "test": {
                    "type": "MemberExpression",
                    "start": 615,
                    "end": 618,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 615,
                      "end": 616,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 617,
                      "end": 618,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 636,
            "end": 658,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 640,
                "end": 657,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 640,
                  "end": 642,
                  "decorators": [],
                  "name": "h1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 645,
                  "end": 657,
                  "operator": "&&",
                  "left": {
                    "type": "MemberExpression",
                    "start": 645,
                    "end": 648,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 645,
                      "end": 646,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 647,
                      "end": 648,
                      "decorators": [],
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 652,
                    "end": 657,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 652,
                      "end": 655,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 652,
                        "end": 653,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 654,
                        "end": 655,
                        "decorators": [],
                        "name": "h",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 663,
            "end": 688,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 667,
                "end": 687,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 669,
                  "decorators": [],
                  "name": "h2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 672,
                  "end": 687,
                  "alternate": {
                    "type": "Literal",
                    "start": 686,
                    "end": 687,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "start": 678,
                    "end": 683,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 678,
                      "end": 681,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 678,
                        "end": 679,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 680,
                        "end": 681,
                        "decorators": [],
                        "name": "h",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "test": {
                    "type": "MemberExpression",
                    "start": 672,
                    "end": 675,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 672,
                      "end": 673,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 674,
                      "end": 675,
                      "decorators": [],
                      "name": "h",
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
      "id": {
        "type": "Identifier",
        "start": 476,
        "end": 481,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 482,
          "end": 488,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 483,
            "end": 488,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 485,
              "end": 488,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 485,
                "end": 488,
                "decorators": [],
                "name": "Bar",
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
      "type": "ClassDeclaration",
      "start": 692,
      "end": 740,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 703,
        "end": 740,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 709,
            "end": 720,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 709,
              "end": 710,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 711,
              "end": 719,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 713,
                "end": 719
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 725,
            "end": 738,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 725,
              "end": 726,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": true,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 727,
              "end": 738,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 729,
                "end": 737,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 731,
                  "end": 737
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 698,
        "end": 702,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 742,
      "end": 813,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 769,
        "end": 813,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 775,
            "end": 781,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 775,
              "end": 776,
              "decorators": [],
              "name": "a",
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
              "start": 779,
              "end": 780,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 786,
            "end": 811,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 786,
              "end": 787,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 787,
              "end": 811,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 798,
                "end": 811,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 800,
                    "end": 809,
                    "argument": {
                      "type": "Literal",
                      "start": 807,
                      "end": 808,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 789,
                "end": 797,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 791,
                  "end": 797
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 748,
        "end": 755,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 764,
        "end": 768,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
