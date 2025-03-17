__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1378,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 108,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 35,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "name": "goo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 40,
            "end": 81,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 52,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 52,
              "end": 81,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 87,
            "end": 106,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 98,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 99,
              "end": 106,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 106,
                "body": []
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
    },
    {
      "type": "ClassDeclaration",
      "start": 129,
      "end": 429,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 138,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 148,
        "end": 151,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 152,
        "end": 429,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 155,
            "end": 166,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 158,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 168,
            "end": 176,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "name": "gar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 174,
              "end": 175,
              "value": 0,
              "raw": "0"
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
            "type": "PropertyDefinition",
            "start": 178,
            "end": 197,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 181,
              "name": "zoo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 191,
              "end": 196,
              "value": "zoo",
              "raw": "\"zoo\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 199,
            "end": 206,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 209,
            "end": 228,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 212,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 212,
              "end": 228,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 0,
                      "raw": "0"
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 231,
            "end": 245,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 242,
              "name": "boo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 242,
              "end": 245,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 247,
            "end": 276,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 255,
              "end": 258,
              "name": "boo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 258,
              "end": 276,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 259,
                  "end": 261,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": true
                }
              ],
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
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
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 282,
            "end": 301,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 289,
              "end": 296,
              "name": "statVal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 299,
              "end": 300,
              "value": 0,
              "raw": "0"
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
            "start": 304,
            "end": 318,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 304,
              "end": 315,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 315,
              "end": 318,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 320,
            "end": 427,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 320,
              "end": 331,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 331,
              "end": 427,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 332,
                  "end": 334,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": true
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
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 346,
                      "end": 353,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 347,
                        "end": 353
                      }
                    },
                    "decorators": [],
                    "optional": true
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
                    "left": {
                      "type": "Identifier",
                      "start": 362,
                      "end": 364,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 365,
                      "end": 366,
                      "value": 0,
                      "raw": "0"
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 368,
                "end": 427,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 378,
                    "end": 387,
                    "expression": {
                      "type": "CallExpression",
                      "start": 378,
                      "end": 386,
                      "callee": {
                        "type": "Super",
                        "start": 378,
                        "end": 383
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 384,
                          "end": 385,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 390,
                    "end": 401,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 390,
                      "end": 400,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 390,
                        "end": 396,
                        "object": {
                          "type": "ThisExpression",
                          "start": 390,
                          "end": 394
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 395,
                          "end": 396,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 399,
                        "end": 400,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 410,
                    "end": 423,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 410,
                      "end": 422,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 410,
                        "end": 418,
                        "object": {
                          "type": "ThisExpression",
                          "start": 410,
                          "end": 414
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 415,
                          "end": 418,
                          "name": "gar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 421,
                        "end": 422,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 436,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 439,
            "end": 448,
            "callee": {
              "type": "Identifier",
              "start": 443,
              "end": 446,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 451,
      "end": 582,
      "id": {
        "type": "Identifier",
        "start": 466,
        "end": 476,
        "name": "AmbientMod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 477,
        "end": 582,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 480,
            "end": 580,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 487,
              "end": 580,
              "id": {
                "type": "Identifier",
                "start": 493,
                "end": 500,
                "name": "Provide",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 501,
                "end": 580,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 505,
                    "end": 516,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 505,
                      "end": 508,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
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
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 519,
                    "end": 530,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 519,
                      "end": 522,
                      "name": "zoo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
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
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 534,
                    "end": 548,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 534,
                      "end": 545,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 545,
                      "end": 548,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 554,
                    "end": 568,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 562,
                      "end": 565,
                      "name": "boo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 565,
                      "end": 568,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 571,
                    "end": 577,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 571,
                      "end": 574,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 574,
                      "end": 577,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": null,
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
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
