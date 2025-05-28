__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 546,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 527,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 527,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 13,
            "end": 31,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 13,
              "end": 17,
              "name": "foo"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 20,
              "end": 30,
              "value": "A's #foo",
              "raw": "\"A's #foo\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 53,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 35,
              "end": 39,
              "name": "bar"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 42,
              "end": 52,
              "value": "A's #bar",
              "raw": "\"A's #bar\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 525,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 63,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 525,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 525,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 76,
                    "end": 398,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 84,
                      "end": 398,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 97,
                          "end": 115,
                          "decorators": [],
                          "key": {
                            "type": "PrivateIdentifier",
                            "start": 97,
                            "end": 101,
                            "name": "foo"
                          },
                          "typeAnnotation": null,
                          "value": {
                            "type": "Literal",
                            "start": 104,
                            "end": 114,
                            "value": "B's #foo",
                            "raw": "\"B's #foo\""
                          },
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 127,
                          "end": 230,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 127,
                            "end": 130,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 131,
                            "end": 230,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 132,
                                "end": 138,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 133,
                                  "end": 138,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 135,
                                    "end": 138
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 140,
                              "end": 230,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 157,
                                  "end": 164,
                                  "expression": {
                                    "type": "MemberExpression",
                                    "start": 157,
                                    "end": 163,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 157,
                                      "end": 158,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "start": 159,
                                      "end": 163,
                                      "name": "foo"
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "expression": false
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 242,
                          "end": 322,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 242,
                            "end": 245,
                            "decorators": [],
                            "name": "baz",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 246,
                            "end": 322,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 247,
                                "end": 251,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 248,
                                  "end": 251,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 250,
                                    "end": 251,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 250,
                                      "end": 251,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 253,
                              "end": 322,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 270,
                                  "end": 277,
                                  "expression": {
                                    "type": "MemberExpression",
                                    "start": 270,
                                    "end": 276,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 270,
                                      "end": 271,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "start": 272,
                                      "end": 276,
                                      "name": "foo"
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "expression": false
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 334,
                          "end": 389,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 334,
                            "end": 338,
                            "decorators": [],
                            "name": "quux",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 339,
                            "end": 389,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 340,
                                "end": 344,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 341,
                                  "end": 344,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 343,
                                    "end": 344,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 343,
                                      "end": 344,
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 346,
                              "end": 389,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 363,
                                  "end": 370,
                                  "expression": {
                                    "type": "MemberExpression",
                                    "start": 363,
                                    "end": 369,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 363,
                                      "end": 364,
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "start": 365,
                                      "end": 369,
                                      "name": "foo"
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "expression": false
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null
                        }
                      ]
                    },
                    "abstract": false,
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 406,
                    "end": 424,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 412,
                        "end": 423,
                        "id": {
                          "type": "Identifier",
                          "start": 412,
                          "end": 413,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 416,
                          "end": 423,
                          "callee": {
                            "type": "Identifier",
                            "start": 420,
                            "end": 421,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 432,
                    "end": 447,
                    "expression": {
                      "type": "CallExpression",
                      "start": 432,
                      "end": 446,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 432,
                        "end": 443,
                        "object": {
                          "type": "NewExpression",
                          "start": 432,
                          "end": 439,
                          "callee": {
                            "type": "Identifier",
                            "start": 436,
                            "end": 437,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 440,
                          "end": 443,
                          "decorators": [],
                          "name": "bar",
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
                          "start": 444,
                          "end": 445,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 455,
                    "end": 470,
                    "expression": {
                      "type": "CallExpression",
                      "start": 455,
                      "end": 469,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 455,
                        "end": 466,
                        "object": {
                          "type": "NewExpression",
                          "start": 455,
                          "end": 462,
                          "callee": {
                            "type": "Identifier",
                            "start": 459,
                            "end": 460,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 463,
                          "end": 466,
                          "decorators": [],
                          "name": "baz",
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
                          "start": 467,
                          "end": 468,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 478,
                    "end": 496,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 484,
                        "end": 495,
                        "id": {
                          "type": "Identifier",
                          "start": 484,
                          "end": 485,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 488,
                          "end": 495,
                          "callee": {
                            "type": "Identifier",
                            "start": 492,
                            "end": 493,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 504,
                    "end": 520,
                    "expression": {
                      "type": "CallExpression",
                      "start": 504,
                      "end": 519,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 504,
                        "end": 516,
                        "object": {
                          "type": "NewExpression",
                          "start": 504,
                          "end": 511,
                          "callee": {
                            "type": "Identifier",
                            "start": 508,
                            "end": 509,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 512,
                          "end": 516,
                          "decorators": [],
                          "name": "quux",
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
                          "start": 517,
                          "end": 518,
                          "decorators": [],
                          "name": "b",
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 529,
      "end": 546,
      "expression": {
        "type": "CallExpression",
        "start": 529,
        "end": 545,
        "callee": {
          "type": "MemberExpression",
          "start": 529,
          "end": 543,
          "object": {
            "type": "NewExpression",
            "start": 529,
            "end": 536,
            "callee": {
              "type": "Identifier",
              "start": 533,
              "end": 534,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 537,
            "end": 543,
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
