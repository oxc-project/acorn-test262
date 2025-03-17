__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 560,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MetaProperty",
            "start": 10,
            "end": 20,
            "meta": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
              "name": "new",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 14,
              "end": 20,
              "name": "target",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 32,
            "end": 48,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "MetaProperty",
              "start": 38,
              "end": 48,
              "meta": {
                "type": "Identifier",
                "start": 38,
                "end": 41,
                "name": "new",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 42,
                "end": 48,
                "name": "target",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 394,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 394,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 83,
            "static": false,
            "computed": true,
            "key": {
              "type": "MetaProperty",
              "start": 66,
              "end": 76,
              "meta": {
                "type": "Identifier",
                "start": 66,
                "end": 69,
                "name": "new",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 70,
                "end": 76,
                "name": "target",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 83,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 83,
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
          },
          {
            "type": "MethodDefinition",
            "start": 88,
            "end": 114,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 114,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 114,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 94,
                    "end": 112,
                    "argument": {
                      "type": "MetaProperty",
                      "start": 101,
                      "end": 111,
                      "meta": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 104,
                        "name": "new",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 111,
                        "name": "target",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 149,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 124,
              "end": 149,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 149,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 129,
                    "end": 147,
                    "argument": {
                      "type": "MetaProperty",
                      "start": 136,
                      "end": 146,
                      "meta": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 139,
                        "name": "new",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 140,
                        "end": 146,
                        "name": "target",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 182,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 159,
              "end": 182,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "name": "_",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 163,
                "end": 182,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 165,
                    "end": 180,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 165,
                      "end": 179,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "name": "_",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "MetaProperty",
                        "start": 169,
                        "end": 179,
                        "meta": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 172,
                          "name": "new",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 179,
                          "name": "target",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
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
          },
          {
            "type": "PropertyDefinition",
            "start": 187,
            "end": 208,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 191,
              "end": 207,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "MetaProperty",
                "start": 197,
                "end": 207,
                "meta": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 200,
                  "name": "new",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 207,
                  "name": "target",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
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
            "start": 214,
            "end": 239,
            "static": true,
            "computed": true,
            "key": {
              "type": "MetaProperty",
              "start": 222,
              "end": 232,
              "meta": {
                "type": "Identifier",
                "start": 222,
                "end": 225,
                "name": "new",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 226,
                "end": 232,
                "name": "target",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 233,
              "end": 239,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 236,
                "end": 239,
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
          },
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 277,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 251,
              "end": 252,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 252,
              "end": 277,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 255,
                "end": 277,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 257,
                    "end": 275,
                    "argument": {
                      "type": "MetaProperty",
                      "start": 264,
                      "end": 274,
                      "meta": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 267,
                        "name": "new",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 274,
                        "name": "target",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 282,
            "end": 319,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 294,
              "end": 319,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 297,
                "end": 319,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 299,
                    "end": 317,
                    "argument": {
                      "type": "MetaProperty",
                      "start": 306,
                      "end": 316,
                      "meta": {
                        "type": "Identifier",
                        "start": 306,
                        "end": 309,
                        "name": "new",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 316,
                        "name": "target",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 324,
            "end": 359,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 336,
              "end": 359,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 337,
                  "end": 338,
                  "name": "_",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 340,
                "end": 359,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 342,
                    "end": 357,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 342,
                      "end": 356,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 342,
                        "end": 343,
                        "name": "_",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "MetaProperty",
                        "start": 346,
                        "end": 356,
                        "meta": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 349,
                          "name": "new",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 350,
                          "end": 356,
                          "name": "target",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
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
          },
          {
            "type": "PropertyDefinition",
            "start": 364,
            "end": 392,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
              "name": "j",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 375,
              "end": 391,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "MetaProperty",
                "start": 381,
                "end": 391,
                "meta": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 384,
                  "name": "new",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 385,
                  "end": 391,
                  "name": "target",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "start": 396,
      "end": 560,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 402,
          "end": 559,
          "id": {
            "type": "Identifier",
            "start": 402,
            "end": 403,
            "name": "O",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 406,
            "end": 559,
            "properties": [
              {
                "type": "Property",
                "start": 412,
                "end": 435,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MetaProperty",
                  "start": 413,
                  "end": 423,
                  "meta": {
                    "type": "Identifier",
                    "start": 413,
                    "end": 416,
                    "name": "new",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 423,
                    "name": "target",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "value": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 435,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 441,
                "end": 467,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 442,
                  "name": "k",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 442,
                  "end": 467,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 445,
                    "end": 467,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 447,
                        "end": 465,
                        "argument": {
                          "type": "MetaProperty",
                          "start": 454,
                          "end": 464,
                          "meta": {
                            "type": "Identifier",
                            "start": 454,
                            "end": 457,
                            "name": "new",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 458,
                            "end": 464,
                            "name": "target",
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
              },
              {
                "type": "Property",
                "start": 473,
                "end": 503,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 477,
                  "end": 478,
                  "name": "l",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 478,
                  "end": 503,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 481,
                    "end": 503,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 483,
                        "end": 501,
                        "argument": {
                          "type": "MetaProperty",
                          "start": 490,
                          "end": 500,
                          "meta": {
                            "type": "Identifier",
                            "start": 490,
                            "end": 493,
                            "name": "new",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 494,
                            "end": 500,
                            "name": "target",
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
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 509,
                "end": 537,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 514,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 514,
                  "end": 537,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 515,
                      "end": 516,
                      "name": "_",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 518,
                    "end": 537,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 520,
                        "end": 535,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 520,
                          "end": 534,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 520,
                            "end": 521,
                            "name": "_",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "MetaProperty",
                            "start": 524,
                            "end": 534,
                            "meta": {
                              "type": "Identifier",
                              "start": 524,
                              "end": 527,
                              "name": "new",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 528,
                              "end": 534,
                              "name": "target",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
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
                "kind": "set",
                "optional": false
              },
              {
                "type": "Property",
                "start": 543,
                "end": 556,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 543,
                  "end": 544,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MetaProperty",
                  "start": 546,
                  "end": 556,
                  "meta": {
                    "type": "Identifier",
                    "start": 546,
                    "end": 549,
                    "name": "new",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 550,
                    "end": 556,
                    "name": "target",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
