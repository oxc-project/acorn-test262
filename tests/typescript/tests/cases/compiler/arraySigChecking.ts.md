__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 511,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "iBar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "iFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
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
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 117,
              "end": 121,
              "decorators": [],
              "name": "cFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 122,
              "end": 145,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 132,
                  "end": 139,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 151,
            "end": 178,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 177,
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
                          "typeAnnotation": null,
                          "readonly": false,
                          "static": false,
                          "accessibility": null
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
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
        "decorators": [],
        "name": "myInt",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "voidFn",
              "optional": false,
              "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 262,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 306,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 305,
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
                "callee": {
                  "type": "MemberExpression",
                  "start": 290,
                  "end": 302,
                  "object": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 295,
                    "decorators": [],
                    "name": "myVar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 302,
                    "decorators": [],
                    "name": "voidFn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 309,
      "end": 335,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 334,
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
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "myArray",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "isEmpty",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 379,
                    "end": 385,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
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
          }
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 418,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
      "expression": false
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
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 437,
            "end": 439,
            "elements": []
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 450,
            "end": 462,
            "callee": {
              "type": "Identifier",
              "start": 454,
              "end": 459,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 460,
                "end": 461,
                "value": 3,
                "raw": "3"
              }
            ]
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 473,
            "end": 493,
            "callee": {
              "type": "Identifier",
              "start": 477,
              "end": 482,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
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
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 491,
                "end": 492,
                "value": 3,
                "raw": "3"
              }
            ]
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
