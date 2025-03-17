__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 759,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 56,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 79,
        "name": "direct",
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
          "start": 98,
          "end": 108,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 99,
            "end": 108,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 101,
              "end": 108,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 101,
                  "end": 102,
                  "typeName": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 102,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSArrayType",
                  "start": 105,
                  "end": 108,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 105,
                    "end": 106,
                    "typeName": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 106,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
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
        "start": 79,
        "end": 97,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 96,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 90,
              "end": 96
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 109,
        "end": 128,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 111,
          "end": 128,
          "typeName": {
            "type": "Identifier",
            "start": 111,
            "end": 117,
            "name": "Record",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 117,
            "end": 128,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 118,
                "end": 119,
                "typeName": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSStringKeyword",
                "start": 121,
                "end": 127
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 129,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 152,
        "name": "nested",
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
          "start": 171,
          "end": 187,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 172,
            "end": 187,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 174,
              "end": 187,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 176,
                  "end": 185,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 182,
                    "name": "fields",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 182,
                    "end": 185,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 184,
                      "end": 185,
                      "typeName": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 185,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
        "start": 152,
        "end": 170,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 153,
            "end": 169,
            "name": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 163,
              "end": 169
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 188,
        "end": 207,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 190,
          "end": 207,
          "typeName": {
            "type": "Identifier",
            "start": 190,
            "end": 196,
            "name": "Record",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 196,
            "end": 207,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 197,
                "end": 198,
                "typeName": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 198,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 208,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 236,
        "name": "nestedUnion",
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
          "start": 255,
          "end": 277,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 256,
            "end": 277,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 258,
              "end": 277,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 260,
                  "end": 275,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 266,
                    "name": "fields",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 266,
                    "end": 275,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 268,
                      "end": 275,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 268,
                          "end": 269,
                          "typeName": {
                            "type": "Identifier",
                            "start": 268,
                            "end": 269,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSArrayType",
                          "start": 272,
                          "end": 275,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 272,
                            "end": 273,
                            "typeName": {
                              "type": "Identifier",
                              "start": 272,
                              "end": 273,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
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
        "start": 236,
        "end": 254,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 237,
            "end": 253,
            "name": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 247,
              "end": 253
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 278,
        "end": 297,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 280,
          "end": 297,
          "typeName": {
            "type": "Identifier",
            "start": 280,
            "end": 286,
            "name": "Record",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 286,
            "end": 297,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 287,
                "end": 288,
                "typeName": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 288,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSStringKeyword",
                "start": 290,
                "end": 296
              }
            ]
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 299,
      "end": 336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 322,
            "name": "directUnionSingle",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 325,
            "end": 336,
            "callee": {
              "type": "Identifier",
              "start": 325,
              "end": 331,
              "name": "direct",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 332,
                "end": 335,
                "value": "z",
                "raw": "\"z\""
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
      "start": 337,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 380,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 359,
            "name": "directUnionArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 362,
            "end": 380,
            "callee": {
              "type": "Identifier",
              "start": 362,
              "end": 368,
              "name": "direct",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 369,
                "end": 379,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 370,
                    "end": 373,
                    "value": "z",
                    "raw": "\"z\""
                  },
                  {
                    "type": "Literal",
                    "start": 375,
                    "end": 378,
                    "value": "y",
                    "raw": "\"y\""
                  }
                ]
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
      "start": 381,
      "end": 423,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 423,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 399,
            "name": "nestedSingle",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 402,
            "end": 423,
            "callee": {
              "type": "Identifier",
              "start": 402,
              "end": 408,
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 409,
                "end": 422,
                "properties": [
                  {
                    "type": "Property",
                    "start": 410,
                    "end": 421,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 416,
                      "name": "fields",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 418,
                      "end": 421,
                      "value": "z",
                      "raw": "\"z\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "start": 424,
      "end": 476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 476,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 447,
            "name": "nestedUnionSingle",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 450,
            "end": 476,
            "callee": {
              "type": "Identifier",
              "start": 450,
              "end": 461,
              "name": "nestedUnion",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 462,
                "end": 475,
                "properties": [
                  {
                    "type": "Property",
                    "start": 463,
                    "end": 474,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 463,
                      "end": 469,
                      "name": "fields",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 471,
                      "end": 474,
                      "value": "z",
                      "raw": "\"z\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "start": 477,
      "end": 535,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 483,
          "end": 535,
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 499,
            "name": "nestedUnionArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 502,
            "end": 535,
            "callee": {
              "type": "Identifier",
              "start": 502,
              "end": 513,
              "name": "nestedUnion",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 514,
                "end": 534,
                "properties": [
                  {
                    "type": "Property",
                    "start": 515,
                    "end": 533,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 515,
                      "end": 521,
                      "name": "fields",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 523,
                      "end": 533,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 524,
                          "end": 527,
                          "value": "z",
                          "raw": "\"z\""
                        },
                        {
                          "type": "Literal",
                          "start": 529,
                          "end": 532,
                          "value": "y",
                          "raw": "\"y\""
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "type": "TSDeclareFunction",
      "start": 537,
      "end": 589,
      "id": {
        "type": "Identifier",
        "start": 554,
        "end": 563,
        "name": "hasZField",
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
          "start": 564,
          "end": 582,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 567,
            "end": 582,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 569,
              "end": 582,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 571,
                  "end": 580,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 571,
                    "end": 572,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 572,
                    "end": 580,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 574,
                      "end": 580
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 583,
        "end": 589,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 585,
          "end": 589
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 591,
      "end": 619,
      "expression": {
        "type": "CallExpression",
        "start": 591,
        "end": 619,
        "callee": {
          "type": "Identifier",
          "start": 591,
          "end": 600,
          "name": "hasZField",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 601,
            "end": 618,
            "name": "directUnionSingle",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 626,
      "end": 653,
      "expression": {
        "type": "CallExpression",
        "start": 626,
        "end": 653,
        "callee": {
          "type": "Identifier",
          "start": 626,
          "end": 635,
          "name": "hasZField",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 636,
            "end": 652,
            "name": "directUnionArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 660,
      "end": 683,
      "expression": {
        "type": "CallExpression",
        "start": 660,
        "end": 683,
        "callee": {
          "type": "Identifier",
          "start": 660,
          "end": 669,
          "name": "hasZField",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 670,
            "end": 682,
            "name": "nestedSingle",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 690,
      "end": 718,
      "expression": {
        "type": "CallExpression",
        "start": 690,
        "end": 718,
        "callee": {
          "type": "Identifier",
          "start": 690,
          "end": 699,
          "name": "hasZField",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 700,
            "end": 717,
            "name": "nestedUnionSingle",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 725,
      "end": 752,
      "expression": {
        "type": "CallExpression",
        "start": 725,
        "end": 752,
        "callee": {
          "type": "Identifier",
          "start": 725,
          "end": 734,
          "name": "hasZField",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 735,
            "end": 751,
            "name": "nestedUnionArray",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
