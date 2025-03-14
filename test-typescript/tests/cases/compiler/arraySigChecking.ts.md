arraySigChecking.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 512,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 204,
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 204,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 23,
            "end": 49,
            "body": {
              "type": "TSInterfaceBody",
              "start": 38,
              "end": 49,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 40,
                  "end": 47,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 46,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 43,
                      "end": 46
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 37,
              "decorators": [],
              "name": "iBar",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 54,
            "end": 105,
            "body": {
              "type": "TSInterfaceBody",
              "start": 82,
              "end": 105,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 92,
                  "end": 99,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 93,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 95,
                      "end": 98
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 77,
                "end": 81,
                "expression": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 81,
                  "decorators": [],
                  "name": "iBar",
                  "optional": false
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 64,
              "end": 68,
              "decorators": [],
              "name": "iFoo",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 111,
            "end": 145,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 122,
              "end": 145,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 132,
                  "end": 139,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 133,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 135,
                      "end": 138
                    }
                  },
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 117,
              "end": 121,
              "decorators": [],
              "name": "cFoo",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "VariableDeclaration",
            "start": 151,
            "end": 178,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 177,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 177,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 158,
                    "end": 177,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 160,
                      "end": 177,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 162,
                          "end": 175,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 163,
                              "end": 173,
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 168,
                                "end": 173,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 170,
                                  "end": 173
                                }
                              }
                            }
                          ],
                          "readonly": false,
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
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 206,
      "end": 245,
      "body": {
        "type": "TSInterfaceBody",
        "start": 222,
        "end": 245,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 228,
            "end": 243,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 234,
              "decorators": [],
              "name": "voidFn",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 242,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 238,
                "end": 242
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 221,
        "decorators": [],
        "name": "myInt",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 262,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 262,
            "decorators": [],
            "name": "myVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 262,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 257,
                "end": 262,
                "typeName": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 262,
                  "decorators": [],
                  "name": "myInt",
                  "optional": false
                }
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
      "type": "VariableDeclaration",
      "start": 264,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 305,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 286,
            "decorators": [],
            "name": "strArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 286,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 278,
                "end": 286,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 278,
                  "end": 284
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 289,
            "end": 305,
            "elements": [
              {
                "type": "CallExpression",
                "start": 290,
                "end": 304,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 290,
                  "end": 302,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 295,
                    "decorators": [],
                    "name": "myVar",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 302,
                    "decorators": [],
                    "name": "voidFn",
                    "optional": false
                  }
                },
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 309,
      "end": 335,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 334,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 334,
            "decorators": [],
            "name": "myArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 320,
              "end": 334,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 322,
                "end": 334,
                "elementType": {
                  "type": "TSArrayType",
                  "start": 322,
                  "end": 332,
                  "elementType": {
                    "type": "TSArrayType",
                    "start": 322,
                    "end": 330,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 322,
                      "end": 328
                    }
                  }
                }
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
      "start": 336,
      "end": 355,
      "expression": {
        "type": "AssignmentExpression",
        "start": 336,
        "end": 354,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 336,
          "end": 343,
          "decorators": [],
          "name": "myArray",
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 346,
          "end": 354,
          "elements": [
            {
              "type": "ArrayExpression",
              "start": 347,
              "end": 353,
              "elements": [
                {
                  "type": "Literal",
                  "start": 348,
                  "end": 349,
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 351,
                  "end": 352,
                  "raw": "2",
                  "value": 2
                }
              ]
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 357,
      "end": 427,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 397,
        "end": 427,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 403,
            "end": 425,
            "argument": {
              "type": "BinaryExpression",
              "start": 410,
              "end": 424,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 410,
                "end": 418,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 411,
                  "decorators": [],
                  "name": "l",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 418,
                  "decorators": [],
                  "name": "length",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 423,
                "end": 424,
                "raw": "0",
                "value": 0
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 373,
        "decorators": [],
        "name": "isEmpty",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 374,
          "end": 395,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 375,
            "end": 395,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 377,
              "end": 395,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 379,
                  "end": 393,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 385,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 385,
                    "end": 393,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 387,
                      "end": 393
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 429,
      "end": 441,
      "expression": {
        "type": "CallExpression",
        "start": 429,
        "end": 440,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 437,
            "end": 439,
            "elements": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 429,
          "end": 436,
          "decorators": [],
          "name": "isEmpty",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 464,
      "expression": {
        "type": "CallExpression",
        "start": 442,
        "end": 463,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 450,
            "end": 462,
            "arguments": [
              {
                "type": "Literal",
                "start": 460,
                "end": 461,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 454,
              "end": 459,
              "decorators": [],
              "name": "Array",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 442,
          "end": 449,
          "decorators": [],
          "name": "isEmpty",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 465,
      "end": 495,
      "expression": {
        "type": "CallExpression",
        "start": 465,
        "end": 494,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 473,
            "end": 493,
            "arguments": [
              {
                "type": "Literal",
                "start": 491,
                "end": 492,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 477,
              "end": 482,
              "decorators": [],
              "name": "Array",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 482,
              "end": 490,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 483,
                  "end": 489
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 465,
          "end": 472,
          "decorators": [],
          "name": "isEmpty",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 496,
      "end": 511,
      "expression": {
        "type": "CallExpression",
        "start": 496,
        "end": 510,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 504,
            "end": 509,
            "elements": [
              {
                "type": "Literal",
                "start": 505,
                "end": 508,
                "raw": "'a'",
                "value": "a"
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 496,
          "end": 503,
          "decorators": [],
          "name": "isEmpty",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
