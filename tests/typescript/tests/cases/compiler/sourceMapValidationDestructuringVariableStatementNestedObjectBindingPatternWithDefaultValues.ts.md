__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1083,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 52,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 52,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 52,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 27,
                    "end": 50,
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
                        "end": 42,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
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
      "start": 53,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 68,
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 165,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 75,
            "end": 88,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 93,
            "end": 163,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 99,
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 162,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 101,
                "end": 162,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 111,
                    "end": 128,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 118,
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 127,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 137,
                    "end": 156,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 146,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 147,
                      "end": 155,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 149,
                        "end": 155
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
      "start": 166,
      "end": 254,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 183,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 183,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 183,
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
            "start": 186,
            "end": 253,
            "properties": [
              {
                "type": "Property",
                "start": 188,
                "end": 201,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 192,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 194,
                  "end": 201,
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
                "start": 203,
                "end": 251,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 209,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 211,
                  "end": 251,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 213,
                      "end": 230,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 220,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 222,
                        "end": 230,
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
                      "start": 232,
                      "end": 249,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 241,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 243,
                        "end": 249,
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
      "type": "VariableDeclaration",
      "start": 255,
      "end": 349,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 348,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 272,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 265,
              "end": 272,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 267,
                "end": 272,
                "typeName": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 272,
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
            "start": 275,
            "end": 348,
            "properties": [
              {
                "type": "Property",
                "start": 277,
                "end": 292,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 281,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 283,
                  "end": 292,
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
                "start": 294,
                "end": 346,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 300,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 302,
                  "end": 346,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 304,
                      "end": 323,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 304,
                        "end": 311,
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 313,
                        "end": 323,
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
                      "start": 325,
                      "end": 344,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 334,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 336,
                        "end": 344,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 516,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 515,
          "id": {
            "type": "ObjectPattern",
            "start": 355,
            "end": 506,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 361,
                "end": 504,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 367,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 369,
                  "end": 504,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 369,
                    "end": 457,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 379,
                        "end": 408,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 379,
                          "end": 386,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 388,
                          "end": 408,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 396,
                            "decorators": [],
                            "name": "primaryA",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 399,
                            "end": 408,
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
                      },
                      {
                        "type": "Property",
                        "start": 418,
                        "end": 451,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 418,
                          "end": 427,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 429,
                          "end": 451,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 429,
                            "end": 439,
                            "decorators": [],
                            "name": "secondaryA",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 442,
                            "end": 451,
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
                    "type": "ObjectExpression",
                    "start": 460,
                    "end": 504,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 462,
                        "end": 480,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 462,
                          "end": 469,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 471,
                          "end": 480,
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
                        "start": 482,
                        "end": 502,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 482,
                          "end": 491,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 493,
                          "end": 502,
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
          "init": {
            "type": "Identifier",
            "start": 509,
            "end": 515,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 517,
      "end": 719,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 521,
          "end": 718,
          "id": {
            "type": "ObjectPattern",
            "start": 521,
            "end": 709,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 527,
                "end": 558,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 531,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 533,
                  "end": 558,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 533,
                    "end": 538,
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 541,
                    "end": 558,
                    "value": "noNameSpecified",
                    "raw": "\"noNameSpecified\""
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
                "start": 564,
                "end": 707,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 570,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 572,
                  "end": 707,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 572,
                    "end": 660,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 582,
                        "end": 611,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 582,
                          "end": 589,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 591,
                          "end": 611,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 591,
                            "end": 599,
                            "decorators": [],
                            "name": "primaryB",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 602,
                            "end": 611,
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
                      },
                      {
                        "type": "Property",
                        "start": 621,
                        "end": 654,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 621,
                          "end": 630,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 632,
                          "end": 654,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 632,
                            "end": 642,
                            "decorators": [],
                            "name": "secondaryB",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 645,
                            "end": 654,
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
                    "type": "ObjectExpression",
                    "start": 663,
                    "end": 707,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 665,
                        "end": 683,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 665,
                          "end": 672,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 674,
                          "end": 683,
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
                        "start": 685,
                        "end": 705,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 685,
                          "end": 694,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 696,
                          "end": 705,
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
          "init": {
            "type": "Identifier",
            "start": 712,
            "end": 718,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 720,
      "end": 1001,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 724,
          "end": 1000,
          "id": {
            "type": "ObjectPattern",
            "start": 724,
            "end": 912,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 730,
                "end": 761,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 730,
                  "end": 734,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 736,
                  "end": 761,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 736,
                    "end": 741,
                    "decorators": [],
                    "name": "nameC",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 744,
                    "end": 761,
                    "value": "noNameSpecified",
                    "raw": "\"noNameSpecified\""
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
                "start": 767,
                "end": 910,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 767,
                  "end": 773,
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 775,
                  "end": 910,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 775,
                    "end": 863,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 785,
                        "end": 814,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 785,
                          "end": 792,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 794,
                          "end": 814,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 794,
                            "end": 802,
                            "decorators": [],
                            "name": "primaryB",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 805,
                            "end": 814,
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
                      },
                      {
                        "type": "Property",
                        "start": 824,
                        "end": 857,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 824,
                          "end": 833,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 835,
                          "end": 857,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 835,
                            "end": 845,
                            "decorators": [],
                            "name": "secondaryB",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 848,
                            "end": 857,
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
                    "type": "ObjectExpression",
                    "start": 866,
                    "end": 910,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 868,
                        "end": 886,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 868,
                          "end": 875,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 877,
                          "end": 886,
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
                        "start": 888,
                        "end": 908,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 888,
                          "end": 897,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 899,
                          "end": 908,
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
          "init": {
            "type": "TSTypeAssertion",
            "start": 915,
            "end": 1000,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 916,
              "end": 921,
              "typeName": {
                "type": "Identifier",
                "start": 916,
                "end": 921,
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": {
              "type": "ObjectExpression",
              "start": 922,
              "end": 1000,
              "properties": [
                {
                  "type": "Property",
                  "start": 924,
                  "end": 937,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 924,
                    "end": 928,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 930,
                    "end": 937,
                    "value": "Edger",
                    "raw": "\"Edger\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 939,
                  "end": 998,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 939,
                    "end": 945,
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 947,
                    "end": 998,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 949,
                        "end": 966,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 949,
                          "end": 956,
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 958,
                          "end": 966,
                          "value": "edging",
                          "raw": "\"edging\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 968,
                        "end": 996,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 968,
                          "end": 977,
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 979,
                          "end": 996,
                          "value": "branch trimming",
                          "raw": "\"branch trimming\""
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1003,
      "end": 1083,
      "test": {
        "type": "BinaryExpression",
        "start": 1007,
        "end": 1021,
        "left": {
          "type": "Identifier",
          "start": 1007,
          "end": 1012,
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 1016,
          "end": 1021,
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1023,
        "end": 1050,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1029,
            "end": 1048,
            "expression": {
              "type": "CallExpression",
              "start": 1029,
              "end": 1047,
              "callee": {
                "type": "MemberExpression",
                "start": 1029,
                "end": 1040,
                "object": {
                  "type": "Identifier",
                  "start": 1029,
                  "end": 1036,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1037,
                  "end": 1040,
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
                  "start": 1041,
                  "end": 1046,
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 1056,
        "end": 1083,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1062,
            "end": 1081,
            "expression": {
              "type": "CallExpression",
              "start": 1062,
              "end": 1080,
              "callee": {
                "type": "MemberExpression",
                "start": 1062,
                "end": 1073,
                "object": {
                  "type": "Identifier",
                  "start": 1062,
                  "end": 1069,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1070,
                  "end": 1073,
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
                  "start": 1074,
                  "end": 1079,
                  "decorators": [],
                  "name": "nameC",
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
