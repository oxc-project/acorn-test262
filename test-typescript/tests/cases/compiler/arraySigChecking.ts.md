__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 204,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 23,
            "end": 49,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 37,
              "name": "iBar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 46,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 43,
                      "end": 46
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 54,
            "end": 105,
            "id": {
              "type": "Identifier",
              "start": 64,
              "end": 68,
              "name": "iFoo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 77,
                "end": 81,
                "expression": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 81,
                  "name": "iBar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 93,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 95,
                      "end": 98
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 111,
            "end": 145,
            "id": {
              "type": "Identifier",
              "start": 117,
              "end": 121,
              "name": "cFoo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 122,
              "end": 145,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 132,
                  "end": 139,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "name": "t",
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
                    "start": 133,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 135,
                      "end": 138
                    }
                  },
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
            "start": 151,
            "end": 178,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 177,
                "id": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 177,
                  "name": "foo",
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
                              "name": "index",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 168,
                                "end": 173,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 170,
                                  "end": 173
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": null,
                          "readonly": false,
                          "static": false,
                          "accessibility": null
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 206,
      "end": 245,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 221,
        "name": "myInt",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 222,
        "end": 245,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 228,
            "end": 243,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 234,
              "name": "voidFn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 262,
            "name": "myVar",
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
                  "name": "myInt",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 286,
            "name": "strArray",
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
            },
            "decorators": [],
            "optional": false
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
                "callee": {
                  "type": "MemberExpression",
                  "start": 290,
                  "end": 302,
                  "object": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 295,
                    "name": "myVar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 302,
                    "name": "voidFn",
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
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 334,
            "name": "myArray",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "name": "myArray",
          "typeAnnotation": null,
          "decorators": [],
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
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 351,
                  "end": 352,
                  "value": 2,
                  "raw": "2"
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 357,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 373,
        "name": "isEmpty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 374,
          "end": 395,
          "name": "l",
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 385,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 385,
                    "end": 393,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 387,
                      "end": 393
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
              "left": {
                "type": "MemberExpression",
                "start": 410,
                "end": 418,
                "object": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 411,
                  "name": "l",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 418,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 423,
                "end": 424,
                "value": 0,
                "raw": "0"
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 429,
      "end": 441,
      "expression": {
        "type": "CallExpression",
        "start": 429,
        "end": 440,
        "callee": {
          "type": "Identifier",
          "start": 429,
          "end": 436,
          "name": "isEmpty",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 437,
            "end": 439,
            "elements": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 464,
      "expression": {
        "type": "CallExpression",
        "start": 442,
        "end": 463,
        "callee": {
          "type": "Identifier",
          "start": 442,
          "end": 449,
          "name": "isEmpty",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 450,
            "end": 462,
            "callee": {
              "type": "Identifier",
              "start": 454,
              "end": 459,
              "name": "Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 460,
                "end": 461,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 465,
      "end": 495,
      "expression": {
        "type": "CallExpression",
        "start": 465,
        "end": 494,
        "callee": {
          "type": "Identifier",
          "start": 465,
          "end": 472,
          "name": "isEmpty",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 473,
            "end": 493,
            "callee": {
              "type": "Identifier",
              "start": 477,
              "end": 482,
              "name": "Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 491,
                "end": 492,
                "value": 3,
                "raw": "3"
              }
            ],
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 496,
      "end": 511,
      "expression": {
        "type": "CallExpression",
        "start": 496,
        "end": 510,
        "callee": {
          "type": "Identifier",
          "start": 496,
          "end": 503,
          "name": "isEmpty",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": "a",
                "raw": "'a'"
              }
            ]
          }
        ],
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
