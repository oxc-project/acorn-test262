__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 5025,
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
      "end": 324,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 323,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 244,
            "decorators": [],
            "name": "robots",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 235,
              "end": 244,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 237,
                "end": 244,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 237,
                  "end": 242,
                  "typeName": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 242,
                    "decorators": [],
                    "name": "Robot",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 247,
            "end": 323,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 248,
                "end": 282,
                "properties": [
                  {
                    "type": "Property",
                    "start": 250,
                    "end": 263,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 254,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 256,
                      "end": 263,
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
                    "start": 265,
                    "end": 280,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 270,
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 272,
                      "end": 280,
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
              {
                "type": "ObjectExpression",
                "start": 284,
                "end": 322,
                "properties": [
                  {
                    "type": "Property",
                    "start": 286,
                    "end": 301,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 286,
                      "end": 290,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 292,
                      "end": 301,
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
                    "start": 303,
                    "end": 320,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 308,
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 310,
                      "end": 320,
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
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 325,
      "end": 506,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 329,
          "end": 505,
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 354,
            "decorators": [],
            "name": "multiRobots",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 354,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 342,
                "end": 354,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 342,
                  "end": 352,
                  "typeName": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 352,
                    "decorators": [],
                    "name": "MultiRobot",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 357,
            "end": 505,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 358,
                "end": 425,
                "properties": [
                  {
                    "type": "Property",
                    "start": 360,
                    "end": 373,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 360,
                      "end": 364,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 366,
                      "end": 373,
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
                    "start": 375,
                    "end": 423,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 381,
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 383,
                      "end": 423,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 385,
                          "end": 402,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 385,
                            "end": 392,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 394,
                            "end": 402,
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
                          "start": 404,
                          "end": 421,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 404,
                            "end": 413,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 415,
                            "end": 421,
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
              {
                "type": "ObjectExpression",
                "start": 431,
                "end": 504,
                "properties": [
                  {
                    "type": "Property",
                    "start": 433,
                    "end": 448,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 437,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 439,
                      "end": 448,
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
                    "start": 450,
                    "end": 502,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 450,
                      "end": 456,
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 458,
                      "end": 502,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 460,
                          "end": 479,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 460,
                            "end": 467,
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 469,
                            "end": 479,
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
                          "start": 481,
                          "end": 500,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 481,
                            "end": 490,
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 492,
                            "end": 500,
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
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 508,
      "end": 551,
      "id": {
        "type": "Identifier",
        "start": 517,
        "end": 526,
        "decorators": [],
        "name": "getRobots",
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
        "start": 529,
        "end": 551,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 535,
            "end": 549,
            "argument": {
              "type": "Identifier",
              "start": 542,
              "end": 548,
              "decorators": [],
              "name": "robots",
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
      "start": 553,
      "end": 606,
      "id": {
        "type": "Identifier",
        "start": 562,
        "end": 576,
        "decorators": [],
        "name": "getMultiRobots",
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
        "start": 579,
        "end": 606,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 585,
            "end": 604,
            "argument": {
              "type": "Identifier",
              "start": 592,
              "end": 603,
              "decorators": [],
              "name": "multiRobots",
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
      "start": 608,
      "end": 691,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 612,
          "end": 625,
          "id": {
            "type": "Identifier",
            "start": 612,
            "end": 625,
            "decorators": [],
            "name": "nameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 617,
              "end": 625,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 619,
                "end": 625
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 627,
          "end": 643,
          "id": {
            "type": "Identifier",
            "start": 627,
            "end": 643,
            "decorators": [],
            "name": "primaryA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 635,
              "end": 643,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 637,
                "end": 643
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 645,
          "end": 663,
          "id": {
            "type": "Identifier",
            "start": 645,
            "end": 663,
            "decorators": [],
            "name": "secondaryA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 655,
              "end": 663,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 657,
                "end": 663
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 665,
          "end": 674,
          "id": {
            "type": "Identifier",
            "start": 665,
            "end": 674,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 666,
              "end": 674,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 668,
                "end": 674
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 676,
          "end": 690,
          "id": {
            "type": "Identifier",
            "start": 676,
            "end": 690,
            "decorators": [],
            "name": "skillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 682,
              "end": 690,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 684,
                "end": 690
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
      "start": 692,
      "end": 760,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 696,
          "end": 708,
          "id": {
            "type": "Identifier",
            "start": 696,
            "end": 708,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 700,
              "end": 708,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 702,
                "end": 708
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 710,
          "end": 725,
          "id": {
            "type": "Identifier",
            "start": 710,
            "end": 725,
            "decorators": [],
            "name": "primary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 717,
              "end": 725,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 719,
                "end": 725
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 727,
          "end": 744,
          "id": {
            "type": "Identifier",
            "start": 727,
            "end": 744,
            "decorators": [],
            "name": "secondary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 736,
              "end": 744,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 738,
                "end": 744
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 746,
          "end": 759,
          "id": {
            "type": "Identifier",
            "start": 746,
            "end": 759,
            "decorators": [],
            "name": "skill",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 751,
              "end": 759,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 753,
                "end": 759
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
      "type": "ForOfStatement",
      "start": 762,
      "end": 831,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 767,
        "end": 792,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 768,
            "end": 790,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 768,
              "end": 772,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 774,
              "end": 790,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 774,
                "end": 779,
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 782,
                "end": 790,
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
        "start": 796,
        "end": 802,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 804,
        "end": 831,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 810,
            "end": 829,
            "expression": {
              "type": "CallExpression",
              "start": 810,
              "end": 828,
              "callee": {
                "type": "MemberExpression",
                "start": 810,
                "end": 821,
                "object": {
                  "type": "Identifier",
                  "start": 810,
                  "end": 817,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 818,
                  "end": 821,
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
                  "start": 822,
                  "end": 827,
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
      "type": "ForOfStatement",
      "start": 832,
      "end": 906,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 837,
        "end": 862,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 838,
            "end": 860,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 838,
              "end": 842,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 844,
              "end": 860,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 844,
                "end": 849,
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 852,
                "end": 860,
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
        "start": 866,
        "end": 877,
        "callee": {
          "type": "Identifier",
          "start": 866,
          "end": 875,
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 879,
        "end": 906,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 885,
            "end": 904,
            "expression": {
              "type": "CallExpression",
              "start": 885,
              "end": 903,
              "callee": {
                "type": "MemberExpression",
                "start": 885,
                "end": 896,
                "object": {
                  "type": "Identifier",
                  "start": 885,
                  "end": 892,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 893,
                  "end": 896,
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
                  "start": 897,
                  "end": 902,
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
      "type": "ForOfStatement",
      "start": 907,
      "end": 1046,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 912,
        "end": 937,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 913,
            "end": 935,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 913,
              "end": 917,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 919,
              "end": 935,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 919,
                "end": 924,
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 927,
                "end": 935,
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
        "type": "ArrayExpression",
        "start": 941,
        "end": 1017,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 942,
            "end": 976,
            "properties": [
              {
                "type": "Property",
                "start": 944,
                "end": 957,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 944,
                  "end": 948,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 950,
                  "end": 957,
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
                "start": 959,
                "end": 974,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 959,
                  "end": 964,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 966,
                  "end": 974,
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
          {
            "type": "ObjectExpression",
            "start": 978,
            "end": 1016,
            "properties": [
              {
                "type": "Property",
                "start": 980,
                "end": 995,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 980,
                  "end": 984,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 986,
                  "end": 995,
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
                "start": 997,
                "end": 1014,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 997,
                  "end": 1002,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1004,
                  "end": 1014,
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
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1019,
        "end": 1046,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1025,
            "end": 1044,
            "expression": {
              "type": "CallExpression",
              "start": 1025,
              "end": 1043,
              "callee": {
                "type": "MemberExpression",
                "start": 1025,
                "end": 1036,
                "object": {
                  "type": "Identifier",
                  "start": 1025,
                  "end": 1032,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1033,
                  "end": 1036,
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
                  "start": 1037,
                  "end": 1042,
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
      "type": "ForOfStatement",
      "start": 1047,
      "end": 1232,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 1052,
        "end": 1185,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 1054,
            "end": 1183,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 1054,
              "end": 1060,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 1062,
              "end": 1183,
              "decorators": [],
              "left": {
                "type": "ObjectPattern",
                "start": 1062,
                "end": 1132,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 1064,
                    "end": 1093,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1064,
                      "end": 1071,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 1073,
                      "end": 1093,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 1073,
                        "end": 1081,
                        "decorators": [],
                        "name": "primaryA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1084,
                        "end": 1093,
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
                    "start": 1095,
                    "end": 1130,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1095,
                      "end": 1104,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 1106,
                      "end": 1130,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 1106,
                        "end": 1116,
                        "decorators": [],
                        "name": "secondaryA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1119,
                        "end": 1130,
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
                "start": 1139,
                "end": 1183,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1141,
                    "end": 1159,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1141,
                      "end": 1148,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1150,
                      "end": 1159,
                      "value": "nosKill",
                      "raw": "\"nosKill\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1161,
                    "end": 1181,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1161,
                      "end": 1170,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1172,
                      "end": 1181,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
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
        "start": 1189,
        "end": 1200,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 1202,
        "end": 1232,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1208,
            "end": 1230,
            "expression": {
              "type": "CallExpression",
              "start": 1208,
              "end": 1229,
              "callee": {
                "type": "MemberExpression",
                "start": 1208,
                "end": 1219,
                "object": {
                  "type": "Identifier",
                  "start": 1208,
                  "end": 1215,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1216,
                  "end": 1219,
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
                  "start": 1220,
                  "end": 1228,
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
      "type": "ForOfStatement",
      "start": 1233,
      "end": 1423,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 1238,
        "end": 1371,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 1240,
            "end": 1369,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 1240,
              "end": 1246,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 1248,
              "end": 1369,
              "decorators": [],
              "left": {
                "type": "ObjectPattern",
                "start": 1248,
                "end": 1318,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 1250,
                    "end": 1279,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1250,
                      "end": 1257,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 1259,
                      "end": 1279,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 1259,
                        "end": 1267,
                        "decorators": [],
                        "name": "primaryA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1270,
                        "end": 1279,
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
                    "start": 1281,
                    "end": 1316,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1281,
                      "end": 1290,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 1292,
                      "end": 1316,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 1292,
                        "end": 1302,
                        "decorators": [],
                        "name": "secondaryA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1305,
                        "end": 1316,
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
                "start": 1325,
                "end": 1369,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1327,
                    "end": 1345,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1327,
                      "end": 1334,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1336,
                      "end": 1345,
                      "value": "nosKill",
                      "raw": "\"nosKill\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1347,
                    "end": 1367,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1347,
                      "end": 1356,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1358,
                      "end": 1367,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
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
        "start": 1375,
        "end": 1391,
        "callee": {
          "type": "Identifier",
          "start": 1375,
          "end": 1389,
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1393,
        "end": 1423,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1399,
            "end": 1421,
            "expression": {
              "type": "CallExpression",
              "start": 1399,
              "end": 1420,
              "callee": {
                "type": "MemberExpression",
                "start": 1399,
                "end": 1410,
                "object": {
                  "type": "Identifier",
                  "start": 1399,
                  "end": 1406,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1407,
                  "end": 1410,
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
                  "start": 1411,
                  "end": 1419,
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
      "type": "ForOfStatement",
      "start": 1424,
      "end": 1768,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 1429,
        "end": 1562,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 1431,
            "end": 1560,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 1431,
              "end": 1437,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 1439,
              "end": 1560,
              "decorators": [],
              "left": {
                "type": "ObjectPattern",
                "start": 1439,
                "end": 1509,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 1441,
                    "end": 1470,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1441,
                      "end": 1448,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 1450,
                      "end": 1470,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 1450,
                        "end": 1458,
                        "decorators": [],
                        "name": "primaryA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1461,
                        "end": 1470,
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
                    "start": 1472,
                    "end": 1507,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1472,
                      "end": 1481,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 1483,
                      "end": 1507,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 1483,
                        "end": 1493,
                        "decorators": [],
                        "name": "secondaryA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1496,
                        "end": 1507,
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
                "start": 1516,
                "end": 1560,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1518,
                    "end": 1536,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1518,
                      "end": 1525,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1527,
                      "end": 1536,
                      "value": "nosKill",
                      "raw": "\"nosKill\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1538,
                    "end": 1558,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1538,
                      "end": 1547,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1549,
                      "end": 1558,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
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
        "start": 1570,
        "end": 1736,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 1571,
          "end": 1583,
          "elementType": {
            "type": "TSTypeReference",
            "start": 1571,
            "end": 1581,
            "typeName": {
              "type": "Identifier",
              "start": 1571,
              "end": 1581,
              "decorators": [],
              "name": "MultiRobot",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "expression": {
          "type": "ArrayExpression",
          "start": 1584,
          "end": 1736,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 1585,
              "end": 1652,
              "properties": [
                {
                  "type": "Property",
                  "start": 1587,
                  "end": 1600,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1587,
                    "end": 1591,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1593,
                    "end": 1600,
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
                  "start": 1602,
                  "end": 1650,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1602,
                    "end": 1608,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 1610,
                    "end": 1650,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1612,
                        "end": 1629,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1612,
                          "end": 1619,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1621,
                          "end": 1629,
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
                        "start": 1631,
                        "end": 1648,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1631,
                          "end": 1640,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1642,
                          "end": 1648,
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
            {
              "type": "ObjectExpression",
              "start": 1662,
              "end": 1735,
              "properties": [
                {
                  "type": "Property",
                  "start": 1664,
                  "end": 1679,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1664,
                    "end": 1668,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1670,
                    "end": 1679,
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
                  "start": 1681,
                  "end": 1733,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1681,
                    "end": 1687,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 1689,
                    "end": 1733,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1691,
                        "end": 1710,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1691,
                          "end": 1698,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1700,
                          "end": 1710,
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
                        "start": 1712,
                        "end": 1731,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1712,
                          "end": 1721,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1723,
                          "end": 1731,
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
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1738,
        "end": 1768,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1744,
            "end": 1766,
            "expression": {
              "type": "CallExpression",
              "start": 1744,
              "end": 1765,
              "callee": {
                "type": "MemberExpression",
                "start": 1744,
                "end": 1755,
                "object": {
                  "type": "Identifier",
                  "start": 1744,
                  "end": 1751,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1752,
                  "end": 1755,
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
                  "start": 1756,
                  "end": 1764,
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
      "type": "ForOfStatement",
      "start": 1770,
      "end": 1833,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 1775,
        "end": 1794,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 1777,
            "end": 1792,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 1777,
              "end": 1781,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 1777,
              "end": 1792,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 1777,
                "end": 1781,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1784,
                "end": 1792,
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
        "start": 1798,
        "end": 1804,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 1806,
        "end": 1833,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1812,
            "end": 1831,
            "expression": {
              "type": "CallExpression",
              "start": 1812,
              "end": 1830,
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
                  "end": 1829,
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
      "type": "ForOfStatement",
      "start": 1834,
      "end": 1902,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 1839,
        "end": 1858,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 1841,
            "end": 1856,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 1841,
              "end": 1845,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 1841,
              "end": 1856,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 1841,
                "end": 1845,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1848,
                "end": 1856,
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
        "start": 1862,
        "end": 1873,
        "callee": {
          "type": "Identifier",
          "start": 1862,
          "end": 1871,
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1875,
        "end": 1902,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1881,
            "end": 1900,
            "expression": {
              "type": "CallExpression",
              "start": 1881,
              "end": 1899,
              "callee": {
                "type": "MemberExpression",
                "start": 1881,
                "end": 1892,
                "object": {
                  "type": "Identifier",
                  "start": 1881,
                  "end": 1888,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1889,
                  "end": 1892,
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
                  "start": 1893,
                  "end": 1898,
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
      "type": "ForOfStatement",
      "start": 1903,
      "end": 2036,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 1908,
        "end": 1927,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 1910,
            "end": 1925,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 1910,
              "end": 1914,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 1910,
              "end": 1925,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 1910,
                "end": 1914,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1917,
                "end": 1925,
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
        "type": "ArrayExpression",
        "start": 1931,
        "end": 2007,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 1932,
            "end": 1966,
            "properties": [
              {
                "type": "Property",
                "start": 1934,
                "end": 1947,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1934,
                  "end": 1938,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1940,
                  "end": 1947,
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
                "start": 1949,
                "end": 1964,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1949,
                  "end": 1954,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1956,
                  "end": 1964,
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
          {
            "type": "ObjectExpression",
            "start": 1968,
            "end": 2006,
            "properties": [
              {
                "type": "Property",
                "start": 1970,
                "end": 1985,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1970,
                  "end": 1974,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1976,
                  "end": 1985,
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
                "start": 1987,
                "end": 2004,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1987,
                  "end": 1992,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1994,
                  "end": 2004,
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
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 2009,
        "end": 2036,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2015,
            "end": 2034,
            "expression": {
              "type": "CallExpression",
              "start": 2015,
              "end": 2033,
              "callee": {
                "type": "MemberExpression",
                "start": 2015,
                "end": 2026,
                "object": {
                  "type": "Identifier",
                  "start": 2015,
                  "end": 2022,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2023,
                  "end": 2026,
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
                  "start": 2027,
                  "end": 2032,
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
      "type": "ForOfStatement",
      "start": 2037,
      "end": 2220,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 2042,
        "end": 2173,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 2048,
            "end": 2171,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 2048,
              "end": 2054,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 2056,
              "end": 2171,
              "decorators": [],
              "left": {
                "type": "ObjectPattern",
                "start": 2056,
                "end": 2124,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 2066,
                    "end": 2085,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2066,
                      "end": 2073,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 2066,
                      "end": 2085,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 2066,
                        "end": 2073,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2076,
                        "end": 2085,
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
                    "start": 2095,
                    "end": 2118,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2095,
                      "end": 2104,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 2095,
                      "end": 2118,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 2095,
                        "end": 2104,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2107,
                        "end": 2118,
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
                "start": 2127,
                "end": 2171,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2129,
                    "end": 2147,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2129,
                      "end": 2136,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2138,
                      "end": 2147,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2149,
                    "end": 2169,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2149,
                      "end": 2158,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2160,
                      "end": 2169,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
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
        "start": 2177,
        "end": 2188,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 2190,
        "end": 2220,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2196,
            "end": 2218,
            "expression": {
              "type": "CallExpression",
              "start": 2196,
              "end": 2217,
              "callee": {
                "type": "MemberExpression",
                "start": 2196,
                "end": 2207,
                "object": {
                  "type": "Identifier",
                  "start": 2196,
                  "end": 2203,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2204,
                  "end": 2207,
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
                  "start": 2208,
                  "end": 2216,
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
      "type": "ForOfStatement",
      "start": 2221,
      "end": 2409,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 2226,
        "end": 2357,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 2232,
            "end": 2355,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 2232,
              "end": 2238,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 2240,
              "end": 2355,
              "decorators": [],
              "left": {
                "type": "ObjectPattern",
                "start": 2240,
                "end": 2308,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 2250,
                    "end": 2269,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2250,
                      "end": 2257,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 2250,
                      "end": 2269,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 2250,
                        "end": 2257,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2260,
                        "end": 2269,
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
                    "start": 2279,
                    "end": 2302,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2279,
                      "end": 2288,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 2279,
                      "end": 2302,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 2279,
                        "end": 2288,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2291,
                        "end": 2302,
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
                "start": 2311,
                "end": 2355,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2313,
                    "end": 2331,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2313,
                      "end": 2320,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2322,
                      "end": 2331,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2333,
                    "end": 2353,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2333,
                      "end": 2342,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2344,
                      "end": 2353,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
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
        "start": 2361,
        "end": 2377,
        "callee": {
          "type": "Identifier",
          "start": 2361,
          "end": 2375,
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 2379,
        "end": 2409,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2385,
            "end": 2407,
            "expression": {
              "type": "CallExpression",
              "start": 2385,
              "end": 2406,
              "callee": {
                "type": "MemberExpression",
                "start": 2385,
                "end": 2396,
                "object": {
                  "type": "Identifier",
                  "start": 2385,
                  "end": 2392,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2393,
                  "end": 2396,
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
                  "start": 2397,
                  "end": 2405,
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
      "type": "ForOfStatement",
      "start": 2410,
      "end": 2730,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 2415,
        "end": 2546,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 2421,
            "end": 2544,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 2421,
              "end": 2427,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 2429,
              "end": 2544,
              "decorators": [],
              "left": {
                "type": "ObjectPattern",
                "start": 2429,
                "end": 2497,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 2439,
                    "end": 2458,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2439,
                      "end": 2446,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 2439,
                      "end": 2458,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 2439,
                        "end": 2446,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2449,
                        "end": 2458,
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
                    "start": 2468,
                    "end": 2491,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2468,
                      "end": 2477,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 2468,
                      "end": 2491,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 2468,
                        "end": 2477,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2480,
                        "end": 2491,
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
                "start": 2500,
                "end": 2544,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2502,
                    "end": 2520,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2502,
                      "end": 2509,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2511,
                      "end": 2520,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2522,
                    "end": 2542,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2522,
                      "end": 2531,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2533,
                      "end": 2542,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
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
        "type": "ArrayExpression",
        "start": 2550,
        "end": 2698,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 2551,
            "end": 2618,
            "properties": [
              {
                "type": "Property",
                "start": 2553,
                "end": 2566,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2553,
                  "end": 2557,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2559,
                  "end": 2566,
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
                "start": 2568,
                "end": 2616,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2568,
                  "end": 2574,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2576,
                  "end": 2616,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2578,
                      "end": 2595,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2578,
                        "end": 2585,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2587,
                        "end": 2595,
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
                      "start": 2597,
                      "end": 2614,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2597,
                        "end": 2606,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2608,
                        "end": 2614,
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
          {
            "type": "ObjectExpression",
            "start": 2624,
            "end": 2697,
            "properties": [
              {
                "type": "Property",
                "start": 2626,
                "end": 2641,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2626,
                  "end": 2630,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2632,
                  "end": 2641,
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
                "start": 2643,
                "end": 2695,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2643,
                  "end": 2649,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2651,
                  "end": 2695,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2653,
                      "end": 2672,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2653,
                        "end": 2660,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2662,
                        "end": 2672,
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
                      "start": 2674,
                      "end": 2693,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2674,
                        "end": 2683,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2685,
                        "end": 2693,
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
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 2700,
        "end": 2730,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2706,
            "end": 2728,
            "expression": {
              "type": "CallExpression",
              "start": 2706,
              "end": 2727,
              "callee": {
                "type": "MemberExpression",
                "start": 2706,
                "end": 2717,
                "object": {
                  "type": "Identifier",
                  "start": 2706,
                  "end": 2713,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2714,
                  "end": 2717,
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
                  "start": 2718,
                  "end": 2726,
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
      "type": "ForOfStatement",
      "start": 2733,
      "end": 2829,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 2738,
        "end": 2790,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 2739,
            "end": 2761,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 2739,
              "end": 2743,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 2745,
              "end": 2761,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 2745,
                "end": 2750,
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2753,
                "end": 2761,
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
            "start": 2763,
            "end": 2788,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 2763,
              "end": 2768,
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 2770,
              "end": 2788,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 2770,
                "end": 2776,
                "decorators": [],
                "name": "skillA",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2779,
                "end": 2788,
                "value": "noSkill",
                "raw": "\"noSkill\""
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
        "start": 2794,
        "end": 2800,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 2802,
        "end": 2829,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2808,
            "end": 2827,
            "expression": {
              "type": "CallExpression",
              "start": 2808,
              "end": 2826,
              "callee": {
                "type": "MemberExpression",
                "start": 2808,
                "end": 2819,
                "object": {
                  "type": "Identifier",
                  "start": 2808,
                  "end": 2815,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2816,
                  "end": 2819,
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
                  "start": 2820,
                  "end": 2825,
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
      "type": "ForOfStatement",
      "start": 2830,
      "end": 2932,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 2835,
        "end": 2888,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 2836,
            "end": 2858,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 2836,
              "end": 2840,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 2842,
              "end": 2858,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 2842,
                "end": 2847,
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2850,
                "end": 2858,
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
            "start": 2860,
            "end": 2885,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 2860,
              "end": 2865,
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 2867,
              "end": 2885,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 2867,
                "end": 2873,
                "decorators": [],
                "name": "skillA",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2876,
                "end": 2885,
                "value": "noSkill",
                "raw": "\"noSkill\""
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
        "start": 2892,
        "end": 2903,
        "callee": {
          "type": "Identifier",
          "start": 2892,
          "end": 2901,
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 2905,
        "end": 2932,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2911,
            "end": 2930,
            "expression": {
              "type": "CallExpression",
              "start": 2911,
              "end": 2929,
              "callee": {
                "type": "MemberExpression",
                "start": 2911,
                "end": 2922,
                "object": {
                  "type": "Identifier",
                  "start": 2911,
                  "end": 2918,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2919,
                  "end": 2922,
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
                  "start": 2923,
                  "end": 2928,
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
      "type": "ForOfStatement",
      "start": 2933,
      "end": 3100,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 2938,
        "end": 2991,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 2939,
            "end": 2961,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 2939,
              "end": 2943,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 2945,
              "end": 2961,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 2945,
                "end": 2950,
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2953,
                "end": 2961,
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
            "start": 2963,
            "end": 2988,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 2963,
              "end": 2968,
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 2970,
              "end": 2988,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 2970,
                "end": 2976,
                "decorators": [],
                "name": "skillA",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2979,
                "end": 2988,
                "value": "noSkill",
                "raw": "\"noSkill\""
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
        "type": "ArrayExpression",
        "start": 2995,
        "end": 3071,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 2996,
            "end": 3030,
            "properties": [
              {
                "type": "Property",
                "start": 2998,
                "end": 3011,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2998,
                  "end": 3002,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 3004,
                  "end": 3011,
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
                "start": 3013,
                "end": 3028,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 3013,
                  "end": 3018,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 3020,
                  "end": 3028,
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
          {
            "type": "ObjectExpression",
            "start": 3032,
            "end": 3070,
            "properties": [
              {
                "type": "Property",
                "start": 3034,
                "end": 3049,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 3034,
                  "end": 3038,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 3040,
                  "end": 3049,
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
                "start": 3051,
                "end": 3068,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 3051,
                  "end": 3056,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 3058,
                  "end": 3068,
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
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 3073,
        "end": 3100,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3079,
            "end": 3098,
            "expression": {
              "type": "CallExpression",
              "start": 3079,
              "end": 3097,
              "callee": {
                "type": "MemberExpression",
                "start": 3079,
                "end": 3090,
                "object": {
                  "type": "Identifier",
                  "start": 3079,
                  "end": 3086,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3087,
                  "end": 3090,
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
                  "start": 3091,
                  "end": 3096,
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
      "type": "ForOfStatement",
      "start": 3101,
      "end": 3331,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 3106,
        "end": 3287,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 3112,
            "end": 3134,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 3112,
              "end": 3116,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 3118,
              "end": 3134,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 3118,
                "end": 3123,
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 3126,
                "end": 3134,
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
            "start": 3140,
            "end": 3285,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 3140,
              "end": 3146,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 3148,
              "end": 3285,
              "decorators": [],
              "left": {
                "type": "ObjectPattern",
                "start": 3148,
                "end": 3238,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 3158,
                    "end": 3187,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3158,
                      "end": 3165,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 3167,
                      "end": 3187,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 3167,
                        "end": 3175,
                        "decorators": [],
                        "name": "primaryA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3178,
                        "end": 3187,
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
                    "start": 3197,
                    "end": 3232,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3197,
                      "end": 3206,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 3208,
                      "end": 3232,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 3208,
                        "end": 3218,
                        "decorators": [],
                        "name": "secondaryA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3221,
                        "end": 3232,
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
                "start": 3241,
                "end": 3285,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3243,
                    "end": 3261,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3243,
                      "end": 3250,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3252,
                      "end": 3261,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3263,
                    "end": 3283,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3263,
                      "end": 3272,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3274,
                      "end": 3283,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
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
        "start": 3291,
        "end": 3302,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 3304,
        "end": 3331,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3310,
            "end": 3329,
            "expression": {
              "type": "CallExpression",
              "start": 3310,
              "end": 3328,
              "callee": {
                "type": "MemberExpression",
                "start": 3310,
                "end": 3321,
                "object": {
                  "type": "Identifier",
                  "start": 3310,
                  "end": 3317,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3318,
                  "end": 3321,
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
                  "start": 3322,
                  "end": 3327,
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
      "type": "ForOfStatement",
      "start": 3332,
      "end": 3567,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 3337,
        "end": 3518,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 3343,
            "end": 3365,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 3343,
              "end": 3347,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 3349,
              "end": 3365,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 3349,
                "end": 3354,
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 3357,
                "end": 3365,
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
            "start": 3371,
            "end": 3516,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 3371,
              "end": 3377,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 3379,
              "end": 3516,
              "decorators": [],
              "left": {
                "type": "ObjectPattern",
                "start": 3379,
                "end": 3469,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 3389,
                    "end": 3418,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3389,
                      "end": 3396,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 3398,
                      "end": 3418,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 3398,
                        "end": 3406,
                        "decorators": [],
                        "name": "primaryA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3409,
                        "end": 3418,
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
                    "start": 3428,
                    "end": 3463,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3428,
                      "end": 3437,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 3439,
                      "end": 3463,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 3439,
                        "end": 3449,
                        "decorators": [],
                        "name": "secondaryA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3452,
                        "end": 3463,
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
                "start": 3472,
                "end": 3516,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3474,
                    "end": 3492,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3474,
                      "end": 3481,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3483,
                      "end": 3492,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3494,
                    "end": 3514,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3494,
                      "end": 3503,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3505,
                      "end": 3514,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
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
        "start": 3522,
        "end": 3538,
        "callee": {
          "type": "Identifier",
          "start": 3522,
          "end": 3536,
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 3540,
        "end": 3567,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3546,
            "end": 3565,
            "expression": {
              "type": "CallExpression",
              "start": 3546,
              "end": 3564,
              "callee": {
                "type": "MemberExpression",
                "start": 3546,
                "end": 3557,
                "object": {
                  "type": "Identifier",
                  "start": 3546,
                  "end": 3553,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3554,
                  "end": 3557,
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
                  "start": 3558,
                  "end": 3563,
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
      "type": "ForOfStatement",
      "start": 3568,
      "end": 3949,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 3573,
        "end": 3754,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 3579,
            "end": 3601,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 3579,
              "end": 3583,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 3585,
              "end": 3601,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 3585,
                "end": 3590,
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 3593,
                "end": 3601,
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
            "start": 3607,
            "end": 3752,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 3607,
              "end": 3613,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 3615,
              "end": 3752,
              "decorators": [],
              "left": {
                "type": "ObjectPattern",
                "start": 3615,
                "end": 3705,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 3625,
                    "end": 3654,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3625,
                      "end": 3632,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 3634,
                      "end": 3654,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 3634,
                        "end": 3642,
                        "decorators": [],
                        "name": "primaryA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3645,
                        "end": 3654,
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
                    "start": 3664,
                    "end": 3699,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3664,
                      "end": 3673,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 3675,
                      "end": 3699,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 3675,
                        "end": 3685,
                        "decorators": [],
                        "name": "secondaryA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3688,
                        "end": 3699,
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
                "start": 3708,
                "end": 3752,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3710,
                    "end": 3728,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3710,
                      "end": 3717,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3719,
                      "end": 3728,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 3730,
                    "end": 3750,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 3730,
                      "end": 3739,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 3741,
                      "end": 3750,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
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
        "start": 3758,
        "end": 3920,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 3759,
          "end": 3771,
          "elementType": {
            "type": "TSTypeReference",
            "start": 3759,
            "end": 3769,
            "typeName": {
              "type": "Identifier",
              "start": 3759,
              "end": 3769,
              "decorators": [],
              "name": "MultiRobot",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "expression": {
          "type": "ArrayExpression",
          "start": 3772,
          "end": 3920,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 3773,
              "end": 3840,
              "properties": [
                {
                  "type": "Property",
                  "start": 3775,
                  "end": 3788,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3775,
                    "end": 3779,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3781,
                    "end": 3788,
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
                  "start": 3790,
                  "end": 3838,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3790,
                    "end": 3796,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 3798,
                    "end": 3838,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 3800,
                        "end": 3817,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 3800,
                          "end": 3807,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 3809,
                          "end": 3817,
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
                        "start": 3819,
                        "end": 3836,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 3819,
                          "end": 3828,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 3830,
                          "end": 3836,
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
            {
              "type": "ObjectExpression",
              "start": 3846,
              "end": 3919,
              "properties": [
                {
                  "type": "Property",
                  "start": 3848,
                  "end": 3863,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3848,
                    "end": 3852,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 3854,
                    "end": 3863,
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
                  "start": 3865,
                  "end": 3917,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 3865,
                    "end": 3871,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 3873,
                    "end": 3917,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 3875,
                        "end": 3894,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 3875,
                          "end": 3882,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 3884,
                          "end": 3894,
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
                        "start": 3896,
                        "end": 3915,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 3896,
                          "end": 3905,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 3907,
                          "end": 3915,
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
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3922,
        "end": 3949,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3928,
            "end": 3947,
            "expression": {
              "type": "CallExpression",
              "start": 3928,
              "end": 3946,
              "callee": {
                "type": "MemberExpression",
                "start": 3928,
                "end": 3939,
                "object": {
                  "type": "Identifier",
                  "start": 3928,
                  "end": 3935,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3936,
                  "end": 3939,
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
                  "start": 3940,
                  "end": 3945,
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
      "type": "ForOfStatement",
      "start": 3951,
      "end": 4034,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 3956,
        "end": 3995,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 3958,
            "end": 3973,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 3958,
              "end": 3962,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 3958,
              "end": 3973,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 3958,
                "end": 3962,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 3965,
                "end": 3973,
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
            "start": 3975,
            "end": 3993,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 3975,
              "end": 3980,
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 3975,
              "end": 3993,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 3975,
                "end": 3980,
                "decorators": [],
                "name": "skill",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 3984,
                "end": 3993,
                "value": "noSkill",
                "raw": "\"noSkill\""
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
        "start": 3999,
        "end": 4005,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 4007,
        "end": 4034,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4013,
            "end": 4032,
            "expression": {
              "type": "CallExpression",
              "start": 4013,
              "end": 4031,
              "callee": {
                "type": "MemberExpression",
                "start": 4013,
                "end": 4024,
                "object": {
                  "type": "Identifier",
                  "start": 4013,
                  "end": 4020,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 4021,
                  "end": 4024,
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
                  "start": 4025,
                  "end": 4030,
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
      "type": "ForOfStatement",
      "start": 4035,
      "end": 4123,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 4040,
        "end": 4079,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 4042,
            "end": 4057,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 4042,
              "end": 4046,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 4042,
              "end": 4057,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 4042,
                "end": 4046,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 4049,
                "end": 4057,
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
            "start": 4059,
            "end": 4076,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 4059,
              "end": 4064,
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 4059,
              "end": 4076,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 4059,
                "end": 4064,
                "decorators": [],
                "name": "skill",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 4067,
                "end": 4076,
                "value": "noSkill",
                "raw": "\"noSkill\""
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
        "start": 4083,
        "end": 4094,
        "callee": {
          "type": "Identifier",
          "start": 4083,
          "end": 4092,
          "decorators": [],
          "name": "getRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 4096,
        "end": 4123,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4102,
            "end": 4121,
            "expression": {
              "type": "CallExpression",
              "start": 4102,
              "end": 4120,
              "callee": {
                "type": "MemberExpression",
                "start": 4102,
                "end": 4113,
                "object": {
                  "type": "Identifier",
                  "start": 4102,
                  "end": 4109,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 4110,
                  "end": 4113,
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
                  "start": 4114,
                  "end": 4119,
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
      "type": "ForOfStatement",
      "start": 4124,
      "end": 4277,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 4129,
        "end": 4168,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 4131,
            "end": 4146,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 4131,
              "end": 4135,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 4131,
              "end": 4146,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 4131,
                "end": 4135,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 4138,
                "end": 4146,
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
            "start": 4148,
            "end": 4166,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 4148,
              "end": 4153,
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 4148,
              "end": 4166,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 4148,
                "end": 4153,
                "decorators": [],
                "name": "skill",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 4157,
                "end": 4166,
                "value": "noSkill",
                "raw": "\"noSkill\""
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
        "type": "ArrayExpression",
        "start": 4172,
        "end": 4248,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 4173,
            "end": 4207,
            "properties": [
              {
                "type": "Property",
                "start": 4175,
                "end": 4188,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 4175,
                  "end": 4179,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 4181,
                  "end": 4188,
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
                "start": 4190,
                "end": 4205,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 4190,
                  "end": 4195,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 4197,
                  "end": 4205,
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
          {
            "type": "ObjectExpression",
            "start": 4209,
            "end": 4247,
            "properties": [
              {
                "type": "Property",
                "start": 4211,
                "end": 4226,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 4211,
                  "end": 4215,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 4217,
                  "end": 4226,
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
                "start": 4228,
                "end": 4245,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 4228,
                  "end": 4233,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 4235,
                  "end": 4245,
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
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 4250,
        "end": 4277,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4256,
            "end": 4275,
            "expression": {
              "type": "CallExpression",
              "start": 4256,
              "end": 4274,
              "callee": {
                "type": "MemberExpression",
                "start": 4256,
                "end": 4267,
                "object": {
                  "type": "Identifier",
                  "start": 4256,
                  "end": 4263,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 4264,
                  "end": 4267,
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
                  "start": 4268,
                  "end": 4273,
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
      "type": "ForOfStatement",
      "start": 4278,
      "end": 4479,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 4283,
        "end": 4435,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 4289,
            "end": 4304,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 4289,
              "end": 4293,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 4289,
              "end": 4304,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 4289,
                "end": 4293,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 4296,
                "end": 4304,
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
            "start": 4310,
            "end": 4433,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 4310,
              "end": 4316,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 4318,
              "end": 4433,
              "decorators": [],
              "left": {
                "type": "ObjectPattern",
                "start": 4318,
                "end": 4386,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 4328,
                    "end": 4347,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4328,
                      "end": 4335,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 4328,
                      "end": 4347,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 4328,
                        "end": 4335,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4338,
                        "end": 4347,
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
                    "start": 4357,
                    "end": 4380,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4357,
                      "end": 4366,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 4357,
                      "end": 4380,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 4357,
                        "end": 4366,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4369,
                        "end": 4380,
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
                "start": 4389,
                "end": 4433,
                "properties": [
                  {
                    "type": "Property",
                    "start": 4391,
                    "end": 4409,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4391,
                      "end": 4398,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 4400,
                      "end": 4409,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4411,
                    "end": 4431,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4411,
                      "end": 4420,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 4422,
                      "end": 4431,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
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
        "start": 4439,
        "end": 4450,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 4452,
        "end": 4479,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4458,
            "end": 4477,
            "expression": {
              "type": "CallExpression",
              "start": 4458,
              "end": 4476,
              "callee": {
                "type": "MemberExpression",
                "start": 4458,
                "end": 4469,
                "object": {
                  "type": "Identifier",
                  "start": 4458,
                  "end": 4465,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 4466,
                  "end": 4469,
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
                  "start": 4470,
                  "end": 4475,
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
      "type": "ForOfStatement",
      "start": 4480,
      "end": 4686,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 4485,
        "end": 4637,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 4491,
            "end": 4506,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 4491,
              "end": 4495,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 4491,
              "end": 4506,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 4491,
                "end": 4495,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 4498,
                "end": 4506,
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
            "start": 4512,
            "end": 4635,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 4512,
              "end": 4518,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 4520,
              "end": 4635,
              "decorators": [],
              "left": {
                "type": "ObjectPattern",
                "start": 4520,
                "end": 4588,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 4530,
                    "end": 4549,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4530,
                      "end": 4537,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 4530,
                      "end": 4549,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 4530,
                        "end": 4537,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4540,
                        "end": 4549,
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
                    "start": 4559,
                    "end": 4582,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4559,
                      "end": 4568,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 4559,
                      "end": 4582,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 4559,
                        "end": 4568,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4571,
                        "end": 4582,
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
                "start": 4591,
                "end": 4635,
                "properties": [
                  {
                    "type": "Property",
                    "start": 4593,
                    "end": 4611,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4593,
                      "end": 4600,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 4602,
                      "end": 4611,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4613,
                    "end": 4633,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4613,
                      "end": 4622,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 4624,
                      "end": 4633,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
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
        "start": 4641,
        "end": 4657,
        "callee": {
          "type": "Identifier",
          "start": 4641,
          "end": 4655,
          "decorators": [],
          "name": "getMultiRobots",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 4659,
        "end": 4686,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4665,
            "end": 4684,
            "expression": {
              "type": "CallExpression",
              "start": 4665,
              "end": 4683,
              "callee": {
                "type": "MemberExpression",
                "start": 4665,
                "end": 4676,
                "object": {
                  "type": "Identifier",
                  "start": 4665,
                  "end": 4672,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 4673,
                  "end": 4676,
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
                  "start": 4677,
                  "end": 4682,
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
      "type": "ForOfStatement",
      "start": 4687,
      "end": 5025,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 4692,
        "end": 4844,
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 4698,
            "end": 4713,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 4698,
              "end": 4702,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 4698,
              "end": 4713,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 4698,
                "end": 4702,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 4705,
                "end": 4713,
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
            "start": 4719,
            "end": 4842,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 4719,
              "end": 4725,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 4727,
              "end": 4842,
              "decorators": [],
              "left": {
                "type": "ObjectPattern",
                "start": 4727,
                "end": 4795,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 4737,
                    "end": 4756,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4737,
                      "end": 4744,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 4737,
                      "end": 4756,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 4737,
                        "end": 4744,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4747,
                        "end": 4756,
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
                    "start": 4766,
                    "end": 4789,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4766,
                      "end": 4775,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 4766,
                      "end": 4789,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 4766,
                        "end": 4775,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 4778,
                        "end": 4789,
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
                "start": 4798,
                "end": 4842,
                "properties": [
                  {
                    "type": "Property",
                    "start": 4800,
                    "end": 4818,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4800,
                      "end": 4807,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 4809,
                      "end": 4818,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4820,
                    "end": 4840,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 4820,
                      "end": 4829,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 4831,
                      "end": 4840,
                      "value": "noSkill",
                      "raw": "\"noSkill\""
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
        "type": "ArrayExpression",
        "start": 4848,
        "end": 4996,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 4849,
            "end": 4916,
            "properties": [
              {
                "type": "Property",
                "start": 4851,
                "end": 4864,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 4851,
                  "end": 4855,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 4857,
                  "end": 4864,
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
                "start": 4866,
                "end": 4914,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 4866,
                  "end": 4872,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 4874,
                  "end": 4914,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4876,
                      "end": 4893,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 4876,
                        "end": 4883,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4885,
                        "end": 4893,
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
                      "start": 4895,
                      "end": 4912,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 4895,
                        "end": 4904,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4906,
                        "end": 4912,
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
          {
            "type": "ObjectExpression",
            "start": 4922,
            "end": 4995,
            "properties": [
              {
                "type": "Property",
                "start": 4924,
                "end": 4939,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 4924,
                  "end": 4928,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 4930,
                  "end": 4939,
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
                "start": 4941,
                "end": 4993,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 4941,
                  "end": 4947,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 4949,
                  "end": 4993,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4951,
                      "end": 4970,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 4951,
                        "end": 4958,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4960,
                        "end": 4970,
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
                      "start": 4972,
                      "end": 4991,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 4972,
                        "end": 4981,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 4983,
                        "end": 4991,
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
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 4998,
        "end": 5025,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 5004,
            "end": 5023,
            "expression": {
              "type": "CallExpression",
              "start": 5004,
              "end": 5022,
              "callee": {
                "type": "MemberExpression",
                "start": 5004,
                "end": 5015,
                "object": {
                  "type": "Identifier",
                  "start": 5004,
                  "end": 5011,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 5012,
                  "end": 5015,
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
                  "start": 5016,
                  "end": 5021,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
