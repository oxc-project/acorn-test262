__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2170,
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
      "type": "ForOfStatement",
      "start": 608,
      "end": 670,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 613,
        "end": 631,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 617,
            "end": 631,
            "id": {
              "type": "ObjectPattern",
              "start": 617,
              "end": 631,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 618,
                  "end": 629,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 618,
                    "end": 622,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 624,
                    "end": 629,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 635,
        "end": 641,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 643,
        "end": 670,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 649,
            "end": 668,
            "expression": {
              "type": "CallExpression",
              "start": 649,
              "end": 667,
              "callee": {
                "type": "MemberExpression",
                "start": 649,
                "end": 660,
                "object": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 656,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 660,
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
                  "start": 661,
                  "end": 666,
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
      "start": 671,
      "end": 738,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 676,
        "end": 694,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 680,
            "end": 694,
            "id": {
              "type": "ObjectPattern",
              "start": 680,
              "end": 694,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 681,
                  "end": 692,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 681,
                    "end": 685,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 687,
                    "end": 692,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 698,
        "end": 709,
        "callee": {
          "type": "Identifier",
          "start": 698,
          "end": 707,
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
        "start": 711,
        "end": 738,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 717,
            "end": 736,
            "expression": {
              "type": "CallExpression",
              "start": 717,
              "end": 735,
              "callee": {
                "type": "MemberExpression",
                "start": 717,
                "end": 728,
                "object": {
                  "type": "Identifier",
                  "start": 717,
                  "end": 724,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 725,
                  "end": 728,
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
                  "start": 729,
                  "end": 734,
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
      "start": 739,
      "end": 871,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 744,
        "end": 762,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 748,
            "end": 762,
            "id": {
              "type": "ObjectPattern",
              "start": 748,
              "end": 762,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 749,
                  "end": 760,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 749,
                    "end": 753,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 755,
                    "end": 760,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 766,
        "end": 842,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 767,
            "end": 801,
            "properties": [
              {
                "type": "Property",
                "start": 769,
                "end": 782,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 773,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 775,
                  "end": 782,
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
                "start": 784,
                "end": 799,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 784,
                  "end": 789,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 791,
                  "end": 799,
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
            "start": 803,
            "end": 841,
            "properties": [
              {
                "type": "Property",
                "start": 805,
                "end": 820,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 805,
                  "end": 809,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 811,
                  "end": 820,
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
                "start": 822,
                "end": 839,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 822,
                  "end": 827,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 829,
                  "end": 839,
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
        "start": 844,
        "end": 871,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 850,
            "end": 869,
            "expression": {
              "type": "CallExpression",
              "start": 850,
              "end": 868,
              "callee": {
                "type": "MemberExpression",
                "start": 850,
                "end": 861,
                "object": {
                  "type": "Identifier",
                  "start": 850,
                  "end": 857,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 858,
                  "end": 861,
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
                  "start": 862,
                  "end": 867,
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
      "start": 872,
      "end": 984,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 877,
        "end": 937,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 881,
            "end": 937,
            "id": {
              "type": "ObjectPattern",
              "start": 881,
              "end": 937,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 883,
                  "end": 935,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 883,
                    "end": 889,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 891,
                    "end": 935,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 893,
                        "end": 910,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 893,
                          "end": 900,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 902,
                          "end": 910,
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
                        "start": 912,
                        "end": 933,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 912,
                          "end": 921,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 923,
                          "end": 933,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 941,
        "end": 952,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 954,
        "end": 984,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 960,
            "end": 982,
            "expression": {
              "type": "CallExpression",
              "start": 960,
              "end": 981,
              "callee": {
                "type": "MemberExpression",
                "start": 960,
                "end": 971,
                "object": {
                  "type": "Identifier",
                  "start": 960,
                  "end": 967,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 968,
                  "end": 971,
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
                  "start": 972,
                  "end": 980,
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
      "start": 985,
      "end": 1102,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 990,
        "end": 1050,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 994,
            "end": 1050,
            "id": {
              "type": "ObjectPattern",
              "start": 994,
              "end": 1050,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 996,
                  "end": 1048,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 996,
                    "end": 1002,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1004,
                    "end": 1048,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1006,
                        "end": 1023,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1006,
                          "end": 1013,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1015,
                          "end": 1023,
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
                        "start": 1025,
                        "end": 1046,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1025,
                          "end": 1034,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1036,
                          "end": 1046,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 1054,
        "end": 1070,
        "callee": {
          "type": "Identifier",
          "start": 1054,
          "end": 1068,
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
        "start": 1072,
        "end": 1102,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1078,
            "end": 1100,
            "expression": {
              "type": "CallExpression",
              "start": 1078,
              "end": 1099,
              "callee": {
                "type": "MemberExpression",
                "start": 1078,
                "end": 1089,
                "object": {
                  "type": "Identifier",
                  "start": 1078,
                  "end": 1085,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1086,
                  "end": 1089,
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
                  "start": 1090,
                  "end": 1098,
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
      "start": 1103,
      "end": 1352,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1108,
        "end": 1168,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1112,
            "end": 1168,
            "id": {
              "type": "ObjectPattern",
              "start": 1112,
              "end": 1168,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1114,
                  "end": 1166,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1114,
                    "end": 1120,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1122,
                    "end": 1166,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1124,
                        "end": 1141,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1124,
                          "end": 1131,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1133,
                          "end": 1141,
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
                        "start": 1143,
                        "end": 1164,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1143,
                          "end": 1152,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1154,
                          "end": 1164,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1172,
        "end": 1320,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 1173,
            "end": 1240,
            "properties": [
              {
                "type": "Property",
                "start": 1175,
                "end": 1188,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1175,
                  "end": 1179,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1181,
                  "end": 1188,
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
                "start": 1190,
                "end": 1238,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1190,
                  "end": 1196,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1198,
                  "end": 1238,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1200,
                      "end": 1217,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1200,
                        "end": 1207,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1209,
                        "end": 1217,
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
                      "start": 1219,
                      "end": 1236,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1219,
                        "end": 1228,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1230,
                        "end": 1236,
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
            "start": 1246,
            "end": 1319,
            "properties": [
              {
                "type": "Property",
                "start": 1248,
                "end": 1263,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1248,
                  "end": 1252,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1254,
                  "end": 1263,
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
                "start": 1265,
                "end": 1317,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1265,
                  "end": 1271,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1273,
                  "end": 1317,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1275,
                      "end": 1294,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1275,
                        "end": 1282,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1284,
                        "end": 1294,
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
                      "start": 1296,
                      "end": 1315,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1296,
                        "end": 1305,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1307,
                        "end": 1315,
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
        "start": 1322,
        "end": 1352,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1328,
            "end": 1350,
            "expression": {
              "type": "CallExpression",
              "start": 1328,
              "end": 1349,
              "callee": {
                "type": "MemberExpression",
                "start": 1328,
                "end": 1339,
                "object": {
                  "type": "Identifier",
                  "start": 1328,
                  "end": 1335,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1336,
                  "end": 1339,
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
                  "start": 1340,
                  "end": 1348,
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
      "start": 1354,
      "end": 1431,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1359,
        "end": 1392,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1363,
            "end": 1392,
            "id": {
              "type": "ObjectPattern",
              "start": 1363,
              "end": 1392,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1364,
                  "end": 1375,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1364,
                    "end": 1368,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1370,
                    "end": 1375,
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
                  "start": 1377,
                  "end": 1390,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1377,
                    "end": 1382,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1384,
                    "end": 1390,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 1396,
        "end": 1402,
        "decorators": [],
        "name": "robots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 1404,
        "end": 1431,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1410,
            "end": 1429,
            "expression": {
              "type": "CallExpression",
              "start": 1410,
              "end": 1428,
              "callee": {
                "type": "MemberExpression",
                "start": 1410,
                "end": 1421,
                "object": {
                  "type": "Identifier",
                  "start": 1410,
                  "end": 1417,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1418,
                  "end": 1421,
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
                  "start": 1422,
                  "end": 1427,
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
      "start": 1432,
      "end": 1514,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1437,
        "end": 1470,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1441,
            "end": 1470,
            "id": {
              "type": "ObjectPattern",
              "start": 1441,
              "end": 1470,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1442,
                  "end": 1453,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1442,
                    "end": 1446,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1448,
                    "end": 1453,
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
                  "start": 1455,
                  "end": 1468,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1455,
                    "end": 1460,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1462,
                    "end": 1468,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 1474,
        "end": 1485,
        "callee": {
          "type": "Identifier",
          "start": 1474,
          "end": 1483,
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
        "start": 1487,
        "end": 1514,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1493,
            "end": 1512,
            "expression": {
              "type": "CallExpression",
              "start": 1493,
              "end": 1511,
              "callee": {
                "type": "MemberExpression",
                "start": 1493,
                "end": 1504,
                "object": {
                  "type": "Identifier",
                  "start": 1493,
                  "end": 1500,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1501,
                  "end": 1504,
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
                  "start": 1505,
                  "end": 1510,
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
      "start": 1515,
      "end": 1662,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1520,
        "end": 1553,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1524,
            "end": 1553,
            "id": {
              "type": "ObjectPattern",
              "start": 1524,
              "end": 1553,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1525,
                  "end": 1536,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1525,
                    "end": 1529,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1531,
                    "end": 1536,
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
                  "start": 1538,
                  "end": 1551,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1538,
                    "end": 1543,
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1545,
                    "end": 1551,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1557,
        "end": 1633,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 1558,
            "end": 1592,
            "properties": [
              {
                "type": "Property",
                "start": 1560,
                "end": 1573,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1560,
                  "end": 1564,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1566,
                  "end": 1573,
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
                "start": 1575,
                "end": 1590,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1575,
                  "end": 1580,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1582,
                  "end": 1590,
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
            "start": 1594,
            "end": 1632,
            "properties": [
              {
                "type": "Property",
                "start": 1596,
                "end": 1611,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1596,
                  "end": 1600,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1602,
                  "end": 1611,
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
                "start": 1613,
                "end": 1630,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1613,
                  "end": 1618,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1620,
                  "end": 1630,
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
        "start": 1635,
        "end": 1662,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1641,
            "end": 1660,
            "expression": {
              "type": "CallExpression",
              "start": 1641,
              "end": 1659,
              "callee": {
                "type": "MemberExpression",
                "start": 1641,
                "end": 1652,
                "object": {
                  "type": "Identifier",
                  "start": 1641,
                  "end": 1648,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1649,
                  "end": 1652,
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
                  "start": 1653,
                  "end": 1658,
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
      "start": 1663,
      "end": 1784,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1668,
        "end": 1740,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1672,
            "end": 1740,
            "id": {
              "type": "ObjectPattern",
              "start": 1672,
              "end": 1740,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1673,
                  "end": 1684,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1673,
                    "end": 1677,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1679,
                    "end": 1684,
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
                  "start": 1686,
                  "end": 1738,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1686,
                    "end": 1692,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1694,
                    "end": 1738,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1696,
                        "end": 1713,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1696,
                          "end": 1703,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1705,
                          "end": 1713,
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
                        "start": 1715,
                        "end": 1736,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1715,
                          "end": 1724,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1726,
                          "end": 1736,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 1744,
        "end": 1755,
        "decorators": [],
        "name": "multiRobots",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 1757,
        "end": 1784,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1763,
            "end": 1782,
            "expression": {
              "type": "CallExpression",
              "start": 1763,
              "end": 1781,
              "callee": {
                "type": "MemberExpression",
                "start": 1763,
                "end": 1774,
                "object": {
                  "type": "Identifier",
                  "start": 1763,
                  "end": 1770,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1771,
                  "end": 1774,
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
                  "start": 1775,
                  "end": 1780,
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
      "start": 1785,
      "end": 1911,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1790,
        "end": 1862,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1794,
            "end": 1862,
            "id": {
              "type": "ObjectPattern",
              "start": 1794,
              "end": 1862,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1795,
                  "end": 1806,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1795,
                    "end": 1799,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1801,
                    "end": 1806,
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
                  "start": 1808,
                  "end": 1860,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1808,
                    "end": 1814,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1816,
                    "end": 1860,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1818,
                        "end": 1835,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1818,
                          "end": 1825,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1827,
                          "end": 1835,
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
                        "start": 1837,
                        "end": 1858,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1837,
                          "end": 1846,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1848,
                          "end": 1858,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 1866,
        "end": 1882,
        "callee": {
          "type": "Identifier",
          "start": 1866,
          "end": 1880,
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
        "start": 1884,
        "end": 1911,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1890,
            "end": 1909,
            "expression": {
              "type": "CallExpression",
              "start": 1890,
              "end": 1908,
              "callee": {
                "type": "MemberExpression",
                "start": 1890,
                "end": 1901,
                "object": {
                  "type": "Identifier",
                  "start": 1890,
                  "end": 1897,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1898,
                  "end": 1901,
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
                  "start": 1902,
                  "end": 1907,
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
      "start": 1912,
      "end": 2170,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1917,
        "end": 1989,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1921,
            "end": 1989,
            "id": {
              "type": "ObjectPattern",
              "start": 1921,
              "end": 1989,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 1922,
                  "end": 1933,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1922,
                    "end": 1926,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1928,
                    "end": 1933,
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
                  "start": 1935,
                  "end": 1987,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 1935,
                    "end": 1941,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1943,
                    "end": 1987,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1945,
                        "end": 1962,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1945,
                          "end": 1952,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1954,
                          "end": 1962,
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
                        "start": 1964,
                        "end": 1985,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1964,
                          "end": 1973,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1975,
                          "end": 1985,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1993,
        "end": 2141,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 1994,
            "end": 2061,
            "properties": [
              {
                "type": "Property",
                "start": 1996,
                "end": 2009,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1996,
                  "end": 2000,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2002,
                  "end": 2009,
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
                "start": 2011,
                "end": 2059,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2011,
                  "end": 2017,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2019,
                  "end": 2059,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2021,
                      "end": 2038,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2021,
                        "end": 2028,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2030,
                        "end": 2038,
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
                      "start": 2040,
                      "end": 2057,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2040,
                        "end": 2049,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2051,
                        "end": 2057,
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
            "start": 2067,
            "end": 2140,
            "properties": [
              {
                "type": "Property",
                "start": 2069,
                "end": 2084,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2069,
                  "end": 2073,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 2075,
                  "end": 2084,
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
                "start": 2086,
                "end": 2138,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 2086,
                  "end": 2092,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2094,
                  "end": 2138,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2096,
                      "end": 2115,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2096,
                        "end": 2103,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2105,
                        "end": 2115,
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
                      "start": 2117,
                      "end": 2136,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2117,
                        "end": 2126,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2128,
                        "end": 2136,
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
        "start": 2143,
        "end": 2170,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2149,
            "end": 2168,
            "expression": {
              "type": "CallExpression",
              "start": 2149,
              "end": 2167,
              "callee": {
                "type": "MemberExpression",
                "start": 2149,
                "end": 2160,
                "object": {
                  "type": "Identifier",
                  "start": 2149,
                  "end": 2156,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2157,
                  "end": 2160,
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
                  "start": 2161,
                  "end": 2166,
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
