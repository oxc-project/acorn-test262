__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4901,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 49,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 49,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 49,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 27,
                    "end": 47,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 31,
                        "end": 39,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 39,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 36,
                            "end": 39
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 40,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 42,
                        "end": 46
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 65,
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 66,
        "end": 106,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 85,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 76,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 84,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 90,
            "end": 104,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 95,
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
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
      "start": 108,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 128,
        "decorators": [],
        "name": "MultiRobot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 129,
        "end": 225,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 135,
            "end": 148,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 139,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 147,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 153,
            "end": 223,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 159,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 222,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 161,
                "end": 222,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 171,
                    "end": 188,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 178,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 179,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 181,
                        "end": 187
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 197,
                    "end": 216,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 206,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 207,
                      "end": 215,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 209,
                        "end": 215
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
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 227,
      "end": 281,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 280,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 243,
            "decorators": [],
            "name": "robot",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 243,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 238,
                "end": 243,
                "typeName": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 243,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 246,
            "end": 280,
            "properties": [
              {
                "type": "Property",
                "start": 248,
                "end": 261,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 252,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 254,
                  "end": 261,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 263,
                "end": 278,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 268,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 270,
                  "end": 278,
                  "value": "mowing",
                  "raw": "\"mowing\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
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
      "start": 282,
      "end": 379,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 378,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 308,
            "decorators": [],
            "name": "multiRobot",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 308,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 298,
                "end": 308,
                "typeName": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 308,
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 311,
            "end": 378,
            "properties": [
              {
                "type": "Property",
                "start": 313,
                "end": 326,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 317,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 319,
                  "end": 326,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 328,
                "end": 376,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 334,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 336,
                  "end": 376,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 338,
                      "end": 355,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 338,
                        "end": 345,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 347,
                        "end": 355,
                        "value": "mowing",
                        "raw": "\"mowing\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 357,
                      "end": 374,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 366,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 368,
                        "end": 374,
                        "value": "none",
                        "raw": "\"none\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
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
      "type": "FunctionDeclaration",
      "start": 380,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 397,
        "decorators": [],
        "name": "getRobot",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 400,
        "end": 421,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 406,
            "end": 419,
            "argument": {
              "type": "Identifier",
              "start": 413,
              "end": 418,
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 422,
      "end": 473,
      "id": {
        "type": "Identifier",
        "start": 431,
        "end": 444,
        "decorators": [],
        "name": "getMultiRobot",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 447,
        "end": 473,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 453,
            "end": 471,
            "argument": {
              "type": "Identifier",
              "start": 460,
              "end": 470,
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 475,
      "end": 558,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 479,
          "end": 492,
          "id": {
            "type": "Identifier",
            "start": 479,
            "end": 492,
            "decorators": [],
            "name": "nameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 484,
              "end": 492,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 486,
                "end": 492
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 510,
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 510,
            "decorators": [],
            "name": "primaryA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 502,
              "end": 510,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 504,
                "end": 510
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 530,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 530,
            "decorators": [],
            "name": "secondaryA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 522,
              "end": 530,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 524,
                "end": 530
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 532,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 532,
            "end": 541,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 533,
              "end": 541,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 535,
                "end": 541
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 543,
          "end": 557,
          "id": {
            "type": "Identifier",
            "start": 543,
            "end": 557,
            "decorators": [],
            "name": "skillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 549,
              "end": 557,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 551,
                "end": 557
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
      "start": 559,
      "end": 627,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 563,
          "end": 575,
          "id": {
            "type": "Identifier",
            "start": 563,
            "end": 575,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 567,
              "end": 575,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 569,
                "end": 575
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 577,
          "end": 592,
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 592,
            "decorators": [],
            "name": "primary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 584,
              "end": 592,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 586,
                "end": 592
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 594,
          "end": 611,
          "id": {
            "type": "Identifier",
            "start": 594,
            "end": 611,
            "decorators": [],
            "name": "secondary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 603,
              "end": 611,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 605,
                "end": 611
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 613,
          "end": 626,
          "id": {
            "type": "Identifier",
            "start": 613,
            "end": 626,
            "decorators": [],
            "name": "skill",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 618,
              "end": 626,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 620,
                "end": 626
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
      "type": "ForStatement",
      "start": 629,
      "end": 715,
      "init": {
        "type": "SequenceExpression",
        "start": 634,
        "end": 674,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 634,
            "end": 667,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 634,
              "end": 659,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 635,
                  "end": 657,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 635,
                    "end": 639,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 641,
                    "end": 657,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 641,
                      "end": 646,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 649,
                      "end": 657,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "start": 662,
              "end": 667,
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 669,
            "end": 674,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 669,
              "end": 670,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 673,
              "end": 674,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 676,
        "end": 681,
        "left": {
          "type": "Identifier",
          "start": 676,
          "end": 677,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 680,
          "end": 681,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 683,
        "end": 686,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 683,
          "end": 684,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 688,
        "end": 715,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 694,
            "end": 713,
            "expression": {
              "type": "CallExpression",
              "start": 694,
              "end": 712,
              "callee": {
                "type": "MemberExpression",
                "start": 694,
                "end": 705,
                "object": {
                  "type": "Identifier",
                  "start": 694,
                  "end": 701,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 705,
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
                  "type": "Identifier",
                  "start": 706,
                  "end": 711,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 716,
      "end": 807,
      "init": {
        "type": "SequenceExpression",
        "start": 721,
        "end": 766,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 721,
            "end": 759,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 721,
              "end": 746,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 722,
                  "end": 744,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 722,
                    "end": 726,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 728,
                    "end": 744,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 728,
                      "end": 733,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 736,
                      "end": 744,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "type": "CallExpression",
              "start": 749,
              "end": 759,
              "callee": {
                "type": "Identifier",
                "start": 749,
                "end": 757,
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 761,
            "end": 766,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 761,
              "end": 762,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 765,
              "end": 766,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 768,
        "end": 773,
        "left": {
          "type": "Identifier",
          "start": 768,
          "end": 769,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 772,
          "end": 773,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 775,
        "end": 778,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 775,
          "end": 776,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 780,
        "end": 807,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 786,
            "end": 805,
            "expression": {
              "type": "CallExpression",
              "start": 786,
              "end": 804,
              "callee": {
                "type": "MemberExpression",
                "start": 786,
                "end": 797,
                "object": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 793,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 794,
                  "end": 797,
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
                  "type": "Identifier",
                  "start": 798,
                  "end": 803,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 808,
      "end": 934,
      "init": {
        "type": "SequenceExpression",
        "start": 813,
        "end": 893,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 813,
            "end": 886,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 813,
              "end": 838,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 814,
                  "end": 836,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 814,
                    "end": 818,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 820,
                    "end": 836,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 820,
                      "end": 825,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 828,
                      "end": 836,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "type": "TSTypeAssertion",
              "start": 841,
              "end": 886,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 842,
                "end": 847,
                "typeName": {
                  "type": "Identifier",
                  "start": 842,
                  "end": 847,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 848,
                "end": 886,
                "properties": [
                  {
                    "type": "Property",
                    "start": 850,
                    "end": 865,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 850,
                      "end": 854,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 856,
                      "end": 865,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 867,
                    "end": 884,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 867,
                      "end": 872,
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 874,
                      "end": 884,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 888,
            "end": 893,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 888,
              "end": 889,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 892,
              "end": 893,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 895,
        "end": 900,
        "left": {
          "type": "Identifier",
          "start": 895,
          "end": 896,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 899,
          "end": 900,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 902,
        "end": 905,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 902,
          "end": 903,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 907,
        "end": 934,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 913,
            "end": 932,
            "expression": {
              "type": "CallExpression",
              "start": 913,
              "end": 931,
              "callee": {
                "type": "MemberExpression",
                "start": 913,
                "end": 924,
                "object": {
                  "type": "Identifier",
                  "start": 913,
                  "end": 920,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 921,
                  "end": 924,
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
                  "type": "Identifier",
                  "start": 925,
                  "end": 930,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 935,
      "end": 1151,
      "init": {
        "type": "SequenceExpression",
        "start": 940,
        "end": 1107,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 940,
            "end": 1100,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 940,
              "end": 1087,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 946,
                  "end": 1085,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 946,
                    "end": 952,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 954,
                    "end": 1085,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 954,
                      "end": 1044,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 964,
                          "end": 993,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 964,
                            "end": 971,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 973,
                            "end": 993,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 973,
                              "end": 981,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 984,
                              "end": 993,
                              "value": "primary",
                              "raw": "\"primary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1003,
                          "end": 1038,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1003,
                            "end": 1012,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 1014,
                            "end": 1038,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 1014,
                              "end": 1024,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1027,
                              "end": 1038,
                              "value": "secondary",
                              "raw": "\"secondary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
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
                      "type": "ObjectExpression",
                      "start": 1047,
                      "end": 1085,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1049,
                          "end": 1064,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1049,
                            "end": 1056,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1058,
                            "end": 1064,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1066,
                          "end": 1083,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1066,
                            "end": 1075,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1077,
                            "end": 1083,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "start": 1090,
              "end": 1100,
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1102,
            "end": 1107,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1102,
              "end": 1103,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 1106,
              "end": 1107,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1109,
        "end": 1114,
        "left": {
          "type": "Identifier",
          "start": 1109,
          "end": 1110,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1113,
          "end": 1114,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1116,
        "end": 1119,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1116,
          "end": 1117,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1121,
        "end": 1151,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1127,
            "end": 1149,
            "expression": {
              "type": "CallExpression",
              "start": 1127,
              "end": 1148,
              "callee": {
                "type": "MemberExpression",
                "start": 1127,
                "end": 1138,
                "object": {
                  "type": "Identifier",
                  "start": 1127,
                  "end": 1134,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1135,
                  "end": 1138,
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
                  "type": "Identifier",
                  "start": 1139,
                  "end": 1147,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1152,
      "end": 1373,
      "init": {
        "type": "SequenceExpression",
        "start": 1157,
        "end": 1329,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1157,
            "end": 1322,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1157,
              "end": 1304,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1163,
                  "end": 1302,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1163,
                    "end": 1169,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1171,
                    "end": 1302,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 1171,
                      "end": 1261,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1181,
                          "end": 1210,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1181,
                            "end": 1188,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 1190,
                            "end": 1210,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 1190,
                              "end": 1198,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1201,
                              "end": 1210,
                              "value": "primary",
                              "raw": "\"primary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1220,
                          "end": 1255,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1220,
                            "end": 1229,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 1231,
                            "end": 1255,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 1231,
                              "end": 1241,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1244,
                              "end": 1255,
                              "value": "secondary",
                              "raw": "\"secondary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
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
                      "type": "ObjectExpression",
                      "start": 1264,
                      "end": 1302,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1266,
                          "end": 1281,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1266,
                            "end": 1273,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1275,
                            "end": 1281,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1283,
                          "end": 1300,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1283,
                            "end": 1292,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1294,
                            "end": 1300,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "type": "CallExpression",
              "start": 1307,
              "end": 1322,
              "callee": {
                "type": "Identifier",
                "start": 1307,
                "end": 1320,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1324,
            "end": 1329,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1324,
              "end": 1325,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 1328,
              "end": 1329,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1331,
        "end": 1336,
        "left": {
          "type": "Identifier",
          "start": 1331,
          "end": 1332,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1335,
          "end": 1336,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1338,
        "end": 1341,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1338,
          "end": 1339,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1343,
        "end": 1373,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1349,
            "end": 1371,
            "expression": {
              "type": "CallExpression",
              "start": 1349,
              "end": 1370,
              "callee": {
                "type": "MemberExpression",
                "start": 1349,
                "end": 1360,
                "object": {
                  "type": "Identifier",
                  "start": 1349,
                  "end": 1356,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1357,
                  "end": 1360,
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
                  "type": "Identifier",
                  "start": 1361,
                  "end": 1369,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1374,
      "end": 1669,
      "init": {
        "type": "SequenceExpression",
        "start": 1379,
        "end": 1625,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1379,
            "end": 1614,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1379,
              "end": 1526,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1385,
                  "end": 1524,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1385,
                    "end": 1391,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1393,
                    "end": 1524,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 1393,
                      "end": 1483,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1403,
                          "end": 1432,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1403,
                            "end": 1410,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 1412,
                            "end": 1432,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 1412,
                              "end": 1420,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1423,
                              "end": 1432,
                              "value": "primary",
                              "raw": "\"primary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1442,
                          "end": 1477,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1442,
                            "end": 1451,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 1453,
                            "end": 1477,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 1453,
                              "end": 1463,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1466,
                              "end": 1477,
                              "value": "secondary",
                              "raw": "\"secondary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
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
                      "type": "ObjectExpression",
                      "start": 1486,
                      "end": 1524,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1488,
                          "end": 1503,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1488,
                            "end": 1495,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1497,
                            "end": 1503,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1505,
                          "end": 1522,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1505,
                            "end": 1514,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1516,
                            "end": 1522,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "type": "TSTypeAssertion",
              "start": 1529,
              "end": 1614,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1530,
                "end": 1540,
                "typeName": {
                  "type": "Identifier",
                  "start": 1530,
                  "end": 1540,
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 1541,
                "end": 1614,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1543,
                    "end": 1558,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1543,
                      "end": 1547,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1549,
                      "end": 1558,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1560,
                    "end": 1612,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1560,
                      "end": 1566,
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1568,
                      "end": 1612,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1570,
                          "end": 1589,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1570,
                            "end": 1577,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1579,
                            "end": 1589,
                            "value": "trimming",
                            "raw": "\"trimming\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1591,
                          "end": 1610,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1591,
                            "end": 1600,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1602,
                            "end": 1610,
                            "value": "edging",
                            "raw": "\"edging\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1620,
            "end": 1625,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1620,
              "end": 1621,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 1624,
              "end": 1625,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1627,
        "end": 1632,
        "left": {
          "type": "Identifier",
          "start": 1627,
          "end": 1628,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1631,
          "end": 1632,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1634,
        "end": 1637,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1634,
          "end": 1635,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1639,
        "end": 1669,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1645,
            "end": 1667,
            "expression": {
              "type": "CallExpression",
              "start": 1645,
              "end": 1666,
              "callee": {
                "type": "MemberExpression",
                "start": 1645,
                "end": 1656,
                "object": {
                  "type": "Identifier",
                  "start": 1645,
                  "end": 1652,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1653,
                  "end": 1656,
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
                  "type": "Identifier",
                  "start": 1657,
                  "end": 1665,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1671,
      "end": 1751,
      "init": {
        "type": "SequenceExpression",
        "start": 1676,
        "end": 1710,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1676,
            "end": 1703,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1676,
              "end": 1695,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1678,
                  "end": 1693,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1678,
                    "end": 1682,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1678,
                    "end": 1693,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1678,
                      "end": 1682,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1685,
                      "end": 1693,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1698,
              "end": 1703,
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1705,
            "end": 1710,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1705,
              "end": 1706,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 1709,
              "end": 1710,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1712,
        "end": 1717,
        "left": {
          "type": "Identifier",
          "start": 1712,
          "end": 1713,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1716,
          "end": 1717,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1719,
        "end": 1722,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1719,
          "end": 1720,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1724,
        "end": 1751,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1730,
            "end": 1749,
            "expression": {
              "type": "CallExpression",
              "start": 1730,
              "end": 1748,
              "callee": {
                "type": "MemberExpression",
                "start": 1730,
                "end": 1741,
                "object": {
                  "type": "Identifier",
                  "start": 1730,
                  "end": 1737,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1738,
                  "end": 1741,
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
                  "type": "Identifier",
                  "start": 1742,
                  "end": 1747,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1752,
      "end": 1837,
      "init": {
        "type": "SequenceExpression",
        "start": 1757,
        "end": 1796,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1757,
            "end": 1789,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1757,
              "end": 1776,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1759,
                  "end": 1774,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1759,
                    "end": 1763,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1759,
                    "end": 1774,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1759,
                      "end": 1763,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1766,
                      "end": 1774,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "CallExpression",
              "start": 1779,
              "end": 1789,
              "callee": {
                "type": "Identifier",
                "start": 1779,
                "end": 1787,
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1791,
            "end": 1796,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1791,
              "end": 1792,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 1795,
              "end": 1796,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1798,
        "end": 1803,
        "left": {
          "type": "Identifier",
          "start": 1798,
          "end": 1799,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1802,
          "end": 1803,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1805,
        "end": 1808,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1805,
          "end": 1806,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1810,
        "end": 1837,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1816,
            "end": 1835,
            "expression": {
              "type": "CallExpression",
              "start": 1816,
              "end": 1834,
              "callee": {
                "type": "MemberExpression",
                "start": 1816,
                "end": 1827,
                "object": {
                  "type": "Identifier",
                  "start": 1816,
                  "end": 1823,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1824,
                  "end": 1827,
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
                  "type": "Identifier",
                  "start": 1828,
                  "end": 1833,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1838,
      "end": 1958,
      "init": {
        "type": "SequenceExpression",
        "start": 1843,
        "end": 1917,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1843,
            "end": 1910,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1843,
              "end": 1862,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1845,
                  "end": 1860,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1845,
                    "end": 1849,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1845,
                    "end": 1860,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1845,
                      "end": 1849,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1852,
                      "end": 1860,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "TSTypeAssertion",
              "start": 1865,
              "end": 1910,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1866,
                "end": 1871,
                "typeName": {
                  "type": "Identifier",
                  "start": 1866,
                  "end": 1871,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 1872,
                "end": 1910,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1874,
                    "end": 1889,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1874,
                      "end": 1878,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1880,
                      "end": 1889,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1891,
                    "end": 1908,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1891,
                      "end": 1896,
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1898,
                      "end": 1908,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1912,
            "end": 1917,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1912,
              "end": 1913,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 1916,
              "end": 1917,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1919,
        "end": 1924,
        "left": {
          "type": "Identifier",
          "start": 1919,
          "end": 1920,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1923,
          "end": 1924,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1926,
        "end": 1929,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1926,
          "end": 1927,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1931,
        "end": 1958,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1937,
            "end": 1956,
            "expression": {
              "type": "CallExpression",
              "start": 1937,
              "end": 1955,
              "callee": {
                "type": "MemberExpression",
                "start": 1937,
                "end": 1948,
                "object": {
                  "type": "Identifier",
                  "start": 1937,
                  "end": 1944,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1945,
                  "end": 1948,
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
                  "type": "Identifier",
                  "start": 1949,
                  "end": 1954,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1959,
      "end": 2153,
      "init": {
        "type": "SequenceExpression",
        "start": 1964,
        "end": 2109,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1964,
            "end": 2102,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1964,
              "end": 2089,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1970,
                  "end": 2087,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1970,
                    "end": 1976,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1978,
                    "end": 2087,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 1978,
                      "end": 2046,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1988,
                          "end": 2007,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1988,
                            "end": 1995,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 1988,
                            "end": 2007,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 1988,
                              "end": 1995,
                              "decorators": [],
                              "name": "primary",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 1998,
                              "end": 2007,
                              "value": "primary",
                              "raw": "\"primary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2017,
                          "end": 2040,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2017,
                            "end": 2026,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 2017,
                            "end": 2040,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2017,
                              "end": 2026,
                              "decorators": [],
                              "name": "secondary",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2029,
                              "end": 2040,
                              "value": "secondary",
                              "raw": "\"secondary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 2049,
                      "end": 2087,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2051,
                          "end": 2066,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2051,
                            "end": 2058,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2060,
                            "end": 2066,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2068,
                          "end": 2085,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2068,
                            "end": 2077,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2079,
                            "end": 2085,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "start": 2092,
              "end": 2102,
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2104,
            "end": 2109,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2104,
              "end": 2105,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 2108,
              "end": 2109,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2111,
        "end": 2116,
        "left": {
          "type": "Identifier",
          "start": 2111,
          "end": 2112,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2115,
          "end": 2116,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2118,
        "end": 2121,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2118,
          "end": 2119,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2123,
        "end": 2153,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2129,
            "end": 2151,
            "expression": {
              "type": "CallExpression",
              "start": 2129,
              "end": 2150,
              "callee": {
                "type": "MemberExpression",
                "start": 2129,
                "end": 2140,
                "object": {
                  "type": "Identifier",
                  "start": 2129,
                  "end": 2136,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2137,
                  "end": 2140,
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
                  "type": "Identifier",
                  "start": 2141,
                  "end": 2149,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 2154,
      "end": 2353,
      "init": {
        "type": "SequenceExpression",
        "start": 2159,
        "end": 2309,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2159,
            "end": 2302,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 2159,
              "end": 2284,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 2165,
                  "end": 2282,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2165,
                    "end": 2171,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 2173,
                    "end": 2282,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 2173,
                      "end": 2241,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2183,
                          "end": 2202,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2183,
                            "end": 2190,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 2183,
                            "end": 2202,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2183,
                              "end": 2190,
                              "decorators": [],
                              "name": "primary",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2193,
                              "end": 2202,
                              "value": "primary",
                              "raw": "\"primary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2212,
                          "end": 2235,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2212,
                            "end": 2221,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 2212,
                            "end": 2235,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2212,
                              "end": 2221,
                              "decorators": [],
                              "name": "secondary",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2224,
                              "end": 2235,
                              "value": "secondary",
                              "raw": "\"secondary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 2244,
                      "end": 2282,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2246,
                          "end": 2261,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2246,
                            "end": 2253,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2255,
                            "end": 2261,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2263,
                          "end": 2280,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2263,
                            "end": 2272,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2274,
                            "end": 2280,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "type": "CallExpression",
              "start": 2287,
              "end": 2302,
              "callee": {
                "type": "Identifier",
                "start": 2287,
                "end": 2300,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2304,
            "end": 2309,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2304,
              "end": 2305,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 2308,
              "end": 2309,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2311,
        "end": 2316,
        "left": {
          "type": "Identifier",
          "start": 2311,
          "end": 2312,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2315,
          "end": 2316,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2318,
        "end": 2321,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2318,
          "end": 2319,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2323,
        "end": 2353,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2329,
            "end": 2351,
            "expression": {
              "type": "CallExpression",
              "start": 2329,
              "end": 2350,
              "callee": {
                "type": "MemberExpression",
                "start": 2329,
                "end": 2340,
                "object": {
                  "type": "Identifier",
                  "start": 2329,
                  "end": 2336,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2337,
                  "end": 2340,
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
                  "type": "Identifier",
                  "start": 2341,
                  "end": 2349,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 2354,
      "end": 2627,
      "init": {
        "type": "SequenceExpression",
        "start": 2359,
        "end": 2583,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2359,
            "end": 2572,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 2359,
              "end": 2484,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 2365,
                  "end": 2482,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2365,
                    "end": 2371,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 2373,
                    "end": 2482,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 2373,
                      "end": 2441,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2383,
                          "end": 2402,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2383,
                            "end": 2390,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 2383,
                            "end": 2402,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2383,
                              "end": 2390,
                              "decorators": [],
                              "name": "primary",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2393,
                              "end": 2402,
                              "value": "primary",
                              "raw": "\"primary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2412,
                          "end": 2435,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2412,
                            "end": 2421,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 2412,
                            "end": 2435,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 2412,
                              "end": 2421,
                              "decorators": [],
                              "name": "secondary",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 2424,
                              "end": 2435,
                              "value": "secondary",
                              "raw": "\"secondary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 2444,
                      "end": 2482,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2446,
                          "end": 2461,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2446,
                            "end": 2453,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2455,
                            "end": 2461,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2463,
                          "end": 2480,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2463,
                            "end": 2472,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2474,
                            "end": 2480,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "type": "TSTypeAssertion",
              "start": 2487,
              "end": 2572,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2488,
                "end": 2498,
                "typeName": {
                  "type": "Identifier",
                  "start": 2488,
                  "end": 2498,
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 2499,
                "end": 2572,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2501,
                    "end": 2516,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2501,
                      "end": 2505,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2507,
                      "end": 2516,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2518,
                    "end": 2570,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2518,
                      "end": 2524,
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 2526,
                      "end": 2570,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2528,
                          "end": 2547,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2528,
                            "end": 2535,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2537,
                            "end": 2547,
                            "value": "trimming",
                            "raw": "\"trimming\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2549,
                          "end": 2568,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2549,
                            "end": 2558,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2560,
                            "end": 2568,
                            "value": "edging",
                            "raw": "\"edging\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2578,
            "end": 2583,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2578,
              "end": 2579,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 2582,
              "end": 2583,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2585,
        "end": 2590,
        "left": {
          "type": "Identifier",
          "start": 2585,
          "end": 2586,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2589,
          "end": 2590,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2592,
        "end": 2595,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2592,
          "end": 2593,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2597,
        "end": 2627,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2603,
            "end": 2625,
            "expression": {
              "type": "CallExpression",
              "start": 2603,
              "end": 2624,
              "callee": {
                "type": "MemberExpression",
                "start": 2603,
                "end": 2614,
                "object": {
                  "type": "Identifier",
                  "start": 2603,
                  "end": 2610,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2611,
                  "end": 2614,
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
                  "type": "Identifier",
                  "start": 2615,
                  "end": 2623,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 2630,
      "end": 2741,
      "init": {
        "type": "SequenceExpression",
        "start": 2635,
        "end": 2700,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2635,
            "end": 2693,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 2635,
              "end": 2685,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 2636,
                  "end": 2658,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2636,
                    "end": 2640,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 2642,
                    "end": 2658,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 2642,
                      "end": 2647,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2650,
                      "end": 2658,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2660,
                  "end": 2683,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2660,
                    "end": 2665,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 2667,
                    "end": 2683,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 2667,
                      "end": 2673,
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2676,
                      "end": 2683,
                      "value": "skill",
                      "raw": "\"skill\""
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "start": 2688,
              "end": 2693,
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2695,
            "end": 2700,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2695,
              "end": 2696,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 2699,
              "end": 2700,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2702,
        "end": 2707,
        "left": {
          "type": "Identifier",
          "start": 2702,
          "end": 2703,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2706,
          "end": 2707,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2709,
        "end": 2712,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2709,
          "end": 2710,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2714,
        "end": 2741,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2720,
            "end": 2739,
            "expression": {
              "type": "CallExpression",
              "start": 2720,
              "end": 2738,
              "callee": {
                "type": "MemberExpression",
                "start": 2720,
                "end": 2731,
                "object": {
                  "type": "Identifier",
                  "start": 2720,
                  "end": 2727,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2728,
                  "end": 2731,
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
                  "type": "Identifier",
                  "start": 2732,
                  "end": 2737,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 2742,
      "end": 2858,
      "init": {
        "type": "SequenceExpression",
        "start": 2747,
        "end": 2817,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2747,
            "end": 2810,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 2747,
              "end": 2797,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 2748,
                  "end": 2770,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2748,
                    "end": 2752,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 2754,
                    "end": 2770,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 2754,
                      "end": 2759,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2762,
                      "end": 2770,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2772,
                  "end": 2795,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2772,
                    "end": 2777,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 2779,
                    "end": 2795,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 2779,
                      "end": 2785,
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2788,
                      "end": 2795,
                      "value": "skill",
                      "raw": "\"skill\""
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "type": "CallExpression",
              "start": 2800,
              "end": 2810,
              "callee": {
                "type": "Identifier",
                "start": 2800,
                "end": 2808,
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2812,
            "end": 2817,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2812,
              "end": 2813,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 2816,
              "end": 2817,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2819,
        "end": 2824,
        "left": {
          "type": "Identifier",
          "start": 2819,
          "end": 2820,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2823,
          "end": 2824,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2826,
        "end": 2829,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2826,
          "end": 2827,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2831,
        "end": 2858,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2837,
            "end": 2856,
            "expression": {
              "type": "CallExpression",
              "start": 2837,
              "end": 2855,
              "callee": {
                "type": "MemberExpression",
                "start": 2837,
                "end": 2848,
                "object": {
                  "type": "Identifier",
                  "start": 2837,
                  "end": 2844,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2845,
                  "end": 2848,
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
                  "type": "Identifier",
                  "start": 2849,
                  "end": 2854,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 2859,
      "end": 3010,
      "init": {
        "type": "SequenceExpression",
        "start": 2864,
        "end": 2969,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2864,
            "end": 2962,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 2864,
              "end": 2914,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 2865,
                  "end": 2887,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2865,
                    "end": 2869,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 2871,
                    "end": 2887,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 2871,
                      "end": 2876,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2879,
                      "end": 2887,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2889,
                  "end": 2912,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2889,
                    "end": 2894,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 2896,
                    "end": 2912,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 2896,
                      "end": 2902,
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2905,
                      "end": 2912,
                      "value": "skill",
                      "raw": "\"skill\""
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "type": "TSTypeAssertion",
              "start": 2917,
              "end": 2962,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2918,
                "end": 2923,
                "typeName": {
                  "type": "Identifier",
                  "start": 2918,
                  "end": 2923,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 2924,
                "end": 2962,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2926,
                    "end": 2941,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2926,
                      "end": 2930,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2932,
                      "end": 2941,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2943,
                    "end": 2960,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2943,
                      "end": 2948,
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2950,
                      "end": 2960,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2964,
            "end": 2969,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2964,
              "end": 2965,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 2968,
              "end": 2969,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2971,
        "end": 2976,
        "left": {
          "type": "Identifier",
          "start": 2971,
          "end": 2972,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2975,
          "end": 2976,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2978,
        "end": 2981,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2978,
          "end": 2979,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2983,
        "end": 3010,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2989,
            "end": 3008,
            "expression": {
              "type": "CallExpression",
              "start": 2989,
              "end": 3007,
              "callee": {
                "type": "MemberExpression",
                "start": 2989,
                "end": 3000,
                "object": {
                  "type": "Identifier",
                  "start": 2989,
                  "end": 2996,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2997,
                  "end": 3000,
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
                  "type": "Identifier",
                  "start": 3001,
                  "end": 3006,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 3011,
      "end": 3255,
      "init": {
        "type": "SequenceExpression",
        "start": 3016,
        "end": 3211,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 3016,
            "end": 3204,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 3016,
              "end": 3191,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 3022,
                  "end": 3044,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3022,
                    "end": 3026,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 3028,
                    "end": 3044,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 3028,
                      "end": 3033,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 3036,
                      "end": 3044,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 3050,
                  "end": 3189,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3050,
                    "end": 3056,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 3058,
                    "end": 3189,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 3058,
                      "end": 3148,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3068,
                          "end": 3097,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3068,
                            "end": 3075,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 3077,
                            "end": 3097,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 3077,
                              "end": 3085,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 3088,
                              "end": 3097,
                              "value": "primary",
                              "raw": "\"primary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 3107,
                          "end": 3142,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3107,
                            "end": 3116,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 3118,
                            "end": 3142,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 3118,
                              "end": 3128,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 3131,
                              "end": 3142,
                              "value": "secondary",
                              "raw": "\"secondary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
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
                      "type": "ObjectExpression",
                      "start": 3151,
                      "end": 3189,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3153,
                          "end": 3168,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3153,
                            "end": 3160,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 3162,
                            "end": 3168,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 3170,
                          "end": 3187,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3170,
                            "end": 3179,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 3181,
                            "end": 3187,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "start": 3194,
              "end": 3204,
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 3206,
            "end": 3211,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 3206,
              "end": 3207,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 3210,
              "end": 3211,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3213,
        "end": 3218,
        "left": {
          "type": "Identifier",
          "start": 3213,
          "end": 3214,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 3217,
          "end": 3218,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 3220,
        "end": 3223,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 3220,
          "end": 3221,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3225,
        "end": 3255,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3231,
            "end": 3253,
            "expression": {
              "type": "CallExpression",
              "start": 3231,
              "end": 3252,
              "callee": {
                "type": "MemberExpression",
                "start": 3231,
                "end": 3242,
                "object": {
                  "type": "Identifier",
                  "start": 3231,
                  "end": 3238,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3239,
                  "end": 3242,
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
                  "type": "Identifier",
                  "start": 3243,
                  "end": 3251,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 3256,
      "end": 3505,
      "init": {
        "type": "SequenceExpression",
        "start": 3261,
        "end": 3461,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 3261,
            "end": 3454,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 3261,
              "end": 3436,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 3267,
                  "end": 3289,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3267,
                    "end": 3271,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 3273,
                    "end": 3289,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 3273,
                      "end": 3278,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 3281,
                      "end": 3289,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 3295,
                  "end": 3434,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3295,
                    "end": 3301,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 3303,
                    "end": 3434,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 3303,
                      "end": 3393,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3313,
                          "end": 3342,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3313,
                            "end": 3320,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 3322,
                            "end": 3342,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 3322,
                              "end": 3330,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 3333,
                              "end": 3342,
                              "value": "primary",
                              "raw": "\"primary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 3352,
                          "end": 3387,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3352,
                            "end": 3361,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 3363,
                            "end": 3387,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 3363,
                              "end": 3373,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 3376,
                              "end": 3387,
                              "value": "secondary",
                              "raw": "\"secondary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
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
                      "type": "ObjectExpression",
                      "start": 3396,
                      "end": 3434,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3398,
                          "end": 3413,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3398,
                            "end": 3405,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 3407,
                            "end": 3413,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 3415,
                          "end": 3432,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3415,
                            "end": 3424,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 3426,
                            "end": 3432,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "type": "CallExpression",
              "start": 3439,
              "end": 3454,
              "callee": {
                "type": "Identifier",
                "start": 3439,
                "end": 3452,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 3456,
            "end": 3461,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 3456,
              "end": 3457,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 3460,
              "end": 3461,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3463,
        "end": 3468,
        "left": {
          "type": "Identifier",
          "start": 3463,
          "end": 3464,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 3467,
          "end": 3468,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 3470,
        "end": 3473,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 3470,
          "end": 3471,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3475,
        "end": 3505,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3481,
            "end": 3503,
            "expression": {
              "type": "CallExpression",
              "start": 3481,
              "end": 3502,
              "callee": {
                "type": "MemberExpression",
                "start": 3481,
                "end": 3492,
                "object": {
                  "type": "Identifier",
                  "start": 3481,
                  "end": 3488,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3489,
                  "end": 3492,
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
                  "type": "Identifier",
                  "start": 3493,
                  "end": 3501,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 3506,
      "end": 3829,
      "init": {
        "type": "SequenceExpression",
        "start": 3511,
        "end": 3785,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 3511,
            "end": 3774,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 3511,
              "end": 3686,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 3517,
                  "end": 3539,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3517,
                    "end": 3521,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 3523,
                    "end": 3539,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 3523,
                      "end": 3528,
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 3531,
                      "end": 3539,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 3545,
                  "end": 3684,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3545,
                    "end": 3551,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 3553,
                    "end": 3684,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 3553,
                      "end": 3643,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3563,
                          "end": 3592,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3563,
                            "end": 3570,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 3572,
                            "end": 3592,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 3572,
                              "end": 3580,
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 3583,
                              "end": 3592,
                              "value": "primary",
                              "raw": "\"primary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 3602,
                          "end": 3637,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3602,
                            "end": 3611,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 3613,
                            "end": 3637,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 3613,
                              "end": 3623,
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 3626,
                              "end": 3637,
                              "value": "secondary",
                              "raw": "\"secondary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
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
                      "type": "ObjectExpression",
                      "start": 3646,
                      "end": 3684,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3648,
                          "end": 3663,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3648,
                            "end": 3655,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 3657,
                            "end": 3663,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 3665,
                          "end": 3682,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3665,
                            "end": 3674,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 3676,
                            "end": 3682,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "type": "TSTypeAssertion",
              "start": 3689,
              "end": 3774,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3690,
                "end": 3700,
                "typeName": {
                  "type": "Identifier",
                  "start": 3690,
                  "end": 3700,
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 3701,
                "end": 3774,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3703,
                    "end": 3718,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3703,
                      "end": 3707,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3709,
                      "end": 3718,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3720,
                    "end": 3772,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3720,
                      "end": 3726,
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 3728,
                      "end": 3772,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3730,
                          "end": 3749,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3730,
                            "end": 3737,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 3739,
                            "end": 3749,
                            "value": "trimming",
                            "raw": "\"trimming\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 3751,
                          "end": 3770,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3751,
                            "end": 3760,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 3762,
                            "end": 3770,
                            "value": "edging",
                            "raw": "\"edging\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 3780,
            "end": 3785,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 3780,
              "end": 3781,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 3784,
              "end": 3785,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3787,
        "end": 3792,
        "left": {
          "type": "Identifier",
          "start": 3787,
          "end": 3788,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 3791,
          "end": 3792,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 3794,
        "end": 3797,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 3794,
          "end": 3795,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3799,
        "end": 3829,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3805,
            "end": 3827,
            "expression": {
              "type": "CallExpression",
              "start": 3805,
              "end": 3826,
              "callee": {
                "type": "MemberExpression",
                "start": 3805,
                "end": 3816,
                "object": {
                  "type": "Identifier",
                  "start": 3805,
                  "end": 3812,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3813,
                  "end": 3816,
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
                  "type": "Identifier",
                  "start": 3817,
                  "end": 3825,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 3831,
      "end": 3928,
      "init": {
        "type": "SequenceExpression",
        "start": 3836,
        "end": 3887,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 3836,
            "end": 3880,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 3836,
              "end": 3872,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 3838,
                  "end": 3853,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3838,
                    "end": 3842,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 3838,
                    "end": 3853,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 3838,
                      "end": 3842,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 3845,
                      "end": 3853,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 3855,
                  "end": 3870,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3855,
                    "end": 3860,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 3855,
                    "end": 3870,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 3855,
                      "end": 3860,
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 3863,
                      "end": 3870,
                      "value": "skill",
                      "raw": "\"skill\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 3875,
              "end": 3880,
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 3882,
            "end": 3887,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 3882,
              "end": 3883,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 3886,
              "end": 3887,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3889,
        "end": 3894,
        "left": {
          "type": "Identifier",
          "start": 3889,
          "end": 3890,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 3893,
          "end": 3894,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 3896,
        "end": 3899,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 3896,
          "end": 3897,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3901,
        "end": 3928,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3907,
            "end": 3926,
            "expression": {
              "type": "CallExpression",
              "start": 3907,
              "end": 3925,
              "callee": {
                "type": "MemberExpression",
                "start": 3907,
                "end": 3918,
                "object": {
                  "type": "Identifier",
                  "start": 3907,
                  "end": 3914,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3915,
                  "end": 3918,
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
                  "type": "Identifier",
                  "start": 3919,
                  "end": 3924,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 3929,
      "end": 4031,
      "init": {
        "type": "SequenceExpression",
        "start": 3934,
        "end": 3990,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 3934,
            "end": 3983,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 3934,
              "end": 3970,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 3936,
                  "end": 3951,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3936,
                    "end": 3940,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 3936,
                    "end": 3951,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 3936,
                      "end": 3940,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 3943,
                      "end": 3951,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 3953,
                  "end": 3968,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3953,
                    "end": 3958,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 3953,
                    "end": 3968,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 3953,
                      "end": 3958,
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 3961,
                      "end": 3968,
                      "value": "skill",
                      "raw": "\"skill\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "CallExpression",
              "start": 3973,
              "end": 3983,
              "callee": {
                "type": "Identifier",
                "start": 3973,
                "end": 3981,
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 3985,
            "end": 3990,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 3985,
              "end": 3986,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 3989,
              "end": 3990,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3992,
        "end": 3997,
        "left": {
          "type": "Identifier",
          "start": 3992,
          "end": 3993,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 3996,
          "end": 3997,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 3999,
        "end": 4002,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 3999,
          "end": 4000,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 4004,
        "end": 4031,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4010,
            "end": 4029,
            "expression": {
              "type": "CallExpression",
              "start": 4010,
              "end": 4028,
              "callee": {
                "type": "MemberExpression",
                "start": 4010,
                "end": 4021,
                "object": {
                  "type": "Identifier",
                  "start": 4010,
                  "end": 4017,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 4018,
                  "end": 4021,
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
                  "type": "Identifier",
                  "start": 4022,
                  "end": 4027,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 4032,
      "end": 4169,
      "init": {
        "type": "SequenceExpression",
        "start": 4037,
        "end": 4128,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 4037,
            "end": 4121,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 4037,
              "end": 4073,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 4039,
                  "end": 4054,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 4039,
                    "end": 4043,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 4039,
                    "end": 4054,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 4039,
                      "end": 4043,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4046,
                      "end": 4054,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 4056,
                  "end": 4071,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 4056,
                    "end": 4061,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 4056,
                    "end": 4071,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 4056,
                      "end": 4061,
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4064,
                      "end": 4071,
                      "value": "skill",
                      "raw": "\"skill\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "TSTypeAssertion",
              "start": 4076,
              "end": 4121,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4077,
                "end": 4082,
                "typeName": {
                  "type": "Identifier",
                  "start": 4077,
                  "end": 4082,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 4083,
                "end": 4121,
                "properties": [
                  {
                    "type": "Property",
                    "start": 4085,
                    "end": 4100,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4085,
                      "end": 4089,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 4091,
                      "end": 4100,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4102,
                    "end": 4119,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4102,
                      "end": 4107,
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 4109,
                      "end": 4119,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 4123,
            "end": 4128,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 4123,
              "end": 4124,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 4127,
              "end": 4128,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 4130,
        "end": 4135,
        "left": {
          "type": "Identifier",
          "start": 4130,
          "end": 4131,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 4134,
          "end": 4135,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 4137,
        "end": 4140,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 4137,
          "end": 4138,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 4142,
        "end": 4169,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4148,
            "end": 4167,
            "expression": {
              "type": "CallExpression",
              "start": 4148,
              "end": 4166,
              "callee": {
                "type": "MemberExpression",
                "start": 4148,
                "end": 4159,
                "object": {
                  "type": "Identifier",
                  "start": 4148,
                  "end": 4155,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 4156,
                  "end": 4159,
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
                  "type": "Identifier",
                  "start": 4160,
                  "end": 4165,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 4170,
      "end": 4385,
      "init": {
        "type": "SequenceExpression",
        "start": 4175,
        "end": 4341,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 4175,
            "end": 4334,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 4175,
              "end": 4321,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 4181,
                  "end": 4196,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 4181,
                    "end": 4185,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 4181,
                    "end": 4196,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 4181,
                      "end": 4185,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4188,
                      "end": 4196,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 4202,
                  "end": 4319,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 4202,
                    "end": 4208,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 4210,
                    "end": 4319,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 4210,
                      "end": 4278,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4220,
                          "end": 4239,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 4220,
                            "end": 4227,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 4220,
                            "end": 4239,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 4220,
                              "end": 4227,
                              "decorators": [],
                              "name": "primary",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 4230,
                              "end": 4239,
                              "value": "primary",
                              "raw": "\"primary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 4249,
                          "end": 4272,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 4249,
                            "end": 4258,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 4249,
                            "end": 4272,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 4249,
                              "end": 4258,
                              "decorators": [],
                              "name": "secondary",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 4261,
                              "end": 4272,
                              "value": "secondary",
                              "raw": "\"secondary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 4281,
                      "end": 4319,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4283,
                          "end": 4298,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 4283,
                            "end": 4290,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 4292,
                            "end": 4298,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 4300,
                          "end": 4317,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 4300,
                            "end": 4309,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 4311,
                            "end": 4317,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "start": 4324,
              "end": 4334,
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 4336,
            "end": 4341,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 4336,
              "end": 4337,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 4340,
              "end": 4341,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 4343,
        "end": 4348,
        "left": {
          "type": "Identifier",
          "start": 4343,
          "end": 4344,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 4347,
          "end": 4348,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 4350,
        "end": 4353,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 4350,
          "end": 4351,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 4355,
        "end": 4385,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4361,
            "end": 4383,
            "expression": {
              "type": "CallExpression",
              "start": 4361,
              "end": 4382,
              "callee": {
                "type": "MemberExpression",
                "start": 4361,
                "end": 4372,
                "object": {
                  "type": "Identifier",
                  "start": 4361,
                  "end": 4368,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 4369,
                  "end": 4372,
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
                  "type": "Identifier",
                  "start": 4373,
                  "end": 4381,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 4386,
      "end": 4606,
      "init": {
        "type": "SequenceExpression",
        "start": 4391,
        "end": 4562,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 4391,
            "end": 4555,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 4391,
              "end": 4537,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 4397,
                  "end": 4412,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 4397,
                    "end": 4401,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 4397,
                    "end": 4412,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 4397,
                      "end": 4401,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4404,
                      "end": 4412,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 4418,
                  "end": 4535,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 4418,
                    "end": 4424,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 4426,
                    "end": 4535,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 4426,
                      "end": 4494,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4436,
                          "end": 4455,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 4436,
                            "end": 4443,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 4436,
                            "end": 4455,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 4436,
                              "end": 4443,
                              "decorators": [],
                              "name": "primary",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 4446,
                              "end": 4455,
                              "value": "primary",
                              "raw": "\"primary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 4465,
                          "end": 4488,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 4465,
                            "end": 4474,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 4465,
                            "end": 4488,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 4465,
                              "end": 4474,
                              "decorators": [],
                              "name": "secondary",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 4477,
                              "end": 4488,
                              "value": "secondary",
                              "raw": "\"secondary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 4497,
                      "end": 4535,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4499,
                          "end": 4514,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 4499,
                            "end": 4506,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 4508,
                            "end": 4514,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 4516,
                          "end": 4533,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 4516,
                            "end": 4525,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 4527,
                            "end": 4533,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "type": "CallExpression",
              "start": 4540,
              "end": 4555,
              "callee": {
                "type": "Identifier",
                "start": 4540,
                "end": 4553,
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 4557,
            "end": 4562,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 4557,
              "end": 4558,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 4561,
              "end": 4562,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 4564,
        "end": 4569,
        "left": {
          "type": "Identifier",
          "start": 4564,
          "end": 4565,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 4568,
          "end": 4569,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 4571,
        "end": 4574,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 4571,
          "end": 4572,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 4576,
        "end": 4606,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4582,
            "end": 4604,
            "expression": {
              "type": "CallExpression",
              "start": 4582,
              "end": 4603,
              "callee": {
                "type": "MemberExpression",
                "start": 4582,
                "end": 4593,
                "object": {
                  "type": "Identifier",
                  "start": 4582,
                  "end": 4589,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 4590,
                  "end": 4593,
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
                  "type": "Identifier",
                  "start": 4594,
                  "end": 4602,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 4607,
      "end": 4901,
      "init": {
        "type": "SequenceExpression",
        "start": 4612,
        "end": 4857,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 4612,
            "end": 4846,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 4612,
              "end": 4758,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 4618,
                  "end": 4633,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 4618,
                    "end": 4622,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 4618,
                    "end": 4633,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 4618,
                      "end": 4622,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4625,
                      "end": 4633,
                      "value": "noName",
                      "raw": "\"noName\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 4639,
                  "end": 4756,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 4639,
                    "end": 4645,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 4647,
                    "end": 4756,
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "start": 4647,
                      "end": 4715,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4657,
                          "end": 4676,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 4657,
                            "end": 4664,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 4657,
                            "end": 4676,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 4657,
                              "end": 4664,
                              "decorators": [],
                              "name": "primary",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 4667,
                              "end": 4676,
                              "value": "primary",
                              "raw": "\"primary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 4686,
                          "end": 4709,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 4686,
                            "end": 4695,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "start": 4686,
                            "end": 4709,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 4686,
                              "end": 4695,
                              "decorators": [],
                              "name": "secondary",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 4698,
                              "end": 4709,
                              "value": "secondary",
                              "raw": "\"secondary\""
                            },
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 4718,
                      "end": 4756,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4720,
                          "end": 4735,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 4720,
                            "end": 4727,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 4729,
                            "end": 4735,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 4737,
                          "end": 4754,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 4737,
                            "end": 4746,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 4748,
                            "end": 4754,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "optional": false,
                    "typeAnnotation": null
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
              "type": "TSTypeAssertion",
              "start": 4761,
              "end": 4846,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4762,
                "end": 4772,
                "typeName": {
                  "type": "Identifier",
                  "start": 4762,
                  "end": 4772,
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 4773,
                "end": 4846,
                "properties": [
                  {
                    "type": "Property",
                    "start": 4775,
                    "end": 4790,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4775,
                      "end": 4779,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 4781,
                      "end": 4790,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4792,
                    "end": 4844,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4792,
                      "end": 4798,
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 4800,
                      "end": 4844,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4802,
                          "end": 4821,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 4802,
                            "end": 4809,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 4811,
                            "end": 4821,
                            "value": "trimming",
                            "raw": "\"trimming\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 4823,
                          "end": 4842,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 4823,
                            "end": 4832,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 4834,
                            "end": 4842,
                            "value": "edging",
                            "raw": "\"edging\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 4852,
            "end": 4857,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 4852,
              "end": 4853,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 4856,
              "end": 4857,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 4859,
        "end": 4864,
        "left": {
          "type": "Identifier",
          "start": 4859,
          "end": 4860,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 4863,
          "end": 4864,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 4866,
        "end": 4869,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 4866,
          "end": 4867,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 4871,
        "end": 4901,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4877,
            "end": 4899,
            "expression": {
              "type": "CallExpression",
              "start": 4877,
              "end": 4898,
              "callee": {
                "type": "MemberExpression",
                "start": 4877,
                "end": 4888,
                "object": {
                  "type": "Identifier",
                  "start": 4877,
                  "end": 4884,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 4885,
                  "end": 4888,
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
                  "type": "Identifier",
                  "start": 4889,
                  "end": 4897,
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
