typeGuardsOnClassProperty.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 256,
        "end": 509,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 262,
            "end": 286,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 262,
              "end": 266,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 291,
            "end": 403,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 291,
              "end": 298,
              "decorators": [],
              "name": "getData",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 298,
              "end": 403,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 315,
                          "end": 319,
                          "decorators": [],
                          "name": "data",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 322,
                          "end": 331,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 322,
                            "end": 326
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 327,
                            "end": 331,
                            "decorators": [],
                            "name": "data",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 341,
                    "end": 397,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 348,
                      "end": 396,
                      "alternate": {
                        "type": "CallExpression",
                        "start": 382,
                        "end": 396,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 392,
                            "end": 395,
                            "raw": "\" \"",
                            "value": " "
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 382,
                          "end": 391,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 382,
                            "end": 386,
                            "decorators": [],
                            "name": "data",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 387,
                            "end": 391,
                            "decorators": [],
                            "name": "join",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "consequent": {
                        "type": "Identifier",
                        "start": 375,
                        "end": 379,
                        "decorators": [],
                        "name": "data",
                        "optional": false
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 348,
                        "end": 372,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 348,
                          "end": 359,
                          "argument": {
                            "type": "Identifier",
                            "start": 355,
                            "end": 359,
                            "decorators": [],
                            "name": "data",
                            "optional": false
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 364,
                          "end": 372,
                          "raw": "\"string\"",
                          "value": "string"
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 409,
            "end": 507,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 409,
              "end": 417,
              "decorators": [],
              "name": "getData1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 417,
              "end": 507,
              "async": false,
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
                      "alternate": {
                        "type": "CallExpression",
                        "start": 481,
                        "end": 500,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 496,
                            "end": 499,
                            "raw": "\" \"",
                            "value": " "
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 481,
                          "end": 495,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 481,
                            "end": 490,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 481,
                              "end": 485
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 486,
                              "end": 490,
                              "decorators": [],
                              "name": "data",
                              "optional": false
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 491,
                            "end": 495,
                            "decorators": [],
                            "name": "join",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "start": 469,
                        "end": 478,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 469,
                          "end": 473
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 474,
                          "end": 478,
                          "decorators": [],
                          "name": "data",
                          "optional": false
                        }
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 437,
                        "end": 466,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 437,
                          "end": 453,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 444,
                            "end": 453,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 444,
                              "end": 448
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 449,
                              "end": 453,
                              "decorators": [],
                              "name": "data",
                              "optional": false
                            }
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 458,
                          "end": 466,
                          "raw": "\"string\"",
                          "value": "string"
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 255,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 574,
            "decorators": [],
            "name": "o",
            "optional": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 524,
                      "end": 529,
                      "decorators": [],
                      "name": "prop1",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 550,
                    "end": 572,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 550,
                      "end": 555,
                      "decorators": [],
                      "name": "prop2",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                    }
                  }
                ]
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 587,
                  "end": 592,
                  "decorators": [],
                  "name": "prop1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 594,
                  "end": 602,
                  "raw": "\"string\"",
                  "value": "string"
                }
              },
              {
                "type": "Property",
                "start": 613,
                "end": 624,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 613,
                  "end": 618,
                  "decorators": [],
                  "name": "prop2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 620,
                  "end": 624,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 632,
      "end": 692,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 690,
        "end": 692,
        "body": []
      },
      "test": {
        "type": "LogicalExpression",
        "start": 636,
        "end": 688,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 636,
          "end": 663,
          "operator": "===",
          "left": {
            "type": "UnaryExpression",
            "start": 636,
            "end": 650,
            "argument": {
              "type": "MemberExpression",
              "start": 643,
              "end": 650,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 643,
                "end": 644,
                "decorators": [],
                "name": "o",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 645,
                "end": 650,
                "decorators": [],
                "name": "prop1",
                "optional": false
              }
            },
            "operator": "typeof",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 655,
            "end": 663,
            "raw": "\"string\"",
            "value": "string"
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 667,
          "end": 688,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 667,
            "end": 686,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 667,
              "end": 674,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 667,
                "end": 668,
                "decorators": [],
                "name": "o",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 669,
                "end": 674,
                "decorators": [],
                "name": "prop1",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 675,
              "end": 686,
              "decorators": [],
              "name": "toLowerCase",
              "optional": false
            }
          },
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 697,
            "end": 702,
            "decorators": [],
            "name": "prop1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 705,
            "end": 712,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 705,
              "end": 706,
              "decorators": [],
              "name": "o",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 707,
              "end": 712,
              "decorators": [],
              "name": "prop1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 714,
      "end": 777,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 774,
        "end": 777,
        "body": []
      },
      "test": {
        "type": "LogicalExpression",
        "start": 718,
        "end": 772,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 718,
          "end": 743,
          "operator": "===",
          "left": {
            "type": "UnaryExpression",
            "start": 718,
            "end": 730,
            "argument": {
              "type": "Identifier",
              "start": 725,
              "end": 730,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "operator": "typeof",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 735,
            "end": 743,
            "raw": "\"string\"",
            "value": "string"
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 747,
          "end": 772,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 747,
            "end": 770,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 747,
              "end": 752,
              "decorators": [],
              "name": "prop1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 753,
              "end": 770,
              "decorators": [],
              "name": "toLocaleLowerCase",
              "optional": false
            }
          },
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
