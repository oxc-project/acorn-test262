__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 822,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 29,
            "name": "strOrBool",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 29,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 15,
                "end": 29,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 15,
                    "end": 21
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 22,
                    "end": 29
                  }
                ]
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
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 31,
      "end": 425,
      "test": {
        "type": "LogicalExpression",
        "start": 35,
        "end": 114,
        "left": {
          "type": "LogicalExpression",
          "start": 36,
          "end": 80,
          "left": {
            "type": "BinaryExpression",
            "start": 36,
            "end": 66,
            "left": {
              "type": "UnaryExpression",
              "start": 36,
              "end": 52,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 43,
                "end": 52,
                "name": "strOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 57,
              "end": 66,
              "value": "boolean",
              "raw": "'boolean'"
            }
          },
          "operator": "&&",
          "right": {
            "type": "UnaryExpression",
            "start": 70,
            "end": 80,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 71,
              "end": 80,
              "name": "strOrBool",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "start": 85,
          "end": 114,
          "left": {
            "type": "UnaryExpression",
            "start": 85,
            "end": 101,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 92,
              "end": 101,
              "name": "strOrBool",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 106,
            "end": 114,
            "value": "string",
            "raw": "'string'"
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 116,
        "end": 425,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 119,
            "end": 194,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 123,
                "end": 193,
                "id": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 136,
                  "name": "label",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 128,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 130,
                      "end": 136
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 139,
                  "end": 193,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 140,
                    "end": 169,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 140,
                      "end": 156,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 156,
                        "name": "strOrBool",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 161,
                      "end": 169,
                      "value": "string",
                      "raw": "'string'"
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 182,
                    "name": "strOrBool",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 185,
                    "end": 193,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 196,
            "end": 269,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 200,
                "end": 268,
                "id": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 213,
                  "name": "bool",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 204,
                    "end": 213,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 206,
                      "end": 213
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 216,
                  "end": 268,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 217,
                    "end": 247,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 217,
                      "end": 233,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 233,
                        "name": "strOrBool",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 238,
                      "end": 247,
                      "value": "boolean",
                      "raw": "'boolean'"
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 260,
                    "name": "strOrBool",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 263,
                    "end": 268,
                    "value": false,
                    "raw": "false"
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 271,
            "end": 348,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 275,
                "end": 347,
                "id": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 289,
                  "name": "label2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 281,
                    "end": 289,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 283,
                      "end": 289
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 292,
                  "end": 347,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 293,
                    "end": 323,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 293,
                      "end": 309,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 309,
                        "name": "strOrBool",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "start": 314,
                      "end": 323,
                      "value": "boolean",
                      "raw": "'boolean'"
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 327,
                    "end": 336,
                    "name": "strOrBool",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 339,
                    "end": 347,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 350,
            "end": 423,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 354,
                "end": 422,
                "id": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 368,
                  "name": "bool2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 359,
                    "end": 368,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 361,
                      "end": 368
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 371,
                  "end": 422,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 372,
                    "end": 401,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 372,
                      "end": 388,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 379,
                        "end": 388,
                        "name": "strOrBool",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "start": 393,
                      "end": 401,
                      "value": "string",
                      "raw": "'string'"
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 405,
                    "end": 414,
                    "name": "strOrBool",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 417,
                    "end": 422,
                    "value": false,
                    "raw": "false"
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 427,
      "end": 821,
      "test": {
        "type": "LogicalExpression",
        "start": 431,
        "end": 510,
        "left": {
          "type": "LogicalExpression",
          "start": 432,
          "end": 475,
          "left": {
            "type": "BinaryExpression",
            "start": 432,
            "end": 461,
            "left": {
              "type": "UnaryExpression",
              "start": 432,
              "end": 448,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 439,
                "end": 448,
                "name": "strOrBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "start": 453,
              "end": 461,
              "value": "string",
              "raw": "'string'"
            }
          },
          "operator": "&&",
          "right": {
            "type": "UnaryExpression",
            "start": 465,
            "end": 475,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 466,
              "end": 475,
              "name": "strOrBool",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "start": 480,
          "end": 510,
          "left": {
            "type": "UnaryExpression",
            "start": 480,
            "end": 496,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 487,
              "end": 496,
              "name": "strOrBool",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "start": 501,
            "end": 510,
            "value": "boolean",
            "raw": "'boolean'"
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 512,
        "end": 821,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 515,
            "end": 590,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 519,
                "end": 589,
                "id": {
                  "type": "Identifier",
                  "start": 519,
                  "end": 532,
                  "name": "label",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 524,
                    "end": 532,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 526,
                      "end": 532
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 535,
                  "end": 589,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 536,
                    "end": 565,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 536,
                      "end": 552,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 543,
                        "end": 552,
                        "name": "strOrBool",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 557,
                      "end": 565,
                      "value": "string",
                      "raw": "'string'"
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 569,
                    "end": 578,
                    "name": "strOrBool",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 581,
                    "end": 589,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 592,
            "end": 665,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 596,
                "end": 664,
                "id": {
                  "type": "Identifier",
                  "start": 596,
                  "end": 609,
                  "name": "bool",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 600,
                    "end": 609,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 602,
                      "end": 609
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 612,
                  "end": 664,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 613,
                    "end": 643,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 613,
                      "end": 629,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 620,
                        "end": 629,
                        "name": "strOrBool",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 634,
                      "end": 643,
                      "value": "boolean",
                      "raw": "'boolean'"
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 647,
                    "end": 656,
                    "name": "strOrBool",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 659,
                    "end": 664,
                    "value": false,
                    "raw": "false"
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 667,
            "end": 744,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 671,
                "end": 743,
                "id": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 685,
                  "name": "label2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 677,
                    "end": 685,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 679,
                      "end": 685
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 688,
                  "end": 743,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 689,
                    "end": 719,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 689,
                      "end": 705,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 696,
                        "end": 705,
                        "name": "strOrBool",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "start": 710,
                      "end": 719,
                      "value": "boolean",
                      "raw": "'boolean'"
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 723,
                    "end": 732,
                    "name": "strOrBool",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 735,
                    "end": 743,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 746,
            "end": 819,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 750,
                "end": 818,
                "id": {
                  "type": "Identifier",
                  "start": 750,
                  "end": 764,
                  "name": "bool2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 755,
                    "end": 764,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 757,
                      "end": 764
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 767,
                  "end": 818,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 768,
                    "end": 797,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 768,
                      "end": 784,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 775,
                        "end": 784,
                        "name": "strOrBool",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "start": 789,
                      "end": 797,
                      "value": "string",
                      "raw": "'string'"
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 801,
                    "end": 810,
                    "name": "strOrBool",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 813,
                    "end": 818,
                    "value": false,
                    "raw": "false"
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
