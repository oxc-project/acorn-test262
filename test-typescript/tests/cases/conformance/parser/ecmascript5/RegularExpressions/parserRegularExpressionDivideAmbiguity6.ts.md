__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1161,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 1161,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 52,
        "end": 1161,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 58,
            "end": 69,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 62,
                "end": 68,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 66,
                  "end": 68,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 74,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 78,
                "end": 79,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 85,
            "end": 113,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 85,
              "end": 112,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 85,
                "end": 89,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 87,
                  "end": 88,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 92,
                "end": 112,
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 93,
                  "end": 102,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 97,
                    "end": 102,
                    "operator": "*",
                    "left": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 99,
                      "decorators": [],
                      "name": "a0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 100,
                      "end": 102,
                      "decorators": [],
                      "name": "a0",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 106,
                  "end": 112,
                  "raw": "0xFFFF",
                  "value": 65535,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 118,
            "end": 170,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 118,
              "end": 169,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 118,
                "end": 122,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 120,
                  "end": 121,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 125,
                "end": 169,
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 126,
                  "end": 159,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 130,
                    "end": 159,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 131,
                      "end": 148,
                      "operator": "|",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 132,
                        "end": 143,
                        "operator": "/",
                        "left": {
                          "type": "Identifier",
                          "start": 132,
                          "end": 133,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 136,
                          "end": 143,
                          "raw": "0x10000",
                          "value": 65536,
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 147,
                        "end": 148,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 152,
                      "end": 159,
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 152,
                        "end": 156,
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "start": 152,
                          "end": 153,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 156,
                          "decorators": [],
                          "name": "a0",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 159,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 163,
                  "end": 169,
                  "raw": "0xFFFF",
                  "value": 65535,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 175,
            "end": 235,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 175,
              "end": 234,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 175,
                "end": 179,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 176,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 177,
                  "end": 178,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 182,
                "end": 234,
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 183,
                  "end": 224,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 184,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 187,
                    "end": 224,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 187,
                      "end": 216,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 188,
                        "end": 205,
                        "operator": "|",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 189,
                          "end": 200,
                          "operator": "/",
                          "left": {
                            "type": "Identifier",
                            "start": 189,
                            "end": 190,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 193,
                            "end": 200,
                            "raw": "0x10000",
                            "value": 65536,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 204,
                          "end": 205,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 209,
                        "end": 216,
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 209,
                          "end": 213,
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "start": 209,
                            "end": 210,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 211,
                            "end": 213,
                            "decorators": [],
                            "name": "a0",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 216,
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 219,
                      "end": 224,
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 221,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 224,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 228,
                  "end": 234,
                  "raw": "0xFFFF",
                  "value": 65535,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 240,
            "end": 302,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 240,
              "end": 301,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 240,
                "end": 244,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 241,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 242,
                  "end": 243,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 247,
                "end": 301,
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 248,
                  "end": 291,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 249,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 252,
                    "end": 291,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 252,
                      "end": 281,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 253,
                        "end": 270,
                        "operator": "|",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 254,
                          "end": 265,
                          "operator": "/",
                          "left": {
                            "type": "Identifier",
                            "start": 254,
                            "end": 255,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 258,
                            "end": 265,
                            "raw": "0x10000",
                            "value": 65536,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 269,
                          "end": 270,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 274,
                        "end": 281,
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 274,
                          "end": 278,
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "start": 274,
                            "end": 275,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 276,
                            "end": 278,
                            "decorators": [],
                            "name": "a0",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 281,
                          "decorators": [],
                          "name": "a3",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 284,
                      "end": 291,
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 284,
                        "end": 288,
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "start": 284,
                          "end": 285,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 286,
                          "end": 288,
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 289,
                        "end": 291,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 295,
                  "end": 301,
                  "raw": "0xFFFF",
                  "value": 65535,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 307,
            "end": 377,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 307,
              "end": 376,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 307,
                "end": 311,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 308,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 309,
                  "end": 310,
                  "raw": "4",
                  "value": 4,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 314,
                "end": 376,
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 315,
                  "end": 366,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 315,
                    "end": 316,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 319,
                    "end": 366,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 319,
                      "end": 358,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 319,
                        "end": 348,
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 320,
                          "end": 337,
                          "operator": "|",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 321,
                            "end": 332,
                            "operator": "/",
                            "left": {
                              "type": "Identifier",
                              "start": 321,
                              "end": 322,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 325,
                              "end": 332,
                              "raw": "0x10000",
                              "value": 65536,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 336,
                            "end": 337,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 341,
                          "end": 348,
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 341,
                            "end": 345,
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "start": 341,
                              "end": 342,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 343,
                              "end": 345,
                              "decorators": [],
                              "name": "a0",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 346,
                            "end": 348,
                            "decorators": [],
                            "name": "a4",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 351,
                        "end": 358,
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 351,
                          "end": 355,
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "start": 351,
                            "end": 352,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 353,
                            "end": 355,
                            "decorators": [],
                            "name": "a1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 356,
                          "end": 358,
                          "decorators": [],
                          "name": "a3",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 361,
                      "end": 366,
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "start": 361,
                        "end": 363,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 364,
                        "end": 366,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 370,
                  "end": 376,
                  "raw": "0xFFFF",
                  "value": 65535,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 382,
            "end": 454,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 382,
              "end": 453,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 382,
                "end": 386,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 383,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 384,
                  "end": 385,
                  "raw": "5",
                  "value": 5,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 389,
                "end": 453,
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 390,
                  "end": 443,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 391,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 394,
                    "end": 443,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 394,
                      "end": 433,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 394,
                        "end": 423,
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 395,
                          "end": 412,
                          "operator": "|",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 396,
                            "end": 407,
                            "operator": "/",
                            "left": {
                              "type": "Identifier",
                              "start": 396,
                              "end": 397,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 400,
                              "end": 407,
                              "raw": "0x10000",
                              "value": 65536,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 411,
                            "end": 412,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 416,
                          "end": 423,
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 416,
                            "end": 420,
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "start": 416,
                              "end": 417,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 418,
                              "end": 420,
                              "decorators": [],
                              "name": "a0",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 421,
                            "end": 423,
                            "decorators": [],
                            "name": "a5",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 426,
                        "end": 433,
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 426,
                          "end": 430,
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "start": 426,
                            "end": 427,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 428,
                            "end": 430,
                            "decorators": [],
                            "name": "a1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 431,
                          "end": 433,
                          "decorators": [],
                          "name": "a4",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 436,
                      "end": 443,
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 436,
                        "end": 440,
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "start": 436,
                          "end": 437,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 438,
                          "end": 440,
                          "decorators": [],
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 441,
                        "end": 443,
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 447,
                  "end": 453,
                  "raw": "0xFFFF",
                  "value": 65535,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 459,
            "end": 539,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 459,
              "end": 538,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 459,
                "end": 463,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 460,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 461,
                  "end": 462,
                  "raw": "6",
                  "value": 6,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 466,
                "end": 538,
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 467,
                  "end": 528,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 468,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 471,
                    "end": 528,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 471,
                      "end": 520,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 471,
                        "end": 510,
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 471,
                          "end": 500,
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 472,
                            "end": 489,
                            "operator": "|",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 473,
                              "end": 484,
                              "operator": "/",
                              "left": {
                                "type": "Identifier",
                                "start": 473,
                                "end": 474,
                                "decorators": [],
                                "name": "v",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 477,
                                "end": 484,
                                "raw": "0x10000",
                                "value": 65536,
                                "regex": null,
                                "bigint": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 488,
                              "end": 489,
                              "raw": "0",
                              "value": 0,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "start": 493,
                            "end": 500,
                            "operator": "*",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 493,
                              "end": 497,
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "start": 493,
                                "end": 494,
                                "raw": "2",
                                "value": 2,
                                "regex": null,
                                "bigint": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 495,
                                "end": 497,
                                "decorators": [],
                                "name": "a0",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 498,
                              "end": 500,
                              "decorators": [],
                              "name": "a6",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 503,
                          "end": 510,
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 503,
                            "end": 507,
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "start": 503,
                              "end": 504,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 505,
                              "end": 507,
                              "decorators": [],
                              "name": "a1",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 508,
                            "end": 510,
                            "decorators": [],
                            "name": "a5",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 513,
                        "end": 520,
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 513,
                          "end": 517,
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "start": 513,
                            "end": 514,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 515,
                            "end": 517,
                            "decorators": [],
                            "name": "a2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 518,
                          "end": 520,
                          "decorators": [],
                          "name": "a4",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 523,
                      "end": 528,
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 525,
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 526,
                        "end": 528,
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 532,
                  "end": 538,
                  "raw": "0xFFFF",
                  "value": 65535,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 544,
            "end": 626,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 544,
              "end": 625,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 544,
                "end": 548,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 544,
                  "end": 545,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 546,
                  "end": 547,
                  "raw": "7",
                  "value": 7,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 551,
                "end": 625,
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 552,
                  "end": 615,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 553,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 556,
                    "end": 615,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 556,
                      "end": 605,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 556,
                        "end": 595,
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 556,
                          "end": 585,
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 557,
                            "end": 574,
                            "operator": "|",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 558,
                              "end": 569,
                              "operator": "/",
                              "left": {
                                "type": "Identifier",
                                "start": 558,
                                "end": 559,
                                "decorators": [],
                                "name": "v",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 562,
                                "end": 569,
                                "raw": "0x10000",
                                "value": 65536,
                                "regex": null,
                                "bigint": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 573,
                              "end": 574,
                              "raw": "0",
                              "value": 0,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "start": 578,
                            "end": 585,
                            "operator": "*",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 578,
                              "end": 582,
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "start": 578,
                                "end": 579,
                                "raw": "2",
                                "value": 2,
                                "regex": null,
                                "bigint": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 580,
                                "end": 582,
                                "decorators": [],
                                "name": "a0",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 583,
                              "end": 585,
                              "decorators": [],
                              "name": "a7",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 588,
                          "end": 595,
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 588,
                            "end": 592,
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "start": 588,
                              "end": 589,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 590,
                              "end": 592,
                              "decorators": [],
                              "name": "a1",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 593,
                            "end": 595,
                            "decorators": [],
                            "name": "a6",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 598,
                        "end": 605,
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 598,
                          "end": 602,
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "start": 598,
                            "end": 599,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 600,
                            "end": 602,
                            "decorators": [],
                            "name": "a2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 603,
                          "end": 605,
                          "decorators": [],
                          "name": "a5",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 608,
                      "end": 615,
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 608,
                        "end": 612,
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "start": 608,
                          "end": 609,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 610,
                          "end": 612,
                          "decorators": [],
                          "name": "a3",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 613,
                        "end": 615,
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 619,
                  "end": 625,
                  "raw": "0xFFFF",
                  "value": 65535,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 631,
            "end": 711,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 631,
              "end": 710,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 631,
                "end": 635,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 631,
                  "end": 632,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 633,
                  "end": 634,
                  "raw": "8",
                  "value": 8,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 638,
                "end": 710,
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 639,
                  "end": 700,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 639,
                    "end": 640,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 643,
                    "end": 700,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 643,
                      "end": 692,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 643,
                        "end": 682,
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 643,
                          "end": 672,
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 644,
                            "end": 661,
                            "operator": "|",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 645,
                              "end": 656,
                              "operator": "/",
                              "left": {
                                "type": "Identifier",
                                "start": 645,
                                "end": 646,
                                "decorators": [],
                                "name": "v",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 649,
                                "end": 656,
                                "raw": "0x10000",
                                "value": 65536,
                                "regex": null,
                                "bigint": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 660,
                              "end": 661,
                              "raw": "0",
                              "value": 0,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "start": 665,
                            "end": 672,
                            "operator": "*",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 665,
                              "end": 669,
                              "operator": "*",
                              "left": {
                                "type": "Literal",
                                "start": 665,
                                "end": 666,
                                "raw": "2",
                                "value": 2,
                                "regex": null,
                                "bigint": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 667,
                                "end": 669,
                                "decorators": [],
                                "name": "a1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 670,
                              "end": 672,
                              "decorators": [],
                              "name": "a7",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 675,
                          "end": 682,
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 675,
                            "end": 679,
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "start": 675,
                              "end": 676,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 677,
                              "end": 679,
                              "decorators": [],
                              "name": "a2",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 680,
                            "end": 682,
                            "decorators": [],
                            "name": "a6",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 685,
                        "end": 692,
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 685,
                          "end": 689,
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "start": 685,
                            "end": 686,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 687,
                            "end": 689,
                            "decorators": [],
                            "name": "a3",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 690,
                          "end": 692,
                          "decorators": [],
                          "name": "a5",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 695,
                      "end": 700,
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "start": 695,
                        "end": 697,
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 698,
                        "end": 700,
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 704,
                  "end": 710,
                  "raw": "0xFFFF",
                  "value": 65535,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 716,
            "end": 788,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 716,
              "end": 787,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 716,
                "end": 720,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 716,
                  "end": 717,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 718,
                  "end": 719,
                  "raw": "9",
                  "value": 9,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 723,
                "end": 787,
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 724,
                  "end": 777,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 724,
                    "end": 725,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 728,
                    "end": 777,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 728,
                      "end": 767,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 728,
                        "end": 757,
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 729,
                          "end": 746,
                          "operator": "|",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 730,
                            "end": 741,
                            "operator": "/",
                            "left": {
                              "type": "Identifier",
                              "start": 730,
                              "end": 731,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 734,
                              "end": 741,
                              "raw": "0x10000",
                              "value": 65536,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 745,
                            "end": 746,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 750,
                          "end": 757,
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 750,
                            "end": 754,
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "start": 750,
                              "end": 751,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 752,
                              "end": 754,
                              "decorators": [],
                              "name": "a2",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 755,
                            "end": 757,
                            "decorators": [],
                            "name": "a7",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 760,
                        "end": 767,
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 760,
                          "end": 764,
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "start": 760,
                            "end": 761,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 762,
                            "end": 764,
                            "decorators": [],
                            "name": "a3",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 765,
                          "end": 767,
                          "decorators": [],
                          "name": "a6",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 770,
                      "end": 777,
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 770,
                        "end": 774,
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "start": 770,
                          "end": 771,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 772,
                          "end": 774,
                          "decorators": [],
                          "name": "a4",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 775,
                        "end": 777,
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 781,
                  "end": 787,
                  "raw": "0xFFFF",
                  "value": 65535,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 793,
            "end": 864,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 793,
              "end": 863,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 793,
                "end": 798,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 793,
                  "end": 794,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 795,
                  "end": 797,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 801,
                "end": 863,
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 802,
                  "end": 853,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 802,
                    "end": 803,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 806,
                    "end": 853,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 806,
                      "end": 845,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 806,
                        "end": 835,
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 807,
                          "end": 824,
                          "operator": "|",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 808,
                            "end": 819,
                            "operator": "/",
                            "left": {
                              "type": "Identifier",
                              "start": 808,
                              "end": 809,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 812,
                              "end": 819,
                              "raw": "0x10000",
                              "value": 65536,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 823,
                            "end": 824,
                            "raw": "0",
                            "value": 0,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "start": 828,
                          "end": 835,
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 828,
                            "end": 832,
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "start": 828,
                              "end": 829,
                              "raw": "2",
                              "value": 2,
                              "regex": null,
                              "bigint": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 830,
                              "end": 832,
                              "decorators": [],
                              "name": "a3",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 833,
                            "end": 835,
                            "decorators": [],
                            "name": "a7",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 838,
                        "end": 845,
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 838,
                          "end": 842,
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "start": 838,
                            "end": 839,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 840,
                            "end": 842,
                            "decorators": [],
                            "name": "a4",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 843,
                          "end": 845,
                          "decorators": [],
                          "name": "a6",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 848,
                      "end": 853,
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "start": 848,
                        "end": 850,
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 851,
                        "end": 853,
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 857,
                  "end": 863,
                  "raw": "0xFFFF",
                  "value": 65535,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 869,
            "end": 932,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 869,
              "end": 931,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 869,
                "end": 874,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 869,
                  "end": 870,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 871,
                  "end": 873,
                  "raw": "11",
                  "value": 11,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 877,
                "end": 931,
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 878,
                  "end": 921,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 878,
                    "end": 879,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 882,
                    "end": 921,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 882,
                      "end": 911,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 883,
                        "end": 900,
                        "operator": "|",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 884,
                          "end": 895,
                          "operator": "/",
                          "left": {
                            "type": "Identifier",
                            "start": 884,
                            "end": 885,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 888,
                            "end": 895,
                            "raw": "0x10000",
                            "value": 65536,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 899,
                          "end": 900,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 904,
                        "end": 911,
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 904,
                          "end": 908,
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "start": 904,
                            "end": 905,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 906,
                            "end": 908,
                            "decorators": [],
                            "name": "a4",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 909,
                          "end": 911,
                          "decorators": [],
                          "name": "a7",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 914,
                      "end": 921,
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 914,
                        "end": 918,
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "start": 914,
                          "end": 915,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 916,
                          "end": 918,
                          "decorators": [],
                          "name": "a5",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 919,
                        "end": 921,
                        "decorators": [],
                        "name": "a6",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 925,
                  "end": 931,
                  "raw": "0xFFFF",
                  "value": 65535,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 937,
            "end": 998,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 937,
              "end": 997,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 937,
                "end": 942,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 937,
                  "end": 938,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 939,
                  "end": 941,
                  "raw": "12",
                  "value": 12,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 945,
                "end": 997,
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 946,
                  "end": 987,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 946,
                    "end": 947,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 950,
                    "end": 987,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 950,
                      "end": 979,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 951,
                        "end": 968,
                        "operator": "|",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 952,
                          "end": 963,
                          "operator": "/",
                          "left": {
                            "type": "Identifier",
                            "start": 952,
                            "end": 953,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 956,
                            "end": 963,
                            "raw": "0x10000",
                            "value": 65536,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 967,
                          "end": 968,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 972,
                        "end": 979,
                        "operator": "*",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 972,
                          "end": 976,
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "start": 972,
                            "end": 973,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 974,
                            "end": 976,
                            "decorators": [],
                            "name": "a5",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 977,
                          "end": 979,
                          "decorators": [],
                          "name": "a7",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 982,
                      "end": 987,
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "start": 982,
                        "end": 984,
                        "decorators": [],
                        "name": "a6",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 985,
                        "end": 987,
                        "decorators": [],
                        "name": "a6",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 991,
                  "end": 997,
                  "raw": "0xFFFF",
                  "value": 65535,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1003,
            "end": 1056,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1003,
              "end": 1055,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1003,
                "end": 1008,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1003,
                  "end": 1004,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 1005,
                  "end": 1007,
                  "raw": "13",
                  "value": 13,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 1011,
                "end": 1055,
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1012,
                  "end": 1045,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1012,
                    "end": 1013,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 1016,
                    "end": 1045,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 1017,
                      "end": 1034,
                      "operator": "|",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1018,
                        "end": 1029,
                        "operator": "/",
                        "left": {
                          "type": "Identifier",
                          "start": 1018,
                          "end": 1019,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1022,
                          "end": 1029,
                          "raw": "0x10000",
                          "value": 65536,
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1033,
                        "end": 1034,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 1038,
                      "end": 1045,
                      "operator": "*",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1038,
                        "end": 1042,
                        "operator": "*",
                        "left": {
                          "type": "Literal",
                          "start": 1038,
                          "end": 1039,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1040,
                          "end": 1042,
                          "decorators": [],
                          "name": "a6",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1043,
                        "end": 1045,
                        "decorators": [],
                        "name": "a7",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 1049,
                  "end": 1055,
                  "raw": "0xFFFF",
                  "value": 65535,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1061,
            "end": 1112,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1061,
              "end": 1111,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1061,
                "end": 1066,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1061,
                  "end": 1062,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 1063,
                  "end": 1065,
                  "raw": "14",
                  "value": 14,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 1069,
                "end": 1111,
                "operator": "&",
                "left": {
                  "type": "AssignmentExpression",
                  "start": 1070,
                  "end": 1101,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 1070,
                    "end": 1071,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 1074,
                    "end": 1101,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 1075,
                      "end": 1092,
                      "operator": "|",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1076,
                        "end": 1087,
                        "operator": "/",
                        "left": {
                          "type": "Identifier",
                          "start": 1076,
                          "end": 1077,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 1080,
                          "end": 1087,
                          "raw": "0x10000",
                          "value": 65536,
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1091,
                        "end": 1092,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 1096,
                      "end": 1101,
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "start": 1096,
                        "end": 1098,
                        "decorators": [],
                        "name": "a7",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1099,
                        "end": 1101,
                        "decorators": [],
                        "name": "a7",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 1105,
                  "end": 1111,
                  "raw": "0xFFFF",
                  "value": 65535,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1117,
            "end": 1145,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1117,
              "end": 1144,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1117,
                "end": 1122,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1117,
                  "end": 1118,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 1119,
                  "end": 1121,
                  "raw": "15",
                  "value": 15,
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 1126,
                "end": 1143,
                "operator": "|",
                "left": {
                  "type": "BinaryExpression",
                  "start": 1127,
                  "end": 1138,
                  "operator": "/",
                  "left": {
                    "type": "Identifier",
                    "start": 1127,
                    "end": 1128,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1131,
                    "end": 1138,
                    "raw": "0x10000",
                    "value": 65536,
                    "regex": null,
                    "bigint": null
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 1142,
                  "end": 1143,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1150,
            "end": 1159,
            "argument": {
              "type": "Identifier",
              "start": 1157,
              "end": 1158,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 19,
        "decorators": [],
        "name": "c255lsqr8h",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 22,
          "decorators": [],
          "name": "a7",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 24,
          "end": 26,
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 28,
          "end": 30,
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 32,
          "end": 34,
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 36,
          "end": 38,
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 40,
          "end": 42,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 44,
          "end": 46,
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 48,
          "end": 50,
          "decorators": [],
          "name": "a0",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
