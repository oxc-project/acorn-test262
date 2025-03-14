__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 857,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 25,
      "end": 86,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 86,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 44,
            "end": 57,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 55,
              "end": 56,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 62,
            "end": 84,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "start": 73,
              "end": 83,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 73,
                "end": 79,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 73,
                  "end": 77
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 82,
                "end": 83,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 25,
          "end": 29,
          "expression": {
            "type": "Identifier",
            "start": 26,
            "end": 29,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 443,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 443,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 117,
            "end": 130,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 128,
              "end": 129,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 135,
            "end": 157,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "start": 146,
              "end": 156,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 146,
                "end": 152,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 146,
                  "end": 150
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 155,
                "end": 156,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 162,
            "end": 194,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "start": 173,
              "end": 193,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 173,
                "end": 189,
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "start": 173,
                  "end": 180,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 173,
                    "end": 178
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 180,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 183,
                  "end": 189,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 183,
                    "end": 187
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 189,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                }
              },
              "right": {
                "type": "Literal",
                "start": 192,
                "end": 193,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 199,
            "end": 227,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 210,
              "end": 226,
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "start": 216,
                "end": 226,
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "start": 216,
                  "end": 222,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 216,
                    "end": 220
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 222,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 225,
                  "end": 226,
                  "raw": "1",
                  "value": 1
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 232,
            "end": 270,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 241,
              "decorators": [],
              "name": "ff",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 244,
              "end": 270,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 256,
                "end": 270,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 258,
                    "end": 268,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 258,
                      "end": 268,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 258,
                        "end": 264,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 258,
                          "end": 262
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 264,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 267,
                        "end": 268,
                        "raw": "1",
                        "value": 1
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
            "start": 275,
            "end": 323,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 285,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 286,
              "end": 323,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 289,
                "end": 323,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 299,
                    "end": 317,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 306,
                      "end": 316,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 306,
                        "end": 312,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 306,
                          "end": 310
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 312,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 315,
                        "end": 316,
                        "raw": "1",
                        "value": 1
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
            "start": 328,
            "end": 379,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 339,
              "end": 341,
              "decorators": [],
              "name": "fa",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 342,
              "end": 379,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 345,
                "end": 379,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 355,
                    "end": 373,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 362,
                      "end": 372,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 362,
                        "end": 368,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 362,
                          "end": 366
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 367,
                          "end": 368,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 371,
                        "end": 372,
                        "raw": "1",
                        "value": 1
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
            "start": 384,
            "end": 441,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 395,
              "end": 397,
              "decorators": [],
              "name": "fa",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 398,
              "end": 441,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 410,
                "end": 441,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 420,
                    "end": 435,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 420,
                      "end": 434,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 420,
                        "end": 426,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 420,
                          "end": 424
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 425,
                          "end": 426,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 429,
                        "end": 434,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 429,
                          "end": 430,
                          "decorators": [],
                          "name": "v",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 433,
                          "end": 434,
                          "raw": "1",
                          "value": 1
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 399,
                  "end": 408,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 400,
                    "end": 408,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 402,
                      "end": 408
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 88,
          "end": 92,
          "expression": {
            "type": "Identifier",
            "start": 89,
            "end": 92,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 100,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 109,
        "end": 110,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 445,
      "end": 502,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 454,
        "end": 502,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 460,
            "end": 473,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 467,
              "end": 468,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 471,
              "end": 472,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 478,
            "end": 500,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "start": 489,
              "end": 499,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 489,
                "end": 495,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 489,
                  "end": 493
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 495,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 498,
                "end": 499,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 453,
        "decorators": [],
        "name": "CC",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 504,
      "end": 856,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 524,
        "end": 856,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 530,
            "end": 543,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 537,
              "end": 538,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 541,
              "end": 542,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 548,
            "end": 570,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 555,
              "end": 556,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "start": 559,
              "end": 569,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 559,
                "end": 565,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 559,
                  "end": 563
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 565,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 568,
                "end": 569,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 575,
            "end": 607,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 582,
              "end": 583,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "BinaryExpression",
              "start": 586,
              "end": 606,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 586,
                "end": 602,
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "start": 586,
                  "end": 593,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 586,
                    "end": 591
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 592,
                    "end": 593,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 596,
                  "end": 602,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 596,
                    "end": 600
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 601,
                    "end": 602,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                }
              },
              "right": {
                "type": "Literal",
                "start": 605,
                "end": 606,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 612,
            "end": 640,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 619,
              "end": 620,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 623,
              "end": 639,
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "start": 629,
                "end": 639,
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "start": 629,
                  "end": 635,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 629,
                    "end": 633
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 634,
                    "end": 635,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 638,
                  "end": 639,
                  "raw": "1",
                  "value": 1
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 645,
            "end": 683,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 652,
              "end": 654,
              "decorators": [],
              "name": "ff",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 657,
              "end": 683,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 669,
                "end": 683,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 671,
                    "end": 681,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 671,
                      "end": 681,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 671,
                        "end": 677,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 671,
                          "end": 675
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 676,
                          "end": 677,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 680,
                        "end": 681,
                        "raw": "1",
                        "value": 1
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
            "start": 688,
            "end": 736,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 695,
              "end": 698,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 699,
              "end": 736,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 702,
                "end": 736,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 712,
                    "end": 730,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 719,
                      "end": 729,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 719,
                        "end": 725,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 719,
                          "end": 723
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 724,
                          "end": 725,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 728,
                        "end": 729,
                        "raw": "1",
                        "value": 1
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
            "start": 741,
            "end": 792,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 752,
              "end": 754,
              "decorators": [],
              "name": "fa",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 755,
              "end": 792,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 758,
                "end": 792,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 768,
                    "end": 786,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 775,
                      "end": 785,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 775,
                        "end": 781,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 775,
                          "end": 779
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 780,
                          "end": 781,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 784,
                        "end": 785,
                        "raw": "1",
                        "value": 1
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
            "start": 797,
            "end": 854,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 808,
              "end": 810,
              "decorators": [],
              "name": "fa",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 811,
              "end": 854,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 823,
                "end": 854,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 833,
                    "end": 848,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 833,
                      "end": 847,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 833,
                        "end": 839,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 833,
                          "end": 837
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 838,
                          "end": 839,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 842,
                        "end": 847,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 842,
                          "end": 843,
                          "decorators": [],
                          "name": "v",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 846,
                          "end": 847,
                          "raw": "1",
                          "value": 1
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 812,
                  "end": 821,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 813,
                    "end": 821,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 815,
                      "end": 821
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
        "start": 510,
        "end": 512,
        "decorators": [],
        "name": "DD",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 521,
        "end": 523,
        "decorators": [],
        "name": "CC",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
