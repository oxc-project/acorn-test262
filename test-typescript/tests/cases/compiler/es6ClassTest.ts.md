__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1377,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 108,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 108,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 35,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "decorators": [],
              "name": "goo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 40,
            "end": 81,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 52,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 52,
              "end": 81,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 81,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 66,
                    "end": 75,
                    "argument": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 87,
            "end": 106,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 98,
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
              "start": 99,
              "end": 106,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 106,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
        "start": 6,
        "end": 9,
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
      "type": "ClassDeclaration",
      "start": 129,
      "end": 429,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 152,
        "end": 429,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 155,
            "end": 166,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 158,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 165,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 159,
                "end": 165
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 168,
            "end": 176,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "decorators": [],
              "name": "gar",
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
              "start": 174,
              "end": 175,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 178,
            "end": 197,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 181,
              "decorators": [],
              "name": "zoo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 188,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 182,
                "end": 188
              }
            },
            "value": {
              "type": "Literal",
              "start": 191,
              "end": 196,
              "raw": "\"zoo\"",
              "value": "zoo",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 199,
            "end": 206,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 205,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 202,
                "end": 205
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 228,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 212,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 212,
              "end": 228,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 215,
                "end": 228,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 217,
                    "end": 226,
                    "argument": {
                      "type": "Literal",
                      "start": 224,
                      "end": 225,
                      "raw": "0",
                      "value": 0,
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
            "start": 231,
            "end": 245,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 242,
              "decorators": [],
              "name": "boo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 242,
              "end": 245,
              "async": false,
              "body": null,
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
            "start": 247,
            "end": 276,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 255,
              "end": 258,
              "decorators": [],
              "name": "boo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 258,
              "end": 276,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 263,
                "end": 276,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 265,
                    "end": 274,
                    "argument": {
                      "type": "Identifier",
                      "start": 272,
                      "end": 273,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 259,
                  "end": 261,
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 282,
            "end": 301,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 289,
              "end": 296,
              "decorators": [],
              "name": "statVal",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 299,
              "end": 300,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 304,
            "end": 318,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 304,
              "end": 315,
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
              "type": "TSEmptyBodyFunctionExpression",
              "start": 315,
              "end": 318,
              "async": false,
              "body": null,
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
            "start": 320,
            "end": 427,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 320,
              "end": 331,
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
              "start": 331,
              "end": 427,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 368,
                "end": 427,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 378,
                    "end": 387,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 378,
                      "end": 386,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 384,
                          "end": 385,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 378,
                        "end": 383
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 390,
                    "end": 401,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 390,
                      "end": 400,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 390,
                        "end": 396,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 390,
                          "end": 394
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 395,
                          "end": 396,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 399,
                        "end": 400,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 410,
                    "end": 423,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 410,
                      "end": 422,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 410,
                        "end": 418,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 410,
                          "end": 414
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 415,
                          "end": 418,
                          "decorators": [],
                          "name": "gar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 421,
                        "end": 422,
                        "raw": "5",
                        "value": 5,
                        "regex": null,
                        "bigint": null
                      }
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
                  "start": 332,
                  "end": 334,
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": null
                },
                {
                  "type": "TSParameterProperty",
                  "start": 336,
                  "end": 353,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 353,
                    "decorators": [],
                    "name": "y",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 346,
                      "end": 353,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 347,
                        "end": 353
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 355,
                  "end": 366,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 362,
                    "end": 366,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 362,
                      "end": 364,
                      "decorators": [],
                      "name": "z",
                      "optional": true,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 365,
                      "end": 366,
                      "raw": "0",
                      "value": 0,
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 138,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 148,
        "end": 151,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 431,
      "end": 449,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 448,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 436,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 439,
            "end": 448,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 443,
              "end": 446,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 451,
      "end": 582,
      "body": {
        "type": "TSModuleBlock",
        "start": 477,
        "end": 582,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 480,
            "end": 580,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 487,
              "end": 580,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 501,
                "end": 580,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 505,
                    "end": 516,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 505,
                      "end": 508,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 508,
                      "end": 515,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 509,
                        "end": 515
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 519,
                    "end": 530,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 519,
                      "end": 522,
                      "decorators": [],
                      "name": "zoo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 522,
                      "end": 529,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 523,
                        "end": 529
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 534,
                    "end": 548,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 534,
                      "end": 545,
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
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 545,
                      "end": 548,
                      "async": false,
                      "body": null,
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
                    "start": 554,
                    "end": 568,
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 562,
                      "end": 565,
                      "decorators": [],
                      "name": "boo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 565,
                      "end": 568,
                      "async": false,
                      "body": null,
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
                    "start": 571,
                    "end": 577,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 571,
                      "end": 574,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 574,
                      "end": 577,
                      "async": false,
                      "body": null,
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
                "start": 493,
                "end": 500,
                "decorators": [],
                "name": "Provide",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 466,
        "end": 476,
        "decorators": [],
        "name": "AmbientMod",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
