__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 766,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 749,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 749,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 57,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 19,
              "end": 25,
              "name": "value"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 57,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 53,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 53,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 29,
                      "end": 53,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 31,
                          "end": 51,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 31,
                            "end": 34,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 34,
                            "end": 51,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 36,
                              "end": 51,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 38,
                                  "end": 49,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 38,
                                    "end": 41,
                                    "name": "bar",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 41,
                                    "end": 49,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 43,
                                      "end": 49
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 55,
                "end": 57,
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
            "start": 60,
            "end": 90,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 64,
              "end": 74,
              "name": "valueRest"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 74,
              "end": 90,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 75,
                  "end": 86,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 76,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 78,
                      "end": 86,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 78,
                        "end": 84
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 88,
                "end": 90,
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
            "start": 93,
            "end": 120,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 97,
              "end": 106,
              "name": "valueOne"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 106,
              "end": 120,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 107,
                  "end": 116,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 116,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 110,
                      "end": 116
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 120,
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
            "start": 123,
            "end": 155,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 127,
              "end": 141,
              "name": "valueCompound"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 141,
              "end": 155,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 142,
                  "end": 151,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 143,
                    "end": 151,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 145,
                      "end": 151
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 153,
                "end": 155,
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
            "start": 159,
            "end": 747,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 160,
              "end": 747,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 163,
                "end": 747,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 169,
                    "end": 192,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 175,
                        "end": 191,
                        "id": {
                          "type": "Identifier",
                          "start": 175,
                          "end": 178,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 181,
                          "end": 191,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 183,
                              "end": 189,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 183,
                                "end": 186,
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 188,
                                "end": 189,
                                "value": 1,
                                "raw": "1"
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
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 197,
                    "end": 222,
                    "expression": {
                      "type": "CallExpression",
                      "start": 197,
                      "end": 221,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 197,
                        "end": 208,
                        "object": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 204,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 208,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 209,
                          "end": 220,
                          "object": {
                            "type": "ThisExpression",
                            "start": 209,
                            "end": 213
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 214,
                            "end": 220,
                            "name": "value"
                          },
                          "computed": false,
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
                    "start": 236,
                    "end": 258,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 236,
                      "end": 257,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 236,
                        "end": 247,
                        "object": {
                          "type": "ThisExpression",
                          "start": 236,
                          "end": 240
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 241,
                          "end": 247,
                          "name": "value"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 250,
                        "end": 257,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 252,
                            "end": 255,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 252,
                              "end": 255,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 252,
                              "end": 255,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 269,
                    "end": 291,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 269,
                      "end": 290,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 269,
                        "end": 280,
                        "object": {
                          "type": "ThisExpression",
                          "start": 269,
                          "end": 273
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 274,
                          "end": 280,
                          "name": "value"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 283,
                        "end": 290,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 285,
                            "end": 288,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 285,
                              "end": 288,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 285,
                              "end": 288,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 302,
                    "end": 324,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 302,
                      "end": 323,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 302,
                        "end": 317,
                        "object": {
                          "type": "MemberExpression",
                          "start": 302,
                          "end": 313,
                          "object": {
                            "type": "ThisExpression",
                            "start": 302,
                            "end": 306
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 307,
                            "end": 313,
                            "name": "value"
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 314,
                          "end": 317,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 320,
                        "end": 323,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 339,
                    "end": 377,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 340,
                      "end": 375,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 340,
                        "end": 358,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 342,
                            "end": 356,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 342,
                              "end": 343,
                              "name": "o",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 345,
                              "end": 356,
                              "object": {
                                "type": "ThisExpression",
                                "start": 345,
                                "end": 349
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 350,
                                "end": 356,
                                "name": "value"
                              },
                              "computed": false,
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 361,
                        "end": 375,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 363,
                            "end": 373,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 363,
                              "end": 364,
                              "name": "o",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ObjectExpression",
                              "start": 366,
                              "end": 373,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 368,
                                  "end": 371,
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 368,
                                    "end": 371,
                                    "name": "foo",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 368,
                                    "end": 371,
                                    "name": "foo",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 387,
                    "end": 418,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 388,
                      "end": 416,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 388,
                        "end": 406,
                        "properties": [
                          {
                            "type": "RestElement",
                            "start": 390,
                            "end": 404,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 393,
                              "end": 404,
                              "object": {
                                "type": "ThisExpression",
                                "start": 393,
                                "end": 397
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 398,
                                "end": 404,
                                "name": "value"
                              },
                              "computed": false,
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 409,
                        "end": 416,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 411,
                            "end": 414,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 411,
                              "end": 414,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 411,
                              "end": 414,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 429,
                    "end": 466,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 430,
                      "end": 464,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 430,
                        "end": 454,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 432,
                            "end": 452,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 432,
                              "end": 435,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 437,
                              "end": 452,
                              "object": {
                                "type": "MemberExpression",
                                "start": 437,
                                "end": 448,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 437,
                                  "end": 441
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 442,
                                  "end": 448,
                                  "name": "value"
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 449,
                                "end": 452,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 457,
                        "end": 464,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 459,
                            "end": 462,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 459,
                              "end": 462,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 459,
                              "end": 462,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 479,
                    "end": 534,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 480,
                      "end": 532,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 480,
                        "end": 522,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 488,
                            "end": 515,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 488,
                              "end": 491,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ObjectPattern",
                              "start": 493,
                              "end": 515,
                              "properties": [
                                {
                                  "type": "RestElement",
                                  "start": 495,
                                  "end": 513,
                                  "argument": {
                                    "type": "MemberExpression",
                                    "start": 498,
                                    "end": 513,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 498,
                                      "end": 509,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 498,
                                        "end": 502
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 503,
                                        "end": 509,
                                        "name": "value"
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 510,
                                      "end": 513,
                                      "name": "foo",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "decorators": [],
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "value": null
                                }
                              ],
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 525,
                        "end": 532,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 527,
                            "end": 530,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 527,
                              "end": 530,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 527,
                              "end": 530,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 548,
                    "end": 575,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 552,
                        "end": 574,
                        "id": {
                          "type": "Identifier",
                          "start": 552,
                          "end": 553,
                          "name": "r",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 556,
                          "end": 574,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 558,
                              "end": 572,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 558,
                                "end": 559,
                                "name": "o",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "MemberExpression",
                                "start": 561,
                                "end": 572,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 561,
                                  "end": 565
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 566,
                                  "end": 572,
                                  "name": "value"
                                },
                                "computed": false,
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 589,
                    "end": 638,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 589,
                      "end": 637,
                      "operator": "=",
                      "left": {
                        "type": "ArrayPattern",
                        "start": 589,
                        "end": 625,
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "start": 590,
                            "end": 604,
                            "object": {
                              "type": "ThisExpression",
                              "start": 590,
                              "end": 594
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 595,
                              "end": 604,
                              "name": "valueOne"
                            },
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "RestElement",
                            "start": 606,
                            "end": 624,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 609,
                              "end": 624,
                              "object": {
                                "type": "ThisExpression",
                                "start": 609,
                                "end": 613
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 614,
                                "end": 624,
                                "name": "valueRest"
                              },
                              "computed": false,
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 628,
                        "end": 637,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 629,
                            "end": 630,
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "Literal",
                            "start": 632,
                            "end": 633,
                            "value": 2,
                            "raw": "2"
                          },
                          {
                            "type": "Literal",
                            "start": 635,
                            "end": 636,
                            "value": 3,
                            "raw": "3"
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 643,
                    "end": 712,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 647,
                        "end": 711,
                        "id": {
                          "type": "Identifier",
                          "start": 647,
                          "end": 650,
                          "name": "arr",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 653,
                          "end": 711,
                          "elements": [
                            {
                              "type": "MemberExpression",
                              "start": 663,
                              "end": 677,
                              "object": {
                                "type": "ThisExpression",
                                "start": 663,
                                "end": 667
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 668,
                                "end": 677,
                                "name": "valueOne"
                              },
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "SpreadElement",
                              "start": 687,
                              "end": 705,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 690,
                                "end": 705,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 690,
                                  "end": 694
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 695,
                                  "end": 705,
                                  "name": "valueRest"
                                },
                                "computed": false,
                                "optional": false
                              }
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 718,
                    "end": 743,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 718,
                      "end": 742,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 718,
                        "end": 737,
                        "object": {
                          "type": "ThisExpression",
                          "start": 718,
                          "end": 722
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 723,
                          "end": 737,
                          "name": "valueCompound"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 741,
                        "end": 742,
                        "value": 3,
                        "raw": "3"
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
      "type": "ExpressionStatement",
      "start": 750,
      "end": 765,
      "expression": {
        "type": "CallExpression",
        "start": 750,
        "end": 764,
        "callee": {
          "type": "MemberExpression",
          "start": 750,
          "end": 762,
          "object": {
            "type": "NewExpression",
            "start": 750,
            "end": 760,
            "callee": {
              "type": "Identifier",
              "start": 754,
              "end": 758,
              "name": "Test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 761,
            "end": 762,
            "name": "m",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
