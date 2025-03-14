__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    703
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 7,
                  "line": 1
                }
              },
              "range": [
                7,
                15
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  9,
                  15
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 1
                  },
                  "start": {
                    "column": 9,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              18,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          },
          "range": [
            4,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        0,
        21
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 4
                      },
                      "start": {
                        "column": 11,
                        "line": 4
                      }
                    },
                    "range": [
                      107,
                      115
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        109,
                        115
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 4
                        },
                        "start": {
                          "column": 13,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    104,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    118,
                    119
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 4
                    },
                    "start": {
                      "column": 22,
                      "line": 4
                    }
                  }
                },
                "range": [
                  104,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              100,
              120
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                132,
                135
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              125,
              136
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          47,
          151
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 24,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          32,
          34
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              36,
              39
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              42,
              45
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          },
          "range": [
            36,
            45
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 3
            },
            "start": {
              "column": 13,
              "line": 3
            }
          }
        }
      ],
      "range": [
        23,
        151
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 9
                      },
                      "start": {
                        "column": 11,
                        "line": 9
                      }
                    },
                    "range": [
                      252,
                      260
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        254,
                        260
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 9
                        },
                        "start": {
                          "column": 13,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    249,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    263,
                    264
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 9
                    },
                    "start": {
                      "column": 22,
                      "line": 9
                    }
                  }
                },
                "range": [
                  249,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              245,
              265
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  277,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "range": [
                277,
                282
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              270,
              283
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          192,
          298
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 39,
            "line": 8
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          162,
          164
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              166,
              169
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 13,
                "line": 8
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                187,
                190
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 8
                },
                "start": {
                  "column": 34,
                  "line": 8
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "range": [
                    173,
                    176
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 8
                    },
                    "start": {
                      "column": 20,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    179,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 8
                    },
                    "start": {
                      "column": 26,
                      "line": 8
                    }
                  }
                },
                "range": [
                  173,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              172,
              190
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 8
              },
              "start": {
                "column": 19,
                "line": 8
              }
            }
          },
          "range": [
            166,
            190
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 8
            },
            "start": {
              "column": 13,
              "line": 8
            }
          }
        }
      ],
      "range": [
        153,
        298
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                390,
                393
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "range": [
              383,
              394
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          333,
          396
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 33,
            "line": 13
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          309,
          311
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              313,
              316
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 13
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              319,
              322
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 13
              },
              "start": {
                "column": 19,
                "line": 13
              }
            }
          },
          "range": [
            313,
            322
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 13
            },
            "start": {
              "column": 13,
              "line": 13
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              324,
              327
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 13
              },
              "start": {
                "column": 24,
                "line": 13
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              330,
              331
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 13
              },
              "start": {
                "column": 30,
                "line": 13
              }
            }
          },
          "range": [
            324,
            331
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 13
            },
            "start": {
              "column": 24,
              "line": 13
            }
          }
        }
      ],
      "range": [
        300,
        396
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                440,
                443
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "range": [
              433,
              443
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          427,
          445
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 29,
            "line": 17
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          407,
          409
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            411,
            414
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 17
            },
            "start": {
              "column": 13,
              "line": 17
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              416,
              419
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 17
              },
              "start": {
                "column": 18,
                "line": 17
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              422,
              425
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 17
              },
              "start": {
                "column": 24,
                "line": 17
              }
            }
          },
          "range": [
            416,
            425
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 17
            },
            "start": {
              "column": 18,
              "line": 17
            }
          }
        }
      ],
      "range": [
        398,
        445
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                480,
                481
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "range": [
              473,
              481
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          467,
          483
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 20,
            "line": 21
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          456,
          458
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              460,
              461
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 21
              },
              "start": {
                "column": 13,
                "line": 21
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              464,
              465
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 21
              },
              "start": {
                "column": 17,
                "line": 21
              }
            }
          },
          "range": [
            460,
            465
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 21
            },
            "start": {
              "column": 13,
              "line": 21
            }
          }
        }
      ],
      "range": [
        447,
        483
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "async",
              "optional": false,
              "range": [
                526,
                531
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 26
                },
                "start": {
                  "column": 11,
                  "line": 26
                }
              }
            },
            "range": [
              519,
              531
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          513,
          533
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 28,
            "line": 25
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          494,
          496
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 25
          },
          "start": {
            "column": 9,
            "line": 25
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "async",
            "optional": false,
            "range": [
              498,
              503
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 25
              },
              "start": {
                "column": 13,
                "line": 25
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "async",
            "optional": false,
            "range": [
              506,
              511
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 25
              },
              "start": {
                "column": 21,
                "line": 25
              }
            }
          },
          "range": [
            498,
            511
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 25
            },
            "start": {
              "column": 13,
              "line": 25
            }
          }
        }
      ],
      "range": [
        485,
        533
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 30
                      },
                      "start": {
                        "column": 11,
                        "line": 30
                      }
                    },
                    "range": [
                      581,
                      589
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        583,
                        589
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 30
                        },
                        "start": {
                          "column": 13,
                          "line": 30
                        }
                      }
                    }
                  },
                  "range": [
                    578,
                    589
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    592,
                    593
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 30
                    },
                    "start": {
                      "column": 22,
                      "line": 30
                    }
                  }
                },
                "range": [
                  578,
                  593
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              574,
              594
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "range": [
          568,
          596
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 33,
            "line": 29
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "range": [
          544,
          546
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 29
          },
          "start": {
            "column": 9,
            "line": 29
          }
        }
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  549,
                  552
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 29
                  },
                  "start": {
                    "column": 14,
                    "line": 29
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  555,
                  558
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 29
                  },
                  "start": {
                    "column": 20,
                    "line": 29
                  }
                }
              },
              "range": [
                548,
                558
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 29
                },
                "start": {
                  "column": 13,
                  "line": 29
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 29
              },
              "start": {
                "column": 24,
                "line": 29
              }
            },
            "range": [
              559,
              566
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  561,
                  564
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 29
                  },
                  "start": {
                    "column": 26,
                    "line": 29
                  }
                }
              },
              "range": [
                561,
                566
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 29
                },
                "start": {
                  "column": 26,
                  "line": 29
                }
              }
            }
          },
          "range": [
            547,
            566
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 29
            },
            "start": {
              "column": 12,
              "line": 29
            }
          }
        }
      ],
      "range": [
        535,
        596
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          608,
          659
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                614,
                625
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                625,
                657
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  655,
                  657
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 34
                  },
                  "start": {
                    "column": 45,
                    "line": 34
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        633,
                        634
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 34
                        },
                        "start": {
                          "column": 23,
                          "line": 34
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        637,
                        639
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 34
                        },
                        "start": {
                          "column": 27,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      633,
                      639
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 34
                      },
                      "start": {
                        "column": 23,
                        "line": 34
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    626,
                    639
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 34
                    },
                    "start": {
                      "column": 16,
                      "line": 34
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        648,
                        649
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 34
                        },
                        "start": {
                          "column": 38,
                          "line": 34
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        652,
                        653
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 34
                        },
                        "start": {
                          "column": 42,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      648,
                      653
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 34
                      },
                      "start": {
                        "column": 38,
                        "line": 34
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    641,
                    653
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 34
                    },
                    "start": {
                      "column": 31,
                      "line": 34
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 34
                },
                "start": {
                  "column": 15,
                  "line": 34
                }
              }
            },
            "range": [
              614,
              657
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 10,
            "line": 33
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          604,
          607
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 33
          },
          "start": {
            "column": 6,
            "line": 33
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        598,
        659
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          699,
          702
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 37
          },
          "start": {
            "column": 38,
            "line": 37
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "range": [
          670,
          672
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 37
          },
          "start": {
            "column": 9,
            "line": 37
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 37
              },
              "start": {
                "column": 16,
                "line": 37
              }
            },
            "range": [
              677,
              685
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                679,
                685
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 37
                },
                "start": {
                  "column": 18,
                  "line": 37
                }
              }
            }
          },
          "range": [
            673,
            685
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 37
            },
            "start": {
              "column": 12,
              "line": 37
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "range": [
              687,
              690
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 37
              },
              "start": {
                "column": 26,
                "line": 37
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "range": [
              693,
              697
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 37
              },
              "start": {
                "column": 32,
                "line": 37
              }
            }
          },
          "range": [
            687,
            697
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 37
            },
            "start": {
              "column": 26,
              "line": 37
            }
          }
        }
      ],
      "range": [
        661,
        702
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
