__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 899,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 56,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 78,
        "name": "unbox",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 82,
          "end": 111,
          "name": "box",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 85,
            "end": 111,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 87,
              "end": 111,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 89,
                  "end": 109,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 94,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 94,
                    "end": 109,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 96,
                      "end": 109,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 96,
                          "end": 97,
                          "typeName": {
                            "type": "Identifier",
                            "start": 96,
                            "end": 97,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 100,
                          "end": 109
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 78,
        "end": 81,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 79,
            "end": 80,
            "name": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 112,
        "end": 115,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 114,
          "end": 115,
          "typeName": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 153,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 153,
            "name": "su",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 153,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 135,
                "end": 153,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 135,
                    "end": 141
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 144,
                    "end": 153
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 200,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 200,
            "name": "fnu",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 200,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 174,
                "end": 200,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 175,
                    "end": 187,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 178,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 181,
                        "end": 187
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 191,
                    "end": 200
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 202,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 249,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 249,
            "name": "osu",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 249,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 221,
                "end": 249,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 221,
                    "end": 237,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 223,
                        "end": 235,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 223,
                          "end": 227,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 227,
                          "end": 235,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 229,
                            "end": 235
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 240,
                    "end": 249
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 251,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 305,
            "name": "ofnu",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 305,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 271,
                "end": 305,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 271,
                    "end": 293,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 273,
                        "end": 291,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 273,
                          "end": 277,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 277,
                          "end": 291,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 279,
                            "end": 291,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 282,
                              "end": 291,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 285,
                                "end": 291
                              }
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 296,
                    "end": 305
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 308,
      "end": 341,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 340,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 316,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 319,
            "end": 340,
            "properties": [
              {
                "type": "Property",
                "start": 321,
                "end": 338,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 326,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ChainExpression",
                  "start": 328,
                  "end": 338,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 328,
                    "end": 338,
                    "object": {
                      "type": "Identifier",
                      "start": 328,
                      "end": 330,
                      "name": "su",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 332,
                      "end": 338,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 342,
      "end": 371,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 348,
          "end": 370,
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 358,
            "name": "v1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 358,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 352,
                "end": 358
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 361,
            "end": 370,
            "callee": {
              "type": "Identifier",
              "start": 361,
              "end": 366,
              "name": "unbox",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 367,
                "end": 369,
                "name": "b1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 373,
      "end": 428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 379,
          "end": 427,
          "id": {
            "type": "Identifier",
            "start": 379,
            "end": 381,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 384,
            "end": 427,
            "properties": [
              {
                "type": "Property",
                "start": 386,
                "end": 425,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 391,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 393,
                  "end": 425,
                  "expression": {
                    "type": "ChainExpression",
                    "start": 393,
                    "end": 403,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 393,
                      "end": 403,
                      "object": {
                        "type": "Identifier",
                        "start": 393,
                        "end": 395,
                        "name": "su",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 397,
                        "end": 403,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": true
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 407,
                    "end": 425,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 407,
                        "end": 413
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 416,
                        "end": 425
                      }
                    ]
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 429,
      "end": 458,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 457,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 445,
            "name": "v2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 437,
              "end": 445,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 439,
                "end": 445
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 448,
            "end": 457,
            "callee": {
              "type": "Identifier",
              "start": 448,
              "end": 453,
              "name": "unbox",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 454,
                "end": 456,
                "name": "b2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 460,
      "end": 524,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 466,
          "end": 523,
          "id": {
            "type": "Identifier",
            "start": 466,
            "end": 499,
            "name": "b3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 468,
              "end": 499,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 470,
                "end": 499,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 472,
                    "end": 497,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 472,
                      "end": 477,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 477,
                      "end": 497,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 479,
                        "end": 497,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 479,
                            "end": 485
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 488,
                            "end": 497
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 502,
            "end": 523,
            "properties": [
              {
                "type": "Property",
                "start": 504,
                "end": 521,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 504,
                  "end": 509,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ChainExpression",
                  "start": 511,
                  "end": 521,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 511,
                    "end": 521,
                    "object": {
                      "type": "Identifier",
                      "start": 511,
                      "end": 513,
                      "name": "su",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 515,
                      "end": 521,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 525,
      "end": 554,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 531,
          "end": 553,
          "id": {
            "type": "Identifier",
            "start": 531,
            "end": 541,
            "name": "v3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 533,
              "end": 541,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 535,
                "end": 541
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 544,
            "end": 553,
            "callee": {
              "type": "Identifier",
              "start": 544,
              "end": 549,
              "name": "unbox",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 550,
                "end": 552,
                "name": "b3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 556,
      "end": 586,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 562,
          "end": 585,
          "id": {
            "type": "Identifier",
            "start": 562,
            "end": 564,
            "name": "b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 567,
            "end": 585,
            "properties": [
              {
                "type": "Property",
                "start": 569,
                "end": 583,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 574,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ChainExpression",
                  "start": 576,
                  "end": 583,
                  "expression": {
                    "type": "CallExpression",
                    "start": 576,
                    "end": 583,
                    "callee": {
                      "type": "Identifier",
                      "start": 576,
                      "end": 579,
                      "name": "fnu",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": true,
                    "typeArguments": null
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 587,
      "end": 616,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 593,
          "end": 615,
          "id": {
            "type": "Identifier",
            "start": 593,
            "end": 603,
            "name": "v4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 595,
              "end": 603,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 597,
                "end": 603
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 606,
            "end": 615,
            "callee": {
              "type": "Identifier",
              "start": 606,
              "end": 611,
              "name": "unbox",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 612,
                "end": 614,
                "name": "b4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 618,
      "end": 655,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 624,
          "end": 654,
          "id": {
            "type": "Identifier",
            "start": 624,
            "end": 626,
            "name": "b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 629,
            "end": 654,
            "properties": [
              {
                "type": "Property",
                "start": 631,
                "end": 652,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 631,
                  "end": 636,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ChainExpression",
                  "start": 638,
                  "end": 652,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 638,
                    "end": 652,
                    "object": {
                      "type": "Identifier",
                      "start": 638,
                      "end": 640,
                      "name": "su",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 643,
                      "end": 651,
                      "value": "length",
                      "raw": "\"length\""
                    },
                    "computed": true,
                    "optional": true
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 656,
      "end": 685,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 662,
          "end": 684,
          "id": {
            "type": "Identifier",
            "start": 662,
            "end": 672,
            "name": "v5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 664,
              "end": 672,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 666,
                "end": 672
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 675,
            "end": 684,
            "callee": {
              "type": "Identifier",
              "start": 675,
              "end": 680,
              "name": "unbox",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 681,
                "end": 683,
                "name": "b5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 687,
      "end": 726,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 693,
          "end": 725,
          "id": {
            "type": "Identifier",
            "start": 693,
            "end": 695,
            "name": "b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 698,
            "end": 725,
            "properties": [
              {
                "type": "Property",
                "start": 700,
                "end": 723,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 700,
                  "end": 705,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ChainExpression",
                  "start": 707,
                  "end": 723,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 707,
                    "end": 723,
                    "object": {
                      "type": "MemberExpression",
                      "start": 707,
                      "end": 716,
                      "object": {
                        "type": "Identifier",
                        "start": 707,
                        "end": 710,
                        "name": "osu",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 712,
                        "end": 716,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": true
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 717,
                      "end": 723,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 727,
      "end": 756,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 733,
          "end": 755,
          "id": {
            "type": "Identifier",
            "start": 733,
            "end": 743,
            "name": "v6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 735,
              "end": 743,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 737,
                "end": 743
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 746,
            "end": 755,
            "callee": {
              "type": "Identifier",
              "start": 746,
              "end": 751,
              "name": "unbox",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 752,
                "end": 754,
                "name": "b6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 758,
      "end": 800,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 764,
          "end": 799,
          "id": {
            "type": "Identifier",
            "start": 764,
            "end": 766,
            "name": "b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 769,
            "end": 799,
            "properties": [
              {
                "type": "Property",
                "start": 771,
                "end": 797,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 776,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ChainExpression",
                  "start": 778,
                  "end": 797,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 778,
                    "end": 797,
                    "object": {
                      "type": "MemberExpression",
                      "start": 778,
                      "end": 787,
                      "object": {
                        "type": "Identifier",
                        "start": 778,
                        "end": 781,
                        "name": "osu",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 783,
                        "end": 787,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": true
                    },
                    "property": {
                      "type": "Literal",
                      "start": 788,
                      "end": 796,
                      "value": "length",
                      "raw": "\"length\""
                    },
                    "computed": true,
                    "optional": false
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 801,
      "end": 830,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 807,
          "end": 829,
          "id": {
            "type": "Identifier",
            "start": 807,
            "end": 817,
            "name": "v7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 809,
              "end": 817,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 811,
                "end": 817
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 820,
            "end": 829,
            "callee": {
              "type": "Identifier",
              "start": 820,
              "end": 825,
              "name": "unbox",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 826,
                "end": 828,
                "name": "b7",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 832,
      "end": 867,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 838,
          "end": 866,
          "id": {
            "type": "Identifier",
            "start": 838,
            "end": 840,
            "name": "b8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 843,
            "end": 866,
            "properties": [
              {
                "type": "Property",
                "start": 845,
                "end": 864,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 845,
                  "end": 850,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ChainExpression",
                  "start": 852,
                  "end": 864,
                  "expression": {
                    "type": "CallExpression",
                    "start": 852,
                    "end": 864,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 852,
                      "end": 862,
                      "object": {
                        "type": "Identifier",
                        "start": 852,
                        "end": 856,
                        "name": "ofnu",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 858,
                        "end": 862,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": true
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 868,
      "end": 897,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 874,
          "end": 896,
          "id": {
            "type": "Identifier",
            "start": 874,
            "end": 884,
            "name": "v8",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 876,
              "end": 884,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 878,
                "end": 884
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 887,
            "end": 896,
            "callee": {
              "type": "Identifier",
              "start": 887,
              "end": 892,
              "name": "unbox",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 893,
                "end": 895,
                "name": "b8",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
