__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2751,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 24,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 26,
            "end": 27,
            "name": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 29,
          "end": 58,
          "decorators": [],
          "name": "gen",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 58,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 34,
              "end": 58,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 37,
                "end": 58,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 40,
                  "end": 58,
                  "typeName": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 49,
                    "decorators": [],
                    "name": "Generator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 49,
                    "end": 58,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 50,
                        "end": 51,
                        "typeName": {
                          "type": "Identifier",
                          "start": 50,
                          "end": 51,
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 53,
                        "end": 54,
                        "typeName": {
                          "type": "Identifier",
                          "start": 53,
                          "end": 54,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 56,
                        "end": 57,
                        "typeName": {
                          "type": "Identifier",
                          "start": 56,
                          "end": 57,
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 59,
        "end": 65,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 61,
          "end": 65
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 128,
      "expression": {
        "type": "CallExpression",
        "start": 67,
        "end": 127,
        "callee": {
          "type": "Identifier",
          "start": 67,
          "end": 69,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 69,
          "end": 78,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 70,
              "end": 71,
              "literal": {
                "type": "Literal",
                "start": 70,
                "end": 71,
                "value": 0,
                "raw": "0"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 73,
              "end": 74,
              "literal": {
                "type": "Literal",
                "start": 73,
                "end": 74,
                "value": 0,
                "raw": "0"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 76,
              "end": 77,
              "literal": {
                "type": "Literal",
                "start": 76,
                "end": 77,
                "value": 1,
                "raw": "1"
              }
            }
          ]
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 79,
            "end": 126,
            "id": null,
            "generator": true,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 92,
              "end": 126,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 95,
                  "end": 113,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 101,
                      "end": 112,
                      "id": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 102,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "YieldExpression",
                        "start": 105,
                        "end": 112,
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "start": 111,
                          "end": 112,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 115,
                  "end": 124,
                  "argument": {
                    "type": "Literal",
                    "start": 122,
                    "end": 123,
                    "value": 0,
                    "raw": "0"
                  }
                }
              ]
            },
            "expression": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 130,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 149,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 149,
        "end": 158,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 150,
            "end": 151,
            "name": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 153,
            "end": 154,
            "name": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 156,
            "end": 157,
            "name": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 159,
          "end": 214,
          "decorators": [],
          "name": "gen",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 214,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 164,
              "end": 214,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 167,
                "end": 214,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 170,
                  "end": 214,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 170,
                      "end": 188,
                      "typeName": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 179,
                        "decorators": [],
                        "name": "Generator",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 179,
                        "end": 188,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 180,
                            "end": 181,
                            "typeName": {
                              "type": "Identifier",
                              "start": 180,
                              "end": 181,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 183,
                            "end": 184,
                            "typeName": {
                              "type": "Identifier",
                              "start": 183,
                              "end": 184,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 186,
                            "end": 187,
                            "typeName": {
                              "type": "Identifier",
                              "start": 186,
                              "end": 187,
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 191,
                      "end": 214,
                      "typeName": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 205,
                        "decorators": [],
                        "name": "AsyncGenerator",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 205,
                        "end": 214,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 206,
                            "end": 207,
                            "typeName": {
                              "type": "Identifier",
                              "start": 206,
                              "end": 207,
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 209,
                            "end": 210,
                            "typeName": {
                              "type": "Identifier",
                              "start": 209,
                              "end": 210,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 212,
                            "end": 213,
                            "typeName": {
                              "type": "Identifier",
                              "start": 212,
                              "end": 213,
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 215,
        "end": 221,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 217,
          "end": 221
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 223,
      "end": 290,
      "expression": {
        "type": "CallExpression",
        "start": 223,
        "end": 289,
        "callee": {
          "type": "Identifier",
          "start": 223,
          "end": 225,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 225,
          "end": 234,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 226,
              "end": 227,
              "literal": {
                "type": "Literal",
                "start": 226,
                "end": 227,
                "value": 0,
                "raw": "0"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 229,
              "end": 230,
              "literal": {
                "type": "Literal",
                "start": 229,
                "end": 230,
                "value": 0,
                "raw": "0"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 232,
              "end": 233,
              "literal": {
                "type": "Literal",
                "start": 232,
                "end": 233,
                "value": 1,
                "raw": "1"
              }
            }
          ]
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 235,
            "end": 288,
            "id": null,
            "generator": true,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 254,
              "end": 288,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 257,
                  "end": 275,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 263,
                      "end": 274,
                      "id": {
                        "type": "Identifier",
                        "start": 263,
                        "end": 264,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "YieldExpression",
                        "start": 267,
                        "end": 274,
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "start": 273,
                          "end": 274,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 277,
                  "end": 286,
                  "argument": {
                    "type": "Literal",
                    "start": 284,
                    "end": 285,
                    "value": 0,
                    "raw": "0"
                  }
                }
              ]
            },
            "expression": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 313,
      "end": 369,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 327,
        "decorators": [],
        "name": "Directive",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 328,
        "end": 369,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 332,
            "end": 336,
            "id": {
              "type": "Identifier",
              "start": 332,
              "end": 336,
              "decorators": [],
              "name": "Back",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 340,
            "end": 346,
            "id": {
              "type": "Identifier",
              "start": 340,
              "end": 346,
              "decorators": [],
              "name": "Cancel",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 350,
            "end": 358,
            "id": {
              "type": "Identifier",
              "start": 350,
              "end": 358,
              "decorators": [],
              "name": "LoadMore",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 362,
            "end": 366,
            "id": {
              "type": "Identifier",
              "start": 362,
              "end": 366,
              "decorators": [],
              "name": "Noop",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 371,
      "end": 532,
      "id": {
        "type": "Identifier",
        "start": 381,
        "end": 390,
        "decorators": [],
        "name": "Directive",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 391,
        "end": 532,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 395,
            "end": 530,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 402,
              "end": 530,
              "id": {
                "type": "Identifier",
                "start": 411,
                "end": 413,
                "decorators": [],
                "name": "is",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 413,
                "end": 416,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 414,
                    "end": 415,
                    "name": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 415,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 417,
                  "end": 437,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 422,
                    "end": 437,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 424,
                      "end": 437,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 424,
                          "end": 433,
                          "typeName": {
                            "type": "Identifier",
                            "start": 424,
                            "end": 433,
                            "decorators": [],
                            "name": "Directive",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 436,
                          "end": 437,
                          "typeName": {
                            "type": "Identifier",
                            "start": 436,
                            "end": 437,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 438,
                "end": 458,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 440,
                  "end": 458,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 445,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 449,
                    "end": 458,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 449,
                      "end": 458,
                      "typeName": {
                        "type": "Identifier",
                        "start": 449,
                        "end": 458,
                        "decorators": [],
                        "name": "Directive",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 459,
                "end": 530,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 465,
                    "end": 526,
                    "argument": {
                      "type": "LogicalExpression",
                      "start": 472,
                      "end": 525,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 472,
                        "end": 497,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 472,
                          "end": 484,
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "start": 479,
                            "end": 484,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "prefix": true
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 489,
                          "end": 497,
                          "value": "number",
                          "raw": "\"number\""
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "start": 501,
                        "end": 525,
                        "left": {
                          "type": "MemberExpression",
                          "start": 501,
                          "end": 517,
                          "object": {
                            "type": "Identifier",
                            "start": 501,
                            "end": 510,
                            "decorators": [],
                            "name": "Directive",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 511,
                            "end": 516,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
                        },
                        "operator": "!=",
                        "right": {
                          "type": "Literal",
                          "start": 521,
                          "end": 525,
                          "value": null,
                          "raw": "null"
                        }
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 534,
      "end": 665,
      "id": {
        "type": "Identifier",
        "start": 544,
        "end": 557,
        "decorators": [],
        "name": "QuickPickItem",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 558,
        "end": 665,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 562,
            "end": 576,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 562,
              "end": 567,
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 567,
              "end": 575,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 569,
                "end": 575
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 579,
            "end": 600,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 579,
              "end": 590,
              "decorators": [],
              "name": "description",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 591,
              "end": 599,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 593,
                "end": 599
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 603,
            "end": 619,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 603,
              "end": 609,
              "decorators": [],
              "name": "detail",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 610,
              "end": 618,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 612,
                "end": 618
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 622,
            "end": 639,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 622,
              "end": 628,
              "decorators": [],
              "name": "picked",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 629,
              "end": 638,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 631,
                "end": 638
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 642,
            "end": 663,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 642,
              "end": 652,
              "decorators": [],
              "name": "alwaysShow",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 653,
              "end": 662,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 655,
                "end": 662
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
      "type": "TSInterfaceDeclaration",
      "start": 667,
      "end": 756,
      "id": {
        "type": "Identifier",
        "start": 677,
        "end": 691,
        "decorators": [],
        "name": "QuickInputStep",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 692,
        "end": 756,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 696,
            "end": 717,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 696,
              "end": 707,
              "decorators": [],
              "name": "placeholder",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 708,
              "end": 716,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 710,
                "end": 716
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 720,
            "end": 736,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 720,
              "end": 726,
              "decorators": [],
              "name": "prompt",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 727,
              "end": 735,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 729,
                "end": 735
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 739,
            "end": 754,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 739,
              "end": 744,
              "decorators": [],
              "name": "title",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 745,
              "end": 753,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 747,
                "end": 753
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
      "type": "TSInterfaceDeclaration",
      "start": 758,
      "end": 868,
      "id": {
        "type": "Identifier",
        "start": 768,
        "end": 781,
        "decorators": [],
        "name": "QuickPickStep",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 781,
        "end": 822,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 782,
            "end": 821,
            "name": {
              "type": "Identifier",
              "start": 782,
              "end": 783,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 792,
              "end": 805,
              "typeName": {
                "type": "Identifier",
                "start": 792,
                "end": 805,
                "decorators": [],
                "name": "QuickPickItem",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 808,
              "end": 821,
              "typeName": {
                "type": "Identifier",
                "start": 808,
                "end": 821,
                "decorators": [],
                "name": "QuickPickItem",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 823,
        "end": 868,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 827,
            "end": 848,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 827,
              "end": 838,
              "decorators": [],
              "name": "placeholder",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 839,
              "end": 847,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 841,
                "end": 847
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 851,
            "end": 866,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 851,
              "end": 856,
              "decorators": [],
              "name": "title",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 857,
              "end": 865,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 859,
                "end": 865
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
      "type": "TSTypeAliasDeclaration",
      "start": 870,
      "end": 1130,
      "id": {
        "type": "Identifier",
        "start": 875,
        "end": 888,
        "decorators": [],
        "name": "StepGenerator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 893,
        "end": 1129,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 895,
            "end": 1007,
            "typeName": {
              "type": "Identifier",
              "start": 895,
              "end": 904,
              "decorators": [],
              "name": "Generator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 904,
              "end": 1007,
              "params": [
                {
                  "type": "TSUnionType",
                  "start": 912,
                  "end": 942,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 912,
                      "end": 925,
                      "typeName": {
                        "type": "Identifier",
                        "start": 912,
                        "end": 925,
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 928,
                      "end": 942,
                      "typeName": {
                        "type": "Identifier",
                        "start": 928,
                        "end": 942,
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 950,
                  "end": 978,
                  "typeName": {
                    "type": "Identifier",
                    "start": 950,
                    "end": 960,
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 960,
                    "end": 978,
                    "params": [
                      {
                        "type": "TSUnionType",
                        "start": 961,
                        "end": 977,
                        "types": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 961,
                            "end": 965
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 968,
                            "end": 977
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "type": "TSUnionType",
                  "start": 986,
                  "end": 1001,
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 986,
                      "end": 989
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 992,
                      "end": 1001
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1012,
            "end": 1129,
            "typeName": {
              "type": "Identifier",
              "start": 1012,
              "end": 1026,
              "decorators": [],
              "name": "AsyncGenerator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1026,
              "end": 1129,
              "params": [
                {
                  "type": "TSUnionType",
                  "start": 1034,
                  "end": 1064,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 1034,
                      "end": 1047,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1034,
                        "end": 1047,
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1050,
                      "end": 1064,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1050,
                        "end": 1064,
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 1072,
                  "end": 1100,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1072,
                    "end": 1082,
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1082,
                    "end": 1100,
                    "params": [
                      {
                        "type": "TSUnionType",
                        "start": 1083,
                        "end": 1099,
                        "types": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 1083,
                            "end": 1087
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1090,
                            "end": 1099
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "type": "TSUnionType",
                  "start": 1108,
                  "end": 1123,
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1108,
                      "end": 1111
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1114,
                      "end": 1123
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1132,
      "end": 1246,
      "id": {
        "type": "Identifier",
        "start": 1137,
        "end": 1149,
        "decorators": [],
        "name": "StepItemType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1149,
        "end": 1152,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1150,
            "end": 1151,
            "name": {
              "type": "Identifier",
              "start": 1150,
              "end": 1151,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1155,
        "end": 1245,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1155,
          "end": 1156,
          "typeName": {
            "type": "Identifier",
            "start": 1155,
            "end": 1156,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1165,
          "end": 1187,
          "typeName": {
            "type": "Identifier",
            "start": 1165,
            "end": 1178,
            "decorators": [],
            "name": "QuickPickStep",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1178,
            "end": 1187,
            "params": [
              {
                "type": "TSInferType",
                "start": 1179,
                "end": 1186,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1185,
                  "end": 1186,
                  "name": {
                    "type": "Identifier",
                    "start": 1185,
                    "end": 1186,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSArrayType",
          "start": 1192,
          "end": 1195,
          "elementType": {
            "type": "TSTypeReference",
            "start": 1192,
            "end": 1193,
            "typeName": {
              "type": "Identifier",
              "start": 1192,
              "end": 1193,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 1200,
          "end": 1245,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1200,
            "end": 1201,
            "typeName": {
              "type": "Identifier",
              "start": 1200,
              "end": 1201,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1210,
            "end": 1224,
            "typeName": {
              "type": "Identifier",
              "start": 1210,
              "end": 1224,
              "decorators": [],
              "name": "QuickInputStep",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSStringKeyword",
            "start": 1229,
            "end": 1235
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1240,
            "end": 1245
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1247,
      "end": 1315,
      "id": {
        "type": "Identifier",
        "start": 1257,
        "end": 1267,
        "decorators": [],
        "name": "StepResult",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1268,
        "end": 1315,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1272,
            "end": 1313,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1279,
              "end": 1313,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1285,
                  "end": 1312,
                  "id": {
                    "type": "Identifier",
                    "start": 1285,
                    "end": 1290,
                    "decorators": [],
                    "name": "Break",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1293,
                    "end": 1312,
                    "callee": {
                      "type": "Identifier",
                      "start": 1293,
                      "end": 1299,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 1300,
                        "end": 1311,
                        "value": "BreakStep",
                        "raw": "\"BreakStep\""
                      }
                    ],
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1316,
      "end": 1365,
      "id": {
        "type": "Identifier",
        "start": 1321,
        "end": 1331,
        "decorators": [],
        "name": "StepResult",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1331,
        "end": 1334,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1332,
            "end": 1333,
            "name": {
              "type": "Identifier",
              "start": 1332,
              "end": 1333,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1337,
        "end": 1364,
        "types": [
          {
            "type": "TSTypeQuery",
            "start": 1337,
            "end": 1360,
            "exprName": {
              "type": "TSQualifiedName",
              "start": 1344,
              "end": 1360,
              "left": {
                "type": "Identifier",
                "start": 1344,
                "end": 1354,
                "decorators": [],
                "name": "StepResult",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1355,
                "end": 1360,
                "decorators": [],
                "name": "Break",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1363,
            "end": 1364,
            "typeName": {
              "type": "Identifier",
              "start": 1363,
              "end": 1364,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1366,
      "end": 1581,
      "id": {
        "type": "Identifier",
        "start": 1371,
        "end": 1390,
        "decorators": [],
        "name": "StepResultGenerator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1390,
        "end": 1393,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1391,
            "end": 1392,
            "name": {
              "type": "Identifier",
              "start": 1391,
              "end": 1392,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1398,
        "end": 1580,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1400,
            "end": 1473,
            "typeName": {
              "type": "Identifier",
              "start": 1400,
              "end": 1409,
              "decorators": [],
              "name": "Generator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1409,
              "end": 1473,
              "params": [
                {
                  "type": "TSUnionType",
                  "start": 1410,
                  "end": 1440,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 1410,
                      "end": 1423,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1410,
                        "end": 1423,
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1426,
                      "end": 1440,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1426,
                        "end": 1440,
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 1442,
                  "end": 1455,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1442,
                    "end": 1452,
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1452,
                    "end": 1455,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1453,
                        "end": 1454,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1453,
                          "end": 1454,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSUnionType",
                  "start": 1457,
                  "end": 1472,
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1457,
                      "end": 1460
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1463,
                      "end": 1472
                    }
                  ]
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1478,
            "end": 1580,
            "typeName": {
              "type": "Identifier",
              "start": 1478,
              "end": 1492,
              "decorators": [],
              "name": "AsyncGenerator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1492,
              "end": 1580,
              "params": [
                {
                  "type": "TSUnionType",
                  "start": 1500,
                  "end": 1530,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 1500,
                      "end": 1513,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1500,
                        "end": 1513,
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1516,
                      "end": 1530,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1516,
                        "end": 1530,
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 1538,
                  "end": 1551,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1538,
                    "end": 1548,
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1548,
                    "end": 1551,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1549,
                        "end": 1550,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1549,
                          "end": 1550,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSUnionType",
                  "start": 1559,
                  "end": 1574,
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1559,
                      "end": 1562
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1565,
                      "end": 1574
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1582,
      "end": 1721,
      "id": {
        "type": "Identifier",
        "start": 1587,
        "end": 1600,
        "decorators": [],
        "name": "StepSelection",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1600,
        "end": 1603,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1601,
            "end": 1602,
            "name": {
              "type": "Identifier",
              "start": 1601,
              "end": 1602,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1606,
        "end": 1720,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1606,
          "end": 1607,
          "typeName": {
            "type": "Identifier",
            "start": 1606,
            "end": 1607,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1616,
          "end": 1638,
          "typeName": {
            "type": "Identifier",
            "start": 1616,
            "end": 1629,
            "decorators": [],
            "name": "QuickPickStep",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1629,
            "end": 1638,
            "params": [
              {
                "type": "TSInferType",
                "start": 1630,
                "end": 1637,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1636,
                  "end": 1637,
                  "name": {
                    "type": "Identifier",
                    "start": 1636,
                    "end": 1637,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSUnionType",
          "start": 1643,
          "end": 1658,
          "types": [
            {
              "type": "TSArrayType",
              "start": 1643,
              "end": 1646,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1643,
                "end": 1644,
                "typeName": {
                  "type": "Identifier",
                  "start": 1643,
                  "end": 1644,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1649,
              "end": 1658,
              "typeName": {
                "type": "Identifier",
                "start": 1649,
                "end": 1658,
                "decorators": [],
                "name": "Directive",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 1663,
          "end": 1720,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1663,
            "end": 1664,
            "typeName": {
              "type": "Identifier",
              "start": 1663,
              "end": 1664,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1673,
            "end": 1687,
            "typeName": {
              "type": "Identifier",
              "start": 1673,
              "end": 1687,
              "decorators": [],
              "name": "QuickInputStep",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSUnionType",
            "start": 1692,
            "end": 1710,
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 1692,
                "end": 1698
              },
              {
                "type": "TSTypeReference",
                "start": 1701,
                "end": 1710,
                "typeName": {
                  "type": "Identifier",
                  "start": 1701,
                  "end": 1710,
                  "decorators": [],
                  "name": "Directive",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1715,
            "end": 1720
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1722,
      "end": 1841,
      "id": {
        "type": "Identifier",
        "start": 1727,
        "end": 1743,
        "decorators": [],
        "name": "PartialStepState",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1743,
        "end": 1756,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1744,
            "end": 1755,
            "name": {
              "type": "Identifier",
              "start": 1744,
              "end": 1745,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1748,
              "end": 1755
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1759,
        "end": 1840,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1759,
            "end": 1769,
            "typeName": {
              "type": "Identifier",
              "start": 1759,
              "end": 1766,
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1766,
              "end": 1769,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1767,
                  "end": 1768,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1767,
                    "end": 1768,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 1772,
            "end": 1840,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1776,
                "end": 1792,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1776,
                  "end": 1783,
                  "decorators": [],
                  "name": "counter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1783,
                  "end": 1791,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1785,
                    "end": 1791
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1795,
                "end": 1813,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1795,
                  "end": 1802,
                  "decorators": [],
                  "name": "confirm",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1803,
                  "end": 1812,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1805,
                    "end": 1812
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1816,
                "end": 1838,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1816,
                  "end": 1828,
                  "decorators": [],
                  "name": "startingStep",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1829,
                  "end": 1837,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1831,
                    "end": 1837
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1842,
      "end": 1961,
      "id": {
        "type": "Identifier",
        "start": 1847,
        "end": 1856,
        "decorators": [],
        "name": "StepState",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1856,
        "end": 1885,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1857,
            "end": 1884,
            "name": {
              "type": "Identifier",
              "start": 1857,
              "end": 1858,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "start": 1861,
              "end": 1884,
              "typeName": {
                "type": "Identifier",
                "start": 1861,
                "end": 1867,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1867,
                "end": 1884,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1868,
                    "end": 1874
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 1876,
                    "end": 1883
                  }
                ]
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1888,
        "end": 1960,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1888,
            "end": 1889,
            "typeName": {
              "type": "Identifier",
              "start": 1888,
              "end": 1889,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 1892,
            "end": 1960,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1896,
                "end": 1912,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1896,
                  "end": 1903,
                  "decorators": [],
                  "name": "counter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1903,
                  "end": 1911,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1905,
                    "end": 1911
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1915,
                "end": 1933,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1915,
                  "end": 1922,
                  "decorators": [],
                  "name": "confirm",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1923,
                  "end": 1932,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1925,
                    "end": 1932
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1936,
                "end": 1958,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1936,
                  "end": 1948,
                  "decorators": [],
                  "name": "startingStep",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1949,
                  "end": 1957,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1951,
                    "end": 1957
                  }
                },
                "accessibility": null,
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
      "start": 1963,
      "end": 2152,
      "id": {
        "type": "Identifier",
        "start": 1972,
        "end": 1991,
        "decorators": [],
        "name": "canPickStepContinue",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1991,
        "end": 2016,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1992,
            "end": 2015,
            "name": {
              "type": "Identifier",
              "start": 1992,
              "end": 1993,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2002,
              "end": 2015,
              "typeName": {
                "type": "Identifier",
                "start": 2002,
                "end": 2015,
                "decorators": [],
                "name": "QuickPickStep",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2020,
          "end": 2028,
          "decorators": [],
          "name": "_step",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2025,
            "end": 2028,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2027,
              "end": 2028,
              "typeName": {
                "type": "Identifier",
                "start": 2027,
                "end": 2028,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2032,
          "end": 2056,
          "decorators": [],
          "name": "_state",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2038,
            "end": 2056,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2040,
              "end": 2056,
              "typeName": {
                "type": "Identifier",
                "start": 2040,
                "end": 2056,
                "decorators": [],
                "name": "PartialStepState",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2060,
          "end": 2099,
          "decorators": [],
          "name": "_selection",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2070,
            "end": 2099,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2072,
              "end": 2099,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 2072,
                  "end": 2087,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2072,
                    "end": 2084,
                    "decorators": [],
                    "name": "StepItemType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2084,
                    "end": 2087,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2085,
                        "end": 2086,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2085,
                          "end": 2086,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 2090,
                  "end": 2099,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2090,
                    "end": 2099,
                    "decorators": [],
                    "name": "Directive",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2101,
        "end": 2132,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2103,
          "end": 2132,
          "parameterName": {
            "type": "Identifier",
            "start": 2103,
            "end": 2113,
            "decorators": [],
            "name": "_selection",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2117,
            "end": 2132,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2117,
              "end": 2132,
              "typeName": {
                "type": "Identifier",
                "start": 2117,
                "end": 2129,
                "decorators": [],
                "name": "StepItemType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2129,
                "end": 2132,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2130,
                    "end": 2131,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2130,
                      "end": 2131,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2133,
        "end": 2152,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2137,
            "end": 2150,
            "argument": {
              "type": "Literal",
              "start": 2144,
              "end": 2149,
              "value": false,
              "raw": "false"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2154,
      "end": 2267,
      "id": {
        "type": "Identifier",
        "start": 2163,
        "end": 2177,
        "decorators": [],
        "name": "createPickStep",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2177,
        "end": 2202,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2178,
            "end": 2201,
            "name": {
              "type": "Identifier",
              "start": 2178,
              "end": 2179,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2188,
              "end": 2201,
              "typeName": {
                "type": "Identifier",
                "start": 2188,
                "end": 2201,
                "decorators": [],
                "name": "QuickPickItem",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2206,
          "end": 2228,
          "decorators": [],
          "name": "step",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2210,
            "end": 2228,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2212,
              "end": 2228,
              "typeName": {
                "type": "Identifier",
                "start": 2212,
                "end": 2225,
                "decorators": [],
                "name": "QuickPickStep",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2225,
                "end": 2228,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2226,
                    "end": 2227,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2226,
                      "end": 2227,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2230,
        "end": 2248,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2232,
          "end": 2248,
          "typeName": {
            "type": "Identifier",
            "start": 2232,
            "end": 2245,
            "decorators": [],
            "name": "QuickPickStep",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2245,
            "end": 2248,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2246,
                "end": 2247,
                "typeName": {
                  "type": "Identifier",
                  "start": 2246,
                  "end": 2247,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2249,
        "end": 2267,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2253,
            "end": 2265,
            "argument": {
              "type": "Identifier",
              "start": 2260,
              "end": 2264,
              "decorators": [],
              "name": "step",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2269,
      "end": 2751,
      "id": {
        "type": "Identifier",
        "start": 2279,
        "end": 2287,
        "decorators": [],
        "name": "showStep",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2287,
        "end": 2403,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2291,
            "end": 2337,
            "name": {
              "type": "Identifier",
              "start": 2291,
              "end": 2296,
              "decorators": [],
              "name": "State",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSIntersectionType",
              "start": 2305,
              "end": 2337,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 2305,
                  "end": 2321,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2305,
                    "end": 2321,
                    "decorators": [],
                    "name": "PartialStepState",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 2324,
                  "end": 2337,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2326,
                      "end": 2335,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2326,
                        "end": 2330,
                        "decorators": [],
                        "name": "repo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2330,
                        "end": 2335,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2332,
                          "end": 2335
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2341,
            "end": 2401,
            "name": {
              "type": "Identifier",
              "start": 2341,
              "end": 2348,
              "decorators": [],
              "name": "Context",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 2357,
              "end": 2401,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2359,
                  "end": 2372,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2359,
                    "end": 2364,
                    "decorators": [],
                    "name": "repos",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2364,
                    "end": 2371,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2366,
                      "end": 2371,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2366,
                        "end": 2369
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2373,
                  "end": 2387,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2373,
                    "end": 2378,
                    "decorators": [],
                    "name": "title",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2378,
                    "end": 2386,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2380,
                      "end": 2386
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2388,
                  "end": 2399,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2388,
                    "end": 2394,
                    "decorators": [],
                    "name": "status",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2394,
                    "end": 2399,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2396,
                      "end": 2399
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "params": [
        {
          "type": "Identifier",
          "start": 2404,
          "end": 2416,
          "decorators": [],
          "name": "state",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2409,
            "end": 2416,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2411,
              "end": 2416,
              "typeName": {
                "type": "Identifier",
                "start": 2411,
                "end": 2416,
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2418,
          "end": 2435,
          "decorators": [],
          "name": "_context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2426,
            "end": 2435,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2428,
              "end": 2435,
              "typeName": {
                "type": "Identifier",
                "start": 2428,
                "end": 2435,
                "decorators": [],
                "name": "Context",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2436,
        "end": 2472,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2438,
          "end": 2472,
          "typeName": {
            "type": "Identifier",
            "start": 2438,
            "end": 2457,
            "decorators": [],
            "name": "StepResultGenerator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2457,
            "end": 2472,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2458,
                "end": 2471,
                "typeName": {
                  "type": "Identifier",
                  "start": 2458,
                  "end": 2471,
                  "decorators": [],
                  "name": "QuickPickItem",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2473,
        "end": 2751,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2477,
            "end": 2593,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2483,
                "end": 2592,
                "id": {
                  "type": "Identifier",
                  "start": 2483,
                  "end": 2517,
                  "decorators": [],
                  "name": "step",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2487,
                    "end": 2517,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2489,
                      "end": 2517,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2489,
                        "end": 2502,
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2502,
                        "end": 2517,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2503,
                            "end": 2516,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2503,
                              "end": 2516,
                              "decorators": [],
                              "name": "QuickPickItem",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2520,
                  "end": 2592,
                  "callee": {
                    "type": "Identifier",
                    "start": 2520,
                    "end": 2534,
                    "decorators": [],
                    "name": "createPickStep",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2534,
                    "end": 2549,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2535,
                        "end": 2548,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2535,
                          "end": 2548,
                          "decorators": [],
                          "name": "QuickPickItem",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  },
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 2550,
                      "end": 2591,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2556,
                          "end": 2565,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2556,
                            "end": 2561,
                            "decorators": [],
                            "name": "title",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2563,
                            "end": 2565,
                            "value": "",
                            "raw": "\"\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2571,
                          "end": 2586,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2571,
                            "end": 2582,
                            "decorators": [],
                            "name": "placeholder",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2584,
                            "end": 2586,
                            "value": "",
                            "raw": "\"\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2596,
            "end": 2653,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2602,
                "end": 2652,
                "id": {
                  "type": "Identifier",
                  "start": 2602,
                  "end": 2639,
                  "decorators": [],
                  "name": "selection",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2611,
                    "end": 2639,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2613,
                      "end": 2639,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2613,
                        "end": 2626,
                        "decorators": [],
                        "name": "StepSelection",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2626,
                        "end": 2639,
                        "params": [
                          {
                            "type": "TSTypeQuery",
                            "start": 2627,
                            "end": 2638,
                            "exprName": {
                              "type": "Identifier",
                              "start": 2634,
                              "end": 2638,
                              "decorators": [],
                              "name": "step",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 2642,
                  "end": 2652,
                  "delegate": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 2648,
                    "end": 2652,
                    "decorators": [],
                    "name": "step",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 2656,
            "end": 2749,
            "argument": {
              "type": "ConditionalExpression",
              "start": 2663,
              "end": 2748,
              "test": {
                "type": "CallExpression",
                "start": 2663,
                "end": 2706,
                "callee": {
                  "type": "Identifier",
                  "start": 2663,
                  "end": 2682,
                  "decorators": [],
                  "name": "canPickStepContinue",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 2683,
                    "end": 2687,
                    "decorators": [],
                    "name": "step",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2689,
                    "end": 2694,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2696,
                    "end": 2705,
                    "decorators": [],
                    "name": "selection",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "consequent": {
                "type": "MemberExpression",
                "start": 2713,
                "end": 2725,
                "object": {
                  "type": "Identifier",
                  "start": 2713,
                  "end": 2722,
                  "decorators": [],
                  "name": "selection",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 2723,
                  "end": 2724,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "alternate": {
                "type": "MemberExpression",
                "start": 2732,
                "end": 2748,
                "object": {
                  "type": "Identifier",
                  "start": 2732,
                  "end": 2742,
                  "decorators": [],
                  "name": "StepResult",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2743,
                  "end": 2748,
                  "decorators": [],
                  "name": "Break",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
