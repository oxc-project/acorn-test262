__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 611,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
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
      "type": "VariableDeclaration",
      "start": 23,
      "end": 42,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 41,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 41,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
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
      "type": "ClassDeclaration",
      "start": 102,
      "end": 150,
      "decorators": [
        {
          "type": "Decorator",
          "start": 102,
          "end": 112,
          "expression": {
            "type": "CallExpression",
            "start": 103,
            "end": 112,
            "callee": {
              "type": "Identifier",
              "start": 103,
              "end": 106,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ThisExpression",
                "start": 107,
                "end": 111
              }
            ],
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 120,
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
        "start": 121,
        "end": 150,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 127,
            "end": 148,
            "decorators": [
              {
                "type": "Decorator",
                "start": 127,
                "end": 137,
                "expression": {
                  "type": "CallExpression",
                  "start": 128,
                  "end": 137,
                  "callee": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 131,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ThisExpression",
                      "start": 132,
                      "end": 136
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 146,
              "end": 147,
              "value": 2,
              "raw": "2"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 283,
      "end": 407,
      "decorators": [
        {
          "type": "Decorator",
          "start": 283,
          "end": 293,
          "expression": {
            "type": "CallExpression",
            "start": 284,
            "end": 293,
            "callee": {
              "type": "Identifier",
              "start": 284,
              "end": 287,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ThisExpression",
                "start": 288,
                "end": 292
              }
            ],
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 301,
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
        "start": 302,
        "end": 407,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 326,
            "end": 340,
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "start": 327,
              "end": 334,
              "callee": {
                "type": "Identifier",
                "start": 327,
                "end": 328,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ThisExpression",
                  "start": 329,
                  "end": 333
                }
              ],
              "optional": false
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 338,
              "end": 339,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
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
            "start": 346,
            "end": 367,
            "decorators": [
              {
                "type": "Decorator",
                "start": 346,
                "end": 356,
                "expression": {
                  "type": "CallExpression",
                  "start": 347,
                  "end": 356,
                  "callee": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 350,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ThisExpression",
                      "start": 351,
                      "end": 355
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 362,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 365,
              "end": 366,
              "value": 2,
              "raw": "2"
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
            "start": 391,
            "end": 405,
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "start": 392,
              "end": 399,
              "callee": {
                "type": "Identifier",
                "start": 392,
                "end": 393,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ThisExpression",
                  "start": 394,
                  "end": 398
                }
              ],
              "optional": false
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 403,
              "end": 404,
              "value": 3,
              "raw": "3"
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 534,
      "end": 611,
      "decorators": [
        {
          "type": "Decorator",
          "start": 534,
          "end": 544,
          "expression": {
            "type": "CallExpression",
            "start": 535,
            "end": 544,
            "callee": {
              "type": "Identifier",
              "start": 535,
              "end": 538,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ThisExpression",
                "start": 539,
                "end": 543
              }
            ],
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 551,
        "end": 552,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 553,
        "end": 611,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 559,
            "end": 566,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 559,
              "end": 561,
              "name": "a"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 564,
              "end": 565,
              "value": 1,
              "raw": "1"
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
            "start": 572,
            "end": 609,
            "decorators": [
              {
                "type": "Decorator",
                "start": 572,
                "end": 598,
                "expression": {
                  "type": "CallExpression",
                  "start": 573,
                  "end": 598,
                  "callee": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 576,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ThisExpression",
                      "start": 577,
                      "end": 581
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 583,
                      "end": 597,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 584,
                          "end": 588,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 585,
                            "end": 588,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 587,
                              "end": 588,
                              "typeName": {
                                "type": "Identifier",
                                "start": 587,
                                "end": 588,
                                "decorators": [],
                                "name": "C",
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
                        "type": "MemberExpression",
                        "start": 593,
                        "end": 597,
                        "object": {
                          "type": "Identifier",
                          "start": 593,
                          "end": 594,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 595,
                          "end": 597,
                          "name": "a"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 603,
              "end": 604,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 607,
              "end": 608,
              "value": 2,
              "raw": "2"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
