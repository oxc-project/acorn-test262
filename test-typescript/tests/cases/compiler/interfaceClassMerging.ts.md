interfaceClassMerging.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 674,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 141,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 141,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 20,
            "end": 46,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 26,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 27,
                "end": 36,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 28,
                  "end": 36,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 30,
                    "end": 36
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 51,
            "end": 86,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 65,
              "decorators": [],
              "name": "optionalMethod",
              "optional": false
            },
            "kind": "method",
            "optional": true,
            "params": [
              {
                "type": "Identifier",
                "start": 67,
                "end": 76,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 68,
                  "end": 76,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 70,
                    "end": 76
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              }
            },
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 91,
            "end": 108,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 99,
              "decorators": [],
              "name": "property",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 107,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 101,
                "end": 107
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 113,
            "end": 139,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 129,
              "decorators": [],
              "name": "optionalProperty",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 143,
      "end": 268,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 153,
        "end": 268,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 159,
            "end": 186,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 177,
              "decorators": [],
              "name": "additionalProperty",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 192,
            "end": 266,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 208,
              "decorators": [],
              "name": "additionalMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 208,
              "end": 266,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 228,
                "end": 266,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 238,
                    "end": 260,
                    "argument": {
                      "type": "CallExpression",
                      "start": 245,
                      "end": 259,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 257,
                          "end": 258,
                          "raw": "0",
                          "value": 0
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 245,
                        "end": 256,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 245,
                          "end": 249
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 250,
                          "end": 256,
                          "decorators": [],
                          "name": "method",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 209,
                  "end": 218,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 210,
                    "end": 218,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 212,
                      "end": 218
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 219,
                "end": 227,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 221,
                  "end": 227
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 152,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 270,
      "end": 363,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 292,
        "end": 363,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 298,
            "end": 361,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 298,
              "end": 304,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 304,
              "end": 361,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 316,
                "end": 361,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 326,
                    "end": 355,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 333,
                      "end": 354,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 333,
                        "end": 337
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 338,
                        "end": 354,
                        "decorators": [],
                        "name": "optionalProperty",
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
                  "start": 305,
                  "end": 314,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 306,
                    "end": 314,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 308,
                      "end": 314
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 279,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 288,
        "end": 291,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 366,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 385,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 370,
            "end": 373,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 376,
            "end": 385,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 380,
              "end": 383,
              "decorators": [],
              "name": "Bar",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 387,
      "end": 401,
      "expression": {
        "type": "CallExpression",
        "start": 387,
        "end": 400,
        "arguments": [
          {
            "type": "Literal",
            "start": 398,
            "end": 399,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 387,
          "end": 397,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 387,
            "end": 390,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 391,
            "end": 397,
            "decorators": [],
            "name": "method",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 402,
      "end": 424,
      "expression": {
        "type": "CallExpression",
        "start": 402,
        "end": 423,
        "arguments": [
          {
            "type": "Literal",
            "start": 421,
            "end": 422,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 402,
          "end": 420,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 402,
            "end": 405,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 406,
            "end": 420,
            "decorators": [],
            "name": "optionalMethod",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 425,
      "end": 438,
      "expression": {
        "type": "MemberExpression",
        "start": 425,
        "end": 437,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 425,
          "end": 428,
          "decorators": [],
          "name": "bar",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 429,
          "end": 437,
          "decorators": [],
          "name": "property",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 439,
      "end": 460,
      "expression": {
        "type": "MemberExpression",
        "start": 439,
        "end": 459,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 439,
          "end": 442,
          "decorators": [],
          "name": "bar",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 443,
          "end": 459,
          "decorators": [],
          "name": "optionalProperty",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 461,
      "end": 484,
      "expression": {
        "type": "MemberExpression",
        "start": 461,
        "end": 483,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 461,
          "end": 464,
          "decorators": [],
          "name": "bar",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 465,
          "end": 483,
          "decorators": [],
          "name": "additionalProperty",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 485,
      "end": 509,
      "expression": {
        "type": "CallExpression",
        "start": 485,
        "end": 508,
        "arguments": [
          {
            "type": "Literal",
            "start": 506,
            "end": 507,
            "raw": "2",
            "value": 2
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 485,
          "end": 505,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 485,
            "end": 488,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 489,
            "end": 505,
            "decorators": [],
            "name": "additionalMethod",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 511,
      "end": 650,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 515,
          "end": 649,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 649,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 518,
              "end": 649,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 520,
                "end": 649,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 526,
                    "end": 552,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 526,
                      "end": 532,
                      "decorators": [],
                      "name": "method",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 533,
                        "end": 542,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 534,
                          "end": 542,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 536,
                            "end": 542
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 543,
                      "end": 551,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 545,
                        "end": 551
                      }
                    },
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 557,
                    "end": 574,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 557,
                      "end": 565,
                      "decorators": [],
                      "name": "property",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 565,
                      "end": 573,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 567,
                        "end": 573
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 579,
                    "end": 606,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 579,
                      "end": 597,
                      "decorators": [],
                      "name": "additionalProperty",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 597,
                      "end": 605,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 599,
                        "end": 605
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 611,
                    "end": 647,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 611,
                      "end": 627,
                      "decorators": [],
                      "name": "additionalMethod",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 628,
                        "end": 637,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 629,
                          "end": 637,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 631,
                            "end": 637
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 638,
                      "end": 646,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 640,
                        "end": 646
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 652,
      "end": 662,
      "expression": {
        "type": "AssignmentExpression",
        "start": 652,
        "end": 661,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 652,
          "end": 655,
          "decorators": [],
          "name": "bar",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 658,
          "end": 661,
          "decorators": [],
          "name": "obj",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 663,
      "end": 673,
      "expression": {
        "type": "AssignmentExpression",
        "start": 663,
        "end": 672,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 663,
          "end": 666,
          "decorators": [],
          "name": "obj",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 669,
          "end": 672,
          "decorators": [],
          "name": "bar",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
