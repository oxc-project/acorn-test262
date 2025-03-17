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
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 303,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 69,
            "end": 100,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 78,
              "end": 91,
              "name": "privateField"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 213,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 115,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 213,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 116,
                  "end": 136,
                  "name": "arg",
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
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
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
                    "name": "exposedField",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 157,
                      "end": 165,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 159,
                        "end": 165
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
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
                        "properties": [
                          {
                            "type": "Property",
                            "start": 176,
                            "end": 199,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 176,
                              "end": 179,
                              "name": "key",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "type": "Identifier",
                        "start": 204,
                        "end": 207,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 217,
            "end": 301,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 220,
              "name": "log",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 220,
              "end": 301,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 237,
                          "end": 240,
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 277,
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
                            "name": "exposedField",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
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
      "start": 305,
      "end": 567,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 312,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 313,
        "end": 567,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 317,
            "end": 348,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 326,
              "end": 339,
              "name": "privateField"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 352,
            "end": 477,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 363,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 363,
              "end": 477,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 364,
                  "end": 384,
                  "name": "arg",
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
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
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
                    "name": "exposedField",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 405,
                      "end": 413,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 407,
                        "end": 413
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
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
                        "properties": [
                          {
                            "type": "Property",
                            "start": 440,
                            "end": 463,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 440,
                              "end": 443,
                              "name": "key",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "type": "Identifier",
                        "start": 468,
                        "end": 471,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 481,
            "end": 565,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 481,
              "end": 484,
              "name": "log",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 484,
              "end": 565,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 501,
                          "end": 504,
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 538,
                          "end": 541,
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
                            "name": "exposedField",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
