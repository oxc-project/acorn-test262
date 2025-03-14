nestedTypeVariableInfersLiteral.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 79,
        "decorators": [],
        "name": "direct",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 98,
          "end": 108,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
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
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 109,
        "end": 128,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 111,
          "end": 128,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 121,
                "end": 127
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 111,
            "end": 117,
            "decorators": [],
            "name": "Record",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 79,
        "end": 97,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 96,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 90,
              "end": 96
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 129,
      "end": 207,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 152,
        "decorators": [],
        "name": "nested",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 171,
          "end": 187,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                  "key": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 182,
                    "decorators": [],
                    "name": "fields",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 188,
        "end": 207,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 190,
          "end": 207,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 190,
            "end": 196,
            "decorators": [],
            "name": "Record",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 152,
        "end": 170,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 153,
            "end": 169,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 163,
              "end": 169
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 208,
      "end": 297,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 236,
        "decorators": [],
        "name": "nestedUnion",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 255,
          "end": 277,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                  "key": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 266,
                    "decorators": [],
                    "name": "fields",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
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
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 278,
        "end": 297,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 280,
          "end": 297,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 290,
                "end": 296
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 280,
            "end": 286,
            "decorators": [],
            "name": "Record",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 236,
        "end": 254,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 237,
            "end": 253,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 247,
              "end": 253
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 322,
            "decorators": [],
            "name": "directUnionSingle",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 325,
            "end": 336,
            "arguments": [
              {
                "type": "Literal",
                "start": 332,
                "end": 335,
                "raw": "\"z\"",
                "value": "z"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 325,
              "end": 331,
              "decorators": [],
              "name": "direct",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 359,
            "decorators": [],
            "name": "directUnionArray",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 362,
            "end": 380,
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
                    "raw": "\"z\"",
                    "value": "z"
                  },
                  {
                    "type": "Literal",
                    "start": 375,
                    "end": 378,
                    "raw": "\"y\"",
                    "value": "y"
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 362,
              "end": 368,
              "decorators": [],
              "name": "direct",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 399,
            "decorators": [],
            "name": "nestedSingle",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 402,
            "end": 423,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 416,
                      "decorators": [],
                      "name": "fields",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 418,
                      "end": 421,
                      "raw": "\"z\"",
                      "value": "z"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 402,
              "end": 408,
              "decorators": [],
              "name": "nested",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 447,
            "decorators": [],
            "name": "nestedUnionSingle",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 450,
            "end": 476,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 463,
                      "end": 469,
                      "decorators": [],
                      "name": "fields",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 471,
                      "end": 474,
                      "raw": "\"z\"",
                      "value": "z"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 450,
              "end": 461,
              "decorators": [],
              "name": "nestedUnion",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 499,
            "decorators": [],
            "name": "nestedUnionArray",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 502,
            "end": 535,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 515,
                      "end": 521,
                      "decorators": [],
                      "name": "fields",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "start": 523,
                      "end": 533,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 524,
                          "end": 527,
                          "raw": "\"z\"",
                          "value": "z"
                        },
                        {
                          "type": "Literal",
                          "start": 529,
                          "end": 532,
                          "raw": "\"y\"",
                          "value": "y"
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 502,
              "end": 513,
              "decorators": [],
              "name": "nestedUnion",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 537,
      "end": 589,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 554,
        "end": 563,
        "decorators": [],
        "name": "hasZField",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 564,
          "end": 582,
          "decorators": [],
          "name": "arg",
          "optional": false,
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
                  "key": {
                    "type": "Identifier",
                    "start": 571,
                    "end": 572,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 572,
                    "end": 580,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 574,
                      "end": 580
                    }
                  }
                }
              ]
            }
          }
        }
      ],
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
        "arguments": [
          {
            "type": "Identifier",
            "start": 601,
            "end": 618,
            "decorators": [],
            "name": "directUnionSingle",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 591,
          "end": 600,
          "decorators": [],
          "name": "hasZField",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 626,
      "end": 653,
      "expression": {
        "type": "CallExpression",
        "start": 626,
        "end": 653,
        "arguments": [
          {
            "type": "Identifier",
            "start": 636,
            "end": 652,
            "decorators": [],
            "name": "directUnionArray",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 626,
          "end": 635,
          "decorators": [],
          "name": "hasZField",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 660,
      "end": 683,
      "expression": {
        "type": "CallExpression",
        "start": 660,
        "end": 683,
        "arguments": [
          {
            "type": "Identifier",
            "start": 670,
            "end": 682,
            "decorators": [],
            "name": "nestedSingle",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 660,
          "end": 669,
          "decorators": [],
          "name": "hasZField",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 690,
      "end": 718,
      "expression": {
        "type": "CallExpression",
        "start": 690,
        "end": 718,
        "arguments": [
          {
            "type": "Identifier",
            "start": 700,
            "end": 717,
            "decorators": [],
            "name": "nestedUnionSingle",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 690,
          "end": 699,
          "decorators": [],
          "name": "hasZField",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 725,
      "end": 752,
      "expression": {
        "type": "CallExpression",
        "start": 725,
        "end": 752,
        "arguments": [
          {
            "type": "Identifier",
            "start": 735,
            "end": 751,
            "decorators": [],
            "name": "nestedUnionArray",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 725,
          "end": 734,
          "decorators": [],
          "name": "hasZField",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
