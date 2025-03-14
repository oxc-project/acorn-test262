vararg.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 874,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 531,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 531,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 529,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 529,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 529,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 40,
                    "end": 261,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 48,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 48,
                      "end": 261,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 76,
                        "end": 261,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 90,
                            "end": 100,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 94,
                                "end": 99,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 94,
                                  "end": 97,
                                  "decorators": [],
                                  "name": "sum",
                                  "optional": false
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 98,
                                  "end": 99,
                                  "raw": "0",
                                  "value": 0
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "ForStatement",
                            "start": 113,
                            "end": 190,
                            "body": {
                              "type": "BlockStatement",
                              "start": 145,
                              "end": 190,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 163,
                                  "end": 176,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 163,
                                    "end": 175,
                                    "operator": "+=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 163,
                                      "end": 166,
                                      "decorators": [],
                                      "name": "sum",
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 168,
                                      "end": 175,
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 168,
                                        "end": 172,
                                        "decorators": [],
                                        "name": "rest",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 173,
                                        "end": 174,
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              ]
                            },
                            "init": {
                              "type": "VariableDeclaration",
                              "start": 118,
                              "end": 125,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 122,
                                  "end": 125,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 122,
                                    "end": 123,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "start": 124,
                                    "end": 125,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "var"
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "start": 126,
                              "end": 139,
                              "operator": "<",
                              "left": {
                                "type": "Identifier",
                                "start": 126,
                                "end": 127,
                                "decorators": [],
                                "name": "i",
                                "optional": false
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 128,
                                "end": 139,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 128,
                                  "end": 132,
                                  "decorators": [],
                                  "name": "rest",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 133,
                                  "end": 139,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false
                                }
                              }
                            },
                            "update": {
                              "type": "UpdateExpression",
                              "start": 140,
                              "end": 143,
                              "argument": {
                                "type": "Identifier",
                                "start": 140,
                                "end": 141,
                                "decorators": [],
                                "name": "i",
                                "optional": false
                              },
                              "operator": "++",
                              "prefix": false
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 203,
                            "end": 224,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 203,
                              "end": 223,
                              "operator": "+=",
                              "left": {
                                "type": "Identifier",
                                "start": 203,
                                "end": 209,
                                "decorators": [],
                                "name": "result",
                                "optional": false
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "start": 212,
                                "end": 222,
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 212,
                                  "end": 218,
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 212,
                                    "end": 213,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 214,
                                    "end": 218,
                                    "raw": "\": \"",
                                    "value": ": "
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 219,
                                  "end": 222,
                                  "decorators": [],
                                  "name": "sum",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 237,
                            "end": 251,
                            "argument": {
                              "type": "Identifier",
                              "start": 244,
                              "end": 250,
                              "decorators": [],
                              "name": "result",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 49,
                          "end": 57,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 50,
                            "end": 57,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 51,
                              "end": 57
                            }
                          }
                        },
                        {
                          "type": "RestElement",
                          "start": 58,
                          "end": 74,
                          "argument": {
                            "type": "Identifier",
                            "start": 61,
                            "end": 65,
                            "decorators": [],
                            "name": "rest",
                            "optional": false
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 65,
                            "end": 74,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 66,
                              "end": 74,
                              "elementType": {
                                "type": "TSNumberKeyword",
                                "start": 66,
                                "end": 72
                              }
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 271,
                    "end": 325,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 283,
                      "decorators": [],
                      "name": "fnope",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 283,
                      "end": 325,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 309,
                        "end": 325,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 284,
                          "end": 292,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 285,
                            "end": 292,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 286,
                              "end": 292
                            }
                          }
                        },
                        {
                          "type": "RestElement",
                          "start": 293,
                          "end": 307,
                          "argument": {
                            "type": "Identifier",
                            "start": 296,
                            "end": 300,
                            "decorators": [],
                            "name": "rest",
                            "optional": false
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 300,
                            "end": 307,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 301,
                              "end": 307
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 335,
                    "end": 523,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 342,
                      "end": 347,
                      "decorators": [],
                      "name": "fonly",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 347,
                      "end": 523,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 366,
                        "end": 523,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 380,
                            "end": 391,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 380,
                              "end": 390,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 380,
                                "end": 387,
                                "decorators": [],
                                "name": "builder",
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 388,
                                "end": 390,
                                "raw": "\"\"",
                                "value": ""
                              }
                            }
                          },
                          {
                            "type": "ForStatement",
                            "start": 404,
                            "end": 485,
                            "body": {
                              "type": "BlockStatement",
                              "start": 436,
                              "end": 485,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 454,
                                  "end": 471,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 454,
                                    "end": 470,
                                    "operator": "+=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 454,
                                      "end": 461,
                                      "decorators": [],
                                      "name": "builder",
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 463,
                                      "end": 470,
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 463,
                                        "end": 467,
                                        "decorators": [],
                                        "name": "rest",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 468,
                                        "end": 469,
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              ]
                            },
                            "init": {
                              "type": "VariableDeclaration",
                              "start": 409,
                              "end": 416,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 413,
                                  "end": 416,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 413,
                                    "end": 414,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "start": 415,
                                    "end": 416,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "var"
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "start": 417,
                              "end": 430,
                              "operator": "<",
                              "left": {
                                "type": "Identifier",
                                "start": 417,
                                "end": 418,
                                "decorators": [],
                                "name": "i",
                                "optional": false
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 419,
                                "end": 430,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 419,
                                  "end": 423,
                                  "decorators": [],
                                  "name": "rest",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 424,
                                  "end": 430,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false
                                }
                              }
                            },
                            "update": {
                              "type": "UpdateExpression",
                              "start": 431,
                              "end": 434,
                              "argument": {
                                "type": "Identifier",
                                "start": 431,
                                "end": 432,
                                "decorators": [],
                                "name": "i",
                                "optional": false
                              },
                              "operator": "++",
                              "prefix": false
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 498,
                            "end": 513,
                            "argument": {
                              "type": "Identifier",
                              "start": 505,
                              "end": 512,
                              "decorators": [],
                              "name": "builder",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 348,
                          "end": 364,
                          "argument": {
                            "type": "Identifier",
                            "start": 351,
                            "end": 355,
                            "decorators": [],
                            "name": "rest",
                            "optional": false
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 355,
                            "end": 364,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 356,
                              "end": 364,
                              "elementType": {
                                "type": "TSStringKeyword",
                                "start": 356,
                                "end": 362
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 533,
      "end": 549,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 537,
          "end": 548,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 537,
            "end": 538,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 539,
            "end": 548,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 543,
              "end": 546,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 543,
                "end": 544,
                "decorators": [],
                "name": "M",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 550,
      "end": 564,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 554,
          "end": 563,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 554,
            "end": 560,
            "decorators": [],
            "name": "result",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 561,
            "end": 563,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 565,
      "end": 584,
      "expression": {
        "type": "AssignmentExpression",
        "start": 565,
        "end": 583,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 565,
          "end": 571,
          "decorators": [],
          "name": "result",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 573,
          "end": 583,
          "arguments": [
            {
              "type": "Identifier",
              "start": 577,
              "end": 578,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            {
              "type": "Literal",
              "start": 579,
              "end": 580,
              "raw": "3",
              "value": 3
            },
            {
              "type": "Literal",
              "start": 581,
              "end": 582,
              "raw": "3",
              "value": 3
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 573,
            "end": 576,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 573,
              "end": 574,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 575,
              "end": 576,
              "decorators": [],
              "name": "f",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 604,
      "end": 629,
      "expression": {
        "type": "AssignmentExpression",
        "start": 604,
        "end": 628,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 604,
          "end": 610,
          "decorators": [],
          "name": "result",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 612,
          "end": 628,
          "arguments": [
            {
              "type": "Literal",
              "start": 616,
              "end": 617,
              "raw": "3",
              "value": 3
            },
            {
              "type": "Literal",
              "start": 618,
              "end": 625,
              "raw": "\"hello\"",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 626,
              "end": 627,
              "raw": "3",
              "value": 3
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 612,
            "end": 615,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 612,
              "end": 613,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 614,
              "end": 615,
              "decorators": [],
              "name": "f",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 650,
      "end": 681,
      "expression": {
        "type": "AssignmentExpression",
        "start": 650,
        "end": 680,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 650,
          "end": 656,
          "decorators": [],
          "name": "result",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 658,
          "end": 680,
          "arguments": [
            {
              "type": "Literal",
              "start": 662,
              "end": 669,
              "raw": "\"hello\"",
              "value": "hello"
            },
            {
              "type": "Literal",
              "start": 670,
              "end": 671,
              "raw": "3",
              "value": 3
            },
            {
              "type": "Literal",
              "start": 672,
              "end": 673,
              "raw": "3",
              "value": 3
            },
            {
              "type": "Literal",
              "start": 674,
              "end": 675,
              "raw": "3",
              "value": 3
            },
            {
              "type": "Literal",
              "start": 676,
              "end": 677,
              "raw": "3",
              "value": 3
            },
            {
              "type": "Literal",
              "start": 678,
              "end": 679,
              "raw": "3",
              "value": 3
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 658,
            "end": 661,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 658,
              "end": 659,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
              "decorators": [],
              "name": "f",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 688,
      "end": 709,
      "expression": {
        "type": "AssignmentExpression",
        "start": 688,
        "end": 708,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 688,
          "end": 694,
          "decorators": [],
          "name": "result",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 696,
          "end": 708,
          "arguments": [
            {
              "type": "Literal",
              "start": 700,
              "end": 707,
              "raw": "\"hello\"",
              "value": "hello"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 696,
            "end": 699,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 696,
              "end": 697,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 698,
              "end": 699,
              "decorators": [],
              "name": "f",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 733,
      "end": 752,
      "expression": {
        "type": "AssignmentExpression",
        "start": 733,
        "end": 751,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 733,
          "end": 739,
          "decorators": [],
          "name": "result",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 741,
          "end": 751,
          "arguments": [
            {
              "type": "Literal",
              "start": 749,
              "end": 750,
              "raw": "3",
              "value": 3
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 741,
            "end": 748,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 741,
              "end": 742,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 743,
              "end": 748,
              "decorators": [],
              "name": "fonly",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 770,
      "end": 789,
      "expression": {
        "type": "AssignmentExpression",
        "start": 770,
        "end": 788,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 770,
          "end": 776,
          "decorators": [],
          "name": "result",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 778,
          "end": 788,
          "arguments": [
            {
              "type": "Identifier",
              "start": 786,
              "end": 787,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 778,
            "end": 785,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 778,
              "end": 779,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 780,
              "end": 785,
              "decorators": [],
              "name": "fonly",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 803,
      "end": 824,
      "expression": {
        "type": "AssignmentExpression",
        "start": 803,
        "end": 823,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 803,
          "end": 809,
          "decorators": [],
          "name": "result",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 811,
          "end": 823,
          "arguments": [
            {
              "type": "Literal",
              "start": 819,
              "end": 822,
              "raw": "\"a\"",
              "value": "a"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 811,
            "end": 818,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 811,
              "end": 812,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 813,
              "end": 818,
              "decorators": [],
              "name": "fonly",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 832,
      "end": 865,
      "expression": {
        "type": "AssignmentExpression",
        "start": 832,
        "end": 864,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 832,
          "end": 838,
          "decorators": [],
          "name": "result",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 840,
          "end": 864,
          "arguments": [
            {
              "type": "Literal",
              "start": 848,
              "end": 851,
              "raw": "\"a\"",
              "value": "a"
            },
            {
              "type": "Literal",
              "start": 852,
              "end": 855,
              "raw": "\"b\"",
              "value": "b"
            },
            {
              "type": "Literal",
              "start": 856,
              "end": 859,
              "raw": "\"c\"",
              "value": "c"
            },
            {
              "type": "Literal",
              "start": 860,
              "end": 863,
              "raw": "\"d\"",
              "value": "d"
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 840,
            "end": 847,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 840,
              "end": 841,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 842,
              "end": 847,
              "decorators": [],
              "name": "fonly",
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
