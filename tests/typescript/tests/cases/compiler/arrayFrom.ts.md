__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 106
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 112
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 114,
                "end": 120
              },
              "start": 112,
              "end": 120
            },
            "accessibility": null,
            "static": false,
            "start": 111,
            "end": 121
          }
        ],
        "start": 107,
        "end": 123
      },
      "declare": false,
      "start": 95,
      "end": 123
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 136
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 142
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 144,
                "end": 150
              },
              "start": 142,
              "end": 150
            },
            "accessibility": null,
            "static": false,
            "start": 141,
            "end": 151
          }
        ],
        "start": 137,
        "end": 153
      },
      "declare": false,
      "start": 125,
      "end": 153
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
            "name": "inputA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 170
                  },
                  "typeArguments": null,
                  "start": 169,
                  "end": 170
                },
                "start": 169,
                "end": 172
              },
              "start": 167,
              "end": 172
            },
            "start": 161,
            "end": 172
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 175,
            "end": 177
          },
          "definite": false,
          "start": 161,
          "end": 177
        }
      ],
      "declare": false,
      "start": 155,
      "end": 178
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
            "name": "inputB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 194
                  },
                  "typeArguments": null,
                  "start": 193,
                  "end": 194
                },
                "start": 193,
                "end": 196
              },
              "start": 191,
              "end": 196
            },
            "start": 185,
            "end": 196
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 199,
            "end": 201
          },
          "definite": false,
          "start": 185,
          "end": 201
        }
      ],
      "declare": false,
      "start": 179,
      "end": 202
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
            "name": "inputALike",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayLike",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 230
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
                        "start": 231,
                        "end": 232
                      },
                      "typeArguments": null,
                      "start": 231,
                      "end": 232
                    }
                  ],
                  "start": 230,
                  "end": 233
                },
                "start": 221,
                "end": 233
              },
              "start": 219,
              "end": 233
            },
            "start": 209,
            "end": 233
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 244
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 246,
                  "end": 247
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 238,
                "end": 247
              }
            ],
            "start": 236,
            "end": 249
          },
          "definite": false,
          "start": 209,
          "end": 249
        }
      ],
      "declare": false,
      "start": 203,
      "end": 250
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
            "name": "inputARand",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 267
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getEither",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 279
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputA",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 286
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputALike",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 298
              }
            ],
            "optional": false,
            "start": 270,
            "end": 299
          },
          "definite": false,
          "start": 257,
          "end": 299
        }
      ],
      "declare": false,
      "start": 251,
      "end": 300
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
            "name": "inputASet",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 316
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 326
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
                    "start": 327,
                    "end": 328
                  },
                  "typeArguments": null,
                  "start": 327,
                  "end": 328
                }
              ],
              "start": 326,
              "end": 329
            },
            "arguments": [],
            "start": 319,
            "end": 331
          },
          "definite": false,
          "start": 307,
          "end": 331
        }
      ],
      "declare": false,
      "start": 301,
      "end": 332
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 350
                  },
                  "typeArguments": null,
                  "start": 349,
                  "end": 350
                },
                "start": 349,
                "end": 352
              },
              "start": 347,
              "end": 352
            },
            "start": 340,
            "end": 352
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 360
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 365
              },
              "optional": false,
              "computed": false,
              "start": 355,
              "end": 365
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputA",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 372
              }
            ],
            "optional": false,
            "start": 355,
            "end": 373
          },
          "definite": false,
          "start": 340,
          "end": 373
        }
      ],
      "declare": false,
      "start": 334,
      "end": 374
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 391
                  },
                  "typeArguments": null,
                  "start": 390,
                  "end": 391
                },
                "start": 390,
                "end": 393
              },
              "start": 388,
              "end": 393
            },
            "start": 381,
            "end": 393
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 401
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 402,
                "end": 406
              },
              "optional": false,
              "computed": false,
              "start": 396,
              "end": 406
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inputA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 413
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 414,
                    "end": 420
                  },
                  "optional": false,
                  "computed": false,
                  "start": 407,
                  "end": 420
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 407,
                "end": 422
              }
            ],
            "optional": false,
            "start": 396,
            "end": 423
          },
          "definite": false,
          "start": 381,
          "end": 423
        }
      ],
      "declare": false,
      "start": 375,
      "end": 424
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
            "name": "result3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 441
                  },
                  "typeArguments": null,
                  "start": 440,
                  "end": 441
                },
                "start": 440,
                "end": 443
              },
              "start": 438,
              "end": 443
            },
            "start": 431,
            "end": 443
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 451
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 456
              },
              "optional": false,
              "computed": false,
              "start": 446,
              "end": 456
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inputA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 457,
                    "end": 463
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 470
                  },
                  "optional": false,
                  "computed": false,
                  "start": 457,
                  "end": 470
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 457,
                "end": 472
              }
            ],
            "optional": false,
            "start": 446,
            "end": 473
          },
          "definite": false,
          "start": 431,
          "end": 473
        }
      ],
      "declare": false,
      "start": 425,
      "end": 474
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
            "name": "result4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 506,
                    "end": 507
                  },
                  "typeArguments": null,
                  "start": 506,
                  "end": 507
                },
                "start": 506,
                "end": 509
              },
              "start": 504,
              "end": 509
            },
            "start": 497,
            "end": 509
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 512,
                "end": 517
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 522
              },
              "optional": false,
              "computed": false,
              "start": 512,
              "end": 522
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputB",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 529
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 534,
                          "end": 535
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 534,
                          "end": 535
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 534,
                        "end": 535
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 532,
                    "end": 537
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 540,
                      "end": 541
                    },
                    "typeArguments": null,
                    "start": 540,
                    "end": 541
                  },
                  "start": 538,
                  "end": 541
                },
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 548,
                        "end": 549
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 551,
                        "end": 552
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 548,
                      "end": 552
                    }
                  ],
                  "start": 546,
                  "end": 554
                },
                "id": null,
                "generator": false,
                "start": 531,
                "end": 555
              }
            ],
            "optional": false,
            "start": 512,
            "end": 556
          },
          "definite": false,
          "start": 497,
          "end": 556
        }
      ],
      "declare": false,
      "start": 491,
      "end": 557
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
            "name": "result5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 573,
                    "end": 574
                  },
                  "typeArguments": null,
                  "start": 573,
                  "end": 574
                },
                "start": 573,
                "end": 576
              },
              "start": 571,
              "end": 576
            },
            "start": 564,
            "end": 576
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 584
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 585,
                "end": 589
              },
              "optional": false,
              "computed": false,
              "start": 579,
              "end": 589
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputALike",
                "optional": false,
                "typeAnnotation": null,
                "start": 590,
                "end": 600
              }
            ],
            "optional": false,
            "start": 579,
            "end": 601
          },
          "definite": false,
          "start": 564,
          "end": 601
        }
      ],
      "declare": false,
      "start": 558,
      "end": 602
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
            "name": "result6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 618,
                    "end": 619
                  },
                  "typeArguments": null,
                  "start": 618,
                  "end": 619
                },
                "start": 618,
                "end": 621
              },
              "start": 616,
              "end": 621
            },
            "start": 609,
            "end": 621
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 629
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 634
              },
              "optional": false,
              "computed": false,
              "start": 624,
              "end": 634
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputALike",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 645
              }
            ],
            "optional": false,
            "start": 624,
            "end": 646
          },
          "definite": false,
          "start": 609,
          "end": 646
        }
      ],
      "declare": false,
      "start": 603,
      "end": 647
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
            "name": "result7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 679,
                    "end": 680
                  },
                  "typeArguments": null,
                  "start": 679,
                  "end": 680
                },
                "start": 679,
                "end": 682
              },
              "start": 677,
              "end": 682
            },
            "start": 670,
            "end": 682
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 690
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 691,
                "end": 695
              },
              "optional": false,
              "computed": false,
              "start": 685,
              "end": 695
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputALike",
                "optional": false,
                "typeAnnotation": null,
                "start": 696,
                "end": 706
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 711,
                          "end": 712
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 711,
                          "end": 712
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 711,
                        "end": 712
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 709,
                    "end": 714
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 717,
                      "end": 718
                    },
                    "typeArguments": null,
                    "start": 717,
                    "end": 718
                  },
                  "start": 715,
                  "end": 718
                },
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 725,
                        "end": 726
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 728,
                        "end": 729
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 725,
                      "end": 729
                    }
                  ],
                  "start": 723,
                  "end": 731
                },
                "id": null,
                "generator": false,
                "start": 708,
                "end": 732
              }
            ],
            "optional": false,
            "start": 685,
            "end": 733
          },
          "definite": false,
          "start": 670,
          "end": 733
        }
      ],
      "declare": false,
      "start": 664,
      "end": 734
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
            "name": "result8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 750,
                    "end": 751
                  },
                  "typeArguments": null,
                  "start": 750,
                  "end": 751
                },
                "start": 750,
                "end": 753
              },
              "start": 748,
              "end": 753
            },
            "start": 741,
            "end": 753
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 761
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 766
              },
              "optional": false,
              "computed": false,
              "start": 756,
              "end": 766
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputARand",
                "optional": false,
                "typeAnnotation": null,
                "start": 767,
                "end": 777
              }
            ],
            "optional": false,
            "start": 756,
            "end": 778
          },
          "definite": false,
          "start": 741,
          "end": 778
        }
      ],
      "declare": false,
      "start": 735,
      "end": 779
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
            "name": "result9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 795,
                    "end": 796
                  },
                  "typeArguments": null,
                  "start": 795,
                  "end": 796
                },
                "start": 795,
                "end": 798
              },
              "start": 793,
              "end": 798
            },
            "start": 786,
            "end": 798
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 801,
                "end": 806
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 807,
                "end": 811
              },
              "optional": false,
              "computed": false,
              "start": 801,
              "end": 811
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputARand",
                "optional": false,
                "typeAnnotation": null,
                "start": 812,
                "end": 822
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 827,
                          "end": 828
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 827,
                          "end": 828
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 827,
                        "end": 828
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 825,
                    "end": 830
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 833,
                      "end": 834
                    },
                    "typeArguments": null,
                    "start": 833,
                    "end": 834
                  },
                  "start": 831,
                  "end": 834
                },
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 841,
                        "end": 842
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 844,
                        "end": 845
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 841,
                      "end": 845
                    }
                  ],
                  "start": 839,
                  "end": 847
                },
                "id": null,
                "generator": false,
                "start": 824,
                "end": 848
              }
            ],
            "optional": false,
            "start": 801,
            "end": 849
          },
          "definite": false,
          "start": 786,
          "end": 849
        }
      ],
      "declare": false,
      "start": 780,
      "end": 850
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
            "name": "result10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 867,
                    "end": 868
                  },
                  "typeArguments": null,
                  "start": 867,
                  "end": 868
                },
                "start": 867,
                "end": 870
              },
              "start": 865,
              "end": 870
            },
            "start": 857,
            "end": 870
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 873,
                "end": 878
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 879,
                "end": 883
              },
              "optional": false,
              "computed": false,
              "start": 873,
              "end": 883
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 888,
                  "end": 891
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
                        "start": 892,
                        "end": 893
                      },
                      "typeArguments": null,
                      "start": 892,
                      "end": 893
                    }
                  ],
                  "start": 891,
                  "end": 894
                },
                "arguments": [],
                "start": 884,
                "end": 896
              }
            ],
            "optional": false,
            "start": 873,
            "end": 897
          },
          "definite": false,
          "start": 857,
          "end": 897
        }
      ],
      "declare": false,
      "start": 851,
      "end": 898
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
            "name": "result11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 915,
                    "end": 916
                  },
                  "typeArguments": null,
                  "start": 915,
                  "end": 916
                },
                "start": 915,
                "end": 918
              },
              "start": 913,
              "end": 918
            },
            "start": 905,
            "end": 918
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 921,
                "end": 926
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 927,
                "end": 931
              },
              "optional": false,
              "computed": false,
              "start": 921,
              "end": 931
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "inputASet",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 941
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 946,
                          "end": 947
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 946,
                          "end": 947
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 946,
                        "end": 947
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 944,
                    "end": 949
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 952,
                      "end": 953
                    },
                    "typeArguments": null,
                    "start": 952,
                    "end": 953
                  },
                  "start": 950,
                  "end": 953
                },
                "body": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 960,
                        "end": 961
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 963,
                        "end": 964
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 960,
                      "end": 964
                    }
                  ],
                  "start": 958,
                  "end": 966
                },
                "id": null,
                "generator": false,
                "start": 943,
                "end": 967
              }
            ],
            "optional": false,
            "start": 921,
            "end": 968
          },
          "definite": false,
          "start": 905,
          "end": 968
        }
      ],
      "declare": false,
      "start": 899,
      "end": 969
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getEither",
        "optional": false,
        "typeAnnotation": null,
        "start": 1173,
        "end": 1182
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1183,
              "end": 1184
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1183,
            "end": 1184
          }
        ],
        "start": 1182,
        "end": 1185
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "in1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Iterable",
                "optional": false,
                "typeAnnotation": null,
                "start": 1192,
                "end": 1200
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1201,
                      "end": 1202
                    },
                    "typeArguments": null,
                    "start": 1201,
                    "end": 1202
                  }
                ],
                "start": 1200,
                "end": 1203
              },
              "start": 1192,
              "end": 1203
            },
            "start": 1190,
            "end": 1203
          },
          "start": 1187,
          "end": 1203
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "in2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArrayLike",
                "optional": false,
                "typeAnnotation": null,
                "start": 1210,
                "end": 1219
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1220,
                      "end": 1221
                    },
                    "typeArguments": null,
                    "start": 1220,
                    "end": 1221
                  }
                ],
                "start": 1219,
                "end": 1222
              },
              "start": 1210,
              "end": 1222
            },
            "start": 1208,
            "end": 1222
          },
          "start": 1205,
          "end": 1222
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1235,
                      "end": 1239
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1240,
                      "end": 1246
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1235,
                    "end": 1246
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1235,
                  "end": 1248
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "value": 0.5,
                  "raw": "0.5",
                  "start": 1251,
                  "end": 1254
                },
                "start": 1235,
                "end": 1254
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "in1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1257,
                "end": 1260
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "in2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1263,
                "end": 1266
              },
              "start": 1235,
              "end": 1266
            },
            "start": 1228,
            "end": 1267
          }
        ],
        "start": 1224,
        "end": 1269
      },
      "expression": false,
      "start": 1164,
      "end": 1269
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 95,
  "end": 1269
}
```
