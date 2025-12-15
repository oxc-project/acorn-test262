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
        "name": "Options",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Context",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 18,
            "end": 25
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 31
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 31
          }
        ],
        "start": 17,
        "end": 32
      },
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
              "name": "context",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 44
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 53
                },
                "typeArguments": null,
                "start": 46,
                "end": 53
              },
              "start": 44,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 54
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "produce",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 64
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 78
                    },
                    "typeArguments": null,
                    "start": 71,
                    "end": 78
                  },
                  "start": 69,
                  "end": 78
                },
                "start": 65,
                "end": 78
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 85
                },
                "typeArguments": null,
                "start": 81,
                "end": 85
              },
              "start": 79,
              "end": 85
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 57,
            "end": 86
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "consume",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 96
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 110
                    },
                    "typeArguments": null,
                    "start": 103,
                    "end": 110
                  },
                  "start": 101,
                  "end": 110
                },
                "start": 97,
                "end": 110
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 118,
                      "end": 122
                    },
                    "typeArguments": null,
                    "start": 118,
                    "end": 122
                  },
                  "start": 116,
                  "end": 122
                },
                "start": 112,
                "end": 122
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 125,
                "end": 129
              },
              "start": 123,
              "end": 129
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 89,
            "end": 130
          }
        ],
        "start": 33,
        "end": 132
      },
      "declare": false,
      "start": 0,
      "end": 132
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defineOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 164
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
              "name": "Context",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 172
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 165,
            "end": 172
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 178
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 174,
            "end": 178
          }
        ],
        "start": 164,
        "end": 179
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Options",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 199
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 200,
                      "end": 207
                    },
                    "typeArguments": null,
                    "start": 200,
                    "end": 207
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 213
                    },
                    "typeArguments": null,
                    "start": 209,
                    "end": 213
                  }
                ],
                "start": 199,
                "end": 214
              },
              "start": 192,
              "end": 214
            },
            "start": 190,
            "end": 214
          },
          "start": 183,
          "end": 214
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Context",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 227
              },
              "typeArguments": null,
              "start": 220,
              "end": 227
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Data",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 233
              },
              "typeArguments": null,
              "start": 229,
              "end": 233
            }
          ],
          "start": 219,
          "end": 234
        },
        "start": 217,
        "end": 234
      },
      "body": null,
      "expression": false,
      "start": 134,
      "end": 235
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
            "typeAnnotation": null,
            "start": 243,
            "end": 250
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 266
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 278
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 282,
                            "end": 285
                          },
                          "value": {
                            "type": "Literal",
                            "value": "A",
                            "raw": "\"A\"",
                            "start": 287,
                            "end": 290
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 282,
                          "end": 290
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 292,
                            "end": 297
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 299,
                            "end": 300
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 292,
                          "end": 300
                        }
                      ],
                      "start": 280,
                      "end": 302
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 271,
                    "end": 302
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 313
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 319
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 321,
                        "end": 323
                      },
                      "expression": false,
                      "start": 313,
                      "end": 323
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 306,
                    "end": 323
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 327,
                      "end": 334
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 42,
                              "raw": "42",
                              "start": 350,
                              "end": 352
                            },
                            "start": 343,
                            "end": 353
                          }
                        ],
                        "start": 337,
                        "end": 357
                      },
                      "expression": false,
                      "start": 334,
                      "end": 357
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 327,
                    "end": 357
                  }
                ],
                "start": 267,
                "end": 360
              }
            ],
            "optional": false,
            "start": 253,
            "end": 361
          },
          "definite": false,
          "start": 243,
          "end": 361
        }
      ],
      "declare": false,
      "start": 237,
      "end": 362
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
            "typeAnnotation": null,
            "start": 370,
            "end": 377
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 393
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 405
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 409,
                            "end": 412
                          },
                          "value": {
                            "type": "Literal",
                            "value": "B",
                            "raw": "\"B\"",
                            "start": 414,
                            "end": 417
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 409,
                          "end": 417
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 419,
                            "end": 424
                          },
                          "value": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 426,
                            "end": 427
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 419,
                          "end": 427
                        }
                      ],
                      "start": 407,
                      "end": 429
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 398,
                    "end": 429
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 440
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 441,
                          "end": 446
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 448,
                        "end": 450
                      },
                      "expression": false,
                      "start": 440,
                      "end": 450
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 433,
                    "end": 450
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 461
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 477,
                                "end": 481
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 482,
                                "end": 487
                              },
                              "optional": false,
                              "computed": false,
                              "start": 477,
                              "end": 487
                            },
                            "start": 470,
                            "end": 488
                          }
                        ],
                        "start": 464,
                        "end": 492
                      },
                      "expression": false,
                      "start": 461,
                      "end": 492
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 454,
                    "end": 492
                  }
                ],
                "start": 394,
                "end": 495
              }
            ],
            "optional": false,
            "start": 380,
            "end": 496
          },
          "definite": false,
          "start": 370,
          "end": 496
        }
      ],
      "declare": false,
      "start": 364,
      "end": 497
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
            "typeAnnotation": null,
            "start": 505,
            "end": 512
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 528
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 533,
                      "end": 540
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 544,
                            "end": 547
                          },
                          "value": {
                            "type": "Literal",
                            "value": "C",
                            "raw": "\"C\"",
                            "start": 549,
                            "end": 552
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 544,
                          "end": 552
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 554,
                            "end": 559
                          },
                          "value": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 561,
                            "end": 562
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 554,
                          "end": 562
                        }
                      ],
                      "start": 542,
                      "end": 564
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 533,
                    "end": 564
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 568,
                      "end": 575
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 576,
                          "end": 581
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 583,
                        "end": 585
                      },
                      "expression": false,
                      "start": 575,
                      "end": 585
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 568,
                    "end": 585
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 589,
                      "end": 596
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 123,
                        "raw": "123",
                        "start": 604,
                        "end": 607
                      },
                      "id": null,
                      "generator": false,
                      "start": 598,
                      "end": 607
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 589,
                    "end": 607
                  }
                ],
                "start": 529,
                "end": 610
              }
            ],
            "optional": false,
            "start": 515,
            "end": 611
          },
          "definite": false,
          "start": 505,
          "end": 611
        }
      ],
      "declare": false,
      "start": 499,
      "end": 612
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
            "typeAnnotation": null,
            "start": 620,
            "end": 627
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 643
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 648,
                      "end": 655
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 659,
                            "end": 662
                          },
                          "value": {
                            "type": "Literal",
                            "value": "D",
                            "raw": "\"D\"",
                            "start": 664,
                            "end": 667
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 659,
                          "end": 667
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 669,
                            "end": 674
                          },
                          "value": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 676,
                            "end": 677
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 669,
                          "end": 677
                        }
                      ],
                      "start": 657,
                      "end": 679
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 648,
                    "end": 679
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 683,
                      "end": 690
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 691,
                          "end": 696
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 698,
                        "end": 700
                      },
                      "expression": false,
                      "start": 690,
                      "end": 700
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 683,
                    "end": 700
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 704,
                      "end": 711
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ClassDeclaration",
                            "decorators": [],
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Local",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 726,
                              "end": 731
                            },
                            "typeParameters": null,
                            "superClass": null,
                            "superTypeArguments": null,
                            "implements": [],
                            "body": {
                              "type": "ClassBody",
                              "body": [
                                {
                                  "type": "PropertyDefinition",
                                  "decorators": [],
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 740,
                                    "end": 745
                                  },
                                  "typeAnnotation": null,
                                  "value": {
                                    "type": "Literal",
                                    "value": "foo",
                                    "raw": "'foo'",
                                    "start": 748,
                                    "end": 753
                                  },
                                  "computed": false,
                                  "static": false,
                                  "declare": false,
                                  "override": false,
                                  "optional": false,
                                  "definite": false,
                                  "readonly": false,
                                  "accessibility": null,
                                  "start": 740,
                                  "end": 754
                                },
                                {
                                  "type": "MethodDefinition",
                                  "decorators": [],
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "get",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 761,
                                    "end": 764
                                  },
                                  "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "generator": false,
                                    "async": false,
                                    "declare": false,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": null,
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "argument": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 784,
                                              "end": 788
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "value",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 789,
                                              "end": 794
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 784,
                                            "end": 794
                                          },
                                          "start": 777,
                                          "end": 795
                                        }
                                      ],
                                      "start": 767,
                                      "end": 803
                                    },
                                    "expression": false,
                                    "start": 764,
                                    "end": 803
                                  },
                                  "kind": "method",
                                  "computed": false,
                                  "static": false,
                                  "override": false,
                                  "optional": false,
                                  "accessibility": null,
                                  "start": 761,
                                  "end": 803
                                }
                              ],
                              "start": 732,
                              "end": 809
                            },
                            "abstract": false,
                            "declare": false,
                            "start": 720,
                            "end": 809
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Local",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 825,
                                    "end": 830
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 821,
                                  "end": 832
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "get",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 833,
                                  "end": 836
                                },
                                "optional": false,
                                "computed": false,
                                "start": 821,
                                "end": 836
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 821,
                              "end": 838
                            },
                            "start": 814,
                            "end": 839
                          },
                          {
                            "type": "EmptyStatement",
                            "start": 839,
                            "end": 840
                          }
                        ],
                        "start": 714,
                        "end": 844
                      },
                      "expression": false,
                      "start": 711,
                      "end": 844
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 704,
                    "end": 844
                  }
                ],
                "start": 644,
                "end": 847
              }
            ],
            "optional": false,
            "start": 630,
            "end": 848
          },
          "definite": false,
          "start": 620,
          "end": 848
        }
      ],
      "declare": false,
      "start": 614,
      "end": 849
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
            "typeAnnotation": null,
            "start": 857,
            "end": 864
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 867,
              "end": 880
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 885,
                      "end": 892
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 896,
                            "end": 899
                          },
                          "value": {
                            "type": "Literal",
                            "value": "E",
                            "raw": "\"E\"",
                            "start": 901,
                            "end": 904
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 896,
                          "end": 904
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 906,
                            "end": 911
                          },
                          "value": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "start": 913,
                            "end": 914
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 906,
                          "end": 914
                        }
                      ],
                      "start": 894,
                      "end": 916
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 885,
                    "end": 916
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 920,
                      "end": 927
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 928,
                          "end": 933
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 935,
                        "end": 937
                      },
                      "expression": false,
                      "start": 927,
                      "end": 937
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 920,
                    "end": 937
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 941,
                      "end": 948
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "FunctionDeclaration",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "inner",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 966,
                              "end": 971
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "ThisExpression",
                                    "start": 989,
                                    "end": 993
                                  },
                                  "start": 982,
                                  "end": 994
                                }
                              ],
                              "start": 974,
                              "end": 1000
                            },
                            "expression": false,
                            "start": 957,
                            "end": 1000
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inner",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1012,
                                "end": 1017
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1012,
                              "end": 1019
                            },
                            "start": 1005,
                            "end": 1020
                          }
                        ],
                        "start": 951,
                        "end": 1024
                      },
                      "expression": false,
                      "start": 948,
                      "end": 1024
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 941,
                    "end": 1024
                  }
                ],
                "start": 881,
                "end": 1027
              }
            ],
            "optional": false,
            "start": 867,
            "end": 1028
          },
          "definite": false,
          "start": 857,
          "end": 1028
        }
      ],
      "declare": false,
      "start": 851,
      "end": 1029
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
            "typeAnnotation": null,
            "start": 1037,
            "end": 1044
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1047,
              "end": 1060
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1065,
                      "end": 1072
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1076,
                            "end": 1079
                          },
                          "value": {
                            "type": "Literal",
                            "value": "F",
                            "raw": "\"F\"",
                            "start": 1081,
                            "end": 1084
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1076,
                          "end": 1084
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1086,
                            "end": 1091
                          },
                          "value": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6",
                            "start": 1093,
                            "end": 1094
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1086,
                          "end": 1094
                        }
                      ],
                      "start": 1074,
                      "end": 1096
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1065,
                    "end": 1096
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1100,
                      "end": 1107
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1108,
                          "end": 1113
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1115,
                        "end": 1117
                      },
                      "expression": false,
                      "start": 1107,
                      "end": 1117
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1100,
                    "end": 1117
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1121,
                      "end": 1128
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arrow",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1143,
                                  "end": 1148
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1157,
                                      "end": 1161
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1162,
                                      "end": 1167
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1157,
                                    "end": 1167
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 1151,
                                  "end": 1167
                                },
                                "definite": false,
                                "start": 1143,
                                "end": 1167
                              }
                            ],
                            "declare": false,
                            "start": 1137,
                            "end": 1168
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arrow",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1180,
                                "end": 1185
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1180,
                              "end": 1187
                            },
                            "start": 1173,
                            "end": 1188
                          }
                        ],
                        "start": 1131,
                        "end": 1192
                      },
                      "expression": false,
                      "start": 1128,
                      "end": 1192
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1121,
                    "end": 1192
                  }
                ],
                "start": 1061,
                "end": 1195
              }
            ],
            "optional": false,
            "start": 1047,
            "end": 1196
          },
          "definite": false,
          "start": 1037,
          "end": 1196
        }
      ],
      "declare": false,
      "start": 1031,
      "end": 1197
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
            "typeAnnotation": null,
            "start": 1205,
            "end": 1212
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1215,
              "end": 1228
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1233,
                      "end": 1240
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1244,
                            "end": 1247
                          },
                          "value": {
                            "type": "Literal",
                            "value": "G",
                            "raw": "\"G\"",
                            "start": 1249,
                            "end": 1252
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1244,
                          "end": 1252
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1254,
                            "end": 1259
                          },
                          "value": {
                            "type": "Literal",
                            "value": 7,
                            "raw": "7",
                            "start": 1261,
                            "end": 1262
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1254,
                          "end": 1262
                        }
                      ],
                      "start": 1242,
                      "end": 1264
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1233,
                    "end": 1264
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1268,
                      "end": 1275
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1276,
                          "end": 1281
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1283,
                        "end": 1285
                      },
                      "expression": false,
                      "start": 1275,
                      "end": 1285
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1268,
                    "end": 1285
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1289,
                      "end": 1296
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "self",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1311,
                                  "end": 1315
                                },
                                "init": {
                                  "type": "ThisExpression",
                                  "start": 1318,
                                  "end": 1322
                                },
                                "definite": false,
                                "start": 1311,
                                "end": 1322
                              }
                            ],
                            "declare": false,
                            "start": 1305,
                            "end": 1323
                          },
                          {
                            "type": "FunctionDeclaration",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "inner",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1337,
                              "end": 1342
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "self",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1360,
                                      "end": 1364
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1365,
                                      "end": 1370
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1360,
                                    "end": 1370
                                  },
                                  "start": 1353,
                                  "end": 1371
                                }
                              ],
                              "start": 1345,
                              "end": 1377
                            },
                            "expression": false,
                            "start": 1328,
                            "end": 1377
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inner",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1389,
                                "end": 1394
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1389,
                              "end": 1396
                            },
                            "start": 1382,
                            "end": 1397
                          }
                        ],
                        "start": 1299,
                        "end": 1401
                      },
                      "expression": false,
                      "start": 1296,
                      "end": 1401
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1289,
                    "end": 1401
                  }
                ],
                "start": 1229,
                "end": 1404
              }
            ],
            "optional": false,
            "start": 1215,
            "end": 1405
          },
          "definite": false,
          "start": 1205,
          "end": 1405
        }
      ],
      "declare": false,
      "start": 1199,
      "end": 1406
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
            "typeAnnotation": null,
            "start": 1414,
            "end": 1421
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1424,
              "end": 1437
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1442,
                      "end": 1449
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1453,
                            "end": 1456
                          },
                          "value": {
                            "type": "Literal",
                            "value": "H",
                            "raw": "\"H\"",
                            "start": 1458,
                            "end": 1461
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1453,
                          "end": 1461
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1463,
                            "end": 1468
                          },
                          "value": {
                            "type": "Literal",
                            "value": 8,
                            "raw": "8",
                            "start": 1470,
                            "end": 1471
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1463,
                          "end": 1471
                        }
                      ],
                      "start": 1451,
                      "end": 1473
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1442,
                    "end": 1473
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1477,
                      "end": 1484
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1485,
                          "end": 1490
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1492,
                        "end": 1494
                      },
                      "expression": false,
                      "start": 1484,
                      "end": 1494
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1477,
                    "end": 1494
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1498,
                      "end": 1505
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ThisExpression",
                              "start": 1526,
                              "end": 1530
                            },
                            "start": 1519,
                            "end": 1531
                          }
                        ],
                        "start": 1513,
                        "end": 1535
                      },
                      "id": null,
                      "generator": false,
                      "start": 1507,
                      "end": 1535
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1498,
                    "end": 1535
                  }
                ],
                "start": 1438,
                "end": 1538
              }
            ],
            "optional": false,
            "start": 1424,
            "end": 1539
          },
          "definite": false,
          "start": 1414,
          "end": 1539
        }
      ],
      "declare": false,
      "start": 1408,
      "end": 1540
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
            "typeAnnotation": null,
            "start": 1548,
            "end": 1555
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1558,
              "end": 1571
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1576,
                      "end": 1583
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1587,
                            "end": 1590
                          },
                          "value": {
                            "type": "Literal",
                            "value": "I",
                            "raw": "\"I\"",
                            "start": 1592,
                            "end": 1595
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1587,
                          "end": 1595
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1597,
                            "end": 1602
                          },
                          "value": {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 1604,
                            "end": 1605
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1597,
                          "end": 1605
                        }
                      ],
                      "start": 1585,
                      "end": 1607
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1576,
                    "end": 1607
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1611,
                      "end": 1618
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1619,
                          "end": 1624
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1626,
                        "end": 1628
                      },
                      "expression": false,
                      "start": 1618,
                      "end": 1628
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1611,
                    "end": 1628
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1632,
                      "end": 1639
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1654,
                                  "end": 1657
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
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1668,
                                        "end": 1673
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": "foo",
                                        "raw": "'foo'",
                                        "start": 1675,
                                        "end": 1680
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1668,
                                      "end": 1680
                                    },
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "get",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1688,
                                        "end": 1691
                                      },
                                      "value": {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "generator": false,
                                        "async": false,
                                        "declare": false,
                                        "typeParameters": null,
                                        "params": [],
                                        "returnType": null,
                                        "body": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "ReturnStatement",
                                              "argument": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "ThisExpression",
                                                  "start": 1711,
                                                  "end": 1715
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "value",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1716,
                                                  "end": 1721
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 1711,
                                                "end": 1721
                                              },
                                              "start": 1704,
                                              "end": 1722
                                            }
                                          ],
                                          "start": 1694,
                                          "end": 1730
                                        },
                                        "expression": false,
                                        "start": 1691,
                                        "end": 1730
                                      },
                                      "method": true,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1688,
                                      "end": 1730
                                    }
                                  ],
                                  "start": 1660,
                                  "end": 1737
                                },
                                "definite": false,
                                "start": 1654,
                                "end": 1737
                              }
                            ],
                            "declare": false,
                            "start": 1648,
                            "end": 1738
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1750,
                                  "end": 1753
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "get",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1754,
                                  "end": 1757
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1750,
                                "end": 1757
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1750,
                              "end": 1759
                            },
                            "start": 1743,
                            "end": 1760
                          }
                        ],
                        "start": 1642,
                        "end": 1764
                      },
                      "expression": false,
                      "start": 1639,
                      "end": 1764
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1632,
                    "end": 1764
                  }
                ],
                "start": 1572,
                "end": 1767
              }
            ],
            "optional": false,
            "start": 1558,
            "end": 1768
          },
          "definite": false,
          "start": 1548,
          "end": 1768
        }
      ],
      "declare": false,
      "start": 1542,
      "end": 1769
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
            "typeAnnotation": null,
            "start": 1777,
            "end": 1785
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1788,
              "end": 1801
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1806,
                      "end": 1813
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1817,
                            "end": 1820
                          },
                          "value": {
                            "type": "Literal",
                            "value": "I",
                            "raw": "\"I\"",
                            "start": 1822,
                            "end": 1825
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1817,
                          "end": 1825
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1827,
                            "end": 1832
                          },
                          "value": {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 1834,
                            "end": 1835
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1827,
                          "end": 1835
                        }
                      ],
                      "start": 1815,
                      "end": 1837
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1806,
                    "end": 1837
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1841,
                      "end": 1848
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1849,
                          "end": 1854
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1856,
                        "end": 1858
                      },
                      "expression": false,
                      "start": 1848,
                      "end": 1858
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1841,
                    "end": 1858
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1862,
                      "end": 1869
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "TSInterfaceDeclaration",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1888,
                              "end": 1891
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
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1902,
                                    "end": 1906
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSThisType",
                                      "start": 1908,
                                      "end": 1912
                                    },
                                    "start": 1906,
                                    "end": 1912
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 1902,
                                  "end": 1913
                                }
                              ],
                              "start": 1892,
                              "end": 1919
                            },
                            "declare": false,
                            "start": 1878,
                            "end": 1919
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "ObjectExpression",
                                "properties": [],
                                "start": 1931,
                                "end": 1933
                              },
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1937,
                                  "end": 1940
                                },
                                "typeArguments": null,
                                "start": 1937,
                                "end": 1940
                              },
                              "start": 1931,
                              "end": 1940
                            },
                            "start": 1924,
                            "end": 1941
                          }
                        ],
                        "start": 1872,
                        "end": 1945
                      },
                      "expression": false,
                      "start": 1869,
                      "end": 1945
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1862,
                    "end": 1945
                  }
                ],
                "start": 1802,
                "end": 1948
              }
            ],
            "optional": false,
            "start": 1788,
            "end": 1949
          },
          "definite": false,
          "start": 1777,
          "end": 1949
        }
      ],
      "declare": false,
      "start": 1771,
      "end": 1950
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
            "typeAnnotation": null,
            "start": 1958,
            "end": 1966
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1969,
              "end": 1982
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1987,
                      "end": 1994
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1998,
                            "end": 2001
                          },
                          "value": {
                            "type": "Literal",
                            "value": "I",
                            "raw": "\"I\"",
                            "start": 2003,
                            "end": 2006
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1998,
                          "end": 2006
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2008,
                            "end": 2013
                          },
                          "value": {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 2015,
                            "end": 2016
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2008,
                          "end": 2016
                        }
                      ],
                      "start": 1996,
                      "end": 2018
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1987,
                    "end": 2018
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2022,
                      "end": 2029
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2030,
                          "end": 2035
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2037,
                        "end": 2039
                      },
                      "expression": false,
                      "start": 2029,
                      "end": 2039
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2022,
                    "end": 2039
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2043,
                      "end": 2050
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "FunctionDeclaration",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2068,
                              "end": 2070
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "this",
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
                                          "name": "prop",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2079,
                                          "end": 2083
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 2085,
                                            "end": 2091
                                          },
                                          "start": 2083,
                                          "end": 2091
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2079,
                                        "end": 2091
                                      }
                                    ],
                                    "start": 2077,
                                    "end": 2093
                                  },
                                  "start": 2075,
                                  "end": 2093
                                },
                                "start": 2071,
                                "end": 2093
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2110,
                                      "end": 2114
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "prop",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2115,
                                      "end": 2119
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2110,
                                    "end": 2119
                                  },
                                  "start": 2103,
                                  "end": 2120
                                }
                              ],
                              "start": 2095,
                              "end": 2126
                            },
                            "expression": false,
                            "start": 2059,
                            "end": 2126
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2138,
                              "end": 2140
                            },
                            "start": 2131,
                            "end": 2141
                          }
                        ],
                        "start": 2053,
                        "end": 2145
                      },
                      "expression": false,
                      "start": 2050,
                      "end": 2145
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2043,
                    "end": 2145
                  }
                ],
                "start": 1983,
                "end": 2148
              }
            ],
            "optional": false,
            "start": 1969,
            "end": 2149
          },
          "definite": false,
          "start": 1958,
          "end": 2149
        }
      ],
      "declare": false,
      "start": 1952,
      "end": 2150
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2150
}
```
