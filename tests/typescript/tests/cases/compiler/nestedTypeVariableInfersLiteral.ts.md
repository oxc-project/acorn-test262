__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "direct",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 79
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 90,
              "end": 96
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 96
          }
        ],
        "start": 79,
        "end": 97
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 102
                  },
                  "typeArguments": null,
                  "start": 101,
                  "end": 102
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 105,
                      "end": 106
                    },
                    "typeArguments": null,
                    "start": 105,
                    "end": 106
                  },
                  "start": 105,
                  "end": 108
                }
              ],
              "start": 101,
              "end": 108
            },
            "start": 99,
            "end": 108
          },
          "start": 98,
          "end": 108
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 117
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 119
                },
                "typeArguments": null,
                "start": 118,
                "end": 119
              },
              {
                "type": "TSStringKeyword",
                "start": 121,
                "end": 127
              }
            ],
            "start": 117,
            "end": 128
          },
          "start": 111,
          "end": 128
        },
        "start": 109,
        "end": 128
      },
      "body": null,
      "expression": false,
      "start": 56,
      "end": 128
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nested",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 152
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 154
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 163,
              "end": 169
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 153,
            "end": 169
          }
        ],
        "start": 152,
        "end": 170
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fields",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 182
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 184,
                        "end": 185
                      },
                      "typeArguments": null,
                      "start": 184,
                      "end": 185
                    },
                    "start": 182,
                    "end": 185
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 176,
                  "end": 185
                }
              ],
              "start": 174,
              "end": 187
            },
            "start": 172,
            "end": 187
          },
          "start": 171,
          "end": 187
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 196
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 198
                },
                "typeArguments": null,
                "start": 197,
                "end": 198
              },
              {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              }
            ],
            "start": 196,
            "end": 207
          },
          "start": 190,
          "end": 207
        },
        "start": 188,
        "end": 207
      },
      "body": null,
      "expression": false,
      "start": 129,
      "end": 207
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nestedUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 236
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 238
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 247,
              "end": 253
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 237,
            "end": 253
          }
        ],
        "start": 236,
        "end": 254
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fields",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 260,
                    "end": 266
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 268,
                            "end": 269
                          },
                          "typeArguments": null,
                          "start": 268,
                          "end": 269
                        },
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 272,
                              "end": 273
                            },
                            "typeArguments": null,
                            "start": 272,
                            "end": 273
                          },
                          "start": 272,
                          "end": 275
                        }
                      ],
                      "start": 268,
                      "end": 275
                    },
                    "start": 266,
                    "end": 275
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 260,
                  "end": 275
                }
              ],
              "start": 258,
              "end": 277
            },
            "start": 256,
            "end": 277
          },
          "start": 255,
          "end": 277
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 286
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 288
                },
                "typeArguments": null,
                "start": 287,
                "end": 288
              },
              {
                "type": "TSStringKeyword",
                "start": 290,
                "end": 296
              }
            ],
            "start": 286,
            "end": 297
          },
          "start": 280,
          "end": 297
        },
        "start": 278,
        "end": 297
      },
      "body": null,
      "expression": false,
      "start": 208,
      "end": 297
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "directUnionSingle",
            "optional": false,
            "typeAnnotation": null,
            "start": 305,
            "end": 322
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "direct",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 331
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "z",
                "raw": "\"z\"",
                "start": 332,
                "end": 335
              }
            ],
            "optional": false,
            "start": 325,
            "end": 336
          },
          "definite": false,
          "start": 305,
          "end": 336
        }
      ],
      "declare": false,
      "start": 299,
      "end": 336
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "directUnionArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 359
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "direct",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 368
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "z",
                    "raw": "\"z\"",
                    "start": 370,
                    "end": 373
                  },
                  {
                    "type": "Literal",
                    "value": "y",
                    "raw": "\"y\"",
                    "start": 375,
                    "end": 378
                  }
                ],
                "start": 369,
                "end": 379
              }
            ],
            "optional": false,
            "start": 362,
            "end": 380
          },
          "definite": false,
          "start": 343,
          "end": 380
        }
      ],
      "declare": false,
      "start": 337,
      "end": 380
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nestedSingle",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 399
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 408
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 416
                    },
                    "value": {
                      "type": "Literal",
                      "value": "z",
                      "raw": "\"z\"",
                      "start": 418,
                      "end": 421
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 410,
                    "end": 421
                  }
                ],
                "start": 409,
                "end": 422
              }
            ],
            "optional": false,
            "start": 402,
            "end": 423
          },
          "definite": false,
          "start": 387,
          "end": 423
        }
      ],
      "declare": false,
      "start": 381,
      "end": 423
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nestedUnionSingle",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 447
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nestedUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 461
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 463,
                      "end": 469
                    },
                    "value": {
                      "type": "Literal",
                      "value": "z",
                      "raw": "\"z\"",
                      "start": 471,
                      "end": 474
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 463,
                    "end": 474
                  }
                ],
                "start": 462,
                "end": 475
              }
            ],
            "optional": false,
            "start": 450,
            "end": 476
          },
          "definite": false,
          "start": 430,
          "end": 476
        }
      ],
      "declare": false,
      "start": 424,
      "end": 476
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nestedUnionArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 499
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nestedUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 502,
              "end": 513
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 521
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "z",
                          "raw": "\"z\"",
                          "start": 524,
                          "end": 527
                        },
                        {
                          "type": "Literal",
                          "value": "y",
                          "raw": "\"y\"",
                          "start": 529,
                          "end": 532
                        }
                      ],
                      "start": 523,
                      "end": 533
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 515,
                    "end": 533
                  }
                ],
                "start": 514,
                "end": 534
              }
            ],
            "optional": false,
            "start": 502,
            "end": 535
          },
          "definite": false,
          "start": 483,
          "end": 535
        }
      ],
      "declare": false,
      "start": 477,
      "end": 535
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hasZField",
        "optional": false,
        "typeAnnotation": null,
        "start": 554,
        "end": 563
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 571,
                    "end": 572
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 574,
                      "end": 580
                    },
                    "start": 572,
                    "end": 580
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 571,
                  "end": 580
                }
              ],
              "start": 569,
              "end": 582
            },
            "start": 567,
            "end": 582
          },
          "start": 564,
          "end": 582
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 585,
          "end": 589
        },
        "start": 583,
        "end": 589
      },
      "body": null,
      "expression": false,
      "start": 537,
      "end": 589
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasZField",
          "optional": false,
          "typeAnnotation": null,
          "start": 591,
          "end": 600
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "directUnionSingle",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 618
          }
        ],
        "optional": false,
        "start": 591,
        "end": 619
      },
      "directive": null,
      "start": 591,
      "end": 619
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasZField",
          "optional": false,
          "typeAnnotation": null,
          "start": 626,
          "end": 635
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "directUnionArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 652
          }
        ],
        "optional": false,
        "start": 626,
        "end": 653
      },
      "directive": null,
      "start": 626,
      "end": 653
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasZField",
          "optional": false,
          "typeAnnotation": null,
          "start": 660,
          "end": 669
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nestedSingle",
            "optional": false,
            "typeAnnotation": null,
            "start": 670,
            "end": 682
          }
        ],
        "optional": false,
        "start": 660,
        "end": 683
      },
      "directive": null,
      "start": 660,
      "end": 683
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasZField",
          "optional": false,
          "typeAnnotation": null,
          "start": 690,
          "end": 699
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nestedUnionSingle",
            "optional": false,
            "typeAnnotation": null,
            "start": 700,
            "end": 717
          }
        ],
        "optional": false,
        "start": 690,
        "end": 718
      },
      "directive": null,
      "start": 690,
      "end": 718
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hasZField",
          "optional": false,
          "typeAnnotation": null,
          "start": 725,
          "end": 734
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nestedUnionArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 735,
            "end": 751
          }
        ],
        "optional": false,
        "start": 725,
        "end": 752
      },
      "directive": null,
      "start": 725,
      "end": 752
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 758
}
```
