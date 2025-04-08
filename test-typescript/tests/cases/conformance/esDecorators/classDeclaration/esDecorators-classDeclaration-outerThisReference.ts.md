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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 41,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 41,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 120,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 121,
        "end": 150,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 127,
            "end": 148,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 146,
              "end": 147,
              "value": 2,
              "raw": "2"
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ThisExpression",
                      "start": 132,
                      "end": 136
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
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
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ThisExpression",
                "start": 107,
                "end": 111
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 283,
      "end": 407,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 301,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 302,
        "end": 407,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 326,
            "end": 340,
            "static": false,
            "computed": true,
            "key": {
              "type": "CallExpression",
              "start": 327,
              "end": 334,
              "callee": {
                "type": "Identifier",
                "start": 327,
                "end": 328,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ThisExpression",
                  "start": 329,
                  "end": 333
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "value": {
              "type": "Literal",
              "start": 338,
              "end": 339,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 346,
            "end": 367,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 362,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 365,
              "end": 366,
              "value": 2,
              "raw": "2"
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ThisExpression",
                      "start": 351,
                      "end": 355
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 391,
            "end": 405,
            "static": false,
            "computed": true,
            "key": {
              "type": "CallExpression",
              "start": 392,
              "end": 399,
              "callee": {
                "type": "Identifier",
                "start": 392,
                "end": 393,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ThisExpression",
                  "start": 394,
                  "end": 398
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "value": {
              "type": "Literal",
              "start": 403,
              "end": 404,
              "value": 3,
              "raw": "3"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
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
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ThisExpression",
                "start": 288,
                "end": 292
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 534,
      "end": 611,
      "id": {
        "type": "Identifier",
        "start": 551,
        "end": 552,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 553,
        "end": 611,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 559,
            "end": 566,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 559,
              "end": 561,
              "name": "a"
            },
            "value": {
              "type": "Literal",
              "start": 564,
              "end": 565,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 572,
            "end": 609,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 603,
              "end": 604,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 607,
              "end": 608,
              "value": 2,
              "raw": "2"
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 584,
                          "end": 588,
                          "name": "x",
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
                                "name": "C",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "MemberExpression",
                        "start": 593,
                        "end": 597,
                        "object": {
                          "type": "Identifier",
                          "start": 593,
                          "end": 594,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 595,
                          "end": 597,
                          "name": "a"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
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
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ThisExpression",
                "start": 539,
                "end": 543
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
