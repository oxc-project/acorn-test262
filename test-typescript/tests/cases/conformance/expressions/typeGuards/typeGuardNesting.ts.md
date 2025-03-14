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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 29,
            "decorators": [],
            "name": "strOrBool",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 31,
      "end": 425,
      "alternate": null,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 136,
                  "decorators": [],
                  "name": "label",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 128,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 130,
                      "end": 136
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 139,
                  "end": 193,
                  "alternate": {
                    "type": "Literal",
                    "start": 185,
                    "end": 193,
                    "raw": "\"string\"",
                    "value": "string"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 182,
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 140,
                    "end": 169,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 140,
                      "end": 156,
                      "argument": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 156,
                        "decorators": [],
                        "name": "strOrBool",
                        "optional": false
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 161,
                      "end": 169,
                      "raw": "'string'",
                      "value": "string"
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 213,
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 204,
                    "end": 213,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 206,
                      "end": 213
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 216,
                  "end": 268,
                  "alternate": {
                    "type": "Literal",
                    "start": 263,
                    "end": 268,
                    "raw": "false",
                    "value": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 260,
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 217,
                    "end": 247,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 217,
                      "end": 233,
                      "argument": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 233,
                        "decorators": [],
                        "name": "strOrBool",
                        "optional": false
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 238,
                      "end": 247,
                      "raw": "'boolean'",
                      "value": "boolean"
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 289,
                  "decorators": [],
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 281,
                    "end": 289,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 283,
                      "end": 289
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 292,
                  "end": 347,
                  "alternate": {
                    "type": "Literal",
                    "start": 339,
                    "end": 347,
                    "raw": "\"string\"",
                    "value": "string"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 327,
                    "end": 336,
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 293,
                    "end": 323,
                    "operator": "!==",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 293,
                      "end": 309,
                      "argument": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 309,
                        "decorators": [],
                        "name": "strOrBool",
                        "optional": false
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 314,
                      "end": 323,
                      "raw": "'boolean'",
                      "value": "boolean"
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 368,
                  "decorators": [],
                  "name": "bool2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 359,
                    "end": 368,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 361,
                      "end": 368
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 371,
                  "end": 422,
                  "alternate": {
                    "type": "Literal",
                    "start": 417,
                    "end": 422,
                    "raw": "false",
                    "value": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 405,
                    "end": 414,
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 372,
                    "end": 401,
                    "operator": "!==",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 372,
                      "end": 388,
                      "argument": {
                        "type": "Identifier",
                        "start": 379,
                        "end": 388,
                        "decorators": [],
                        "name": "strOrBool",
                        "optional": false
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 393,
                      "end": 401,
                      "raw": "'string'",
                      "value": "string"
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 35,
        "end": 114,
        "operator": "||",
        "left": {
          "type": "LogicalExpression",
          "start": 36,
          "end": 80,
          "operator": "&&",
          "left": {
            "type": "BinaryExpression",
            "start": 36,
            "end": 66,
            "operator": "===",
            "left": {
              "type": "UnaryExpression",
              "start": 36,
              "end": 52,
              "argument": {
                "type": "Identifier",
                "start": 43,
                "end": 52,
                "decorators": [],
                "name": "strOrBool",
                "optional": false
              },
              "operator": "typeof",
              "prefix": true
            },
            "right": {
              "type": "Literal",
              "start": 57,
              "end": 66,
              "raw": "'boolean'",
              "value": "boolean"
            }
          },
          "right": {
            "type": "UnaryExpression",
            "start": 70,
            "end": 80,
            "argument": {
              "type": "Identifier",
              "start": 71,
              "end": 80,
              "decorators": [],
              "name": "strOrBool",
              "optional": false
            },
            "operator": "!",
            "prefix": true
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 85,
          "end": 114,
          "operator": "===",
          "left": {
            "type": "UnaryExpression",
            "start": 85,
            "end": 101,
            "argument": {
              "type": "Identifier",
              "start": 92,
              "end": 101,
              "decorators": [],
              "name": "strOrBool",
              "optional": false
            },
            "operator": "typeof",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 106,
            "end": 114,
            "raw": "'string'",
            "value": "string"
          }
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 427,
      "end": 821,
      "alternate": null,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 519,
                  "end": 532,
                  "decorators": [],
                  "name": "label",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 524,
                    "end": 532,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 526,
                      "end": 532
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 535,
                  "end": 589,
                  "alternate": {
                    "type": "Literal",
                    "start": 581,
                    "end": 589,
                    "raw": "\"string\"",
                    "value": "string"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 569,
                    "end": 578,
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 536,
                    "end": 565,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 536,
                      "end": 552,
                      "argument": {
                        "type": "Identifier",
                        "start": 543,
                        "end": 552,
                        "decorators": [],
                        "name": "strOrBool",
                        "optional": false
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 557,
                      "end": 565,
                      "raw": "'string'",
                      "value": "string"
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 596,
                  "end": 609,
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 600,
                    "end": 609,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 602,
                      "end": 609
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 612,
                  "end": 664,
                  "alternate": {
                    "type": "Literal",
                    "start": 659,
                    "end": 664,
                    "raw": "false",
                    "value": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 647,
                    "end": 656,
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 613,
                    "end": 643,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 613,
                      "end": 629,
                      "argument": {
                        "type": "Identifier",
                        "start": 620,
                        "end": 629,
                        "decorators": [],
                        "name": "strOrBool",
                        "optional": false
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 634,
                      "end": 643,
                      "raw": "'boolean'",
                      "value": "boolean"
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 685,
                  "decorators": [],
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 677,
                    "end": 685,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 679,
                      "end": 685
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 688,
                  "end": 743,
                  "alternate": {
                    "type": "Literal",
                    "start": 735,
                    "end": 743,
                    "raw": "\"string\"",
                    "value": "string"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 723,
                    "end": 732,
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 689,
                    "end": 719,
                    "operator": "!==",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 689,
                      "end": 705,
                      "argument": {
                        "type": "Identifier",
                        "start": 696,
                        "end": 705,
                        "decorators": [],
                        "name": "strOrBool",
                        "optional": false
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 710,
                      "end": 719,
                      "raw": "'boolean'",
                      "value": "boolean"
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 750,
                  "end": 764,
                  "decorators": [],
                  "name": "bool2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 755,
                    "end": 764,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 757,
                      "end": 764
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 767,
                  "end": 818,
                  "alternate": {
                    "type": "Literal",
                    "start": 813,
                    "end": 818,
                    "raw": "false",
                    "value": false
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 801,
                    "end": 810,
                    "decorators": [],
                    "name": "strOrBool",
                    "optional": false
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 768,
                    "end": 797,
                    "operator": "!==",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 768,
                      "end": 784,
                      "argument": {
                        "type": "Identifier",
                        "start": 775,
                        "end": 784,
                        "decorators": [],
                        "name": "strOrBool",
                        "optional": false
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 789,
                      "end": 797,
                      "raw": "'string'",
                      "value": "string"
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 431,
        "end": 510,
        "operator": "||",
        "left": {
          "type": "LogicalExpression",
          "start": 432,
          "end": 475,
          "operator": "&&",
          "left": {
            "type": "BinaryExpression",
            "start": 432,
            "end": 461,
            "operator": "!==",
            "left": {
              "type": "UnaryExpression",
              "start": 432,
              "end": 448,
              "argument": {
                "type": "Identifier",
                "start": 439,
                "end": 448,
                "decorators": [],
                "name": "strOrBool",
                "optional": false
              },
              "operator": "typeof",
              "prefix": true
            },
            "right": {
              "type": "Literal",
              "start": 453,
              "end": 461,
              "raw": "'string'",
              "value": "string"
            }
          },
          "right": {
            "type": "UnaryExpression",
            "start": 465,
            "end": 475,
            "argument": {
              "type": "Identifier",
              "start": 466,
              "end": 475,
              "decorators": [],
              "name": "strOrBool",
              "optional": false
            },
            "operator": "!",
            "prefix": true
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 480,
          "end": 510,
          "operator": "!==",
          "left": {
            "type": "UnaryExpression",
            "start": 480,
            "end": 496,
            "argument": {
              "type": "Identifier",
              "start": 487,
              "end": 496,
              "decorators": [],
              "name": "strOrBool",
              "optional": false
            },
            "operator": "typeof",
            "prefix": true
          },
          "right": {
            "type": "Literal",
            "start": 501,
            "end": 510,
            "raw": "'boolean'",
            "value": "boolean"
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
