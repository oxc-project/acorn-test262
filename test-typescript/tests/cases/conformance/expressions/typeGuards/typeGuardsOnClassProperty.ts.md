__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 248,
  "end": 777,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 248,
      "end": 509,
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 255,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 256,
        "end": 509,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 262,
            "end": 286,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 262,
              "end": 266,
              "name": "data",
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
              "start": 266,
              "end": 285,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 268,
                "end": 285,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 268,
                    "end": 274
                  },
                  {
                    "type": "TSArrayType",
                    "start": 277,
                    "end": 285,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 277,
                      "end": 283
                    }
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 291,
            "end": 403,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 291,
              "end": 298,
              "name": "getData",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 298,
              "end": 403,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 301,
                "end": 403,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 311,
                    "end": 332,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 315,
                        "end": 331,
                        "id": {
                          "type": "Identifier",
                          "start": 315,
                          "end": 319,
                          "name": "data",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 322,
                          "end": 331,
                          "object": {
                            "type": "ThisExpression",
                            "start": 322,
                            "end": 326
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 327,
                            "end": 331,
                            "name": "data",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 341,
                    "end": 397,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 348,
                      "end": 396,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 348,
                        "end": 372,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 348,
                          "end": 359,
                          "operator": "typeof",
                          "prefix": true,
                          "argument": {
                            "type": "Identifier",
                            "start": 355,
                            "end": 359,
                            "name": "data",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 364,
                          "end": 372,
                          "value": "string",
                          "raw": "\"string\""
                        }
                      },
                      "consequent": {
                        "type": "Identifier",
                        "start": 375,
                        "end": 379,
                        "name": "data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "alternate": {
                        "type": "CallExpression",
                        "start": 382,
                        "end": 396,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 382,
                          "end": 391,
                          "object": {
                            "type": "Identifier",
                            "start": 382,
                            "end": 386,
                            "name": "data",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 387,
                            "end": 391,
                            "name": "join",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 392,
                            "end": 395,
                            "value": " ",
                            "raw": "\" \""
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 409,
            "end": 507,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 409,
              "end": 417,
              "name": "getData1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 417,
              "end": 507,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 420,
                "end": 507,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 430,
                    "end": 501,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 437,
                      "end": 500,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 437,
                        "end": 466,
                        "left": {
                          "type": "UnaryExpression",
                          "start": 437,
                          "end": 453,
                          "operator": "typeof",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 444,
                            "end": 453,
                            "object": {
                              "type": "ThisExpression",
                              "start": 444,
                              "end": 448
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 449,
                              "end": 453,
                              "name": "data",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 458,
                          "end": 466,
                          "value": "string",
                          "raw": "\"string\""
                        }
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "start": 469,
                        "end": 478,
                        "object": {
                          "type": "ThisExpression",
                          "start": 469,
                          "end": 473
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 474,
                          "end": 478,
                          "name": "data",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "alternate": {
                        "type": "CallExpression",
                        "start": 481,
                        "end": 500,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 481,
                          "end": 495,
                          "object": {
                            "type": "MemberExpression",
                            "start": 481,
                            "end": 490,
                            "object": {
                              "type": "ThisExpression",
                              "start": 481,
                              "end": 485
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 486,
                              "end": 490,
                              "name": "data",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 491,
                            "end": 495,
                            "name": "join",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 496,
                            "end": 499,
                            "value": " ",
                            "raw": "\" \""
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 511,
      "end": 630,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 515,
          "end": 630,
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 574,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 516,
              "end": 574,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 518,
                "end": 574,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 524,
                    "end": 545,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 524,
                      "end": 529,
                      "name": "prop1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 529,
                      "end": 544,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 531,
                        "end": 544,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 531,
                            "end": 537
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 538,
                            "end": 544
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 550,
                    "end": 572,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 550,
                      "end": 555,
                      "name": "prop2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 555,
                      "end": 571,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 557,
                        "end": 571,
                        "types": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 557,
                            "end": 564
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 565,
                            "end": 571
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 577,
            "end": 630,
            "properties": [
              {
                "type": "Property",
                "start": 587,
                "end": 602,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 587,
                  "end": 592,
                  "name": "prop1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 594,
                  "end": 602,
                  "value": "string",
                  "raw": "\"string\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 613,
                "end": 624,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 613,
                  "end": 618,
                  "name": "prop2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 620,
                  "end": 624,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
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
      "type": "IfStatement",
      "start": 632,
      "end": 692,
      "test": {
        "type": "LogicalExpression",
        "start": 636,
        "end": 688,
        "left": {
          "type": "BinaryExpression",
          "start": 636,
          "end": 663,
          "left": {
            "type": "UnaryExpression",
            "start": 636,
            "end": 650,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 643,
              "end": 650,
              "object": {
                "type": "Identifier",
                "start": 643,
                "end": 644,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 645,
                "end": 650,
                "name": "prop1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 655,
            "end": 663,
            "value": "string",
            "raw": "\"string\""
          }
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "start": 667,
          "end": 688,
          "callee": {
            "type": "MemberExpression",
            "start": 667,
            "end": 686,
            "object": {
              "type": "MemberExpression",
              "start": 667,
              "end": 674,
              "object": {
                "type": "Identifier",
                "start": 667,
                "end": 668,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 669,
                "end": 674,
                "name": "prop1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 675,
              "end": 686,
              "name": "toLowerCase",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 690,
        "end": 692,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 693,
      "end": 713,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 697,
          "end": 712,
          "id": {
            "type": "Identifier",
            "start": 697,
            "end": 702,
            "name": "prop1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 705,
            "end": 712,
            "object": {
              "type": "Identifier",
              "start": 705,
              "end": 706,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 707,
              "end": 712,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 714,
      "end": 777,
      "test": {
        "type": "LogicalExpression",
        "start": 718,
        "end": 772,
        "left": {
          "type": "BinaryExpression",
          "start": 718,
          "end": 743,
          "left": {
            "type": "UnaryExpression",
            "start": 718,
            "end": 730,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 725,
              "end": 730,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 735,
            "end": 743,
            "value": "string",
            "raw": "\"string\""
          }
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "start": 747,
          "end": 772,
          "callee": {
            "type": "MemberExpression",
            "start": 747,
            "end": 770,
            "object": {
              "type": "Identifier",
              "start": 747,
              "end": 752,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 753,
              "end": 770,
              "name": "toLocaleLowerCase",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 774,
        "end": 777,
        "body": []
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
