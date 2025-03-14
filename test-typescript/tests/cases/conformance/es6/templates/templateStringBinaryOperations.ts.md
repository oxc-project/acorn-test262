templateStringBinaryOperations.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 1352,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 9,
            "end": 21,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 9,
              "end": 10,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 13,
              "end": 21,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 17,
                  "end": 18,
                  "raw": "3",
                  "value": 3
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 13,
                  "end": 16,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 19,
                  "end": 21,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 31,
            "end": 44,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 31,
              "end": 32,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 35,
              "end": 44,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 40,
                  "end": 41,
                  "raw": "3",
                  "value": 3
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 35,
                  "end": 39,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 42,
                  "end": 44,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 54,
            "end": 67,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 54,
              "end": 55,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 58,
              "end": 67,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 62,
                  "end": 63,
                  "raw": "3",
                  "value": 3
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 58,
                  "end": 61,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 64,
                  "end": 67,
                  "tail": true,
                  "value": {
                    "cooked": "4",
                    "raw": "4"
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 91,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 77,
            "end": 91,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 77,
              "end": 78,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 81,
              "end": 91,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 86,
                  "end": 87,
                  "raw": "3",
                  "value": 3
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 81,
                  "end": 85,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 88,
                  "end": 91,
                  "tail": true,
                  "value": {
                    "cooked": "4",
                    "raw": "4"
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "decorators": [],
            "name": "e",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 101,
            "end": 113,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 101,
              "end": 109,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 105,
                  "end": 106,
                  "raw": "3",
                  "value": 3
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 101,
                  "end": 104,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 107,
                  "end": 109,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 112,
              "end": 113,
              "raw": "5",
              "value": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 123,
            "end": 136,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 123,
              "end": 132,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 128,
                  "end": 129,
                  "raw": "3",
                  "value": 3
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 123,
                  "end": 127,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 130,
                  "end": 132,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 135,
              "end": 136,
              "raw": "5",
              "value": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "g",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 146,
            "end": 159,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 146,
              "end": 155,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 150,
                  "end": 151,
                  "raw": "3",
                  "value": 3
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 146,
                  "end": 149,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 152,
                  "end": 155,
                  "tail": true,
                  "value": {
                    "cooked": "4",
                    "raw": "4"
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 158,
              "end": 159,
              "raw": "5",
              "value": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 183,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "h",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 169,
            "end": 183,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 169,
              "end": 179,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 174,
                  "end": 175,
                  "raw": "3",
                  "value": 3
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 169,
                  "end": 173,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 176,
                  "end": 179,
                  "tail": true,
                  "value": {
                    "cooked": "4",
                    "raw": "4"
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 182,
              "end": 183,
              "raw": "5",
              "value": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 209,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 190,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 193,
            "end": 209,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 193,
              "end": 205,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 193,
                "end": 194,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 197,
                "end": 205,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 201,
                    "end": 202,
                    "raw": "3",
                    "value": 3
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 197,
                    "end": 200,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 203,
                    "end": 205,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 208,
              "end": 209,
              "raw": "5",
              "value": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 236,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "decorators": [],
            "name": "j",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 219,
            "end": 236,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 219,
              "end": 232,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 219,
                "end": 220,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 223,
                "end": 232,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 228,
                    "end": 229,
                    "raw": "3",
                    "value": 3
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 223,
                    "end": 227,
                    "tail": false,
                    "value": {
                      "cooked": "2",
                      "raw": "2"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 230,
                    "end": 232,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 235,
              "end": 236,
              "raw": "5",
              "value": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 238,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 263,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 243,
            "decorators": [],
            "name": "k",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 246,
            "end": 263,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 246,
              "end": 259,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 246,
                "end": 247,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 250,
                "end": 259,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 254,
                    "end": 255,
                    "raw": "3",
                    "value": 3
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 250,
                    "end": 253,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 256,
                    "end": 259,
                    "tail": true,
                    "value": {
                      "cooked": "4",
                      "raw": "4"
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 262,
              "end": 263,
              "raw": "5",
              "value": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 291,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 270,
            "decorators": [],
            "name": "l",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 273,
            "end": 291,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 273,
              "end": 287,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 273,
                "end": 274,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 277,
                "end": 287,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 282,
                    "end": 283,
                    "raw": "3",
                    "value": 3
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 277,
                    "end": 281,
                    "tail": false,
                    "value": {
                      "cooked": "2",
                      "raw": "2"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 284,
                    "end": 287,
                    "tail": true,
                    "value": {
                      "cooked": "4",
                      "raw": "4"
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 290,
              "end": 291,
              "raw": "5",
              "value": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 294,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 319,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 300,
            "decorators": [],
            "name": "a2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 303,
            "end": 319,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 303,
              "end": 304,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 307,
              "end": 319,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 311,
                  "end": 316,
                  "operator": "-",
                  "left": {
                    "type": "Literal",
                    "start": 311,
                    "end": 312,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 315,
                    "end": 316,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 307,
                  "end": 310,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 317,
                  "end": 319,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 321,
      "end": 348,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 347,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "decorators": [],
            "name": "b2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 330,
            "end": 347,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 330,
              "end": 331,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 334,
              "end": 347,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 339,
                  "end": 344,
                  "operator": "-",
                  "left": {
                    "type": "Literal",
                    "start": 339,
                    "end": 340,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 343,
                    "end": 344,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 334,
                  "end": 338,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 345,
                  "end": 347,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 375,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 355,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 358,
            "end": 375,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 358,
              "end": 359,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 362,
              "end": 375,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 366,
                  "end": 371,
                  "operator": "-",
                  "left": {
                    "type": "Literal",
                    "start": 366,
                    "end": 367,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 370,
                    "end": 371,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 362,
                  "end": 365,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 372,
                  "end": 375,
                  "tail": true,
                  "value": {
                    "cooked": "5",
                    "raw": "5"
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 377,
      "end": 405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 404,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 383,
            "decorators": [],
            "name": "d2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 386,
            "end": 404,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 386,
              "end": 387,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 390,
              "end": 404,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 395,
                  "end": 400,
                  "operator": "-",
                  "left": {
                    "type": "Literal",
                    "start": 395,
                    "end": 396,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 399,
                    "end": 400,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 390,
                  "end": 394,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 401,
                  "end": 404,
                  "tail": true,
                  "value": {
                    "cooked": "5",
                    "raw": "5"
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 406,
      "end": 432,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 410,
          "end": 431,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 410,
            "end": 412,
            "decorators": [],
            "name": "e2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 415,
            "end": 431,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 415,
              "end": 427,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 419,
                  "end": 424,
                  "operator": "-",
                  "left": {
                    "type": "Literal",
                    "start": 419,
                    "end": 420,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 423,
                    "end": 424,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 415,
                  "end": 418,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 425,
                  "end": 427,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 430,
              "end": 431,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 433,
      "end": 460,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 437,
          "end": 459,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 437,
            "end": 439,
            "decorators": [],
            "name": "f2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 442,
            "end": 459,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 442,
              "end": 455,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 447,
                  "end": 452,
                  "operator": "-",
                  "left": {
                    "type": "Literal",
                    "start": 447,
                    "end": 448,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 451,
                    "end": 452,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 442,
                  "end": 446,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 453,
                  "end": 455,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 458,
              "end": 459,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 461,
      "end": 488,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 465,
          "end": 487,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 465,
            "end": 467,
            "decorators": [],
            "name": "g2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 470,
            "end": 487,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 470,
              "end": 483,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 474,
                  "end": 479,
                  "operator": "-",
                  "left": {
                    "type": "Literal",
                    "start": 474,
                    "end": 475,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 478,
                    "end": 479,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 470,
                  "end": 473,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 480,
                  "end": 483,
                  "tail": true,
                  "value": {
                    "cooked": "5",
                    "raw": "5"
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 486,
              "end": 487,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 489,
      "end": 517,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 493,
          "end": 516,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 493,
            "end": 495,
            "decorators": [],
            "name": "h2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 498,
            "end": 516,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 498,
              "end": 512,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 503,
                  "end": 508,
                  "operator": "-",
                  "left": {
                    "type": "Literal",
                    "start": 503,
                    "end": 504,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 507,
                    "end": 508,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 498,
                  "end": 502,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 509,
                  "end": 512,
                  "tail": true,
                  "value": {
                    "cooked": "5",
                    "raw": "5"
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 515,
              "end": 516,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 518,
      "end": 548,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 522,
          "end": 547,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 524,
            "decorators": [],
            "name": "i2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 527,
            "end": 547,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 527,
              "end": 543,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 527,
                "end": 528,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 531,
                "end": 543,
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "start": 535,
                    "end": 540,
                    "operator": "-",
                    "left": {
                      "type": "Literal",
                      "start": 535,
                      "end": 536,
                      "raw": "3",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "start": 539,
                      "end": 540,
                      "raw": "4",
                      "value": 4
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 531,
                    "end": 534,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 541,
                    "end": 543,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 546,
              "end": 547,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 549,
      "end": 580,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 553,
          "end": 579,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 553,
            "end": 555,
            "decorators": [],
            "name": "j2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 558,
            "end": 579,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 558,
              "end": 575,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 558,
                "end": 559,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 562,
                "end": 575,
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "start": 567,
                    "end": 572,
                    "operator": "-",
                    "left": {
                      "type": "Literal",
                      "start": 567,
                      "end": 568,
                      "raw": "3",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "start": 571,
                      "end": 572,
                      "raw": "4",
                      "value": 4
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 562,
                    "end": 566,
                    "tail": false,
                    "value": {
                      "cooked": "2",
                      "raw": "2"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 573,
                    "end": 575,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 578,
              "end": 579,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 581,
      "end": 612,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 585,
          "end": 611,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 585,
            "end": 587,
            "decorators": [],
            "name": "k2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 590,
            "end": 611,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 590,
              "end": 607,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 590,
                "end": 591,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 594,
                "end": 607,
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "start": 598,
                    "end": 603,
                    "operator": "-",
                    "left": {
                      "type": "Literal",
                      "start": 598,
                      "end": 599,
                      "raw": "3",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "start": 602,
                      "end": 603,
                      "raw": "4",
                      "value": 4
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 594,
                    "end": 597,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 604,
                    "end": 607,
                    "tail": true,
                    "value": {
                      "cooked": "5",
                      "raw": "5"
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 610,
              "end": 611,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 613,
      "end": 645,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 617,
          "end": 644,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 617,
            "end": 619,
            "decorators": [],
            "name": "l2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 622,
            "end": 644,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 622,
              "end": 640,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 622,
                "end": 623,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 626,
                "end": 640,
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "start": 631,
                    "end": 636,
                    "operator": "-",
                    "left": {
                      "type": "Literal",
                      "start": 631,
                      "end": 632,
                      "raw": "3",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "start": 635,
                      "end": 636,
                      "raw": "4",
                      "value": 4
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 626,
                    "end": 630,
                    "tail": false,
                    "value": {
                      "cooked": "2",
                      "raw": "2"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 637,
                    "end": 640,
                    "tail": true,
                    "value": {
                      "cooked": "5",
                      "raw": "5"
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 643,
              "end": 644,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 647,
      "end": 673,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 651,
          "end": 672,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 651,
            "end": 653,
            "decorators": [],
            "name": "a3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 656,
            "end": 672,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 656,
              "end": 657,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 660,
              "end": 672,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 664,
                  "end": 669,
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "start": 664,
                    "end": 665,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 668,
                    "end": 669,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 660,
                  "end": 663,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 670,
                  "end": 672,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 674,
      "end": 701,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 678,
          "end": 700,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 678,
            "end": 680,
            "decorators": [],
            "name": "b3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 683,
            "end": 700,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 683,
              "end": 684,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 687,
              "end": 700,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 692,
                  "end": 697,
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "start": 692,
                    "end": 693,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 696,
                    "end": 697,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 687,
                  "end": 691,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 698,
                  "end": 700,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 702,
      "end": 729,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 706,
          "end": 728,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 706,
            "end": 708,
            "decorators": [],
            "name": "c3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 711,
            "end": 728,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 711,
              "end": 712,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 715,
              "end": 728,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 719,
                  "end": 724,
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "start": 719,
                    "end": 720,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 723,
                    "end": 724,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 715,
                  "end": 718,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 725,
                  "end": 728,
                  "tail": true,
                  "value": {
                    "cooked": "5",
                    "raw": "5"
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 730,
      "end": 758,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 734,
          "end": 757,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 734,
            "end": 736,
            "decorators": [],
            "name": "d3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 739,
            "end": 757,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 739,
              "end": 740,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 743,
              "end": 757,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 748,
                  "end": 753,
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "start": 748,
                    "end": 749,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 752,
                    "end": 753,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 743,
                  "end": 747,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 754,
                  "end": 757,
                  "tail": true,
                  "value": {
                    "cooked": "5",
                    "raw": "5"
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 759,
      "end": 785,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 763,
          "end": 784,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 763,
            "end": 765,
            "decorators": [],
            "name": "e3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 768,
            "end": 784,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 768,
              "end": 780,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 772,
                  "end": 777,
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "start": 772,
                    "end": 773,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 776,
                    "end": 777,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 768,
                  "end": 771,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 778,
                  "end": 780,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 783,
              "end": 784,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 786,
      "end": 813,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 790,
          "end": 812,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 790,
            "end": 792,
            "decorators": [],
            "name": "f3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 795,
            "end": 812,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 795,
              "end": 808,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 800,
                  "end": 805,
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "start": 800,
                    "end": 801,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 804,
                    "end": 805,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 795,
                  "end": 799,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 806,
                  "end": 808,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 811,
              "end": 812,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 814,
      "end": 841,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 818,
          "end": 840,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 818,
            "end": 820,
            "decorators": [],
            "name": "g3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 823,
            "end": 840,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 823,
              "end": 836,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 827,
                  "end": 832,
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "start": 827,
                    "end": 828,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 831,
                    "end": 832,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 823,
                  "end": 826,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 833,
                  "end": 836,
                  "tail": true,
                  "value": {
                    "cooked": "5",
                    "raw": "5"
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 839,
              "end": 840,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 842,
      "end": 870,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 846,
          "end": 869,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 846,
            "end": 848,
            "decorators": [],
            "name": "h3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 851,
            "end": 869,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 851,
              "end": 865,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 856,
                  "end": 861,
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "start": 856,
                    "end": 857,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 860,
                    "end": 861,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 851,
                  "end": 855,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 862,
                  "end": 865,
                  "tail": true,
                  "value": {
                    "cooked": "5",
                    "raw": "5"
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 868,
              "end": 869,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 871,
      "end": 901,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 875,
          "end": 900,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 875,
            "end": 877,
            "decorators": [],
            "name": "i3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 880,
            "end": 900,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 880,
              "end": 896,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 880,
                "end": 881,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 884,
                "end": 896,
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "start": 888,
                    "end": 893,
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "start": 888,
                      "end": 889,
                      "raw": "3",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "start": 892,
                      "end": 893,
                      "raw": "4",
                      "value": 4
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 884,
                    "end": 887,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 894,
                    "end": 896,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 899,
              "end": 900,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 902,
      "end": 933,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 906,
          "end": 932,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 906,
            "end": 908,
            "decorators": [],
            "name": "j3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 911,
            "end": 932,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 911,
              "end": 928,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 911,
                "end": 912,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 915,
                "end": 928,
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "start": 920,
                    "end": 925,
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "start": 920,
                      "end": 921,
                      "raw": "3",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "start": 924,
                      "end": 925,
                      "raw": "4",
                      "value": 4
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 915,
                    "end": 919,
                    "tail": false,
                    "value": {
                      "cooked": "2",
                      "raw": "2"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 926,
                    "end": 928,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 931,
              "end": 932,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 934,
      "end": 965,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 938,
          "end": 964,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 938,
            "end": 940,
            "decorators": [],
            "name": "k3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 943,
            "end": 964,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 943,
              "end": 960,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 943,
                "end": 944,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 947,
                "end": 960,
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "start": 951,
                    "end": 956,
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "start": 951,
                      "end": 952,
                      "raw": "3",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "start": 955,
                      "end": 956,
                      "raw": "4",
                      "value": 4
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 947,
                    "end": 950,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 957,
                    "end": 960,
                    "tail": true,
                    "value": {
                      "cooked": "5",
                      "raw": "5"
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 963,
              "end": 964,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 966,
      "end": 998,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 970,
          "end": 997,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 970,
            "end": 972,
            "decorators": [],
            "name": "l3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 975,
            "end": 997,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 975,
              "end": 993,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 975,
                "end": 976,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 979,
                "end": 993,
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "start": 984,
                    "end": 989,
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "start": 984,
                      "end": 985,
                      "raw": "3",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "start": 988,
                      "end": 989,
                      "raw": "4",
                      "value": 4
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 979,
                    "end": 983,
                    "tail": false,
                    "value": {
                      "cooked": "2",
                      "raw": "2"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 990,
                    "end": 993,
                    "tail": true,
                    "value": {
                      "cooked": "5",
                      "raw": "5"
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 996,
              "end": 997,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1000,
      "end": 1026,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1004,
          "end": 1025,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1004,
            "end": 1006,
            "decorators": [],
            "name": "a4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1009,
            "end": 1025,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 1009,
              "end": 1010,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 1013,
              "end": 1025,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 1017,
                  "end": 1022,
                  "operator": "&",
                  "left": {
                    "type": "Literal",
                    "start": 1017,
                    "end": 1018,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1021,
                    "end": 1022,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1013,
                  "end": 1016,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1023,
                  "end": 1025,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1027,
      "end": 1054,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1031,
          "end": 1053,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1031,
            "end": 1033,
            "decorators": [],
            "name": "b4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1036,
            "end": 1053,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 1036,
              "end": 1037,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 1040,
              "end": 1053,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 1045,
                  "end": 1050,
                  "operator": "&",
                  "left": {
                    "type": "Literal",
                    "start": 1045,
                    "end": 1046,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1049,
                    "end": 1050,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1040,
                  "end": 1044,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1051,
                  "end": 1053,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1055,
      "end": 1082,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1059,
          "end": 1081,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1059,
            "end": 1061,
            "decorators": [],
            "name": "c4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1064,
            "end": 1081,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 1064,
              "end": 1065,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 1068,
              "end": 1081,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 1072,
                  "end": 1077,
                  "operator": "&",
                  "left": {
                    "type": "Literal",
                    "start": 1072,
                    "end": 1073,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1076,
                    "end": 1077,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1068,
                  "end": 1071,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1078,
                  "end": 1081,
                  "tail": true,
                  "value": {
                    "cooked": "5",
                    "raw": "5"
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1083,
      "end": 1111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1087,
          "end": 1110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1087,
            "end": 1089,
            "decorators": [],
            "name": "d4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1092,
            "end": 1110,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 1092,
              "end": 1093,
              "raw": "1",
              "value": 1
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 1096,
              "end": 1110,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 1101,
                  "end": 1106,
                  "operator": "&",
                  "left": {
                    "type": "Literal",
                    "start": 1101,
                    "end": 1102,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1105,
                    "end": 1106,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1096,
                  "end": 1100,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1107,
                  "end": 1110,
                  "tail": true,
                  "value": {
                    "cooked": "5",
                    "raw": "5"
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1112,
      "end": 1138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1116,
          "end": 1137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1116,
            "end": 1118,
            "decorators": [],
            "name": "e4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1121,
            "end": 1137,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 1121,
              "end": 1133,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 1125,
                  "end": 1130,
                  "operator": "&",
                  "left": {
                    "type": "Literal",
                    "start": 1125,
                    "end": 1126,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1129,
                    "end": 1130,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1121,
                  "end": 1124,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1131,
                  "end": 1133,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 1136,
              "end": 1137,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1139,
      "end": 1166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1143,
          "end": 1165,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1143,
            "end": 1145,
            "decorators": [],
            "name": "f4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1148,
            "end": 1165,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 1148,
              "end": 1161,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 1153,
                  "end": 1158,
                  "operator": "&",
                  "left": {
                    "type": "Literal",
                    "start": 1153,
                    "end": 1154,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1157,
                    "end": 1158,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1148,
                  "end": 1152,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1159,
                  "end": 1161,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 1164,
              "end": 1165,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1167,
      "end": 1194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1171,
          "end": 1193,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1171,
            "end": 1173,
            "decorators": [],
            "name": "g4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1176,
            "end": 1193,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 1176,
              "end": 1189,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 1180,
                  "end": 1185,
                  "operator": "&",
                  "left": {
                    "type": "Literal",
                    "start": 1180,
                    "end": 1181,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1184,
                    "end": 1185,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1176,
                  "end": 1179,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1186,
                  "end": 1189,
                  "tail": true,
                  "value": {
                    "cooked": "5",
                    "raw": "5"
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 1192,
              "end": 1193,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1195,
      "end": 1223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1199,
          "end": 1222,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1199,
            "end": 1201,
            "decorators": [],
            "name": "h4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1204,
            "end": 1222,
            "operator": "+",
            "left": {
              "type": "TemplateLiteral",
              "start": 1204,
              "end": 1218,
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 1209,
                  "end": 1214,
                  "operator": "&",
                  "left": {
                    "type": "Literal",
                    "start": 1209,
                    "end": 1210,
                    "raw": "3",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1213,
                    "end": 1214,
                    "raw": "4",
                    "value": 4
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1204,
                  "end": 1208,
                  "tail": false,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1215,
                  "end": 1218,
                  "tail": true,
                  "value": {
                    "cooked": "5",
                    "raw": "5"
                  }
                }
              ]
            },
            "right": {
              "type": "Literal",
              "start": 1221,
              "end": 1222,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1224,
      "end": 1254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1228,
          "end": 1253,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1228,
            "end": 1230,
            "decorators": [],
            "name": "i4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1233,
            "end": 1253,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 1233,
              "end": 1249,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 1233,
                "end": 1234,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 1237,
                "end": 1249,
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "start": 1241,
                    "end": 1246,
                    "operator": "&",
                    "left": {
                      "type": "Literal",
                      "start": 1241,
                      "end": 1242,
                      "raw": "3",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1245,
                      "end": 1246,
                      "raw": "4",
                      "value": 4
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1237,
                    "end": 1240,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1247,
                    "end": 1249,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 1252,
              "end": 1253,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1255,
      "end": 1286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1259,
          "end": 1285,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1259,
            "end": 1261,
            "decorators": [],
            "name": "j4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1264,
            "end": 1285,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 1264,
              "end": 1281,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 1264,
                "end": 1265,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 1268,
                "end": 1281,
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "start": 1273,
                    "end": 1278,
                    "operator": "&",
                    "left": {
                      "type": "Literal",
                      "start": 1273,
                      "end": 1274,
                      "raw": "3",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1277,
                      "end": 1278,
                      "raw": "4",
                      "value": 4
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1268,
                    "end": 1272,
                    "tail": false,
                    "value": {
                      "cooked": "2",
                      "raw": "2"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1279,
                    "end": 1281,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 1284,
              "end": 1285,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1287,
      "end": 1318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1291,
          "end": 1317,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1291,
            "end": 1293,
            "decorators": [],
            "name": "k4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1296,
            "end": 1317,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 1296,
              "end": 1313,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 1296,
                "end": 1297,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 1300,
                "end": 1313,
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "start": 1304,
                    "end": 1309,
                    "operator": "&",
                    "left": {
                      "type": "Literal",
                      "start": 1304,
                      "end": 1305,
                      "raw": "3",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1308,
                      "end": 1309,
                      "raw": "4",
                      "value": 4
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1300,
                    "end": 1303,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1310,
                    "end": 1313,
                    "tail": true,
                    "value": {
                      "cooked": "5",
                      "raw": "5"
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 1316,
              "end": 1317,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1319,
      "end": 1351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1323,
          "end": 1350,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1323,
            "end": 1325,
            "decorators": [],
            "name": "l4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1328,
            "end": 1350,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 1328,
              "end": 1346,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 1328,
                "end": 1329,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 1332,
                "end": 1346,
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "start": 1337,
                    "end": 1342,
                    "operator": "&",
                    "left": {
                      "type": "Literal",
                      "start": 1337,
                      "end": 1338,
                      "raw": "3",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1341,
                      "end": 1342,
                      "raw": "4",
                      "value": 4
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1332,
                    "end": 1336,
                    "tail": false,
                    "value": {
                      "cooked": "2",
                      "raw": "2"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1343,
                    "end": 1346,
                    "tail": true,
                    "value": {
                      "cooked": "5",
                      "raw": "5"
                    }
                  }
                ]
              }
            },
            "right": {
              "type": "Literal",
              "start": 1349,
              "end": 1350,
              "raw": "6",
              "value": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
