__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 568,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 303,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 303,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 69,
            "end": 100,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 78,
              "end": 91,
              "name": "privateField"
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 99,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 93,
                "end": 99
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 213,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 115,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 213,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 167,
                "end": 213,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 173,
                    "end": 209,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 174,
                      "end": 207,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 174,
                        "end": 201,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 176,
                            "end": 199,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 176,
                              "end": 179,
                              "decorators": [],
                              "name": "key",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 181,
                              "end": 199,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 181,
                                "end": 185
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 186,
                                "end": 199,
                                "name": "privateField"
                              }
                            }
                          }
                        ]
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 207,
                        "decorators": [],
                        "name": "arg",
                        "optional": false
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
                  "start": 116,
                  "end": 136,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 121,
                      "end": 136,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 123,
                          "end": 134,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 123,
                            "end": 126,
                            "decorators": [],
                            "name": "key",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 126,
                            "end": 134,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 128,
                              "end": 134
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "start": 138,
                  "end": 165,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 165,
                    "decorators": [],
                    "name": "exposedField",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 157,
                      "end": 165,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 159,
                        "end": 165
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 217,
            "end": 301,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 220,
              "decorators": [],
              "name": "log",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 220,
              "end": 301,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 223,
                "end": 301,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 229,
                    "end": 261,
                    "expression": {
                      "type": "CallExpression",
                      "start": 229,
                      "end": 260,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 241,
                          "end": 259,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 241,
                            "end": 245
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 246,
                            "end": 259,
                            "name": "privateField"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 229,
                        "end": 240,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 236,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 237,
                          "end": 240,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 266,
                    "end": 297,
                    "expression": {
                      "type": "CallExpression",
                      "start": 266,
                      "end": 296,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 278,
                          "end": 295,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 278,
                            "end": 282
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 283,
                            "end": 295,
                            "decorators": [],
                            "name": "exposedField",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 266,
                        "end": 277,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 273,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 277,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 305,
      "end": 567,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 313,
        "end": 567,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 317,
            "end": 348,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 326,
              "end": 339,
              "name": "privateField"
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 347,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 341,
                "end": 347
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 352,
            "end": 477,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 363,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 363,
              "end": 477,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 415,
                "end": 477,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 421,
                    "end": 432,
                    "directive": "prologue",
                    "expression": {
                      "type": "Literal",
                      "start": 421,
                      "end": 431,
                      "raw": "\"prologue\"",
                      "value": "prologue"
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 437,
                    "end": 473,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 438,
                      "end": 471,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 438,
                        "end": 465,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 440,
                            "end": 463,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 440,
                              "end": 443,
                              "decorators": [],
                              "name": "key",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "start": 445,
                              "end": 463,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 445,
                                "end": 449
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 450,
                                "end": 463,
                                "name": "privateField"
                              }
                            }
                          }
                        ]
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 468,
                        "end": 471,
                        "decorators": [],
                        "name": "arg",
                        "optional": false
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
                  "start": 364,
                  "end": 384,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 367,
                    "end": 384,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 369,
                      "end": 384,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 371,
                          "end": 382,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 371,
                            "end": 374,
                            "decorators": [],
                            "name": "key",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 374,
                            "end": 382,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 376,
                              "end": 382
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "start": 386,
                  "end": 413,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 413,
                    "decorators": [],
                    "name": "exposedField",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 405,
                      "end": 413,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 407,
                        "end": 413
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 481,
            "end": 565,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 481,
              "end": 484,
              "decorators": [],
              "name": "log",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 484,
              "end": 565,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 487,
                "end": 565,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 493,
                    "end": 525,
                    "expression": {
                      "type": "CallExpression",
                      "start": 493,
                      "end": 524,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 505,
                          "end": 523,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 505,
                            "end": 509
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 510,
                            "end": 523,
                            "name": "privateField"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 493,
                        "end": 504,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 493,
                          "end": 500,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 501,
                          "end": 504,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 530,
                    "end": 561,
                    "expression": {
                      "type": "CallExpression",
                      "start": 530,
                      "end": 560,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 542,
                          "end": 559,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 542,
                            "end": 546
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 547,
                            "end": 559,
                            "decorators": [],
                            "name": "exposedField",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 530,
                        "end": 541,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 530,
                          "end": 537,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 538,
                          "end": 541,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 312,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
