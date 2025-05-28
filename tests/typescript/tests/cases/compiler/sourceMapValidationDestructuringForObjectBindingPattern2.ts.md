__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3545,
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
      "end": 223,
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
        "end": 223,
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
            "end": 221,
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
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 161,
                "end": 220,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 171,
                    "end": 187,
                    "computed": false,
                    "optional": false,
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
                      "start": 178,
                      "end": 186,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 180,
                        "end": 186
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 196,
                    "end": 214,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 205,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 205,
                      "end": 213,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 207,
                        "end": 213
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
      "start": 225,
      "end": 279,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 241,
            "decorators": [],
            "name": "robot",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 241,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 236,
                "end": 241,
                "typeName": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 241,
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
            "start": 244,
            "end": 278,
            "properties": [
              {
                "type": "Property",
                "start": 246,
                "end": 259,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 250,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 252,
                  "end": 259,
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
                "start": 261,
                "end": 276,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 266,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 268,
                  "end": 276,
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
      "start": 280,
      "end": 377,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 376,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 306,
            "decorators": [],
            "name": "multiRobot",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 294,
              "end": 306,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 296,
                "end": 306,
                "typeName": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 306,
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
            "start": 309,
            "end": 376,
            "properties": [
              {
                "type": "Property",
                "start": 311,
                "end": 324,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 315,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 317,
                  "end": 324,
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
                "start": 326,
                "end": 374,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 332,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 334,
                  "end": 374,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 336,
                      "end": 353,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 336,
                        "end": 343,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 345,
                        "end": 353,
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
                      "start": 355,
                      "end": 372,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 355,
                        "end": 364,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 366,
                        "end": 372,
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
      "start": 378,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 395,
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
        "start": 398,
        "end": 419,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 404,
            "end": 417,
            "argument": {
              "type": "Identifier",
              "start": 411,
              "end": 416,
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
      "start": 420,
      "end": 471,
      "id": {
        "type": "Identifier",
        "start": 429,
        "end": 442,
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
        "start": 445,
        "end": 471,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 451,
            "end": 469,
            "argument": {
              "type": "Identifier",
              "start": 458,
              "end": 468,
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
      "start": 473,
      "end": 556,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 477,
          "end": 490,
          "id": {
            "type": "Identifier",
            "start": 477,
            "end": 490,
            "decorators": [],
            "name": "nameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 482,
              "end": 490,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 484,
                "end": 490
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 508,
          "id": {
            "type": "Identifier",
            "start": 492,
            "end": 508,
            "decorators": [],
            "name": "primaryA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 500,
              "end": 508,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 502,
                "end": 508
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 510,
          "end": 528,
          "id": {
            "type": "Identifier",
            "start": 510,
            "end": 528,
            "decorators": [],
            "name": "secondaryA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 520,
              "end": 528,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 522,
                "end": 528
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 539,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 539,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 531,
              "end": 539,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 533,
                "end": 539
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 541,
          "end": 555,
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 555,
            "decorators": [],
            "name": "skillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 547,
              "end": 555,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 549,
                "end": 555
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
      "start": 557,
      "end": 625,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 561,
          "end": 573,
          "id": {
            "type": "Identifier",
            "start": 561,
            "end": 573,
            "decorators": [],
            "name": "name",
            "optional": false,
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
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 575,
          "end": 590,
          "id": {
            "type": "Identifier",
            "start": 575,
            "end": 590,
            "decorators": [],
            "name": "primary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 582,
              "end": 590,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 584,
                "end": 590
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 592,
          "end": 609,
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 609,
            "decorators": [],
            "name": "secondary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 601,
              "end": 609,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 603,
                "end": 609
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 611,
          "end": 624,
          "id": {
            "type": "Identifier",
            "start": 611,
            "end": 624,
            "decorators": [],
            "name": "skill",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 616,
              "end": 624,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 618,
                "end": 624
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
      "start": 627,
      "end": 703,
      "init": {
        "type": "SequenceExpression",
        "start": 632,
        "end": 662,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 632,
            "end": 655,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 632,
              "end": 647,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 634,
                  "end": 645,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 634,
                    "end": 638,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 640,
                    "end": 645,
                    "decorators": [],
                    "name": "nameA",
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
              "start": 650,
              "end": 655,
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 657,
            "end": 662,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 657,
              "end": 658,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 661,
              "end": 662,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 664,
        "end": 669,
        "left": {
          "type": "Identifier",
          "start": 664,
          "end": 665,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 668,
          "end": 669,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 671,
        "end": 674,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 671,
          "end": 672,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 676,
        "end": 703,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 682,
            "end": 701,
            "expression": {
              "type": "CallExpression",
              "start": 682,
              "end": 700,
              "callee": {
                "type": "MemberExpression",
                "start": 682,
                "end": 693,
                "object": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 689,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 690,
                  "end": 693,
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
                  "start": 694,
                  "end": 699,
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
      "start": 704,
      "end": 785,
      "init": {
        "type": "SequenceExpression",
        "start": 709,
        "end": 744,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 709,
            "end": 737,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 709,
              "end": 724,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 711,
                  "end": 722,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 711,
                    "end": 715,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 717,
                    "end": 722,
                    "decorators": [],
                    "name": "nameA",
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
              "start": 727,
              "end": 737,
              "callee": {
                "type": "Identifier",
                "start": 727,
                "end": 735,
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
            "start": 739,
            "end": 744,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 739,
              "end": 740,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 743,
              "end": 744,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 746,
        "end": 751,
        "left": {
          "type": "Identifier",
          "start": 746,
          "end": 747,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 750,
          "end": 751,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 753,
        "end": 756,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 753,
          "end": 754,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 758,
        "end": 785,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 764,
            "end": 783,
            "expression": {
              "type": "CallExpression",
              "start": 764,
              "end": 782,
              "callee": {
                "type": "MemberExpression",
                "start": 764,
                "end": 775,
                "object": {
                  "type": "Identifier",
                  "start": 764,
                  "end": 771,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 772,
                  "end": 775,
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
                  "start": 776,
                  "end": 781,
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
      "start": 786,
      "end": 902,
      "init": {
        "type": "SequenceExpression",
        "start": 791,
        "end": 861,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 791,
            "end": 854,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 791,
              "end": 806,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 793,
                  "end": 804,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 793,
                    "end": 797,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 799,
                    "end": 804,
                    "decorators": [],
                    "name": "nameA",
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
              "start": 809,
              "end": 854,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 810,
                "end": 815,
                "typeName": {
                  "type": "Identifier",
                  "start": 810,
                  "end": 815,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 816,
                "end": 854,
                "properties": [
                  {
                    "type": "Property",
                    "start": 818,
                    "end": 833,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 818,
                      "end": 822,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 824,
                      "end": 833,
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
                    "start": 835,
                    "end": 852,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 835,
                      "end": 840,
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 842,
                      "end": 852,
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
            "start": 856,
            "end": 861,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 856,
              "end": 857,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 860,
              "end": 861,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 863,
        "end": 868,
        "left": {
          "type": "Identifier",
          "start": 863,
          "end": 864,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 867,
          "end": 868,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 870,
        "end": 873,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 870,
          "end": 871,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 875,
        "end": 902,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 881,
            "end": 900,
            "expression": {
              "type": "CallExpression",
              "start": 881,
              "end": 899,
              "callee": {
                "type": "MemberExpression",
                "start": 881,
                "end": 892,
                "object": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 888,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 889,
                  "end": 892,
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
                  "start": 893,
                  "end": 898,
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
      "start": 903,
      "end": 1028,
      "init": {
        "type": "SequenceExpression",
        "start": 908,
        "end": 984,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 908,
            "end": 977,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 908,
              "end": 964,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 910,
                  "end": 962,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 910,
                    "end": 916,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 918,
                    "end": 962,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 920,
                        "end": 937,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 920,
                          "end": 927,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 929,
                          "end": 937,
                          "decorators": [],
                          "name": "primaryA",
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
                        "start": 939,
                        "end": 960,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 939,
                          "end": 948,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 950,
                          "end": 960,
                          "decorators": [],
                          "name": "secondaryA",
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
              "start": 967,
              "end": 977,
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 979,
            "end": 984,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 979,
              "end": 980,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 983,
              "end": 984,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 986,
        "end": 991,
        "left": {
          "type": "Identifier",
          "start": 986,
          "end": 987,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 990,
          "end": 991,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 993,
        "end": 996,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 993,
          "end": 994,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 998,
        "end": 1028,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1004,
            "end": 1026,
            "expression": {
              "type": "CallExpression",
              "start": 1004,
              "end": 1025,
              "callee": {
                "type": "MemberExpression",
                "start": 1004,
                "end": 1015,
                "object": {
                  "type": "Identifier",
                  "start": 1004,
                  "end": 1011,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1012,
                  "end": 1015,
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
                  "start": 1016,
                  "end": 1024,
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
      "start": 1029,
      "end": 1159,
      "init": {
        "type": "SequenceExpression",
        "start": 1034,
        "end": 1115,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1034,
            "end": 1108,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1034,
              "end": 1090,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1036,
                  "end": 1088,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1036,
                    "end": 1042,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1044,
                    "end": 1088,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1046,
                        "end": 1063,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1046,
                          "end": 1053,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1055,
                          "end": 1063,
                          "decorators": [],
                          "name": "primaryA",
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
                        "start": 1065,
                        "end": 1086,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1065,
                          "end": 1074,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1076,
                          "end": 1086,
                          "decorators": [],
                          "name": "secondaryA",
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
              "start": 1093,
              "end": 1108,
              "callee": {
                "type": "Identifier",
                "start": 1093,
                "end": 1106,
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
            "start": 1110,
            "end": 1115,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1110,
              "end": 1111,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 1114,
              "end": 1115,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1117,
        "end": 1122,
        "left": {
          "type": "Identifier",
          "start": 1117,
          "end": 1118,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1121,
          "end": 1122,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1124,
        "end": 1127,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1124,
          "end": 1125,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1129,
        "end": 1159,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1135,
            "end": 1157,
            "expression": {
              "type": "CallExpression",
              "start": 1135,
              "end": 1156,
              "callee": {
                "type": "MemberExpression",
                "start": 1135,
                "end": 1146,
                "object": {
                  "type": "Identifier",
                  "start": 1135,
                  "end": 1142,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1143,
                  "end": 1146,
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
                  "start": 1147,
                  "end": 1155,
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
      "start": 1160,
      "end": 1368,
      "init": {
        "type": "SequenceExpression",
        "start": 1165,
        "end": 1324,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1165,
            "end": 1313,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1165,
              "end": 1221,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1167,
                  "end": 1219,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1167,
                    "end": 1173,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1175,
                    "end": 1219,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1177,
                        "end": 1194,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1177,
                          "end": 1184,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1186,
                          "end": 1194,
                          "decorators": [],
                          "name": "primaryA",
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
                        "start": 1196,
                        "end": 1217,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1196,
                          "end": 1205,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1207,
                          "end": 1217,
                          "decorators": [],
                          "name": "secondaryA",
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
              "start": 1228,
              "end": 1313,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1229,
                "end": 1239,
                "typeName": {
                  "type": "Identifier",
                  "start": 1229,
                  "end": 1239,
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 1240,
                "end": 1313,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1242,
                    "end": 1257,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1242,
                      "end": 1246,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1248,
                      "end": 1257,
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
                    "start": 1259,
                    "end": 1311,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1259,
                      "end": 1265,
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1267,
                      "end": 1311,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1269,
                          "end": 1288,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1269,
                            "end": 1276,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1278,
                            "end": 1288,
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
                          "start": 1290,
                          "end": 1309,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1290,
                            "end": 1299,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1301,
                            "end": 1309,
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
            "start": 1319,
            "end": 1324,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1319,
              "end": 1320,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 1323,
              "end": 1324,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1326,
        "end": 1331,
        "left": {
          "type": "Identifier",
          "start": 1326,
          "end": 1327,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1330,
          "end": 1331,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1333,
        "end": 1336,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1333,
          "end": 1334,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1338,
        "end": 1368,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1344,
            "end": 1366,
            "expression": {
              "type": "CallExpression",
              "start": 1344,
              "end": 1365,
              "callee": {
                "type": "MemberExpression",
                "start": 1344,
                "end": 1355,
                "object": {
                  "type": "Identifier",
                  "start": 1344,
                  "end": 1351,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1352,
                  "end": 1355,
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
                  "start": 1356,
                  "end": 1364,
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
      "start": 1369,
      "end": 1438,
      "init": {
        "type": "SequenceExpression",
        "start": 1374,
        "end": 1397,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1374,
            "end": 1390,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1374,
              "end": 1382,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1376,
                  "end": 1380,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1376,
                    "end": 1380,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1376,
                    "end": 1380,
                    "decorators": [],
                    "name": "name",
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
              "start": 1385,
              "end": 1390,
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1392,
            "end": 1397,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1392,
              "end": 1393,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 1396,
              "end": 1397,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1399,
        "end": 1404,
        "left": {
          "type": "Identifier",
          "start": 1399,
          "end": 1400,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1403,
          "end": 1404,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1406,
        "end": 1409,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1406,
          "end": 1407,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1411,
        "end": 1438,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1417,
            "end": 1436,
            "expression": {
              "type": "CallExpression",
              "start": 1417,
              "end": 1435,
              "callee": {
                "type": "MemberExpression",
                "start": 1417,
                "end": 1428,
                "object": {
                  "type": "Identifier",
                  "start": 1417,
                  "end": 1424,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1425,
                  "end": 1428,
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
                  "start": 1429,
                  "end": 1434,
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
      "start": 1439,
      "end": 1513,
      "init": {
        "type": "SequenceExpression",
        "start": 1444,
        "end": 1472,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1444,
            "end": 1465,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1444,
              "end": 1452,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1446,
                  "end": 1450,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1446,
                    "end": 1450,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1446,
                    "end": 1450,
                    "decorators": [],
                    "name": "name",
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
              "start": 1455,
              "end": 1465,
              "callee": {
                "type": "Identifier",
                "start": 1455,
                "end": 1463,
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
            "start": 1467,
            "end": 1472,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1467,
              "end": 1468,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 1471,
              "end": 1472,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1474,
        "end": 1479,
        "left": {
          "type": "Identifier",
          "start": 1474,
          "end": 1475,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1478,
          "end": 1479,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1481,
        "end": 1484,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1481,
          "end": 1482,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1486,
        "end": 1513,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1492,
            "end": 1511,
            "expression": {
              "type": "CallExpression",
              "start": 1492,
              "end": 1510,
              "callee": {
                "type": "MemberExpression",
                "start": 1492,
                "end": 1503,
                "object": {
                  "type": "Identifier",
                  "start": 1492,
                  "end": 1499,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1500,
                  "end": 1503,
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
                  "start": 1504,
                  "end": 1509,
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
      "start": 1514,
      "end": 1623,
      "init": {
        "type": "SequenceExpression",
        "start": 1519,
        "end": 1582,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1519,
            "end": 1575,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1519,
              "end": 1527,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1521,
                  "end": 1525,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1521,
                    "end": 1525,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1521,
                    "end": 1525,
                    "decorators": [],
                    "name": "name",
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
              "start": 1530,
              "end": 1575,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1531,
                "end": 1536,
                "typeName": {
                  "type": "Identifier",
                  "start": 1531,
                  "end": 1536,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 1537,
                "end": 1575,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1539,
                    "end": 1554,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1539,
                      "end": 1543,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1545,
                      "end": 1554,
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
                    "start": 1556,
                    "end": 1573,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1556,
                      "end": 1561,
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1563,
                      "end": 1573,
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
            "start": 1577,
            "end": 1582,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1577,
              "end": 1578,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 1581,
              "end": 1582,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1584,
        "end": 1589,
        "left": {
          "type": "Identifier",
          "start": 1584,
          "end": 1585,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1588,
          "end": 1589,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1591,
        "end": 1594,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1591,
          "end": 1592,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1596,
        "end": 1623,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1602,
            "end": 1621,
            "expression": {
              "type": "CallExpression",
              "start": 1602,
              "end": 1620,
              "callee": {
                "type": "MemberExpression",
                "start": 1602,
                "end": 1613,
                "object": {
                  "type": "Identifier",
                  "start": 1602,
                  "end": 1609,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1610,
                  "end": 1613,
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
                  "start": 1614,
                  "end": 1619,
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
      "start": 1624,
      "end": 1727,
      "init": {
        "type": "SequenceExpression",
        "start": 1629,
        "end": 1683,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1629,
            "end": 1676,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1629,
              "end": 1663,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1631,
                  "end": 1661,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1631,
                    "end": 1637,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1639,
                    "end": 1661,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1641,
                        "end": 1648,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1641,
                          "end": 1648,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1641,
                          "end": 1648,
                          "decorators": [],
                          "name": "primary",
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
                        "start": 1650,
                        "end": 1659,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1650,
                          "end": 1659,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1650,
                          "end": 1659,
                          "decorators": [],
                          "name": "secondary",
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
              "start": 1666,
              "end": 1676,
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 1678,
            "end": 1683,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1678,
              "end": 1679,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 1682,
              "end": 1683,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1685,
        "end": 1690,
        "left": {
          "type": "Identifier",
          "start": 1685,
          "end": 1686,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1689,
          "end": 1690,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1692,
        "end": 1695,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1692,
          "end": 1693,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1697,
        "end": 1727,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1703,
            "end": 1725,
            "expression": {
              "type": "CallExpression",
              "start": 1703,
              "end": 1724,
              "callee": {
                "type": "MemberExpression",
                "start": 1703,
                "end": 1714,
                "object": {
                  "type": "Identifier",
                  "start": 1703,
                  "end": 1710,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1711,
                  "end": 1714,
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
                  "start": 1715,
                  "end": 1723,
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
      "start": 1728,
      "end": 1836,
      "init": {
        "type": "SequenceExpression",
        "start": 1733,
        "end": 1792,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1733,
            "end": 1785,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1733,
              "end": 1767,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1735,
                  "end": 1765,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1735,
                    "end": 1741,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1743,
                    "end": 1765,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1745,
                        "end": 1752,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1745,
                          "end": 1752,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1745,
                          "end": 1752,
                          "decorators": [],
                          "name": "primary",
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
                        "start": 1754,
                        "end": 1763,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1754,
                          "end": 1763,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1754,
                          "end": 1763,
                          "decorators": [],
                          "name": "secondary",
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
              "start": 1770,
              "end": 1785,
              "callee": {
                "type": "Identifier",
                "start": 1770,
                "end": 1783,
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
            "start": 1787,
            "end": 1792,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1787,
              "end": 1788,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 1791,
              "end": 1792,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1794,
        "end": 1799,
        "left": {
          "type": "Identifier",
          "start": 1794,
          "end": 1795,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1798,
          "end": 1799,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1801,
        "end": 1804,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1801,
          "end": 1802,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1806,
        "end": 1836,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1812,
            "end": 1834,
            "expression": {
              "type": "CallExpression",
              "start": 1812,
              "end": 1833,
              "callee": {
                "type": "MemberExpression",
                "start": 1812,
                "end": 1823,
                "object": {
                  "type": "Identifier",
                  "start": 1812,
                  "end": 1819,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1820,
                  "end": 1823,
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
                  "start": 1824,
                  "end": 1832,
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
      "start": 1837,
      "end": 2023,
      "init": {
        "type": "SequenceExpression",
        "start": 1842,
        "end": 1979,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 1842,
            "end": 1968,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 1842,
              "end": 1876,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1844,
                  "end": 1874,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1844,
                    "end": 1850,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1852,
                    "end": 1874,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1854,
                        "end": 1861,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1854,
                          "end": 1861,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1854,
                          "end": 1861,
                          "decorators": [],
                          "name": "primary",
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
                        "start": 1863,
                        "end": 1872,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1863,
                          "end": 1872,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1863,
                          "end": 1872,
                          "decorators": [],
                          "name": "secondary",
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
              "start": 1883,
              "end": 1968,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1884,
                "end": 1894,
                "typeName": {
                  "type": "Identifier",
                  "start": 1884,
                  "end": 1894,
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 1895,
                "end": 1968,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1897,
                    "end": 1912,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1897,
                      "end": 1901,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1903,
                      "end": 1912,
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
                    "start": 1914,
                    "end": 1966,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1914,
                      "end": 1920,
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 1922,
                      "end": 1966,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1924,
                          "end": 1943,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1924,
                            "end": 1931,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1933,
                            "end": 1943,
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
                          "start": 1945,
                          "end": 1964,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 1945,
                            "end": 1954,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1956,
                            "end": 1964,
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
            "start": 1974,
            "end": 1979,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 1974,
              "end": 1975,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 1978,
              "end": 1979,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1981,
        "end": 1986,
        "left": {
          "type": "Identifier",
          "start": 1981,
          "end": 1982,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1985,
          "end": 1986,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1988,
        "end": 1991,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1988,
          "end": 1989,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1993,
        "end": 2023,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1999,
            "end": 2021,
            "expression": {
              "type": "CallExpression",
              "start": 1999,
              "end": 2020,
              "callee": {
                "type": "MemberExpression",
                "start": 1999,
                "end": 2010,
                "object": {
                  "type": "Identifier",
                  "start": 1999,
                  "end": 2006,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2007,
                  "end": 2010,
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
                  "start": 2011,
                  "end": 2019,
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
      "start": 2026,
      "end": 2117,
      "init": {
        "type": "SequenceExpression",
        "start": 2031,
        "end": 2076,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2031,
            "end": 2069,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 2031,
              "end": 2061,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 2033,
                  "end": 2044,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2033,
                    "end": 2037,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2039,
                    "end": 2044,
                    "decorators": [],
                    "name": "nameA",
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
                  "start": 2046,
                  "end": 2059,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2046,
                    "end": 2051,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2053,
                    "end": 2059,
                    "decorators": [],
                    "name": "skillA",
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
              "start": 2064,
              "end": 2069,
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2071,
            "end": 2076,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2071,
              "end": 2072,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 2075,
              "end": 2076,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2078,
        "end": 2083,
        "left": {
          "type": "Identifier",
          "start": 2078,
          "end": 2079,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2082,
          "end": 2083,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2085,
        "end": 2088,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2085,
          "end": 2086,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2090,
        "end": 2117,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2096,
            "end": 2115,
            "expression": {
              "type": "CallExpression",
              "start": 2096,
              "end": 2114,
              "callee": {
                "type": "MemberExpression",
                "start": 2096,
                "end": 2107,
                "object": {
                  "type": "Identifier",
                  "start": 2096,
                  "end": 2103,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2104,
                  "end": 2107,
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
                  "start": 2108,
                  "end": 2113,
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
      "start": 2118,
      "end": 2214,
      "init": {
        "type": "SequenceExpression",
        "start": 2123,
        "end": 2173,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2123,
            "end": 2166,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 2123,
              "end": 2153,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 2125,
                  "end": 2136,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2125,
                    "end": 2129,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2131,
                    "end": 2136,
                    "decorators": [],
                    "name": "nameA",
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
                  "start": 2138,
                  "end": 2151,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2138,
                    "end": 2143,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2145,
                    "end": 2151,
                    "decorators": [],
                    "name": "skillA",
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
              "start": 2156,
              "end": 2166,
              "callee": {
                "type": "Identifier",
                "start": 2156,
                "end": 2164,
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
            "start": 2168,
            "end": 2173,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2168,
              "end": 2169,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 2172,
              "end": 2173,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2175,
        "end": 2180,
        "left": {
          "type": "Identifier",
          "start": 2175,
          "end": 2176,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2179,
          "end": 2180,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2182,
        "end": 2185,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2182,
          "end": 2183,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2187,
        "end": 2214,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2193,
            "end": 2212,
            "expression": {
              "type": "CallExpression",
              "start": 2193,
              "end": 2211,
              "callee": {
                "type": "MemberExpression",
                "start": 2193,
                "end": 2204,
                "object": {
                  "type": "Identifier",
                  "start": 2193,
                  "end": 2200,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2201,
                  "end": 2204,
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
                  "start": 2205,
                  "end": 2210,
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
      "start": 2215,
      "end": 2346,
      "init": {
        "type": "SequenceExpression",
        "start": 2220,
        "end": 2305,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2220,
            "end": 2298,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 2220,
              "end": 2250,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 2222,
                  "end": 2233,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2222,
                    "end": 2226,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2228,
                    "end": 2233,
                    "decorators": [],
                    "name": "nameA",
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
                  "start": 2235,
                  "end": 2248,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2235,
                    "end": 2240,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2242,
                    "end": 2248,
                    "decorators": [],
                    "name": "skillA",
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
              "start": 2253,
              "end": 2298,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2254,
                "end": 2259,
                "typeName": {
                  "type": "Identifier",
                  "start": 2254,
                  "end": 2259,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 2260,
                "end": 2298,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2262,
                    "end": 2277,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2262,
                      "end": 2266,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2268,
                      "end": 2277,
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
                    "start": 2279,
                    "end": 2296,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2279,
                      "end": 2284,
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2286,
                      "end": 2296,
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
            "start": 2300,
            "end": 2305,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2300,
              "end": 2301,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 2304,
              "end": 2305,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2307,
        "end": 2312,
        "left": {
          "type": "Identifier",
          "start": 2307,
          "end": 2308,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2311,
          "end": 2312,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2314,
        "end": 2317,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2314,
          "end": 2315,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2319,
        "end": 2346,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2325,
            "end": 2344,
            "expression": {
              "type": "CallExpression",
              "start": 2325,
              "end": 2343,
              "callee": {
                "type": "MemberExpression",
                "start": 2325,
                "end": 2336,
                "object": {
                  "type": "Identifier",
                  "start": 2325,
                  "end": 2332,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2333,
                  "end": 2336,
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
                  "start": 2337,
                  "end": 2342,
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
      "start": 2347,
      "end": 2485,
      "init": {
        "type": "SequenceExpression",
        "start": 2352,
        "end": 2441,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2352,
            "end": 2434,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 2352,
              "end": 2421,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 2354,
                  "end": 2365,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2354,
                    "end": 2358,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2360,
                    "end": 2365,
                    "decorators": [],
                    "name": "nameA",
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
                  "start": 2367,
                  "end": 2419,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2367,
                    "end": 2373,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 2375,
                    "end": 2419,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2377,
                        "end": 2394,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 2377,
                          "end": 2384,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2386,
                          "end": 2394,
                          "decorators": [],
                          "name": "primaryA",
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
                        "start": 2396,
                        "end": 2417,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 2396,
                          "end": 2405,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2407,
                          "end": 2417,
                          "decorators": [],
                          "name": "secondaryA",
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
              "start": 2424,
              "end": 2434,
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2436,
            "end": 2441,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2436,
              "end": 2437,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 2440,
              "end": 2441,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2443,
        "end": 2448,
        "left": {
          "type": "Identifier",
          "start": 2443,
          "end": 2444,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2447,
          "end": 2448,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2450,
        "end": 2453,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2450,
          "end": 2451,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2455,
        "end": 2485,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2461,
            "end": 2483,
            "expression": {
              "type": "CallExpression",
              "start": 2461,
              "end": 2482,
              "callee": {
                "type": "MemberExpression",
                "start": 2461,
                "end": 2472,
                "object": {
                  "type": "Identifier",
                  "start": 2461,
                  "end": 2468,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2469,
                  "end": 2472,
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
                  "start": 2473,
                  "end": 2481,
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
      "start": 2486,
      "end": 2629,
      "init": {
        "type": "SequenceExpression",
        "start": 2491,
        "end": 2585,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2491,
            "end": 2578,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 2491,
              "end": 2560,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 2493,
                  "end": 2504,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2493,
                    "end": 2497,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2499,
                    "end": 2504,
                    "decorators": [],
                    "name": "nameA",
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
                  "start": 2506,
                  "end": 2558,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2506,
                    "end": 2512,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 2514,
                    "end": 2558,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2516,
                        "end": 2533,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 2516,
                          "end": 2523,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2525,
                          "end": 2533,
                          "decorators": [],
                          "name": "primaryA",
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
                        "start": 2535,
                        "end": 2556,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 2535,
                          "end": 2544,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2546,
                          "end": 2556,
                          "decorators": [],
                          "name": "secondaryA",
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
              "start": 2563,
              "end": 2578,
              "callee": {
                "type": "Identifier",
                "start": 2563,
                "end": 2576,
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
            "start": 2580,
            "end": 2585,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2580,
              "end": 2581,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 2584,
              "end": 2585,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2587,
        "end": 2592,
        "left": {
          "type": "Identifier",
          "start": 2587,
          "end": 2588,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2591,
          "end": 2592,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2594,
        "end": 2597,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2594,
          "end": 2595,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2599,
        "end": 2629,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2605,
            "end": 2627,
            "expression": {
              "type": "CallExpression",
              "start": 2605,
              "end": 2626,
              "callee": {
                "type": "MemberExpression",
                "start": 2605,
                "end": 2616,
                "object": {
                  "type": "Identifier",
                  "start": 2605,
                  "end": 2612,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2613,
                  "end": 2616,
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
                  "start": 2617,
                  "end": 2625,
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
      "end": 2851,
      "init": {
        "type": "SequenceExpression",
        "start": 2635,
        "end": 2807,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2635,
            "end": 2796,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 2635,
              "end": 2704,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 2637,
                  "end": 2648,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2637,
                    "end": 2641,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2643,
                    "end": 2648,
                    "decorators": [],
                    "name": "nameA",
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
                  "start": 2650,
                  "end": 2702,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2650,
                    "end": 2656,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 2658,
                    "end": 2702,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 2660,
                        "end": 2677,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 2660,
                          "end": 2667,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2669,
                          "end": 2677,
                          "decorators": [],
                          "name": "primaryA",
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
                        "start": 2679,
                        "end": 2700,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 2679,
                          "end": 2688,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 2690,
                          "end": 2700,
                          "decorators": [],
                          "name": "secondaryA",
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
              "start": 2711,
              "end": 2796,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2712,
                "end": 2722,
                "typeName": {
                  "type": "Identifier",
                  "start": 2712,
                  "end": 2722,
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 2723,
                "end": 2796,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2725,
                    "end": 2740,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2725,
                      "end": 2729,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2731,
                      "end": 2740,
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
                    "start": 2742,
                    "end": 2794,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2742,
                      "end": 2748,
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 2750,
                      "end": 2794,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2752,
                          "end": 2771,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2752,
                            "end": 2759,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2761,
                            "end": 2771,
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
                          "start": 2773,
                          "end": 2792,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2773,
                            "end": 2782,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2784,
                            "end": 2792,
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
            "start": 2802,
            "end": 2807,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2802,
              "end": 2803,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 2806,
              "end": 2807,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2809,
        "end": 2814,
        "left": {
          "type": "Identifier",
          "start": 2809,
          "end": 2810,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2813,
          "end": 2814,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2816,
        "end": 2819,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2816,
          "end": 2817,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2821,
        "end": 2851,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2827,
            "end": 2849,
            "expression": {
              "type": "CallExpression",
              "start": 2827,
              "end": 2848,
              "callee": {
                "type": "MemberExpression",
                "start": 2827,
                "end": 2838,
                "object": {
                  "type": "Identifier",
                  "start": 2827,
                  "end": 2834,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2835,
                  "end": 2838,
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
                  "start": 2839,
                  "end": 2847,
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
      "start": 2852,
      "end": 2928,
      "init": {
        "type": "SequenceExpression",
        "start": 2857,
        "end": 2887,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2857,
            "end": 2880,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 2857,
              "end": 2872,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 2859,
                  "end": 2863,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2859,
                    "end": 2863,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2859,
                    "end": 2863,
                    "decorators": [],
                    "name": "name",
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
                  "start": 2865,
                  "end": 2870,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2865,
                    "end": 2870,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2865,
                    "end": 2870,
                    "decorators": [],
                    "name": "skill",
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
              "start": 2875,
              "end": 2880,
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 2882,
            "end": 2887,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 2882,
              "end": 2883,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 2886,
              "end": 2887,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2889,
        "end": 2894,
        "left": {
          "type": "Identifier",
          "start": 2889,
          "end": 2890,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2893,
          "end": 2894,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 2896,
        "end": 2899,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 2896,
          "end": 2897,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2901,
        "end": 2928,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2907,
            "end": 2926,
            "expression": {
              "type": "CallExpression",
              "start": 2907,
              "end": 2925,
              "callee": {
                "type": "MemberExpression",
                "start": 2907,
                "end": 2918,
                "object": {
                  "type": "Identifier",
                  "start": 2907,
                  "end": 2914,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2915,
                  "end": 2918,
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
                  "start": 2919,
                  "end": 2924,
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
      "start": 2929,
      "end": 3010,
      "init": {
        "type": "SequenceExpression",
        "start": 2934,
        "end": 2969,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 2934,
            "end": 2962,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 2934,
              "end": 2949,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 2936,
                  "end": 2940,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2936,
                    "end": 2940,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2936,
                    "end": 2940,
                    "decorators": [],
                    "name": "name",
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
                  "start": 2942,
                  "end": 2947,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 2942,
                    "end": 2947,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2942,
                    "end": 2947,
                    "decorators": [],
                    "name": "skill",
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
              "start": 2952,
              "end": 2962,
              "callee": {
                "type": "Identifier",
                "start": 2952,
                "end": 2960,
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
      "end": 3127,
      "init": {
        "type": "SequenceExpression",
        "start": 3016,
        "end": 3086,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 3016,
            "end": 3079,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 3016,
              "end": 3031,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 3018,
                  "end": 3022,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3018,
                    "end": 3022,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 3018,
                    "end": 3022,
                    "decorators": [],
                    "name": "name",
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
                  "start": 3024,
                  "end": 3029,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3024,
                    "end": 3029,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 3024,
                    "end": 3029,
                    "decorators": [],
                    "name": "skill",
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
              "start": 3034,
              "end": 3079,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3035,
                "end": 3040,
                "typeName": {
                  "type": "Identifier",
                  "start": 3035,
                  "end": 3040,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 3041,
                "end": 3079,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3043,
                    "end": 3058,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3043,
                      "end": 3047,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3049,
                      "end": 3058,
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
                    "start": 3060,
                    "end": 3077,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3060,
                      "end": 3065,
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3067,
                      "end": 3077,
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
            "start": 3081,
            "end": 3086,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 3081,
              "end": 3082,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 3085,
              "end": 3086,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3088,
        "end": 3093,
        "left": {
          "type": "Identifier",
          "start": 3088,
          "end": 3089,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 3092,
          "end": 3093,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 3095,
        "end": 3098,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 3095,
          "end": 3096,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3100,
        "end": 3127,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3106,
            "end": 3125,
            "expression": {
              "type": "CallExpression",
              "start": 3106,
              "end": 3124,
              "callee": {
                "type": "MemberExpression",
                "start": 3106,
                "end": 3117,
                "object": {
                  "type": "Identifier",
                  "start": 3106,
                  "end": 3113,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3114,
                  "end": 3117,
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
                  "start": 3118,
                  "end": 3123,
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
      "start": 3128,
      "end": 3237,
      "init": {
        "type": "SequenceExpression",
        "start": 3133,
        "end": 3193,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 3133,
            "end": 3186,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 3133,
              "end": 3173,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 3135,
                  "end": 3139,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3135,
                    "end": 3139,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 3135,
                    "end": 3139,
                    "decorators": [],
                    "name": "name",
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
                  "start": 3141,
                  "end": 3171,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3141,
                    "end": 3147,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 3149,
                    "end": 3171,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 3151,
                        "end": 3158,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 3151,
                          "end": 3158,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 3151,
                          "end": 3158,
                          "decorators": [],
                          "name": "primary",
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
                        "start": 3160,
                        "end": 3169,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 3160,
                          "end": 3169,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 3160,
                          "end": 3169,
                          "decorators": [],
                          "name": "secondary",
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
              "start": 3176,
              "end": 3186,
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 3188,
            "end": 3193,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 3188,
              "end": 3189,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 3192,
              "end": 3193,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3195,
        "end": 3200,
        "left": {
          "type": "Identifier",
          "start": 3195,
          "end": 3196,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 3199,
          "end": 3200,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 3202,
        "end": 3205,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 3202,
          "end": 3203,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3207,
        "end": 3237,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3213,
            "end": 3235,
            "expression": {
              "type": "CallExpression",
              "start": 3213,
              "end": 3234,
              "callee": {
                "type": "MemberExpression",
                "start": 3213,
                "end": 3224,
                "object": {
                  "type": "Identifier",
                  "start": 3213,
                  "end": 3220,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3221,
                  "end": 3224,
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
                  "start": 3225,
                  "end": 3233,
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
      "start": 3238,
      "end": 3352,
      "init": {
        "type": "SequenceExpression",
        "start": 3243,
        "end": 3308,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 3243,
            "end": 3301,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 3243,
              "end": 3283,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 3245,
                  "end": 3249,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3245,
                    "end": 3249,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 3245,
                    "end": 3249,
                    "decorators": [],
                    "name": "name",
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
                  "start": 3251,
                  "end": 3281,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3251,
                    "end": 3257,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 3259,
                    "end": 3281,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 3261,
                        "end": 3268,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 3261,
                          "end": 3268,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 3261,
                          "end": 3268,
                          "decorators": [],
                          "name": "primary",
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
                        "start": 3270,
                        "end": 3279,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 3270,
                          "end": 3279,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 3270,
                          "end": 3279,
                          "decorators": [],
                          "name": "secondary",
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
              "start": 3286,
              "end": 3301,
              "callee": {
                "type": "Identifier",
                "start": 3286,
                "end": 3299,
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
            "start": 3303,
            "end": 3308,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 3303,
              "end": 3304,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 3307,
              "end": 3308,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3310,
        "end": 3315,
        "left": {
          "type": "Identifier",
          "start": 3310,
          "end": 3311,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 3314,
          "end": 3315,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 3317,
        "end": 3320,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 3317,
          "end": 3318,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3322,
        "end": 3352,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3328,
            "end": 3350,
            "expression": {
              "type": "CallExpression",
              "start": 3328,
              "end": 3349,
              "callee": {
                "type": "MemberExpression",
                "start": 3328,
                "end": 3339,
                "object": {
                  "type": "Identifier",
                  "start": 3328,
                  "end": 3335,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3336,
                  "end": 3339,
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
                  "start": 3340,
                  "end": 3348,
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
      "start": 3353,
      "end": 3545,
      "init": {
        "type": "SequenceExpression",
        "start": 3358,
        "end": 3501,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 3358,
            "end": 3490,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 3358,
              "end": 3398,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 3360,
                  "end": 3364,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3360,
                    "end": 3364,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 3360,
                    "end": 3364,
                    "decorators": [],
                    "name": "name",
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
                  "start": 3366,
                  "end": 3396,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3366,
                    "end": 3372,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 3374,
                    "end": 3396,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 3376,
                        "end": 3383,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 3376,
                          "end": 3383,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 3376,
                          "end": 3383,
                          "decorators": [],
                          "name": "primary",
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
                        "start": 3385,
                        "end": 3394,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 3385,
                          "end": 3394,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 3385,
                          "end": 3394,
                          "decorators": [],
                          "name": "secondary",
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
              "start": 3405,
              "end": 3490,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3406,
                "end": 3416,
                "typeName": {
                  "type": "Identifier",
                  "start": 3406,
                  "end": 3416,
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "ObjectExpression",
                "start": 3417,
                "end": 3490,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3419,
                    "end": 3434,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3419,
                      "end": 3423,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3425,
                      "end": 3434,
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
                    "start": 3436,
                    "end": 3488,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3436,
                      "end": 3442,
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 3444,
                      "end": 3488,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 3446,
                          "end": 3465,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3446,
                            "end": 3453,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 3455,
                            "end": 3465,
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
                          "start": 3467,
                          "end": 3486,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 3467,
                            "end": 3476,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 3478,
                            "end": 3486,
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
            "start": 3496,
            "end": 3501,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 3496,
              "end": 3497,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 3500,
              "end": 3501,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3503,
        "end": 3508,
        "left": {
          "type": "Identifier",
          "start": 3503,
          "end": 3504,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 3507,
          "end": 3508,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 3510,
        "end": 3513,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 3510,
          "end": 3511,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3515,
        "end": 3545,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3521,
            "end": 3543,
            "expression": {
              "type": "CallExpression",
              "start": 3521,
              "end": 3542,
              "callee": {
                "type": "MemberExpression",
                "start": 3521,
                "end": 3532,
                "object": {
                  "type": "Identifier",
                  "start": 3521,
                  "end": 3528,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3529,
                  "end": 3532,
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
                  "start": 3533,
                  "end": 3541,
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
