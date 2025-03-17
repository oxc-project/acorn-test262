__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 848,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 381,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 381,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 46,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
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
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 85,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 85,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 85,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 69,
                    "end": 83,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 76,
                      "end": 82,
                      "object": {
                        "type": "ThisExpression",
                        "start": 76,
                        "end": 80
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
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
            "type": "MethodDefinition",
            "start": 90,
            "end": 127,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 127,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 107,
                "end": 127,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 109,
                    "end": 125,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 109,
                      "end": 124,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 109,
                        "end": 115,
                        "object": {
                          "type": "ThisExpression",
                          "start": 109,
                          "end": 113
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 115,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 118,
                        "end": 124,
                        "object": {
                          "type": "ThisExpression",
                          "start": 118,
                          "end": 122
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 124,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 166,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 143,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 143,
              "end": 166,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 166,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 148,
                    "end": 164,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 155,
                      "end": 163,
                      "object": {
                        "type": "ThisExpression",
                        "start": 155,
                        "end": 159
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 163,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
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
            "start": 172,
            "end": 197,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
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
              "start": 188,
              "end": 196,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 202,
            "end": 243,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 222,
              "end": 243,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 225,
                "end": 243,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 227,
                    "end": 241,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 234,
                      "end": 240,
                      "object": {
                        "type": "ThisExpression",
                        "start": 234,
                        "end": 238
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 239,
                        "end": 240,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
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
            "type": "MethodDefinition",
            "start": 248,
            "end": 292,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 268,
              "end": 292,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 269,
                  "end": 270,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 272,
                "end": 292,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 274,
                    "end": 290,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 274,
                      "end": 289,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 274,
                        "end": 280,
                        "object": {
                          "type": "ThisExpression",
                          "start": 274,
                          "end": 278
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 280,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 283,
                        "end": 289,
                        "object": {
                          "type": "ThisExpression",
                          "start": 283,
                          "end": 287
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 288,
                          "end": 289,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 297,
            "end": 338,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 315,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 315,
              "end": 338,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 318,
                "end": 338,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 320,
                    "end": 336,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 327,
                      "end": 335,
                      "object": {
                        "type": "ThisExpression",
                        "start": 327,
                        "end": 331
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 335,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
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
            "type": "MethodDefinition",
            "start": 343,
            "end": 379,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 358,
              "end": 361,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 361,
              "end": 379,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 364,
                "end": 379,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 366,
                    "end": 377,
                    "expression": {
                      "type": "CallExpression",
                      "start": 366,
                      "end": 376,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 366,
                        "end": 374,
                        "object": {
                          "type": "ThisExpression",
                          "start": 366,
                          "end": 370
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 371,
                          "end": 374,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
            "accessibility": "private"
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
      "start": 418,
      "end": 847,
      "id": {
        "type": "Identifier",
        "start": 424,
        "end": 426,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 427,
        "end": 847,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 433,
            "end": 451,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 441,
              "end": 442,
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
              "start": 442,
              "end": 450,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 444,
                "end": 450
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 456,
            "end": 502,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 468,
              "end": 469,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 469,
              "end": 502,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 472,
                "end": 502,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 474,
                    "end": 487,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 474,
                      "end": 486,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "MemberExpression",
                        "start": 480,
                        "end": 486,
                        "object": {
                          "type": "ThisExpression",
                          "start": 480,
                          "end": 484
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 485,
                          "end": 486,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 488,
                    "end": 500,
                    "argument": {
                      "type": "Literal",
                      "start": 495,
                      "end": 499,
                      "value": null,
                      "raw": "null"
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
            "type": "MethodDefinition",
            "start": 507,
            "end": 554,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 519,
              "end": 520,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 520,
              "end": 554,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 521,
                  "end": 522,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 524,
                "end": 554,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 526,
                    "end": 552,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 526,
                      "end": 552,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 532,
                        "end": 552,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 534,
                            "end": 550,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 534,
                              "end": 549,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 534,
                                "end": 540,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 534,
                                  "end": 538
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 539,
                                  "end": 540,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 543,
                                "end": 549,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 543,
                                  "end": 547
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 548,
                                  "end": 549,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 559,
            "end": 592,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 567,
              "end": 570,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 570,
              "end": 592,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 573,
                "end": 592,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 575,
                    "end": 590,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 575,
                      "end": 589,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "MemberExpression",
                        "start": 581,
                        "end": 589,
                        "object": {
                          "type": "ThisExpression",
                          "start": 581,
                          "end": 585
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 586,
                          "end": 589,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
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
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 598,
            "end": 623,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 613,
              "end": 614,
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
              "start": 614,
              "end": 622,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 616,
                "end": 622
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 628,
            "end": 681,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 648,
              "end": 681,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 651,
                "end": 681,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 653,
                    "end": 666,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 653,
                      "end": 665,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "MemberExpression",
                        "start": 659,
                        "end": 665,
                        "object": {
                          "type": "ThisExpression",
                          "start": 659,
                          "end": 663
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 664,
                          "end": 665,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 667,
                    "end": 679,
                    "argument": {
                      "type": "Literal",
                      "start": 674,
                      "end": 678,
                      "value": null,
                      "raw": "null"
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
            "type": "MethodDefinition",
            "start": 686,
            "end": 753,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 705,
              "end": 706,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 706,
              "end": 753,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 707,
                  "end": 708,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 710,
                "end": 753,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 720,
                    "end": 746,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 720,
                      "end": 746,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 726,
                        "end": 746,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 728,
                            "end": 744,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 728,
                              "end": 743,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 728,
                                "end": 734,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 728,
                                  "end": 732
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 733,
                                  "end": 734,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 737,
                                "end": 743,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 737,
                                  "end": 741
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 742,
                                  "end": 743,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 758,
            "end": 798,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 773,
              "end": 776,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 776,
              "end": 798,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 779,
                "end": 798,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 781,
                    "end": 796,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 781,
                      "end": 795,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "MemberExpression",
                        "start": 787,
                        "end": 795,
                        "object": {
                          "type": "ThisExpression",
                          "start": 787,
                          "end": 791
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 792,
                          "end": 795,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 803,
            "end": 845,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 818,
              "end": 821,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 821,
              "end": 845,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 824,
                "end": 845,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 826,
                    "end": 843,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 826,
                      "end": 842,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "CallExpression",
                        "start": 832,
                        "end": 842,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 832,
                          "end": 840,
                          "object": {
                            "type": "ThisExpression",
                            "start": 832,
                            "end": 836
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 837,
                            "end": 840,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "typeParameters": null,
                      "returnType": null
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
            "accessibility": "private"
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
