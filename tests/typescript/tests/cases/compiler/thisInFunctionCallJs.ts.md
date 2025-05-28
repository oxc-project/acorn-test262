__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 671,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 671,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 671,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 101,
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
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 101,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 31,
                "end": 101,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 73,
                    "end": 95,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 73,
                      "end": 94,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 73,
                        "end": 82,
                        "object": {
                          "type": "ThisExpression",
                          "start": 73,
                          "end": 77
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 82,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 85,
                        "end": 94,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 86,
                            "end": 87,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "start": 89,
                            "end": 90,
                            "value": 2,
                            "raw": "2"
                          },
                          {
                            "type": "Literal",
                            "start": 92,
                            "end": 93,
                            "value": 3,
                            "raw": "3"
                          }
                        ]
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 217,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 116,
              "decorators": [],
              "name": "finderRaw",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 116,
              "end": 217,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 119,
                "end": 217,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 129,
                    "end": 211,
                    "expression": {
                      "type": "CallExpression",
                      "start": 129,
                      "end": 211,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 129,
                        "end": 143,
                        "object": {
                          "type": "MemberExpression",
                          "start": 129,
                          "end": 138,
                          "object": {
                            "type": "ThisExpression",
                            "start": 129,
                            "end": 133
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 138,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 143,
                          "decorators": [],
                          "name": "find",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "FunctionExpression",
                          "start": 144,
                          "end": 210,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 154,
                              "end": 155,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 157,
                            "end": 210,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 171,
                                "end": 200,
                                "argument": {
                                  "type": "BinaryExpression",
                                  "start": 178,
                                  "end": 200,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 178,
                                    "end": 179,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 184,
                                    "end": 200,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 184,
                                      "end": 193,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 184,
                                        "end": 188
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 189,
                                        "end": 193,
                                        "decorators": [],
                                        "name": "data",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 194,
                                      "end": 200,
                                      "decorators": [],
                                      "name": "length",
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
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 223,
            "end": 345,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 235,
              "decorators": [],
              "name": "forEacherRaw",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 235,
              "end": 345,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 238,
                "end": 345,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 248,
                    "end": 339,
                    "expression": {
                      "type": "CallExpression",
                      "start": 248,
                      "end": 339,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 248,
                        "end": 265,
                        "object": {
                          "type": "MemberExpression",
                          "start": 248,
                          "end": 257,
                          "object": {
                            "type": "ThisExpression",
                            "start": 248,
                            "end": 252
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 253,
                            "end": 257,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 258,
                          "end": 265,
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "FunctionExpression",
                          "start": 266,
                          "end": 338,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 276,
                              "end": 277,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 279,
                            "end": 338,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 293,
                                "end": 328,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 293,
                                  "end": 328,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 293,
                                    "end": 304,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 293,
                                      "end": 300,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 301,
                                      "end": 304,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "start": 305,
                                      "end": 327,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 305,
                                        "end": 306,
                                        "decorators": [],
                                        "name": "d",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "MemberExpression",
                                        "start": 311,
                                        "end": 327,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 311,
                                          "end": 320,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 311,
                                            "end": 315
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 316,
                                            "end": 320,
                                            "decorators": [],
                                            "name": "data",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 321,
                                          "end": 327,
                                          "decorators": [],
                                          "name": "length",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      }
                                    }
                                  ],
                                  "optional": false
                                },
                                "directive": null
                              }
                            ]
                          },
                          "expression": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 351,
            "end": 513,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 351,
              "end": 360,
              "decorators": [],
              "name": "forEacher",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 360,
              "end": 513,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 363,
                "end": 513,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 373,
                    "end": 507,
                    "expression": {
                      "type": "CallExpression",
                      "start": 373,
                      "end": 507,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 373,
                        "end": 390,
                        "object": {
                          "type": "MemberExpression",
                          "start": 373,
                          "end": 382,
                          "object": {
                            "type": "ThisExpression",
                            "start": 373,
                            "end": 377
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 378,
                            "end": 382,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 383,
                          "end": 390,
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "FunctionExpression",
                          "start": 428,
                          "end": 500,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 438,
                              "end": 439,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 441,
                            "end": 500,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 455,
                                "end": 490,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 455,
                                  "end": 490,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 455,
                                    "end": 466,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 455,
                                      "end": 462,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 463,
                                      "end": 466,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "BinaryExpression",
                                      "start": 467,
                                      "end": 489,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 467,
                                        "end": 468,
                                        "decorators": [],
                                        "name": "d",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "MemberExpression",
                                        "start": 473,
                                        "end": 489,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 473,
                                          "end": 482,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 473,
                                            "end": 477
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 478,
                                            "end": 482,
                                            "decorators": [],
                                            "name": "data",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 483,
                                          "end": 489,
                                          "decorators": [],
                                          "name": "length",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      }
                                    }
                                  ],
                                  "optional": false
                                },
                                "directive": null
                              }
                            ]
                          },
                          "expression": false
                        },
                        {
                          "type": "ThisExpression",
                          "start": 502,
                          "end": 506
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 519,
            "end": 669,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 519,
              "end": 525,
              "decorators": [],
              "name": "finder",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 525,
              "end": 669,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 528,
                "end": 669,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 538,
                    "end": 663,
                    "expression": {
                      "type": "CallExpression",
                      "start": 538,
                      "end": 663,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 538,
                        "end": 552,
                        "object": {
                          "type": "MemberExpression",
                          "start": 538,
                          "end": 547,
                          "object": {
                            "type": "ThisExpression",
                            "start": 538,
                            "end": 542
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 543,
                            "end": 547,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 548,
                          "end": 552,
                          "decorators": [],
                          "name": "find",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "FunctionExpression",
                          "start": 590,
                          "end": 656,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 600,
                              "end": 601,
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 603,
                            "end": 656,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 617,
                                "end": 646,
                                "argument": {
                                  "type": "BinaryExpression",
                                  "start": 624,
                                  "end": 646,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 624,
                                    "end": 625,
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 630,
                                    "end": 646,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 630,
                                      "end": 639,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 630,
                                        "end": 634
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 635,
                                        "end": 639,
                                        "decorators": [],
                                        "name": "data",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 640,
                                      "end": 646,
                                      "decorators": [],
                                      "name": "length",
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
                        },
                        {
                          "type": "ThisExpression",
                          "start": 658,
                          "end": 662
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
