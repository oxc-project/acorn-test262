__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 488,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 155,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 155,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 53,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
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
              "start": 28,
              "end": 53,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 31,
                "end": 53,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 41,
                    "end": 47,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 45,
                        "end": 46,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 45,
                          "end": 46,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
            "start": 58,
            "end": 101,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 68,
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
              "start": 68,
              "end": 101,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 101,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 81,
                    "end": 95,
                    "argument": {
                      "type": "Literal",
                      "start": 88,
                      "end": 94,
                      "raw": "\"base\"",
                      "value": "base"
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
            "start": 107,
            "end": 153,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 117,
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
              "start": 117,
              "end": 153,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 120,
                "end": 153,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 130,
                    "end": 147,
                    "argument": {
                      "type": "Literal",
                      "start": 137,
                      "end": 146,
                      "raw": "\"basebar\"",
                      "value": "basebar"
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
        "start": 6,
        "end": 10,
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
      "start": 157,
      "end": 260,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 181,
        "end": 260,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 187,
            "end": 258,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 197,
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
              "start": 197,
              "end": 258,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 258,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 210,
                    "end": 252,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 217,
                      "end": 251,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 217,
                        "end": 237,
                        "operator": "+",
                        "left": {
                          "type": "Literal",
                          "start": 217,
                          "end": 223,
                          "raw": "\"sub1\"",
                          "value": "sub1"
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 226,
                          "end": 237,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 226,
                            "end": 235,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 226,
                              "end": 231
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 232,
                              "end": 235,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 240,
                        "end": 251,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 240,
                          "end": 249,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 240,
                            "end": 245
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 246,
                            "end": 249,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
        "start": 163,
        "end": 167,
        "decorators": [],
        "name": "Sub1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 176,
        "end": 180,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 263,
      "end": 358,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 290,
        "end": 358,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 296,
            "end": 356,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 306,
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
              "start": 306,
              "end": 356,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 309,
                "end": 356,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 319,
                    "end": 350,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 326,
                      "end": 349,
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "start": 326,
                        "end": 335,
                        "raw": "\"subsub1\"",
                        "value": "subsub1"
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 338,
                        "end": 349,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 338,
                          "end": 347,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 338,
                            "end": 343
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 344,
                            "end": 347,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
        "start": 269,
        "end": 276,
        "decorators": [],
        "name": "SubSub1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 285,
        "end": 289,
        "decorators": [],
        "name": "Sub1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 360,
      "end": 421,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 372,
        "end": 421,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 378,
            "end": 419,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 385,
              "end": 388,
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
              "start": 388,
              "end": 419,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 391,
                "end": 419,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 401,
                    "end": 413,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 401,
                      "end": 412,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 401,
                        "end": 410,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 401,
                          "end": 406
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 407,
                          "end": 410,
                          "decorators": [],
                          "name": "foo",
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
        "start": 366,
        "end": 371,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 423,
      "end": 442,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 441,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 428,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 431,
            "end": 441,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 435,
              "end": 439,
              "decorators": [],
              "name": "Sub1",
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
      "type": "VariableDeclaration",
      "start": 443,
      "end": 466,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 447,
          "end": 465,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 447,
            "end": 449,
            "decorators": [],
            "name": "ss",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 452,
            "end": 465,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 456,
              "end": 463,
              "decorators": [],
              "name": "SubSub1",
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
      "type": "ExpressionStatement",
      "start": 467,
      "end": 486,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 467,
        "end": 485,
        "operator": "+",
        "left": {
          "type": "CallExpression",
          "start": 467,
          "end": 474,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 467,
            "end": 472,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 467,
              "end": 468,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 469,
              "end": 472,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        },
        "right": {
          "type": "CallExpression",
          "start": 477,
          "end": 485,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 477,
            "end": 483,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 477,
              "end": 479,
              "decorators": [],
              "name": "ss",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 480,
              "end": 483,
              "decorators": [],
              "name": "foo",
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
  "sourceType": "script",
  "hashbang": null
}
```
