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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 52,
            "name": "console",
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
                        "end": 42,
                        "name": "msg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          }
                        },
                        "decorators": [],
                        "optional": false
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
      "start": 53,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 68,
        "name": "Robot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "skills",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "primary",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "secondary",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 183,
            "name": "robotA",
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
                  "name": "Robot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 192,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 194,
                  "end": 201,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 203,
                "end": 251,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 209,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 220,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 222,
                        "end": 230,
                        "value": "mowing",
                        "raw": "\"mowing\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 232,
                      "end": 249,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 241,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 243,
                        "end": 249,
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 349,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 348,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 272,
            "name": "robotB",
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
                  "name": "Robot",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 281,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 283,
                  "end": 292,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 294,
                "end": 346,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 300,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 304,
                        "end": 311,
                        "name": "primary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 313,
                        "end": 323,
                        "value": "trimming",
                        "raw": "\"trimming\""
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 325,
                      "end": 344,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 334,
                        "name": "secondary",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 336,
                        "end": 344,
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 516,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 515,
          "id": {
            "type": "ObjectPattern",
            "start": 355,
            "end": 506,
            "properties": [
              {
                "type": "Property",
                "start": 361,
                "end": 504,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 367,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 369,
                  "end": 504,
                  "left": {
                    "type": "ObjectPattern",
                    "start": 369,
                    "end": 457,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 379,
                        "end": 408,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 379,
                          "end": 386,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 388,
                          "end": 408,
                          "left": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 396,
                            "name": "primaryA",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 399,
                            "end": 408,
                            "value": "noSkill",
                            "raw": "\"noSkill\""
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 418,
                        "end": 451,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 418,
                          "end": 427,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 429,
                          "end": 451,
                          "left": {
                            "type": "Identifier",
                            "start": 429,
                            "end": 439,
                            "name": "secondaryA",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 442,
                            "end": 451,
                            "value": "noSkill",
                            "raw": "\"noSkill\""
                          },
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
                    "type": "ObjectExpression",
                    "start": 460,
                    "end": 504,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 462,
                        "end": 480,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 462,
                          "end": 469,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 471,
                          "end": 480,
                          "value": "noSkill",
                          "raw": "\"noSkill\""
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 482,
                        "end": 502,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 482,
                          "end": 491,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 493,
                          "end": 502,
                          "value": "noSkill",
                          "raw": "\"noSkill\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
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
          "init": {
            "type": "Identifier",
            "start": 509,
            "end": 515,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 517,
      "end": 719,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 521,
          "end": 718,
          "id": {
            "type": "ObjectPattern",
            "start": 521,
            "end": 709,
            "properties": [
              {
                "type": "Property",
                "start": 527,
                "end": 558,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 531,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 533,
                  "end": 558,
                  "left": {
                    "type": "Identifier",
                    "start": 533,
                    "end": 538,
                    "name": "nameB",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 541,
                    "end": 558,
                    "value": "noNameSpecified",
                    "raw": "\"noNameSpecified\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 564,
                "end": 707,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 570,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 572,
                  "end": 707,
                  "left": {
                    "type": "ObjectPattern",
                    "start": 572,
                    "end": 660,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 582,
                        "end": 611,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 582,
                          "end": 589,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 591,
                          "end": 611,
                          "left": {
                            "type": "Identifier",
                            "start": 591,
                            "end": 599,
                            "name": "primaryB",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 602,
                            "end": 611,
                            "value": "noSkill",
                            "raw": "\"noSkill\""
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 621,
                        "end": 654,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 621,
                          "end": 630,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 632,
                          "end": 654,
                          "left": {
                            "type": "Identifier",
                            "start": 632,
                            "end": 642,
                            "name": "secondaryB",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 645,
                            "end": 654,
                            "value": "noSkill",
                            "raw": "\"noSkill\""
                          },
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
                    "type": "ObjectExpression",
                    "start": 663,
                    "end": 707,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 665,
                        "end": 683,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 665,
                          "end": 672,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 674,
                          "end": 683,
                          "value": "noSkill",
                          "raw": "\"noSkill\""
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 685,
                        "end": 705,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 685,
                          "end": 694,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 696,
                          "end": 705,
                          "value": "noSkill",
                          "raw": "\"noSkill\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
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
          "init": {
            "type": "Identifier",
            "start": 712,
            "end": 718,
            "name": "robotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 720,
      "end": 1001,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 724,
          "end": 1000,
          "id": {
            "type": "ObjectPattern",
            "start": 724,
            "end": 912,
            "properties": [
              {
                "type": "Property",
                "start": 730,
                "end": 761,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 730,
                  "end": 734,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 736,
                  "end": 761,
                  "left": {
                    "type": "Identifier",
                    "start": 736,
                    "end": 741,
                    "name": "nameC",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 744,
                    "end": 761,
                    "value": "noNameSpecified",
                    "raw": "\"noNameSpecified\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 767,
                "end": 910,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 767,
                  "end": 773,
                  "name": "skills",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 775,
                  "end": 910,
                  "left": {
                    "type": "ObjectPattern",
                    "start": 775,
                    "end": 863,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 785,
                        "end": 814,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 785,
                          "end": 792,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 794,
                          "end": 814,
                          "left": {
                            "type": "Identifier",
                            "start": 794,
                            "end": 802,
                            "name": "primaryB",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 805,
                            "end": 814,
                            "value": "noSkill",
                            "raw": "\"noSkill\""
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 824,
                        "end": 857,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 824,
                          "end": 833,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 835,
                          "end": 857,
                          "left": {
                            "type": "Identifier",
                            "start": 835,
                            "end": 845,
                            "name": "secondaryB",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 848,
                            "end": 857,
                            "value": "noSkill",
                            "raw": "\"noSkill\""
                          },
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
                    "type": "ObjectExpression",
                    "start": 866,
                    "end": 910,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 868,
                        "end": 886,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 868,
                          "end": 875,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 877,
                          "end": 886,
                          "value": "noSkill",
                          "raw": "\"noSkill\""
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 888,
                        "end": 908,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 888,
                          "end": 897,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 899,
                          "end": 908,
                          "value": "noSkill",
                          "raw": "\"noSkill\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
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
          "init": {
            "type": "TSTypeAssertion",
            "start": 915,
            "end": 1000,
            "expression": {
              "type": "ObjectExpression",
              "start": 922,
              "end": 1000,
              "properties": [
                {
                  "type": "Property",
                  "start": 924,
                  "end": 937,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 924,
                    "end": 928,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 930,
                    "end": 937,
                    "value": "Edger",
                    "raw": "\"Edger\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 939,
                  "end": 998,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 939,
                    "end": 945,
                    "name": "skills",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 949,
                          "end": 956,
                          "name": "primary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 958,
                          "end": 966,
                          "value": "edging",
                          "raw": "\"edging\""
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 968,
                        "end": 996,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 968,
                          "end": 977,
                          "name": "secondary",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 979,
                          "end": 996,
                          "value": "branch trimming",
                          "raw": "\"branch trimming\""
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
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 916,
              "end": 921,
              "typeName": {
                "type": "Identifier",
                "start": 916,
                "end": 921,
                "name": "Robot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "nameB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 1016,
          "end": 1021,
          "name": "nameB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1037,
                  "end": 1040,
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
                  "start": 1041,
                  "end": 1046,
                  "name": "nameC",
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1070,
                  "end": 1073,
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
                  "start": 1074,
                  "end": 1079,
                  "name": "nameC",
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
