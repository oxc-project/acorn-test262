__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnimalType",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 72
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "cat",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 80
            },
            "initializer": {
              "type": "Literal",
              "value": "cat",
              "raw": "\"cat\"",
              "start": 83,
              "end": 88
            },
            "computed": false,
            "start": 77,
            "end": 88
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "dog",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 95
            },
            "initializer": {
              "type": "Literal",
              "value": "dog",
              "raw": "\"dog\"",
              "start": 98,
              "end": 103
            },
            "computed": false,
            "start": 92,
            "end": 103
          }
        ],
        "start": 73,
        "end": 106
      },
      "const": false,
      "declare": false,
      "start": 57,
      "end": 106
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 119
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 138
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 140,
                        "end": 143
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 157,
                        "end": 159
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AnimalType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 143,
                            "end": 153
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cat",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 154,
                            "end": 157
                          },
                          "start": 143,
                          "end": 157
                        },
                        "typeArguments": null,
                        "start": 143,
                        "end": 157
                      }
                    ],
                    "start": 140,
                    "end": 159
                  },
                  "start": 138,
                  "end": 159
                },
                "accessibility": null,
                "static": false,
                "start": 134,
                "end": 160
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "meow",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 171
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 173,
                    "end": 179
                  },
                  "start": 171,
                  "end": 179
                },
                "accessibility": null,
                "static": false,
                "start": 167,
                "end": 180
              }
            ],
            "start": 126,
            "end": 186
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 203
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 205,
                        "end": 208
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 222,
                        "end": 224
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AnimalType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 208,
                            "end": 218
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dog",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 219,
                            "end": 222
                          },
                          "start": 208,
                          "end": 222
                        },
                        "typeArguments": null,
                        "start": 208,
                        "end": 222
                      }
                    ],
                    "start": 205,
                    "end": 224
                  },
                  "start": 203,
                  "end": 224
                },
                "accessibility": null,
                "static": false,
                "start": 199,
                "end": 225
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bark",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 236
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 238,
                    "end": 244
                  },
                  "start": 236,
                  "end": 244
                },
                "accessibility": null,
                "static": false,
                "start": 232,
                "end": 245
              }
            ],
            "start": 191,
            "end": 251
          }
        ],
        "start": 124,
        "end": 251
      },
      "declare": false,
      "start": 108,
      "end": 252
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "check",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 268
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 272,
              "end": 277
            },
            "start": 270,
            "end": 277
          },
          "start": 269,
          "end": 277
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 298
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Error!",
                  "raw": "\"Error!\"",
                  "start": 299,
                  "end": 307
                }
              ],
              "start": 289,
              "end": 308
            },
            "start": 283,
            "end": 309
          }
        ],
        "start": 279,
        "end": 311
      },
      "expression": false,
      "start": 254,
      "end": 311
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "action1",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 329
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 344
              },
              "typeArguments": null,
              "start": 338,
              "end": 344
            },
            "start": 336,
            "end": 344
          },
          "start": 330,
          "end": 344
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "animal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 354,
                  "end": 360
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 365
                },
                "optional": false,
                "computed": false,
                "start": 354,
                "end": 365
              },
              "operator": "===",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnimalType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 380
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 384
                },
                "optional": false,
                "computed": false,
                "start": 370,
                "end": 384
              },
              "start": 354,
              "end": 384
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 392,
                        "end": 399
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 403
                      },
                      "optional": false,
                      "computed": false,
                      "start": 392,
                      "end": 403
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "animal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 404,
                          "end": 410
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "meow",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 411,
                          "end": 415
                        },
                        "optional": false,
                        "computed": false,
                        "start": 404,
                        "end": 415
                      }
                    ],
                    "optional": false,
                    "start": 392,
                    "end": 416
                  },
                  "directive": null,
                  "start": 392,
                  "end": 417
                }
              ],
              "start": 386,
              "end": 421
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "animal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 437
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 442
                  },
                  "optional": false,
                  "computed": false,
                  "start": 431,
                  "end": 442
                },
                "operator": "===",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AnimalType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 447,
                    "end": 457
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dog",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 461
                  },
                  "optional": false,
                  "computed": false,
                  "start": 447,
                  "end": 461
                },
                "start": 431,
                "end": 461
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 469,
                          "end": 476
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 477,
                          "end": 480
                        },
                        "optional": false,
                        "computed": false,
                        "start": 469,
                        "end": 480
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "animal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 481,
                            "end": 487
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bark",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 488,
                            "end": 492
                          },
                          "optional": false,
                          "computed": false,
                          "start": 481,
                          "end": 492
                        }
                      ],
                      "optional": false,
                      "start": 469,
                      "end": 493
                    },
                    "directive": null,
                    "start": 469,
                    "end": 494
                  }
                ],
                "start": 463,
                "end": 498
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "check",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 510,
                        "end": 515
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "animal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 516,
                          "end": 522
                        }
                      ],
                      "optional": false,
                      "start": 510,
                      "end": 523
                    },
                    "directive": null,
                    "start": 510,
                    "end": 524
                  }
                ],
                "start": 504,
                "end": 528
              },
              "start": 427,
              "end": 528
            },
            "start": 350,
            "end": 528
          }
        ],
        "start": 346,
        "end": 530
      },
      "expression": false,
      "start": 313,
      "end": 530
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "action2",
        "optional": false,
        "typeAnnotation": null,
        "start": 541,
        "end": 548
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 563
              },
              "typeArguments": null,
              "start": 557,
              "end": 563
            },
            "start": 555,
            "end": 563
          },
          "start": 549,
          "end": 563
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 577,
                "end": 583
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 588
              },
              "optional": false,
              "computed": false,
              "start": 577,
              "end": 588
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 601,
                      "end": 604
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 618,
                      "end": 620
                    }
                  ],
                  "expressions": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AnimalType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 604,
                        "end": 614
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cat",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 615,
                        "end": 618
                      },
                      "optional": false,
                      "computed": false,
                      "start": 604,
                      "end": 618
                    }
                  ],
                  "start": 601,
                  "end": 620
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 628,
                          "end": 635
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 636,
                          "end": 639
                        },
                        "optional": false,
                        "computed": false,
                        "start": 628,
                        "end": 639
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "animal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 640,
                            "end": 646
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "meow",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 647,
                            "end": 651
                          },
                          "optional": false,
                          "computed": false,
                          "start": 640,
                          "end": 651
                        }
                      ],
                      "optional": false,
                      "start": 628,
                      "end": 652
                    },
                    "directive": null,
                    "start": 628,
                    "end": 653
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 660,
                    "end": 666
                  }
                ],
                "start": 596,
                "end": 666
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 676,
                      "end": 679
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 693,
                      "end": 695
                    }
                  ],
                  "expressions": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AnimalType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 679,
                        "end": 689
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dog",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 690,
                        "end": 693
                      },
                      "optional": false,
                      "computed": false,
                      "start": 679,
                      "end": 693
                    }
                  ],
                  "start": 676,
                  "end": 695
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 703,
                          "end": 710
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 711,
                          "end": 714
                        },
                        "optional": false,
                        "computed": false,
                        "start": 703,
                        "end": 714
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "animal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 715,
                            "end": 721
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bark",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 722,
                            "end": 726
                          },
                          "optional": false,
                          "computed": false,
                          "start": 715,
                          "end": 726
                        }
                      ],
                      "optional": false,
                      "start": 703,
                      "end": 727
                    },
                    "directive": null,
                    "start": 703,
                    "end": 728
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 735,
                    "end": 741
                  }
                ],
                "start": 671,
                "end": 741
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "check",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 761,
                        "end": 766
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "animal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 767,
                          "end": 773
                        }
                      ],
                      "optional": false,
                      "start": 761,
                      "end": 774
                    },
                    "directive": null,
                    "start": 761,
                    "end": 775
                  }
                ],
                "start": 746,
                "end": 775
              }
            ],
            "start": 569,
            "end": 779
          }
        ],
        "start": 565,
        "end": 781
      },
      "expression": false,
      "start": 532,
      "end": 781
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "action3",
        "optional": false,
        "typeAnnotation": null,
        "start": 792,
        "end": 799
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 814
              },
              "typeArguments": null,
              "start": 808,
              "end": 814
            },
            "start": 806,
            "end": 814
          },
          "start": 800,
          "end": 814
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 834
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 835,
                "end": 839
              },
              "optional": false,
              "computed": false,
              "start": 828,
              "end": 839
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AnimalType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 852,
                    "end": 862
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 863,
                    "end": 866
                  },
                  "optional": false,
                  "computed": false,
                  "start": 852,
                  "end": 866
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 874,
                          "end": 881
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 882,
                          "end": 885
                        },
                        "optional": false,
                        "computed": false,
                        "start": 874,
                        "end": 885
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "animal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 886,
                            "end": 892
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "meow",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 893,
                            "end": 897
                          },
                          "optional": false,
                          "computed": false,
                          "start": 886,
                          "end": 897
                        }
                      ],
                      "optional": false,
                      "start": 874,
                      "end": 898
                    },
                    "directive": null,
                    "start": 874,
                    "end": 899
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 906,
                    "end": 912
                  }
                ],
                "start": 847,
                "end": 912
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AnimalType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 922,
                    "end": 932
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dog",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 933,
                    "end": 936
                  },
                  "optional": false,
                  "computed": false,
                  "start": 922,
                  "end": 936
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 944,
                          "end": 951
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 952,
                          "end": 955
                        },
                        "optional": false,
                        "computed": false,
                        "start": 944,
                        "end": 955
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "animal",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 956,
                            "end": 962
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bark",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 963,
                            "end": 967
                          },
                          "optional": false,
                          "computed": false,
                          "start": 956,
                          "end": 967
                        }
                      ],
                      "optional": false,
                      "start": 944,
                      "end": 968
                    },
                    "directive": null,
                    "start": 944,
                    "end": 969
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 976,
                    "end": 982
                  }
                ],
                "start": 917,
                "end": 982
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "check",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1002,
                        "end": 1007
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "animal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1008,
                          "end": 1014
                        }
                      ],
                      "optional": false,
                      "start": 1002,
                      "end": 1015
                    },
                    "directive": null,
                    "start": 1002,
                    "end": 1016
                  }
                ],
                "start": 987,
                "end": 1016
              }
            ],
            "start": 820,
            "end": 1020
          }
        ],
        "start": 816,
        "end": 1022
      },
      "expression": false,
      "start": 783,
      "end": 1022
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1022
}
```
