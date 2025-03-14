interfaceImplementation5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 514,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 36,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 34,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 26,
              "decorators": [],
              "name": "getset1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 33,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
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
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 100,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 100,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 98,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 85,
              "decorators": [],
              "name": "getset1",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 85,
              "end": 98,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 98,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 88,
                    "end": 97,
                    "argument": {
                      "type": "Literal",
                      "start": 95,
                      "end": 96,
                      "raw": "1",
                      "value": 1
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
        "start": 44,
        "end": 46,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 58,
          "end": 60,
          "expression": {
            "type": "Identifier",
            "start": 58,
            "end": 60,
            "decorators": [],
            "name": "I1",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 165,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 125,
        "end": 165,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 131,
            "end": 163,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 149,
              "decorators": [],
              "name": "getset1",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 149,
              "end": 163,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 163,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 150,
                  "end": 160,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 153,
                    "end": 160,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 154,
                      "end": 160
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
        "start": 108,
        "end": 110,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 122,
          "end": 124,
          "expression": {
            "type": "Identifier",
            "start": 122,
            "end": 124,
            "decorators": [],
            "name": "I1",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 167,
      "end": 266,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 190,
        "end": 266,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 196,
            "end": 227,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 214,
              "decorators": [],
              "name": "getset1",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 214,
              "end": 227,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 216,
                "end": 227,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 217,
                    "end": 226,
                    "argument": {
                      "type": "Literal",
                      "start": 224,
                      "end": 225,
                      "raw": "1",
                      "value": 1
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
          },
          {
            "type": "MethodDefinition",
            "start": 232,
            "end": 264,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 243,
              "end": 250,
              "decorators": [],
              "name": "getset1",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 250,
              "end": 264,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 262,
                "end": 264,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 251,
                  "end": 261,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 254,
                    "end": 261,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 255,
                      "end": 261
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
        "start": 173,
        "end": 175,
        "decorators": [],
        "name": "C3",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 187,
          "end": 189,
          "expression": {
            "type": "Identifier",
            "start": 187,
            "end": 189,
            "decorators": [],
            "name": "I1",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 268,
      "end": 341,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 291,
        "end": 341,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 297,
            "end": 339,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 308,
              "end": 315,
              "decorators": [],
              "name": "getset1",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 315,
              "end": 339,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 317,
                "end": 339,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 318,
                    "end": 328,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 322,
                        "end": 327,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 322,
                          "end": 327,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 323,
                            "end": 327,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 324,
                              "end": 327
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
                    "type": "ReturnStatement",
                    "start": 329,
                    "end": 338,
                    "argument": {
                      "type": "Identifier",
                      "start": 336,
                      "end": 337,
                      "decorators": [],
                      "name": "x",
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
        "start": 274,
        "end": 276,
        "decorators": [],
        "name": "C4",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 288,
          "end": 290,
          "expression": {
            "type": "Identifier",
            "start": 288,
            "end": 290,
            "decorators": [],
            "name": "I1",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 343,
      "end": 403,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 366,
        "end": 403,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 372,
            "end": 401,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 383,
              "end": 390,
              "decorators": [],
              "name": "getset1",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 390,
              "end": 401,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 399,
                "end": 401,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 391,
                  "end": 398,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 394,
                    "end": 398,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 395,
                      "end": 398
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
        "start": 349,
        "end": 351,
        "decorators": [],
        "name": "C5",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 363,
          "end": 365,
          "expression": {
            "type": "Identifier",
            "start": 363,
            "end": 365,
            "decorators": [],
            "name": "I1",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 405,
      "end": 512,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 428,
        "end": 512,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 434,
            "end": 463,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 445,
              "end": 452,
              "decorators": [],
              "name": "getset1",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 452,
              "end": 463,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 461,
                "end": 463,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 453,
                  "end": 460,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 456,
                    "end": 460,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 457,
                      "end": 460
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 468,
            "end": 510,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 479,
              "end": 486,
              "decorators": [],
              "name": "getset1",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 486,
              "end": 510,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 488,
                "end": 510,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 489,
                    "end": 499,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 493,
                        "end": 498,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 493,
                          "end": 498,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 494,
                            "end": 498,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 495,
                              "end": 498
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
                    "type": "ReturnStatement",
                    "start": 500,
                    "end": 509,
                    "argument": {
                      "type": "Identifier",
                      "start": 507,
                      "end": 508,
                      "decorators": [],
                      "name": "x",
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
        "start": 411,
        "end": 413,
        "decorators": [],
        "name": "C6",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 425,
          "end": 427,
          "expression": {
            "type": "Identifier",
            "start": 425,
            "end": 427,
            "decorators": [],
            "name": "I1",
            "optional": false
          }
        }
      ],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
