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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 13,
        "name": "Action",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 33,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 20,
            "end": 31,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 22,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 48,
        "name": "ActionA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 57,
        "end": 63,
        "name": "Action",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 86,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 84,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 75,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 101,
        "name": "ActionB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 110,
        "end": 116,
        "name": "Action",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 117,
        "end": 143,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 123,
            "end": 141,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 131,
              "name": "trueNess",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 161,
            "name": "x1",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 159,
                    "name": "Action",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 174,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 176,
                      "end": 177,
                      "value": 2,
                      "raw": "2"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 179,
                    "end": 194,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 187,
                      "name": "trueness",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 189,
                      "end": 194,
                      "value": false,
                      "raw": "false"
                    },
                    "kind": "init",
                    "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 206,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 208,
                      "end": 209,
                      "value": 3,
                      "raw": "3"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 211,
                    "end": 224,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 215,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 217,
                      "end": 224,
                      "value": "three",
                      "raw": "\"three\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 246,
            "name": "x2",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 244,
                    "name": "Action",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "callee": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 266,
                  "name": "ActionA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 274,
                "end": 287,
                "callee": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 285,
                  "name": "ActionB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 307,
            "name": "x3",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 305,
                    "name": "Action",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "callee": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 326,
                  "name": "Action",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 334,
                "end": 347,
                "callee": {
                  "type": "Identifier",
                  "start": 338,
                  "end": 345,
                  "name": "ActionA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 353,
                "end": 366,
                "callee": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 364,
                  "name": "ActionB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 394,
            "name": "z1",
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 380,
                        "end": 382,
                        "name": "id",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 382,
                        "end": 390,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 384,
                          "end": 390
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 415,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 417,
                      "end": 418,
                      "value": 2,
                      "raw": "2"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 420,
                    "end": 435,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 420,
                      "end": 428,
                      "name": "trueness",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 430,
                      "end": 435,
                      "value": false,
                      "raw": "false"
                    },
                    "kind": "init",
                    "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 451,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 453,
                      "end": 454,
                      "value": 3,
                      "raw": "3"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 456,
                    "end": 469,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 456,
                      "end": 460,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 462,
                      "end": 469,
                      "value": "three",
                      "raw": "\"three\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 503,
            "name": "z2",
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 489,
                        "end": 491,
                        "name": "id",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 491,
                        "end": 499,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 493,
                          "end": 499
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "callee": {
                  "type": "Identifier",
                  "start": 524,
                  "end": 531,
                  "name": "ActionA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 543,
                "end": 556,
                "callee": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 554,
                  "name": "ActionB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 568,
            "end": 588,
            "name": "z3",
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 574,
                        "end": 576,
                        "name": "id",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 576,
                        "end": 584,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 578,
                          "end": 584
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "callee": {
                  "type": "Identifier",
                  "start": 609,
                  "end": 615,
                  "name": "Action",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 627,
                "end": 640,
                "callee": {
                  "type": "Identifier",
                  "start": 631,
                  "end": 638,
                  "name": "ActionA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 650,
                "end": 663,
                "callee": {
                  "type": "Identifier",
                  "start": 654,
                  "end": 661,
                  "name": "ActionB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
