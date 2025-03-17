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
      "type": "ForOfStatement",
      "start": 608,
      "end": 670,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 613,
        "end": 631,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 617,
            "end": 631,
            "id": {
              "type": "ObjectPattern",
              "start": 617,
              "end": 631,
              "properties": [
                {
                  "type": "Property",
                  "start": 618,
                  "end": 629,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 618,
                    "end": 622,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 624,
                    "end": 629,
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
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 635,
        "end": 641,
        "name": "robots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 660,
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
                  "start": 661,
                  "end": 666,
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
      "start": 671,
      "end": 738,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 676,
        "end": 694,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 680,
            "end": 694,
            "id": {
              "type": "ObjectPattern",
              "start": 680,
              "end": 694,
              "properties": [
                {
                  "type": "Property",
                  "start": 681,
                  "end": 692,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 681,
                    "end": 685,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 687,
                    "end": 692,
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
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 725,
                  "end": 728,
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
                  "start": 729,
                  "end": 734,
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
      "start": 739,
      "end": 871,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 744,
        "end": 762,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 748,
            "end": 762,
            "id": {
              "type": "ObjectPattern",
              "start": 748,
              "end": 762,
              "properties": [
                {
                  "type": "Property",
                  "start": 749,
                  "end": 760,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 749,
                    "end": 753,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 755,
                    "end": 760,
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
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 773,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 775,
                  "end": 782,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 784,
                "end": 799,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 784,
                  "end": 789,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 791,
                  "end": 799,
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
            "start": 803,
            "end": 841,
            "properties": [
              {
                "type": "Property",
                "start": 805,
                "end": 820,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 805,
                  "end": 809,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 811,
                  "end": 820,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 822,
                "end": 839,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 822,
                  "end": 827,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 829,
                  "end": 839,
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 858,
                  "end": 861,
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
                  "start": 862,
                  "end": 867,
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
      "start": 872,
      "end": 984,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 877,
        "end": 937,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 881,
            "end": 937,
            "id": {
              "type": "ObjectPattern",
              "start": 881,
              "end": 937,
              "properties": [
                {
                  "type": "Property",
                  "start": 883,
                  "end": 935,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 883,
                    "end": 889,
                    "name": "skills",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 891,
                    "end": 935,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 893,
                        "end": 910,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 893,
                          "end": 900,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 902,
                          "end": 910,
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
                        "start": 912,
                        "end": 933,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 912,
                          "end": 921,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 923,
                          "end": 933,
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
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 941,
        "end": 952,
        "name": "multiRobots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 968,
                  "end": 971,
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
                  "start": 972,
                  "end": 980,
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
      "start": 985,
      "end": 1102,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 990,
        "end": 1050,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 994,
            "end": 1050,
            "id": {
              "type": "ObjectPattern",
              "start": 994,
              "end": 1050,
              "properties": [
                {
                  "type": "Property",
                  "start": 996,
                  "end": 1048,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 996,
                    "end": 1002,
                    "name": "skills",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1004,
                    "end": 1048,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1006,
                        "end": 1023,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1006,
                          "end": 1013,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1015,
                          "end": 1023,
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
                        "start": 1025,
                        "end": 1046,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1025,
                          "end": 1034,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1036,
                          "end": 1046,
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
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1086,
                  "end": 1089,
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
                  "start": 1090,
                  "end": 1098,
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
      "start": 1103,
      "end": 1352,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1108,
        "end": 1168,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1112,
            "end": 1168,
            "id": {
              "type": "ObjectPattern",
              "start": 1112,
              "end": 1168,
              "properties": [
                {
                  "type": "Property",
                  "start": 1114,
                  "end": 1166,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1114,
                    "end": 1120,
                    "name": "skills",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1122,
                    "end": 1166,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1124,
                        "end": 1141,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1124,
                          "end": 1131,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1133,
                          "end": 1141,
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
                        "start": 1143,
                        "end": 1164,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1143,
                          "end": 1152,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1154,
                          "end": 1164,
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
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1175,
                  "end": 1179,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1181,
                  "end": 1188,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1190,
                "end": 1238,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1190,
                  "end": 1196,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1200,
                        "end": 1207,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1209,
                        "end": 1217,
                        "value": "mowing",
                        "raw": "\"mowing\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1219,
                      "end": 1236,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1219,
                        "end": 1228,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1230,
                        "end": 1236,
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
            "start": 1246,
            "end": 1319,
            "properties": [
              {
                "type": "Property",
                "start": 1248,
                "end": 1263,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1248,
                  "end": 1252,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1254,
                  "end": 1263,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1265,
                "end": 1317,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1265,
                  "end": 1271,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1275,
                        "end": 1282,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1284,
                        "end": 1294,
                        "value": "trimming",
                        "raw": "\"trimming\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1296,
                      "end": 1315,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1296,
                        "end": 1305,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1307,
                        "end": 1315,
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1336,
                  "end": 1339,
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
                  "start": 1340,
                  "end": 1348,
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
      "start": 1354,
      "end": 1431,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1359,
        "end": 1392,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1363,
            "end": 1392,
            "id": {
              "type": "ObjectPattern",
              "start": 1363,
              "end": 1392,
              "properties": [
                {
                  "type": "Property",
                  "start": 1364,
                  "end": 1375,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1364,
                    "end": 1368,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1370,
                    "end": 1375,
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
                  "start": 1377,
                  "end": 1390,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1377,
                    "end": 1382,
                    "name": "skill",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1384,
                    "end": 1390,
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
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 1396,
        "end": 1402,
        "name": "robots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1418,
                  "end": 1421,
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
                  "start": 1422,
                  "end": 1427,
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
      "start": 1432,
      "end": 1514,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1437,
        "end": 1470,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1441,
            "end": 1470,
            "id": {
              "type": "ObjectPattern",
              "start": 1441,
              "end": 1470,
              "properties": [
                {
                  "type": "Property",
                  "start": 1442,
                  "end": 1453,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1442,
                    "end": 1446,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1448,
                    "end": 1453,
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
                  "start": 1455,
                  "end": 1468,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1455,
                    "end": 1460,
                    "name": "skill",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1462,
                    "end": 1468,
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
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1501,
                  "end": 1504,
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
                  "start": 1505,
                  "end": 1510,
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
      "start": 1515,
      "end": 1662,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1520,
        "end": 1553,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1524,
            "end": 1553,
            "id": {
              "type": "ObjectPattern",
              "start": 1524,
              "end": 1553,
              "properties": [
                {
                  "type": "Property",
                  "start": 1525,
                  "end": 1536,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1525,
                    "end": 1529,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1531,
                    "end": 1536,
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
                  "start": 1538,
                  "end": 1551,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1538,
                    "end": 1543,
                    "name": "skill",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1545,
                    "end": 1551,
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
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1560,
                  "end": 1564,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1566,
                  "end": 1573,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1575,
                "end": 1590,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1575,
                  "end": 1580,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1582,
                  "end": 1590,
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
            "start": 1594,
            "end": 1632,
            "properties": [
              {
                "type": "Property",
                "start": 1596,
                "end": 1611,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1596,
                  "end": 1600,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1602,
                  "end": 1611,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1613,
                "end": 1630,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1613,
                  "end": 1618,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1620,
                  "end": 1630,
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1649,
                  "end": 1652,
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
                  "start": 1653,
                  "end": 1658,
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
      "start": 1663,
      "end": 1784,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1668,
        "end": 1740,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1672,
            "end": 1740,
            "id": {
              "type": "ObjectPattern",
              "start": 1672,
              "end": 1740,
              "properties": [
                {
                  "type": "Property",
                  "start": 1673,
                  "end": 1684,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1673,
                    "end": 1677,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1679,
                    "end": 1684,
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
                  "start": 1686,
                  "end": 1738,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1686,
                    "end": 1692,
                    "name": "skills",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1694,
                    "end": 1738,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1696,
                        "end": 1713,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1696,
                          "end": 1703,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1705,
                          "end": 1713,
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
                        "start": 1715,
                        "end": 1736,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1715,
                          "end": 1724,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1726,
                          "end": 1736,
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
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 1744,
        "end": 1755,
        "name": "multiRobots",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1771,
                  "end": 1774,
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
                  "start": 1775,
                  "end": 1780,
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
      "start": 1785,
      "end": 1911,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1790,
        "end": 1862,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1794,
            "end": 1862,
            "id": {
              "type": "ObjectPattern",
              "start": 1794,
              "end": 1862,
              "properties": [
                {
                  "type": "Property",
                  "start": 1795,
                  "end": 1806,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1795,
                    "end": 1799,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1801,
                    "end": 1806,
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
                  "start": 1808,
                  "end": 1860,
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
                    "end": 1860,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1818,
                        "end": 1835,
                        "method": false,
                        "shorthand": false,
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
                          "start": 1827,
                          "end": 1835,
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
                        "start": 1837,
                        "end": 1858,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1837,
                          "end": 1846,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1848,
                          "end": 1858,
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
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1898,
                  "end": 1901,
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
                  "start": 1902,
                  "end": 1907,
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
      "start": 1912,
      "end": 2170,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1917,
        "end": 1989,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1921,
            "end": 1989,
            "id": {
              "type": "ObjectPattern",
              "start": 1921,
              "end": 1989,
              "properties": [
                {
                  "type": "Property",
                  "start": 1922,
                  "end": 1933,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1922,
                    "end": 1926,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 1928,
                    "end": 1933,
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
                  "start": 1935,
                  "end": 1987,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1935,
                    "end": 1941,
                    "name": "skills",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 1943,
                    "end": 1987,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1945,
                        "end": 1962,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1945,
                          "end": 1952,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1954,
                          "end": 1962,
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
                        "start": 1964,
                        "end": 1985,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1964,
                          "end": 1973,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 1975,
                          "end": 1985,
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
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1996,
                  "end": 2000,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2002,
                  "end": 2009,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2011,
                "end": 2059,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2011,
                  "end": 2017,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2021,
                        "end": 2028,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2030,
                        "end": 2038,
                        "value": "mowing",
                        "raw": "\"mowing\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2040,
                      "end": 2057,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2040,
                        "end": 2049,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2051,
                        "end": 2057,
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
            "start": 2067,
            "end": 2140,
            "properties": [
              {
                "type": "Property",
                "start": 2069,
                "end": 2084,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2069,
                  "end": 2073,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2075,
                  "end": 2084,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2086,
                "end": 2138,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2086,
                  "end": 2092,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2096,
                        "end": 2103,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2105,
                        "end": 2115,
                        "value": "trimming",
                        "raw": "\"trimming\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2117,
                      "end": 2136,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2117,
                        "end": 2126,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2128,
                        "end": 2136,
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2157,
                  "end": 2160,
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
                  "start": 2161,
                  "end": 2166,
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
