__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 247,
  "end": 776,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 247,
      "end": 508,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 255,
        "end": 508,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 261,
            "end": 285,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 265,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 265,
              "end": 284,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 267,
                "end": 284,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 267,
                    "end": 273
                  },
                  {
                    "type": "TSArrayType",
                    "start": 276,
                    "end": 284,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 276,
                      "end": 282
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 290,
            "end": 402,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 290,
              "end": 297,
              "decorators": [],
              "name": "getData",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 297,
              "end": 402,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 300,
                "end": 402,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 310,
                    "end": 331,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 314,
                        "end": 330,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 314,
                          "end": 318,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 321,
                          "end": 330,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 321,
                            "end": 325
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 326,
                            "end": 330,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 340,
                    "end": 396,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 347,
                      "end": 395,
                      "alternate": {
                        "type": "CallExpression",
                        "start": 381,
                        "end": 395,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 391,
                            "end": 394,
                            "raw": "\" \"",
                            "value": " ",
                            "regex": null,
                            "bigint": null
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 381,
                          "end": 390,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 381,
                            "end": 385,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 386,
                            "end": 390,
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "consequent": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 378,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 347,
                        "end": 371,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 347,
                          "end": 358,
                          "argument": {
                            "type": "Identifier",
                            "start": 354,
                            "end": 358,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 363,
                          "end": 371,
                          "raw": "\"string\"",
                          "value": "string",
                          "regex": null,
                          "bigint": null
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 408,
            "end": 506,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 416,
              "decorators": [],
              "name": "getData1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 416,
              "end": 506,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 419,
                "end": 506,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 429,
                    "end": 500,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 436,
                      "end": 499,
                      "alternate": {
                        "type": "CallExpression",
                        "start": 480,
                        "end": 499,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 495,
                            "end": 498,
                            "raw": "\" \"",
                            "value": " ",
                            "regex": null,
                            "bigint": null
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 480,
                          "end": 494,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 480,
                            "end": 489,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 480,
                              "end": 484
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 485,
                              "end": 489,
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 490,
                            "end": 494,
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "start": 468,
                        "end": 477,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 468,
                          "end": 472
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 473,
                          "end": 477,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 436,
                        "end": 465,
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "start": 436,
                          "end": 452,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 443,
                            "end": 452,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 443,
                              "end": 447
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 448,
                              "end": 452,
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "operator": "typeof",
                          "prefix": true
                        },
                        "right": {
                          "type": "Literal",
                          "start": 457,
                          "end": 465,
                          "raw": "\"string\"",
                          "value": "string",
                          "regex": null,
                          "bigint": null
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 253,
        "end": 254,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 510,
      "end": 629,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 514,
          "end": 629,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 514,
            "end": 573,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 515,
              "end": 573,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 517,
                "end": 573,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 523,
                    "end": 544,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 523,
                      "end": 528,
                      "decorators": [],
                      "name": "prop1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 528,
                      "end": 543,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 530,
                        "end": 543,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 530,
                            "end": 536
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 537,
                            "end": 543
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 549,
                    "end": 571,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 549,
                      "end": 554,
                      "decorators": [],
                      "name": "prop2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 554,
                      "end": 570,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 556,
                        "end": 570,
                        "types": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 556,
                            "end": 563
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 564,
                            "end": 570
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
            "start": 576,
            "end": 629,
            "properties": [
              {
                "type": "Property",
                "start": 586,
                "end": 601,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 586,
                  "end": 591,
                  "decorators": [],
                  "name": "prop1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 593,
                  "end": 601,
                  "raw": "\"string\"",
                  "value": "string",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 612,
                "end": 623,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 617,
                  "decorators": [],
                  "name": "prop2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 619,
                  "end": 623,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
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
      "start": 631,
      "end": 691,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 689,
        "end": 691,
        "body": []
      },
      "test": {
        "type": "LogicalExpression",
        "start": 635,
        "end": 687,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 635,
          "end": 662,
          "operator": "===",
          "left": {
            "type": "UnaryExpression",
            "start": 635,
            "end": 649,
            "argument": {
              "type": "MemberExpression",
              "start": 642,
              "end": 649,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 642,
                "end": 643,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 644,
                "end": 649,
                "decorators": [],
                "name": "prop1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "typeof",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 654,
            "end": 662,
            "raw": "\"string\"",
            "value": "string",
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 666,
          "end": 687,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 666,
            "end": 685,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 666,
              "end": 673,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 666,
                "end": 667,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 668,
                "end": 673,
                "decorators": [],
                "name": "prop1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 674,
              "end": 685,
              "decorators": [],
              "name": "toLowerCase",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 692,
      "end": 712,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 696,
          "end": 711,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 696,
            "end": 701,
            "decorators": [],
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 704,
            "end": 711,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 704,
              "end": 705,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 706,
              "end": 711,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 713,
      "end": 776,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 773,
        "end": 776,
        "body": []
      },
      "test": {
        "type": "LogicalExpression",
        "start": 717,
        "end": 771,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 717,
          "end": 742,
          "operator": "===",
          "left": {
            "type": "UnaryExpression",
            "start": 717,
            "end": 729,
            "argument": {
              "type": "Identifier",
              "start": 724,
              "end": 729,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "typeof",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 734,
            "end": 742,
            "raw": "\"string\"",
            "value": "string",
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 746,
          "end": 771,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 746,
            "end": 769,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 746,
              "end": 751,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 752,
              "end": 769,
              "decorators": [],
              "name": "toLocaleLowerCase",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
