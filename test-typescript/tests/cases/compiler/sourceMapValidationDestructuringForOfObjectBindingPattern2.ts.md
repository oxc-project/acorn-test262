__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3572,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 49,
            "name": "console",
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
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                        "name": "msg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 39,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 36,
                            "end": 39
                          }
                        },
                        "decorators": [],
                        "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "Robot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "skill",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "MultiRobot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "primary",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "secondary",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 323,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 244,
            "name": "robots",
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
                    "name": "Robot",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 254,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 256,
                      "end": 263,
                      "value": "mower",
                      "raw": "\"mower\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 265,
                    "end": 280,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 270,
                      "name": "skill",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 272,
                      "end": 280,
                      "value": "mowing",
                      "raw": "\"mowing\""
                    },
                    "kind": "init",
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 286,
                      "end": 290,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 292,
                      "end": 301,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 303,
                    "end": 320,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 308,
                      "name": "skill",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 310,
                      "end": 320,
                      "value": "trimming",
                      "raw": "\"trimming\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 325,
      "end": 506,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 329,
          "end": 505,
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 354,
            "name": "multiRobots",
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
                    "name": "MultiRobot",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 360,
                      "end": 364,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 366,
                      "end": 373,
                      "value": "mower",
                      "raw": "\"mower\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 375,
                    "end": 423,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 381,
                      "name": "skills",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 385,
                            "end": 392,
                            "name": "primary",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 394,
                            "end": 402,
                            "value": "mowing",
                            "raw": "\"mowing\""
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 404,
                          "end": 421,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 404,
                            "end": 413,
                            "name": "secondary",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 415,
                            "end": 421,
                            "value": "none",
                            "raw": "\"none\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 437,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 439,
                      "end": 448,
                      "value": "trimmer",
                      "raw": "\"trimmer\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 450,
                    "end": 502,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 450,
                      "end": 456,
                      "name": "skills",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 460,
                            "end": 467,
                            "name": "primary",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 469,
                            "end": 479,
                            "value": "trimming",
                            "raw": "\"trimming\""
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 481,
                          "end": 500,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 481,
                            "end": 490,
                            "name": "secondary",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 492,
                            "end": 500,
                            "value": "edging",
                            "raw": "\"edging\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
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
        "name": "getRobots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "name": "robots",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 553,
      "end": 606,
      "id": {
        "type": "Identifier",
        "start": 562,
        "end": 576,
        "name": "getMultiRobots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "name": "multiRobots",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 608,
      "end": 691,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 612,
          "end": 625,
          "id": {
            "type": "Identifier",
            "start": 612,
            "end": 625,
            "name": "nameA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 617,
              "end": 625,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 619,
                "end": 625
              }
            },
            "decorators": [],
            "optional": false
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
            "name": "primaryA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 635,
              "end": 643,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 637,
                "end": 643
              }
            },
            "decorators": [],
            "optional": false
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
            "name": "secondaryA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 655,
              "end": 663,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 657,
                "end": 663
              }
            },
            "decorators": [],
            "optional": false
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
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 666,
              "end": 674,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 668,
                "end": 674
              }
            },
            "decorators": [],
            "optional": false
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
            "name": "skillA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 682,
              "end": 690,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 684,
                "end": 690
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 692,
      "end": 760,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 696,
          "end": 708,
          "id": {
            "type": "Identifier",
            "start": 696,
            "end": 708,
            "name": "name",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 700,
              "end": 708,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 702,
                "end": 708
              }
            },
            "decorators": [],
            "optional": false
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
            "name": "primary",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 717,
              "end": 725,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 719,
                "end": 725
              }
            },
            "decorators": [],
            "optional": false
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
            "name": "secondary",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 736,
              "end": 744,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 738,
                "end": 744
              }
            },
            "decorators": [],
            "optional": false
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
            "name": "skill",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 751,
              "end": 759,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 753,
                "end": 759
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 762,
      "end": 820,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 767,
        "end": 781,
        "properties": [
          {
            "type": "Property",
            "start": 768,
            "end": 779,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 768,
              "end": 772,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 774,
              "end": 779,
              "name": "nameA",
              "typeAnnotation": null,
              "decorators": [],
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
        "start": 785,
        "end": 791,
        "name": "robots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 793,
        "end": 820,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 799,
            "end": 818,
            "expression": {
              "type": "CallExpression",
              "start": 799,
              "end": 817,
              "callee": {
                "type": "MemberExpression",
                "start": 799,
                "end": 810,
                "object": {
                  "type": "Identifier",
                  "start": 799,
                  "end": 806,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 807,
                  "end": 810,
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
                  "type": "Identifier",
                  "start": 811,
                  "end": 816,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 821,
      "end": 884,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 826,
        "end": 840,
        "properties": [
          {
            "type": "Property",
            "start": 827,
            "end": 838,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 827,
              "end": 831,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 833,
              "end": 838,
              "name": "nameA",
              "typeAnnotation": null,
              "decorators": [],
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
        "type": "CallExpression",
        "start": 844,
        "end": 855,
        "callee": {
          "type": "Identifier",
          "start": 844,
          "end": 853,
          "name": "getRobots",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 857,
        "end": 884,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 863,
            "end": 882,
            "expression": {
              "type": "CallExpression",
              "start": 863,
              "end": 881,
              "callee": {
                "type": "MemberExpression",
                "start": 863,
                "end": 874,
                "object": {
                  "type": "Identifier",
                  "start": 863,
                  "end": 870,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 871,
                  "end": 874,
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
                  "type": "Identifier",
                  "start": 875,
                  "end": 880,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 885,
      "end": 1013,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 890,
        "end": 904,
        "properties": [
          {
            "type": "Property",
            "start": 891,
            "end": 902,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 891,
              "end": 895,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 897,
              "end": 902,
              "name": "nameA",
              "typeAnnotation": null,
              "decorators": [],
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
        "type": "ArrayExpression",
        "start": 908,
        "end": 984,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 909,
            "end": 943,
            "properties": [
              {
                "type": "Property",
                "start": 911,
                "end": 924,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 911,
                  "end": 915,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 917,
                  "end": 924,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 926,
                "end": 941,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 926,
                  "end": 931,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 933,
                  "end": 941,
                  "value": "mowing",
                  "raw": "\"mowing\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 945,
            "end": 983,
            "properties": [
              {
                "type": "Property",
                "start": 947,
                "end": 962,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 947,
                  "end": 951,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 953,
                  "end": 962,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 964,
                "end": 981,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 964,
                  "end": 969,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 971,
                  "end": 981,
                  "value": "trimming",
                  "raw": "\"trimming\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 986,
        "end": 1013,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 992,
            "end": 1011,
            "expression": {
              "type": "CallExpression",
              "start": 992,
              "end": 1010,
              "callee": {
                "type": "MemberExpression",
                "start": 992,
                "end": 1003,
                "object": {
                  "type": "Identifier",
                  "start": 992,
                  "end": 999,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1000,
                  "end": 1003,
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
                  "type": "Identifier",
                  "start": 1004,
                  "end": 1009,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1014,
      "end": 1122,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 1019,
        "end": 1075,
        "properties": [
          {
            "type": "Property",
            "start": 1021,
            "end": 1073,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1021,
              "end": 1027,
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectPattern",
              "start": 1029,
              "end": 1073,
              "properties": [
                {
                  "type": "Property",
                  "start": 1031,
                  "end": 1048,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1031,
                    "end": 1038,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1040,
                    "end": 1048,
                    "name": "primaryA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1050,
                  "end": 1071,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1050,
                    "end": 1059,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1061,
                    "end": 1071,
                    "name": "secondaryA",
                    "typeAnnotation": null,
                    "decorators": [],
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
        "start": 1079,
        "end": 1090,
        "name": "multiRobots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1092,
        "end": 1122,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1098,
            "end": 1120,
            "expression": {
              "type": "CallExpression",
              "start": 1098,
              "end": 1119,
              "callee": {
                "type": "MemberExpression",
                "start": 1098,
                "end": 1109,
                "object": {
                  "type": "Identifier",
                  "start": 1098,
                  "end": 1105,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1106,
                  "end": 1109,
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
                  "type": "Identifier",
                  "start": 1110,
                  "end": 1118,
                  "name": "primaryA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1123,
      "end": 1236,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 1128,
        "end": 1184,
        "properties": [
          {
            "type": "Property",
            "start": 1130,
            "end": 1182,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1130,
              "end": 1136,
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectPattern",
              "start": 1138,
              "end": 1182,
              "properties": [
                {
                  "type": "Property",
                  "start": 1140,
                  "end": 1157,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1140,
                    "end": 1147,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1149,
                    "end": 1157,
                    "name": "primaryA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1159,
                  "end": 1180,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1159,
                    "end": 1168,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1170,
                    "end": 1180,
                    "name": "secondaryA",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "kind": "init",
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 1188,
        "end": 1204,
        "callee": {
          "type": "Identifier",
          "start": 1188,
          "end": 1202,
          "name": "getMultiRobots",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 1206,
        "end": 1236,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1212,
            "end": 1234,
            "expression": {
              "type": "CallExpression",
              "start": 1212,
              "end": 1233,
              "callee": {
                "type": "MemberExpression",
                "start": 1212,
                "end": 1223,
                "object": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1219,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1220,
                  "end": 1223,
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
                  "type": "Identifier",
                  "start": 1224,
                  "end": 1232,
                  "name": "primaryA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1237,
      "end": 1482,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 1242,
        "end": 1298,
        "properties": [
          {
            "type": "Property",
            "start": 1244,
            "end": 1296,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1244,
              "end": 1250,
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectPattern",
              "start": 1252,
              "end": 1296,
              "properties": [
                {
                  "type": "Property",
                  "start": 1254,
                  "end": 1271,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1254,
                    "end": 1261,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1263,
                    "end": 1271,
                    "name": "primaryA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1273,
                  "end": 1294,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1273,
                    "end": 1282,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1284,
                    "end": 1294,
                    "name": "secondaryA",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "kind": "init",
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1302,
        "end": 1450,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 1303,
            "end": 1370,
            "properties": [
              {
                "type": "Property",
                "start": 1305,
                "end": 1318,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1305,
                  "end": 1309,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1311,
                  "end": 1318,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1320,
                "end": 1368,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1320,
                  "end": 1326,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1328,
                  "end": 1368,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1330,
                      "end": 1347,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1330,
                        "end": 1337,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1339,
                        "end": 1347,
                        "value": "mowing",
                        "raw": "\"mowing\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1349,
                      "end": 1366,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1349,
                        "end": 1358,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1360,
                        "end": 1366,
                        "value": "none",
                        "raw": "\"none\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 1376,
            "end": 1449,
            "properties": [
              {
                "type": "Property",
                "start": 1378,
                "end": 1393,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1378,
                  "end": 1382,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1384,
                  "end": 1393,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1395,
                "end": 1447,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1395,
                  "end": 1401,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1403,
                  "end": 1447,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1405,
                      "end": 1424,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1405,
                        "end": 1412,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1414,
                        "end": 1424,
                        "value": "trimming",
                        "raw": "\"trimming\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1426,
                      "end": 1445,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1426,
                        "end": 1435,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1437,
                        "end": 1445,
                        "value": "edging",
                        "raw": "\"edging\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1452,
        "end": 1482,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1458,
            "end": 1480,
            "expression": {
              "type": "CallExpression",
              "start": 1458,
              "end": 1479,
              "callee": {
                "type": "MemberExpression",
                "start": 1458,
                "end": 1469,
                "object": {
                  "type": "Identifier",
                  "start": 1458,
                  "end": 1465,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1466,
                  "end": 1469,
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
                  "type": "Identifier",
                  "start": 1470,
                  "end": 1478,
                  "name": "primaryA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1483,
      "end": 1534,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 1488,
        "end": 1495,
        "properties": [
          {
            "type": "Property",
            "start": 1489,
            "end": 1493,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1489,
              "end": 1493,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 1489,
              "end": 1493,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
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
        "start": 1499,
        "end": 1505,
        "name": "robots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1507,
        "end": 1534,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1513,
            "end": 1532,
            "expression": {
              "type": "CallExpression",
              "start": 1513,
              "end": 1531,
              "callee": {
                "type": "MemberExpression",
                "start": 1513,
                "end": 1524,
                "object": {
                  "type": "Identifier",
                  "start": 1513,
                  "end": 1520,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1521,
                  "end": 1524,
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
                  "type": "Identifier",
                  "start": 1525,
                  "end": 1530,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1535,
      "end": 1591,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 1540,
        "end": 1547,
        "properties": [
          {
            "type": "Property",
            "start": 1541,
            "end": 1545,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1541,
              "end": 1545,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 1541,
              "end": 1545,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
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
        "type": "CallExpression",
        "start": 1551,
        "end": 1562,
        "callee": {
          "type": "Identifier",
          "start": 1551,
          "end": 1560,
          "name": "getRobots",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 1564,
        "end": 1591,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1570,
            "end": 1589,
            "expression": {
              "type": "CallExpression",
              "start": 1570,
              "end": 1588,
              "callee": {
                "type": "MemberExpression",
                "start": 1570,
                "end": 1581,
                "object": {
                  "type": "Identifier",
                  "start": 1570,
                  "end": 1577,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1578,
                  "end": 1581,
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
                  "type": "Identifier",
                  "start": 1582,
                  "end": 1587,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1592,
      "end": 1713,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 1597,
        "end": 1604,
        "properties": [
          {
            "type": "Property",
            "start": 1598,
            "end": 1602,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1598,
              "end": 1602,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 1598,
              "end": 1602,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
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
        "type": "ArrayExpression",
        "start": 1608,
        "end": 1684,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 1609,
            "end": 1643,
            "properties": [
              {
                "type": "Property",
                "start": 1611,
                "end": 1624,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1611,
                  "end": 1615,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1617,
                  "end": 1624,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1626,
                "end": 1641,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1626,
                  "end": 1631,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1633,
                  "end": 1641,
                  "value": "mowing",
                  "raw": "\"mowing\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 1645,
            "end": 1683,
            "properties": [
              {
                "type": "Property",
                "start": 1647,
                "end": 1662,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1647,
                  "end": 1651,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1653,
                  "end": 1662,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1664,
                "end": 1681,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1664,
                  "end": 1669,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1671,
                  "end": 1681,
                  "value": "trimming",
                  "raw": "\"trimming\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1686,
        "end": 1713,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1692,
            "end": 1711,
            "expression": {
              "type": "CallExpression",
              "start": 1692,
              "end": 1710,
              "callee": {
                "type": "MemberExpression",
                "start": 1692,
                "end": 1703,
                "object": {
                  "type": "Identifier",
                  "start": 1692,
                  "end": 1699,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1700,
                  "end": 1703,
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
                  "type": "Identifier",
                  "start": 1704,
                  "end": 1709,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1714,
      "end": 1800,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 1719,
        "end": 1753,
        "properties": [
          {
            "type": "Property",
            "start": 1721,
            "end": 1751,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1721,
              "end": 1727,
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectPattern",
              "start": 1729,
              "end": 1751,
              "properties": [
                {
                  "type": "Property",
                  "start": 1731,
                  "end": 1738,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1731,
                    "end": 1738,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1731,
                    "end": 1738,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1740,
                  "end": 1749,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1740,
                    "end": 1749,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1740,
                    "end": 1749,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
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
        "start": 1757,
        "end": 1768,
        "name": "multiRobots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1770,
        "end": 1800,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1776,
            "end": 1798,
            "expression": {
              "type": "CallExpression",
              "start": 1776,
              "end": 1797,
              "callee": {
                "type": "MemberExpression",
                "start": 1776,
                "end": 1787,
                "object": {
                  "type": "Identifier",
                  "start": 1776,
                  "end": 1783,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1784,
                  "end": 1787,
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
                  "type": "Identifier",
                  "start": 1788,
                  "end": 1796,
                  "name": "primaryA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1801,
      "end": 1892,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 1806,
        "end": 1840,
        "properties": [
          {
            "type": "Property",
            "start": 1808,
            "end": 1838,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1808,
              "end": 1814,
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectPattern",
              "start": 1816,
              "end": 1838,
              "properties": [
                {
                  "type": "Property",
                  "start": 1818,
                  "end": 1825,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1818,
                    "end": 1825,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1818,
                    "end": 1825,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1827,
                  "end": 1836,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1827,
                    "end": 1836,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1827,
                    "end": 1836,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "kind": "init",
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 1844,
        "end": 1860,
        "callee": {
          "type": "Identifier",
          "start": 1844,
          "end": 1858,
          "name": "getMultiRobots",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 1862,
        "end": 1892,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1868,
            "end": 1890,
            "expression": {
              "type": "CallExpression",
              "start": 1868,
              "end": 1889,
              "callee": {
                "type": "MemberExpression",
                "start": 1868,
                "end": 1879,
                "object": {
                  "type": "Identifier",
                  "start": 1868,
                  "end": 1875,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1876,
                  "end": 1879,
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
                  "type": "Identifier",
                  "start": 1880,
                  "end": 1888,
                  "name": "primaryA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1893,
      "end": 2116,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 1898,
        "end": 1932,
        "properties": [
          {
            "type": "Property",
            "start": 1900,
            "end": 1930,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1900,
              "end": 1906,
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectPattern",
              "start": 1908,
              "end": 1930,
              "properties": [
                {
                  "type": "Property",
                  "start": 1910,
                  "end": 1917,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1910,
                    "end": 1917,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1910,
                    "end": 1917,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 1919,
                  "end": 1928,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1919,
                    "end": 1928,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1919,
                    "end": 1928,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "kind": "init",
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1936,
        "end": 2084,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 1937,
            "end": 2004,
            "properties": [
              {
                "type": "Property",
                "start": 1939,
                "end": 1952,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1939,
                  "end": 1943,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1945,
                  "end": 1952,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1954,
                "end": 2002,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1954,
                  "end": 1960,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1962,
                  "end": 2002,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1964,
                      "end": 1981,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1964,
                        "end": 1971,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1973,
                        "end": 1981,
                        "value": "mowing",
                        "raw": "\"mowing\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1983,
                      "end": 2000,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1983,
                        "end": 1992,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1994,
                        "end": 2000,
                        "value": "none",
                        "raw": "\"none\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 2010,
            "end": 2083,
            "properties": [
              {
                "type": "Property",
                "start": 2012,
                "end": 2027,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2012,
                  "end": 2016,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2018,
                  "end": 2027,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2029,
                "end": 2081,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2029,
                  "end": 2035,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2037,
                  "end": 2081,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2039,
                      "end": 2058,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2039,
                        "end": 2046,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2048,
                        "end": 2058,
                        "value": "trimming",
                        "raw": "\"trimming\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2060,
                      "end": 2079,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2060,
                        "end": 2069,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2071,
                        "end": 2079,
                        "value": "edging",
                        "raw": "\"edging\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 2086,
        "end": 2116,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2092,
            "end": 2114,
            "expression": {
              "type": "CallExpression",
              "start": 2092,
              "end": 2113,
              "callee": {
                "type": "MemberExpression",
                "start": 2092,
                "end": 2103,
                "object": {
                  "type": "Identifier",
                  "start": 2092,
                  "end": 2099,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2100,
                  "end": 2103,
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
                  "type": "Identifier",
                  "start": 2104,
                  "end": 2112,
                  "name": "primaryA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2119,
      "end": 2192,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 2124,
        "end": 2153,
        "properties": [
          {
            "type": "Property",
            "start": 2125,
            "end": 2136,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2125,
              "end": 2129,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 2131,
              "end": 2136,
              "name": "nameA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 2138,
            "end": 2151,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2138,
              "end": 2143,
              "name": "skill",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 2145,
              "end": 2151,
              "name": "skillA",
              "typeAnnotation": null,
              "decorators": [],
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
        "start": 2157,
        "end": 2163,
        "name": "robots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 2165,
        "end": 2192,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2171,
            "end": 2190,
            "expression": {
              "type": "CallExpression",
              "start": 2171,
              "end": 2189,
              "callee": {
                "type": "MemberExpression",
                "start": 2171,
                "end": 2182,
                "object": {
                  "type": "Identifier",
                  "start": 2171,
                  "end": 2178,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2179,
                  "end": 2182,
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
                  "type": "Identifier",
                  "start": 2183,
                  "end": 2188,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2193,
      "end": 2271,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 2198,
        "end": 2227,
        "properties": [
          {
            "type": "Property",
            "start": 2199,
            "end": 2210,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2199,
              "end": 2203,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 2205,
              "end": 2210,
              "name": "nameA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 2212,
            "end": 2225,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2212,
              "end": 2217,
              "name": "skill",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 2219,
              "end": 2225,
              "name": "skillA",
              "typeAnnotation": null,
              "decorators": [],
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
        "type": "CallExpression",
        "start": 2231,
        "end": 2242,
        "callee": {
          "type": "Identifier",
          "start": 2231,
          "end": 2240,
          "name": "getRobots",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 2244,
        "end": 2271,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2250,
            "end": 2269,
            "expression": {
              "type": "CallExpression",
              "start": 2250,
              "end": 2268,
              "callee": {
                "type": "MemberExpression",
                "start": 2250,
                "end": 2261,
                "object": {
                  "type": "Identifier",
                  "start": 2250,
                  "end": 2257,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2258,
                  "end": 2261,
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
                  "type": "Identifier",
                  "start": 2262,
                  "end": 2267,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2272,
      "end": 2415,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 2277,
        "end": 2306,
        "properties": [
          {
            "type": "Property",
            "start": 2278,
            "end": 2289,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2278,
              "end": 2282,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 2284,
              "end": 2289,
              "name": "nameA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 2291,
            "end": 2304,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2291,
              "end": 2296,
              "name": "skill",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 2298,
              "end": 2304,
              "name": "skillA",
              "typeAnnotation": null,
              "decorators": [],
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
        "type": "ArrayExpression",
        "start": 2310,
        "end": 2386,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 2311,
            "end": 2345,
            "properties": [
              {
                "type": "Property",
                "start": 2313,
                "end": 2326,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2313,
                  "end": 2317,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2319,
                  "end": 2326,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2328,
                "end": 2343,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2328,
                  "end": 2333,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2335,
                  "end": 2343,
                  "value": "mowing",
                  "raw": "\"mowing\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 2347,
            "end": 2385,
            "properties": [
              {
                "type": "Property",
                "start": 2349,
                "end": 2364,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2349,
                  "end": 2353,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2355,
                  "end": 2364,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2366,
                "end": 2383,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2366,
                  "end": 2371,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2373,
                  "end": 2383,
                  "value": "trimming",
                  "raw": "\"trimming\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 2388,
        "end": 2415,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2394,
            "end": 2413,
            "expression": {
              "type": "CallExpression",
              "start": 2394,
              "end": 2412,
              "callee": {
                "type": "MemberExpression",
                "start": 2394,
                "end": 2405,
                "object": {
                  "type": "Identifier",
                  "start": 2394,
                  "end": 2401,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2402,
                  "end": 2405,
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
                  "type": "Identifier",
                  "start": 2406,
                  "end": 2411,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2416,
      "end": 2533,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 2421,
        "end": 2489,
        "properties": [
          {
            "type": "Property",
            "start": 2422,
            "end": 2433,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2422,
              "end": 2426,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 2428,
              "end": 2433,
              "name": "nameA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 2435,
            "end": 2487,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2435,
              "end": 2441,
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectPattern",
              "start": 2443,
              "end": 2487,
              "properties": [
                {
                  "type": "Property",
                  "start": 2445,
                  "end": 2462,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2445,
                    "end": 2452,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2454,
                    "end": 2462,
                    "name": "primaryA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2464,
                  "end": 2485,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2464,
                    "end": 2473,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2475,
                    "end": 2485,
                    "name": "secondaryA",
                    "typeAnnotation": null,
                    "decorators": [],
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
        "start": 2493,
        "end": 2504,
        "name": "multiRobots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 2506,
        "end": 2533,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2512,
            "end": 2531,
            "expression": {
              "type": "CallExpression",
              "start": 2512,
              "end": 2530,
              "callee": {
                "type": "MemberExpression",
                "start": 2512,
                "end": 2523,
                "object": {
                  "type": "Identifier",
                  "start": 2512,
                  "end": 2519,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2520,
                  "end": 2523,
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
                  "type": "Identifier",
                  "start": 2524,
                  "end": 2529,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2534,
      "end": 2656,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 2539,
        "end": 2607,
        "properties": [
          {
            "type": "Property",
            "start": 2540,
            "end": 2551,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2540,
              "end": 2544,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 2546,
              "end": 2551,
              "name": "nameA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 2553,
            "end": 2605,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2553,
              "end": 2559,
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectPattern",
              "start": 2561,
              "end": 2605,
              "properties": [
                {
                  "type": "Property",
                  "start": 2563,
                  "end": 2580,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2563,
                    "end": 2570,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2572,
                    "end": 2580,
                    "name": "primaryA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2582,
                  "end": 2603,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2582,
                    "end": 2591,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2593,
                    "end": 2603,
                    "name": "secondaryA",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "kind": "init",
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 2611,
        "end": 2627,
        "callee": {
          "type": "Identifier",
          "start": 2611,
          "end": 2625,
          "name": "getMultiRobots",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 2629,
        "end": 2656,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2635,
            "end": 2654,
            "expression": {
              "type": "CallExpression",
              "start": 2635,
              "end": 2653,
              "callee": {
                "type": "MemberExpression",
                "start": 2635,
                "end": 2646,
                "object": {
                  "type": "Identifier",
                  "start": 2635,
                  "end": 2642,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2643,
                  "end": 2646,
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
                  "type": "Identifier",
                  "start": 2647,
                  "end": 2652,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2657,
      "end": 2911,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 2662,
        "end": 2730,
        "properties": [
          {
            "type": "Property",
            "start": 2663,
            "end": 2674,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2663,
              "end": 2667,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 2669,
              "end": 2674,
              "name": "nameA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 2676,
            "end": 2728,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2676,
              "end": 2682,
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectPattern",
              "start": 2684,
              "end": 2728,
              "properties": [
                {
                  "type": "Property",
                  "start": 2686,
                  "end": 2703,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2686,
                    "end": 2693,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2695,
                    "end": 2703,
                    "name": "primaryA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 2705,
                  "end": 2726,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2705,
                    "end": 2714,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 2716,
                    "end": 2726,
                    "name": "secondaryA",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "kind": "init",
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 2734,
        "end": 2882,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 2735,
            "end": 2802,
            "properties": [
              {
                "type": "Property",
                "start": 2737,
                "end": 2750,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2737,
                  "end": 2741,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2743,
                  "end": 2750,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2752,
                "end": 2800,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2752,
                  "end": 2758,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2760,
                  "end": 2800,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2762,
                      "end": 2779,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2762,
                        "end": 2769,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2771,
                        "end": 2779,
                        "value": "mowing",
                        "raw": "\"mowing\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2781,
                      "end": 2798,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2781,
                        "end": 2790,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2792,
                        "end": 2798,
                        "value": "none",
                        "raw": "\"none\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 2808,
            "end": 2881,
            "properties": [
              {
                "type": "Property",
                "start": 2810,
                "end": 2825,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2810,
                  "end": 2814,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2816,
                  "end": 2825,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2827,
                "end": 2879,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2827,
                  "end": 2833,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2835,
                  "end": 2879,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2837,
                      "end": 2856,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2837,
                        "end": 2844,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2846,
                        "end": 2856,
                        "value": "trimming",
                        "raw": "\"trimming\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2858,
                      "end": 2877,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2858,
                        "end": 2867,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2869,
                        "end": 2877,
                        "value": "edging",
                        "raw": "\"edging\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 2884,
        "end": 2911,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2890,
            "end": 2909,
            "expression": {
              "type": "CallExpression",
              "start": 2890,
              "end": 2908,
              "callee": {
                "type": "MemberExpression",
                "start": 2890,
                "end": 2901,
                "object": {
                  "type": "Identifier",
                  "start": 2890,
                  "end": 2897,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2898,
                  "end": 2901,
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
                  "type": "Identifier",
                  "start": 2902,
                  "end": 2907,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2912,
      "end": 2970,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 2917,
        "end": 2931,
        "properties": [
          {
            "type": "Property",
            "start": 2918,
            "end": 2922,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2918,
              "end": 2922,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 2918,
              "end": 2922,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 2924,
            "end": 2929,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2924,
              "end": 2929,
              "name": "skill",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 2924,
              "end": 2929,
              "name": "skill",
              "typeAnnotation": null,
              "decorators": [],
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
        "start": 2935,
        "end": 2941,
        "name": "robots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 2943,
        "end": 2970,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2949,
            "end": 2968,
            "expression": {
              "type": "CallExpression",
              "start": 2949,
              "end": 2967,
              "callee": {
                "type": "MemberExpression",
                "start": 2949,
                "end": 2960,
                "object": {
                  "type": "Identifier",
                  "start": 2949,
                  "end": 2956,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2957,
                  "end": 2960,
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
                  "type": "Identifier",
                  "start": 2961,
                  "end": 2966,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 2971,
      "end": 3034,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 2976,
        "end": 2990,
        "properties": [
          {
            "type": "Property",
            "start": 2977,
            "end": 2981,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2977,
              "end": 2981,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 2977,
              "end": 2981,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 2983,
            "end": 2988,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2983,
              "end": 2988,
              "name": "skill",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 2983,
              "end": 2988,
              "name": "skill",
              "typeAnnotation": null,
              "decorators": [],
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
        "type": "CallExpression",
        "start": 2994,
        "end": 3005,
        "callee": {
          "type": "Identifier",
          "start": 2994,
          "end": 3003,
          "name": "getRobots",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 3007,
        "end": 3034,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3013,
            "end": 3032,
            "expression": {
              "type": "CallExpression",
              "start": 3013,
              "end": 3031,
              "callee": {
                "type": "MemberExpression",
                "start": 3013,
                "end": 3024,
                "object": {
                  "type": "Identifier",
                  "start": 3013,
                  "end": 3020,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3021,
                  "end": 3024,
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
                  "type": "Identifier",
                  "start": 3025,
                  "end": 3030,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 3035,
      "end": 3163,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 3040,
        "end": 3054,
        "properties": [
          {
            "type": "Property",
            "start": 3041,
            "end": 3045,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3041,
              "end": 3045,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 3041,
              "end": 3045,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 3047,
            "end": 3052,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3047,
              "end": 3052,
              "name": "skill",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 3047,
              "end": 3052,
              "name": "skill",
              "typeAnnotation": null,
              "decorators": [],
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
        "type": "ArrayExpression",
        "start": 3058,
        "end": 3134,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 3059,
            "end": 3093,
            "properties": [
              {
                "type": "Property",
                "start": 3061,
                "end": 3074,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3061,
                  "end": 3065,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3067,
                  "end": 3074,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 3076,
                "end": 3091,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3076,
                  "end": 3081,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3083,
                  "end": 3091,
                  "value": "mowing",
                  "raw": "\"mowing\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 3095,
            "end": 3133,
            "properties": [
              {
                "type": "Property",
                "start": 3097,
                "end": 3112,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3097,
                  "end": 3101,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3103,
                  "end": 3112,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 3114,
                "end": 3131,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3114,
                  "end": 3119,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3121,
                  "end": 3131,
                  "value": "trimming",
                  "raw": "\"trimming\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 3136,
        "end": 3163,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3142,
            "end": 3161,
            "expression": {
              "type": "CallExpression",
              "start": 3142,
              "end": 3160,
              "callee": {
                "type": "MemberExpression",
                "start": 3142,
                "end": 3153,
                "object": {
                  "type": "Identifier",
                  "start": 3142,
                  "end": 3149,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3150,
                  "end": 3153,
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
                  "type": "Identifier",
                  "start": 3154,
                  "end": 3159,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 3164,
      "end": 3252,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 3169,
        "end": 3208,
        "properties": [
          {
            "type": "Property",
            "start": 3170,
            "end": 3174,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3170,
              "end": 3174,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 3170,
              "end": 3174,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 3176,
            "end": 3206,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3176,
              "end": 3182,
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectPattern",
              "start": 3184,
              "end": 3206,
              "properties": [
                {
                  "type": "Property",
                  "start": 3186,
                  "end": 3193,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3186,
                    "end": 3193,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 3186,
                    "end": 3193,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 3195,
                  "end": 3204,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3195,
                    "end": 3204,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 3195,
                    "end": 3204,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
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
        "start": 3212,
        "end": 3223,
        "name": "multiRobots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 3225,
        "end": 3252,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3231,
            "end": 3250,
            "expression": {
              "type": "CallExpression",
              "start": 3231,
              "end": 3249,
              "callee": {
                "type": "MemberExpression",
                "start": 3231,
                "end": 3242,
                "object": {
                  "type": "Identifier",
                  "start": 3231,
                  "end": 3238,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3239,
                  "end": 3242,
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
                  "type": "Identifier",
                  "start": 3243,
                  "end": 3248,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 3253,
      "end": 3346,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 3258,
        "end": 3297,
        "properties": [
          {
            "type": "Property",
            "start": 3259,
            "end": 3263,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3259,
              "end": 3263,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 3259,
              "end": 3263,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 3265,
            "end": 3295,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3265,
              "end": 3271,
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectPattern",
              "start": 3273,
              "end": 3295,
              "properties": [
                {
                  "type": "Property",
                  "start": 3275,
                  "end": 3282,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3275,
                    "end": 3282,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 3275,
                    "end": 3282,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 3284,
                  "end": 3293,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3284,
                    "end": 3293,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 3284,
                    "end": 3293,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "kind": "init",
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 3301,
        "end": 3317,
        "callee": {
          "type": "Identifier",
          "start": 3301,
          "end": 3315,
          "name": "getMultiRobots",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 3319,
        "end": 3346,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3325,
            "end": 3344,
            "expression": {
              "type": "CallExpression",
              "start": 3325,
              "end": 3343,
              "callee": {
                "type": "MemberExpression",
                "start": 3325,
                "end": 3336,
                "object": {
                  "type": "Identifier",
                  "start": 3325,
                  "end": 3332,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3333,
                  "end": 3336,
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
                  "type": "Identifier",
                  "start": 3337,
                  "end": 3342,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 3347,
      "end": 3572,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 3352,
        "end": 3391,
        "properties": [
          {
            "type": "Property",
            "start": 3353,
            "end": 3357,
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3353,
              "end": 3357,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 3353,
              "end": 3357,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 3359,
            "end": 3389,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3359,
              "end": 3365,
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectPattern",
              "start": 3367,
              "end": 3389,
              "properties": [
                {
                  "type": "Property",
                  "start": 3369,
                  "end": 3376,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3369,
                    "end": 3376,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 3369,
                    "end": 3376,
                    "name": "primary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 3378,
                  "end": 3387,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3378,
                    "end": 3387,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 3378,
                    "end": 3387,
                    "name": "secondary",
                    "typeAnnotation": null,
                    "decorators": [],
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
            "kind": "init",
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 3395,
        "end": 3543,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 3396,
            "end": 3463,
            "properties": [
              {
                "type": "Property",
                "start": 3398,
                "end": 3411,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3398,
                  "end": 3402,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3404,
                  "end": 3411,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 3413,
                "end": 3461,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3413,
                  "end": 3419,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 3421,
                  "end": 3461,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3423,
                      "end": 3440,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3423,
                        "end": 3430,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 3432,
                        "end": 3440,
                        "value": "mowing",
                        "raw": "\"mowing\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 3442,
                      "end": 3459,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3442,
                        "end": 3451,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 3453,
                        "end": 3459,
                        "value": "none",
                        "raw": "\"none\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 3469,
            "end": 3542,
            "properties": [
              {
                "type": "Property",
                "start": 3471,
                "end": 3486,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3471,
                  "end": 3475,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3477,
                  "end": 3486,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 3488,
                "end": 3540,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3488,
                  "end": 3494,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 3496,
                  "end": 3540,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3498,
                      "end": 3517,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3498,
                        "end": 3505,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 3507,
                        "end": 3517,
                        "value": "trimming",
                        "raw": "\"trimming\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 3519,
                      "end": 3538,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3519,
                        "end": 3528,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 3530,
                        "end": 3538,
                        "value": "edging",
                        "raw": "\"edging\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 3545,
        "end": 3572,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3551,
            "end": 3570,
            "expression": {
              "type": "CallExpression",
              "start": 3551,
              "end": 3569,
              "callee": {
                "type": "MemberExpression",
                "start": 3551,
                "end": 3562,
                "object": {
                  "type": "Identifier",
                  "start": 3551,
                  "end": 3558,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 3559,
                  "end": 3562,
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
                  "type": "Identifier",
                  "start": 3563,
                  "end": 3568,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
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
