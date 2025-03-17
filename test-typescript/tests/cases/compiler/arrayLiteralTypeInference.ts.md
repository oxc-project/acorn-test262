__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 674,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 33,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 31,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 22,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 24,
                "end": 30
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 13,
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 86,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 86,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 84,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 75,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 48,
        "decorators": [],
        "name": "ActionA",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 57,
        "end": 63,
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 117,
        "end": 143,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 123,
            "end": 141,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 131,
              "decorators": [],
              "name": "trueNess",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 140,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 133,
                "end": 140
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 101,
        "decorators": [],
        "name": "ActionB",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 110,
        "end": 116,
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 161,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 161,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 153,
                "end": 161,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 153,
                  "end": 159,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 159,
                    "decorators": [],
                    "name": "Action",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 164,
            "end": 228,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 170,
                "end": 196,
                "properties": [
                  {
                    "type": "Property",
                    "start": 172,
                    "end": 177,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 174,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 176,
                      "end": 177,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  {
                    "type": "Property",
                    "start": 179,
                    "end": 194,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 187,
                      "decorators": [],
                      "name": "trueness",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 189,
                      "end": 194,
                      "raw": "false",
                      "value": false
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 202,
                "end": 226,
                "properties": [
                  {
                    "type": "Property",
                    "start": 204,
                    "end": 209,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 206,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 208,
                      "end": 209,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  {
                    "type": "Property",
                    "start": 211,
                    "end": 224,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 215,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 217,
                      "end": 224,
                      "raw": "\"three\"",
                      "value": "three"
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 289,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 246,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 246,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 238,
                "end": 246,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 238,
                  "end": 244,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 244,
                    "decorators": [],
                    "name": "Action",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 249,
            "end": 289,
            "elements": [
              {
                "type": "NewExpression",
                "start": 255,
                "end": 268,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 266,
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 274,
                "end": 287,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 285,
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 291,
      "end": 368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 295,
          "end": 368,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 307,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 297,
              "end": 307,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 299,
                "end": 307,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 299,
                  "end": 305,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 305,
                    "decorators": [],
                    "name": "Action",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 310,
            "end": 368,
            "elements": [
              {
                "type": "NewExpression",
                "start": 316,
                "end": 328,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 326,
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 334,
                "end": 347,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 338,
                  "end": 345,
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 353,
                "end": 366,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 364,
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 370,
      "end": 477,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 477,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 394,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 394,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 378,
                "end": 394,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 378,
                  "end": 392,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 380,
                      "end": 390,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 380,
                        "end": 382,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 382,
                        "end": 390,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 384,
                          "end": 390
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 401,
            "end": 477,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 411,
                "end": 437,
                "properties": [
                  {
                    "type": "Property",
                    "start": 413,
                    "end": 418,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 415,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 417,
                      "end": 418,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  {
                    "type": "Property",
                    "start": 420,
                    "end": 435,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 420,
                      "end": 428,
                      "decorators": [],
                      "name": "trueness",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 430,
                      "end": 435,
                      "raw": "false",
                      "value": false
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 447,
                "end": 471,
                "properties": [
                  {
                    "type": "Property",
                    "start": 449,
                    "end": 454,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 451,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 453,
                      "end": 454,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  {
                    "type": "Property",
                    "start": 456,
                    "end": 469,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 456,
                      "end": 460,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 462,
                      "end": 469,
                      "raw": "\"three\"",
                      "value": "three"
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 479,
      "end": 562,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 483,
          "end": 562,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 503,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 485,
              "end": 503,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 487,
                "end": 503,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 487,
                  "end": 501,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 489,
                      "end": 499,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 489,
                        "end": 491,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 491,
                        "end": 499,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 493,
                          "end": 499
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 510,
            "end": 562,
            "elements": [
              {
                "type": "NewExpression",
                "start": 520,
                "end": 533,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 524,
                  "end": 531,
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 543,
                "end": 556,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 554,
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 564,
      "end": 669,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 568,
          "end": 669,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 568,
            "end": 588,
            "decorators": [],
            "name": "z3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 570,
              "end": 588,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 572,
                "end": 588,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 572,
                  "end": 586,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 574,
                      "end": 584,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 574,
                        "end": 576,
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 576,
                        "end": 584,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 578,
                          "end": 584
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 595,
            "end": 669,
            "elements": [
              {
                "type": "NewExpression",
                "start": 605,
                "end": 617,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 609,
                  "end": 615,
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 627,
                "end": 640,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 631,
                  "end": 638,
                  "decorators": [],
                  "name": "ActionA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 650,
                "end": 663,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 654,
                  "end": 661,
                  "decorators": [],
                  "name": "ActionB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
