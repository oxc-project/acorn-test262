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
        "name": "deprecate",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 26
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 45
              },
              "typeArguments": null,
              "start": 37,
              "end": 45
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 45
          }
        ],
        "start": 26,
        "end": 46
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 55
              },
              "typeArguments": null,
              "start": 54,
              "end": 55
            },
            "start": 52,
            "end": 55
          },
          "start": 50,
          "end": 55
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "msg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 64,
              "end": 70
            },
            "start": 62,
            "end": 70
          },
          "start": 59,
          "end": 70
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "code",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 81,
              "end": 87
            },
            "start": 79,
            "end": 87
          },
          "start": 74,
          "end": 87
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "typeArguments": null,
          "start": 92,
          "end": 93
        },
        "start": 90,
        "end": 93
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 94
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
            "name": "soonFrozenObjectDeprecation",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 129
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 133,
                    "end": 134
                  },
                  "constraint": {
                    "type": "TSObjectKeyword",
                    "start": 143,
                    "end": 149
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 133,
                  "end": 149
                }
              ],
              "start": 132,
              "end": 150
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 160
                    },
                    "typeArguments": null,
                    "start": 159,
                    "end": 160
                  },
                  "start": 157,
                  "end": 160
                },
                "start": 154,
                "end": 160
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 170,
                    "end": 176
                  },
                  "start": 168,
                  "end": 176
                },
                "start": 164,
                "end": 176
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "code",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 186,
                    "end": 192
                  },
                  "start": 184,
                  "end": 192
                },
                "start": 180,
                "end": 192
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "note",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 200
                },
                "right": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 203,
                  "end": 205
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 205
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 211
                },
                "typeArguments": null,
                "start": 210,
                "end": 211
              },
              "start": 208,
              "end": 211
            },
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
                        "name": "message",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 225,
                        "end": 232
                      },
                      "init": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": false,
                            "start": 235,
                            "end": 238
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": " will be frozen in future, all modifications are deprecated.",
                              "cooked": " will be frozen in future, all modifications are deprecated."
                            },
                            "tail": false,
                            "start": 242,
                            "end": 305
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 332,
                            "end": 334
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 238,
                            "end": 242
                          },
                          {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "note",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 310,
                              "end": 314
                            },
                            "operator": "&&",
                            "right": {
                              "type": "TemplateLiteral",
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "\\n",
                                    "cooked": "\n"
                                  },
                                  "tail": false,
                                  "start": 318,
                                  "end": 323
                                },
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "",
                                    "cooked": ""
                                  },
                                  "tail": true,
                                  "start": 327,
                                  "end": 329
                                }
                              ],
                              "expressions": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "note",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 323,
                                  "end": 327
                                }
                              ],
                              "start": 318,
                              "end": 329
                            },
                            "start": 310,
                            "end": 329
                          }
                        ],
                        "start": 235,
                        "end": 334
                      },
                      "definite": false,
                      "start": 225,
                      "end": 334
                    }
                  ],
                  "declare": false,
                  "start": 219,
                  "end": 335
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Proxy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 354
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 355,
                        "end": 358
                      },
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "set",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 366,
                              "end": 369
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "deprecate",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 371,
                                "end": 380
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "target",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 389,
                                      "end": 395
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "property",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 397,
                                      "end": 405
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 407,
                                      "end": 412
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "receiver",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 414,
                                      "end": 422
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Reflect",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 435,
                                        "end": 442
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "set",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 443,
                                        "end": 446
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 435,
                                      "end": 446
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "target",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 447,
                                        "end": 453
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "property",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 455,
                                        "end": 463
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 465,
                                        "end": 470
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "receiver",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 472,
                                        "end": 480
                                      }
                                    ],
                                    "optional": false,
                                    "start": 435,
                                    "end": 481
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 388,
                                  "end": 481
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "message",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 489,
                                  "end": 496
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "code",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 504,
                                  "end": 508
                                }
                              ],
                              "optional": false,
                              "start": 371,
                              "end": 515
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 366,
                            "end": 515
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "defineProperty",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 521,
                              "end": 535
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "deprecate",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 537,
                                "end": 546
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "target",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 555,
                                      "end": 561
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "property",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 563,
                                      "end": 571
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "descriptor",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 573,
                                      "end": 583
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Reflect",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 596,
                                        "end": 603
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "defineProperty",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 604,
                                        "end": 618
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 596,
                                      "end": 618
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "target",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 619,
                                        "end": 625
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "property",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 627,
                                        "end": 635
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "descriptor",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 637,
                                        "end": 647
                                      }
                                    ],
                                    "optional": false,
                                    "start": 596,
                                    "end": 648
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 554,
                                  "end": 648
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "message",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 656,
                                  "end": 663
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "code",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 671,
                                  "end": 675
                                }
                              ],
                              "optional": false,
                              "start": 537,
                              "end": 682
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 521,
                            "end": 682
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "deleteProperty",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 688,
                              "end": 702
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "deprecate",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 704,
                                "end": 713
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "target",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 722,
                                      "end": 728
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "property",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 730,
                                      "end": 738
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Reflect",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 743,
                                        "end": 750
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "deleteProperty",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 751,
                                        "end": 765
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 743,
                                      "end": 765
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "target",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 766,
                                        "end": 772
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "property",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 774,
                                        "end": 782
                                      }
                                    ],
                                    "optional": false,
                                    "start": 743,
                                    "end": 783
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 721,
                                  "end": 783
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "message",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 791,
                                  "end": 798
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "code",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 806,
                                  "end": 810
                                }
                              ],
                              "optional": false,
                              "start": 704,
                              "end": 817
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 688,
                            "end": 817
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "setPrototypeOf",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 823,
                              "end": 837
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "deprecate",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 839,
                                "end": 848
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "target",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 857,
                                      "end": 863
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "proto",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 865,
                                      "end": 870
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Reflect",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 875,
                                        "end": 882
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "setPrototypeOf",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 883,
                                        "end": 897
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 875,
                                      "end": 897
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "target",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 898,
                                        "end": 904
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "proto",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 906,
                                        "end": 911
                                      }
                                    ],
                                    "optional": false,
                                    "start": 875,
                                    "end": 912
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 856,
                                  "end": 912
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "message",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 920,
                                  "end": 927
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "code",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 935,
                                  "end": 939
                                }
                              ],
                              "optional": false,
                              "start": 839,
                              "end": 946
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 823,
                            "end": 946
                          }
                        ],
                        "start": 360,
                        "end": 951
                      }
                    ],
                    "start": 345,
                    "end": 952
                  },
                  "start": 338,
                  "end": 953
                }
              ],
              "start": 215,
              "end": 955
            },
            "id": null,
            "generator": false,
            "start": 132,
            "end": 955
          },
          "definite": false,
          "start": 102,
          "end": 955
        }
      ],
      "declare": false,
      "start": 96,
      "end": 956
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 956
}
```
