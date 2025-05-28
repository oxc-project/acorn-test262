__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 567,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 303,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 303,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 69,
            "end": 100,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 78,
              "end": 91,
              "name": "privateField"
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 213,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 115,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 213,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 123,
                            "end": 126,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 126,
                            "end": 134,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 128,
                              "end": 134
                            }
                          },
                          "accessibility": null,
                          "static": false
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
              ],
              "returnType": null,
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
                        "properties": [
                          {
                            "type": "Property",
                            "start": 176,
                            "end": 199,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 176,
                              "end": 179,
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 181,
                              "end": 199,
                              "object": {
                                "type": "ThisExpression",
                                "start": 181,
                                "end": 185
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 186,
                                "end": 199,
                                "name": "privateField"
                              },
                              "optional": false,
                              "computed": false
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 207,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 217,
            "end": 301,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 220,
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 220,
              "end": 301,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 229,
                        "end": 240,
                        "object": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 236,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 237,
                          "end": 240,
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
                          "type": "MemberExpression",
                          "start": 241,
                          "end": 259,
                          "object": {
                            "type": "ThisExpression",
                            "start": 241,
                            "end": 245
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 246,
                            "end": 259,
                            "name": "privateField"
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 266,
                    "end": 297,
                    "expression": {
                      "type": "CallExpression",
                      "start": 266,
                      "end": 296,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 266,
                        "end": 277,
                        "object": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 273,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 277,
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
                          "type": "MemberExpression",
                          "start": 278,
                          "end": 295,
                          "object": {
                            "type": "ThisExpression",
                            "start": 278,
                            "end": 282
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 283,
                            "end": 295,
                            "decorators": [],
                            "name": "exposedField",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
    },
    {
      "type": "ClassDeclaration",
      "start": 305,
      "end": 567,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 312,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 313,
        "end": 567,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 317,
            "end": 348,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 326,
              "end": 339,
              "name": "privateField"
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 352,
            "end": 477,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 363,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 363,
              "end": 477,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 371,
                            "end": 374,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 374,
                            "end": 382,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 376,
                              "end": 382
                            }
                          },
                          "accessibility": null,
                          "static": false
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
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 415,
                "end": 477,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 421,
                    "end": 432,
                    "expression": {
                      "type": "Literal",
                      "start": 421,
                      "end": 431,
                      "value": "prologue",
                      "raw": "\"prologue\""
                    },
                    "directive": "prologue"
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
                        "properties": [
                          {
                            "type": "Property",
                            "start": 440,
                            "end": 463,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 440,
                              "end": 443,
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 445,
                              "end": 463,
                              "object": {
                                "type": "ThisExpression",
                                "start": 445,
                                "end": 449
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 450,
                                "end": 463,
                                "name": "privateField"
                              },
                              "optional": false,
                              "computed": false
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 468,
                        "end": 471,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 481,
            "end": 565,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 481,
              "end": 484,
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 484,
              "end": 565,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 493,
                        "end": 504,
                        "object": {
                          "type": "Identifier",
                          "start": 493,
                          "end": 500,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 501,
                          "end": 504,
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
                          "type": "MemberExpression",
                          "start": 505,
                          "end": 523,
                          "object": {
                            "type": "ThisExpression",
                            "start": 505,
                            "end": 509
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 510,
                            "end": 523,
                            "name": "privateField"
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 530,
                    "end": 561,
                    "expression": {
                      "type": "CallExpression",
                      "start": 530,
                      "end": 560,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 530,
                        "end": 541,
                        "object": {
                          "type": "Identifier",
                          "start": 530,
                          "end": 537,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 538,
                          "end": 541,
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
                          "type": "MemberExpression",
                          "start": 542,
                          "end": 559,
                          "object": {
                            "type": "ThisExpression",
                            "start": 542,
                            "end": 546
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 547,
                            "end": 559,
                            "decorators": [],
                            "name": "exposedField",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
